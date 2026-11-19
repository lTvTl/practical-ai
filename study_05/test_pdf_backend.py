"""PDF 요약 앱 백엔드(server_pdf.py, pdf_extract.py) 테스트.

- summarizer_pdf(ai-integration-specialist 담당)는 파일 유무와 무관하게 돌도록 가짜 모듈을 주입한 상태로
  server_pdf 를 import 한다. 실제 외부 API 호출은 하지 않는다(AI 경계 summarize_text 만 대체).
- 테스트용 PDF 는 이 파일의 코드가 바이트로 직접 만들거나 pypdf 로 생성한다(외부 파일 없음).
- 실행: python -m pytest test_pdf_backend.py -v
"""
import io
import logging
import sys
import threading
import time
import types
import zlib
from pathlib import Path

import pytest

# ---------------------------------------------------------------------------
# 가짜 summarizer_pdf 주입 -> server_pdf import -> sys.modules 원상 복구
# (복구하지 않으면 같은 pytest 세션의 test_pdf_summarizer.py 가 가짜 모듈을 import 하게 된다)
# ---------------------------------------------------------------------------
_fake_module = types.ModuleType("summarizer_pdf")


class FakeSummarizeError(Exception):
    def __init__(self, status, code, message):
        super().__init__(message)
        self.status = status
        self.code = code
        self.message = message


def _unused_summarize_text(text, length, deadline=None):  # 각 테스트가 monkeypatch 로 교체
    raise AssertionError("summarize_text 는 테스트에서 명시적으로 대체되어야 한다")


_fake_module.SummarizeError = FakeSummarizeError
_fake_module.summarize_text = _unused_summarize_text

_saved_modules = {name: sys.modules.get(name) for name in ("summarizer_pdf", "server_pdf", "pdf_extract")}
sys.modules["summarizer_pdf"] = _fake_module
sys.modules.pop("server_pdf", None)
try:
    import pdf_extract
    import server_pdf
finally:
    for _name, _mod in _saved_modules.items():
        if _name == "pdf_extract":
            continue  # pdf_extract 는 summarizer 와 무관하므로 그대로 둔다
        if _mod is None:
            sys.modules.pop(_name, None)
        else:
            sys.modules[_name] = _mod

from pypdf import PdfReader, PdfWriter  # noqa: E402

MB = 1024 * 1024
FAKE_KEY = "sk-or-v1-TESTKEY-not-a-real-secret-0123456789"

# PRD 7.4절 오류표(상태, code, 메시지) - 문구는 그대로여야 한다.
ERR = {
    "no_file": (400, "PDF 파일을 먼저 선택해 주세요."),
    "empty_file": (400, "파일이 비어 있어요. 다른 PDF 파일을 올려 주세요."),
    "invalid_length": (400, "요약 길이는 짧게, 보통, 자세히 중에서 골라 주세요."),
    "not_found": (404, "요청한 주소를 찾을 수 없어요."),
    "method_not_allowed": (405, "지원하지 않는 요청 방식이에요."),
    "file_too_large": (413, "파일이 너무 커요. 10MB 이하의 PDF를 올려 주세요."),
    "not_pdf": (415, "PDF 파일이 아니에요. 확장자가 .pdf여도 내용이 PDF가 아니면 읽을 수 없어요."),
    "encrypted": (422, "암호가 걸린 PDF예요. 암호를 해제한 파일을 올려 주세요."),
    "corrupt_pdf": (422, "PDF 파일이 손상되어 읽을 수 없어요. 다른 파일을 올리거나 다시 저장해 주세요."),
    "no_pages": (422, "문서에 읽을 수 있는 쪽이 없어요. 다른 PDF를 올려 주세요."),
    "too_many_pages": (422, "문서가 너무 길어요. 100쪽 이하로 나누어 올려 주세요."),
    "no_text": (422, "이미지로만 된 문서(스캔본)로 보여요. 글자를 읽을 수 없어 요약할 수 없어요. 글자 선택이 가능한 PDF로 올려 주세요."),
    "busy": (429, "지금 다른 요약이 진행 중이에요. 잠시 후 다시 시도해 주세요."),
    "ai_rate_limited": (429, "AI 서비스가 지금 많이 바빠요. 1~2분 뒤에 다시 시도해 주세요."),
    "server_config": (500, "서버 설정이 아직 끝나지 않았어요. 관리자에게 AI 키 설정을 확인해 달라고 요청해 주세요."),
    "internal": (500, "서버에서 문제가 생겼어요. 잠시 후 다시 시도해 주세요."),
    "ai_failed": (502, "AI 서비스에 연결하지 못했어요. 잠시 후 다시 시도해 주세요."),
    "ai_bad_response": (502, "AI가 이해하기 어려운 답을 보냈어요. 다시 시도해 주세요."),
    "timeout": (504, "시간이 너무 오래 걸려 중단했어요. 문서를 줄이거나 요약 길이를 짧게 해서 다시 시도해 주세요."),
}


# ---------------------------------------------------------------------------
# 테스트용 PDF 생성기
# ---------------------------------------------------------------------------
def _assemble(objects, padding=0):
    """객체 본문 목록(1번부터)으로 xref 까지 올바른 PDF 바이트를 만든다. padding>0 이면 참조되지 않는 채움 객체를 추가."""
    objs = list(objects)
    if padding:
        objs.append(b"<< /Length %d >>\nstream\n" % padding + b" " * padding + b"\nendstream")
    out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = []
    for i, body in enumerate(objs, start=1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % i + body + b"\nendobj\n"
    xref_pos = len(out)
    out += b"xref\n0 %d\n" % (len(objs) + 1)
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += b"%010d 00000 n \n" % off
    out += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (len(objs) + 1, xref_pos)
    return bytes(out)


def _stream(data, extra=b""):
    return b"<< /Length %d %s>>\nstream\n" % (len(data), extra) + data + b"\nendstream"


def _escape(text):
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def build_pdf(pages, padding=0):
    """pages: 쪽별 텍스트(ASCII) 목록. 빈 문자열/None 은 글자 없는 쪽. 빈 목록이면 쪽수 0 인 PDF."""
    n = len(pages)
    page_ids = [4 + 2 * i for i in range(n)]
    kids = " ".join("%d 0 R" % pid for pid in page_ids)
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        ("<< /Type /Pages /Kids [%s] /Count %d >>" % (kids, n)).encode(),
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    ]
    for i, text in enumerate(pages):
        content_id = page_ids[i] + 1
        objects.append(
            ("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
             "/Resources << /Font << /F1 3 0 R >> >> /Contents %d 0 R >>" % content_id).encode()
        )
        data = b"" if not text else ("BT /F1 12 Tf 72 720 Td (%s) Tj ET" % _escape(text)).encode("latin-1")
        objects.append(_stream(data))
    return _assemble(objects, padding)


def build_pdf_of_size(pages, target):
    """정확히 target 바이트인 유효한 PDF."""
    n = target - len(build_pdf(pages, padding=1)) + 1
    pdf = build_pdf(pages, padding=n)
    while len(pdf) != target:
        n -= len(pdf) - target
        pdf = build_pdf(pages, padding=n)
    return pdf


def build_korean_pdf(text):
    """Type0(Identity-H)+ToUnicode 로 한글 텍스트를 담은 1쪽 PDF."""
    chars = sorted(set(text))
    code = {ch: i + 1 for i, ch in enumerate(chars)}
    bf = "".join("<%04X> <%04X>\n" % (code[ch], ord(ch)) for ch in chars)
    cmap = (
        "/CIDInit /ProcSet findresource begin 12 dict begin begincmap\n"
        "/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def\n"
        "/CMapName /Adobe-Identity-UCS def /CMapType 2 def\n"
        "1 begincodespacerange <0000> <FFFF> endcodespacerange\n"
        "%d beginbfchar\n%sendbfchar\nendcmap CMapName currentdict /CMap defineresource pop end end\n"
        % (len(chars), bf)
    ).encode("ascii")
    hexstr = "".join("%04X" % code[ch] for ch in text)
    content = ("BT /F1 12 Tf 72 720 Td <%s> Tj ET" % hexstr).encode("ascii")
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
        _stream(content),
        b"<< /Type /Font /Subtype /Type0 /BaseFont /MalgunGothic /Encoding /Identity-H "
        b"/DescendantFonts [6 0 R] /ToUnicode 7 0 R >>",
        b"<< /Type /Font /Subtype /CIDFontType2 /BaseFont /MalgunGothic "
        b"/CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /DW 1000 >>",
        _stream(cmap),
    ]
    return _assemble(objects)


def encrypt_pdf(pdf_bytes, user_password, algorithm):
    writer = PdfWriter(clone_from=PdfReader(io.BytesIO(pdf_bytes)))
    writer.encrypt(user_password=user_password, owner_password="owner-secret", algorithm=algorithm)
    out = io.BytesIO()
    writer.write(out)
    return out.getvalue()


def readable_pages(n, prefix="Page"):
    return ["%s %d quarterly sales report with readable text" % (prefix, i + 1) for i in range(n)]


# ---------------------------------------------------------------------------
# 픽스처/헬퍼
# ---------------------------------------------------------------------------
def good_result(text, **overrides):
    result = {
        "summary": {
            "one_line": "이 문서는 분기 판매 실적을 정리한 보고서입니다.",
            "key_points": ["요점 1", "요점 2", "요점 3", "요점 4", "요점 5"],
            "detail": "상세 요약 본문입니다.",
        },
        "truncated": False,
        "partial": False,
        "chunks": 1,
        "processed_chars": len(text),
        "model": "fake/model:free",
    }
    result.update(overrides)
    return result


@pytest.fixture
def calls(monkeypatch):
    """AI 경계(summarize_text)를 기록용 가짜로 교체하고 호출 기록 리스트를 돌려준다. 키도 가짜로 설정."""
    monkeypatch.setenv("OPENROUTER_API_KEY", FAKE_KEY)
    monkeypatch.delenv("OPENROUTER_MODEL", raising=False)
    recorded = []

    def fake_summarize(text, length, deadline=None):
        recorded.append({"text": text, "length": length, "deadline": deadline})
        return good_result(text)

    monkeypatch.setattr(server_pdf, "summarize_text", fake_summarize)
    return recorded


@pytest.fixture
def client(calls):
    return server_pdf.app.test_client()


def post(client, content, filename="doc.pdf", length=None, headers=None, raw_fields=None):
    data = {} if raw_fields is None else dict(raw_fields)
    if content is not None:
        data["file"] = (io.BytesIO(content), filename)
    if length is not None:
        data["length"] = length
    return client.post("/api/summarize", data=data, content_type="multipart/form-data", headers=headers or {})


def assert_error(resp, code):
    status, message = ERR[code]
    assert resp.status_code == status
    assert resp.content_type == "application/json; charset=utf-8"
    assert resp.get_json() == {"error": message, "code": code}


# ---------------------------------------------------------------------------
# /api/health
# ---------------------------------------------------------------------------
def test_health_reports_service_identity_default_model_and_limits(client):
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.content_type == "application/json; charset=utf-8"
    assert resp.get_json() == {
        "status": "ok",
        "service": "pdf-summarizer",
        "model": "inclusionai/ling-3.2-flash:free",
        "ai_configured": True,
        "limits": {"max_file_mb": 10, "max_pages": 100, "max_process_chars": 60000},
    }


def test_health_shows_ai_not_configured_when_key_is_missing(client, monkeypatch):
    monkeypatch.delenv("OPENROUTER_API_KEY", raising=False)
    assert client.get("/api/health").get_json()["ai_configured"] is False


def test_health_treats_blank_key_as_not_configured(client, monkeypatch):
    monkeypatch.setenv("OPENROUTER_API_KEY", "   ")
    assert client.get("/api/health").get_json()["ai_configured"] is False


def test_health_uses_model_from_environment_and_never_exposes_the_key(client, monkeypatch):
    monkeypatch.setenv("OPENROUTER_MODEL", "vendor/custom-model:free")
    resp = client.get("/api/health")
    assert resp.get_json()["model"] == "vendor/custom-model:free"
    assert FAKE_KEY not in resp.get_data(as_text=True)
    assert FAKE_KEY not in str(resp.headers)


# ---------------------------------------------------------------------------
# /api/summarize 성공 경로와 응답 조립
# ---------------------------------------------------------------------------
def test_summarize_returns_contract_fields_and_passes_extracted_text_to_summarizer(client, calls):
    pages = readable_pages(3)
    resp = post(client, build_pdf(pages), filename="보고서.pdf")
    expected_text = "\n\n".join(pages)

    assert resp.status_code == 200
    assert resp.content_type == "application/json; charset=utf-8"
    body = resp.get_json()
    assert set(body) == {"filename", "pages", "char_count", "processed_chars", "length", "truncated",
                         "partial", "chunks", "summary", "warnings", "model", "elapsed_ms"}
    assert body["filename"] == "보고서.pdf"
    assert body["pages"] == 3
    assert body["char_count"] == len(expected_text)
    assert body["processed_chars"] == len(expected_text)
    assert body["length"] == "medium"
    assert body["truncated"] is False and body["partial"] is False
    assert body["chunks"] == 1
    assert body["summary"]["key_points"] == ["요점 1", "요점 2", "요점 3", "요점 4", "요점 5"]
    assert body["warnings"] == []
    assert body["model"] == "fake/model:free"
    assert isinstance(body["elapsed_ms"], int) and body["elapsed_ms"] >= 0
    assert calls[0]["text"] == expected_text


@pytest.mark.parametrize("length", ["short", "medium", "long"])
def test_summarize_passes_selected_length_to_summarizer(client, calls, length):
    resp = post(client, build_pdf(readable_pages(1)), length=length)
    assert resp.status_code == 200
    assert resp.get_json()["length"] == length
    assert calls[0]["length"] == length


def test_summarize_defaults_length_to_medium_when_omitted(client, calls):
    post(client, build_pdf(readable_pages(1)))
    assert calls[0]["length"] == "medium"


def test_summarize_gives_summarizer_a_deadline_within_total_budget(client, calls):
    before = time.monotonic()
    post(client, build_pdf(readable_pages(1)))
    deadline = calls[0]["deadline"]
    assert isinstance(deadline, float)
    assert before < deadline <= time.monotonic() + server_pdf.TOTAL_BUDGET_SEC
    assert server_pdf.TOTAL_BUDGET_SEC == 150


def test_summarize_accepts_pdf_content_with_txt_extension(client, calls):
    resp = post(client, build_pdf(readable_pages(1)), filename="notes.txt")
    assert resp.status_code == 200
    assert resp.get_json()["filename"] == "notes.txt"


def test_summarize_reads_korean_text_from_pdf(client, calls):
    text = "한글 문서 요약 테스트입니다 이 문서는 분기별 판매 실적을 정리한 보고서입니다"
    resp = post(client, build_korean_pdf(text))
    assert resp.status_code == 200
    assert calls[0]["text"] == text


def test_summarize_uses_only_first_file_when_several_are_sent(client, calls):
    first, second = build_pdf(["First file text is long enough here"]), build_pdf(["Second file text is long enough"])
    resp = client.post(
        "/api/summarize",
        data={"file": [(io.BytesIO(first), "first.pdf"), (io.BytesIO(second), "second.pdf")]},
        content_type="multipart/form-data",
    )
    assert resp.status_code == 200
    assert resp.get_json()["filename"] == "first.pdf"
    assert calls[0]["text"] == "First file text is long enough here"


# ---- warnings ----
def test_summarize_warns_when_30_percent_or_more_pages_have_no_text(client, calls):
    pages = readable_pages(10)
    for i in (2, 5, 8):
        pages[i] = ""
    body = post(client, build_pdf(pages)).get_json()
    assert any("일부 쪽은 글자를 읽지 못했어요" in w for w in body["warnings"])


def test_summarize_has_no_empty_page_warning_below_30_percent(client, calls):
    pages = readable_pages(10)
    for i in (2, 5):
        pages[i] = ""
    assert post(client, build_pdf(pages)).get_json()["warnings"] == []


def test_summarize_adds_truncated_and_partial_warnings_from_summarizer_flags(client, monkeypatch):
    monkeypatch.setattr(
        server_pdf, "summarize_text",
        lambda text, length, deadline=None: good_result(text, truncated=True, partial=True, chunks=7, processed_chars=60000),
    )
    body = post(client, build_pdf(readable_pages(2))).get_json()
    assert body["truncated"] is True and body["partial"] is True
    assert body["chunks"] == 7 and body["processed_chars"] == 60000
    assert "문서가 길어 앞부분 6만 자까지만 요약했어요." in body["warnings"]
    assert "시간이 오래 걸려 일부만 요약했어요." in body["warnings"]


# ---------------------------------------------------------------------------
# 검증 순서와 오류 매핑
# ---------------------------------------------------------------------------
def test_missing_file_field_returns_no_file(client, calls):
    assert_error(post(client, None, length="short"), "no_file")


def test_empty_filename_returns_no_file(client, calls):
    assert_error(post(client, b"%PDF-1.4", filename=""), "no_file")


def test_non_multipart_request_returns_no_file_not_server_error(client, calls):
    resp = client.post("/api/summarize", json={"file": "x"})
    assert_error(resp, "no_file")


def test_zero_byte_file_returns_empty_file(client, calls):
    assert_error(post(client, b""), "empty_file")


@pytest.mark.parametrize("length", ["LONG", "abc", "", "짧게", "medium "])
def test_invalid_length_returns_400(client, calls, length):
    assert_error(post(client, build_pdf(readable_pages(1)), length=length), "invalid_length")
    assert calls == []


def test_empty_file_is_reported_before_invalid_length(client, calls):
    assert_error(post(client, b"", length="bogus"), "empty_file")


def test_invalid_length_is_reported_before_signature_check(client, calls):
    assert_error(post(client, b"plain text, not a pdf", length="bogus"), "invalid_length")


def test_oversize_is_reported_before_everything_else(client, calls):
    resp = post(client, b"x" * (10 * MB + 1), filename="", length="bogus")
    assert_error(resp, "file_too_large")


def test_text_content_with_pdf_extension_returns_not_pdf(client, calls):
    assert_error(post(client, b"This is just a text file.\n" * 50, filename="fake.pdf"), "not_pdf")
    assert calls == []


@pytest.mark.parametrize("content", [b"%PDF", b"%PDX-1.4 rest", b"%pdf-1.4 lowercase", b"\x00" * 2000])
def test_content_without_exact_pdf_signature_returns_not_pdf(client, calls, content):
    assert_error(post(client, content), "not_pdf")


def test_exactly_10mb_pdf_is_accepted(client, calls):
    pdf = build_pdf_of_size(readable_pages(1), 10 * MB)
    assert len(pdf) == 10 * MB
    resp = post(client, pdf)
    assert resp.status_code == 200
    assert resp.get_json()["pages"] == 1


def test_10mb_plus_one_byte_returns_file_too_large(client, calls):
    pdf = build_pdf_of_size(readable_pages(1), 10 * MB + 1)
    assert len(pdf) == 10 * MB + 1
    assert_error(post(client, pdf), "file_too_large")
    assert calls == []


def test_huge_upload_beyond_framework_limit_returns_json_413(client, calls):
    resp = post(client, b"%PDF-" + b"\0" * (20 * MB))
    assert_error(resp, "file_too_large")
    # 거절 후에도 서버가 정상 동작해야 한다
    assert client.get("/api/health").status_code == 200


def test_100_pages_are_accepted(client, calls):
    resp = post(client, build_pdf(readable_pages(100)))
    assert resp.status_code == 200
    assert resp.get_json()["pages"] == 100


def test_101_pages_return_too_many_pages_without_extracting_any_page(client, calls, monkeypatch):
    import pypdf

    extracted = []
    original = pypdf.PageObject.extract_text

    def counting(self, *a, **kw):
        extracted.append(1)
        return original(self, *a, **kw)

    monkeypatch.setattr(pypdf.PageObject, "extract_text", counting)
    assert_error(post(client, build_pdf(readable_pages(101))), "too_many_pages")
    assert extracted == []
    assert calls == []


def test_pdf_with_zero_pages_returns_no_pages(client, calls):
    assert_error(post(client, build_pdf([])), "no_pages")


def test_pdf_with_only_images_style_empty_pages_returns_no_text(client, calls):
    assert_error(post(client, build_pdf(["", "", ""])), "no_text")
    assert calls == []


def test_19_visible_chars_return_no_text_and_20_visible_chars_pass(client, calls):
    assert_error(post(client, build_pdf(["A" * 19])), "no_text")
    resp = post(client, build_pdf(["A" * 20]))
    assert resp.status_code == 200
    assert calls[0]["text"] == "A" * 20


def test_whitespace_is_not_counted_toward_the_20_char_minimum(client, calls):
    assert_error(post(client, build_pdf(["A" * 19 + "          " + "   "])), "no_text")


@pytest.mark.parametrize("algorithm", ["RC4-128", "AES-128", "AES-256"])
def test_password_protected_pdf_returns_encrypted(client, calls, algorithm):
    protected = encrypt_pdf(build_pdf(readable_pages(2)), "secret-pw", algorithm)
    assert_error(post(client, protected), "encrypted")
    assert calls == []


def test_pdf_encrypted_with_empty_user_password_is_processed_normally(client, calls):
    pages = readable_pages(2)
    protected = encrypt_pdf(build_pdf(pages), "", "AES-128")
    resp = post(client, protected)
    assert resp.status_code == 200
    assert calls[0]["text"] == "\n\n".join(pages)


@pytest.mark.parametrize("make_corrupt", [
    lambda: b"%PDF-1.7\n" + b"this is definitely not a pdf structure \x00\x01\x02" * 20,
    lambda: b"%PDF-1.4\n1 0 obj\n<< /Type /Catalog",
    lambda: build_pdf(readable_pages(5))[:60],
], ids=["garbage-after-header", "unterminated-object", "truncated-in-header"])
def test_structurally_broken_pdf_returns_corrupt_pdf_not_500(client, calls, make_corrupt):
    assert_error(post(client, make_corrupt()), "corrupt_pdf")
    assert calls == []


def test_server_keeps_working_after_a_corrupt_upload(client, calls):
    post(client, b"%PDF-1.4 broken")
    assert post(client, build_pdf(readable_pages(1))).status_code == 200


def test_missing_api_key_returns_server_config_after_document_validation(client, calls, monkeypatch):
    monkeypatch.delenv("OPENROUTER_API_KEY", raising=False)
    assert_error(post(client, build_pdf(readable_pages(1))), "server_config")
    assert calls == []
    # 문서 문제가 키 문제보다 먼저 보고되어야 한다
    assert_error(post(client, b"not pdf at all"), "not_pdf")
    assert_error(post(client, build_pdf([""])), "no_text")


@pytest.mark.parametrize("status,code", [
    (429, "ai_rate_limited"), (500, "server_config"), (502, "ai_failed"),
    (502, "ai_bad_response"), (504, "timeout"),
])
def test_summarizer_errors_are_mapped_to_prd_table(client, monkeypatch, status, code):
    def failing(text, length, deadline=None):
        raise server_pdf.SummarizeError(status, code, "내부 메시지 sk-leak")

    monkeypatch.setattr(server_pdf, "summarize_text", failing)
    assert_error(post(client, build_pdf(readable_pages(1))), code)


def test_unexpected_exception_returns_internal_without_leaking_details(client, monkeypatch, caplog):
    def exploding(text, length, deadline=None):
        raise RuntimeError("boom C:\\secret\\path %s" % FAKE_KEY)

    monkeypatch.setattr(server_pdf, "summarize_text", exploding)
    with caplog.at_level(logging.DEBUG):
        resp = post(client, build_pdf(["Confidential quarterly figures are listed here"]))
    assert_error(resp, "internal")
    raw = resp.get_data(as_text=True) + str(resp.headers)
    for leaked in ("boom", "secret", FAKE_KEY, "Traceback"):
        assert leaked not in raw
    # 로그에는 예외 타입만 남기고 메시지·키·문서 내용은 남기지 않는다
    assert "RuntimeError" in caplog.text
    assert FAKE_KEY not in caplog.text
    assert "boom" not in caplog.text
    assert "Confidential" not in caplog.text


def test_malformed_multipart_body_returns_json_400_not_500(client, calls):
    resp = client.post("/api/summarize", data=b"--x\r\ngarbage", content_type="multipart/form-data; boundary=x")
    assert resp.status_code == 400
    assert resp.content_type == "application/json; charset=utf-8"
    assert resp.get_json()["code"] == "no_file"


# ---------------------------------------------------------------------------
# 동시성 제한(2건)과 슬롯 해제
# ---------------------------------------------------------------------------
def test_third_concurrent_summary_gets_busy_and_slots_are_reusable_afterwards(client, monkeypatch):
    gate, entered = threading.Event(), threading.Semaphore(0)

    def blocking(text, length, deadline=None):
        entered.release()
        gate.wait(15)
        return good_result(text)

    monkeypatch.setattr(server_pdf, "summarize_text", blocking)
    pdf = build_pdf(readable_pages(1))
    statuses = []

    def worker():
        statuses.append(post(server_pdf.app.test_client(), pdf).status_code)

    threads = [threading.Thread(target=worker) for _ in range(2)]
    try:
        for t in threads:
            t.start()
        for _ in range(2):
            assert entered.acquire(timeout=15)
        assert_error(post(client, pdf), "busy")
    finally:
        gate.set()
        for t in threads:
            t.join(15)
    assert statuses == [200, 200]
    assert post(client, pdf).status_code == 200


def test_slot_is_released_when_summarizer_raises_every_time(client, monkeypatch):
    def failing(text, length, deadline=None):
        raise RuntimeError("x")

    monkeypatch.setattr(server_pdf, "summarize_text", failing)
    pdf = build_pdf(readable_pages(1))
    for _ in range(5):  # 슬롯이 새면 3번째부터 busy(429)가 된다
        assert post(client, pdf).get_json()["code"] == "internal"


def test_slot_is_released_after_document_validation_failures(client, calls):
    for _ in range(5):
        assert post(client, build_pdf([""])).get_json()["code"] == "no_text"
    assert post(client, build_pdf(readable_pages(1))).status_code == 200


# ---------------------------------------------------------------------------
# CORS
# ---------------------------------------------------------------------------
@pytest.mark.parametrize("origin", ["null", "http://127.0.0.1:5001"])
def test_allowed_origin_is_echoed_exactly_with_vary_origin(client, origin):
    resp = client.get("/api/health", headers={"Origin": origin})
    assert resp.headers["Access-Control-Allow-Origin"] == origin
    assert "Origin" in resp.headers["Vary"]


@pytest.mark.parametrize("origin", [
    "http://evil.example", "http://localhost:5001", "http://127.0.0.1:5000", "http://127.0.0.1:5001/",
    "HTTP://127.0.0.1:5001", "https://127.0.0.1:5001", "*", "Null", "http://127.0.0.1:5001.evil.example",
])
def test_disallowed_origin_gets_no_cors_headers(client, origin):
    resp = client.get("/api/health", headers={"Origin": origin})
    assert resp.status_code == 200
    assert not [h for h in resp.headers.keys() if h.lower().startswith("access-control-")]


def test_request_without_origin_gets_no_wildcard_or_allow_origin(client):
    resp = client.get("/api/health")
    assert "Access-Control-Allow-Origin" not in resp.headers


@pytest.mark.parametrize("origin", ["null", "http://127.0.0.1:5001"])
def test_error_responses_also_carry_cors_for_allowed_origin(client, calls, origin):
    headers = {"Origin": origin}
    assert post(client, build_pdf(readable_pages(1)), length="bad", headers=headers).headers[
        "Access-Control-Allow-Origin"] == origin                                   # 400
    assert client.get("/api/nope", headers=headers).headers["Access-Control-Allow-Origin"] == origin  # 404
    assert client.get("/api/summarize", headers=headers).headers["Access-Control-Allow-Origin"] == origin  # 405
    too_big = post(client, b"%PDF-" + b"\0" * (12 * MB), headers=headers)           # 413
    assert too_big.status_code == 413 and too_big.headers["Access-Control-Allow-Origin"] == origin


def test_error_responses_for_disallowed_origin_have_no_cors(client, calls):
    resp = post(client, build_pdf(readable_pages(1)), length="bad", headers={"Origin": "http://evil.example"})
    assert resp.status_code == 400
    assert "Access-Control-Allow-Origin" not in resp.headers


@pytest.mark.parametrize("origin", ["null", "http://127.0.0.1:5001"])
def test_preflight_from_allowed_origin_lists_methods_and_content_type_header_only(client, origin):
    resp = client.options("/api/summarize", headers={
        "Origin": origin,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type",
    })
    assert resp.status_code in (200, 204)
    assert resp.headers["Access-Control-Allow-Origin"] == origin
    assert resp.headers["Access-Control-Allow-Methods"] == "GET, POST, OPTIONS"
    assert resp.headers["Access-Control-Allow-Headers"] == "Content-Type"
    assert "*" not in str(resp.headers)


def test_preflight_from_disallowed_origin_gets_no_cors_headers(client):
    resp = client.options("/api/summarize", headers={
        "Origin": "http://evil.example", "Access-Control-Request-Method": "POST"})
    assert not [h for h in resp.headers.keys() if h.lower().startswith("access-control-")]


def test_preflight_for_private_network_access_is_acknowledged_for_allowed_origin(client):
    resp = client.options("/api/summarize", headers={
        "Origin": "null", "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Private-Network": "true"})
    assert resp.headers["Access-Control-Allow-Private-Network"] == "true"


# ---------------------------------------------------------------------------
# 정적 서빙/라우팅/설정
# ---------------------------------------------------------------------------
def test_root_serves_index_pdf_html_as_html(client, monkeypatch, tmp_path):
    page = tmp_path / "index_pdf.html"
    page.write_text("<!doctype html><title>PDF 요약</title>", encoding="utf-8")
    monkeypatch.setattr(server_pdf, "INDEX_FILE", page)
    resp = client.get("/")
    assert resp.status_code == 200
    assert resp.mimetype == "text/html"
    assert resp.get_data(as_text=True) == "<!doctype html><title>PDF 요약</title>"


def test_root_serves_the_pdf_frontend_file_not_the_diary_index():
    assert server_pdf.INDEX_FILE.name == "index_pdf.html"
    assert server_pdf.INDEX_FILE.parent == Path(server_pdf.__file__).resolve().parent


def test_root_returns_json_404_when_frontend_file_is_missing(client, monkeypatch, tmp_path):
    monkeypatch.setattr(server_pdf, "INDEX_FILE", tmp_path / "absent.html")
    assert_error(client.get("/"), "not_found")


@pytest.mark.parametrize("path", [
    "/.env", "/server_pdf.py", "/pdf_extract.py", "/test_pdf_backend.py", "/requirements_pdf.txt",
    "/index.html", "/index_pdf.html", "/static/index_pdf.html", "/server.py", "/api/unknown", "/%2e%2e/server.py",
    "/api/health/", "/..%2f.env",
])
def test_source_secret_and_unknown_paths_return_json_404(client, path):
    resp = client.get(path)
    assert_error(resp, "not_found")
    assert "OPENROUTER" not in resp.get_data(as_text=True)


def test_wrong_method_returns_json_405(client):
    assert_error(client.post("/api/health"), "method_not_allowed")
    assert_error(client.get("/api/summarize"), "method_not_allowed")


def test_server_binds_loopback_only_on_port_5001_with_debug_off():
    assert server_pdf.HOST == "127.0.0.1"
    assert server_pdf.PORT == 5001
    assert server_pdf.app.debug is False
    assert server_pdf.app.static_folder is None


def test_max_content_length_is_10mb_plus_multipart_headroom_only():
    limit = server_pdf.app.config["MAX_CONTENT_LENGTH"]
    assert 10 * MB < limit <= 12 * MB


def test_uploads_are_never_spooled_to_disk(client, calls, monkeypatch):
    import werkzeug.formparser as formparser

    def forbidden(*a, **kw):
        raise AssertionError("업로드가 디스크 임시 파일로 spool 되었다")

    monkeypatch.setattr(formparser, "SpooledTemporaryFile", forbidden)
    resp = post(client, build_pdf_of_size(readable_pages(1), 2 * MB))  # 500KB spool 임계값을 넘는 크기
    assert resp.status_code == 200


def test_processing_leaves_no_new_files_in_server_directory(client, calls):
    base = Path(server_pdf.__file__).resolve().parent
    snapshot = lambda: {p.name for p in base.iterdir() if p.is_file()}  # noqa: E731
    before = snapshot()
    post(client, build_pdf(readable_pages(2)))
    post(client, b"%PDF-1.4 broken")
    assert snapshot() == before


def test_documents_and_extracted_text_are_not_written_to_logs(client, calls, caplog):
    with caplog.at_level(logging.DEBUG):
        post(client, build_pdf(["Extremely confidential merger details inside"]), filename="m.pdf")
    assert "confidential" not in caplog.text.lower()


# ---------------------------------------------------------------------------
# 파일명 정제
# ---------------------------------------------------------------------------
@pytest.mark.parametrize("raw,expected", [
    ("보고서.pdf", "보고서.pdf"),
    ("../../x.pdf", "x.pdf"),
    ("..\\..\\windows\\evil.pdf", "evil.pdf"),
    ("C:\\Users\\me\\a b.pdf", "a b.pdf"),
    ("a\x00b\r\nc\x1b.pdf", "abc.pdf"),
    ("rep\u202eorts.pdf", "reports.pdf"),   # 우회 표시용 방향 제어 문자 제거
    ("  spaced.pdf  ", "spaced.pdf"),
    ("../", "문서.pdf"),
    ("..", "문서.pdf"),
    ("\x00\x01", "문서.pdf"),
])
def test_sanitize_filename_removes_paths_and_control_characters(raw, expected):
    assert server_pdf.sanitize_filename(raw) == expected


def test_sanitize_filename_limits_length_to_255_and_keeps_extension():
    result = server_pdf.sanitize_filename("가" * 300 + ".pdf")
    assert len(result) == 255
    assert result.endswith(".pdf")


def test_api_returns_sanitized_korean_and_traversal_filenames(client, calls):
    pdf = build_pdf(readable_pages(1))
    assert post(client, pdf, filename="분기/보고서 최종.pdf").get_json()["filename"] == "보고서 최종.pdf"
    assert post(client, pdf, filename="../../etc/x.pdf").get_json()["filename"] == "x.pdf"
    assert len(post(client, pdf, filename="a" * 400 + ".pdf").get_json()["filename"]) == 255


# ---------------------------------------------------------------------------
# pdf_extract 단위 테스트
# ---------------------------------------------------------------------------
def test_extract_text_returns_pages_in_order_joined_by_blank_line():
    pages = readable_pages(3)
    result = pdf_extract.extract_text(build_pdf(pages))
    assert isinstance(result, pdf_extract.ExtractResult)
    assert result.text == "\n\n".join(pages)
    assert result.pages == 3
    assert result.char_count == len(result.text)
    assert result.empty_pages == 0


def test_extract_text_counts_pages_without_text_as_empty():
    pages = ["", "Readable content on the second page", None, "Readable content on the fourth page"]
    result = pdf_extract.extract_text(build_pdf(pages))
    assert result.pages == 4
    assert result.empty_pages == 2
    assert result.text == "Readable content on the second page\n\nReadable content on the fourth page"


def test_extract_text_collapses_repeated_spaces_inside_a_page():
    result = pdf_extract.extract_text(build_pdf(["Hello      world     of    spaces here"]))
    assert result.text == "Hello world of spaces here"


@pytest.mark.parametrize("raw,expected", [
    ("a\n\n\n\n\nb", "a\n\nb"),
    ("a \t  b", "a b"),
    ("line one  \r\nline two\r\n", "line one\nline two"),
    ("  \n  padded  \n  ", "padded"),
    ("nul\x00char\x07bell", "nulcharbell"),
    ("a\u00a0\u00a0b", "a b"),
    ("", ""),
])
def test_normalize_text_cleans_whitespace_and_control_characters(raw, expected):
    assert pdf_extract.normalize_text(raw) == expected


def test_extract_text_raises_not_pdf_when_signature_starts_after_1024_bytes():
    # '%PDF-' 가 인덱스 1019 에서 시작하면 첫 1024바이트 안에 완전히 들어온다(통과), 1020 이면 벗어난다(거절)
    inside = b"x" * 1019 + b"%PDF-" + b"1.4 garbage"
    outside = b"x" * 1020 + b"%PDF-" + b"1.4 garbage"
    with pytest.raises(pdf_extract.PdfError) as inside_err:
        pdf_extract.extract_text(inside)
    assert inside_err.value.code == "corrupt_pdf"   # 시그니처는 통과, 구조 검사에서 손상 판정
    with pytest.raises(pdf_extract.PdfError) as outside_err:
        pdf_extract.extract_text(outside)
    assert (outside_err.value.status, outside_err.value.code) == (415, "not_pdf")
    assert outside_err.value.message == ERR["not_pdf"][1]


def test_extract_text_accepts_pdf_with_leading_bom_bytes():
    pages = readable_pages(1)
    assert pdf_extract.extract_text(b"\xef\xbb\xbf" + build_pdf(pages)).text == pages[0]


def test_extract_text_raises_empty_file_for_zero_bytes():
    with pytest.raises(pdf_extract.PdfError) as err:
        pdf_extract.extract_text(b"")
    assert (err.value.status, err.value.code) == (400, "empty_file")


def test_pdf_error_carries_status_code_and_message_from_prd_table():
    with pytest.raises(pdf_extract.PdfError) as err:
        pdf_extract.extract_text(build_pdf(readable_pages(101)))
    assert (err.value.status, err.value.code, err.value.message) == (422, "too_many_pages", ERR["too_many_pages"][1])


def test_extract_text_stops_with_timeout_when_time_budget_is_exhausted():
    with pytest.raises(pdf_extract.PdfError) as err:
        pdf_extract.extract_text(build_pdf(readable_pages(5)), time_budget_sec=0)
    assert (err.value.status, err.value.code) == (504, "timeout")


def test_extract_text_caps_collected_text_to_protect_memory(monkeypatch):
    monkeypatch.setattr(pdf_extract, "MAX_EXTRACT_CHARS", 120)
    result = pdf_extract.extract_text(build_pdf(readable_pages(5)))
    assert result.pages == 5
    assert result.char_count == 120 == len(result.text)


def test_decompression_bomb_pdf_is_rejected_quickly_without_crashing():
    bomb = zlib.compress(b" " * (100 * MB), 9)   # 약 100KB 로 압축되지만 풀면 100MB
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>",
        _stream(bomb, b"/Filter /FlateDecode "),
    ]
    start = time.monotonic()
    with pytest.raises(pdf_extract.PdfError) as err:
        pdf_extract.extract_text(_assemble(objects))
    assert time.monotonic() - start < 20
    assert err.value.code in ("corrupt_pdf", "no_text")
    assert err.value.status == 422


# ---------------------------------------------------------------------------
# 통합 QA: 서버·요약 모듈·추출 모듈이 같은 설정값(한 곳)을 쓰는지
# ---------------------------------------------------------------------------
def test_health_reads_limits_and_default_model_from_shared_pdf_config(client, monkeypatch):
    import pdf_config
    monkeypatch.delenv("OPENROUTER_MODEL", raising=False)
    monkeypatch.setattr(pdf_config, "MAX_PROCESS_CHARS", 1234)
    monkeypatch.setattr(pdf_config, "DEFAULT_MODEL", "shared/model-id:free")
    body = client.get("/api/health").get_json()
    assert body["limits"]["max_process_chars"] == 1234
    assert body["model"] == "shared/model-id:free"


def test_truncated_warning_uses_shared_process_char_limit(client, monkeypatch):
    import pdf_config
    monkeypatch.setattr(pdf_config, "MAX_PROCESS_CHARS", 30000)
    monkeypatch.setattr(server_pdf, "summarize_text", lambda text, length, deadline=None: {
        "summary": {"one_line": "a", "key_points": ["b"], "detail": "c"}, "truncated": True, "partial": False,
        "chunks": 1, "processed_chars": 30000, "model": "m"})
    resp = post(client, build_pdf(readable_pages(1)))
    assert "앞부분 3만 자까지만" in " ".join(resp.get_json()["warnings"])


def test_health_treats_placeholder_key_as_not_configured_like_the_ai_module(client, monkeypatch):
    monkeypatch.setenv("OPENROUTER_API_KEY", "your_api_key_here")
    assert client.get("/api/health").get_json()["ai_configured"] is False
