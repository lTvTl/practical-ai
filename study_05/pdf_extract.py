"""PDF 바이트에서 텍스트를 추출한다(pypdf, 메모리 처리 전용).

- 디스크에 쓰지 않고 네트워크를 사용하지 않는다.
- 검사 순서: 빈 파일 -> %PDF- 시그니처 -> 구조/암호화 -> 쪽수 -> (쪽별 추출) -> 글자 수.
  쪽수는 어떤 쪽도 추출하기 전에 확인해 101쪽 이상 문서의 불필요한 추출을 피한다.
- 과도한 자원 사용 방어: 추출 시간 예산, 수집 글자 수 상한, pypdf 자체의 압축 해제 크기 제한(LimitReachedError 등).
  한 쪽의 추출 자체가 멈추는 경우까지 강제로 중단하지는 못한다(스레드/프로세스 분리는 하지 않음).
"""
import io
import re
import time
from dataclasses import dataclass

from pypdf import PdfReader

from pdf_config import MAX_PAGES

SIGNATURE = b"%PDF-"
SIGNATURE_WINDOW = 1024          # 시그니처를 찾는 앞부분 바이트 수
MIN_TEXT_CHARS = 20              # 공백 제외 글자 수가 이보다 적으면 스캔본으로 본다
MAX_EXTRACT_CHARS = 2_000_000    # 메모리 보호용 수집 글자 수 상한(요약 처리 상한 6만 자보다 충분히 큼)
EXTRACT_TIME_BUDGET_SEC = 30.0   # 추출 단계 시간 예산(PRD 6.2: 100쪽 기준 10초 목표, 여유 포함)

# PRD 7.4절 오류 문구(그대로 사용): code -> (status, message)
PDF_ERRORS = {
    "empty_file": (400, "파일이 비어 있어요. 다른 PDF 파일을 올려 주세요."),
    "not_pdf": (415, "PDF 파일이 아니에요. 확장자가 .pdf여도 내용이 PDF가 아니면 읽을 수 없어요."),
    "encrypted": (422, "암호가 걸린 PDF예요. 암호를 해제한 파일을 올려 주세요."),
    "corrupt_pdf": (422, "PDF 파일이 손상되어 읽을 수 없어요. 다른 파일을 올리거나 다시 저장해 주세요."),
    "no_pages": (422, "문서에 읽을 수 있는 쪽이 없어요. 다른 PDF를 올려 주세요."),
    "too_many_pages": (422, "문서가 너무 길어요. 100쪽 이하로 나누어 올려 주세요."),
    "no_text": (422, "이미지로만 된 문서(스캔본)로 보여요. 글자를 읽을 수 없어 요약할 수 없어요. 글자 선택이 가능한 PDF로 올려 주세요."),
    "timeout": (504, "시간이 너무 오래 걸려 중단했어요. 문서를 줄이거나 요약 길이를 짧게 해서 다시 시도해 주세요."),
}


class PdfError(Exception):
    """사용자 입력 문제로 인한 처리 실패. 상태코드, code, 쉬운 한국어 메시지를 가진다."""

    def __init__(self, status: int, code: str, message: str):
        super().__init__(message)
        self.status = status
        self.code = code
        self.message = message


def _error(code: str) -> PdfError:
    status, message = PDF_ERRORS[code]
    return PdfError(status, code, message)


@dataclass
class ExtractResult:
    text: str           # 공백 정리된 전체 텍스트
    pages: int          # 전체 페이지 수 (>= 1)
    char_count: int     # len(text)
    empty_pages: int    # 추출 글자가 0인 페이지 수


_INLINE_SPACE = re.compile(r"[ \t\x0b\x0c ]+")
_CONTROL = re.compile(r"[\x00-\x08\x0e-\x1f\x7f]")
_AROUND_NEWLINE = re.compile(r" *\n *")
_MANY_NEWLINES = re.compile(r"\n{3,}")
_ANY_WHITESPACE = re.compile(r"\s")


def normalize_text(raw: str) -> str:
    """제어 문자 제거, 연속 공백 1칸 축약, 3줄 이상 개행을 2줄로 축약, 앞뒤 공백 제거."""
    text = raw.replace("\r\n", "\n").replace("\r", "\n")
    text = _INLINE_SPACE.sub(" ", text)
    text = _CONTROL.sub("", text)
    text = _AROUND_NEWLINE.sub("\n", text)
    text = _MANY_NEWLINES.sub("\n\n", text)
    return text.strip()


def has_pdf_signature(data: bytes) -> bool:
    """내용 기준 판별: 첫 1024바이트 안에 '%PDF-' 가 완전히 들어 있는가(확장자·Content-Type 무시)."""
    return SIGNATURE in data[:SIGNATURE_WINDOW]


def _open_reader(data: bytes) -> PdfReader:
    try:
        reader = PdfReader(io.BytesIO(data))
    except Exception:  # pypdf 의 어떤 구조 오류든 사용자에게는 '손상'으로 안내한다
        raise _error("corrupt_pdf") from None
    if reader.is_encrypted:
        try:
            opened = reader.decrypt("")   # 빈 암호로 열리는 PDF 는 정상 처리
        except Exception:                 # 지원하지 않는 암호화 방식 포함
            raise _error("encrypted") from None
        if not opened:
            raise _error("encrypted")
    return reader


def extract_text(data: bytes, time_budget_sec: float | None = None) -> ExtractResult:
    """PDF 바이트에서 텍스트를 추출한다. 문제가 있으면 PdfError."""
    if not data:
        raise _error("empty_file")
    if not has_pdf_signature(data):
        raise _error("not_pdf")

    budget = EXTRACT_TIME_BUDGET_SEC if time_budget_sec is None else time_budget_sec
    deadline = time.monotonic() + budget

    reader = _open_reader(data)
    try:
        page_count = len(reader.pages)
    except Exception:
        raise _error("corrupt_pdf") from None
    if page_count == 0:
        raise _error("no_pages")
    if page_count > MAX_PAGES:
        raise _error("too_many_pages")

    parts: list[str] = []
    collected = 0
    empty_pages = 0
    failed_pages = 0
    processed = 0
    for index in range(page_count):
        if time.monotonic() >= deadline:
            raise _error("timeout")
        processed += 1
        try:
            page_text = normalize_text(reader.pages[index].extract_text() or "")
        except Exception:  # 압축 폭탄(LimitReachedError) 등 쪽 단위 실패는 빈 쪽으로 취급
            failed_pages += 1
            page_text = ""
        if not page_text:
            empty_pages += 1
            continue
        parts.append(page_text)
        collected += len(page_text) + 2
        if collected > MAX_EXTRACT_CHARS:
            break

    if failed_pages == processed:
        raise _error("corrupt_pdf")

    text = normalize_text("\n\n".join(parts))
    if len(text) > MAX_EXTRACT_CHARS:
        text = text[:MAX_EXTRACT_CHARS].rstrip()
    if len(_ANY_WHITESPACE.sub("", text)) < MIN_TEXT_CHARS:
        raise _error("no_text")
    return ExtractResult(text=text, pages=page_count, char_count=len(text), empty_pages=empty_pages)
