---
name: quiz-validate
description: 특정 문제 ID, 특정 과목, 또는 전체 문제 데이터 무결성을 검증합니다. (/quiz-validate [argument])
---

# 🔍 퀴즈 데이터 유효성 검증 (`/quiz-validate $argument`)

이 명령어는 `questions.js` 데이터베이스의 문항 정합성을 검증합니다.
인자(`$argument`)에 따라 **특정 문제 단건 검증**, **특정 과목 집중 검증**, 또는 **전체 문항 일괄 검증**을 유연하게 수행합니다.

---

## 📌 사용법 (Usage)

| 호출 형태 | 동작 설명 | 예시 |
| :--- | :--- | :--- |
| `/quiz-validate` 또는 `/quiz-validate all` | 전체 문제(60문항)의 스키마 및 무결성을 일괄 검사합니다. | `/quiz-validate all` |
| `/quiz-validate $문제ID` | 특정 번호의 문제를 상세 검증하고 지문/보기/정답/해설을 출력합니다. | `/quiz-validate 5` |
| `/quiz-validate $과목명` | 지정한 과목에 속한 문제들만 필터링하여 유효성을 검사합니다. | `/quiz-validate 소프트웨어 설계` |

---

## 🔍 검증 체크리스트

1. **문항 필수 필드 검사**:
   - `id`, `subject`, `question`, `options`, `answer_index`, `explanation` 필드 완전성
2. **ID 고유성 검사**:
   - 중복 ID 존재 여부 확인
3. **보기(options) 유효성**:
   - 보기가 정확히 4개인지 확인
   - 빈 문자열(`""`) 보기가 없는지 확인
4. **정답 인덱스 범위**:
   - `answer_index`가 0, 1, 2, 3 중 하나인지 확인 (0-based)
5. **해설 유효성**:
   - 상세 해설 누락 여부 확인
6. **과목 표준 명칭**:
   - 5대 표준 과목명(`소프트웨어 설계`, `소프트웨어 개발`, `데이터베이스 구축`, `프로그래밍 언어 활용`, `정보시스템 구축관리`) 준수 여부 확인

---

## 💻 빠른 CLI 실행

터미널에서 직접 실행할 수도 있습니다:

```bash
# 전체 검증
node .antigravity/commands/validate-questions.js

# 특정 문제 ID 검증 (예: ID 5)
node .antigravity/commands/validate-questions.js 5

# 특정 과목 검증 (예: 소프트웨어 설계)
node .antigravity/commands/validate-questions.js "소프트웨어 설계"
```

---

## 🤖 에이전트 실행 지침

1. 사용자가 전달한 `$argument`를 분석합니다:
   - 숫자 형태인 경우: 단일 문제 검증 모드로 판단
   - 과목명 또는 문자열인 경우: 과목 필터링 검증 모드로 판단
   - 인자가 없거나 `all`인 경우: 전체 검증 모드로 판단
2. 터미널 명령 `node .antigravity/commands/validate-questions.js <인자>`를 실행합니다.
3. 검증 결과(문항 수, 무결성 여부, 상세 내용 또는 오류 항목)를 마크다운 형식으로 요약 보고합니다.
