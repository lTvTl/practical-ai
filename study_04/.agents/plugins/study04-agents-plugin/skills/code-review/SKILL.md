---
name: code-review
description: "study_04 프로젝트의 Python 백엔드 및 Vanilla JS 프론트엔드 코드를 읽고 버그 탐지, 코딩 규칙(PEP 8, ES6+, 보안) 준수 여부 점검, 성능 최적화 제안을 수행하는 전문 코드 품질 검토 스킬. '코드 리뷰해줘', '버그 찾아줘', '코드 품질 점검', '성능 최적화 제안해줘', '코딩 규칙 확인해줘' 요청 시 반드시 이 스킬을 사용한다."
---

# Code Review Skill (`study_04` 전용)

현재 프로젝트(`study_04`)의 코드베이스를 정밀 분석하여 버그, 코딩 규칙 위반, 보안 취약점, 성능 병목을 찾아내고 구체적인 개선 코드를 제안한다.

## 검토 프로세스

### Step 1: 대상 파일 탐색 및 읽기
1. 사용자가 특정 파일을 지정하면 해당 파일을 읽고, 전체 리뷰를 요청하면 다음 핵심 파일들을 순서대로 점검한다:
   - 백엔드 설정 및 서버: `config.py`, `server.py`
   - 단계별 비즈니스 로직: `step1_vision.py`, `step2_recipe.py`, `step3_profile.py`
   - 프론트엔드 UI 및 상태 관리: `index.html`, `style.css`, `app.js`

### Step 2: 3대 핵심 체크리스트 점검

#### 1. 버그 및 예외 안전성 (Bug & Edge Cases)
- **OpenRouter API 응답 처리**: `choices[0].message.content`가 `None`이거나 JSON 포맷이 깨졌을 때, 혹은 `images` 배열이 비어 있을 때 런타임 예외(`KeyError`, `IndexError`, `JSONDecodeError`) 없이 폴백이 동작하는가?
- **파일 및 데이터 저장소(`data/store.json`)**: 동시 요청이나 잘못된 JSON 입력 시 파일 손상 방지 및 기본값 복구 로직이 안전한가?
- **프론트엔드 상태 동기화**: 비동기 `fetch` 중 버튼 중복 클릭 방지(`disabled`), 에러 응답 처리(`!response.ok`), XSS 위험(`innerHTML`에 사용자 입력 삽입 시 이스케이프 여부)이 없는가?

#### 2. 코딩 규칙 및 보안 (Conventions & Security)
- **API 키 보안**: `.env`의 `OPENROUTER_API_KEY`가 로그, 에러 메시지, 프론트엔드 응답에 노출되지 않는가?
- **Python 규칙**: PEP 8 네이밍(`snake_case`), 타입 힌트 명시, 상수 대문자 표기, 불필요한 중복 코드 제거 여부를 확인한다.
- **Frontend 규칙**: ES6+(`const`/`let`, `async/await`), 시맨틱 태그, 다크 모드 CSS 변수(`--bg`, `--surface`, `--text`) 일관성을 확인한다.

#### 3. 성능 최적화 (Performance Optimization)
- **이미지 및 네트워크 페이로드**: Vision API 전송 이미지 리사이징 크기·품질과 Recraft 생성 이미지 저장 포맷(WebP)이 최적화되어 있는가?
- **LLM 응답 속도**: `inclusionai/ling-3.2-flash:free` 호출 시 불필요한 추론 지연을 막기 위해 `reasoning: {"effort": "low"}` 및 간결한 프롬프트가 적용되어 있는가?
- **클라이언트 렌더링**: DOM 조작 횟수 최소화 및 이미지 로딩 최적화가 적용되어 있는가?

### Step 3: 리뷰 보고서 작성 형식

검토 결과는 아래 구조로 명확하게 보고한다:

```markdown
# 🔍 코드 품질 리뷰 보고서

## 1. 종합 요약
- **검토 대상**: [파일 목록]
- **코드 품질 총점**: [0~100점]
- **발견된 이슈 요약**: 🚨 Critical N건 | ⚠️ Warning N건 | 💡 Optimization N건

## 2. 상세 점검 결과
### 🚨 Critical (버그 및 보안 취약점)
- **[파일명:라인번호] 이슈 제목**
  - **원인**: ...
  - **개선 코드 (Before / After)**: ...

### ⚠️ Warning (코딩 규칙 및 예외 처리 보완)
- **[파일명:라인번호] 이슈 제목**
  - **설명 및 개선안**: ...

### 💡 Optimization (성능 최적화 제안)
- **[파일명:라인번호] 최적화 항목**
  - **기대 효과 및 개선 코드**: ...
```
