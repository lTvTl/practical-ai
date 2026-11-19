# Handwritten Digit Recognizer (손글씨 숫자 인식 프로그램)

캔버스 화면에 마우스로 숫자(0~9)를 직접 그리면, 머신러닝 모델이 실시간으로 어떤 숫자인지 인식하여 결과를 표시해주는 Tkinter 기반 데스크톱 애플리케이션입니다.

---

## 🚀 빠른 시작

### 1. 가상환경 및 의존성 설치
```bash
pip install -r requirements.txt
```

### 2. 프로그램 실행
```bash
python main.py
```

---

## ✨ 주요 기능
- **직관적인 드로잉 캔버스**: 400x400 크기의 캔버스에 자유롭게 숫자 드로잉
- **머신러닝 기반 숫자 인식**: Scikit-learn의 `digits` 데이터셋(8x8 픽셀)으로 학습된 Random Forest 모델 사용
- **학습 데이터에 맞춘 이미지 전처리**: 흰 배경의 검은 획을 반전하고, 숫자 영역만 잘라 높이 8칸에 맞춰 가운데 정렬하며, 너무 가는 획은 굵게 보정한 뒤 8x8(0.0~1.0)로 변환 (그리는 위치·크기와 무관하게 인식)
- **지우기(Clear)**: 캔버스를 초기화하고 새로운 숫자 작성
- **독립 실행 파일(.exe) 빌드 지원**: PyInstaller를 통해 배포용 단일 실행 파일 생성 가능 ([빌드 가이드 문서](PYINSTALLER_BUILD.md) 참고)

---

## 📁 주요 파일 안내
- `main.py`: 프로그램 실행 진입점 (Entry Point)
- `gui.py`: Tkinter GUI 화면 구성 및 마우스 이벤트, 캔버스 이미지 변환 함수
- `digit_recognition.py`: scikit-learn `digits`(8x8) 데이터 로드, Random Forest 모델 학습 및 예측 클래스
- `test_digit_recognition.py`: 머신러닝 모델 동작 및 정확도 단위 테스트
- `test_gui.py`: 캔버스 이미지 변환 단위 테스트
- `test_digit_accuracy.py`: 손글씨 숫자를 실제로 맞게 인식하는지 검증하는 정확도 테스트
- `test_manual_workflow.py`: 앱 실행부터 드로잉, 예측, 초기화까지의 전체 시뮬레이션 테스트
- `PYINSTALLER_BUILD.md`: Windows `.exe` 실행 파일 빌드 방법 가이드
- `DigitRecognizer.spec`: PyInstaller 빌드 명세 파일
