"""
[Step 1] 냉장고/식재료 이미지 전처리 및 OpenRouter Vision API (inclusionai/ling-3.2-flash:free) 식재료 인식 모듈
"""

import base64
import io
import json
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageOps
from config import get_http_client, get_openrouter_headers, OPENROUTER_BASE_URL

VISION_MODEL = "inclusionai/ling-3.2-flash:free"
STATIC_DIR = Path(__file__).resolve().parent / "static"
SAMPLE_IMAGE_PATH = STATIC_DIR / "sample_fridge.jpg"

CATEGORY_KEYWORDS = {
    "채소": ["대파", "쪽파", "파", "양파", "당근", "토마토", "배추", "상추", "시금치", "감자", "고구마", "마늘", "고추", "오이", "버섯", "호박", "브로콜리", "파프리카", "양배추", "무", "콩나물"],
    "육류": ["삼겹살", "돼지고기", "소고기", "닭", "닭가슴살", "닭고기", "오리고기", "베이컨", "소시지", "햄", "고기"],
    "수산물": ["연어", "고등어", "새우", "오징어", "참치", "멸치", "미역", "김", "조개", "생선"],
    "유제품/난류": ["계란", "달걀", "우유", "치즈", "버터", "요거트", "생크림", "메추리알"],
    "가공식품": ["두부", "김치", "어묵", "만두", "라면", "떡", "참치캔", "옥수수콘"],
    "과일": ["사과", "바나나", "딸기", "포도", "레몬", "오렌지", "블루베리", "아보카도"],
    # 프론트 카테고리 선택지(index.html 의 '양념/기타')와 동일한 값을 사용합니다.
    "양념/기타": ["고추장", "된장", "쌈장", "간장", "소금", "설탕", "후추", "식초", "식용유", "참기름", "들기름", "고춧가루", "케첩", "마요네즈"],
}
DEFAULT_CATEGORY = "양념/기타"

# (키워드 길이, 카테고리) 로 미리 평탄화해 두고 가장 긴 키워드를 우선합니다.
_KEYWORD_INDEX = sorted(
    ((w, cat) for cat, words in CATEGORY_KEYWORDS.items() for w in words),
    key=lambda pair: -len(pair[0]),
)


def guess_category(name: str) -> str:
    """식재료명으로 카테고리를 추정합니다.
    가장 긴 키워드를 우선해 '김치'가 '김'(수산물)으로, '참치캔'이 '참치'로, '고추장'이 '고추'로
    오분류되지 않게 합니다. 한 글자 키워드(파/무/김/닭)는 이름의 맨 앞에서만 인정합니다."""
    name = (name or "").strip()
    for word, cat in _KEYWORD_INDEX:
        if len(word) == 1:
            if name.startswith(word):
                return cat
        elif word in name:
            return cat
    return DEFAULT_CATEGORY


def preprocess_image_to_data_url(image_bytes: bytes, max_size: tuple[int, int] = (512, 512)) -> str:
    """업로드된 이미지를 Vision API 전송에 최적화된 JPEG Data URL로 리사이징/압축합니다."""
    img = Image.open(io.BytesIO(image_bytes))
    img = ImageOps.exif_transpose(img)  # 스마트폰 사진의 EXIF 회전을 반영
    img = img.convert("RGB")
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=80)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/jpeg;base64,{b64}"


def ensure_sample_fridge_image() -> Path:
    """샘플 이미지가 없으면 테스트용 냉장고 식재료 이미지를 생성하거나 기존 이미지를 반환합니다."""
    STATIC_DIR.mkdir(parents=True, exist_ok=True)
    if SAMPLE_IMAGE_PATH.exists():
        return SAMPLE_IMAGE_PATH

    img = Image.new("RGB", (640, 480), color=(242, 247, 252))
    draw = ImageDraw.Draw(img)
    draw.rectangle([20, 20, 620, 460], fill=(255, 255, 255), outline=(200, 215, 230), width=4)
    draw.line([20, 240, 620, 240], fill=(190, 210, 225), width=6)
    img.save(SAMPLE_IMAGE_PATH, format="JPEG", quality=90)
    return SAMPLE_IMAGE_PATH


def extract_json_from_text(text: str) -> dict:
    """모델 응답 텍스트에서 JSON 객체를 안전하게 추출합니다."""
    cleaned = text.strip()
    fence_match = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", cleaned, re.DOTALL)
    if fence_match:
        cleaned = fence_match.group(1)
    else:
        brace_match = re.search(r"(\{.*\})", cleaned, re.DOTALL)
        if brace_match:
            cleaned = brace_match.group(1)
    return json.loads(cleaned)


def recognize_ingredients_from_image(image_bytes: bytes) -> dict:
    """
    inclusionai/ling-3.2-flash:free 모델을 호출하여 이미지 속 식재료를 추출하고
    카테고리 및 수량 정보와 함께 구조화하여 반환합니다.
    """
    data_url = preprocess_image_to_data_url(image_bytes)

    prompt = (
        "이 사진에 보이는 식재료 이름들을 쉼표(,)로 구분해서 한국어로만 나열해 주세요. "
        "예: 계란, 토마토, 두부, 대파, 당근, 우유"
    )

    response = get_http_client().post(
        f"{OPENROUTER_BASE_URL}/chat/completions",
        headers=get_openrouter_headers(),
        json={
            "model": VISION_MODEL,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {"type": "image_url", "image_url": {"url": data_url}},
                    ],
                }
            ],
            "reasoning": {"effort": "low"},
        },
        timeout=45.0,
    )
    response.raise_for_status()
    raw_data = response.json()
    msg = raw_data["choices"][0]["message"]
    content = (msg.get("content") or "").strip()
    reasoning = (msg.get("reasoning") or "").strip()

    # content가 비어 있을 경우 reasoning에서 한글 식재료명 추출 폴백
    raw_names: list[str] = []
    if content:
        # 줄바꿈이나 쉼표 기준 분리
        parts = re.split(r"[,\n•·]+", content)
        for p in parts:
            cleaned = re.sub(r"^[\d\-\.\*\(\)\s]+", "", p).strip()
            if cleaned and len(cleaned) <= 20:
                raw_names.append(cleaned)

    if not raw_names and reasoning:
        paren_matches = re.findall(r"\(([가-힣\s]{1,12})\)", reasoning)
        raw_names.extend([m.strip() for m in paren_matches if m.strip()])

    # 중복 제거
    seen = set()
    unique_names = []
    for n in raw_names:
        if n not in seen:
            seen.add(n)
            unique_names.append(n)

    normalized = []
    for idx, name in enumerate(unique_names, 1):
        normalized.append(
            {
                "id": f"ing_{idx}",
                "name": name,
                "category": guess_category(name),
                "quantity": "적당량",
                "confidence": "high",
            }
        )

    summary = (
        f"사진에서 총 {len(normalized)}개의 식재료({', '.join(unique_names)})를 인식했습니다."
        if normalized
        else "식재료 인식이 완료되었습니다."
    )

    return {
        "model": VISION_MODEL,
        "ingredients": normalized,
        "summary": summary,
    }
