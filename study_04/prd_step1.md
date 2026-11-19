# [PRD Step 1] 냉장고 사진 기반 식재료 인식 시스템 (`prd_step1.md`)

## 1. 단계 개요 (Overview)
- **단계명**: Step 1 — 냉장고/식재료 이미지 입력 및 AI 식재료 자동 인식
- **목적**: 사용자가 업로드하거나 촬영한 냉장고 내부(또는 식재료) 사진을 OpenRouter의 `inclusionai/ling-3.2-flash:free` 멀티모달(Vision) 모델로 분석하여, 사진 속 식재료 목록·수량/상태·카테고리를 구조화된 데이터로 추출하고 사용자가 직접 검수/보정할 수 있는 인터페이스를 제공한다.
- **사용 AI 모델**: `inclusionai/ling-3.2-flash:free` (`text+image -> text`)
- **핵심 가치**:
  - 대용량 사진 자동 경량화(리사이징·압축)를 통한 빠른 Vision API 응답 속도 확보
  - AI 인식 결과의 불완전성을 보완하는 직관적인 식재료 태그 추가/수정/삭제 UX
  - `.env` 기반 API 키 보안 유지 (백엔드 프록시 구조를 통해 브라우저에 API 키 노출 차단)

---

## 2. 기능 요구사항 명세 (Functional Requirements)

### 2.1 이미지 입력 및 전처리
| 기능 ID | 기능명 | 상세 내용 |
| :--- | :--- | :--- |
| **FR-101** | **이미지 업로드 (파일/드래그앤드롭)** | 클릭하여 파일 선택 또는 드래그 앤 드롭으로 냉장고/식재료 사진(`JPG`, `PNG`, `WEBP`) 업로드 지원 |
| **FR-102** | **카메라 촬영 및 클립보드 붙여넣기** | 모바일/웹캠 촬영(`capture="environment"`) 및 `Ctrl+V` 클립보드 이미지 붙여넣기 지원 |
| **FR-103** | **샘플 이미지 원클릭 테스트** | 사진이 없는 사용자도 즉시 테스트할 수 있도록 기본 냉장고 샘플 이미지 프리셋 제공 |
| **FR-104** | **이미지 미리보기 및 자동 경량화** | 업로드 즉시 화면에 프리뷰를 표시하고, Vision API 전송 전 최대 `768x768`(또는 `512x512`) JPEG(품질 80%)로 리사이즈하여 전송 지연 방지 |

### 2.2 OpenRouter Vision API 식재료 인식
| 기능 ID | 기능명 | 상세 내용 |
| :--- | :--- | :--- |
| **FR-105** | **식재료 자동 추출 요청** | `inclusionai/ling-3.2-flash:free` 모델에 이미지(Base64 Data URL)와 구조화 프롬프트를 전송하여 식재료 목록을 JSON 형태로 추출 |
| **FR-106** | **식재료 상세 속성 분류** | 각 식재료별로 `이름(name)`, `카테고리(category: 채소/육류/수산물/유제품/양념/기타)`, `추정 수량/상태(quantity)` 추출 |
| **FR-107** | **로딩 상태 및 진행률 표시** | 이미지 전처리 → AI 분석 중 단계별 스켈레톤 UI 및 스피너 표시, 타임아웃/오류 시 재시도 안내 |

### 2.3 인식 결과 검수 및 수동 편집 (Human-in-the-loop)
| 기능 ID | 기능명 | 상세 내용 |
| :--- | :--- | :--- |
| **FR-108** | **식재료 태그(Chip) 시각화** | 인식된 식재료를 카테고리별 색상 뱃지/태그 형태로 출력 |
| **FR-109** | **식재료 수동 추가/수정/삭제** | AI가 놓친 식재료를 직접 입력해 추가하거나, 잘못 인식된 식재료 태그를 클릭하여 수정·삭제 |
| **FR-110** | **기본 보유 양념 체크** | 소금, 설탕, 간장, 식용유, 고추장, 마늘 등 가정 내 기본 상비 양념을 체크박스로 간편 포함/제외 |
| **FR-111** | **2단계(레시피 생성) 데이터 전달** | 최종 확정된 식재료 리스트를 Step 2(레시피 추천 및 생성 모듈)의 입력 데이터로 전달 |

---

## 3. 기술 사양 및 API 연동 설계 (Technical Specifications)

### 3.1 시스템 아키텍처
- **백엔드 (Python FastAPI / Flask)**:
  - `.env`의 `OPENROUTER_API_KEY`를 [config.py](file:///C:/Users/Jinsung/git/Practical_AI/study_04/config.py)로 안전하게 로드
  - `POST /api/step1/recognize-ingredients` 엔드포인트 제공
  - Pillow(`PIL`)를 사용해 업로드된 이미지를 최적화한 뒤 OpenRouter API 호출
- **프론트엔드 (HTML5 / CSS3 / Vanilla JS)**:
  - 이미지 드래그앤드롭 존, 프리뷰 캔버스, 식재료 태그 에디터 UI 제공

### 3.2 OpenRouter 요청/응답 스키마
- **Target Model**: `inclusionai/ling-3.2-flash:free`
- **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`
- **프롬프트 출력 JSON 스키마 예시**:
  ```json
  {
    "ingredients": [
      {
        "id": "ing_1",
        "name": "계란",
        "category": "유제품/난류",
        "quantity": "6개",
        "confidence": "high"
      },
      {
        "id": "ing_2",
        "name": "대파",
        "category": "채소",
        "quantity": "1단",
        "confidence": "high"
      },
      {
        "id": "ing_3",
        "name": "두부",
        "category": "가공식품",
        "quantity": "1모",
        "confidence": "medium"
      }
    ],
    "summary": "계란, 대파, 두부 등 한식 조리에 적합한 신선 식재료가 확인되었습니다."
  }
  ```

---

## 4. 완료 기준 (Acceptance Criteria)
1. 사용자가 냉장고 사진을 업로드하면 15초 이내에 `inclusionai/ling-3.2-flash:free` 모델이 식재료 목록을 한국어로 반환해야 한다.
2. 대용량 이미지(1MB 이상)를 업로드하더라도 자동 압축되어 타임아웃 없이 정상 인식되어야 한다.
3. 인식된 식재료 목록에서 사용자가 자유롭게 재료를 추가하거나 삭제한 뒤 2단계(레시피 생성)로 넘어갈 수 있어야 한다.
