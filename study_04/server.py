"""
냉장고 파먹기 AI 셰프 (Fridge-to-Recipe AI Web App) 백엔드 서버
- Step 1: 냉장고 사진 식재료 인식 (inclusionai/ling-3.2-flash:free)
- Step 2: 맞춤 레시피 및 요리 이미지 생성 (recraft/recraft-v4.1-flash-v2:free + inclusionai/ling-3.2-flash:free)
- Step 3: 사용자 프로필 및 나만의 레시피북 관리
"""

import base64
import logging
from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory
from PIL import Image, UnidentifiedImageError

from step1_vision import ensure_sample_fridge_image, recognize_ingredients_from_image
from step2_recipe import generate_recipe_from_ingredients
from step3_profile import (
    create_or_update_profile,
    delete_profile,
    delete_saved_recipe,
    export_backup,
    get_profile_stats,
    get_state,
    import_backup,
    list_profiles,
    save_recipe_to_profile,
    set_active_profile,
    update_saved_recipe,
)

BASE_DIR = Path(__file__).resolve().parent
MAX_UPLOAD_BYTES = 10 * 1024 * 1024  # 업로드 이미지/JSON 본문 최대 10MB

app = Flask(__name__, static_folder=str(BASE_DIR / "static"), static_url_path="/static")
app.config["MAX_CONTENT_LENGTH"] = MAX_UPLOAD_BYTES
logger = logging.getLogger(__name__)


@app.errorhandler(413)
def too_large(_exc):
    return jsonify({"error": "요청 데이터가 너무 큽니다. (최대 10MB)"}), 413


def _server_error(message: str):
    """예기치 못한 예외는 서버 로그에만 남기고, 클라이언트에는 일반 메시지만 반환합니다."""
    logger.exception(message)
    return jsonify({"error": message}), 500


def _to_int(value, default: int, label: str) -> int:
    try:
        return int(value or default)
    except (TypeError, ValueError):
        raise ValueError(f"{label} 값은 숫자여야 합니다.")


@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/style.css")
def style_css():
    return send_from_directory(BASE_DIR, "style.css")


@app.route("/app.js")
def app_js():
    return send_from_directory(BASE_DIR, "app.js")


# ==========================================
# Step 1: 이미지 입력 및 식재료 인식 API
# ==========================================
@app.route("/api/step1/sample-image", methods=["GET"])
def get_sample_image():
    sample_path = ensure_sample_fridge_image()
    return send_from_directory(sample_path.parent, sample_path.name)


@app.route("/api/step1/recognize-ingredients", methods=["POST"])
def api_recognize_ingredients():
    bad_image = (jsonify({"error": "이미지를 읽을 수 없습니다. 올바른 이미지 파일인지 확인해 주세요."}), 400)
    try:
        image_bytes = None

        if "image" in request.files:
            file = request.files["image"]
            image_bytes = file.read()
        else:
            body = request.get_json(silent=True) or {}
            if body.get("useSample"):
                sample_path = ensure_sample_fridge_image()
                image_bytes = sample_path.read_bytes()
            elif body.get("imageDataUrl"):
                data_url = body["imageDataUrl"]
                _, b64_part = data_url.split(",", 1)
                image_bytes = base64.b64decode(b64_part)
    except (ValueError, AttributeError, TypeError):
        # 잘못된 data URL / base64 등 클라이언트 입력 오류
        return bad_image

    if not image_bytes:
        return jsonify({"error": "업로드된 이미지가 없습니다."}), 400

    try:
        return jsonify(recognize_ingredients_from_image(image_bytes))
    except (UnidentifiedImageError, Image.DecompressionBombError):
        return bad_image
    except Exception:
        return _server_error("식재료 인식 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")


# ==========================================
# Step 2: 식재료 기반 레시피 & 이미지 생성 API
# ==========================================
@app.route("/api/step2/generate-recipe", methods=["POST"])
def api_generate_recipe():
    try:
        body = request.get_json(silent=True) or {}
        ingredients = body.get("ingredients") or []
        pantry_items = body.get("pantryItems") or []
        cuisine = body.get("cuisine") or "한식"
        max_time = _to_int(body.get("maxTime"), 30, "조리 시간")
        difficulty = body.get("difficulty") or "초급"
        servings = _to_int(body.get("servings"), 2, "인분")
        excluded_ingredients = body.get("excludedIngredients") or []
        diet_type = body.get("dietType") or "일반식"

        recipe = generate_recipe_from_ingredients(
            ingredients=ingredients,
            pantry_items=pantry_items,
            cuisine=cuisine,
            max_time=max_time,
            difficulty=difficulty,
            servings=servings,
            excluded_ingredients=excluded_ingredients,
            diet_type=diet_type,
        )
        return jsonify(recipe)
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("레시피 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")


# ==========================================
# Step 3: 사용자 프로필 및 레시피북 API
# ==========================================
def _build_state(profile_id: str | None = None) -> dict:
    """store.json 을 1회만 읽어 상태 전체를 구성합니다."""
    return get_state(profile_id)


@app.route("/api/step3/state", methods=["GET"])
def api_get_step3_state():
    return jsonify(_build_state(request.args.get("profileId")))


@app.route("/api/step3/profiles", methods=["POST"])
def api_save_profile():
    try:
        body = request.get_json(silent=True) or {}
        profile = create_or_update_profile(body)
        return jsonify({"profile": profile, "state": _build_state()})
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("프로필 저장 중 오류가 발생했습니다.")


@app.route("/api/step3/profiles/select", methods=["POST"])
def api_select_profile():
    try:
        body = request.get_json(silent=True) or {}
        profile_id = body.get("profileId")
        profile = set_active_profile(profile_id)
        return jsonify({"profile": profile, "state": _build_state()})
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("프로필 전환 중 오류가 발생했습니다.")


@app.route("/api/step3/profiles/<profile_id>", methods=["DELETE"])
def api_delete_profile(profile_id: str):
    try:
        delete_profile(profile_id)
        return jsonify(_build_state())
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("프로필 삭제 중 오류가 발생했습니다.")


@app.route("/api/step3/recipes", methods=["POST"])
def api_save_recipe():
    try:
        body = request.get_json(silent=True) or {}
        profile_id = body.get("profileId") or list_profiles()["activeProfileId"]
        recipe = body.get("recipe")
        if not recipe:
            return jsonify({"error": "저장할 레시피 데이터가 없습니다."}), 400

        saved = save_recipe_to_profile(
            profile_id=profile_id,
            recipe=recipe,
            user_memo=body.get("userMemo", ""),
            user_rating=body.get("userRating", 5),
        )
        return jsonify({"saved": saved, "stats": get_profile_stats(profile_id)})
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("레시피 저장 중 오류가 발생했습니다.")


@app.route("/api/step3/recipes/<saved_id>", methods=["PATCH"])
def api_update_recipe(saved_id: str):
    try:
        body = request.get_json(silent=True) or {}
        updated = update_saved_recipe(saved_id, body)
        return jsonify({"saved": updated, "stats": get_profile_stats(updated["profileId"])})
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("레시피 수정 중 오류가 발생했습니다.")


@app.route("/api/step3/recipes/<saved_id>", methods=["DELETE"])
def api_delete_recipe(saved_id: str):
    try:
        deleted = delete_saved_recipe(saved_id)
        return jsonify({"deleted": deleted, "state": _build_state()})
    except Exception:
        return _server_error("레시피 삭제 중 오류가 발생했습니다.")


@app.route("/api/step3/backup", methods=["GET"])
def api_export_backup():
    return jsonify(export_backup())


@app.route("/api/step3/restore", methods=["POST"])
def api_import_backup():
    try:
        body = request.get_json(silent=True) or {}
        import_backup(body)
        return jsonify(_build_state())
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 400
    except Exception:
        return _server_error("백업 복원 중 오류가 발생했습니다.")


if __name__ == "__main__":
    ensure_sample_fridge_image()
    print("Fridge-to-Recipe AI Server starting at http://127.0.0.1:5000")
    app.run(host="127.0.0.1", port=5000, debug=False)
