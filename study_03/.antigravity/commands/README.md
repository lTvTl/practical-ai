# 🛠️ Antigravity Custom Commands (`.antigravity/commands`)

이 디렉터리는 **Google Antigravity** 환경에서 슬래시 명령어(`/command-name`)로 호출하여 반복적인 작업이나 프로젝트 특화 워크플로를 자동화할 수 있는 커스텀 명령어 정의 폴더입니다.

---

## 📁 디렉터리 구조

```text
.antigravity/
└── commands/
    ├── README.md               # 커스텀 명령어 가이드 및 사용법
    ├── quiz-add.md             # 카테고리/난이도 기반 문제 추가 (/quiz-add $카테고리 $난이도)
    ├── add-question.md         # 기출문제 추가 명령어 (/add-question)
    ├── test-quiz.md            # 문제 데이터 무결성 및 코드 검증 (/test-quiz)
    ├── quiz-validate.md        # 문제 단건/과목/전체 유연 검증 (/quiz-validate $argument)
    ├── quiz-range.md           # 특정 구간 문제 심층 분석 (/quiz-range $시작 $끝)
    ├── review.md               # 웹 애플리케이션 UI/UX 및 코드 품질 검토 (/review)
    ├── validate-questions.js   # 문제 데이터 무결성 검증 스크립트 (단건/과목/전체)
    └── analyze-range.js        # 특정 범위 문제 심층 분석 스크립트
```

---

## 🚀 사용 가능한 커스텀 명령어 목록

| 슬래시 명령어 / 스크립트 | 파일명 | 설명 |
| :--- | :--- | :--- |
| `/quiz-add $카테고리 $난이도` | `quiz-add.md` | 지정한 과목과 난이도(상/중/하)에 맞는 신규 문제를 표준 규격으로 추가 및 검증 |
| `/quiz-validate $argument` | `quiz-validate.md` | ID, 과목, 또는 전체를 대상으로 퀴즈 데이터 무결성 및 스키마 검증 |
| `/quiz-range $시작 $끝` | `quiz-range.md` | 특정 번호 범위의 문제들을 추출하여 과목/정답 분포, 텍스트 통계 등 심층 분석 |
| `/add-question` | `add-question.md` | `questions.js`에 새로운 기출문제를 표준 형식에 맞추어 안전하게 추가 |
| `/test-quiz` | `test-quiz.md` | `questions.js` 전체 데이터 무결성 및 app.js 유효성 검사 |
| `/review` | `review.md` | 웹 접근성, 반응형 CSS, LocalStorage, Web Audio API 및 PRD 충족도 종합 리뷰 |
| `node validate-questions.js` | `validate-questions.js` | 단일 ID / 과목 / 전체 문제 무결성 검증 CLI 실행기 |
| `node analyze-range.js` | `analyze-range.js` | 특정 범위 문제 통계 및 정답 분포 분석 CLI 실행기 |

---

## ✍️ 새 커스텀 명령어 작성 방법

1. `.antigravity/commands/` 폴더 내에 `<명령어명>.md` 파일을 생성합니다.
2. 상단에 YAML Frontmatter를 추가합니다:
   ```markdown
   ---
   name: my-command
   description: 이 명령어가 수행하는 작업에 대한 간결한 설명
   ---
   ```
3. 본문에 AI 에이전트가 수행해야 할 세부 절차, 검증 규칙, 입출력 포맷을 Markdown으로 명시합니다.
4. Antigravity 채팅창 또는 터미널에서 `/<명령어명>`으로 즉시 실행할 수 있습니다.
