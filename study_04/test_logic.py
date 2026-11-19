"""
순수 로직 검증 테스트 (외부 API 호출 없음, 실제 data/store.json 을 건드리지 않음).
모든 저장소 접근은 pytest tmp_path 로 STORE_PATH 를 바꿔서 수행합니다.

실행: python -m pytest test_logic.py -v
"""

import base64
import io
import json
import threading

import pytest
from PIL import Image

import step3_profile as sp
import step1_vision
import step2_recipe
import server


@pytest.fixture()
def store_path(tmp_path, monkeypatch):
    path = tmp_path / "store.json"
    monkeypatch.setattr(sp, "STORE_PATH", path)
    return path


# ---------- R8: 카테고리 판정 ----------
@pytest.mark.parametrize(
    "name, expected",
    [
        ("김치", "가공식품"),
        ("참치캔", "가공식품"),
        ("참치", "수산물"),
        ("김", "수산물"),
        ("고추장", "양념/기타"),
        ("고추", "채소"),
        ("대파", "채소"),
        ("파프리카", "채소"),
        ("닭가슴살", "육류"),
        ("계란", "유제품/난류"),
        ("사과", "과일"),
        ("단무지", "양념/기타"),  # 한 글자 키워드 '무' 가 이름 중간에 있어도 채소로 오분류하지 않음
        ("미지의재료", "양념/기타"),
    ],
)
def test_guess_category_picks_most_specific_keyword(name, expected):
    assert step1_vision.guess_category(name) == expected


# ---------- R2/R3: 저장소 ----------
def test_corrupt_store_is_preserved_not_overwritten(store_path):
    store_path.write_text("{ this is not json", encoding="utf-8")

    data = sp.load_store()

    assert data["profiles"][0]["profileId"] == "usr_default"
    preserved = list(store_path.parent.glob("store.json.corrupt-*"))
    assert len(preserved) == 1
    assert preserved[0].read_text(encoding="utf-8") == "{ this is not json"


def test_save_store_leaves_no_temp_files_and_roundtrips(store_path):
    store = sp._default_store()
    store["profiles"][0]["nickname"] = "한글닉네임"

    sp.save_store(store)

    assert json.loads(store_path.read_text(encoding="utf-8"))["profiles"][0]["nickname"] == "한글닉네임"
    assert [p.name for p in store_path.parent.iterdir()] == ["store.json"]


def test_concurrent_increment_cooked_loses_no_updates(store_path):
    sp.save_recipe_to_profile("usr_default", {"title": "t", "cuisine": "한식"})
    saved_id = sp.list_saved_recipes("usr_default")[0]["savedId"]

    threads = [
        threading.Thread(target=sp.update_saved_recipe, args=(saved_id, {"incrementCooked": True}))
        for _ in range(20)
    ]
    for t in threads:
        t.start()
    for t in threads:
        t.join()

    assert sp.list_saved_recipes("usr_default")[0]["cookedCount"] == 20


# ---------- P1: state 1회 로드 ----------
def test_get_state_reads_store_file_exactly_once(store_path, monkeypatch):
    sp.save_recipe_to_profile("usr_default", {"title": "김치볶음밥", "cuisine": "한식", "ingredients": {"owned": [{"name": "김치"}]}})
    reads = []
    original = sp.json.loads
    monkeypatch.setattr(sp.json, "loads", lambda *a, **k: (reads.append(1), original(*a, **k))[1])

    state = sp.get_state()

    assert len(reads) == 1
    assert state["activeProfileId"] == "usr_default"
    assert state["stats"]["totalSaved"] == 1
    assert state["savedRecipes"][0]["recipe"]["title"] == "김치볶음밥"
    assert state["stats"]["topIngredients"] == [{"name": "김치", "count": 1}]


# ---------- R11: 프로필 부분 업데이트 ----------
def test_partial_profile_update_keeps_allergies_and_disliked(store_path):
    sp.create_or_update_profile({"profileId": "usr_default", "allergies": "땅콩, 새우", "dislikedIngredients": "고수"})

    updated = sp.create_or_update_profile({"profileId": "usr_default", "nickname": "새이름"})

    assert updated["nickname"] == "새이름"
    assert updated["allergies"] == ["땅콩", "새우"]
    assert updated["dislikedIngredients"] == ["고수"]


def test_explicit_empty_allergies_clears_list(store_path):
    sp.create_or_update_profile({"profileId": "usr_default", "allergies": "땅콩"})

    updated = sp.create_or_update_profile({"profileId": "usr_default", "allergies": ""})

    assert updated["allergies"] == []


# ---------- R5: 백업 검증 ----------
def _valid_backup():
    return {
        "activeProfileId": "p1",
        "profiles": [{"profileId": "p1", "nickname": "a"}],
        "savedRecipes": [{"savedId": "s1", "profileId": "p1", "recipe": {"title": "t"}}],
    }


def test_import_backup_accepts_valid_data_and_persists(store_path):
    sp.import_backup(_valid_backup())

    assert sp.load_store()["savedRecipes"][0]["savedId"] == "s1"


@pytest.mark.parametrize(
    "mutate",
    [
        lambda b: b.update(profiles=[]),
        lambda b: b.update(profiles="x"),
        lambda b: b["profiles"].append({"profileId": "p1", "nickname": "dup"}),
        lambda b: b["savedRecipes"][0].update(profileId="ghost"),
        lambda b: b["savedRecipes"][0].update(recipe="not-a-dict"),
        lambda b: b["profiles"][0].update(allergies="땅콩"),
    ],
)
def test_import_backup_rejects_invalid_schema_and_keeps_existing_store(store_path, mutate):
    sp.save_store(sp._default_store())
    before = store_path.read_text(encoding="utf-8")
    bad = _valid_backup()
    mutate(bad)

    with pytest.raises(ValueError):
        sp.import_backup(bad)

    assert store_path.read_text(encoding="utf-8") == before


def test_import_backup_falls_back_to_first_profile_when_active_id_unknown(store_path):
    backup = _valid_backup()
    backup["activeProfileId"] = "ghost"

    sp.import_backup(backup)

    assert sp.load_store()["activeProfileId"] == "p1"


# ---------- R4: 제외 재료 사후 검증 ----------
def test_find_excluded_warnings_detects_allergen_in_owned_and_missing():
    recipe = {"ingredients": {"owned": [{"name": "땅콩버터"}, {"name": "식빵"}], "missing": [{"name": "새우젓"}]}}

    assert step2_recipe.find_excluded_ingredient_warnings(recipe, ["땅콩", "새우", "우유"]) == ["땅콩", "새우"]


def test_find_excluded_warnings_empty_when_clean():
    recipe = {"ingredients": {"owned": [{"name": "식빵"}], "missing": []}}

    assert step2_recipe.find_excluded_ingredient_warnings(recipe, ["땅콩"]) == []


# ---------- P9: EXIF 회전 ----------
def test_preprocess_applies_exif_orientation():
    img = Image.new("RGB", (40, 20), (200, 10, 10))
    exif = Image.Exif()
    exif[0x0112] = 6  # 90도 회전 필요
    buf = io.BytesIO()
    img.save(buf, format="JPEG", exif=exif)

    data_url = step1_vision.preprocess_image_to_data_url(buf.getvalue())

    out = Image.open(io.BytesIO(base64.b64decode(data_url.split(",", 1)[1])))
    assert out.size == (20, 40)


# ---------- P4: 응답에서 previewDataUrl 제거 ----------
def test_recognize_response_has_no_preview_data_url(monkeypatch):
    class FakeResp:
        def raise_for_status(self):
            pass

        def json(self):
            return {"choices": [{"message": {"content": "계란, 김치", "reasoning": ""}}]}

    class FakeClient:
        def post(self, *a, **k):
            return FakeResp()

    monkeypatch.setattr(step1_vision, "get_http_client", lambda: FakeClient())
    monkeypatch.setattr(step1_vision, "get_openrouter_headers", lambda: {})
    buf = io.BytesIO()
    Image.new("RGB", (8, 8)).save(buf, format="JPEG")

    result = step1_vision.recognize_ingredients_from_image(buf.getvalue())

    assert "previewDataUrl" not in result
    assert [(i["name"], i["category"]) for i in result["ingredients"]] == [("계란", "유제품/난류"), ("김치", "가공식품")]


# ---------- R6: 서버 오류 매핑 ----------
@pytest.fixture()
def client(store_path):
    return server.app.test_client()


def test_invalid_data_url_returns_400(client):
    res = client.post("/api/step1/recognize-ingredients", json={"imageDataUrl": "no-comma-here"})

    assert res.status_code == 400


def test_non_image_upload_returns_400(client):
    res = client.post(
        "/api/step1/recognize-ingredients",
        data={"image": (io.BytesIO(b"definitely not an image"), "x.jpg")},
        content_type="multipart/form-data",
    )

    assert res.status_code == 400
    assert "error" in res.get_json()


def test_oversized_body_returns_413_json(client):
    big = io.BytesIO(b"0" * (server.MAX_UPLOAD_BYTES + 1024))

    res = client.post(
        "/api/step1/recognize-ingredients",
        data={"image": (big, "big.jpg")},
        content_type="multipart/form-data",
    )

    assert res.status_code == 413
    assert "error" in res.get_json()


def test_non_numeric_max_time_returns_400(client):
    res = client.post("/api/step2/generate-recipe", json={"ingredients": ["계란"], "maxTime": "abc"})

    assert res.status_code == 400


def test_unexpected_exception_message_is_not_leaked(client, monkeypatch):
    def boom(_bytes):
        raise RuntimeError("SECRET-INTERNAL-DETAIL")

    monkeypatch.setattr(server, "recognize_ingredients_from_image", boom)

    res = client.post("/api/step1/recognize-ingredients", json={"useSample": True})

    assert res.status_code == 500
    assert "SECRET-INTERNAL-DETAIL" not in res.get_data(as_text=True)


def test_state_endpoint_and_select_return_consistent_state(client):
    first = client.get("/api/step3/state").get_json()
    created = client.post("/api/step3/profiles", json={"nickname": "둘째"}).get_json()

    assert len(created["state"]["profiles"]) == len(first["profiles"]) + 1
    assert created["state"]["activeProfileId"] == created["profile"]["profileId"]

    switched = client.post("/api/step3/profiles/select", json={"profileId": "usr_default"}).get_json()
    assert switched["state"]["activeProfileId"] == "usr_default"


def test_restore_endpoint_rejects_bad_schema_with_400(client):
    res = client.post("/api/step3/restore", json={"profiles": [], "savedRecipes": []})

    assert res.status_code == 400
