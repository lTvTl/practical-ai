"""
[Step 3] 사용자 프로필 및 나만의 레시피북 저장·관리 모듈
"""

import json
import os
import threading
import time
import uuid
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent / "data"
# 환경변수 FRIDGE_STORE_PATH 로 저장 파일 위치를 바꿀 수 있습니다(테스트/배포 환경 분리용).
STORE_PATH = Path(os.environ.get("FRIDGE_STORE_PATH") or (DATA_DIR / "store.json"))

# 읽기-수정-쓰기 구간을 직렬화해 동시 요청 시 갱신 유실을 막습니다(재진입 가능).
_STORE_LOCK = threading.RLock()


def _now_iso() -> str:
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def _default_store() -> dict:
    return {
        "activeProfileId": "usr_default",
        "profiles": [
            {
                "profileId": "usr_default",
                "nickname": "자취요리왕",
                "avatar": "👨‍🍳",
                "bio": "냉장고 파먹기로 맛있는 집밥을 만드는 중!",
                "skillLevel": "초급",
                "dietType": "일반식",
                "dislikedIngredients": ["고수"],
                "allergies": [],
                "createdAt": _now_iso(),
            }
        ],
        "savedRecipes": [],
    }


def _preserve_corrupt_file() -> None:
    """읽을 수 없는 저장 파일을 덮어쓰기 전에 타임스탬프를 붙여 보존합니다."""
    if not STORE_PATH.exists():
        return
    backup = STORE_PATH.with_name(f"{STORE_PATH.name}.corrupt-{int(time.time())}-{uuid.uuid4().hex[:4]}")
    os.replace(STORE_PATH, backup)


def load_store() -> dict:
    with _STORE_LOCK:
        STORE_PATH.parent.mkdir(parents=True, exist_ok=True)
        if not STORE_PATH.exists():
            store = _default_store()
            save_store(store)
            return store
        try:
            data = json.loads(STORE_PATH.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            # JSON 이 깨진 경우에만 초기화하되, 원본은 .corrupt-* 로 보존합니다.
            # (권한/디스크 오류 등 OSError 는 삼키지 않고 그대로 전파해 데이터 덮어쓰기를 막습니다.)
            _preserve_corrupt_file()
            store = _default_store()
            save_store(store)
            return store
        if not isinstance(data, dict) or not data.get("profiles"):
            _preserve_corrupt_file()
            data = _default_store()
            save_store(data)
        data.setdefault("savedRecipes", [])
        return data


def save_store(store: dict) -> None:
    """임시 파일에 쓴 뒤 os.replace 로 교체해, 쓰기 도중 중단돼도 기존 파일이 깨지지 않게 합니다."""
    with _STORE_LOCK:
        STORE_PATH.parent.mkdir(parents=True, exist_ok=True)
        tmp_path = STORE_PATH.with_name(f"{STORE_PATH.name}.{uuid.uuid4().hex[:8]}.tmp")
        try:
            tmp_path.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
            os.replace(tmp_path, STORE_PATH)
        finally:
            if tmp_path.exists():
                tmp_path.unlink()


def _split_csv(value) -> list[str]:
    if isinstance(value, str):
        return [x.strip() for x in value.split(",") if x.strip()]
    if isinstance(value, list):
        return [str(x).strip() for x in value if str(x).strip()]
    return []


def _parse_rating(value, default: int = 5) -> int:
    try:
        number = int(value or default)
    except (TypeError, ValueError):
        raise ValueError("평점은 1~5 사이의 숫자여야 합니다.")
    return max(1, min(5, number))


def list_profiles(store: dict | None = None) -> dict:
    store = store if store is not None else load_store()
    return {
        "activeProfileId": store.get("activeProfileId", store["profiles"][0]["profileId"]),
        "profiles": store["profiles"],
    }


def get_state(profile_id: str | None = None) -> dict:
    """프로필·저장 레시피·통계를 store.json 1회 로드로 계산해 반환합니다."""
    store = load_store()
    info = list_profiles(store)
    active_id = profile_id or info["activeProfileId"]
    return {
        "activeProfileId": active_id,
        "profiles": info["profiles"],
        "savedRecipes": _recipes_of(store, active_id),
        "stats": _compute_stats(store, active_id),
    }


def create_or_update_profile(payload: dict) -> dict:
    with _STORE_LOCK:
        store = load_store()
        profile_id = payload.get("profileId")

        if profile_id:
            for prof in store["profiles"]:
                if prof["profileId"] == profile_id:
                    prof["nickname"] = (payload.get("nickname") or prof["nickname"]).strip() or prof["nickname"]
                    prof["avatar"] = payload.get("avatar", prof.get("avatar", "👨‍🍳"))
                    prof["bio"] = payload.get("bio", prof.get("bio", ""))
                    prof["skillLevel"] = payload.get("skillLevel", prof.get("skillLevel", "초급"))
                    prof["dietType"] = payload.get("dietType", prof.get("dietType", "일반식"))
                    # 부분 업데이트: 요청에 없는 목록(알레르기/기피 재료)은 기존 값을 유지합니다.
                    if "dislikedIngredients" in payload:
                        prof["dislikedIngredients"] = _split_csv(payload["dislikedIngredients"])
                    if "allergies" in payload:
                        prof["allergies"] = _split_csv(payload["allergies"])
                    store["activeProfileId"] = profile_id
                    save_store(store)
                    return prof

        new_profile = {
            "profileId": f"usr_{int(time.time())}_{uuid.uuid4().hex[:4]}",
            "nickname": (payload.get("nickname") or "새 셰프").strip(),
            "avatar": payload.get("avatar") or "🍳",
            "bio": (payload.get("bio") or "오늘도 맛있는 한 끼!").strip(),
            "skillLevel": payload.get("skillLevel") or "초급",
            "dietType": payload.get("dietType") or "일반식",
            "dislikedIngredients": _split_csv(payload.get("dislikedIngredients", [])),
            "allergies": _split_csv(payload.get("allergies", [])),
            "createdAt": _now_iso(),
        }
        store["profiles"].append(new_profile)
        store["activeProfileId"] = new_profile["profileId"]
        save_store(store)
        return new_profile


def set_active_profile(profile_id: str) -> dict:
    with _STORE_LOCK:
        store = load_store()
        for prof in store["profiles"]:
            if prof["profileId"] == profile_id:
                store["activeProfileId"] = profile_id
                save_store(store)
                return prof
    raise ValueError("해당 프로필을 찾을 수 없습니다.")


def delete_profile(profile_id: str) -> dict:
    with _STORE_LOCK:
        store = load_store()
        if len(store["profiles"]) <= 1:
            raise ValueError("최소 1개의 프로필은 유지되어야 합니다.")
        store["profiles"] = [p for p in store["profiles"] if p["profileId"] != profile_id]
        store["savedRecipes"] = [r for r in store["savedRecipes"] if r.get("profileId") != profile_id]
        if store.get("activeProfileId") == profile_id:
            store["activeProfileId"] = store["profiles"][0]["profileId"]
        save_store(store)
        return list_profiles(store)


def save_recipe_to_profile(profile_id: str, recipe: dict, user_memo: str = "", user_rating: int = 5) -> dict:
    if not isinstance(recipe, dict):
        raise ValueError("저장할 레시피 데이터 형식이 올바르지 않습니다.")
    with _STORE_LOCK:
        store = load_store()
        saved_item = {
            "savedId": f"srv_{int(time.time())}_{uuid.uuid4().hex[:5]}",
            "profileId": profile_id,
            "recipe": recipe,
            "userRating": _parse_rating(user_rating),
            "userMemo": str(user_memo or "").strip(),
            "starred": bool(recipe.get("starred", False)),
            "cookedCount": 0,
            "lastCookedAt": None,
            "savedAt": _now_iso(),
        }
        store["savedRecipes"].insert(0, saved_item)
        save_store(store)
        return saved_item


def _recipes_of(store: dict, profile_id: str | None) -> list[dict]:
    target_id = profile_id or store.get("activeProfileId")
    return [r for r in store["savedRecipes"] if r.get("profileId") == target_id]


def list_saved_recipes(profile_id: str | None = None) -> list[dict]:
    return _recipes_of(load_store(), profile_id)


def update_saved_recipe(saved_id: str, updates: dict) -> dict:
    with _STORE_LOCK:
        store = load_store()
        for item in store["savedRecipes"]:
            if item["savedId"] == saved_id:
                if "starred" in updates:
                    item["starred"] = bool(updates["starred"])
                if "userRating" in updates:
                    item["userRating"] = _parse_rating(updates["userRating"])
                if "userMemo" in updates:
                    item["userMemo"] = str(updates["userMemo"]).strip()
                if updates.get("incrementCooked"):
                    item["cookedCount"] = int(item.get("cookedCount", 0)) + 1
                    item["lastCookedAt"] = _now_iso()
                save_store(store)
                return item
    raise ValueError("저장된 레시피를 찾을 수 없습니다.")


def delete_saved_recipe(saved_id: str) -> bool:
    with _STORE_LOCK:
        store = load_store()
        before = len(store["savedRecipes"])
        store["savedRecipes"] = [r for r in store["savedRecipes"] if r["savedId"] != saved_id]
        save_store(store)
        return len(store["savedRecipes"]) < before


def _compute_stats(store: dict, profile_id: str | None) -> dict:
    target_id = profile_id or store.get("activeProfileId")
    recipes = _recipes_of(store, target_id)

    cuisine_counter: Counter = Counter()
    ingredient_counter: Counter = Counter()
    total_cooked = 0
    starred_count = 0

    for item in recipes:
        total_cooked += int(item.get("cookedCount", 0))
        if item.get("starred"):
            starred_count += 1
        rcp = item.get("recipe") or {}
        cuisine = rcp.get("cuisine") or "기타"
        cuisine_counter[cuisine] += 1
        owned = (rcp.get("ingredients") or {}).get("owned") or []
        for ing in owned:
            name = ing.get("name") if isinstance(ing, dict) else str(ing)
            if name:
                ingredient_counter[name] += 1

    return {
        "profileId": target_id,
        "totalSaved": len(recipes),
        "starredCount": starred_count,
        "totalCookedCount": total_cooked,
        "cuisineBreakdown": dict(cuisine_counter),
        "topIngredients": [{"name": k, "count": v} for k, v in ingredient_counter.most_common(5)],
    }


def get_profile_stats(profile_id: str | None = None) -> dict:
    return _compute_stats(load_store(), profile_id)


def export_backup() -> dict:
    return load_store()


def validate_backup(backup_data) -> dict:
    """백업 JSON 의 스키마를 검증하고 정규화된 새 dict 를 반환합니다. 잘못되면 ValueError."""
    if not isinstance(backup_data, dict):
        raise ValueError("유효하지 않은 백업 JSON 형식입니다.")
    profiles = backup_data.get("profiles")
    recipes = backup_data.get("savedRecipes")
    if not isinstance(profiles, list) or not profiles or not isinstance(recipes, list):
        raise ValueError("유효하지 않은 백업 JSON 형식입니다.")

    profile_ids: set[str] = set()
    for prof in profiles:
        if not isinstance(prof, dict) or not isinstance(prof.get("profileId"), str) or not prof["profileId"]:
            raise ValueError("백업의 프로필 항목 형식이 올바르지 않습니다.")
        if not isinstance(prof.get("nickname"), str) or not prof["nickname"].strip():
            raise ValueError("백업의 프로필에 닉네임이 없습니다.")
        for key in ("allergies", "dislikedIngredients"):
            if key in prof and not isinstance(prof[key], list):
                raise ValueError(f"백업의 프로필 '{key}' 형식이 올바르지 않습니다.")
        if prof["profileId"] in profile_ids:
            raise ValueError("백업에 중복된 프로필 ID 가 있습니다.")
        profile_ids.add(prof["profileId"])

    saved_ids: set[str] = set()
    for item in recipes:
        if not isinstance(item, dict) or not isinstance(item.get("savedId"), str) or not item["savedId"]:
            raise ValueError("백업의 레시피 항목 형식이 올바르지 않습니다.")
        if not isinstance(item.get("recipe"), dict):
            raise ValueError("백업의 레시피 데이터 형식이 올바르지 않습니다.")
        if item.get("profileId") not in profile_ids:
            raise ValueError("백업의 레시피가 존재하지 않는 프로필을 참조합니다.")
        if item["savedId"] in saved_ids:
            raise ValueError("백업에 중복된 레시피 ID 가 있습니다.")
        saved_ids.add(item["savedId"])

    active_id = backup_data.get("activeProfileId")
    if active_id not in profile_ids:
        active_id = profiles[0]["profileId"]
    return {"activeProfileId": active_id, "profiles": profiles, "savedRecipes": recipes}


def import_backup(backup_data: dict) -> dict:
    clean = validate_backup(backup_data)
    with _STORE_LOCK:
        save_store(clean)
        return load_store()
