"""PDF 요약 앱의 공용 설정값(서버·추출·AI 모듈이 함께 쓰는 값은 여기 한 곳에서만 정의한다)."""
import os

DEFAULT_MODEL = "inclusionai/ling-3.2-flash:free"   # OPENROUTER_MODEL 환경변수로 덮어쓸 수 있다
MAX_PAGES = 100                                      # 이 쪽수를 넘는 문서는 거절
MAX_PROCESS_CHARS = 60000                            # 요약 처리 글자 수 상한(초과분은 잘라냄)
TOTAL_BUDGET_SEC = 150                               # 요청 하나의 전체 시간 예산(프론트 타임아웃 180초보다 짧아야 함)
PLACEHOLDER_KEY_SUFFIX = "your_api_key_here"         # .env 예시 값. 설정되지 않은 것으로 취급


def get_model() -> str:
    return os.getenv("OPENROUTER_MODEL", "").strip() or DEFAULT_MODEL


def read_api_key() -> str:
    """환경변수의 키(앞뒤 공백 제거). 예시 값(placeholder)이면 빈 문자열. 값은 외부에 출력하지 않는다."""
    key = os.getenv("OPENROUTER_API_KEY", "").strip()
    return "" if key.endswith(PLACEHOLDER_KEY_SUFFIX) else key


def api_key_configured() -> bool:
    return bool(read_api_key())
