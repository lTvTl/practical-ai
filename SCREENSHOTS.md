# 📸 Practical AI 실행 화면 갤러리

> 프로그램을 설치하거나 실행하지 않아도, **각 프로젝트가 어떤 모습으로 동작하는지 화면으로 바로 확인**할 수 있는 문서입니다.

- **촬영일:** 2026-11-19
- **촬영 방식:** 각 앱을 실제로 실행하고 Chrome으로 조작하며 캡처했습니다.
- **AI 호출 화면:** study_04, study_05의 결과 화면은 OpenRouter 무료 모델을 실제로 호출한 결과입니다.

---

## 🗂️ 한눈에 보기

| 분류 | 프로젝트 | 무엇을 하는 앱인가요? | 핵심 기술 | 실행 방법 |
| :--- | :--- | :--- | :--- | :--- |
| 🖥️ 데스크톱 앱 | [**study_01**](#-study_01--손글씨-숫자-인식) | 캔버스에 그린 손글씨 숫자를 머신러닝으로 인식 | Python, scikit-learn, Tkinter | `python main.py` |
| 🌐 웹 앱 | [**study_02**](#-study_02--할-일-관리-daily-task-tracker) | 하루 할 일을 관리하는 투두 앱 | HTML, CSS, JavaScript | `index.html` 열기 |
| 🌐 웹 앱 | [**study_03**](#-study_03--정보처리기사-퀴즈-게임) | 정보처리기사 기출 퀴즈 게임 | HTML, CSS, JavaScript | `index.html` 열기 |
| 🌐 웹 앱 | [**study_03_01**](#-study_03_01--리눅스마스터-2급-cbt) | 리눅스마스터 2급 CBT와 요약 정리 | HTML, CSS, JavaScript | `index.html` 열기 |
| 🤖 AI 연동 웹 앱 | [**study_04**](#-study_04--냉장고-파먹기-ai-셰프) | 냉장고 사진으로 식재료를 인식하고 레시피를 생성 | Flask, OpenRouter | `python server.py` |
| 🤖 AI 연동 웹 앱 | [**study_05**](#-study_05--ai-공감-다이어리--pdf-문서-요약) | 일기에 공감해 주는 AI 다이어리 / PDF 요약 | Flask, OpenRouter | `python server.py`, `python server_pdf.py` |

### 분류 기준
| 분류 | 설명 | 필요한 것 |
| :--- | :--- | :--- |
| 🖥️ **데스크톱 앱** | 내 컴퓨터에서 창으로 실행되는 프로그램 | Python과 라이브러리 설치 |
| 🌐 **웹 앱** | 서버 없이 `index.html`만 열면 바로 실행되는 웹 페이지 | 웹 브라우저 |
| 🤖 **AI 연동 웹 앱** | 서버(Flask)가 AI 서비스(OpenRouter)를 호출하는 웹 앱 | Python, OpenRouter API 키(`.env`) |

---

## 🖥️ 데스크톱 앱

### ▸ study_01 · 손글씨 숫자 인식
캔버스에 마우스로 숫자(0~9)를 그리고 `Predict`를 누르면 머신러닝 모델(Random Forest)이 숫자를 인식합니다.

<table>
<tr>
<td align="center"><a href="study_01/SCREENSHOTS.md"><img src="study_01/screenshots/01_initial.png" width="200"></a><br><sub>시작 화면</sub></td>
<td align="center"><a href="study_01/SCREENSHOTS.md"><img src="study_01/screenshots/02_digit_drawn.png" width="200"></a><br><sub>숫자 그리기</sub></td>
<td align="center"><a href="study_01/SCREENSHOTS.md"><img src="study_01/screenshots/03_prediction_result.png" width="200"></a><br><sub>인식 결과</sub></td>
</tr>
</table>

👉 [study_01 실행 화면 자세히 보기](study_01/SCREENSHOTS.md)

---

## 🌐 웹 앱 (서버 없이 실행)

### ▸ study_02 · 할 일 관리 (Daily Task Tracker)
달성률 대시보드, 중요 표시, 검색, 드래그 정렬, 다크 모드를 갖춘 할 일 관리 앱입니다.

<table>
<tr>
<td align="center"><a href="study_02/SCREENSHOTS.md"><img src="study_02/screenshots/01_main.png" width="200"></a><br><sub>메인 화면</sub></td>
<td align="center"><a href="study_02/SCREENSHOTS.md"><img src="study_02/screenshots/02_dark_mode.png" width="200"></a><br><sub>다크 모드</sub></td>
<td align="center"><a href="study_02/SCREENSHOTS.md"><img src="study_02/screenshots/05_mobile.png" width="200"></a><br><sub>모바일</sub></td>
</tr>
</table>

👉 [study_02 실행 화면 자세히 보기](study_02/SCREENSHOTS.md)

### ▸ study_03 · 정보처리기사 퀴즈 게임
6가지 게임 모드로 정보처리기사 기출문제를 풀며 점수와 콤보, 순위표까지 즐기는 퀴즈 게임입니다.

<table>
<tr>
<td align="center"><a href="study_03/SCREENSHOTS.md"><img src="study_03/screenshots/01_intro.png" width="200"></a><br><sub>모드 선택</sub></td>
<td align="center"><a href="study_03/SCREENSHOTS.md"><img src="study_03/screenshots/03_feedback.png" width="200"></a><br><sub>정답 해설</sub></td>
<td align="center"><a href="study_03/SCREENSHOTS.md"><img src="study_03/screenshots/04_result.png" width="200"></a><br><sub>결과 화면</sub></td>
</tr>
</table>

👉 [study_03 실행 화면 자세히 보기](study_03/SCREENSHOTS.md)

### ▸ study_03_01 · 리눅스마스터 2급 CBT
486개 기출 문항 퀴즈, 챕터별 핵심 요약 정리, 오답노트, 전 문항 검색을 한곳에 모은 올인원 학습 앱입니다.

<table>
<tr>
<td align="center"><a href="study_03_01/SCREENSHOTS.md"><img src="study_03_01/screenshots/01_home.png" width="200"></a><br><sub>홈 화면</sub></td>
<td align="center"><a href="study_03_01/SCREENSHOTS.md"><img src="study_03_01/screenshots/03_practice_explanation.png" width="200"></a><br><sub>정답 해설</sub></td>
<td align="center"><a href="study_03_01/SCREENSHOTS.md"><img src="study_03_01/screenshots/04_study_summary.png" width="200"></a><br><sub>핵심 요약</sub></td>
</tr>
</table>

👉 [study_03_01 실행 화면 자세히 보기](study_03_01/SCREENSHOTS.md)

---

## 🤖 AI 연동 웹 앱 (Flask + OpenRouter)

### ▸ study_04 · 냉장고 파먹기 AI 셰프
냉장고 사진에서 식재료를 인식하고(1단계), 맞춤 레시피와 요리 이미지를 만들고(2단계), 프로필별 레시피북에 저장합니다(3단계).

<table>
<tr>
<td align="center"><a href="study_04/SCREENSHOTS.md"><img src="study_04/screenshots/02_step1_recognized.png" width="200"></a><br><sub>1단계 식재료 인식</sub></td>
<td align="center"><a href="study_04/SCREENSHOTS.md"><img src="study_04/screenshots/04_step2_recipe.png" width="200"></a><br><sub>2단계 레시피 생성</sub></td>
<td align="center"><a href="study_04/SCREENSHOTS.md"><img src="study_04/screenshots/05_step3_recipe_book.png" width="200"></a><br><sub>3단계 레시피북</sub></td>
</tr>
</table>

👉 [study_04 실행 화면 자세히 보기](study_04/SCREENSHOTS.md)

### ▸ study_05 · AI 공감 다이어리 / PDF 문서 요약
한 줄 일기에 감정 분석과 위로 메시지를 돌려주는 **다이어리**와, PDF를 올리면 핵심만 정리해 주는 **문서 요약** 앱, 두 가지가 들어 있습니다.

<table>
<tr>
<td align="center"><a href="study_05/SCREENSHOTS.md"><img src="study_05/screenshots/03_diary_result.png" width="200"></a><br><sub>다이어리 결과</sub></td>
<td align="center"><a href="study_05/SCREENSHOTS.md"><img src="study_05/screenshots/06_pdf_file_selected.png" width="200"></a><br><sub>PDF 업로드</sub></td>
<td align="center"><a href="study_05/SCREENSHOTS.md"><img src="study_05/screenshots/08_pdf_result.png" width="200"></a><br><sub>PDF 요약 결과</sub></td>
</tr>
</table>

👉 [study_05 실행 화면 자세히 보기](study_05/SCREENSHOTS.md)

---

## 📁 폴더 구조

```text
Practical_AI/
├── SCREENSHOTS.md          ← 지금 보고 있는 문서
├── README.md               ← 저장소 전체 소개
│
├── study_01/               🖥️ 손글씨 숫자 인식 (데스크톱)
├── study_02/               🌐 할 일 관리 (웹)
├── study_03/               🌐 정보처리기사 퀴즈 (웹)
├── study_03_01/            🌐 리눅스마스터 2급 CBT (웹)
├── study_04/               🤖 냉장고 파먹기 AI 셰프 (Flask + AI)
└── study_05/               🤖 AI 공감 다이어리 / PDF 요약 (Flask + AI)
    └── 각 폴더마다 SCREENSHOTS.md(실행 화면)와 screenshots/(이미지)가 있습니다.
```
