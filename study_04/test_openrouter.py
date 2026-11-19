"""
OpenRouter API 연동 테스트 스크립트
1) recraft/recraft-v4.1-flash-v2:free : 텍스트 프롬프트 인식 및 이미지 생성 (text -> image)
2) inclusionai/ling-3.2-flash:free    : 텍스트 대화 및 이미지 인식/설명 (text+image -> text)
"""

import base64
import io
from pathlib import Path
import httpx
from PIL import Image
from config import get_openrouter_headers, OPENROUTER_BASE_URL

RECRAFT_MODEL = "recraft/recraft-v4.1-flash-v2:free"
LING_MODEL = "inclusionai/ling-3.2-flash:free"
OUTPUT_IMAGE_PATH = Path(__file__).resolve().parent / "test_output.webp"


def compress_image_for_vision(img_bytes: bytes, max_size: tuple[int, int] = (512, 512)) -> str:
    """대용량 WebP 이미지를 Vision API 전송에 적합하도록 경량 JPEG base64 Data URL로 변환합니다."""
    img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    img.thumbnail(max_size)
    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=80)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/jpeg;base64,{b64}"


def test_text_to_image_with_recraft(prompt: str) -> bytes:
    """recraft/recraft-v4.1-flash-v2:free 모델을 호출하여 텍스트를 인식하고 이미지를 생성합니다."""
    print(f"\n[1] '{RECRAFT_MODEL}' 테스트 (텍스트 프롬프트 인식 -> 이미지 생성)")
    print(f"    입력 프롬프트: {prompt}")

    response = httpx.post(
        f"{OPENROUTER_BASE_URL}/chat/completions",
        headers=get_openrouter_headers(),
        json={
            "model": RECRAFT_MODEL,
            "messages": [{"role": "user", "content": prompt}],
        },
        timeout=45.0,
    )
    response.raise_for_status()
    data = response.json()

    message = data["choices"][0]["message"]
    images = message.get("images") or []
    if not images:
        raise RuntimeError(f"응답에 이미지가 포함되지 않았습니다: {data}")

    img_data_url = images[0]["image_url"]["url"]
    _, b64_part = img_data_url.split(",", 1)
    img_bytes = base64.b64decode(b64_part)
    OUTPUT_IMAGE_PATH.write_bytes(img_bytes)

    print(f"    상태 코드: {response.status_code} OK")
    print(f"    생성된 이미지 저장 완료: {OUTPUT_IMAGE_PATH.name} ({len(img_bytes):,} bytes)")
    return img_bytes


def test_text_chat_with_ling(question: str) -> str:
    """inclusionai/ling-3.2-flash:free 모델의 텍스트 인식/질의응답을 테스트합니다."""
    print(f"\n[2] '{LING_MODEL}' 텍스트 인식(질의응답) 테스트")
    print(f"    질문: {question}")

    response = httpx.post(
        f"{OPENROUTER_BASE_URL}/chat/completions",
        headers=get_openrouter_headers(),
        json={
            "model": LING_MODEL,
            "messages": [{"role": "user", "content": question}],
            "max_tokens": 200,
        },
        timeout=30.0,
    )
    response.raise_for_status()
    data = response.json()
    answer = data["choices"][0]["message"]["content"]

    print(f"    상태 코드: {response.status_code} OK")
    print(f"    응답: {answer}")
    return answer


def test_image_recognition_with_ling(img_bytes: bytes, prompt: str) -> str:
    """inclusionai/ling-3.2-flash:free 모델로 이미지를 인식하고 설명을 생성합니다."""
    print(f"\n[3] '{LING_MODEL}' 이미지 인식 테스트")
    print(f"    요청: {prompt}")

    image_data_url = compress_image_for_vision(img_bytes)

    response = httpx.post(
        f"{OPENROUTER_BASE_URL}/chat/completions",
        headers=get_openrouter_headers(),
        json={
            "model": LING_MODEL,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {"type": "image_url", "image_url": {"url": image_data_url}},
                    ],
                }
            ],
            "max_tokens": 300,
        },
        timeout=45.0,
    )
    response.raise_for_status()
    data = response.json()
    description = data["choices"][0]["message"]["content"]

    print(f"    상태 코드: {response.status_code} OK")
    print(f"    인식 결과:\n    {description}")
    return description


if __name__ == "__main__":
    img_bytes = test_text_to_image_with_recraft(
        "A cute orange cat sitting on a wooden desk next to a laptop and a coffee mug, sunny window background, digital illustration"
    )
    test_text_chat_with_ling("안녕하세요! 한 문장으로 답해주세요.")
    test_image_recognition_with_ling(
        img_bytes, "이 이미지에 무엇이 있는지 한국어로 2~3문장으로 간단히 설명해주세요."
    )
