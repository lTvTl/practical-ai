# 🤖 study_05 · AI 공감 다이어리 & PDF 문서 요약

OpenRouter API를 활용한 AI 웹 애플리케이션 두 가지가 들어 있는 프로젝트입니다.

| 앱 | 하는 일 | 화면 파일 | 서버 |
| :--- | :--- | :--- | :--- |
| 📔 **AI 공감 다이어리** | 한 줄 일기를 쓰면 AI가 감정을 분석하고 따뜻하게 공감·위로해 줍니다 | `index.html` | `server.py` (포트 5000) |
| 📄 **PDF 문서 요약** | PDF를 올리면 AI가 한 줄 요약·핵심 요점·상세 요약으로 정리해 줍니다 | `index_pdf.html` | `server_pdf.py` (포트 5001) |

> 📸 실제 실행 화면은 [`SCREENSHOTS.md`](./SCREENSHOTS.md)에서 프로그램 실행 없이 바로 볼 수 있습니다.

---

## 🚀 실행 방법

### 1. API 키 설정
`.env.example`을 복사해 `.env` 파일을 만들고 OpenRouter API 키를 넣습니다.
```env
OPENROUTER_API_KEY=sk-or-v1-your_api_key_here
```
- 사용 모델은 기본값 `inclusionai/ling-3.2-flash:free`(OpenRouter 무료 모델)입니다.
- 다른 모델을 쓰려면 `.env`에 `OPENROUTER_MODEL=모델ID`를 추가합니다.
- `.env`는 `.gitignore`에 포함되어 저장소에 올라가지 않습니다.

### 2. 패키지 설치와 실행

**📔 AI 공감 다이어리**
```powershell
pip install -r requirements.txt
python server.py
```
브라우저에서 `http://127.0.0.1:5000` 에 접속합니다.

**📄 PDF 문서 요약**
```powershell
pip install -r requirements_pdf.txt
python server_pdf.py
```
브라우저에서 `http://127.0.0.1:5001` 에 접속합니다.

> 서버가 켜져 있으면 `index.html` / `index_pdf.html`을 파일로 직접 열어도(더블클릭) 동작합니다.

### 3. 테스트 실행
```powershell
pip install pytest
python -m pytest test_backend.py                          # 다이어리
python -m pytest test_pdf_backend.py test_pdf_summarizer.py   # PDF 요약
```
테스트는 외부 AI 서비스를 호출하지 않고 실행됩니다.

---

## 📔 AI 공감 다이어리

### ✨ 주요 기능
- **감정 분석 + 공감 메시지:** 감정 이름과 이모지, 강도(1~5단계), 2~4문장의 공감·위로 메시지, 키워드를 반환
- **한 줄 일기 입력:** 1~200자, 글자 수 카운터, Enter로 기록
- **지난 일기 보관:** 브라우저 `localStorage`에 저장하고 개별/전체 삭제 지원 (서버에는 저장하지 않음)
- **위기 상황 안내:** 자해·자살을 암시하는 표현이 있으면 공감 메시지와 함께 전문 상담 안내(자살예방 상담전화 109 등)를 추가로 표시
- **접근성과 테마:** 라이트/다크 모드, 모바일 대응, 키보드 조작

### 🔌 API
| 엔드포인트 | 설명 |
| :--- | :--- |
| `GET /` | `index.html` 제공 |
| `POST /api/diary` | 요청 `{"entry": "한 줄 일기"}` → 응답 `{emotion, emotionEmoji, intensity, empathy, keywords, safetyNotice?}` |

---

## 📄 PDF 문서 요약

### ✨ 주요 기능
- **드래그 앤 드롭 업로드:** 끌어다 놓거나 파일 선택, 키보드로도 선택 가능
- **텍스트 추출:** `pypdf`로 PDF 본문을 추출 (파일 형식은 확장자가 아니라 내용의 `%PDF-` 시그니처로 확인)
- **요약 길이 선택:** 짧게(핵심 3개) / 보통(핵심 5개) / 자세히(핵심 7~8개)
- **긴 문서 처리:** 8,000자를 넘으면 나눠서 부분 요약한 뒤 하나로 통합
- **결과 구성:** 문서 정보(파일명·쪽수·추출 글자 수), 한 줄 요약, 핵심 요점, 상세 요약
- **편의 기능:** 결과 복사, 텍스트 파일로 저장, 길이를 바꿔 다시 요약, 진행 시간 표시와 취소
- **개인정보 안내:** 문서 내용이 외부 AI 서비스로 전송된다는 안내를 항상 표시하며, 서버는 문서를 저장하지 않음

### 📏 지원 범위
| 항목 | 값 |
| :--- | :--- |
| 파일 형식 | 텍스트가 포함된 PDF 1개 |
| 최대 크기 | 10MB |
| 최대 쪽수 | 100쪽 |
| 요약 처리 글자 수 | 앞부분 최대 60,000자 |

### 🔌 API
| 엔드포인트 | 설명 |
| :--- | :--- |
| `GET /` | `index_pdf.html` 제공 |
| `GET /api/health` | 서버 상태, 모델명, API 키 설정 여부, 제한 값 |
| `POST /api/summarize` | multipart 필드 `file`, 선택 `length`(`short`/`medium`/`long`) → 요약 JSON |

요구사항과 API 계약의 전체 내용은 [`PRD_pdf.md`](./PRD_pdf.md)에 있습니다.

---

## 🔒 보안 설계
- **API 키는 서버에만 있습니다.** 화면(HTML)으로 내려가지 않습니다.
- 서버는 `127.0.0.1`에만 연결되며, CORS는 `file://`(Origin `null`)과 `http://127.0.0.1:<포트>`만 허용합니다.
- 화면의 모든 외부 입력·AI 응답은 `textContent`로만 렌더링해 스크립트 삽입(XSS)을 막습니다.
- 사용자 입력과 문서 내용은 구분자로 감싸 AI에게 '데이터'로 전달하고, 그 안의 지시를 따르지 않도록 지시합니다.
- 오류 메시지에는 키·경로 등 내부 정보를 담지 않습니다.

---

## 📁 파일 구성
```text
study_05/
├── index.html                # 📔 다이어리 화면
├── server.py                 # 📔 다이어리 서버 (Flask, 포트 5000)
├── test_backend.py           # 📔 다이어리 서버 테스트
├── requirements.txt          # 📔 다이어리 의존성
├── index_pdf.html            # 📄 PDF 요약 화면
├── server_pdf.py             # 📄 PDF 요약 서버 (Flask, 포트 5001)
├── pdf_extract.py            # 📄 PDF 텍스트 추출·검증
├── summarizer_pdf.py         # 📄 OpenRouter 요약 (긴 문서 분할·통합)
├── pdf_config.py             # 📄 공용 설정 (모델·제한 값)
├── test_pdf_backend.py       # 📄 서버·추출 테스트
├── test_pdf_summarizer.py    # 📄 요약 모듈 테스트
├── requirements_pdf.txt      # 📄 PDF 요약 의존성
├── PRD_pdf.md                # 📄 PDF 요약 기획서(PRD)
├── SCREENSHOTS.md            # 실행 화면 모음
├── screenshots/              # 실행 화면 이미지
└── .env.example              # API 키 설정 예시
```
