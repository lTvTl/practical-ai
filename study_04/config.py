"""
OpenRouter API 키를 .env 파일에서 안전하게 로드하고 검증하는 설정 모듈입니다.
외부 패키지(python-dotenv)가 없어도 파이썬 표준 라이브러리만으로 동작합니다.
"""

import os
from functools import lru_cache
from pathlib import Path

import httpx

BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"
OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"


@lru_cache(maxsize=None)
def get_http_client() -> httpx.Client:
    """OpenRouter 호출용 httpx.Client 를 재사용해 TCP/TLS 연결 수립 비용을 줄입니다(스레드 안전)."""
    return httpx.Client()


@lru_cache(maxsize=None)
def load_env(env_path: Path = ENV_PATH) -> None:
    """python-dotenv가 있으면 사용하고, 없으면 직접 .env 파일을 파싱해 환경변수에 등록합니다.
    프로세스당 경로별 1회만 .env 를 읽습니다(.env 수정 시 서버 재시작 필요)."""
    try:
        from dotenv import load_dotenv
        load_dotenv(dotenv_path=env_path)
        return
    except ImportError:
        pass

    if not env_path.exists():
        return

    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip("'\"")
        if key and key not in os.environ:
            os.environ[key] = value


def get_openrouter_api_key() -> str:
    """환경변수에서 OPENROUTER_API_KEY를 가져오고 유효성을 검사합니다."""
    load_env()
    api_key = os.getenv("OPENROUTER_API_KEY", "").strip()

    if not api_key or api_key == "sk-or-v1-your_api_key_here":
        raise RuntimeError(
            "OPENROUTER_API_KEY가 설정되지 않았습니다. "
            f"'{ENV_PATH}' 파일에 유효한 OpenRouter API 키를 설정해주세요."
        )
    return api_key


def get_masked_key(api_key: str) -> str:
    """로그 출력 시 키가 노출되지 않도록 앞 10자리와 뒤 4자리만 남기고 마스킹합니다."""
    if len(api_key) <= 14:
        return "***"
    return f"{api_key[:10]}...{api_key[-4:]}"


def get_openrouter_headers(app_title: str = "Practical_AI_Study_04") -> dict[str, str]:
    """OpenRouter API 요청에 필요한 기본 헤더를 반환합니다."""
    return {
        "Authorization": f"Bearer {get_openrouter_api_key()}",
        "Content-Type": "application/json",
        "X-Title": app_title,
    }


if __name__ == "__main__":
    key = get_openrouter_api_key()
    print(f"[OK] OpenRouter API 키 로드 완료: {get_masked_key(key)} (길이: {len(key)}자)")
