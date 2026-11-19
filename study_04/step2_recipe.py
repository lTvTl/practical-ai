"""
[Step 2] 식재료 기반 맞춤형 레시피 생성 및 recraft/recraft-v4.1-flash-v2:free 요리 이미지 생성 모듈
"""

import base64
import io
import logging
import time
import uuid
from pathlib import Path
from PIL import Image
from config import get_http_client, get_openrouter_headers, OPENROUTER_BASE_URL
from step1_vision import extract_json_from_text

TEXT_MODEL = "inclusionai/ling-3.2-flash:free"
IMAGE_MODEL = "recraft/recraft-v4.1-flash-v2:free"
GENERATED_DIR = Path(__file__).resolve().parent / "static" / "generated"
logger = logging.getLogger(__name__)


def generate_dish_image(image_prompt: str, recipe_id: str) -> str:
    """
    recraft/recraft-v4.1-flash-v2:free 모델을 호출하여 완성 요리 이미지를 생성하고
    로컬 static/generated 폴더에 경량 WebP로 저장한 뒤 경로를 반환합니다.
    """
    GENERATED_DIR.mkdir(parents=True, exist_ok=True)

    response = get_http_client().post(
        f"{OPENROUTER_BASE_URL}/chat/completions",
        headers=get_openrouter_headers(),
        json={
            "model": IMAGE_MODEL,
            "messages": [{"role": "user", "content": image_prompt}],
        },
        timeout=50.0,
    )
    response.raise_for_status()
    data = response.json()

    message = data["choices"][0]["message"]
    images = message.get("images") or []
    if not images:
        raise RuntimeError("Recraft 모델 응답에 이미지가 없습니다.")

    img_data_url = images[0]["image_url"]["url"]
    _, b64_part = img_data_url.split(",", 1)
    raw_bytes = base64.b64decode(b64_part)

    # 웹 표시 및 저장 최적화를 위해 640x640 WebP(품질 82)로 경량화 저장
    img = Image.open(io.BytesIO(raw_bytes)).convert("RGB")
    img.thumbnail((640, 640), Image.Resampling.LANCZOS)
    filename = f"{recipe_id}.webp"
    out_path = GENERATED_DIR / filename
    img.save(out_path, format="WEBP", quality=82)

    return f"/static/generated/{filename}"


def generate_recipe_from_ingredients(
    ingredients: list[dict | str],
    pantry_items: list[str] | None = None,
    cuisine: str = "한식",
    max_time: int = 30,
    difficulty: str = "초급",
    servings: int = 2,
    excluded_ingredients: list[str] | None = None,
    diet_type: str = "일반식",
) -> dict:
    """
    Step 1에서 인식된 식재료와 사용자 조건을 조합하여
    1) 상세 구조화 레시피(JSON) 생성
    2) recraft/recraft-v4.1-flash-v2:free 모델로 완성 요리 대표 이미지 생성
    을 수행하여 반환합니다.
    """
    ing_names = [
        (item.get("name") if isinstance(item, dict) else str(item)).strip()
        for item in ingredients
    ]
    ing_names = [n for n in ing_names if n]
    if not ing_names:
        raise ValueError("최소 1개 이상의 식재료가 필요합니다.")

    pantry_str = ", ".join(pantry_items) if pantry_items else "소금, 설탕, 간장, 식용유, 후추, 마늘"
    excluded_str = ", ".join(excluded_ingredients) if excluded_ingredients else "없음"
    recipe_id = f"rcp_{int(time.time())}_{uuid.uuid4().hex[:6]}"

    prompt = (
        f"보유 식재료: {', '.join(ing_names)} / 기본양념: {pantry_str} / 제외재료: {excluded_str}\n"
        f"조건: {cuisine}, {max_time}분 이내, 난이도 {difficulty}, {servings}인분, {diet_type}\n"
        "위 재료로 만들 수 있는 요리 레시피 1개를 아래 JSON 형식으로만 짧고 명확하게 출력하세요.\n"
        '{"title":"요리명","subtitle":"한줄소개","cookingTimeMinutes":15,"calories":"420 kcal","matchRate":95,'
        '"ingredients":{"owned":[{"name":"재료명","amount":"2개"}],"missing":[{"name":"양념명","amount":"1큰술"}]},'
        '"steps":["1단계","2단계","3단계","4단계"],"chefTip":"꿀팁","imagePrompt":"Delicious food photography of [English dish name]"}'
    )

    response = get_http_client().post(
        f"{OPENROUTER_BASE_URL}/chat/completions",
        headers=get_openrouter_headers(),
        json={
            "model": TEXT_MODEL,
            "messages": [{"role": "user", "content": prompt}],
            "reasoning": {"effort": "low"},
        },
        timeout=45.0,
    )
    response.raise_for_status()
    content = response.json()["choices"][0]["message"].get("content") or ""

    try:
        recipe_data = extract_json_from_text(content)
    except Exception:
        recipe_data = {
            "title": f"{ing_names[0]} 활용 {cuisine} 별미 요리",
            "subtitle": f"{', '.join(ing_names[:3])}로 간편하게 만드는 맞춤 레시피",
            "cuisine": cuisine,
            "difficulty": difficulty,
            "cookingTimeMinutes": max_time,
            "servings": servings,
            "calories": "420 kcal",
            "matchRate": 90,
            "ingredients": {
                "owned": [{"name": name, "amount": "적당량"} for name in ing_names],
                "missing": [{"name": "간장 및 기본양념", "amount": "1큰술"}],
            },
            "steps": [
                f"준비된 재료({', '.join(ing_names)})를 깨끗이 씻어 먹기 좋은 크기로 손질합니다.",
                "달군 팬에 식용유를 두르고 단단한 재료부터 먼저 볶아 향을 냅니다.",
                "나머지 재료와 기본 양념을 넣고 중불에서 간이 배도록 조리합니다.",
                "그릇에 보기 좋게 담아 완성합니다.",
            ],
            "chefTip": "불 조절에 유의하며 마지막에 참기름이나 후추를 약간 더하면 풍미가 살아납니다.",
            "imagePrompt": f"Appetizing professional food photography of a delicious {cuisine} dish made with {', '.join(ing_names[:4])}, warm lighting, close-up",
        }

    image_prompt = recipe_data.get("imagePrompt") or (
        f"Appetizing food photography of {recipe_data.get('title', 'Korean dish')} "
        f"with {', '.join(ing_names[:4])}, restaurant plating, warm lighting"
    )

    try:
        image_url = generate_dish_image(image_prompt, recipe_id)
    except Exception:
        # 상세 예외(요청 URL 등)는 클라이언트로 내보내지 않고 서버 로그에만 남깁니다.
        logger.exception("요리 이미지 생성 실패 (recipe_id=%s)", recipe_id)
        image_url = "/static/sample_fridge.jpg"
        recipe_data["imageError"] = "요리 이미지 생성에 실패해 기본 이미지를 표시합니다."

    recipe_data["recipeId"] = recipe_id
    recipe_data["cuisine"] = recipe_data.get("cuisine") or cuisine
    recipe_data["difficulty"] = recipe_data.get("difficulty") or difficulty
    recipe_data["imageModel"] = IMAGE_MODEL
    recipe_data["textModel"] = TEXT_MODEL
    recipe_data["imageUrl"] = image_url
    try:
        recipe_data["servings"] = int(recipe_data.get("servings") or servings)
    except (TypeError, ValueError):
        recipe_data["servings"] = servings  # 모델이 "2인분" 같은 문자열을 준 경우 요청값 사용

    warnings = find_excluded_ingredient_warnings(recipe_data, excluded_ingredients or [])
    if warnings:
        recipe_data["excludedWarnings"] = warnings

    return recipe_data


def find_excluded_ingredient_warnings(recipe_data: dict, excluded_ingredients: list[str]) -> list[str]:
    """생성된 레시피의 재료 목록에 알레르기/기피 재료가 포함됐는지 서버에서 사후 검증합니다.
    프롬프트 지시만으로는 보장되지 않으므로, 포함된 제외 재료명을 중복 없이 반환합니다."""
    excluded = [e.strip() for e in excluded_ingredients if isinstance(e, str) and e.strip()]
    if not excluded:
        return []
    ingredients = recipe_data.get("ingredients") or {}
    names: list[str] = []
    for group in ("owned", "missing"):
        for item in ingredients.get(group) or []:
            name = item.get("name") if isinstance(item, dict) else str(item)
            if name:
                names.append(str(name))
    found: list[str] = []
    for ex in excluded:
        if ex not in found and any(ex in name for name in names):
            found.append(ex)
    return found
