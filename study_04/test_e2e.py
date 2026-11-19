"""
1단계 -> 2단계 -> 3단계 순차 통합 검증 스크립트 (Flask Test Client)
"""

from pathlib import Path
from server import app


def run_sequential_e2e():
    client = app.test_client()

    print("=" * 60)
    print("[Step 1 검증] 냉장고 사진 식재료 인식 (inclusionai/ling-3.2-flash:free)")
    print("=" * 60)
    res1 = client.post("/api/step1/recognize-ingredients", json={"useSample": True})
    assert res1.status_code == 200, f"Step 1 실패: {res1.data}"
    data1 = res1.get_json()
    ingredients = data1.get("ingredients", [])
    print(f" - 모델: {data1.get('model')}")
    print(f" - 인식된 식재료 수: {len(ingredients)}개")
    for ing in ingredients:
        print(f"   * {ing['name']} ({ing['category']}) - {ing['quantity']}")
    print(f" - 요약: {data1.get('summary')}")
    assert len(ingredients) > 0, "식재료가 최소 1개 이상 인식되어야 합니다."

    print("\n" + "=" * 60)
    print("[Step 2 검증] 맞춤 레시피 & 요리 이미지 생성 (recraft/recraft-v4.1-flash-v2:free)")
    print("=" * 60)
    res2 = client.post(
        "/api/step2/generate-recipe",
        json={
            "ingredients": ingredients,
            "pantryItems": ["소금", "간장", "참기름", "마늘", "식용유"],
            "cuisine": "한식",
            "maxTime": 20,
            "difficulty": "초급",
            "servings": 2,
            "excludedIngredients": ["고수"],
            "dietType": "일반식",
        },
    )
    assert res2.status_code == 200, f"Step 2 실패: {res2.data}"
    recipe = res2.get_json()
    print(f" - 생성된 요리명: {recipe.get('title')}")
    print(f" - 한 줄 소개: {recipe.get('subtitle')}")
    print(f" - 조리 시간 / 난이도 / 칼로리: {recipe.get('cookingTimeMinutes')}분 / {recipe.get('difficulty')} / {recipe.get('calories')}")
    print(f" - 이미지 생성 모델: {recipe.get('imageModel')}")
    print(f" - 생성된 요리 이미지 경로: {recipe.get('imageUrl')}")
    img_rel = recipe.get("imageUrl", "").lstrip("/")
    img_file = Path(__file__).resolve().parent / img_rel
    assert img_file.exists(), f"생성된 요리 이미지 파일이 존재하지 않습니다: {img_file}"
    print(f" - 이미지 파일 크기: {img_file.stat().st_size:,} bytes")

    print("\n" + "=" * 60)
    print("[Step 3 검증] 사용자 프로필 설정 및 레시피북 저장·관리")
    print("=" * 60)
    # 1) 프로필 업데이트
    res_prof = client.post(
        "/api/step3/profiles",
        json={
            "profileId": "usr_default",
            "nickname": "자취요리왕",
            "avatar": "👨‍🍳",
            "bio": "냉장고 파먹기 챌린지 중!",
            "skillLevel": "초급",
            "dietType": "일반식",
            "allergies": ["땅콩"],
            "dislikedIngredients": ["고수", "오이"],
        },
    )
    assert res_prof.status_code == 200
    prof_data = res_prof.get_json()["profile"]
    print(f" - 활성 프로필: {prof_data['avatar']} {prof_data['nickname']} (제외 재료: {prof_data['allergies'] + prof_data['dislikedIngredients']})")

    # 2) 생성된 레시피를 프로필 레시피북에 저장
    res_save = client.post(
        "/api/step3/recipes",
        json={
            "profileId": "usr_default",
            "recipe": recipe,
            "userRating": 5,
            "userMemo": "1단계 인식 재료로 바로 만들었는데 정말 맛있어요!",
        },
    )
    assert res_save.status_code == 200
    saved_item = res_save.get_json()["saved"]
    saved_id = saved_item["savedId"]
    print(f" - 레시피북 저장 완료: ID={saved_id}, 요리명='{saved_item['recipe']['title']}'")

    # 3) 즐겨찾기 및 요리 완료 횟수 업데이트
    res_patch = client.patch(
        f"/api/step3/recipes/{saved_id}",
        json={"starred": True, "incrementCooked": True},
    )
    assert res_patch.status_code == 200
    updated_stats = res_patch.get_json()["stats"]
    print(
        f" - 레시피북 통계: 총 저장 {updated_stats['totalSaved']}개 | "
        f"즐겨찾기 {updated_stats['starredCount']}개 | "
        f"누적 요리 완료 {updated_stats['totalCookedCount']}회"
    )
    print("\n[SUCCESS] Step 1 -> Step 2 -> Step 3 전 단계 통합 테스트 통과!")


if __name__ == "__main__":
    run_sequential_e2e()
