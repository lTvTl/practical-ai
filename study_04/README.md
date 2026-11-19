# 🧊 냉장고 파먹기 AI 셰프 (Fridge-to-Recipe AI Web App)

OpenRouter API를 활용하여 **냉장고 사진 속 식재료 인식(Step 1)** → **맞춤형 레시피 및 요리 이미지 생성(Step 2)** → **사용자 프로필 기반 레시피북 저장·관리(Step 3)** 를 수행하는 풀스택 웹 애플리케이션입니다.

---

## 📌 단계별 구조 및 PRD 문서

1. **[Step 1: 식재료 인식 (`prd_step1.md`)](./prd_step1.md)**
   - **구현 모듈**: [`step1_vision.py`](./step1_vision.py)
   - **사용 모델**: `inclusionai/ling-3.2-flash:free` (`text+image -> text`)
   - **주요 기능**: 냉장고 사진 업로드/드래그앤드롭/카메라/클립보드 붙여넣기/샘플 테스트, Pillow 기반 이미지 자동 경량화, 식재료명·카테고리·수량 JSON 추출, 식재료 태그 추가/수정/삭제 및 기본 보유 양념 선택

2. **[Step 2: 레시피 & 요리 이미지 생성 (`prd_step2.md`)](./prd_step2.md)**
   - **구현 모듈**: [`step2_recipe.py`](./step2_recipe.py)
   - **사용 모델**: `recraft/recraft-v4.1-flash-v2:free` (`text -> image`) + `inclusionai/ling-3.2-flash:free`
   - **주요 기능**: 1단계 식재료 및 3단계 프로필(알레르기/기피 재료) 연동, 요리 테마·시간·난이도·인분 설정, 인분 수 동적 계량 변환, 단계별 조리 체크리스트, `recraft` 모델 기반 완성 요리 이미지 자동 생성

3. **[Step 3: 사용자 프로필 & 레시피북 (`prd_step3.md`)](./prd_step3.md)**
   - **구현 모듈**: [`step3_profile.py`](./step3_profile.py)
   - **주요 기능**: 다중 프로필 생성/전환/편집(숙련도, 식단 성향, 알레르기·기피 식재료), 레시피북 저장·즐겨찾기(⭐)·요리 완료 카운터·별점·나만의 메모 CRUD, 통계 대시보드, 통합 검색/필터 및 JSON 백업(Export)/복원(Import)

---

## 🚀 실행 방법

### 1. 환경변수 설정
`.env.example`을 참고하여 `.env` 파일에 OpenRouter API 키를 저장합니다.
```env
OPENROUTER_API_KEY=sk-or-v1-your_api_key_here
```

### 2. 웹 서버 실행
```powershell
python server.py
```
브라우저에서 `http://127.0.0.1:5000` 에 접속합니다.

### 3. 단계별 통합 테스트 실행
```powershell
python test_e2e.py
```
