"""PDF 문서 요약 백엔드 (Flask, 127.0.0.1:5001).

- GET  /              : 같은 폴더의 index_pdf.html 서빙(정적 라우트는 꺼 두어 다른 파일은 모두 404)
- GET  /api/health    : 서버 상태, 제한값
- POST /api/summarize : PDF 업로드(multipart: file, length) -> 텍스트 추출 -> AI 요약

업로드 파일과 추출 텍스트는 메모리에서만 처리하며 디스크에 쓰지 않는다. API 키는 .env 에서 서버만 읽고
응답·로그에 싣지 않는다. 검증 순서(PRD 7.4): 크기 -> 파일 없음/빈 파일 -> length -> 시그니처
-> 파싱·암호화·쪽수 -> 텍스트 없음 -> 키 설정 -> AI 호출.
"""
import io
import json
import logging
import threading
import time
import unicodedata
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, Request, Response, request, send_file
from werkzeug.exceptions import HTTPException

import pdf_config
from pdf_config import MAX_PAGES, TOTAL_BUDGET_SEC, api_key_configured, get_model
from pdf_extract import PDF_ERRORS, ExtractResult, PdfError, extract_text, has_pdf_signature  # noqa: F401
from summarizer_pdf import SummarizeError, summarize_text

BASE_DIR = Path(__file__).resolve().parent
INDEX_FILE = BASE_DIR / "index_pdf.html"

HOST = "127.0.0.1"
PORT = 5001
ALLOWED_ORIGINS = frozenset({"null", "http://127.0.0.1:5001"})   # null = file:// 로 연 index_pdf.html

MAX_FILE_MB = 10
MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024
MULTIPART_OVERHEAD_BYTES = 1024 * 1024     # 멀티파트 경계·필드 여유. 실제 파일 크기는 본문을 읽은 뒤 정확히 판정한다.
MAX_CONCURRENT_SUMMARIES = 2
EMPTY_PAGE_WARN_PERCENT = 30
MAX_FILENAME_CHARS = 255
FALLBACK_FILENAME = "문서.pdf"
VALID_LENGTHS = ("short", "medium", "long")
DEFAULT_LENGTH = "medium"

# PRD 7.4절 오류표: code -> (status, message). PDF 관련 코드는 pdf_extract 와 같은 표를 공유한다.
ERRORS = {
    **PDF_ERRORS,
    "no_file": (400, "PDF 파일을 먼저 선택해 주세요."),
    "invalid_length": (400, "요약 길이는 짧게, 보통, 자세히 중에서 골라 주세요."),
    "not_found": (404, "요청한 주소를 찾을 수 없어요."),
    "method_not_allowed": (405, "지원하지 않는 요청 방식이에요."),
    "file_too_large": (413, f"파일이 너무 커요. {MAX_FILE_MB}MB 이하의 PDF를 올려 주세요."),
    "busy": (429, "지금 다른 요약이 진행 중이에요. 잠시 후 다시 시도해 주세요."),
    "ai_rate_limited": (429, "AI 서비스가 지금 많이 바빠요. 1~2분 뒤에 다시 시도해 주세요."),
    "server_config": (500, "서버 설정이 아직 끝나지 않았어요. 관리자에게 AI 키 설정을 확인해 달라고 요청해 주세요."),
    "internal": (500, "서버에서 문제가 생겼어요. 잠시 후 다시 시도해 주세요."),
    "ai_failed": (502, "AI 서비스에 연결하지 못했어요. 잠시 후 다시 시도해 주세요."),
    "ai_bad_response": (502, "AI가 이해하기 어려운 답을 보냈어요. 다시 시도해 주세요."),
}
SUMMARIZE_ERROR_CODES = ("ai_rate_limited", "server_config", "ai_failed", "ai_bad_response", "timeout")
HTTP_STATUS_TO_CODE = {400: "no_file", 404: "not_found", 405: "method_not_allowed", 413: "file_too_large"}

logger = logging.getLogger("pdf_summarizer")


class InMemoryRequest(Request):
    """업로드 파트를 항상 메모리(BytesIO)에 둔다. 기본 구현은 500KB 초과 시 디스크 임시 파일로 넘기기 때문."""

    def _get_file_stream(self, total_content_length, content_type, filename=None, content_length=None):
        return io.BytesIO()


app = Flask(__name__, static_folder=None)     # 정적 라우트 비활성화: /.env, /server_pdf.py 등은 404
app.request_class = InMemoryRequest
app.config["MAX_CONTENT_LENGTH"] = MAX_FILE_BYTES + MULTIPART_OVERHEAD_BYTES


# ---------------------------------------------------------------------------
# 응답/오류 헬퍼
# ---------------------------------------------------------------------------
def json_response(payload: dict, status: int = 200) -> Response:
    return Response(json.dumps(payload, ensure_ascii=False), status=status,
                    content_type="application/json; charset=utf-8")


def error_response(code: str) -> Response:
    status, message = ERRORS[code]
    return json_response({"error": message, "code": code}, status)


def pdf_error_response(err: PdfError) -> Response:
    return json_response({"error": err.message, "code": err.code}, err.status)


@app.errorhandler(HTTPException)
def handle_http_exception(exc: HTTPException):
    return error_response(HTTP_STATUS_TO_CODE.get(exc.code, "internal"))


@app.errorhandler(Exception)
def handle_unexpected_exception(exc: Exception):
    logger.error("unexpected error type=%s", type(exc).__name__)   # 메시지·스택·문서 내용은 남기지 않는다
    return error_response("internal")


# ---------------------------------------------------------------------------
# CORS (허용 Origin 정확 일치만 반사, 와일드카드 금지)
# ---------------------------------------------------------------------------
@app.after_request
def add_cors_headers(resp: Response) -> Response:
    resp.vary.add("Origin")
    origin = request.headers.get("Origin")
    if origin is not None and origin in ALLOWED_ORIGINS:
        resp.headers["Access-Control-Allow-Origin"] = origin
        if request.method == "OPTIONS":
            resp.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
            resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
            resp.headers["Access-Control-Max-Age"] = "600"
            if request.headers.get("Access-Control-Request-Private-Network", "").lower() == "true":
                resp.headers["Access-Control-Allow-Private-Network"] = "true"
    return resp


# ---------------------------------------------------------------------------
# 순수 함수
# ---------------------------------------------------------------------------
def sanitize_filename(raw: str) -> str:
    """표시용 파일명 정제: 경로 구분자 앞부분과 제어 문자(Cc/Cf 등)를 제거하고 255자로 제한한다. 저장하지 않는다."""
    name = raw.replace("\\", "/").rsplit("/", 1)[-1]
    name = "".join(ch for ch in name if unicodedata.category(ch)[0] != "C").strip()
    if name in ("", ".", ".."):
        return FALLBACK_FILENAME
    if len(name) > MAX_FILENAME_CHARS:
        stem, dot, ext = name.rpartition(".")
        if dot and len(ext) < 10:
            name = stem[: MAX_FILENAME_CHARS - len(ext) - 1] + "." + ext   # 확장자는 보존
        else:
            name = name[:MAX_FILENAME_CHARS]
    return name


def format_char_limit(chars: int) -> str:
    return f"{chars // 10000}만" if chars % 10000 == 0 else f"{chars:,}"


def build_warnings(extracted: ExtractResult, ai: dict) -> list[str]:
    warnings = []
    if extracted.empty_pages * 100 >= extracted.pages * EMPTY_PAGE_WARN_PERCENT:
        warnings.append("일부 쪽은 글자를 읽지 못했어요. 그 부분은 요약에 반영되지 않았을 수 있어요.")
    if ai["truncated"]:
        warnings.append(f"문서가 길어 앞부분 {format_char_limit(pdf_config.MAX_PROCESS_CHARS)} 자까지만 요약했어요.")
    if ai["partial"]:
        warnings.append("시간이 오래 걸려 일부만 요약했어요.")
    return warnings


class SlotLimiter:
    """동시 처리 수 제한(비차단). acquire 성공 시 반드시 release 해야 한다."""

    def __init__(self, limit: int):
        self._limit = limit
        self._active = 0
        self._lock = threading.Lock()

    def acquire(self) -> bool:
        with self._lock:
            if self._active >= self._limit:
                return False
            self._active += 1
            return True

    def release(self) -> None:
        with self._lock:
            self._active -= 1


summary_slots = SlotLimiter(MAX_CONCURRENT_SUMMARIES)


# ---------------------------------------------------------------------------
# 라우트
# ---------------------------------------------------------------------------
@app.get("/")
def index():
    if not INDEX_FILE.is_file():
        return error_response("not_found")
    return send_file(INDEX_FILE, mimetype="text/html", max_age=0)


@app.get("/api/health")
def health():
    return json_response({
        "status": "ok",
        "service": "pdf-summarizer",
        "model": get_model(),
        "ai_configured": api_key_configured(),
        "limits": {"max_file_mb": MAX_FILE_MB, "max_pages": MAX_PAGES, "max_process_chars": pdf_config.MAX_PROCESS_CHARS},
    })


@app.post("/api/summarize")
def summarize():
    started = time.monotonic()
    deadline = started + TOTAL_BUDGET_SEC

    upload = request.files.get("file")        # 프레임워크 한도 초과 시 여기서 413 핸들러로 간다
    data = upload.read(MAX_FILE_BYTES + 1) if upload is not None else b""
    if len(data) > MAX_FILE_BYTES:
        return error_response("file_too_large")
    if upload is None or not upload.filename:
        return error_response("no_file")
    if not data:
        return error_response("empty_file")

    length = request.form.get("length", DEFAULT_LENGTH)
    if length not in VALID_LENGTHS:
        return error_response("invalid_length")
    if not has_pdf_signature(data):
        return error_response("not_pdf")

    filename = sanitize_filename(upload.filename)
    if not summary_slots.acquire():
        return error_response("busy")
    try:
        extracted = extract_text(data)
        if not api_key_configured():
            return error_response("server_config")
        ai = summarize_text(extracted.text, length, deadline=deadline)
        body = {
            "filename": filename,
            "pages": extracted.pages,
            "char_count": extracted.char_count,
            "processed_chars": ai["processed_chars"],
            "length": length,
            "truncated": ai["truncated"],
            "partial": ai["partial"],
            "chunks": ai["chunks"],
            "summary": ai["summary"],
            "warnings": build_warnings(extracted, ai),
            "model": ai["model"],
            "elapsed_ms": int((time.monotonic() - started) * 1000),
        }
        logger.info("summarized file=%s bytes=%d pages=%d chars=%d ms=%d",
                    filename, len(data), extracted.pages, extracted.char_count, body["elapsed_ms"])
        return json_response(body)
    except PdfError as exc:
        logger.info("rejected file=%s bytes=%d code=%s", filename, len(data), exc.code)
        return pdf_error_response(exc)
    except SummarizeError as exc:
        code = getattr(exc, "code", None)
        logger.warning("summarize failed file=%s code=%s", filename, code)
        return error_response(code if code in SUMMARIZE_ERROR_CODES else "internal")
    except Exception as exc:
        logger.error("unexpected error file=%s type=%s", filename, type(exc).__name__)
        return error_response("internal")
    finally:
        summary_slots.release()


def main() -> None:
    load_dotenv(BASE_DIR / ".env")            # 값은 출력하지 않는다. 키 유무는 /api/health 로만 확인
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    app.run(host=HOST, port=PORT, debug=False, threaded=True)


if __name__ == "__main__":
    main()
