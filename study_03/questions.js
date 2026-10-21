/**
 * 정보처리기사 필기 기출문제 은행 (Questions Database)
 * 실제 국가기술자격 '정보처리기사' 필기시험 기출문제를 바탕으로 엄선되었습니다.
 * 5개 과목: 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보시스템 구축관리
 * 
 * answer_index: 0-based index (0: 보기 1, 1: 보기 2, 2: 보기 3, 3: 보기 4)
 */
const QUESTION_BANK = [
  {
    "id": 1,
    "subject": "소프트웨어 설계",
    "question": "GoF(Gang of Four) 디자인 패턴 중 생성 패턴(Creational Pattern)에 해당하는 것은?",
    "options": [
      "Adapter 패턴",
      "Factory Method 패턴",
      "Decorator 패턴",
      "Observer 패턴"
    ],
    "answer_index": 1,
    "explanation": "생성 패턴(Creational)에는 Abstract Factory, Builder, Factory Method, Prototype, Singleton이 있습니다. Adapter와 Decorator는 구조 패턴, Observer는 행위 패턴입니다."
  },
  {
    "id": 2,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계 5대 원칙(SOLID) 중 '하위 클래스는 상위 클래스의 기능을 온전히 수행할 수 있어야 한다'는 원칙은?",
    "options": [
      "단일 책임 원칙 (SRP)",
      "개방 폐쇄 원칙 (OCP)",
      "리스코프 치환 원칙 (LSP)",
      "인터페이스 분리 원칙 (ISP)"
    ],
    "answer_index": 2,
    "explanation": "리스코프 치환 원칙(LSP, Liskov Substitution Principle)은 자식 타입은 언제나 자신의 부모 타입으로 교체될 수 있어야 한다는 원칙입니다."
  },
  {
    "id": 3,
    "subject": "소프트웨어 설계",
    "question": "UML(Unified Modeling Language) 모델링에서 구조(정적) 다이어그램에 해당하지 않는 것은?",
    "options": [
      "클래스 다이어그램 (Class Diagram)",
      "패키지 다이어그램 (Package Diagram)",
      "배치 다이어그램 (Deployment Diagram)",
      "활동 다이어그램 (Activity Diagram)"
    ],
    "answer_index": 3,
    "explanation": "활동 다이어그램(Activity Diagram)은 시스템의 처리 과정이나 제어 흐름을 표현하는 행위(동적) 다이어그램입니다. 클래스, 패키지, 배치 다이어그램은 구조(정적) 다이어그램입니다."
  },
  {
    "id": 4,
    "subject": "소프트웨어 설계",
    "question": "애자일(Agile) 소프트웨어 개발 선언문의 핵심 가치로 옳지 않은 것은?",
    "options": [
      "프로세스와 도구보다 개인과 상호작용을 중시한다.",
      "포괄적인 문서화보다 작동하는 소프트웨어를 중시한다.",
      "계약 협상보다 고객과의 협력을 중시한다.",
      "계획에 따르는 것을 변화에 대응하는 것보다 중시한다."
    ],
    "answer_index": 3,
    "explanation": "애자일 선언문에서는 '계획에 따르기보다 변화에 대응하는 것(Responding to change over following a plan)'을 더 가치 있게 여깁니다."
  },
  {
    "id": 5,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 패턴 중 서브시스템들이 공유 데이터 저장소를 통해 데이터를 교환하며, 독립적인 컴포넌트들이 저장소의 변경사항을 관찰하는 패턴은?",
    "options": [
      "블랙보드 패턴 (Blackboard Pattern)",
      "파이프-필터 패턴 (Pipe-Filter Pattern)",
      "브로커 패턴 (Broker Pattern)",
      "피어 투 피어 패턴 (P2P Pattern)"
    ],
    "answer_index": 0,
    "explanation": "블랙보드 패턴(Blackboard Pattern)은 해결책이 명확하지 않은 음성 인식, 신호 처리 등에 적합하며, 모든 컴포넌트가 공유 저장소(블랙보드)에 접근하여 데이터를 공유하고 협력합니다."
  },
  {
    "id": 6,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 요구사항 분석 기법 중 사용자의 요구사항을 식별하기 위해 개발팀이 짧은 기간에 프로토타입을 만들어 고객과 소통하는 분석 기법은?",
    "options": [
      "인터뷰 (Interview)",
      "프로토타이핑 (Prototyping)",
      "설문조사 (Survey)",
      "관찰법 (Observation)"
    ],
    "answer_index": 1,
    "explanation": "프로토타이핑(Prototyping)은 실제 개발될 소프트웨어의 견본품(Mockup)을 빠르게 만들어 사용자의 요구사항을 직접 확인하고 구체화하는 기법입니다."
  },
  {
    "id": 7,
    "subject": "소프트웨어 설계",
    "question": "GoF 디자인 패턴 중 '한 객체의 상태가 변경되면 그 객체에 의존하는 모든 객체에 자동으로 알림이 가고 갱신되도록 하는 1:N 의존 관계'를 정의하는 패턴은?",
    "options": [
      "Observer 패턴",
      "Singleton 패턴",
      "Strategy 패턴",
      "Composite 패턴"
    ],
    "answer_index": 0,
    "explanation": "옵저버(Observer) 패턴은 발행-구독 모델을 구현하여 한 객체의 상태 변화를 다수의 관찰자(Observer) 객체들에게 자동으로 통지하는 행위 디자인 패턴입니다."
  },
  {
    "id": 8,
    "subject": "소프트웨어 설계",
    "question": "UML 관계(Relationship) 표현 중 하나의 클래스가 다른 클래스의 객체를 자신의 멤버 변수로 포함하되, 두 객체의 생명주기가 독립적인 약한 집합 관계를 나타내는 것은?",
    "options": [
      "일반화 관계 (Generalization)",
      "실체화 관계 (Realization)",
      "집약 관계 (Aggregation)",
      "합성 관계 (Composition)"
    ],
    "answer_index": 2,
    "explanation": "집약(Aggregation, 빈 마름모)은 포함 관계이지만 부분 객체가 독립적으로 존재할 수 있는 느슨한 관계이며, 합성(Composition, 채워진 마름모)은 부분 객체의 생명주기가 전체 객체에 종속되는 강한 결합 관계입니다."
  },
  {
    "id": 9,
    "subject": "소프트웨어 설계",
    "question": "시스템 내 객체들의 복잡한 상호작용을 캡슐화하여 단일 중재자 객체를 통해 통신하게 함으로써 객체 간 결합도를 낮추는 행위 디자인 패턴은?",
    "options": [
      "Mediator 패턴",
      "Facade 패턴",
      "Proxy 패턴",
      "Template Method 패턴"
    ],
    "answer_index": 0,
    "explanation": "미디에이터(Mediator, 중재자) 패턴은 객체 간의 복잡한 다대다 통신을 하나의 중재자 객체로 집중시켜 상호 참조를 방지하고 결합도를 획기적으로 낮춥니다."
  },
  {
    "id": 10,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 공학에서 요구사항의 분류 중 시스템이 제공해야 할 특정 기능이나 연산 작업과 직접적으로 관련된 요구사항은?",
    "options": [
      "비기능적 요구사항 (Non-functional)",
      "기능적 요구사항 (Functional)",
      "제약사항 (Constraints)",
      "품질 요구사항 (Quality)"
    ],
    "answer_index": 1,
    "explanation": "기능적 요구사항(Functional Requirement)은 시스템이 무엇(What)을 해야 하는지, 시스템이 입력에 대해 어떻게 반응하고 동작해야 하는지 기능을 기술한 요구사항입니다."
  },
  {
    "id": 11,
    "subject": "소프트웨어 설계",
    "question": "럼바우(Rumbaugh) 객체지향 분석 기법에서 세 가지 모델링에 해당하지 않는 것은?",
    "options": [
      "객체 모델링 (Object)",
      "동적 모델링 (Dynamic)",
      "기능 모델링 (Functional)",
      "정적 구조 모델링 (Structural)"
    ],
    "answer_index": 3,
    "explanation": "럼바우 기법의 3대 모델링은 1) 객체 모델링(ERD, 객체 다이어그램), 2) 동적 모델링(상태 다이어그램), 3) 기능 모델링(DFD)입니다."
  },
  {
    "id": 12,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계 원칙(SOLID) 중 '소프트웨어 엔티티는 확장에 대해서는 열려 있어야 하지만, 수정에 대해서는 닫혀 있어야 한다'는 원칙은?",
    "options": [
      "SRP",
      "OCP",
      "LSP",
      "DIP"
    ],
    "answer_index": 1,
    "explanation": "개방 폐쇄 원칙(OCP, Open-Closed Principle)은 기존의 코드를 변경하지 않고도 시스템의 기능을 확장할 수 있도록 설계해야 한다는 원칙입니다."
  },
  {
    "id": 13,
    "subject": "소프트웨어 개발",
    "question": "모듈의 독립성을 높이기 위해 결합도(Coupling)와 응집도(Cohesion)를 가장 바람직하게 구성한 것은?",
    "options": [
      "결합도는 강하게, 응집도는 약하게",
      "결합도는 약하게, 응집도는 강하게",
      "결합도와 응집도 모두 강하게",
      "결합도와 응집도 모두 약하게"
    ],
    "answer_index": 1,
    "explanation": "소프트웨어 공학에서 좋은 모듈 설계는 모듈 간의 상호 의존성을 최소화(낮은 결합도, Low Coupling)하고, 모듈 내부 요소들의 관련성을 최대화(높은 응집도, High Cohesion)하는 것입니다."
  },
  {
    "id": 14,
    "subject": "소프트웨어 개발",
    "question": "다음 모듈 결합도(Coupling) 종류 중 결합도가 가장 약하고(품질이 가장 우수함) 독립성이 높은 것은?",
    "options": [
      "내용 결합도 (Content)",
      "공통 결합도 (Common)",
      "자료 결합도 (Data)",
      "제어 결합도 (Control)"
    ],
    "answer_index": 2,
    "explanation": "결합도의 세기 순서(약함/우수 -> 강함/나쁨): 자료(Data) < 스탬프(Stamp) < 제어(Control) < 외부(External) < 공통(Common) < 내용(Content) 입니다. 자료 결합도가 가장 결합도가 낮습니다."
  },
  {
    "id": 15,
    "subject": "소프트웨어 개발",
    "question": "모듈 응집도(Cohesion) 중 모듈 내부의 모든 기능 요소들이 단 하나의 유일한 목적을 위해 수행되는 가장 높은 응집도는?",
    "options": [
      "기능적 응집도 (Functional)",
      "순차적 응집도 (Sequential)",
      "교환적 응집도 (Communication)",
      "우연적 응집도 (Coincidental)"
    ],
    "answer_index": 0,
    "explanation": "기능적 응집도(Functional Cohesion)는 모듈 내부의 모든 요소가 단일 기능을 수행하기 위해 유기적으로 동작하는 가장 바람직하고 강한 응집도입니다."
  },
  {
    "id": 16,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트(White Box Test) 기법에 해당하는 것은?",
    "options": [
      "동등 분할 검사 (Equivalence Partitioning)",
      "경계값 분석 (Boundary Value Analysis)",
      "기초 경로 검사 (Basis Path Testing)",
      "원인-효과 그래프 (Cause-Effect Graphing)"
    ],
    "answer_index": 2,
    "explanation": "기초 경로 검사, 조건 검사, 루프 검사, 데이터 흐름 검사는 프로그램의 내부 로직 구조를 직접 검사하는 화이트박스 테스트 기법입니다. 동등 분할, 경계값 분석 등은 블랙박스 테스트 기법입니다."
  },
  {
    "id": 17,
    "subject": "소프트웨어 개발",
    "question": "블랙박스 테스트 기법 중 입력 조건의 유효값과 무효값의 경계 부근에서 오류가 발생할 확률이 높다는 점을 이용한 테스트 기법은?",
    "options": [
      "경계값 분석 (Boundary Value Analysis)",
      "동등 분할 기법",
      "오류 예측 검사",
      "페어와이즈 검사"
    ],
    "answer_index": 0,
    "explanation": "경계값 분석(Boundary Value Analysis)은 최소값, 최대값, 경계 바로 직전과 직후의 값 등을 테스트 케이스로 선정하는 대표적인 블랙박스 테스트 기법입니다."
  },
  {
    "id": 18,
    "subject": "소프트웨어 개발",
    "question": "통합 테스트(Integration Test) 방식 중 하위 모듈에서 상위 모듈 방향으로 결합해 나가는 상향식(Bottom-Up) 테스트에서 상위 모듈의 역할을 대신하는 가상 컴포넌트는?",
    "options": [
      "드라이버 (Test Driver)",
      "스텁 (Test Stub)",
      "목(Mock) 객체",
      "스파이(Spy)"
    ],
    "answer_index": 0,
    "explanation": "상향식 통합 테스트에서는 하위 모듈을 구동할 상위 모듈이 없으므로 드라이버(Driver)를 작성합니다. 반대로 하향식(Top-Down)에서는 하위 모듈을 대신하는 스텁(Stub)이 필요합니다."
  },
  {
    "id": 19,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어의 내부 구조를 개선하여 유지보수성을 높이고 가독성을 향상시키되, 소프트웨어의 외부 동작 기능은 바꾸지 않는 활동은?",
    "options": [
      "리팩토링 (Refactoring)",
      "역공학 (Reverse Engineering)",
      "재공학 (Re-engineering)",
      "패치 (Patching)"
    ],
    "answer_index": 0,
    "explanation": "리팩토링(Refactoring)은 소프트웨어의 외부 동작(결과)을 변경하지 않고 내부 구조와 코드를 재구성하여 결함 가능성을 줄이고 유지보수성을 향상시키는 기법입니다."
  },
  {
    "id": 20,
    "subject": "소프트웨어 개발",
    "question": "Git과 같은 형상 관리(SCM) 도구에서 개발자들이 독립된 작업 공간을 생성하여 작업한 후 원래의 메인 브랜치로 병합(Merge)하는 작업을 무엇이라 하는가?",
    "options": [
      "Commit",
      "Branch & Merge",
      "Clone",
      "Checkout"
    ],
    "answer_index": 1,
    "explanation": "형상 관리 도구에서 브랜치(Branch)를 만들어 독립적으로 기능을 구현한 후, 이를 기본 코드베이스에 병합(Merge)하는 방식을 사용합니다."
  },
  {
    "id": 21,
    "subject": "소프트웨어 개발",
    "question": "다음 정렬 알고리즘 중 평균 시간 복잡도가 O(n log n)이 아닌 것은?",
    "options": [
      "병합 정렬 (Merge Sort)",
      "퀵 정렬 (Quick Sort)",
      "힙 정렬 (Heap Sort)",
      "버블 정렬 (Bubble Sort)"
    ],
    "answer_index": 3,
    "explanation": "버블 정렬(Bubble Sort), 삽입 정렬, 선택 정렬의 평균 시간 복잡도는 O(n²)입니다. 퀵, 병합, 힙 정렬의 평균 시간 복잡도는 O(n log n)입니다."
  },
  {
    "id": 22,
    "subject": "소프트웨어 개발",
    "question": "테스트 커버리지(Test Coverage) 중 '소스 코드의 모든 조건문에서 전체 조건식이 참(True)과 거짓(False)을 최소 한 번씩 실행'하도록 측정하는 기준은?",
    "options": [
      "구문(문장) 커버리지 (Statement)",
      "결정(분기) 커버리지 (Branch/Decision)",
      "조건 커버리지 (Condition)",
      "다중 조건 커버리지 (Multiple Condition)"
    ],
    "answer_index": 1,
    "explanation": "결정(분기) 커버리지는 전체 조건식의 결과가 참/거짓으로 평가되는 모든 분기를 최소 한 번 이상 통과하는 커버리지입니다. (개별 조건식 각각이 참/거짓인 것은 조건 커버리지)"
  },
  {
    "id": 23,
    "subject": "소프트웨어 개발",
    "question": "EAI(Enterprise Application Integration)의 구축 유형 중 중앙에 단일 전달 허브를 두어 데이터 전송과 메시지 변환을 전담하는 토폴로지는?",
    "options": [
      "Point-to-Point",
      "Hub & Spoke",
      "Message Bus",
      "Hybrid"
    ],
    "answer_index": 1,
    "explanation": "Hub & Spoke 방식은 중앙 허브 시스템이 연계 작업을 전담하는 중앙 집중형 방식으로, 유지보수가 편리하지만 허브 장애 시 전체 연계에 병목이 발생할 수 있습니다."
  },
  {
    "id": 24,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 패키징 도구에서 불법 복제 방지 및 디지털 콘텐츠의 저작권을 보호하기 위해 적용하는 기술은?",
    "options": [
      "DRM (Digital Rights Management)",
      "SSO (Single Sign-On)",
      "VPN (Virtual Private Network)",
      "IPS (Intrusion Prevention System)"
    ],
    "answer_index": 0,
    "explanation": "DRM(Digital Rights Management)은 소프트웨어나 미디어 콘텐츠의 무단 복제와 배포를 방지하고 사용 권한을 제어하는 기술입니다."
  },
  {
    "id": 25,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터베이스 정규화 과정 중 '모든 도메인이 원자값(Atomic Value)으로만 구성'되도록 분해하는 정규형은?",
    "options": [
      "제1정규형 (1NF)",
      "제2정규형 (2NF)",
      "제3정규형 (3NF)",
      "보이스-코드 정규형 (BCNF)"
    ],
    "answer_index": 0,
    "explanation": "1NF는 테이블의 모든 속성이 원자값을 갖도록 하는 것이며, 2NF는 부분 함수 종속 제거, 3NF는 이행적 함수 종속 제거, BCNF는 결정자이면서 후보키가 아닌 것 제거입니다."
  },
  {
    "id": 26,
    "subject": "데이터베이스 구축",
    "question": "정규화 과정에서 제2정규형(2NF)에서 제3정규형(3NF)으로 변환하기 위해 제거해야 하는 종속성은?",
    "options": [
      "부분 함수 종속",
      "이행적 함수 종속 (Transitive Functional Dependency)",
      "다치 종속 (MVD)",
      "조인 종속 (JD)"
    ],
    "answer_index": 1,
    "explanation": "A -> B 이고 B -> C 일 때 A -> C 가 성립하는 것을 이행적 함수 종속이라 하며, 이를 분해하여 제거하는 단계가 제3정규형(3NF)입니다."
  },
  {
    "id": 27,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 트랜잭션의 4대 특성(ACID) 중 '트랜잭션 내의 모든 연산은 반드시 완전히 성공하거나 전혀 수행되지 않아야 한다(All or Nothing)'는 특성은?",
    "options": [
      "원자성 (Atomicity)",
      "일관성 (Consistency)",
      "격리성 (Isolation)",
      "영속성 (Durability)"
    ],
    "answer_index": 0,
    "explanation": "원자성(Atomicity)은 트랜잭션이 데이터베이스에 모두 반영(Commit)되거나 아니면 전혀 반영되지 않고 롤백(Rollback)되어야 한다는 All or Nothing 원칙입니다."
  },
  {
    "id": 28,
    "subject": "데이터베이스 구축",
    "question": "순수 관계 연산자(Relational Algebra) 중 두 릴레이션에서 공통 속성을 기준으로 조건을 만족하는 튜플을 결합하여 새로운 릴레이션을 생성하는 연산자는?",
    "options": [
      "Select (σ)",
      "Project (π)",
      "Join (⨝)",
      "Division (÷)"
    ],
    "answer_index": 2,
    "explanation": "조인(Join, ⨝) 연산자는 공통된 속성을 기반으로 두 개 이상의 테이블을 연결하여 새로운 결과 릴레이션을 구성하는 순수 관계 연산자입니다."
  },
  {
    "id": 29,
    "subject": "데이터베이스 구축",
    "question": "SQL 질의문에서 테이블에 새로운 컬럼(Column)을 추가할 때 사용하는 올바른 DDL 구문은?",
    "options": [
      "ALTER TABLE 사원 ADD 직급 VARCHAR(20);",
      "UPDATE TABLE 사원 ADD COLUMN 직급 VARCHAR(20);",
      "MODIFY TABLE 사원 INSERT 직급 VARCHAR(20);",
      "INSERT INTO 사원 COLUMN 직급 VARCHAR(20);"
    ],
    "answer_index": 0,
    "explanation": "테이블의 구조를 변경하는 명령어는 ALTER TABLE 이며, 새 열을 추가할 때는 `ALTER TABLE 테이블명 ADD 컬럼명 데이터타입;` 형식을 사용합니다."
  },
  {
    "id": 30,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스에서 인덱스(Index)의 특징으로 가장 옳지 않은 것은?",
    "options": [
      "검색(SELECT) 질의의 성능을 향상시킨다.",
      "테이블에 인덱스를 많이 생성할수록 INSERT, UPDATE 성능도 함께 대폭 향상된다.",
      "B-Tree, B+Tree 구조가 널리 사용된다.",
      "별도의 추가 저장 공간을 필요로 한다."
    ],
    "answer_index": 1,
    "explanation": "인덱스는 검색 속도를 빠르게 하지만 데이터의 삽입(INSERT), 삭제(DELETE), 갱신(UPDATE) 시마다 인덱스 트리 재구성 오버헤드가 발생하여 쓰기 성능은 오히려 저하됩니다."
  },
  {
    "id": 31,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스의 뷰(View)에 대한 설명으로 옳은 것은?",
    "options": [
      "물리적으로 하드디스크에 저장되는 실제 기본 테이블이다.",
      "기본 테이블이 삭제되어도 정의된 뷰는 안전하게 남아있다.",
      "하나 이상의 테이블로부터 유도된 가상 테이블로 데이터 보안과 사용 편의성을 제공한다.",
      "모든 뷰에서는 제약 없이 INSERT, UPDATE, DELETE가 자유롭게 수행된다."
    ],
    "answer_index": 2,
    "explanation": "뷰(View)는 물리적으로 데이터를 저장하지 않고 정의(SQL)만 시스템 카탈로그에 저장되는 가상 테이블이며, 보안 향상과 복잡한 질의 단순화에 유용합니다."
  },
  {
    "id": 32,
    "subject": "데이터베이스 구축",
    "question": "빅데이터 및 분산 환경에서 사용되며 고정된 스키마가 없고 대용량 비정형 데이터 처리에 최적화된 데이터베이스 유형은?",
    "options": [
      "RDBMS",
      "NoSQL (Not Only SQL)",
      "계층형 DBMS",
      "네트워크 DBMS"
    ],
    "answer_index": 1,
    "explanation": "NoSQL(MongoDB, Redis, Cassandra 등)은 비관계형 데이터 모델을 기반으로 하며 유연한 스키마, 수평적 확장성(Scale-out), 고성능 분산 처리를 지원합니다."
  },
  {
    "id": 33,
    "subject": "데이터베이스 구축",
    "question": "동시성 제어(Concurrency Control)가 이루어지지 않을 때 발생할 수 있는 문제점으로 거리가 먼 것은?",
    "options": [
      "갱신 손실 (Lost Update)",
      "모순성 (Inconsistency)",
      "연쇄 복귀 (Cascading Rollback)",
      "교착상태 (Deadlock) 방지"
    ],
    "answer_index": 3,
    "explanation": "병행 제어가 없으면 갱신 분실, 모순성, 비원격 연쇄 복귀 등이 발생합니다. 교착상태(Deadlock)는 오히려 잠금(Locking) 기법을 부주의하게 사용할 때 유발되는 문제입니다."
  },
  {
    "id": 34,
    "subject": "데이터베이스 구축",
    "question": "외래키(Foreign Key) 값이 참조하는 부모 테이블의 기본키(Primary Key) 값으로 반드시 존재해야 하거나 Null이어야 함을 규정하는 무결성 제약조건은?",
    "options": [
      "개체 무결성 (Entity Integrity)",
      "참조 무결성 (Referential Integrity)",
      "도메인 무결성 (Domain Integrity)",
      "키 무결성 (Key Integrity)"
    ],
    "answer_index": 1,
    "explanation": "참조 무결성(Referential Integrity)은 릴레이션 간의 일관성을 유지하기 위해 외래키가 유효한 부모 기본키를 참조하거나 널이어야 한다는 원칙입니다."
  },
  {
    "id": 35,
    "subject": "데이터베이스 구축",
    "question": "데이터 모델의 3대 구성 요소로 옳은 것은?",
    "options": [
      "개체(Entity), 속성(Attribute), 관계(Relationship)",
      "연산(Operation), 구조(Structure), 제약조건(Constraint)",
      "개념 모델, 논리 모델, 물리 모델",
      "기본키, 외래키, 대체키"
    ],
    "answer_index": 1,
    "explanation": "데이터 모델의 형식적 3요소는 구조(Structure), 연산(Operation), 제약조건(Constraint)입니다. (데이터베이스 개념 구성요소인 개체, 속성, 관계와 구분 필요)"
  },
  {
    "id": 36,
    "subject": "데이터베이스 구축",
    "question": "SQL 명령어 중 ROLLBACK에 대한 설명으로 옳은 것은?",
    "options": [
      "트랜잭션 내에서 변경된 내용을 데이터베이스에 영구적으로 반영한다.",
      "트랜잭션의 실행 도중 오류가 발생했을 때 변경 사항을 취소하고 이전 상태로 되돌린다.",
      "테이블의 스키마와 인덱스를 영구 삭제한다.",
      "사용자에게 부여된 권한을 회수한다."
    ],
    "answer_index": 1,
    "explanation": "ROLLBACK 명령어는 트랜잭션의 실행 실패나 취소 시 이전 세이브포인트 또는 트랜잭션 시작 직전의 일관된 상태로 되돌립니다."
  },
  {
    "id": 37,
    "subject": "프로그래밍 언어 활용",
    "question": "C 언어에서 아래 코드 실행 시 출력되는 결과는?\nint a = 5;\nprintf(\"%d\", a++ + ++a);",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer_index": 1,
    "explanation": "a++는 현재 값 5를 사용하고 난 뒤 6으로 증가하며, ++a는 다시 1 증가하여 7이 된 후 더해지므로 5 + 7 = 12 가 됩니다."
  },
  {
    "id": 38,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 상속(Inheritance) 관계에 있는 자식 클래스가 부모 클래스의 메서드를 동일한 시그니처로 재정의하는 객체지향 개념은?",
    "options": [
      "메서드 오버로딩 (Method Overloading)",
      "메서드 오버라이딩 (Method Overriding)",
      "캡슐화 (Encapsulation)",
      "정보 은닉 (Information Hiding)"
    ],
    "answer_index": 1,
    "explanation": "오버라이딩(Overriding)은 상속받은 상위 클래스의 메서드를 하위 클래스에서 입맛에 맞게 재정의하는 것입니다. (오버로딩은 같은 이름에 매개변수가 다른 메서드를 다수 정의하는 것)"
  },
  {
    "id": 39,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 다음 코드의 실행 결과는?\nx = [1, 2, 3, 4, 5]\nprint(x[1:4])",
    "options": [
      "[1, 2, 3]",
      "[2, 3, 4]",
      "[2, 3, 4, 5]",
      "[1, 2, 3, 4]"
    ],
    "answer_index": 1,
    "explanation": "파이썬 슬라이싱 `x[start:end]`는 start 인덱스(1번 인덱스인 2)부터 end-1 인덱스(3번 인덱스인 4)까지 추출하므로 `[2, 3, 4]`가 출력됩니다."
  },
  {
    "id": 40,
    "subject": "프로그래밍 언어 활용",
    "question": "OSI 7계층 참조 모델 중 데이터의 암호화, 압축, 코드 변환(ASCII, EBCDIC 등)을 담당하는 계층은?",
    "options": [
      "표현 계층 (Presentation Layer)",
      "세션 계층 (Session Layer)",
      "응용 계층 (Application Layer)",
      "전송 계층 (Transport Layer)"
    ],
    "answer_index": 0,
    "explanation": "표현 계층(Presentation Layer, 6계층)은 송수신자 간 서로 다른 데이터 표현 방식을 상호 변환하고, 데이터 암호화 및 압축을 처리합니다."
  },
  {
    "id": 41,
    "subject": "프로그래밍 언어 활용",
    "question": "TCP와 UDP의 비교 설명으로 가장 옳은 것은?",
    "options": [
      "TCP는 비연결형 프로토콜이며 신뢰성을 보장하지 않는다.",
      "UDP는 3-Way Handshake를 통해 가상 회선을 수립하고 전송한다.",
      "TCP는 연결 지향형으로 흐름 제어 및 혼잡 제어를 제공하여 신뢰성이 높다.",
      "UDP는 TCP보다 헤더 오버헤드가 크고 전송 속도가 느리다."
    ],
    "answer_index": 2,
    "explanation": "TCP는 3-Way Handshake 기반의 연결 지향형 프로토콜로 흐름 제어, 오류 제어, 혼잡 제어를 통해 높은 신뢰성을 보장합니다. UDP는 비연결형으로 속도가 빠르지만 신뢰성은 낮습니다."
  },
  {
    "id": 42,
    "subject": "프로그래밍 언어 활용",
    "question": "IP 주소가 '192.168.1.0/26' 일 때, 할당 가능한 유효 서브넷 마스크는?",
    "options": [
      "255.255.255.0",
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224"
    ],
    "answer_index": 2,
    "explanation": "/26은 상위 26비트가 1임을 의미합니다. 마지막 4번째 옥텟이 11000000(2진수)이므로 128 + 64 = 192입니다. 따라서 255.255.255.192 입니다."
  },
  {
    "id": 43,
    "subject": "프로그래밍 언어 활용",
    "question": "프로세스 상태 전이 중 실행(Running) 상태에 있던 프로세스가 지정된 CPU 타임 슬라이스를 모두 소진했을 때 이동하는 상태는?",
    "options": [
      "대기(Waiting/Blocked) 상태",
      "준비(Ready) 상태",
      "종료(Terminated) 상태",
      "보류(Suspended) 상태"
    ],
    "answer_index": 1,
    "explanation": "타임아웃(Timer Expiration)에 의해 CPU를 반납하게 되면 프로세스는 CPU를 다시 할당받기 위해 '준비(Ready)' 큐로 이동합니다."
  },
  {
    "id": 44,
    "subject": "프로그래밍 언어 활용",
    "question": "다중 스레드(Multi-thread) 환경에서 임계 영역(Critical Section)에 하나의 스레드만 접근할 수 있도록 0과 1의 정수 변수를 사용하는 동기화 도구는?",
    "options": [
      "바이너리 세마포어 (Binary Semaphore) / 뮤텍스 (Mutex)",
      "모니터 (Monitor)",
      "스핀락 (Spinlock)",
      "파이프 (Pipe)"
    ],
    "answer_index": 0,
    "explanation": "뮤텍스(Mutex) 또는 바이너리 세마포어는 임계 구역에 오직 하나의 프로세스/스레드만 진입할 수 있도록 락(Lock)을 걸고 해제하는 상호 배제 메커니즘입니다."
  },
  {
    "id": 45,
    "subject": "프로그래밍 언어 활용",
    "question": "C 언어에서 포인터 연산 시 `int arr[5] = {10, 20, 30, 40, 50}; int *p = arr;` 일 때, `*(p + 2)`의 값은?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "answer_index": 2,
    "explanation": "배열 이름 arr은 첫 번째 원소의 주소(&arr[0])입니다. 포인터 p에 2를 더해 역참조한 `*(p + 2)`는 `arr[2]`와 동일하므로 값은 30입니다."
  },
  {
    "id": 46,
    "subject": "프로그래밍 언어 활용",
    "question": "비선점 스케줄링 중 대기 시간과 서비스(실행) 시간을 고려하여 기아 현상을 방지하는 우선순위 계산식 ((대기시간 + 서비스시간) / 서비스시간)을 갖는 방식은?",
    "options": [
      "FCFS",
      "SJF",
      "HRN (Highest Response Ratio Next)",
      "RR (Round Robin)"
    ],
    "answer_index": 2,
    "explanation": "HRN 스케줄링은 우선순위 값(응답률) = (대기 시간 + 서비스 시간) / 서비스 시간 공식을 사용하여 오래 대기한 프로세스의 우선순위를 높여 기아 현상을 해결합니다."
  },
  {
    "id": 47,
    "subject": "프로그래밍 언어 활용",
    "question": "가상 메모리 관리 기법 중 최근에 참조된 페이지가 가까운 미래에 다시 참조될 가능성이 높다는 특성을 나타내는 원리는?",
    "options": [
      "지역성 (Locality of Reference)",
      "스래싱 (Thrashing)",
      "워킹셋 (Working Set)",
      "단편화 (Fragmentation)"
    ],
    "answer_index": 0,
    "explanation": "참조의 지역성(Locality)에는 특정 메모리 위치가 참조되면 인접 위치가 곧 참조되는 공간 지역성과, 최근 참조된 주소가 곧 다시 참조되는 시간 지역성이 있습니다."
  },
  {
    "id": 48,
    "subject": "프로그래밍 언어 활용",
    "question": "UNIX 계열 운영체제에서 프로세스를 복제하여 새로운 자식 프로세스를 생성하는 시스템 호출(System Call)은?",
    "options": [
      "fork()",
      "exec()",
      "wait()",
      "kill()"
    ],
    "answer_index": 0,
    "explanation": "fork() 시스템 콜은 현재 실행 중인 부모 프로세스의 메모리 상태를 복제하여 새로운 자식 프로세스를 생성합니다."
  },
  {
    "id": 49,
    "subject": "정보시스템 구축관리",
    "question": "보안의 3대 요소(CIA Triad)에 해당하지 않는 것은?",
    "options": [
      "기밀성 (Confidentiality)",
      "무결성 (Integrity)",
      "가용성 (Availability)",
      "책임추적성 (Accountability)"
    ],
    "answer_index": 3,
    "explanation": "정보보안의 전통적인 3대 요소(CIA)는 기밀성(인가된 자만 접근), 무결성(인가 없이 변조 불가), 가용성(인가된 자가 필요할 때 언제든 접근 가능)입니다."
  },
  {
    "id": 50,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 비용 산정 모델 중 보헴(Boehm)이 제안하였으며, 프로그램의 코드 라인 수(LOC)에 기초하여 조직형, 반분리형, 임베디드형으로 구분하는 모델은?",
    "options": [
      "COCOMO 모델",
      "기능점수(FP) 모델",
      "Delphi 기법",
      "Putnam 모델"
    ],
    "answer_index": 0,
    "explanation": "COCOMO(Constructive Cost Model) 모델은 LOC(원시 코드 라인 수)를 기반으로 소프트웨어 규모에 따라 Organic(5만 라인 이하), Semi-detached(30만 라인 이하), Embedded(30만 라인 초과)로 분류합니다."
  },
  {
    "id": 51,
    "subject": "정보시스템 구축관리",
    "question": "웹 애플리케이션 보안 공격 중 악의적인 SQL 질의문을 입력값 필드에 주입하여 비정상적으로 DB 데이터를 열람하거나 인증을 우회하는 공격 기법은?",
    "options": [
      "XSS (Cross-Site Scripting)",
      "SQL Injection",
      "CSRF (Cross-Site Request Forgery)",
      "DDoS 공격"
    ],
    "answer_index": 1,
    "explanation": "SQL Injection(SQL 삽입) 공격은 사용자의 입력값을 적절히 검증하지 않아 공격자가 조작된 쿼리를 실행시켜 데이터베이스를 침해하는 대표적인 웹 취약점 공격입니다."
  },
  {
    "id": 52,
    "subject": "정보시스템 구축관리",
    "question": "암호화 방식 중 암호화할 때 사용하는 키와 복호화할 때 사용하는 키가 서로 동일한 대칭키 암호화 알고리즘에 해당하는 것은?",
    "options": [
      "AES (Advanced Encryption Standard)",
      "RSA",
      "ECC (Elliptic Curve Cryptography)",
      "DSA"
    ],
    "answer_index": 0,
    "explanation": "AES, DES, 3DES, SEED, ARIA는 대칭키(비밀키) 암호 알고리즘입니다. RSA, ECC, DSA는 공개키(비대칭키) 암호 알고리즘입니다."
  },
  {
    "id": 53,
    "subject": "정보시스템 구축관리",
    "question": "공격자가 자신의 IP 주소를 신뢰받는 호스트의 IP 주소로 위장하여 네트워크 침입을 시도하는 공격 기법은?",
    "options": [
      "IP 스푸핑 (IP Spoofing)",
      "스니핑 (Sniffing)",
      "스파이웨어",
      "스미싱"
    ],
    "answer_index": 0,
    "explanation": "스푸핑(Spoofing)은 '속이다'라는 뜻으로, 송신자 IP 주소를 변조하여 신뢰할 수 있는 정상 시스템인 것처럼 위장하는 공격입니다."
  },
  {
    "id": 54,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 취약점 공격 중 출발지 IP와 목적지 IP 주소를 희생자의 IP로 동일하게 위조하여 수신자가 자신에게 계속 응답 패킷을 보내 시스템을 다운시키는 공격은?",
    "options": [
      "Land Attack",
      "Smurf Attack",
      "Ping of Death",
      "SYN Flooding"
    ],
    "answer_index": 0,
    "explanation": "Land Attack은 패킷의 출발지 IP와 목적지 IP를 피해자의 IP로 동일하게 조작하여 피해자 시스템이 무한 루프 상태에 빠지도록 하는 DoS 공격입니다."
  },
  {
    "id": 55,
    "subject": "정보시스템 구축관리",
    "question": "클라우드 서비스 모델 중 인프라나 운영체제에 신경 쓰지 않고 클라우드 상에서 완성된 애플리케이션 소프트웨어를 구독 형태로 이용하는 서비스 모델은?",
    "options": [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "BaaS (Backend as a Service)"
    ],
    "answer_index": 2,
    "explanation": "SaaS(Software as a Service)는 구글 독스, 슬랙처럼 사용자가 브라우저를 통해 애플리케이션 소프트웨어 전체를 즉시 이용하는 클라우드 형태입니다."
  },
  {
    "id": 56,
    "subject": "정보시스템 구축관리",
    "question": "블록 암호화 알고리즘의 운영 모드 중 가장 단순하며 각 평문 블록을 독립적으로 암호화하여 동일한 평문 블록이 항상 동일한 암호문 블록을 생성하는 모드는?",
    "options": [
      "ECB (Electronic Codebook) 모드",
      "CBC (Cipher Block Chaining) 모드",
      "CFB (Cipher Feedback) 모드",
      "OFB (Output Feedback) 모드"
    ],
    "answer_index": 0,
    "explanation": "ECB 모드는 블록 간의 연쇄 의존성 없이 독립적으로 암호화하므로 패턴 분석 공격에 취약하며 보안상 단독 사용을 지양합니다."
  },
  {
    "id": 57,
    "subject": "정보시스템 구축관리",
    "question": "Secure SDLC(안전한 소프트웨어 개발 생명주기) 모델 중 마이크로소프트에서 보안 수준 향상을 위해 개발한 프레임워크는?",
    "options": [
      "MS-SDL",
      "Seven Touchpoints",
      "CLASP",
      "OWASP SAMM"
    ],
    "answer_index": 0,
    "explanation": "MS-SDL(Microsoft Secure Development Lifecycle)은 마이크로소프트에서 소프트웨어 개발 전 과정에 보안 활동을 내재화하기 위해 수립한 모델입니다."
  },
  {
    "id": 58,
    "subject": "정보시스템 구축관리",
    "question": "공격자가 세션 쿠키를 탈취하거나 사용자의 의지와 무관하게 공격자가 의도한 행위(패스워드 변경, 글 등록 등)를 특정 웹사이트에 전송하도록 유도하는 공격은?",
    "options": [
      "CSRF (Cross-Site Request Forgery)",
      "SQL Injection",
      "Buffer Overflow",
      "포트 스캐닝"
    ],
    "answer_index": 0,
    "explanation": "CSRF(사이트 간 요청 위조)는 희생자가 이미 인증된 세션을 가진 신뢰된 사이트를 대상으로 공격자가 조작한 악의적인 요청을 대신 전송하게 만드는 기법입니다."
  },
  {
    "id": 59,
    "subject": "정보시스템 구축관리",
    "question": "비대칭키 암호화 알고리즘 중 소인수분해의 수학적 난해성에 기반하여 전자서명 및 키 교환에 널리 사용되는 대표적인 알고리즘은?",
    "options": [
      "RSA",
      "AES",
      "SHA-256",
      "DES"
    ],
    "answer_index": 0,
    "explanation": "RSA(Rivest-Shamir-Adleman)는 매우 큰 두 소수의 곱을 소인수분해하기 어렵다는 수학적 복잡도에 기반한 공개키(비대칭키) 암호 알고리즘입니다."
  },
  {
    "id": 60,
    "subject": "정보시스템 구축관리",
    "question": "ITIL(Information Technology Infrastructure Library) 기반으로 IT 서비스의 계획, 제공, 운영, 개선 활동을 종합적으로 관리하는 프레임워크는?",
    "options": [
      "ITSM (IT Service Management)",
      "ERP (Enterprise Resource Planning)",
      "SCM (Supply Chain Management)",
      "CRM (Customer Relationship Management)"
    ],
    "answer_index": 0,
    "explanation": "ITSM(IT 서비스 관리)은 최종 사용자의 비즈니스 요구에 부합하도록 고품질의 IT 서비스를 체계적으로 설계, 제공, 운영하는 체계입니다."
  },
  {
    "id": 61,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 4+1 뷰(View) 모델에서 시스템의 비기능적 속성인 성능, 동기화, 동시성, 가용성 등을 다루는 관점은?",
    "options": [
      "논리 뷰 (Logical View)",
      "구현 뷰 (Implementation View)",
      "프로세스 뷰 (Process View)",
      "배포 뷰 (Deployment View)"
    ],
    "answer_index": 2,
    "explanation": "프로세스 뷰(Process View)는 시스템의 비기능적 속성으로 동시성, 동기화, 성능, 가용성, 프로세스 간 통신 등을 다룹니다. 논리 뷰는 기능적 요구사항, 배포 뷰는 물리적 노드 배치를 다룹니다."
  },
  {
    "id": 62,
    "subject": "소프트웨어 설계",
    "question": "사용자 인터페이스(UI) 설계 4대 기본 원칙 중 '누구나 쉽게 이해하고 사용할 수 있어야 한다'는 원칙은?",
    "options": [
      "직관성 (Intuitiveness)",
      "유효성 (Effectiveness)",
      "학습성 (Learnability)",
      "유연성 (Flexibility)"
    ],
    "answer_index": 0,
    "explanation": "UI 4대 원칙: 직관성(누구나 쉽게 이해), 유효성(사용자의 목적 달성), 학습성(쉽게 배우고 익힘), 유연성(요구사항 수용 및 오류 최소화)입니다."
  },
  {
    "id": 63,
    "subject": "소프트웨어 설계",
    "question": "데이터 흐름도(DFD, Data Flow Diagram)의 구성 요소와 도형 표기법의 연결이 옳지 않은 것은?",
    "options": [
      "처리 (Process) - 원(Circle)",
      "데이터 흐름 (Data Flow) - 화살표(Arrow)",
      "데이터 저장소 (Data Store) - 평행선(Parallel Lines)",
      "단말/외부 엔티티 (Terminator) - 마름모(Diamond)"
    ],
    "answer_index": 3,
    "explanation": "DFD에서 외부 엔티티(단말, Terminator)는 사각형(Rectangle)으로 표기합니다. 마름모는 순서도(Flowchart)나 E-R 다이어그램의 관계 표기에 사용됩니다."
  },
  {
    "id": 64,
    "subject": "소프트웨어 설계",
    "question": "자료 사전(Data Dictionary)에서 자료의 생략(선택적 포함)을 나타내는 기호는?",
    "options": [
      "{ }",
      "[ ]",
      "( )",
      "+"
    ],
    "answer_index": 2,
    "explanation": "자료 사전 기호: = (정의), + (연결), ( ) (생략 가능), { } (반복), [ | ] (선택), ** (설명/주석)입니다."
  },
  {
    "id": 65,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 요구사항 검증 기법 중 개발에 참여하지 않은 외부 전문가나 품질 관리자가 정형화된 절차와 체크리스트에 따라 결함을 찾는 가장 공식적인 검토 기법은?",
    "options": [
      "워크스루 (Walkthrough)",
      "인스펙션 (Inspection)",
      "동료 검토 (Peer Review)",
      "프로토타이핑 (Prototyping)"
    ],
    "answer_index": 1,
    "explanation": "인스펙션(Inspection)은 저작자 외의 훈련된 검토자들이 주도하여 체크리스트를 기반으로 결함을 검출하는 가장 정형화되고 공식적인 검토 기법입니다."
  },
  {
    "id": 66,
    "subject": "소프트웨어 설계",
    "question": "GoF 디자인 패턴 중 '기존 인터페이스가 호환되지 않는 클래스들을 함께 작동할 수 있도록 변환해 주는 구조 패턴'은?",
    "options": [
      "Facade 패턴",
      "Adapter 패턴",
      "Bridge 패턴",
      "Proxy 패턴"
    ],
    "answer_index": 1,
    "explanation": "어댑터(Adapter) 패턴은 서로 다른 인터페이스를 가진 두 클래스를 연결하여 호환성을 부여하는 구조 패턴입니다."
  },
  {
    "id": 67,
    "subject": "소프트웨어 설계",
    "question": "미들웨어(Middleware) 유형 중 '분산 네트워크 환경에서 서로 다른 기종의 하드웨어나 OS 간 객체 호출을 가능하게 해주는 객체 요청 중개자'는?",
    "options": [
      "RPC (Remote Procedure Call)",
      "MOM (Message-Oriented Middleware)",
      "ORB (Object Request Broker)",
      "TP Monitor (Transaction Processing)"
    ],
    "answer_index": 2,
    "explanation": "ORB(Object Request Broker)는 CORBA 표준의 핵심 요소로, 네트워크 상에 분산된 객체들이 서로의 메서드를 투명하게 호출할 수 있도록 중개합니다."
  },
  {
    "id": 68,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 재공학(Re-engineering)의 주요 활동 중 '기존 시스템을 역으로 분석하여 설계 문서나 명세서를 복원하는 과정'은?",
    "options": [
      "역공학 (Reverse Engineering)",
      "재구조화 (Restructuring)",
      "이관 (Migration)",
      "정방향 공학 (Forward Engineering)"
    ],
    "answer_index": 0,
    "explanation": "역공학(Reverse Engineering)은 소스 코드나 바이너리를 분석하여 상위 수준의 설계 문서, 모델, 명세를 도출하는 활동입니다."
  },
  {
    "id": 69,
    "subject": "소프트웨어 설계",
    "question": "럼바우(Rumbaugh) 객체지향 분석 기법에서 시스템의 동적 행위를 상태 전이도(State Transition Diagram)를 이용하여 표현하는 모델링은?",
    "options": [
      "객체 모델링 (Object Modeling)",
      "동적 모델링 (Dynamic Modeling)",
      "기능 모델링 (Functional Modeling)",
      "정적 모델링 (Static Modeling)"
    ],
    "answer_index": 1,
    "explanation": "럼바우 기법의 3대 모델링: 객체 모델링(객체 다이어그램), 동적 모델링(상태 다이어그램), 기능 모델링(자료 흐름도, DFD)입니다."
  },
  {
    "id": 70,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '요청을 처리할 수 있는 객체들이 고리(Chain) 형태로 연결되어 있어, 처리할 수 있는 객체를 만날 때까지 요청을 순차적으로 전달하는 패턴'은?",
    "options": [
      "Chain of Responsibility 패턴",
      "Command 패턴",
      "Mediator 패턴",
      "Iterator 패턴"
    ],
    "answer_index": 0,
    "explanation": "책임 연쇄(Chain of Responsibility) 패턴은 송신자와 수신자의 결합도를 낮추기 위해 처리 객체들을 체인으로 연결하고 요청을 넘겨가며 처리합니다."
  },
  {
    "id": 71,
    "subject": "소프트웨어 설계",
    "question": "HIPO(Hierarchy plus Input-Process-Output) 차트의 구성 요소가 아닌 것은?",
    "options": [
      "가시적 도표 (Visual Table of Contents)",
      "총괄 도표 (Overview Diagram)",
      "상세 도표 (Detail Diagram)",
      "프로세스 전이 도표 (Transition Diagram)"
    ],
    "answer_index": 3,
    "explanation": "HIPO 차트는 가시적 도표(도식 목차), 총괄 도표(개요 도표), 상세 도표의 3가지 유형으로 구성됩니다."
  },
  {
    "id": 72,
    "subject": "소프트웨어 설계",
    "question": "REST(Representational State Transfer) 아키텍처 스타일에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "HTTP 표준 프로토콜의 메서드(GET, POST, PUT, DELETE)를 그대로 활용한다.",
      "서버는 클라이언트의 이전 요청 상태 정보를 세션에 유지(Stateful)해야 한다.",
      "URI는 자원(Resource)을 고유하게 식별하는 데 사용된다.",
      "클라이언트-서버 구조로 독립적인 확장이 가능하다."
    ],
    "answer_index": 1,
    "explanation": "REST는 무상태성(Statelessness)을 핵심 특성으로 가집니다. 서버는 클라이언트의 컨텍스트(세션)를 저장하지 않고 모든 요청을 독립적으로 처리합니다."
  },
  {
    "id": 73,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 평가 모델 중 '소프트웨어 아키텍처가 품질 속성(성능, 보안, 가용성 등) 요구사항을 얼마나 만족하는지 시나리오를 바탕으로 평가하는 기법'은?",
    "options": [
      "ATAM (Architecture Tradeoff Analysis Method)",
      "CBAM (Cost Benefit Analysis Method)",
      "SAAM (Software Architecture Analysis Method)",
      "ARID (Active Reviews for Intermediate Designs)"
    ],
    "answer_index": 0,
    "explanation": "ATAM은 아키텍처의 품질 속성 간의 상충 관계(Trade-off)를 시나리오 기반으로 체계적으로 분석 및 평가하는 대표적인 모델입니다."
  },
  {
    "id": 74,
    "subject": "소프트웨어 개발",
    "question": "테스트 오라클(Test Oracle) 중 '모든 입력값에 대하여 기대하는 결과를 정확히 계산하여 제공하는 오라클'은?",
    "options": [
      "참 오라클 (True Oracle)",
      "샘플링 오라클 (Sampling Oracle)",
      "휴리스틱 오라클 (Heuristic Oracle)",
      "일관성 검사 오라클 (Consistent Oracle)"
    ],
    "answer_index": 0,
    "explanation": "참(True) 오라클은 모든 입력값에 대해 발생 가능한 모든 결과를 완벽하게 알고 있는 오라클로, 주로 항공, 의료 등 고신뢰성 시스템에 적용됩니다."
  },
  {
    "id": 75,
    "subject": "소프트웨어 개발",
    "question": "다음 정렬 알고리즘 중 동일한 키 값을 가진 원소들의 상대적 순서가 정렬 후에도 유지되는 '안정 정렬(Stable Sort)'에 해당하는 것은?",
    "options": [
      "선택 정렬 (Selection Sort)",
      "퀵 정렬 (Quick Sort)",
      "힙 정렬 (Heap Sort)",
      "삽입 정렬 (Insertion Sort)"
    ],
    "answer_index": 3,
    "explanation": "삽입 정렬, 버블 정렬, 병합 정렬은 안정 정렬(Stable Sort)입니다. 선택 정렬, 퀵 정렬, 힙 정렬은 불안정 정렬(Unstable Sort)에 속합니다."
  },
  {
    "id": 76,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트 기법 중 경계값 분석(Boundary Value Analysis)에 대한 설명으로 옳은 것은?",
    "options": [
      "동치 분할 영역의 중간값을 테스트 데이터로 선정한다.",
      "입력 조건의 유효 범위 경계에 결함이 발생할 확률이 높다는 점에 착안한 기법이다.",
      "소스 코드의 제어 흐름 경로를 검사하는 화이트박스 기법이다.",
      "입력 조건들 간의 논리적 조합을 의사결정표로 분석한다."
    ],
    "answer_index": 1,
    "explanation": "경계값 분석은 프로그램 결함이 대개 입력 도메인의 최소값, 최대값, 경계 부근에서 빈번하게 일어난다는 점을 활용하는 블랙박스 테스트 기법입니다."
  },
  {
    "id": 77,
    "subject": "소프트웨어 개발",
    "question": "McCabe의 순환 복잡도(Cyclomatic Complexity)를 제어 흐름 그래프(CFG)에서 계산할 때, 간선 수(E)가 14개, 노드 수(N)가 10개라면 순환 복잡도 V(G)는?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answer_index": 1,
    "explanation": "순환 복잡도 공식 V(G) = E - N + 2 = 14 - 10 + 2 = 6 입니다. (또는 조건 판별 노드 수 + 1)"
  },
  {
    "id": 78,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 형상 관리(SCM, Software Configuration Management)의 주요 활동이 아닌 것은?",
    "options": [
      "형상 식별 (Configuration Identification)",
      "형상 통제 (Configuration Control)",
      "형상 감사 (Configuration Audit)",
      "형상 부하 검사 (Configuration Stress Testing)"
    ],
    "answer_index": 3,
    "explanation": "형상 관리 활동은 형상 식별, 형상 통제(변경 관리), 형상 감사(무결성 보증), 형상 기록/보고의 4가지입니다. 부하 검사는 소프트웨어 성능 테스트의 일종입니다."
  },
  {
    "id": 79,
    "subject": "소프트웨어 개발",
    "question": "해시 충돌(Collision) 해결 기법 중 '동일한 버킷으로 해싱된 항목들을 연결 리스트(Linked List)로 연결하여 저장하는 방식'은?",
    "options": [
      "선형 탐사법 (Linear Probing)",
      "체이닝 (Chaining)",
      "이차 탐사법 (Quadratic Probing)",
      "이중 해싱법 (Double Hashing)"
    ],
    "answer_index": 1,
    "explanation": "체이닝(Chaining)은 해시 충돌 발생 시 해당 버킷 위치에 연결 리스트를 만들어 충돌된 원소들을 차례로 연결하는 대표적인 폐쇄 주소법입니다."
  },
  {
    "id": 80,
    "subject": "소프트웨어 개발",
    "question": "이진 트리(Binary Tree) 순회 방식 중 '왼쪽 자식 노드 방문 -> 루트 노드 방문 -> 오른쪽 자식 노드 방문' 순서로 수행하는 순회는?",
    "options": [
      "전위 순회 (Preorder Traversal)",
      "중위 순회 (Inorder Traversal)",
      "후위 순회 (Postorder Traversal)",
      "레벨 순회 (Level Order Traversal)"
    ],
    "answer_index": 1,
    "explanation": "중위 순회(Inorder)는 Left -> Root -> Right 순으로 방문합니다. 전위 순회는 Root -> Left -> Right, 후위 순회는 Left -> Right -> Root 순입니다."
  },
  {
    "id": 81,
    "subject": "소프트웨어 개발",
    "question": "상향식 통합 테스트(Bottom-up Integration Test)에서 상위 모듈 역할을 대신하여 테스트를 수행하는 가상의 제어 모듈은?",
    "options": [
      "스텁 (Stub)",
      "드라이버 (Driver)",
      "에뮬레이터 (Emulator)",
      "오라클 (Oracle)"
    ],
    "answer_index": 1,
    "explanation": "상향식 통합 테스트에서는 하위 모듈을 호출하고 데이터를 전달하는 가상의 상위 모듈로 '드라이버(Test Driver)'가 필요합니다. 스텁은 하향식에서 사용됩니다."
  },
  {
    "id": 82,
    "subject": "소프트웨어 개발",
    "question": "클린 코드(Clean Code) 작성 5대 원칙에 포함되지 않는 것은?",
    "options": [
      "가독성 (Readability)",
      "단순성 (Simplicity)",
      "중복의 최소화 (Avoid Duplication)",
      "실행 압축성 (Execution Compression)"
    ],
    "answer_index": 3,
    "explanation": "클린 코드 원칙은 가독성, 단순성, 의존성 배제, 중복 최소화, 추상화입니다. 코드를 무리하게 압축하는 것은 가독성을 해치므로 지양됩니다."
  },
  {
    "id": 83,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 결함 관리 생명주기(Defect Lifecycle) 중 '수정된 결함이 검증을 통과하여 완전히 종결되었음'을 나타내는 상태는?",
    "options": [
      "Open",
      "Assigned",
      "Resolved",
      "Closed"
    ],
    "answer_index": 3,
    "explanation": "결함 생명주기: New -> Open -> Assigned -> Resolved(수정됨) -> Closed(재테스트 검증 통과 후 종결) 순으로 진행됩니다."
  },
  {
    "id": 84,
    "subject": "소프트웨어 개발",
    "question": "동적 계획법(Dynamic Programming)의 핵심 특징으로 가장 적합한 것은?",
    "options": [
      "문제를 작은 부분 문제로 나누고, 부분 문제의 해를 메모이제이션(Memoization)하여 중복 계산을 방지한다.",
      "각 단계마다 지금 당장 최선인 선택을 내리는 탐욕적인 전략을 취한다.",
      "가능한 모든 경우의 수를 트리 형태로 탐색하다가 유망하지 않으면 백트래킹한다.",
      "입력 데이터에 의존하지 않고 무작위 난수를 생성하여 근사해를 구한다."
    ],
    "answer_index": 0,
    "explanation": "동적 계획법(DP)은 중복되는 부분 문제들을 한 번만 풀어 테이블이나 배열에 저장(Memoization)해 두고 재활용하여 효율성을 극대화합니다."
  },
  {
    "id": 85,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 빌드 및 종속성 관리 자동화 도구로 옳지 않은 것은?",
    "options": [
      "Gradle",
      "Maven",
      "Jenkins",
      "Nginx"
    ],
    "answer_index": 3,
    "explanation": "Nginx는 웹 서버 및 리버스 프록시 서버입니다. Gradle, Maven, Ant 등은 빌드 도구이며, Jenkins는 CI/CD 빌드 자동화 서버입니다."
  },
  {
    "id": 86,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트(White Box Test) 검증 기준(Coverage) 중 '프로그램 내의 모든 개별 조건식의 True/False와 전체 조건식의 결과 True/False를 모두 만족시키는 검증 기준'은?",
    "options": [
      "문장 커버리지 (Statement Coverage)",
      "분기 커버리지 (Branch Coverage)",
      "조건 커버리지 (Condition Coverage)",
      "조건/결정 커버리지 (Condition/Decision Coverage)"
    ],
    "answer_index": 3,
    "explanation": "조건/결정 커버리지(Condition/Decision Coverage)는 개별 조건식의 참/거짓뿐만 아니라 전체 판정(결정)식의 참/거짓도 최소 한 번씩 실행되도록 조합합니다."
  },
  {
    "id": 87,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 정규화(Normalization) 과정 중 '릴레이션의 모든 속성이 원자값(Atomic Value)으로만 구성되도록 분해하는 단계'는?",
    "options": [
      "제1정규형 (1NF)",
      "제2정규형 (2NF)",
      "제3정규형 (3NF)",
      "보이스-코드 정규형 (BCNF)"
    ],
    "answer_index": 0,
    "explanation": "1NF(제1정규형)는 도메인이 원자값이어야 합니다. 2NF는 부분 함수적 종속 제거, 3NF는 이행적 함수 종속 제거, BCNF는 모든 결정자가 후보키여야 합니다."
  },
  {
    "id": 88,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 이상(Anomaly) 현상 중 '테이블에 데이터를 입력할 때 불필요한 정보까지 함께 억지로 입력해야 하는 현상'은?",
    "options": [
      "삽입 이상 (Insertion Anomaly)",
      "삭제 이상 (Deletion Anomaly)",
      "갱신 이상 (Update Anomaly)",
      "참조 이상 (Reference Anomaly)"
    ],
    "answer_index": 0,
    "explanation": "삽입 이상(Insertion Anomaly)은 원치 않는 데이터를 강제로 입력하지 않고는 원하는 데이터를 삽입할 수 없는 현상입니다."
  },
  {
    "id": 89,
    "subject": "데이터베이스 구축",
    "question": "관계대수(Relational Algebra) 연산자 중 두 릴레이션 R과 S에서 공통 속성을 기준으로 조건이 일치하는 튜플들을 결합하는 연산자는?",
    "options": [
      "셀렉트 (Select, σ)",
      "프로젝트 (Project, π)",
      "조인 (Join, ⋈)",
      "디비전 (Division, ÷)"
    ],
    "answer_index": 2,
    "explanation": "조인(Join, ⋈)은 공통된 속성을 기준으로 두 개의 릴레이션을 하나로 합쳐서 새로운 릴레이션을 생성하는 순수 관계 연산자입니다."
  },
  {
    "id": 90,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션(Transaction)의 ACID 특성 중 '트랜잭션이 성공적으로 완료되면 그 변경 결과는 영구적으로 데이터베이스에 반영되어야 한다'는 원칙은?",
    "options": [
      "원자성 (Atomicity)",
      "일관성 (Consistency)",
      "고립성 (Isolation)",
      "영속성 (Durability)"
    ],
    "answer_index": 3,
    "explanation": "영속성(Durability, 지속성)은 성공적으로 수행된 트랜잭션의 결과는 시스템 장애가 발생하더라도 영구적으로 보존되어야 함을 의미합니다."
  },
  {
    "id": 91,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 무결성 제약조건 중 '기본키(Primary Key)를 구성하는 속성은 널(Null) 값을 가질 수 없으며 중복될 수 없다'는 제약은?",
    "options": [
      "개체 무결성 (Entity Integrity)",
      "참조 무결성 (Referential Integrity)",
      "도메인 무결성 (Domain Integrity)",
      "키 무결성 (Key Integrity)"
    ],
    "answer_index": 0,
    "explanation": "개체 무결성(Entity Integrity)은 릴레이션의 기본키 값은 Null일 수 없고 릴레이션 내에서 유일해야 한다는 제약조건입니다."
  },
  {
    "id": 92,
    "subject": "데이터베이스 구축",
    "question": "뷰(View)의 특징에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "뷰는 물리적으로 데이터를 저장하는 실체 테이블이다.",
      "뷰를 사용하면 복잡한 쿼리를 단순화하고 데이터 보안성을 높일 수 있다.",
      "기본 테이블이 삭제되면 그 테이블을 기반으로 정의된 뷰도 함께 영향을 받는다.",
      "뷰 정의는 CREATE VIEW 문을 사용하여 수행한다."
    ],
    "answer_index": 0,
    "explanation": "뷰(View)는 물리적으로 데이터를 직접 저장하지 않는 가상 테이블(Virtual Table)입니다. 시스템 카탈로그에 SELECT 쿼리 정의문 형태로만 보관됩니다."
  },
  {
    "id": 93,
    "subject": "데이터베이스 구축",
    "question": "E-R(Entity-Relationship) 모델 다이어그램에서 개체 간의 '관계(Relationship)'를 나타내는 기호는?",
    "options": [
      "사각형 (Rectangle)",
      "타원 (Ellipse)",
      "마름모 (Diamond)",
      "밑줄 타원 (Underlined Ellipse)"
    ],
    "answer_index": 2,
    "explanation": "E-R 다이어그램 기호: 사각형(개체, Entity), 타원(속성, Attribute), 마름모(관계, Relationship), 이중타원(다중값 속성)입니다."
  },
  {
    "id": 94,
    "subject": "데이터베이스 구축",
    "question": "분산 데이터베이스(Distributed DB)의 목표 중 '사용자가 데이터가 물리적으로 어느 위치의 사이트에 저장되어 있는지 알 필요 없이 논리적 명칭만으로 접근할 수 있는 특성'은?",
    "options": [
      "위치 투명성 (Location Transparency)",
      "분할 투명성 (Fragmentation Transparency)",
      "복제 투명성 (Replication Transparency)",
      "병행 투명성 (Concurrency Transparency)"
    ],
    "answer_index": 0,
    "explanation": "위치 투명성(Location Transparency)은 데이터가 저장된 물리적 위치를 몰라도 데이터의 논리적 명칭만으로 데이터베이스에 접근할 수 있게 해줍니다."
  },
  {
    "id": 95,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 회복(Recovery) 기법 중 트랜잭션 수행 결과를 즉시 DB에 기록하고, 장애 발생 시 로그를 기반으로 취소(Undo) 및 재실행(Redo)을 수행하는 방식은?",
    "options": [
      "즉시 갱신 기법 (Immediate Update)",
      "지연 갱신 기법 (Deferred Update)",
      "그림자 페이징 기법 (Shadow Paging)",
      "체크포인트 기법 (Checkpointing)"
    ],
    "answer_index": 0,
    "explanation": "즉시 갱신(Immediate Update)은 변경 사항을 즉시 DB에 반영하며 장애 시 미완료 트랜잭션은 Undo, 완료 트랜잭션은 Redo를 수행합니다. 지연 갱신은 Undo가 필요 없습니다."
  },
  {
    "id": 96,
    "subject": "데이터베이스 구축",
    "question": "병행 제어(Concurrency Control) 기법 중 직렬 가능성을 보장하기 위해 락을 획득만 하는 확장 단계(Growing Phase)와 락을 해제만 하는 축소 단계(Shrinking Phase)를 두는 규약은?",
    "options": [
      "2단계 로킹 규약 (2-Phase Locking Protocol)",
      "타임스탬프 순서 규약 (Timestamp Ordering)",
      "낙관적 병행 제어 (Optimistic Concurrency Control)",
      "다중 버전 병행 제어 (MVCC)"
    ],
    "answer_index": 0,
    "explanation": "2단계 로킹(2PL) 규약은 트랜잭션이 모든 락을 획득하는 확장 단계와 락을 반환하기 시작하는 축소 단계로 나누어 직렬 가능성을 보장합니다."
  },
  {
    "id": 97,
    "subject": "데이터베이스 구축",
    "question": "클러스터드 인덱스(Clustered Index)에 대한 설명으로 옳은 것은?",
    "options": [
      "테이블당 여러 개를 자유롭게 생성할 수 있다.",
      "데이터 레코드의 물리적 저장 순서가 인덱스의 정렬 순서와 일치한다.",
      "인덱스의 리프 노드가 데이터 페이지를 가리키는 포인터 주소만 보관한다.",
      "데이터 삽입과 삭제가 빈번해도 인덱스 재정렬 비용이 전혀 들지 않는다."
    ],
    "answer_index": 1,
    "explanation": "클러스터드 인덱스는 물리적 레코드 자체가 인덱스 키 순서대로 정렬되어 저장되므로 테이블당 오직 1개만 생성할 수 있습니다."
  },
  {
    "id": 98,
    "subject": "데이터베이스 구축",
    "question": "SQL 명령어 중 데이터 정의어(DDL)에 해당하지 않는 것은?",
    "options": [
      "CREATE",
      "ALTER",
      "TRUNCATE",
      "INSERT"
    ],
    "answer_index": 3,
    "explanation": "INSERT는 데이터 조작어(DML)입니다. CREATE, ALTER, DROP, TRUNCATE 등은 테이블 스키마 구조를 정의/변경/삭제하는 DDL입니다."
  },
  {
    "id": 99,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 튜닝(Tuning) 기법 중 '시스템 성능 향상을 위해 정규화 원칙에 위배되더라도 중복 컬럼이나 반정규화 테이블을 구성하는 기법'은?",
    "options": [
      "반정규화 (De-normalization)",
      "인덱스 튜닝 (Index Tuning)",
      "뷰 분할 (View Partitioning)",
      "체크포인트 튜닝 (Checkpoint Tuning)"
    ],
    "answer_index": 0,
    "explanation": "반정규화(De-normalization, 역정규화)는 조회 성능 향상 및 조인 비용 절감을 위해 의도적으로 중복, 통합, 분할을 수행하는 기법입니다."
  },
  {
    "id": 100,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제 프로세스 상태 전이 중 '실행(Running) 상태에서 할당된 CPU 시간(Time Slice)이 만료되었을 때 전이되는 상태'는?",
    "options": [
      "준비 (Ready) 상태",
      "대기/블록 (Blocked) 상태",
      "종료 (Terminated) 상태",
      "생성 (Created) 상태"
    ],
    "answer_index": 0,
    "explanation": "시간 할당량 만료(Timeout)가 발생하면 프로세스는 실행(Running) 상태에서 다시 스케줄링을 기다리는 준비(Ready) 상태로 전이됩니다."
  },
  {
    "id": 101,
    "subject": "프로그래밍 언어 활용",
    "question": "프로세스 스케줄링 알고리즘 중 HRN(Highest Response-ratio Next)의 우선순위 계산식으로 옳은 것은?",
    "options": [
      "(대기 시간 + 서비스 시간) / 서비스 시간",
      "(서비스 시간 - 대기 시간) / 서비스 시간",
      "서비스 시간 / (대기 시간 + 서비스 시간)",
      "대기 시간 / 서비스 시간"
    ],
    "answer_index": 0,
    "explanation": "HRN 우선순위 계산식은 (대기 시간 + 서비스 시간) / 서비스 시간 입니다. 대기 시간이 길수록 우선순위가 높아져 기아(Starvation) 현상을 방지합니다."
  },
  {
    "id": 102,
    "subject": "프로그래밍 언어 활용",
    "question": "교착상태(Deadlock)가 발생하기 위해 반드시 동시에 충족되어야 하는 4가지 조건에 해당하지 않는 것은?",
    "options": [
      "상호 배제 (Mutual Exclusion)",
      "점유와 대기 (Hold and Wait)",
      "선점 허용 (Preemption)",
      "환형 대기 (Circular Wait)"
    ],
    "answer_index": 2,
    "explanation": "교착상태 4대 필수조건은 상호 배제, 점유와 대기, '비선점(Non-preemption)', 환형 대기입니다. 자원이 선점 가능하면 교착상태가 발생하지 않습니다."
  },
  {
    "id": 103,
    "subject": "프로그래밍 언어 활용",
    "question": "가상기억장치 페이지 교체 알고리즘 중 '가장 오랫동안 사용되지 않은(Least Recently Used) 페이지를 교체 대상으로 선택하는 알고리즘'은?",
    "options": [
      "FIFO (First In First Out)",
      "LRU (Least Recently Used)",
      "LFU (Least Frequently Used)",
      "OPT (Optimal Replacement)"
    ],
    "answer_index": 1,
    "explanation": "LRU는 최근에 가장 오랫동안 참조되지 않은 페이지를 희생양으로 교체합니다. LFU는 참조 빈도수가 가장 적은 페이지를 교체합니다."
  },
  {
    "id": 104,
    "subject": "프로그래밍 언어 활용",
    "question": "OSI 7계층 참조 모델 중 '데이터의 표현 형식 변환, 암호화, 압축 등의 기능을 수행하는 계층'은?",
    "options": [
      "세션 계층 (Session Layer)",
      "표현 계층 (Presentation Layer)",
      "응용 계층 (Application Layer)",
      "전송 계층 (Transport Layer)"
    ],
    "answer_index": 1,
    "explanation": "표현 계층(Presentation Layer, 6계층)은 데이터의 표현 형식 변환(ASCII/EBCDIC), 데이터 암호화 및 복호화, 압축을 담당합니다."
  },
  {
    "id": 105,
    "subject": "프로그래밍 언어 활용",
    "question": "TCP(Transmission Control Protocol)의 특징으로 옳지 않은 것은?",
    "options": [
      "연결 지향(Connection-oriented) 프로토콜이다.",
      "3-Way Handshake를 통해 신뢰성 있는 연결을 수립한다.",
      "데이터 수신 여부를 확인하지 않고 일방적으로 전송하여 오버헤드가 적다.",
      "흐름 제어(Flow Control) 및 혼잡 제어(Congestion Control)를 제공한다."
    ],
    "answer_index": 2,
    "explanation": "수신 여부를 확인하지 않고 빠르게 전송하는 비연결형 프로토콜은 UDP입니다. TCP는 ACK 수신 확인과 재전송을 통해 신뢰성을 보장합니다."
  },
  {
    "id": 106,
    "subject": "프로그래밍 언어 활용",
    "question": "IP 주소 192.168.1.0/26 네트워크에서 할당 가능한 유효 호스트(Host)의 최대 개수는?",
    "options": [
      "30개",
      "62개",
      "64개",
      "126개"
    ],
    "answer_index": 1,
    "explanation": "/26 프리픽스는 호스트 비트가 32 - 26 = 6비트입니다. 전체 주소 수는 2^6 = 64개이며, 네트워크 주소와 브로드캐스트 주소 2개를 제외한 62개가 유효 호스트 수입니다."
  },
  {
    "id": 107,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 다음 코드의 실행 결과 출력되는 값은?\n\nint a = 10, b = 20;\nint *p = &a;\n*p = 15;\np = &b;\n*p = 25;\nprintf(\"%d\", a + b);",
    "options": [
      "30",
      "40",
      "45",
      "50"
    ],
    "answer_index": 1,
    "explanation": "*p=&a 후 *p=15에 의해 a는 15가 됩니다. 이후 p=&b 후 *p=25에 의해 b는 25가 됩니다. 따라서 a + b = 15 + 25 = 40 입니다."
  },
  {
    "id": 108,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 객체지향의 다형성(Polymorphism) 구현과 관련된 '오버라이딩(Overriding)'의 조건으로 옳지 않은 것은?",
    "options": [
      "상위 클래스의 메서드명과 동일해야 한다.",
      "매개변수의 개수와 타입, 순서가 동일해야 한다.",
      "반환(Return) 타입이 상위 클래스와 호환되어야 한다.",
      "상위 클래스의 메서드보다 접근 제어자를 더 좁은 범위(Private 쪽)로 변경해야 한다."
    ],
    "answer_index": 3,
    "explanation": "오버라이딩 시 자식 클래스는 부모 클래스의 메서드보다 접근 제어자를 더 좁은 범위로 변경할 수 없습니다 (예: public을 protected나 private로 변경 불가)."
  },
  {
    "id": 109,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 다음 코드의 실행 결과는?\n\nnums = [1, 2, 3, 4, 5]\nresult = [x * 2 for x in nums if x % 2 == 1]\nprint(result)",
    "options": [
      "[2, 6, 10]",
      "[4, 8]",
      "[2, 4, 6, 8, 10]",
      "[1, 3, 5]"
    ],
    "answer_index": 0,
    "explanation": "리스트 컴프리헨션 조건식 if x % 2 == 1에 의해 홀수(1, 3, 5)만 선택되며, 각 요소에 * 2를 수행하므로 [2, 6, 10]이 생성됩니다."
  },
  {
    "id": 110,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제 메모리 배치 전략 중 '프로세스가 적재될 수 있는 빈 분할 영역 중 크기가 가장 작은 공간을 선택하여 적재하는 방식'은?",
    "options": [
      "최초 적합 (First Fit)",
      "최적 적합 (Best Fit)",
      "최악 적합 (Worst Fit)",
      "순환 적합 (Next Fit)"
    ],
    "answer_index": 1,
    "explanation": "최적 적합(Best Fit)은 잔여 단편화(Internal/External Fragmentation)를 최소화하기 위해 프로세스 크기 이상의 빈 블록 중 가장 작은 블록에 할당합니다."
  },
  {
    "id": 111,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어 표준 라이브러리 문자열 처리 함수 중 '두 문자열의 내용을 사전순으로 비교하는 함수'는?",
    "options": [
      "strcpy()",
      "strlen()",
      "strcat()",
      "strcmp()"
    ],
    "answer_index": 3,
    "explanation": "strcmp(s1, s2)는 두 문자열을 비교하여 같으면 0, s1이 사전순으로 앞서면 음수, 뒤처지면 양수를 반환합니다."
  },
  {
    "id": 112,
    "subject": "프로그래밍 언어 활용",
    "question": "교착상태 회피(Deadlock Avoidance) 기법 중 다익스트라(Dijkstra)가 제안한 대표적인 알고리즘으로 자원 할당 상태가 안전 상태(Safe State)인지 지속적으로 검사하는 알고리즘은?",
    "options": [
      "은행원 알고리즘 (Banker's Algorithm)",
      "자원 할당 그래프 (Resource Allocation Graph)",
      "타박 알고리즘 (Tarjan's Algorithm)",
      "피터슨 알고리즘 (Peterson's Algorithm)"
    ],
    "answer_index": 0,
    "explanation": "은행원 알고리즘(Banker's Algorithm)은 시스템이 자원을 할당했을 때 교착상태에 빠지지 않고 모든 프로세스가 종료될 수 있는 '안전 순서열'이 존재하는지 확인하는 회피 기법입니다."
  },
  {
    "id": 113,
    "subject": "정보시스템 구축관리",
    "question": "정보보안의 3대 목표(CIA Triad)에 해당하지 않는 것은?",
    "options": [
      "기밀성 (Confidentiality)",
      "무결성 (Integrity)",
      "가용성 (Availability)",
      "책임추적성 (Accountability)"
    ],
    "answer_index": 3,
    "explanation": "정보보안 3대 목표(CIA Triad)는 기밀성(인가된 사용자만 접근), 무결성(인가 없이 변조 불가), 가용성(필요할 때 언제든 사용 가능)입니다."
  },
  {
    "id": 114,
    "subject": "정보시스템 구축관리",
    "question": "서비스 거부 공격(DoS/DDoS) 중 'TCP 3-Way Handshake 과정에서 악의적으로 SYN 패킷만을 대량으로 보내 서버의 백로그 큐를 가득 채우는 공격'은?",
    "options": [
      "SYN Flooding",
      "Smurf 공격",
      "Ping of Death",
      "TearDrop"
    ],
    "answer_index": 0,
    "explanation": "SYN Flooding은 서버에 대량의 SYN 요청을 보낸 뒤 이에 대한 ACK 응답을 보내지 않고 대기 상태(Half-open)로 방치하여 정상적인 접속을 마비시킵니다."
  },
  {
    "id": 115,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 비용 산정 모델 중 보헴(Boehm)이 제안하였으며, 프로젝트 규모에 따라 Organic(5만 라인 이하), Semi-detached(30만 라인 이하), Embedded(30만 라인 이상)로 분류하는 모델은?",
    "options": [
      "Putnam 모델",
      "기능 점수(FP) 모델",
      "COCOMO 모델",
      "델파이 기법"
    ],
    "answer_index": 2,
    "explanation": "COCOMO(Constructive Cost Model)는 원시 코드 라인 수(LOC)를 기반으로 개발 노력과 비용을 예측하며 조직형(Organic), 반분리형(Semi-detached), 내장형(Embedded) 모드로 구분합니다."
  },
  {
    "id": 116,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 보안 장비 중 '네트워크 트래픽을 실시간으로 감시하다가 비인가된 침입 패턴이 감지되면 즉시 해당 패킷을 능동적으로 차단하는 시스템'은?",
    "options": [
      "IDS (Intrusion Detection System)",
      "IPS (Intrusion Prevention System)",
      "VPN (Virtual Private Network)",
      "VLAN (Virtual Local Area Network)"
    ],
    "answer_index": 1,
    "explanation": "IPS(침입 차단 시스템)는 비정상 트래픽이나 침입을 탐지만 하는 IDS와 달리, 인라인(In-line) 구조로 배치되어 침입 패킷을 실시간 능동적으로 차단합니다."
  },
  {
    "id": 117,
    "subject": "정보시스템 구축관리",
    "question": "대칭키(비밀키) 암호 알고리즘 중 미국 표준기술연구소(NIST)에서 DES의 취약점을 대체하기 위해 제정한 128비트 블록 암호화 표준 알고리즘은?",
    "options": [
      "RSA",
      "SHA-256",
      "ECC (Elliptic Curve Cryptography)",
      "AES (Advanced Encryption Standard)"
    ],
    "answer_index": 3,
    "explanation": "AES는 Rijndael 알고리즘 기반으로 128, 192, 256비트 키 길이를 지원하는 현대 표준 대칭키 블록 암호 알고리즘입니다."
  },
  {
    "id": 118,
    "subject": "정보시스템 구축관리",
    "question": "악성코드 유형 중 '자기 자신을 복제하여 네트워크를 통해 스스로 전파되는 특징을 가진 악성 프로그램'은?",
    "options": [
      "트로이 목마 (Trojan Horse)",
      "웜 (Worm)",
      "스파이웨어 (Spyware)",
      "애드웨어 (Adware)"
    ],
    "answer_index": 1,
    "explanation": "웜(Worm)은 다른 정상 숙주 파일 없이도 독립적으로 실행되며 네트워크를 통해 자신을 복제하여 전파됩니다. 트로이 목마는 자기 복제 능력이 없습니다."
  },
  {
    "id": 119,
    "subject": "정보시스템 구축관리",
    "question": "단방향 해시 함수를 이용해 비밀번호를 저장할 때, 무차별 대입 공격 및 레인보우 테이블(Rainbow Table) 공격을 무력화하기 위해 원문에 임의의 난수 문자열을 덧붙이는 기법은?",
    "options": [
      "키 스트레칭 (Key Stretching)",
      "패딩 (Padding)",
      "솔팅 (Salting)",
      "마스킹 (Masking)"
    ],
    "answer_index": 2,
    "explanation": "솔팅(Salting)은 패스워드 해시 생성 시 고유한 난수(솔트)를 붙여 해시값을 계산함으로써 미리 계산된 레인보우 테이블 매핑을 무력화합니다."
  },
  {
    "id": 120,
    "subject": "정보시스템 구축관리",
    "question": "재해 복구 계획(DRP)의 주요 지표 중 '재해 발생 시 데이터의 손실을 감수할 수 있는 최대 허용 시점(데이터 복구 기준점)'을 의미하는 용어는?",
    "options": [
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "MTTR (Mean Time To Repair)",
      "RPO (Recovery Point Objective)"
    ],
    "answer_index": 3,
    "explanation": "RPO(목표 복구 시점)는 장애 발생 시 감수할 수 있는 데이터 손실 시점(백업 기준)이며, RTO(목표 복구 시간)는 서비스를 정상 가동하기까지 걸리는 허용 시간입니다."
  },
  {
    "id": 121,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 프로세스 성숙도 평가 모델인 CMMI(Capability Maturity Model Integration)의 5개 성숙도 단계 순서가 올바른 것은?",
    "options": [
      "초기 -> 정의 -> 관리 -> 최적화 -> 정량적 관리",
      "초기 -> 관리 -> 정의 -> 정량적 관리 -> 최적화",
      "관리 -> 정의 -> 정량적 관리 -> 초기 -> 최적화",
      "정의 -> 초기 -> 관리 -> 최적화 -> 정량적 관리"
    ],
    "answer_index": 1,
    "explanation": "CMMI 5단계: 1단계 초기(Initial) -> 2단계 관리(Managed) -> 3단계 정의(Defined) -> 4단계 정량적 관리(Quantitatively Managed) -> 5단계 최적화(Optimizing) 순서입니다."
  },
  {
    "id": 122,
    "subject": "정보시스템 구축관리",
    "question": "개인정보 비식별 조치 기법 중 '주민등록번호 앞자리만 남기고 뒷자리를 별표(*)로 바꾸거나, 주소의 번지수를 삭제하는 조치'는?",
    "options": [
      "가명처리 (Pseudonymization)",
      "데이터 마스킹 (Masking)",
      "총계처리 (Aggregation)",
      "데이터 범주화 (Data Bucketing)"
    ],
    "answer_index": 1,
    "explanation": "데이터 마스킹(Masking)은 개인정보의 주요 식별 속성을 공백이나 특수문자(*) 등으로 가려서 노출을 차단하는 기법입니다."
  },
  {
    "id": 123,
    "subject": "정보시스템 구축관리",
    "question": "클라우드 서비스 가상화 기술 중 운영체제(Guest OS)를 별도로 부팅하지 않고 호스트 OS 커널을 공유하여 격리된 실행 환경을 가볍게 제공하는 기술은?",
    "options": [
      "하이퍼바이저 Type-1",
      "전가상화 (Full Virtualization)",
      "컨테이너 (Container)",
      "반가상화 (Para-virtualization)"
    ],
    "answer_index": 2,
    "explanation": "도커(Docker)와 같은 컨테이너 기술은 호스트 커널을 공유하면서 프로세스 레벨의 격리(Namespace, Cgroups)를 제공하므로 VM에 비해 가볍고 시작 속도가 빠릅니다."
  },
  {
    "id": 124,
    "subject": "정보시스템 구축관리",
    "question": "무선 랜(Wi-Fi) 보안 프로토콜 중 취약한 RC4 암호화와 짧은 초기화 벡터(IV) 문제로 인해 현재는 사용이 엄격히 금지된 초기 암호화 방식은?",
    "options": [
      "WPA-PSK",
      "WPA2-Enterprise",
      "WPA3-SAE",
      "WEP (Wired Equivalent Privacy)"
    ],
    "answer_index": 3,
    "explanation": "WEP은 RC4 알고리즘의 결함과 짧은 IV 재사용 취약점으로 인해 수 분 내에 키가 크래킹될 수 있어 폐기되었습니다."
  },
  {
    "id": 125,
    "subject": "정보시스템 구축관리",
    "question": "공격자가 웹 서버의 취약점을 이용하여 악의적인 스크립트를 웹 페이지에 삽입하고, 일반 사용자가 해당 페이지를 열람할 때 브라우저에서 스크립트가 실행되어 세션 탈취 등을 일으키는 공격은?",
    "options": [
      "SQL Injection",
      "XSS (Cross-Site Scripting)",
      "DDoS",
      "Directory Traversal"
    ],
    "answer_index": 1,
    "explanation": "XSS(Cross-Site Scripting)는 검증되지 않은 외부 입력값이 웹 페이지 응답에 포함되어 클라이언트 브라우저에서 스크립트가 실행되는 웹 취약점 공격입니다."
  },
  {
    "id": 126,
    "subject": "소프트웨어 설계",
    "question": "CBD(Component-Based Development) 방법론에 대한 설명으로 가장 거리가 먼 것은?",
    "options": [
      "기존에 검증된 소프트웨어 컴포넌트를 조립하여 새로운 애플리케이션을 구축한다.",
      "소프트웨어 재사용성(Reusability)을 극대화하여 개발 기간과 비용을 절감한다.",
      "새로운 컴포넌트를 매번 처음부터 바닥(Scratch)에서 개발하는 것을 원칙으로 한다.",
      "품질 보증 및 유지보수성이 용이하다."
    ],
    "answer_index": 2,
    "explanation": "CBD 방법론은 이미 독립적으로 개발 및 검증된 컴포넌트(부품)들을 조립하여 시스템을 구축하는 기법으로, 매번 바닥부터 새로 개발하는 것을 지양합니다."
  },
  {
    "id": 127,
    "subject": "소프트웨어 설계",
    "question": "비용 산정 기법 중 LOC(Source Lines of Code) 기법에서 원시 코드 라인 수가 30,000라인이고 프로그래머의 월평균 생산성이 500라인일 때, 개발에 필요한 인월(Man-Month) 수는?",
    "options": [
      "30 M/M",
      "50 M/M",
      "60 M/M",
      "150 M/M"
    ],
    "answer_index": 2,
    "explanation": "인월(Man-Month) = 총 코드 라인 수 / 월평균 1인당 생산 라인 수 = 30,000 / 500 = 60 M/M 입니다."
  },
  {
    "id": 128,
    "subject": "소프트웨어 설계",
    "question": "UML 유스케이스(Use Case) 다이어그램에서 하나의 유스케이스가 정상적으로 수행되기 위해 다른 유스케이스의 행위를 반드시 포함하여 실행해야 하는 관계는?",
    "options": [
      "확장 관계 (<<extend>>)",
      "포함 관계 (<<include>>)",
      "일반화 관계 (Generalization)",
      "실체화 관계 (Realization)"
    ],
    "answer_index": 1,
    "explanation": "포함 관계(<<include>>)는 기준 유스케이스 수행 시 필수적으로 포함되어야 하는 종속 유스케이스와의 관계를 나타냅니다. 확장은 특정 조건에서만 선택적으로 실행되는 관계입니다."
  },
  {
    "id": 129,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계에서 클래스 간의 관계 중 '전체(Whole) 객체가 소멸하면 부분(Part) 객체도 함께 소멸하여 라이프사이클을 완전히 공유하는 강력한 결합 관계'는?",
    "options": [
      "연관 관계 (Association)",
      "집합 관계 (Aggregation)",
      "합성/포함 관계 (Composition)",
      "의존 관계 (Dependency)"
    ],
    "answer_index": 2,
    "explanation": "합성(Composition) 관계는 전체 객체와 부분 객체의 생명주기가 일치하여 전체가 사라지면 부분도 함께 사라지는 강력한 'Has-a' 관계입니다. 집합(Aggregation)은 독립적인 생명주기를 가집니다."
  },
  {
    "id": 130,
    "subject": "소프트웨어 설계",
    "question": "GoF 디자인 패턴 중 '상위 클래스에서 알고리즘의 골격(전체 흐름)을 정의하고, 구체적인 세부 단계는 하위 클래스에서 오버라이딩하여 구현하도록 하는 행위 패턴'은?",
    "options": [
      "Strategy 패턴",
      "Template Method 패턴",
      "Factory Method 패턴",
      "Observer 패턴"
    ],
    "answer_index": 1,
    "explanation": "템플릿 메서드(Template Method) 패턴은 알고리즘의 뼈대를 부모 클래스에 정의하고 일부 단계를 자식 클래스에서 구현하도록 하는 전형적인 행위 패턴입니다."
  },
  {
    "id": 131,
    "subject": "소프트웨어 설계",
    "question": "MVC(Model-View-Controller) 아키텍처 패턴에서 각 구성요소의 역할 설명으로 옳은 것은?",
    "options": [
      "Model: 사용자에게 보여지는 화면 인터페이스를 렌더링한다.",
      "View: 비즈니스 로직과 데이터베이스 상태를 직접 갱신한다.",
      "Controller: 사용자의 입력을 받아 모델을 업데이트하고 적절한 뷰를 선택하여 응답을 제어한다.",
      "Model: 사용자의 클릭 이벤트를 직접 감지하여 HTTP 응답을 전송한다."
    ],
    "answer_index": 2,
    "explanation": "Controller는 사용자의 요청(입력)을 받아 Model을 조작하고 화면을 표시할 View를 제어하는 중개자 역할을 수행합니다. Model은 데이터와 비즈니스 로직, View는 UI 화면 표현을 담당합니다."
  },
  {
    "id": 132,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계 원칙(SOLID) 중 '상위 모듈은 하위 모듈에 의존해서는 안 되며, 둘 다 추상화(인터페이스)에 의존해야 한다'는 원칙은?",
    "options": [
      "단일 책임 원칙 (SRP)",
      "개방 폐쇄 원칙 (OCP)",
      "인터페이스 분리 원칙 (ISP)",
      "의존 역전 원칙 (DIP)"
    ],
    "answer_index": 3,
    "explanation": "의존 역전 원칙(DIP, Dependency Inversion Principle)은 구현체(구체 클래스)에 직접 의존하지 않고 인터페이스나 추상 클래스에 의존하도록 설계하여 결합도를 낮추는 원칙입니다."
  },
  {
    "id": 133,
    "subject": "소프트웨어 설계",
    "question": "웹 서비스(Web Services) 관련 표준 기술 중 '웹 서비스가 제공하는 기능, 매개변수, 데이터 형식, 네트워크 엔드포인트 위치 등을 XML 형식으로 기술하는 명세서 언어'는?",
    "options": [
      "SOAP",
      "WSDL",
      "UDDI",
      "REST"
    ],
    "answer_index": 1,
    "explanation": "WSDL(Web Services Description Language)은 웹 서비스의 상세한 기술 규격(메서드, 파라미터, 프로토콜, 위치)을 정의하는 XML 기반 기술 언어입니다."
  },
  {
    "id": 134,
    "subject": "소프트웨어 설계",
    "question": "비동기 메시지 지향 미들웨어(MOM, Message-Oriented Middleware)의 주요 장점으로 옳지 않은 것은?",
    "options": [
      "송신자와 수신자 간의 결합도를 낮추는 느슨한 결합(Loose Coupling)을 지원한다.",
      "메시지 큐를 활용하여 송신자와 수신자가 동시에 온라인 상태가 아니어도 통신이 가능하다.",
      "실시간 응답 속도가 엄격하게 요구되는 트랜잭션 동기 처리에 가장 최적화되어 있다.",
      "부하가 급증할 때 메시지를 버퍼링하여 시스템 안정성을 높일 수 있다."
    ],
    "answer_index": 2,
    "explanation": "MOM은 비동기 큐 기반이므로 송신자가 즉시 응답을 기다리지 않는 시스템에 적합하며, 즉각적인 응답이 필수적인 실시간 동기 통신에는 RPC나 직접 호출 방식이 더 적합합니다."
  },
  {
    "id": 135,
    "subject": "소프트웨어 설계",
    "question": "요구사항 추적 매트릭스(Requirements Traceability Matrix)를 작성하는 주된 목적으로 옳은 것은?",
    "options": [
      "요구사항이 설계, 구현, 테스트 케이스까지 일관되게 반영되었는지 추적하고 누락을 방지하기 위해",
      "서버의 네트워크 대역폭과 트래픽 병목 지점을 정량적으로 측정하기 위해",
      "소스 코드의 메모리 누수 및 가비지 컬렉션 성능을 튜닝하기 위해",
      "데이터베이스의 테이블 정규화 지수를 자동으로 산출하기 위해"
    ],
    "answer_index": 0,
    "explanation": "요구사항 추적 매트릭스는 요구사항 정의부터 설계서, 소스 코드, 테스트 케이스 간의 양방향 연계 추적성을 확보하여 요구사항 누락 및 변경 영향을 검증합니다."
  },
  {
    "id": 136,
    "subject": "소프트웨어 설계",
    "question": "GoF 디자인 패턴 중 '애플리케이션 전역에서 특정 클래스의 인스턴스를 오직 하나만 생성하도록 보장하고 이에 대한 전역적인 접근점을 제공하는 패턴'은?",
    "options": [
      "Prototype 패턴",
      "Builder 패턴",
      "Singleton 패턴",
      "Abstract Factory 패턴"
    ],
    "answer_index": 2,
    "explanation": "싱글톤(Singleton) 패턴은 인스턴스가 단 하나만 생성되도록 생성자를 private으로 은닉하고 전역 정적 메서드를 통해 유일한 인스턴스를 공유합니다."
  },
  {
    "id": 137,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 개발 프레임워크(Framework)의 기본 특성으로 '프레임워크가 애플리케이션의 제어 흐름을 주도하며 개발자가 작성한 코드를 역으로 호출하는 특성'은?",
    "options": [
      "모듈화 (Modularity)",
      "재사용성 (Reusability)",
      "확장성 (Extensibility)",
      "제어의 역전 (IoC, Inversion of Control)"
    ],
    "answer_index": 3,
    "explanation": "제어의 역전(IoC, Inversion of Control)은 라이브러리와 프레임워크를 구분 짓는 가장 큰 특징으로, 프로그램의 실행 흐름 제어권이 개발자가 아닌 프레임워크에 있습니다."
  },
  {
    "id": 138,
    "subject": "소프트웨어 설계",
    "question": "이벤트 기반 아키텍처(EDA, Event-Driven Architecture)의 구성요소 및 특성에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "이벤트 생성자(Producer)와 이벤트 소비자(Consumer)는 상호 독립적이다.",
      "이벤트 채널(Event Broker)을 통해 이벤트가 발행(Publish)되고 구독(Subscribe)된다.",
      "컴포넌트 간 강한 결합(Tight Coupling)을 유도하여 호출 관계의 가시성을 높인다.",
      "시스템 확장성(Scalability)과 비동기 처리 성능이 우수하다."
    ],
    "answer_index": 2,
    "explanation": "EDA는 생성자와 소비자가 서로를 알지 못하는 '느슨한 결합(Loose Coupling)'을 지향하여 각 컴포넌트의 독립적인 배포와 확장을 가능하게 합니다."
  },
  {
    "id": 139,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 요구사항 명세서(SRS)가 갖추어야 할 바람직한 특성으로 옳지 않은 것은?",
    "options": [
      "명확성 (Unambiguous): 모든 이해관계자가 단 하나의 의미로만 해석할 수 있어야 한다.",
      "완전성 (Complete): 사용자가 요구한 모든 기능과 제약사항이 누락 없이 기술되어야 한다.",
      "일관성 (Consistent): 서로 다른 요구사항 간에 논리적 충돌이나 모순이 없어야 한다.",
      "모호성 (Ambiguity): 개발자가 유연하게 해석할 수 있도록 추상적 표현을 최대한 많이 포함해야 한다."
    ],
    "answer_index": 3,
    "explanation": "요구사항 명세서는 모호성(Ambiguity)을 철저히 배제하고 명확성(Unambiguity)을 지켜야 개발자와 의뢰인 간의 오해와 분쟁을 방지할 수 있습니다."
  },
  {
    "id": 140,
    "subject": "소프트웨어 설계",
    "question": "동기 통신(Synchronous)과 비동기 통신(Asynchronous)에 대한 비교로 옳은 것은?",
    "options": [
      "동기 통신은 요청을 보낸 후 응답이 올 때까지 대기(Blocking)하지 않고 다음 작업을 즉시 수행한다.",
      "비동기 통신은 요청자가 응답을 기다리지 않고 콜백이나 메시지 큐를 통해 나중에 결과를 전달받는다.",
      "비동기 통신은 서버와 클라이언트가 실시간으로 세션을 맞추어 클럭 신호에 맞춰 동작한다.",
      "동기 통신은 항상 비동기 통신에 비해 시스템 처리량(Throughput)이 높다."
    ],
    "answer_index": 1,
    "explanation": "비동기(Asynchronous) 통신은 송신자가 응답을 기다리지 않고 논블로킹(Non-blocking)으로 자기 작업을 계속하며 결과는 콜백이나 이벤트로 수신합니다."
  },
  {
    "id": 141,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트 V-모델에서 '단위 테스트(Unit Test)'의 검증 대상이 되는 설계 산출물은?",
    "options": [
      "요구사항 분석서",
      "시스템 기본 설계서",
      "상세 설계서 (모듈 설계서)",
      "사용자 인수 기준서"
    ],
    "answer_index": 2,
    "explanation": "V-모델 매핑: 요구사항 분석 -> 인수 테스트, 기본(아키텍처) 설계 -> 시스템 테스트, 상세 설계 -> 통합/단위 테스트 (모듈 내부 로직 검증)에 대응됩니다."
  },
  {
    "id": 142,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 결함(Defect)의 심각도(Severity)와 우선순위(Priority)에 대한 설명으로 옳은 것은?",
    "options": [
      "심각도와 우선순위는 항상 정비례하여 심각도가 높으면 무조건 우선순위도 가장 높다.",
      "심각도는 기술적인 관점에서 결함이 시스템에 미치는 영향도이며, 우선순위는 비즈니스 관점에서 결함을 언제 수정할 것인가의 긴급도이다.",
      "화면의 오탈자(Typo)는 시스템 크래시를 유발하므로 항상 가장 높은 심각도를 갖는다.",
      "우선순위는 개발자 개인이 주관적으로 결정하며 고객 요구나 일정과는 무관하다."
    ],
    "answer_index": 1,
    "explanation": "심각도(Severity)는 결함이 시스템 안정성에 미치는 기술적 파급력이고, 우선순위(Priority)는 출시 일정이나 비즈니스 가치에 따라 언제 조치할지의 시급성입니다."
  },
  {
    "id": 143,
    "subject": "소프트웨어 개발",
    "question": "블랙박스 테스트 기법 중 '입력 조건들 간의 복잡한 논리적 관계와 상호작용을 참/거짓 표로 도식화하여 테스트 케이스를 도출하는 기법'은?",
    "options": [
      "경계값 분석",
      "동치 분할",
      "원인-결과 그래프 (Cause-Effect Graphing)",
      "오류 추정 (Error Guessing)"
    ],
    "answer_index": 2,
    "explanation": "원인-결과 그래프 기법은 입력 조건(원인)과 그에 따른 출력(결과) 간의 부울 논리 조합을 그래프로 모델링한 후 의사결정표를 만들어 테스트 케이스를 설계합니다."
  },
  {
    "id": 144,
    "subject": "소프트웨어 개발",
    "question": "퀵 정렬(Quick Sort) 알고리즘의 평균 시간 복잡도와 최악(Worst Case) 시간 복잡도의 연결로 옳은 것은?",
    "options": [
      "평균 O(n log n), 최악 O(n log n)",
      "평균 O(n log n), 최악 O(n^2)",
      "평균 O(n^2), 최악 O(n^2)",
      "평균 O(n), 최악 O(n log n)"
    ],
    "answer_index": 1,
    "explanation": "퀵 정렬은 평균적으로 O(n log n)의 매우 빠른 속도를 보이지만, 이미 정렬된 데이터에서 첫 번째 원소를 피벗으로 잡는 등 분할이 한쪽으로 극단적으로 치우치면 최악 O(n^2)이 됩니다."
  },
  {
    "id": 145,
    "subject": "소프트웨어 개발",
    "question": "크기가 N인 원형 큐(Circular Queue)에서 프론트(front)와 리어(rear) 포인터의 위치를 이용해 포화(Full) 상태를 올바르게 판별하는 조건식은? (단, %는 나머지 연산자)",
    "options": [
      "front == rear",
      "(rear + 1) % N == front",
      "(front + 1) % N == rear",
      "rear == N - 1"
    ],
    "answer_index": 1,
    "explanation": "원형 큐에서는 공백 상태(front == rear)와 포화 상태를 구분하기 위해 한 칸을 비워두며, (rear + 1) % N == front 일 때 포화 상태로 판별합니다."
  },
  {
    "id": 146,
    "subject": "소프트웨어 개발",
    "question": "다음 후위 표기법(Postfix) 수식을 스택(Stack)을 이용하여 연산할 때 최종 계산 결과는?\n\n3 4 2 * + 5 -",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "answer_index": 0,
    "explanation": "스택 처리: 3, 4, 2 push -> * 연산: 4 * 2 = 8 -> + 연산: 3 + 8 = 11 -> 5 push -> - 연산: 11 - 5 = 6 입니다."
  },
  {
    "id": 147,
    "subject": "소프트웨어 개발",
    "question": "그래프 탐색 알고리즘 중 너비 우선 탐색(BFS, Breadth-First Search)을 구현할 때 가장 적합한 기본 자료구조는?",
    "options": [
      "스택 (Stack)",
      "큐 (Queue)",
      "우선순위 큐 (Priority Queue)",
      "양방향 연결 리스트"
    ],
    "answer_index": 1,
    "explanation": "BFS는 시작 노드에서 인접한 노드를 레벨별로 차례대로 방문하므로 선입선출(FIFO) 특성을 갖는 큐(Queue)를 사용합니다. 깊이 우선 탐색(DFS)은 스택이나 재귀 호출을 사용합니다."
  },
  {
    "id": 148,
    "subject": "소프트웨어 개발",
    "question": "리팩토링(Refactoring) 활동의 핵심 원칙으로 가장 옳은 것은?",
    "options": [
      "소프트웨어의 외부 동작 행위(기능)를 변경하지 않으면서 내부 코드 구조를 개선하여 가독성과 유지보수성을 높인다.",
      "기존에 없던 신규 비즈니스 요구사항과 추가 기능을 빠르게 코드에 구현한다.",
      "프로그램의 실행 파일 크기를 줄이기 위해 난독화 및 압축 컴파일을 적용한다.",
      "성능을 극대화하기 위해 객체지향 원칙을 깨고 모든 코드를 단일 함수로 합친다."
    ],
    "answer_index": 0,
    "explanation": "리팩토링은 소프트웨어의 외부 동작(기능)은 그대로 유지한 채 내부 구조를 재조정하여 코드의 품질, 가독성, 확장성을 개선하는 기법입니다."
  },
  {
    "id": 149,
    "subject": "소프트웨어 개발",
    "question": "이진 탐색(Binary Search) 알고리즘을 적용하기 위한 필수 전제 조건은?",
    "options": [
      "데이터가 연결 리스트(Linked List)로 구성되어 있어야 한다.",
      "데이터 원소들이 반드시 오름차순 또는 내림차순으로 사전 정렬되어 있어야 한다.",
      "배열의 전체 크기가 2의 거듭제곱이어야 한다.",
      "모든 데이터에 중복값이 존재해서는 안 된다."
    ],
    "answer_index": 1,
    "explanation": "이진 탐색은 중앙값과의 대소 비교를 통해 탐색 범위를 절반씩 줄여나가므로, 반드시 대상 데이터가 정렬(Sorted)되어 있어야만 동작합니다."
  },
  {
    "id": 150,
    "subject": "소프트웨어 개발",
    "question": "디지털 저작권 관리(DRM, Digital Rights Management) 시스템의 구성요소 중 '콘텐츠의 사용 권한 및 라이선스를 발급하고 관리하는 기관/서버'는?",
    "options": [
      "콘텐츠 제공자 (Contents Provider)",
      "클리어링하우스 (Clearinghouse)",
      "DRM 컨트롤러",
      "보안 컨테이너"
    ],
    "answer_index": 1,
    "explanation": "클리어링하우스(Clearinghouse)는 디지털 콘텐츠의 저작권 라이선스를 발급하고 사용 내역 관리 및 결제 처리를 담당하는 핵심 요소입니다."
  },
  {
    "id": 151,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트 중 '프로그램 내의 반복문(Loop) 구조에 초점을 맞추어 0회 반복, 1회 반복, 최대 반복 횟수 등을 검증하는 기법'은?",
    "options": [
      "기본 경로 검사 (Basis Path Testing)",
      "데이터 흐름 검사 (Data Flow Testing)",
      "루프 검사 (Loop Testing)",
      "변이 검사 (Mutation Testing)"
    ],
    "answer_index": 2,
    "explanation": "루프 검사(Loop Testing)는 단순 루프, 중첩 루프, 연접 루프 등의 반복문 경계 조건(0회, 최소, 중간, 최대)을 집중 검증하는 기법입니다."
  },
  {
    "id": 152,
    "subject": "소프트웨어 개발",
    "question": "소스 코드 품질 분석 도구 중 '프로그램을 직접 빌드하여 실행시키지 않고, 작성된 소스 코드의 문법, 스타일, 보안 취약점, 잠재 결함을 파싱하여 분석하는 기법'은?",
    "options": [
      "동적 분석 (Dynamic Analysis)",
      "정적 분석 (Static Analysis)",
      "스트레스 분석 (Stress Analysis)",
      "프로파일링 (Profiling)"
    ],
    "answer_index": 1,
    "explanation": "정적 분석(Static Analysis)은 SonarQube, ESLint처럼 소스 코드를 실행하지 않고 정적 텍스트와 구문 트리를 검사하여 결함과 코딩 표준 위반을 찾아냅니다."
  },
  {
    "id": 153,
    "subject": "소프트웨어 개발",
    "question": "지속적 통합(CI, Continuous Integration)의 핵심 실천 원칙으로 옳지 않은 것은?",
    "options": [
      "모든 개발자는 작업 코드를 적어도 하루에 한 번 이상 공유 저장소에 병합(Commit)한다.",
      "코드 커밋 시 자동화된 빌드와 단위 테스트가 자동으로 실행되어야 한다.",
      "테스트가 실패하더라도 릴리즈 당일까지 수정을 미루고 개발을 지속한다.",
      "누구나 현재 빌드의 성공/실패 상태를 투명하게 모니터링할 수 있어야 한다."
    ],
    "answer_index": 2,
    "explanation": "CI 환경에서는 빌드나 자동화 테스트가 실패하면 전체 개발팀이 이를 인지하고 최우선으로 문제를 즉각 해결(Fix)해야 합니다."
  },
  {
    "id": 154,
    "subject": "소프트웨어 개발",
    "question": "최소 신장 트리(MST, Minimum Spanning Tree) 알고리즘 중 '간선(Edge)들을 가중치 기준으로 오름차순 정렬한 뒤 사이클을 형성하지 않는 간선을 하나씩 탐욕적으로 선택하는 알고리즘'은?",
    "options": [
      "크루스칼 (Kruskal) 알고리즘",
      "프림 (Prim) 알고리즘",
      "다익스트라 (Dijkstra) 알고리즘",
      "벨만-포드 (Bellman-Ford) 알고리즘"
    ],
    "answer_index": 0,
    "explanation": "크루스칼(Kruskal) 알고리즘은 간선 중심의 그리디 MST 알고리즘으로 Union-Find 자료구조를 활용해 사이클을 검사합니다. 프림은 정점 중심으로 트리를 확장합니다."
  },
  {
    "id": 155,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트 커버리지 중 '항공 소프트웨어 DO-178C 등 고안전성 분야에서 요구되며, 각 조건식이 독립적으로 전체 판정식의 결과에 영향을 미치는지 검증하는 커버리지'는?",
    "options": [
      "구문 커버리지",
      "결정 커버리지",
      "MC/DC (Modified Condition/Decision Coverage)",
      "다중 조건 커버리지"
    ],
    "answer_index": 2,
    "explanation": "변형 조건/결정 커버리지(MC/DC)는 각 개별 조건식이 다른 조건식과 독립적으로 전체 결과(True/False)를 변경할 수 있음을 입증하는 매우 엄격한 화이트박스 검증 기준입니다."
  },
  {
    "id": 156,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 제2정규형(2NF)을 만족하기 위해 제거해야 하는 종속성은?",
    "options": [
      "부분 함수적 종속 (Partial Functional Dependency)",
      "이행적 함수적 종속 (Transitive Functional Dependency)",
      "다치 종속 (Multivalued Dependency)",
      "조인 종속 (Join Dependency)"
    ],
    "answer_index": 0,
    "explanation": "2NF는 제1정규형을 만족하고 기본키가 아닌 모든 일반 속성이 기본키에 완전 함수 종속되어야 하므로 '부분 함수적 종속'을 제거해야 합니다."
  },
  {
    "id": 157,
    "subject": "데이터베이스 구축",
    "question": "릴레이션에서 X -> Y 이고 Y -> Z 일 때 X -> Z 가 성립하는 종속 관계를 제거하여 만족하게 되는 정규형은?",
    "options": [
      "제1정규형 (1NF)",
      "제2정규형 (2NF)",
      "제3정규형 (3NF)",
      "BCNF"
    ],
    "answer_index": 2,
    "explanation": "X -> Y, Y -> Z 를 거쳐 간접적으로 종속되는 것을 '이행적 함수 종속'이라 하며, 이를 분해하여 제거하는 단계가 제3정규형(3NF)입니다."
  },
  {
    "id": 158,
    "subject": "데이터베이스 구축",
    "question": "어떤 릴레이션에 5개의 속성(Attribute)과 20개의 튜플(Tuple)이 존재할 때, 이 릴레이션의 차수(Degree)와 카디널리티(Cardinality)는?",
    "options": [
      "차수 5, 카디널리티 20",
      "차수 20, 카디널리티 5",
      "차수 100, 카디널리티 20",
      "차수 5, 카디널리티 100"
    ],
    "answer_index": 0,
    "explanation": "차수(Degree)는 속성의 개수(열 수)이므로 5이며, 카디널리티(Cardinality)는 튜플의 개수(행 수)이므로 20입니다."
  },
  {
    "id": 159,
    "subject": "데이터베이스 구축",
    "question": "외래키(Foreign Key) 참조 제약조건 옵션 중 '부모 테이블의 행이 삭제될 때 이를 참조하고 있던 자식 테이블의 관련 행들도 함께 연쇄 삭제되도록 하는 옵션'은?",
    "options": [
      "CASCADE",
      "SET NULL",
      "RESTRICT",
      "NO ACTION"
    ],
    "answer_index": 0,
    "explanation": "ON DELETE CASCADE 옵션을 부여하면 부모 튜플 삭제 시 그 외래키를 참조하는 자식 튜플들도 자동으로 함께 삭제되어 참조 무결성을 유지합니다."
  },
  {
    "id": 160,
    "subject": "데이터베이스 구축",
    "question": "SQL SELECT 문에서 그룹 함수(SUM, AVG, COUNT 등)를 적용한 집계 결과에 필터링 조건을 부여하기 위해 사용하는 절은?",
    "options": [
      "WHERE 절",
      "HAVING 절",
      "GROUP BY 절",
      "ORDER BY 절"
    ],
    "answer_index": 1,
    "explanation": "WHERE 절은 그룹화 이전의 개별 행을 필터링하고, HAVING 절은 GROUP BY로 묶인 그룹 집계 결과에 조건을 지정할 때 사용합니다."
  },
  {
    "id": 161,
    "subject": "데이터베이스 구축",
    "question": "SQL 윈도우 순위 함수 중 '동일한 값에 대해 같은 순위를 부여하고, 그 다음 순위는 건너뛰지 않고 연속된 정수로 부여하는 함수'는?",
    "options": [
      "RANK()",
      "DENSE_RANK()",
      "ROW_NUMBER()",
      "NTILE()"
    ],
    "answer_index": 1,
    "explanation": "DENSE_RANK()는 공동 1위가 2개여도 다음 순위를 2위로 연속 부여합니다. RANK()는 공동 1위 다음을 3위로 건너뜁니다. ROW_NUMBER()는 고유 번호를 1부터 차례로 부여합니다."
  },
  {
    "id": 162,
    "subject": "데이터베이스 구축",
    "question": "RAID(Redundant Array of Independent Disks) 방식 중 '패리티(Parity) 정보를 단일 전용 디스크에 저장하지 않고 모든 디스크에 분산하여 기록함으로써 쓰기 병목을 줄인 방식'은?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 4",
      "RAID 5"
    ],
    "answer_index": 3,
    "explanation": "RAID 5는 최소 3개 이상의 디스크를 사용하며, 블록 수준 스트라이핑과 함께 분산 패리티를 사용하여 성능과 안정성을 모두 확보합니다."
  },
  {
    "id": 163,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션 병행 제어(Concurrency Control)가 이루어지지 않았을 때 발생할 수 있는 문제점으로 '두 개 이상의 트랜잭션이 동시에 동일한 데이터를 갱신할 때 한 트랜잭션의 갱신 결과가 덮어씌워져 사라지는 현상'은?",
    "options": [
      "갱신 분실 (Lost Update)",
      "모순성 (Inconsistency)",
      "연쇄 복귀 (Cascading Rollback)",
      "비반복 읽기 (Non-repeatable Read)"
    ],
    "answer_index": 0,
    "explanation": "갱신 분실(Lost Update)은 먼저 갱신한 트랜잭션의 결과가 나중에 동일 데이터를 갱신한 다른 트랜잭션에 의해 덮어써져 손실되는 현상입니다."
  },
  {
    "id": 164,
    "subject": "데이터베이스 구축",
    "question": "데이터 모델링 3단계(개념 -> 논리 -> 물리) 중 '목표 DBMS에 종속되지 않고 비즈니스 관점에서 전사적 엔티티와 핵심 관계를 도출하여 E-R 다이어그램을 생성하는 단계'는?",
    "options": [
      "물리적 데이터 모델링",
      "논리적 데이터 모델링",
      "개념적 데이터 모델링",
      "구현 데이터 모델링"
    ],
    "answer_index": 2,
    "explanation": "개념적 데이터 모델링(Conceptual Data Modeling)은 핵심 비즈니스 요구사항을 추상화하여 개체와 관계 중심의 전사적 E-R 다이어그램을 작성하는 최상위 모델링 단계입니다."
  },
  {
    "id": 165,
    "subject": "데이터베이스 구축",
    "question": "데이터 웨어하우스(Data Warehouse)의 4대 핵심 특징으로 옳지 않은 것은?",
    "options": [
      "주제 지향성 (Subject-Oriented)",
      "통합성 (Integrated)",
      "시계열성 (Time-Variant)",
      "휘발성 (Volatile)"
    ],
    "answer_index": 3,
    "explanation": "데이터 웨어하우스는 한 번 적재되면 조회만 수행되고 갱신이나 삭제가 발생하지 않는 '비휘발성(Non-Volatile)' 특징을 가집니다."
  },
  {
    "id": 166,
    "subject": "데이터베이스 구축",
    "question": "NoSQL 데이터베이스 중 Redis, Memcached와 같이 단순한 식별 키와 값의 쌍으로 데이터를 고속 메모리에 저장하는 유형은?",
    "options": [
      "Key-Value 스토어",
      "Document 스토어",
      "Column-Family 스토어",
      "Graph 데이터베이스"
    ],
    "answer_index": 0,
    "explanation": "Key-Value 스토어는 가장 단순한 형태의 NoSQL로, 고유 Key를 통해 Value에 직접 접근하여 초고속 읽기/쓰기를 제공합니다."
  },
  {
    "id": 167,
    "subject": "데이터베이스 구축",
    "question": "분산 시스템의 CAP 이론(Brewer's Theorem)에서 정의하는 3대 요소가 아닌 것은?",
    "options": [
      "일관성 (Consistency)",
      "가용성 (Availability)",
      "분할 용인성 (Partition Tolerance)",
      "성능 (Performance)"
    ],
    "answer_index": 3,
    "explanation": "CAP 정리는 분산 데이터베이스 환경에서 일관성(C), 가용성(A), 네트워크 분할 내구성(P) 3가지 중 최대 2가지만을 동시에 만족할 수 있다는 이론입니다."
  },
  {
    "id": 168,
    "subject": "데이터베이스 구축",
    "question": "SQL 트랜잭션 격리 수준(Isolation Level) 중 '하나의 트랜잭션 내에서 동일한 쿼리를 두 번 실행했을 때 다른 트랜잭션의 커밋된 INSERT로 인해 새로운 유령 레코드가 나타나는 현상(Phantom Read)'까지 완벽히 차단하는 가장 높은 격리 수준은?",
    "options": [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable"
    ],
    "answer_index": 3,
    "explanation": "Serializable은 트랜잭션들을 완전히 직렬화하여 실행하므로 Dirty Read, Non-repeatable Read, Phantom Read가 전혀 발생하지 않는 가장 안전하지만 동시성이 낮은 격리 수준입니다."
  },
  {
    "id": 169,
    "subject": "데이터베이스 구축",
    "question": "인덱스(Index)의 특징과 장단점에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "SELECT 쿼리의 검색 속도를 대폭 향상시킬 수 있다.",
      "테이블에 인덱스를 많이 생성할수록 INSERT, UPDATE, DELETE 문의 수행 속도도 함께 빨라진다.",
      "인덱스를 저장하기 위한 추가적인 디스크 물리 공간이 소요된다.",
      "카디널리티가 높고(값의 종류가 다양하고) 선택도가 좋은 컬럼에 인덱스를 생성하는 것이 유리하다."
    ],
    "answer_index": 1,
    "explanation": "인덱스가 많으면 데이터 삽입/수정/삭제 시마다 인덱스 트리도 재정렬하고 갱신해야 하므로 DML 성능이 저하됩니다."
  },
  {
    "id": 170,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 뷰(View)를 통해 기본 테이블의 데이터를 직접 갱신(UPDATE/INSERT)할 수 없는 경우로 옳은 것은?",
    "options": [
      "단일 테이블에서 단순 컬럼들만 프로젝션한 뷰",
      "집계 함수(SUM, AVG 등)나 GROUP BY 절이 포함되어 정의된 뷰",
      "기본 테이블의 모든 기본키 컬럼을 포함하고 있는 뷰",
      "WHERE 절에 단순 등가 비교 조건만 포함된 뷰"
    ],
    "answer_index": 1,
    "explanation": "GROUP BY, DISTINCT, 집계 함수, UNION 등이 포함된 뷰는 튜플과 기본 테이블 행 간의 1:1 매핑이 성립하지 않으므로 변경(UPDATE/INSERT)이 불가능합니다."
  },
  {
    "id": 171,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 10진수 12(이진수 00001100)와 10(이진수 00001010)에 대해 비트 XOR 연산자(^)를 적용한 결과의 10진수 값은?",
    "options": [
      "2",
      "6",
      "8",
      "14"
    ],
    "answer_index": 1,
    "explanation": "00001100 ^ 00001010 = 00000110 (2진수)이며, 이는 10진수로 4 + 2 = 6 입니다."
  },
  {
    "id": 172,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 인터페이스(Interface)와 추상 클래스(Abstract Class)에 대한 설명으로 옳은 것은?",
    "options": [
      "Java 클래스는 여러 개의 추상 클래스를 동시에 다중 상속(extends)할 수 있다.",
      "Java 8부터 인터페이스에 default 및 static 키워드를 사용하여 구체적인 메서드 본문 구현이 가능해졌다.",
      "인터페이스 내의 모든 멤버 변수는 기본적으로 private 변수로 선언된다.",
      "추상 클래스는 추상 메서드를 단 하나라도 포함할 수 없다."
    ],
    "answer_index": 1,
    "explanation": "Java 8부터 인터페이스에 default 메서드가 도입되어 하위 호환성을 유지하면서도 인터페이스 내에 기본 구현 코드를 작성할 수 있게 되었습니다."
  },
  {
    "id": 173,
    "subject": "프로그래밍 언어 활용",
    "question": "Python의 딕셔너리(dict)와 세트(set) 자료형이 특정 키나 원소의 존재 여부를 평균 O(1) 시간 복잡도로 빠르게 탐색할 수 있는 내부 원리는?",
    "options": [
      "이진 탐색 트리 기반 구조",
      "해시 테이블 (Hash Table) 기반 구조",
      "정렬된 연결 리스트 구조",
      "순차 탐색 캐시 구조"
    ],
    "answer_index": 1,
    "explanation": "Python의 dict와 set은 내부적으로 해시 테이블(Hash Table)로 구현되어 있어 키의 해시값을 계산하여 평균 O(1) 시간에 즉시 접근합니다."
  },
  {
    "id": 174,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 프로세스(Process)와 스레드(Thread)의 비교 설명으로 옳은 것은?",
    "options": [
      "스레드는 독립된 코드, 데이터, 힙, 스택 영역을 모두 별도로 할당받아 프로세스보다 메모리 오버헤드가 크다.",
      "하나의 프로세스 내의 여러 스레드는 코드, 데이터, 힙 메모리 영역을 공유하며 개별 스택(Stack)만을 독립적으로 갖는다.",
      "프로세스 간 문맥 교환(Context Switching)이 스레드 간 문맥 교환보다 훨씬 빠르고 가볍다.",
      "스레드는 단일 프로세스 내에서 동시에 여러 개가 실행될 수 없다."
    ],
    "answer_index": 1,
    "explanation": "스레드는 프로세스 내의 실행 흐름 단위로, 부모 프로세스의 코드/데이터/힙 영역을 공유하고 개별적인 PC 레지스터와 스택 공간만 가집니다."
  },
  {
    "id": 175,
    "subject": "프로그래밍 언어 활용",
    "question": "CPU 스케줄링 알고리즘 중 '현재 실행 중인 프로세스보다 남은 실행 시간이 더 짧은 프로세스가 준비 큐에 도착하면 CPU를 빼앗아 선점하는 알고리즘'은?",
    "options": [
      "FCFS",
      "SJF (Shortest Job First) 비선점",
      "SRT (Shortest Remaining Time)",
      "HRN"
    ],
    "answer_index": 2,
    "explanation": "SRT(Shortest Remaining Time)는 SJF 알고리즘의 선점(Preemptive) 버전으로, 남은 서비스 시간이 더 짧은 프로세스에게 CPU를 즉시 넘겨줍니다."
  },
  {
    "id": 176,
    "subject": "프로그래밍 언어 활용",
    "question": "동시성 프로그래밍에서 임계 영역(Critical Section) 문제를 해결하기 위해 충족되어야 하는 3가지 필수 조건이 아닌 것은?",
    "options": [
      "상호 배제 (Mutual Exclusion)",
      "진행 (Progress)",
      "유한 대기 (Bounded Waiting)",
      "자원 선점 (Preemption)"
    ],
    "answer_index": 3,
    "explanation": "임계 영역 3대 필수 조건은 상호 배제(동시 진입 금지), 진행(진입 결정의 교착 방지), 유한 대기(기아 현상 방지)입니다."
  },
  {
    "id": 177,
    "subject": "프로그래밍 언어 활용",
    "question": "뮤텍스(Mutex)와 세마포어(Semaphore)의 차이점으로 옳은 것은?",
    "options": [
      "뮤텍스는 오직 1개의 스레드만 공유 자원에 접근할 수 있는 동기화 도구이며, 락을 획득한 소유자만이 락을 해제할 수 있다.",
      "세마포어는 항상 동시 접근 허용 카운트가 1로 고정되어 있다.",
      "뮤텍스는 다른 스레드가 대신 락을 해제(Unlock)해 줄 수 있다.",
      "세마포어는 임계 영역에 오직 하나의 프로세스만 들어가도록 강제한다."
    ],
    "answer_index": 0,
    "explanation": "뮤텍스는 소유권 개념이 있어 락을 획득한 스레드만 해제할 수 있는 반면, 세마포어는 카운팅 기반으로 다른 스레드나 프로세스가 시그널을 보낼 수 있습니다."
  },
  {
    "id": 178,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 프로세스가 필요한 메모리를 할당받은 후 프로세스가 사용하지 않고 남아서 낭비되는 분할 영역 내부의 빈 공간을 의미하는 용어는?",
    "options": [
      "내부 단편화 (Internal Fragmentation)",
      "외부 단편화 (External Fragmentation)",
      "워킹셋 (Working Set)",
      "페이지 폴트 (Page Fault)"
    ],
    "answer_index": 0,
    "explanation": "내부 단편화(Internal Fragmentation)는 고정 분할 등에서 할당된 블록 크기보다 실제 프로그램 크기가 작아 블록 내부에 남겨지는 낭비 공간입니다."
  },
  {
    "id": 179,
    "subject": "프로그래밍 언어 활용",
    "question": "가상기억장치 환경에서 프로세스가 페이지 부재(Page Fault)를 빈번하게 일으켜 CPU가 실제 프로세스 실행 시간보다 페이지 교체 작업에 대부분의 시간을 소모하는 현상은?",
    "options": [
      "스레싱 (Thrashing)",
      "교착상태 (Deadlock)",
      "기아 현상 (Starvation)",
      "오버플로우 (Overflow)"
    ],
    "answer_index": 0,
    "explanation": "스레싱(Thrashing)은 메모리에 적재된 프로세스 수가 너무 많아 페이지 부재가 급증하고 시스템 처리량이 급격히 떨어지는 현상입니다."
  },
  {
    "id": 180,
    "subject": "프로그래밍 언어 활용",
    "question": "IP 주소(논리적 주소)를 대응되는 네트워크 카드의 MAC 주소(물리적 주소)로 변환해 주는 프로토콜은?",
    "options": [
      "ARP (Address Resolution Protocol)",
      "RARP (Reverse ARP)",
      "ICMP (Internet Control Message Protocol)",
      "IGMP (Internet Group Management Protocol)"
    ],
    "answer_index": 0,
    "explanation": "ARP는 IP 주소를 물리적 MAC 주소로 바인딩하는 프로토콜이며, 반대로 MAC 주소로 IP를 알아내는 것은 RARP입니다."
  },
  {
    "id": 181,
    "subject": "프로그래밍 언어 활용",
    "question": "인터넷 라우팅 프로토콜 중 다익스트라(Dijkstra) 최단 경로 알고리즘을 기반으로 하며, 링크 상태(Link State) 정보를 모든 라우터에 브로드캐스팅하는 내부 라우팅 프로토콜은?",
    "options": [
      "RIP",
      "OSPF",
      "BGP",
      "EGP"
    ],
    "answer_index": 1,
    "explanation": "OSPF(Open Shortest Path First)는 링크 상태 기반 대규모 네트워크용 내부 라우팅 프로토콜로, 다익스트라 최단 경로 트리를 구축하여 최적 경로를 산출합니다. RIP는 거리 벡터 방식입니다."
  },
  {
    "id": 182,
    "subject": "프로그래밍 언어 활용",
    "question": "IPv6 주소 체계에 대한 설명으로 옳은 것은?",
    "options": [
      "총 64비트 주소 길이를 가지며 8진수로 표기한다.",
      "총 128비트 주소 길이를 가지며 16비트씩 8개 블록으로 콜론(:)으로 구분하여 16진수로 표기한다.",
      "브로드캐스트(Broadcast) 전송 방식을 기본으로 사용한다.",
      "헤더 길이가 가변적이어서 IPv4보다 라우터 처리 오버헤드가 크다."
    ],
    "answer_index": 1,
    "explanation": "IPv6는 128비트 체계이며 유니캐스트, 애니캐스트, 멀티캐스트 방식을 사용합니다(브로드캐스트는 폐지되고 멀티캐스트에 통합됨). 헤더는 고정 40바이트로 최적화되었습니다."
  },
  {
    "id": 183,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 Exception 클래스를 상속받는 예외 중 컴파일 시점에 반드시 try-catch 블록으로 감싸거나 throws로 선언해야 하는 예외(Checked Exception)는?",
    "options": [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IOException",
      "ArithmeticException"
    ],
    "answer_index": 2,
    "explanation": "IOException, SQLException 등은 Checked Exception으로 반드시 예외 처리가 강제됩니다. RuntimeException의 하위 클래스들은 Unchecked Exception입니다."
  },
  {
    "id": 184,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어 소켓 프로그래밍(TCP 기반)에서 서버 측이 클라이언트의 접속 요청을 대기하기 위해 순서대로 호출하는 함수 단계가 올바른 것은?",
    "options": [
      "socket() -> bind() -> listen() -> accept()",
      "socket() -> connect() -> listen() -> recv()",
      "socket() -> listen() -> bind() -> accept()",
      "socket() -> accept() -> bind() -> listen()"
    ],
    "answer_index": 0,
    "explanation": "TCP 서버 소켓 생성 흐름: socket()(소켓 생성) -> bind()(IP/포트 바인딩) -> listen()(연결 대기열 큐 설정) -> accept()(클라이언트 연결 수락) 순서입니다."
  },
  {
    "id": 185,
    "subject": "프로그래밍 언어 활용",
    "question": "다음 C언어 프로그램의 실행 결과 출력되는 값은?\n\nint arr[5] = {10, 20, 30, 40, 50};\nint *ptr = arr + 2;\nprintf(\"%d\", *(ptr + 1) - *(ptr - 1));",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "answer_index": 1,
    "explanation": "arr+2는 30을 가리킵니다. ptr+1은 40(index 3), ptr-1은 20(index 1)입니다. 따라서 40 - 20 = 20 이 출력됩니다."
  },
  {
    "id": 186,
    "subject": "정보시스템 구축관리",
    "question": "서비스 거부 공격(DoS) 중 송신 IP 주소를 희생자의 IP로 위조한 후 증폭 서버(NTP, DNS 등)로 질의를 전송하여 대량의 응답 패킷이 희생자에게 쏟아지도록 유도하는 기법은?",
    "options": [
      "증폭 반사 공격 (Amplification Attack)",
      "세션 하이재킹 (Session Hijacking)",
      "티어드롭 (TearDrop)",
      "스머프 (Smurf)"
    ],
    "answer_index": 0,
    "explanation": "증폭 반사 공격(DNS/NTP Amplification)은 출발지 IP를 희생자 IP로 스푸핑하여 요청 대비 수십~수백 배 크기의 응답 트래픽이 희생자 서버로 집중되게 만듭니다."
  },
  {
    "id": 187,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 침해 행위 중 '네트워크 카드를 무차별 모드(Promiscuous Mode)로 설정하여 네트워크 세그먼트 상을 지나가는 모든 평문 패킷 데이터를 수동적으로 엿듣고 가로채는 행위'는?",
    "options": [
      "스푸핑 (Spoofing)",
      "스니핑 (Sniffing)",
      "스팸 (Spamming)",
      "스캐닝 (Scanning)"
    ],
    "answer_index": 1,
    "explanation": "스니핑(Sniffing)은 네트워크 통신 패킷을 도청하여 ID, 비밀번호 등 민감 정보를 탈취하는 수동적 공격입니다. 스푸핑은 신분을 사칭하는 능동적 공격입니다."
  },
  {
    "id": 188,
    "subject": "정보시스템 구축관리",
    "question": "SQL 인젝션(SQL Injection) 공격을 원천적으로 차단하기 위한 가장 효과적인 개발 보안 대책은?",
    "options": [
      "사용자 입력값을 문자열로 직접 이어붙여(Concatenation) 동적 쿼리를 실행한다.",
      "Prepared Statement(매개변수화된 쿼리)를 사용하여 입력값을 단순 파라미터 값으로 처리한다.",
      "웹 서버의 방화벽 포트 80과 443을 모두 차단한다.",
      "데이터베이스 관리자(DBA) 계정의 비밀번호 길이를 8자리로 축소한다."
    ],
    "answer_index": 1,
    "explanation": "Prepared Statement는 쿼리의 구조를 미리 컴파일해 두고 사용자 입력을 단순 데이터 변수로 바인딩하므로 쿼리 구조 변조를 근본적으로 방지합니다."
  },
  {
    "id": 189,
    "subject": "정보시스템 구축관리",
    "question": "공개키 암호화 기반 전자서명(Digital Signature)을 통해 보장받을 수 있는 보안 기능 중 '송신자가 나중에 자신이 문서를 전송한 사실을 부인할 수 없도록 보장하는 기능'은?",
    "options": [
      "기밀성 (Confidentiality)",
      "가용성 (Availability)",
      "부인 방지 (Non-repudiation)",
      "익명성 (Anonymity)"
    ],
    "answer_index": 2,
    "explanation": "전자서명은 송신자의 개인키로 암호화하여 서명하므로, 송신자 본인만이 서명을 생성할 수 있어 거래 사실을 부인하지 못하게(부인 방지) 합니다."
  },
  {
    "id": 190,
    "subject": "정보시스템 구축관리",
    "question": "공격자가 취약한 웹 애플리케이션을 유도하여 공격자가 지정한 내부 네트워크 URL로 악의적인 요청을 전송하게 만드는 서버 측 취약점 공격은?",
    "options": [
      "SSRF (Server-Side Request Forgery)",
      "CSRF (Cross-Site Request Forgery)",
      "XSS (Cross-Site Scripting)",
      "Clickjacking"
    ],
    "answer_index": 0,
    "explanation": "SSRF는 서버 측에서 외부 URL을 가져오는 기능을 악용하여 공격자가 접근할 수 없는 내부망 시스템(127.0.0.1 또는 내부 인트라넷)에 서버 권한으로 요청을 전송시키는 공격입니다."
  },
  {
    "id": 191,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 품질 평가 표준인 ISO/IEC 25010에서 정의하는 소프트웨어 제품 품질의 8대 주특성에 포함되지 않는 것은?",
    "options": [
      "기능 적합성 (Functional Suitability)",
      "성능 효율성 (Performance Efficiency)",
      "보안성 (Security)",
      "개발 비용성 (Cost Effectiveness)"
    ],
    "answer_index": 3,
    "explanation": "ISO/IEC 25010 8대 제품 품질 특성: 기능적합성, 성능효율성, 호환성, 사용성, 신뢰성, 보안성, 유지보수성, 이식성입니다. 개발 비용은 프로세스/경영 요소입니다."
  },
  {
    "id": 192,
    "subject": "정보시스템 구축관리",
    "question": "접근 통제(Access Control) 모델 중 '주체의 보안 등급(Security Clearance)과 객체의 보안 레이블(Classification)을 시스템이 강제적으로 비교하여 접근을 허용하는 모델'은?",
    "options": [
      "임의적 접근 통제 (DAC, Discretionary Access Control)",
      "역할 기반 접근 통제 (RBAC, Role-Based Access Control)",
      "강제적 접근 통제 (MAC, Mandatory Access Control)",
      "신원 기반 접근 통제 (IBAC)"
    ],
    "answer_index": 2,
    "explanation": "MAC(강제적 접근 통제)은 군사 등 고보안 환경에서 중앙 관리자가 부여한 보안 레이블(비밀, 극비 등) 규칙에 따라 시스템이 강제적으로 접근을 제어합니다."
  },
  {
    "id": 193,
    "subject": "정보시스템 구축관리",
    "question": "국내 국가용 암호모듈 검증(KCMVP) 대상이자 한국인터넷진흥원(KISA)에서 개발한 128비트 블록 암호 알고리즘은?",
    "options": [
      "DES",
      "SEED",
      "RSA",
      "Blowfish"
    ],
    "answer_index": 1,
    "explanation": "SEED와 ARIA는 국내 표준 블록 암호 알고리즘으로, SEED는 1999년 KISA가 개발한 128비트 대칭키 암호화 표준입니다."
  },
  {
    "id": 194,
    "subject": "정보시스템 구축관리",
    "question": "마이크로서비스 아키텍처(MSA)에서 클라이언트의 단일 진입점 역할을 하며 인증, 라우팅, 로드 밸런싱, 속도 제한(Rate Limiting)을 일괄 처리하는 구성요소는?",
    "options": [
      "Service Registry",
      "Config Server",
      "API Gateway",
      "Message Broker"
    ],
    "answer_index": 2,
    "explanation": "API Gateway는 클라이언트와 여러 백엔드 마이크로서비스 사이의 단일 접점으로 동작하여 공통 관심사(인증/인가, 라우팅, SSL 종료, 트래픽 제어)를 통합 처리합니다."
  },
  {
    "id": 195,
    "subject": "정보시스템 구축관리",
    "question": "IPsec(IP Security) 프로토콜 제품군 중 '데이터의 무결성과 송신처 인증을 제공하지만, 데이터 본문의 암호화(기밀성)는 제공하지 않는 프로토콜'은?",
    "options": [
      "ESP (Encapsulating Security Payload)",
      "IKE (Internet Key Exchange)",
      "TLS",
      "AH (Authentication Header)"
    ],
    "answer_index": 3,
    "explanation": "AH(인증 헤더)는 패킷의 무결성과 발신처 인증을 제공하며 암호화는 수행하지 않습니다. 기밀성(암호화)까지 함께 제공하는 것은 ESP입니다."
  },
  {
    "id": 196,
    "subject": "정보시스템 구축관리",
    "question": "정보보호 및 개인정보보호 관리체계(ISMS-P) 인증 기준의 3대 영역에 해당하지 않는 것은?",
    "options": [
      "관리체계 수립 및 운영",
      "보호대책 요구사항",
      "개인정보 처리단계별 요구사항",
      "빅데이터 수익성 극대화 요구사항"
    ],
    "answer_index": 3,
    "explanation": "ISMS-P 인증 기준은 1) 관리체계 수립 및 운영(16개 항목), 2) 보호대책 요구사항(64개 항목), 3) 개인정보 처리단계별 요구사항(22개 항목)의 총 102개 항목으로 구성됩니다."
  },
  {
    "id": 197,
    "subject": "정보시스템 구축관리",
    "question": "'내부망이라도 결코 신뢰하지 않고, 모든 접근 요청을 항상 엄격하게 검증한다(Never Trust, Always Verify)'는 최신 보안 설계 패러다임은?",
    "options": [
      "심층 방어 (Defense in Depth)",
      "제로 트러스트 (Zero Trust)",
      "경계 보안 (Perimeter Security)",
      "허니팟 (Honeypot)"
    ],
    "answer_index": 1,
    "explanation": "제로 트러스트(Zero Trust)는 경계 내부망이라도 무조건 신뢰하지 않고 모든 자원 접근마다 신원 확인, 최소 권한 부여, 이상 탐지를 수행하는 보안 모델입니다."
  },
  {
    "id": 198,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 공급망 공격(Supply Chain Attack)을 방어하기 위해 애플리케이션에 포함된 모든 오픈소스 라이브러리와 종속성 명세를 투명하게 목록화한 명세서는?",
    "options": [
      "PRD (Product Requirement Document)",
      "SLA (Service Level Agreement)",
      "SBOM (Software Bill of Materials)",
      "ERD (Entity Relationship Diagram)"
    ],
    "answer_index": 2,
    "explanation": "SBOM(소프트웨어 자재명세서)은 소프트웨어를 구성하는 오픈소스 컴포넌트, 버전, 라이선스 등을 체계적으로 기록하여 공급망 보안 취약점을 추적합니다."
  },
  {
    "id": 199,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 수명주기(SDLC) 초기 단계부터 보안 활동을 선제적으로 통합하여 취약점 조기 발견과 비용 절감을 도모하는 DevSecOps 실천 개념은?",
    "options": [
      "Waterfall 모델",
      "빅뱅 테스트",
      "사후 패치 모델",
      "Shift-Left (보안의 좌측 이동)"
    ],
    "answer_index": 3,
    "explanation": "Shift-Left는 SDLC 일정표 상에서 우측(운영/배포)에 있던 보안 점검을 좌측(기획/설계/개발)으로 당겨 개발 초기부터 보안을 내재화하는 실천 방식입니다."
  },
  {
    "id": 200,
    "subject": "정보시스템 구축관리",
    "question": "비즈니스 연속성 계획(BCP)에서 재해가 발생했을 때 중요 업무를 재개하기까지 허용되는 최대 시간을 의미하는 용어는?",
    "options": [
      "RPO (Recovery Point Objective)",
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "SLA (Service Level Agreement)"
    ],
    "answer_index": 1,
    "explanation": "RTO(목표 복구 시간)는 재해로 인해 시스템이 중단된 후 복구되어 정상 가동되기까지 걸리는 최대 허용 시간입니다."
  },
  {
    "id": 201,
    "subject": "소프트웨어 설계",
    "question": "애자일(Agile) 스크럼(Scrum) 프레임워크의 주요 산출물 중 개발할 모든 기능과 요구사항의 우선순위 목록을 의미하는 것은?",
    "options": [
      "스프린트 백로그 (Sprint Backlog)",
      "번다운 차트 (Burn-down Chart)",
      "제품 백로그 (Product Backlog)",
      "스프린트 회고록"
    ],
    "answer_index": 2,
    "explanation": "제품 백로그(Product Backlog)는 시스템에 필요한 모든 기능과 개선사항을 제품 책임자(PO)가 우선순위에 따라 관리하는 종합 목록입니다."
  },
  {
    "id": 202,
    "subject": "소프트웨어 설계",
    "question": "XP(eXtreme Programming)의 5대 핵심 가치에 해당하지 않는 것은?",
    "options": [
      "의사소통 (Communication)",
      "단순성 (Simplicity)",
      "피드백 (Feedback)",
      "형식주의 (Formalism)"
    ],
    "answer_index": 3,
    "explanation": "XP의 5대 가치는 의사소통(Communication), 단순성(Simplicity), 피드백(Feedback), 용기(Courage), 존중(Respect)입니다."
  },
  {
    "id": 203,
    "subject": "소프트웨어 설계",
    "question": "XP(eXtreme Programming) 12대 기본 실천 원칙 중 개발자가 실제 코드를 작성하기 전에 테스트 케이스를 먼저 작성하는 실천법은?",
    "options": [
      "Test-Driven Development (TDD)",
      "Pair Programming",
      "Continuous Integration",
      "Refactoring"
    ],
    "answer_index": 0,
    "explanation": "TDD(테스트 주도 개발)는 실패하는 테스트 코드를 먼저 작성하고 이를 통과하는 최소한의 코드를 작성한 뒤 리팩토링하는 기법입니다."
  },
  {
    "id": 204,
    "subject": "소프트웨어 설계",
    "question": "럼바우(Rumbaugh)의 객체지향 분석 기법에서 수행되는 3가지 모델링의 적용 순서가 올바른 것은?",
    "options": [
      "기능 모델링 -> 동적 모델링 -> 객체 모델링",
      "객체 모델링 -> 동적 모델링 -> 기능 모델링",
      "동적 모델링 -> 객체 모델링 -> 기능 모델링",
      "객체 모델링 -> 기능 모델링 -> 동적 모델링"
    ],
    "answer_index": 1,
    "explanation": "럼바우 기법의 절차: 1) 객체 모델링(객체 다이어그램) -> 2) 동적 모델링(상태 다이어그램) -> 3) 기능 모델링(DFD 자료 흐름도) 순서로 진행됩니다."
  },
  {
    "id": 205,
    "subject": "소프트웨어 설계",
    "question": "유스케이스 다이어그램에서 시스템과 상호작용하는 액터(Actor) 중 시스템 개발의 주된 목적이 되며 시스템을 능동적으로 사용하는 주체를 가리키는 액터는?",
    "options": [
      "시스템 액터",
      "부 액터 (Secondary Actor)",
      "주 액터 (Primary Actor)",
      "수동 액터"
    ],
    "answer_index": 2,
    "explanation": "주 액터(Primary Actor)는 시스템을 직접 조작하여 비즈니스 이득을 얻는 사용자이며, 다이어그램의 좌측에 주로 배치됩니다."
  },
  {
    "id": 206,
    "subject": "소프트웨어 설계",
    "question": "UML 클래스 다이어그램에서 '0개 또는 1개'를 나타내는 다중성(Multiplicity) 표기법은?",
    "options": [
      "1",
      "1..*",
      "*",
      "0..1"
    ],
    "answer_index": 3,
    "explanation": "0..1 은 대상 객체가 존재하지 않거나 최대 1개 존재함을 뜻합니다. 1..*는 최소 1개 이상, *는 0개 이상을 의미합니다."
  },
  {
    "id": 207,
    "subject": "소프트웨어 설계",
    "question": "시퀀스 다이어그램(Sequence Diagram)에서 객체가 실제로 연산을 수행하거나 메시지 처리를 활발히 진행 중인 실행 시간을 나타내는 직사각형 상자는?",
    "options": [
      "실행 상자 / 활성화 바 (Activation Bar)",
      "생명선 (Lifeline)",
      "비동기 메시지 화살표",
      "상태 프레임"
    ],
    "answer_index": 0,
    "explanation": "활성화 바(Activation Bar)는 생명선 위에 그려지는 세로 직사각형으로, 객체가 활성화되어 제어를 유지하고 있는 기간을 표현합니다."
  },
  {
    "id": 208,
    "subject": "소프트웨어 설계",
    "question": "상태 머신 다이어그램(State Machine Diagram)에서 외부 사건의 발생에 따라 한 상태에서 다른 상태로 전환되는 동작을 의미하는 용어는?",
    "options": [
      "활동 (Activity)",
      "전이 (Transition)",
      "이벤트 (Event)",
      "가드 (Guard)"
    ],
    "answer_index": 1,
    "explanation": "전이(Transition)는 객체가 한 상태에서 다른 상태로 변화하는 과정이며 화살표로 연결됩니다."
  },
  {
    "id": 209,
    "subject": "소프트웨어 설계",
    "question": "활동 다이어그램(Activity Diagram)에서 하나의 처리 흐름이 두 개 이상의 병렬 흐름으로 나뉘는 분기점을 나타내는 요소는?",
    "options": [
      "결정 노드 (Decision Node)",
      "조인 노드 (Join Node)",
      "포크 노드 (Fork Node)",
      "병합 노드 (Merge Node)"
    ],
    "answer_index": 2,
    "explanation": "포크 노드(Fork Node)는 굵은 가로선 기호로 표기되며 하나의 진입 흐름을 복수의 병렬 처리 흐름으로 분할합니다."
  },
  {
    "id": 210,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 스타일 중 '데이터 스트림을 처리하기 위해 입력을 받아 변환 후 다음 컴포넌트로 전달하는 일련의 독립된 필터들로 구성된 패턴'은?",
    "options": [
      "클라이언트-서버 패턴",
      "계층화 패턴",
      "브로커 패턴",
      "파이프-필터 (Pipe-Filter) 패턴"
    ],
    "answer_index": 3,
    "explanation": "파이프-필터(Pipe-Filter) 패턴은 유닉스 셸 파이프(|)나 컴파일러처럼 데이터 변환 작업이 순차적으로 이루어지는 시스템에 적합한 패턴입니다."
  },
  {
    "id": 211,
    "subject": "소프트웨어 설계",
    "question": "GoF 디자인 패턴 중 '서로 관련된 여러 객체 군(Family)을 생성하기 위한 인터페이스를 제공하며, 구체적인 클래스를 지정하지 않고 제품군 전체를 교체할 수 있도록 캡슐화한 생성 패턴'은?",
    "options": [
      "Abstract Factory 패턴",
      "Factory Method 패턴",
      "Prototype 패턴",
      "Builder 패턴"
    ],
    "answer_index": 0,
    "explanation": "추상 팩토리(Abstract Factory) 패턴은 연관된 서브 클래스 군들을 묶어 단일 팩토리 인터페이스로 생성 및 관리할 수 있게 해줍니다."
  },
  {
    "id": 212,
    "subject": "소프트웨어 설계",
    "question": "GoF 구조 패턴 중 '복잡한 서브시스템 클래스들의 복합적인 호출 관계를 감추고, 클라이언트가 쉽게 접근할 수 있는 단순화된 단일 상위 인터페이스를 제공하는 패턴'은?",
    "options": [
      "Decorator 패턴",
      "Facade 패턴",
      "Flyweight 패턴",
      "Proxy 패턴"
    ],
    "answer_index": 1,
    "explanation": "퍼사드(Facade) 패턴은 건물의 정면(외벽)처럼 복잡한 내부 서브시스템 호출 로직을 단순한 단일 API 창구로 감싸서 결합도를 낮춥니다."
  },
  {
    "id": 213,
    "subject": "소프트웨어 설계",
    "question": "GoF 구조 패턴 중 '기존 객체에 새로운 책임을 동적으로 덧붙여 상속보다 유연하게 기능을 확장할 수 있는 래퍼(Wrapper) 패턴'은?",
    "options": [
      "Composite 패턴",
      "Bridge 패턴",
      "Decorator 패턴",
      "Adapter 패턴"
    ],
    "answer_index": 2,
    "explanation": "데코레이터(Decorator) 패턴은 기본 객체를 감싸는 장식자 객체를 겹겹이 씌워 런타임에 동적으로 새로운 부가 기능을 추가합니다."
  },
  {
    "id": 214,
    "subject": "소프트웨어 설계",
    "question": "GoF 구조 패턴 중 '개별 객체(Leaf)와 복합 객체(Composite)를 트리 구조로 구성하여 클라이언트가 단일 객체와 복합 객체를 동일한 방식으로 다룰 수 있도록 하는 패턴'은?",
    "options": [
      "Flyweight 패턴",
      "Proxy 패턴",
      "Facade 패턴",
      "Composite 패턴"
    ],
    "answer_index": 3,
    "explanation": "컴포지트(Composite) 패턴은 파일과 디렉터리 구조처럼 전체-부분 계층을 트리 형태로 구축하여 단일 객체와 집합 객체를 동일 인터페이스로 처리합니다."
  },
  {
    "id": 215,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '어떤 객체의 상태가 변할 때 그 객체에 의존하는 모든 관찰자들에게 자동으로 알림을 보내고 갱신되도록 하는 1:N 의존 관계 패턴'은?",
    "options": [
      "Observer 패턴",
      "Command 패턴",
      "Mediator 패턴",
      "Visitor 패턴"
    ],
    "answer_index": 0,
    "explanation": "옵서버(Observer) 패턴은 발행-구독 모델의 기반으로, 주제(Subject) 객체의 변경 사항을 등록된 옵서버들에게 즉각 전파합니다."
  },
  {
    "id": 216,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '알고리즘 군을 정의하고 각각을 캡슐화하여 교환해서 사용할 수 있도록 함으로써 클라이언트와 독립적으로 알고리즘을 변경할 수 있게 하는 패턴'은?",
    "options": [
      "Template Method 패턴",
      "Strategy 패턴",
      "State 패턴",
      "Memento 패턴"
    ],
    "answer_index": 1,
    "explanation": "전략(Strategy) 패턴은 유사한 행위 알고리즘들을 개별 클래스로 분리하여 런타임에 필요한 전략을 유연하게 교체할 수 있도록 합니다."
  },
  {
    "id": 217,
    "subject": "소프트웨어 설계",
    "question": "EAI(Enterprise Application Integration)의 토폴로지 구축 유형 중 중앙에 단일 허브(Hub)를 두고 모든 시스템이 허브를 통해 연결되는 구조는?",
    "options": [
      "Point-to-Point",
      "Message Bus",
      "Hub & Spoke",
      "Hybrid"
    ],
    "answer_index": 2,
    "explanation": "Hub & Spoke 방식은 중앙 집중식 중계 허브가 모든 연결을 제어하므로 유지보수와 확장이 용이하지만, 중앙 허브 장애 시 전체가 마비되는 단일 실패점(SPOF)이 될 수 있습니다."
  },
  {
    "id": 218,
    "subject": "소프트웨어 설계",
    "question": "인터페이스 설계서의 구성 항목으로 적합하지 않은 것은?",
    "options": [
      "인터페이스 ID",
      "송수신 시스템 식별 정보",
      "데이터 전송 주기 및 규격",
      "데이터베이스 물리 디스크 블록 주소"
    ],
    "answer_index": 3,
    "explanation": "인터페이스 명세서는 시스템 간 데이터 교환 명세(ID, 송수신자, 포맷, 주기, 프로토콜 등)를 다루며, 하드웨어 디스크 물리 블록 주소는 기술 대상이 아닙니다."
  },
  {
    "id": 219,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계 원칙(SOLID) 중 '클라이언트는 자신이 사용하지 않는 메서드에 의존 관계를 맺지 않아야 하며, 범용 인터페이스 하나보다 특정 클라이언트를 위한 여러 개별 인터페이스가 낫다'는 원칙은?",
    "options": [
      "인터페이스 분리 원칙 (ISP)",
      "개방 폐쇄 원칙 (OCP)",
      "단일 책임 원칙 (SRP)",
      "리스코프 치환 원칙 (LSP)"
    ],
    "answer_index": 0,
    "explanation": "인터페이스 분리 원칙(ISP, Interface Segregation Principle)은 거대한 인터페이스를 클라이언트의 목적에 맞게 작게 분리하여 불필요한 의존성을 없애는 설계 원칙입니다."
  },
  {
    "id": 220,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 패턴 중 피어 투 피어(P2P, Peer-to-Peer) 아키텍처에 대한 설명으로 옳은 것은?",
    "options": [
      "모든 클라이언트의 요청을 중앙의 메인프레임 마스터 서버가 독점 처리한다.",
      "각 피어(Peer) 컴포넌트는 클라이언트인 동시에 서버(동등한 권한)로 동작한다.",
      "데이터 흐름이 오직 단방향 계층으로만 강제된다.",
      "네트워크의 한 피어가 종료되면 전체 네트워크 연결이 즉시 중단된다."
    ],
    "answer_index": 1,
    "explanation": "P2P 네트워크의 각 노드는 클라이언트 역할과 서버 역할을 동시에 수행하여 중앙 서버 없이도 노드 간 직접 통신 및 자원 공유가 가능합니다."
  },
  {
    "id": 221,
    "subject": "소프트웨어 개발",
    "question": "모듈의 독립성을 나타내는 결합도(Coupling)를 결합도가 가장 약한 것부터 가장 강한 순서로 올바르게 나열한 것은?",
    "options": [
      "자료 결합도 -> 제어 결합도 -> 스탬프 결합도 -> 외부 결합도 -> 내용 결합도 -> 공통 결합도",
      "내용 결합도 -> 공통 결합도 -> 외부 결합도 -> 제어 결합도 -> 스탬프 결합도 -> 자료 결합도",
      "자료 결합도 -> 스탬프 결합도 -> 제어 결합도 -> 외부 결합도 -> 공통 결합도 -> 내용 결합도",
      "스탬프 결합도 -> 자료 결합도 -> 외부 결합도 -> 공통 결합도 -> 제어 결합도 -> 내용 결합도"
    ],
    "answer_index": 2,
    "explanation": "결합도 순서(약함/우수 -> 강함/나쁨): 자료(Data) < 스탬프(Stamp) < 제어(Control) < 외부(External) < 공통(Common) < 내용(Content) 입니다."
  },
  {
    "id": 222,
    "subject": "소프트웨어 개발",
    "question": "모듈의 응집도(Cohesion) 중 '모듈 내부의 한 요소가 출력한 결과를 다음 요소가 직접 입력으로 받아 처리하는 연쇄적인 구조를 가진 응집도'는?",
    "options": [
      "시간적 응집도 (Temporal Cohesion)",
      "교환적/통신적 응집도 (Communicational Cohesion)",
      "절차적 응집도 (Procedural Cohesion)",
      "순차적 응집도 (Sequential Cohesion)"
    ],
    "answer_index": 3,
    "explanation": "순차적 응집도(Sequential Cohesion)는 한 활동의 출력 데이터가 다음 활동의 입력 데이터로 직접 활용되는 높은 수준의 응집도입니다."
  },
  {
    "id": 223,
    "subject": "소프트웨어 개발",
    "question": "시스템 구조도에서 특정 모듈을 호출(제어)하는 상위 모듈의 수를 나타내는 용어는?",
    "options": [
      "팬인 (Fan-In)",
      "팬아웃 (Fan-Out)",
      "순환도 (Cyclomatic)",
      "결합도 (Coupling)"
    ],
    "answer_index": 0,
    "explanation": "팬인(Fan-In)은 자신을 호출하는 상위 모듈의 수(들어오는 간선 수)이며, 팬아웃(Fan-Out)은 자신이 직접 호출하는 하위 모듈의 수(나가는 간선 수)입니다."
  },
  {
    "id": 224,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트의 기본 원리 중 '동일한 테스트 케이스로 반복해서 테스트하면 더 이상 새로운 결함을 찾을 수 없으므로 주기적으로 테스트 케이스를 개선해야 한다'는 원리는?",
    "options": [
      "결함 집중 (Defect Clustering)",
      "살충제 패러독스 (Pesticide Paradox)",
      "오류 부재의 궤변 (Absence-of-errors Fallacy)",
      "완벽한 테스트 불가능"
    ],
    "answer_index": 1,
    "explanation": "살충제 패러독스는 주기적으로 새로운 테스트 케이스를 설계하고 시각을 다변화해야 숨겨진 결함을 지속적으로 발견할 수 있다는 원리입니다."
  },
  {
    "id": 225,
    "subject": "소프트웨어 개발",
    "question": "블랙박스 테스트 기법 중 입력 데이터의 영역을 유효값 집합과 무효값 집합으로 나누고, 각 클래스에서 대표값을 하나씩 선택하여 테스트 케이스를 도출하는 기법은?",
    "options": [
      "원인-결과 그래프",
      "경계값 분석 (Boundary Value Analysis)",
      "동치 분할 검사 (Equivalence Partitioning)",
      "오류 추정"
    ],
    "answer_index": 2,
    "explanation": "동치 분할(Equivalence Partitioning)은 입력 조건을 상호 배타적인 클래스로 나누고 각 클래스의 대표값을 추출하여 최소의 테스트로 결함을 탐색합니다."
  },
  {
    "id": 226,
    "subject": "소프트웨어 개발",
    "question": "힙 정렬(Heap Sort)에서 완전 이진 트리 구조의 완전 힙(Complete Heap)을 구성할 때 소요되는 시간 복잡도는?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n^2)",
      "O(n log n)"
    ],
    "answer_index": 3,
    "explanation": "힙 정렬은 힙 생성 및 원소 추출 과정에서 최선, 평균, 최악 모두 일관되게 O(n log n)의 시간 복잡도를 보장합니다."
  },
  {
    "id": 227,
    "subject": "소프트웨어 개발",
    "question": "병합 정렬(Merge Sort)에 대한 설명으로 옳은 것은?",
    "options": [
      "문제를 절반으로 분할한 뒤 각각을 재귀적으로 정렬하고 다시 합치는 분할 정복(Divide and Conquer) 알고리즘이다.",
      "추가적인 보조 메모리 공간을 전혀 필요로 하지 않는 제자리(In-place) 정렬이다.",
      "최악의 경우 시간 복잡도가 O(n^2)으로 저하된다.",
      "불안정 정렬(Unstable Sort)에 속한다."
    ],
    "answer_index": 0,
    "explanation": "병합 정렬은 분할 정복 방식의 대표주자로 항상 O(n log n)을 유지하며 안정 정렬(Stable Sort)이지만 O(n)의 보조 메모리가 필요합니다."
  },
  {
    "id": 228,
    "subject": "소프트웨어 개발",
    "question": "선형 자료구조 중 스택(Stack)을 적용하기에 가장 부적절한 사례는?",
    "options": [
      "서브루틴(함수) 호출 시 복귀 주소(Return Address) 관리",
      "운영체제의 프린터 출력 스풀링(Spooling) 대기열",
      "웹 브라우저의 '뒤로 가기' 히스토리",
      "수식 괄호 유효성 검사 (Parentheses Matching)"
    ],
    "answer_index": 1,
    "explanation": "프린터 출력 스풀링 대기열은 먼저 인쇄를 요청한 문서가 먼저 출력되는 선입선출(FIFO) 방식이므로 큐(Queue) 자료구조가 적합합니다."
  },
  {
    "id": 229,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 인수 테스트(Acceptance Test) 중 '선별된 잠재 고객들이 실제 업무 환경에서 제품을 자유롭게 사용하며 피드백과 결함을 보고하는 테스트'는?",
    "options": [
      "알파 테스트 (Alpha Test)",
      "단위 테스트",
      "베타 테스트 (Beta Test)",
      "스트레스 테스트"
    ],
    "answer_index": 2,
    "explanation": "베타 테스트(Beta Test)는 실제 사용자 환경에서 최종 사용자가 수행하는 필드 테스트입니다. 알파 테스트는 개발자 통제 환경에서 수행됩니다."
  },
  {
    "id": 230,
    "subject": "소프트웨어 개발",
    "question": "이미 테스트를 통과한 소프트웨어에 새로운 기능을 추가하거나 버그를 수정한 뒤, 그 수정으로 인해 기존 정상 동작하던 기능에 결함이 발생하지 않았는지 재검증하는 테스트는?",
    "options": [
      "보안 테스트 (Security Test)",
      "회복 테스트 (Recovery Test)",
      "강도 테스트 (Stress Test)",
      "회귀 테스트 (Regression Test)"
    ],
    "answer_index": 3,
    "explanation": "회귀 테스트(Regression Test)는 코드 변경에 따른 예기치 않은 부작용(Side Effect)이 기존 기능에 침투하지 않았음을 보장하기 위해 실시합니다."
  },
  {
    "id": 231,
    "subject": "소프트웨어 개발",
    "question": "형상 관리 도구 중 중앙 집중형 버전 관리 시스템(CVCS)에 해당하는 것은?",
    "options": [
      "Subversion (SVN)",
      "Git",
      "Mercurial",
      "Bazaar"
    ],
    "answer_index": 0,
    "explanation": "SVN(Subversion)과 CVS는 중앙 원격 서버에 모든 리포지토리를 두고 클라이언트가 체크아웃받는 중앙 집중형 도구입니다. Git과 Mercurial은 분산형(DVCS)입니다."
  },
  {
    "id": 232,
    "subject": "소프트웨어 개발",
    "question": "이중 연결 리스트(Doubly Linked List)의 특징으로 옳은 것은?",
    "options": [
      "단일 연결 리스트에 비해 노드당 포인터 메모리 소비가 적다.",
      "각 노드가 다음 노드를 가리키는 포인터(Next)와 이전 노드를 가리키는 포인터(Prev)를 모두 갖는다.",
      "오직 단방향으로만 순회할 수 있다.",
      "원소 삽입 시 배열보다 오버헤드가 항상 크다."
    ],
    "answer_index": 1,
    "explanation": "이중 연결 리스트는 이전 노드와 다음 노드 포인터를 모두 가지고 있어 양방향 탐색이 가능하지만 추가 메모리가 소요됩니다."
  },
  {
    "id": 233,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트 중 '프로그램의 모든 실행 가능한 문장(Statement)을 최소한 한 번씩 실행하도록 테스트 케이스를 설계하는 기준'은?",
    "options": [
      "조건 커버리지 (Condition Coverage)",
      "분기 커버리지 (Branch Coverage)",
      "구문/문장 커버리지 (Statement Coverage)",
      "경로 커버리지 (Path Coverage)"
    ],
    "answer_index": 2,
    "explanation": "구문 커버리지(Statement Coverage, 라인 커버리지)는 소스 코드의 모든 명령문이 최소 한 번 수행되었는지를 백분율로 측정하는 가장 기본적인 커버리지입니다."
  },
  {
    "id": 234,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트 오라클 중 '특정 몇 개의 핵심 입력값들에 대해서만 정답 결과를 미리 산출해 두고 나머지 값들은 추정에 맡기는 오라클'은?",
    "options": [
      "일관성 검사 오라클",
      "참 오라클 (True Oracle)",
      "휴리스틱 오라클 (Heuristic Oracle)",
      "샘플링 오라클 (Sampling Oracle)"
    ],
    "answer_index": 3,
    "explanation": "샘플링 오라클은 비용 절감을 위해 전체 입력값 중 대표 표본(Sampling) 데이터들에 대해서만 기대 결과를 사전 계산하여 검증합니다."
  },
  {
    "id": 235,
    "subject": "소프트웨어 개발",
    "question": "테스트 주도 개발(TDD)의 개발 주기 3단계 순서가 올바른 것은?",
    "options": [
      "Red (실패 테스트 작성) -> Green (테스트 통과 코드 구현) -> Refactor (코드 리팩토링)",
      "Green (통과 코드 작성) -> Red (실패 유도) -> Refactor (리팩토링)",
      "Refactor (리팩토링) -> Red (테스트) -> Green (배포)",
      "Red (코드 작성) -> Green (테스트) -> Blue (검증)"
    ],
    "answer_index": 0,
    "explanation": "TDD 사이클: 1) Red: 실패하는 테스트 작성 -> 2) Green: 테스트를 통과시키는 최소한의 빠른 구현 -> 3) Refactor: 중복 제거 및 가독성 개선 순서입니다."
  },
  {
    "id": 236,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트 원리 중 '결함은 특정 몇 개의 핵심 모듈에 집중되어 몰려 있는 경향이 있다'는 경험적 법칙은?",
    "options": [
      "살충제 패러독스",
      "파레토 법칙 (결함 집중, 80/20 법칙)",
      "오류 부재의 궤변",
      "근본 원인 분석"
    ],
    "answer_index": 1,
    "explanation": "결함 집중(Defect Clustering) 원리는 전체 시스템 결함의 대다수(약 80%)가 소수의 복잡한 모듈(약 20%)에서 집중적으로 발견된다는 파레토 법칙에 기반합니다."
  },
  {
    "id": 237,
    "subject": "소프트웨어 개발",
    "question": "코드 인스펙션(Code Inspection) 진행 시 회의를 주관하고 사전 준비부터 검토, 후속 조치까지 전체 세션을 통제하는 리더 역할은?",
    "options": [
      "판독자 (Reader)",
      "작성자 (Author)",
      "주재자 (Moderator)",
      "기록자 (Recorder)"
    ],
    "answer_index": 2,
    "explanation": "인스펙션의 주재자(Moderator)는 중립적인 입장에서 인스펙션 회의를 계획하고 진행하며 결과 보고서를 작성하는 공식 리더입니다."
  },
  {
    "id": 238,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 결함 보고서(Defect Report)에 반드시 포함되어야 할 항목으로 거리가 먼 것은?",
    "options": [
      "결함 재현 절차 (Steps to Reproduce)",
      "기대 결과 (Expected Result)",
      "실제 발생 결과 (Actual Result)",
      "개발자의 인사 평가 성적"
    ],
    "answer_index": 3,
    "explanation": "결함 보고서는 결함의 정확한 재현 단계, 실제 결과, 기대 결과, 환경 정보, 스크린샷 등을 객관적으로 기술해야 합니다."
  },
  {
    "id": 239,
    "subject": "소프트웨어 개발",
    "question": "지속적 제공(Continuous Delivery)과 지속적 배포(Continuous Deployment)의 핵심 차이점은?",
    "options": [
      "지속적 제공은 프로덕션 릴리즈 시 인간의 수동 승인 단계가 포함될 수 있고, 지속적 배포는 테스트 통과 시 운영 환경 배포까지 전자동으로 실행된다.",
      "지속적 제공은 빌드를 수행하지 않는다.",
      "지속적 배포는 단위 테스트를 생략한다.",
      "둘 사이에는 어떠한 개념적 차이도 없다."
    ],
    "answer_index": 0,
    "explanation": "Continuous Delivery는 운영 배포 직전까지 파이프라인이 자동화되어 최종 릴리즈 여부를 사람이 승인하는 반면, Continuous Deployment는 운영 배포까지 100% 전자동화된 단계입니다."
  },
  {
    "id": 240,
    "subject": "소프트웨어 개발",
    "question": "프로그램 실행 중 예외나 크래시가 발생했을 때 그 시점의 메모리 스택 호출 역추적 목록을 출력하여 버그 발생 원인을 규명하는 디버깅 정보는?",
    "options": [
      "바이너리 덤프 (Binary Dump)",
      "스택 트레이스 (Stack Trace)",
      "프로파일러 (Profiler)",
      "디컴파일러 (Decompiler)"
    ],
    "answer_index": 1,
    "explanation": "스택 트레이스(Stack Trace)는 예외 발생 순간 호출 스택(Call Stack)에 머물러 있던 함수와 소스 코드 라인 번호를 역순으로 나열한 디버깅 추적 정보입니다."
  },
  {
    "id": 241,
    "subject": "데이터베이스 구축",
    "question": "ANSI/SPARC 3단계 스키마 구조 중 '개별 사용자나 응용 프로그래머의 관점에서 데이터베이스의 논리적 구조를 정의한 것'은?",
    "options": [
      "내부 스키마 (Internal Schema)",
      "개념 스키마 (Conceptual Schema)",
      "외부 스키마 (External Schema)",
      "운영 스키마 (Operational Schema)"
    ],
    "answer_index": 2,
    "explanation": "외부 스키마(External Schema, 사용자 뷰)는 전체 데이터베이스 중 사용자나 애플리케이션이 필요로 하는 일부분만을 정의한 스키마입니다."
  },
  {
    "id": 242,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 3단계 스키마 구조에서 '내부 스키마가 변경(저장 구조나 인덱스 변경)되어도 개념 스키마가 영향을 받지 않도록 보장하는 특성'은?",
    "options": [
      "분산 독립성",
      "논리적 데이터 독립성 (Logical Data Independence)",
      "무결성 독립성",
      "물리적 데이터 독립성 (Physical Data Independence)"
    ],
    "answer_index": 3,
    "explanation": "물리적 데이터 독립성은 디스크 물리 저장 구조나 인덱스 방식이 변경되어도 개념 스키마(테이블 구조)에 영향을 주지 않는 특성입니다."
  },
  {
    "id": 243,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 관리 시스템(DBMS)의 3대 필수 기능에 해당하지 않는 것은?",
    "options": [
      "연산 압축 기능 (Compression)",
      "조작 기능 (Manipulation)",
      "제어 기능 (Control)",
      "정의 기능 (Definition)"
    ],
    "answer_index": 0,
    "explanation": "DBMS의 3대 핵심 기능은 정의 기능(DDL 스키마 명세), 조작 기능(DML CRUD), 제어 기능(DCL 무결성/보안/병행제어/회복)입니다."
  },
  {
    "id": 244,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터베이스의 후보키(Candidate Key)가 만족해야 하는 2가지 필수 조건은?",
    "options": [
      "원자성 (Atomicity)과 일관성 (Consistency)",
      "유일성 (Uniqueness)과 최소성 (Minimality)",
      "참조 무결성과 개체 무결성",
      "독립성과 종속성"
    ],
    "answer_index": 1,
    "explanation": "후보키는 모든 튜플을 고유하게 식별할 수 있는 '유일성'과 불필요한 속성이 포함되지 않는 '최소성'을 모두 만족해야 합니다."
  },
  {
    "id": 245,
    "subject": "데이터베이스 구축",
    "question": "릴레이션에서 모든 결정자(Determinant)가 후보키여야 한다는 엄격한 조건을 만족하는 정규형은?",
    "options": [
      "제2정규형 (2NF)",
      "제3정규형 (3NF)",
      "보이스-코드 정규형 (BCNF)",
      "제1정규형 (1NF)"
    ],
    "answer_index": 2,
    "explanation": "BCNF(Boyce-Codd Normal Form)는 3NF를 강화한 것으로, 함수적 종속 관계 X -> Y 가 존재할 때 결정자 X는 반드시 후보키여야 합니다."
  },
  {
    "id": 246,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터 모델의 무결성 제약조건 중 '외래키 값은 참조하는 부모 릴레이션의 기본키 값과 일치하거나 널(Null)이어야 한다'는 원칙은?",
    "options": [
      "키 무결성 (Key Integrity)",
      "개체 무결성 (Entity Integrity)",
      "도메인 무결성 (Domain Integrity)",
      "참조 무결성 (Referential Integrity)"
    ],
    "answer_index": 3,
    "explanation": "참조 무결성은 외래키가 가리키는 대상이 반드시 부모 테이블에 존재하는 유효한 레코드이거나 Null이어야 함을 보장합니다."
  },
  {
    "id": 247,
    "subject": "데이터베이스 구축",
    "question": "관계대수(Relational Algebra) 연산자 중 릴레이션에서 주어진 조건을 만족하는 '수평적 부분 집합(튜플들의 모음)'을 추출하는 연산자는?",
    "options": [
      "셀렉트 (Select, σ)",
      "프로젝트 (Project, π)",
      "조인 (Join, ⋈)",
      "카티션 프로덕트 (Cartesian Product, ×)"
    ],
    "answer_index": 0,
    "explanation": "셀렉트(Select, σ)는 조건을 만족하는 행(Tuple)들을 수평적으로 선택하고, 프로젝트(Project, π)는 원하는 열(Attribute)들을 수직적으로 선택합니다."
  },
  {
    "id": 248,
    "subject": "데이터베이스 구축",
    "question": "SQL DCL(Data Control Language) 명령어에 해당하는 것은?",
    "options": [
      "SELECT",
      "GRANT",
      "ALTER",
      "DELETE"
    ],
    "answer_index": 1,
    "explanation": "GRANT와 REVOKE는 사용자에게 데이터베이스 객체 접근 권한을 부여하거나 회수하는 데이터 제어어(DCL)입니다."
  },
  {
    "id": 249,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 트랜잭션의 4대 특성(ACID) 중 '트랜잭션 실행 전후에 데이터베이스가 항상 유효한 무결성 제약조건을 만족해야 한다'는 특성은?",
    "options": [
      "격리성 (Isolation)",
      "원자성 (Atomicity)",
      "일관성 (Consistency)",
      "영속성 (Durability)"
    ],
    "answer_index": 2,
    "explanation": "일관성(Consistency)은 트랜잭션이 성공적으로 완료되면 도메인, 기본키, 외래키 등 데이터베이스의 모든 무결성 규칙이 항상 유효하게 보존됨을 의미합니다."
  },
  {
    "id": 250,
    "subject": "데이터베이스 구축",
    "question": "병행 제어 기법 중 2단계 로킹 규약(2-Phase Locking)의 특징으로 옳은 것은?",
    "options": [
      "락을 획득하는 축소 단계와 락을 반환하는 확장 단계로 구성된다.",
      "직렬 가능성을 보장하지 못한다.",
      "교착상태를 완벽하게 예방한다.",
      "직렬 가능성(Serializability)을 보장하지만 교착상태(Deadlock)는 발생할 수 있다."
    ],
    "answer_index": 3,
    "explanation": "2PL은 트랜잭션의 직렬성을 엄격히 보장하지만, 상호 간의 락 대기 상태가 발생할 수 있어 교착상태(Deadlock)를 원천 예방하지는 못합니다."
  },
  {
    "id": 251,
    "subject": "데이터베이스 구축",
    "question": "병행 제어 기법 중 트랜잭션 충돌이 거의 발생하지 않을 것이라고 가정하고, 실행 중에는 락을 걸지 않고 종료 시점에 일괄 검증하는 기법은?",
    "options": [
      "낙관적 병행 제어 (Optimistic Concurrency Control)",
      "타임스탬프 순서 규약",
      "2단계 로킹 규약",
      "다중 버전 동시성 제어 (MVCC)"
    ],
    "answer_index": 0,
    "explanation": "낙관적 병행 제어는 판독(Read) -> 검증(Validation) -> 기록(Write) 3단계를 거치며, 조회 위주의 트랜잭션에서 락 오버헤드를 없애 성능을 극대화합니다."
  },
  {
    "id": 252,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 회복 기법 중 로그 파일을 참조하여 장애 발생 시 커밋되지 않은 트랜잭션을 취소하고 원래 상태로 되돌리는 연산은?",
    "options": [
      "Redo",
      "Undo",
      "Commit",
      "Checkpoint"
    ],
    "answer_index": 1,
    "explanation": "Undo는 미완료 트랜잭션의 변경사항을 이전 이미지(Before Image)로 되돌리는 작업이며, Redo는 커밋된 내용을 이후 이미지(After Image)로 재실행하는 작업입니다."
  },
  {
    "id": 253,
    "subject": "데이터베이스 구축",
    "question": "대용량 테이블을 작은 물리적 단위로 분할하여 관리하는 테이블 파티셔닝(Partitioning) 기법 중 '날짜나 연속된 숫자 범위(예: 2026년 1월~3월)'를 기준으로 분할하는 방식은?",
    "options": [
      "리스트 파티셔닝 (List Partitioning)",
      "해시 파티셔닝 (Hash Partitioning)",
      "레인지 파티셔닝 (Range Partitioning)",
      "컴포짓 파티셔닝 (Composite Partitioning)"
    ],
    "answer_index": 2,
    "explanation": "레인지 파티셔닝(Range Partitioning)은 값의 연속된 범위를 기준으로 파티션을 나누는 기법으로 일별/월별 로그나 이력 데이터 관리에 가장 널리 쓰입니다."
  },
  {
    "id": 254,
    "subject": "데이터베이스 구축",
    "question": "정규화(Normalization)와 반정규화(De-normalization)의 관계에 대한 설명으로 옳은 것은?",
    "options": [
      "반정규화는 모든 컬럼에 인덱스를 무조건 생성하는 작업이다.",
      "반정규화를 수행하면 항상 데이터 무결성과 일관성이 더 향상된다.",
      "정규화는 데이터베이스 설계의 가장 마지막 물리 모델링 단계에서만 수행한다.",
      "정규화를 진행할수록 중복이 최소화되어 데이터 무결성이 높아지지만, 과도한 조인으로 인해 조회 성능이 저하될 수 있다."
    ],
    "answer_index": 3,
    "explanation": "정규화는 무결성을 높이고 중복 이상을 제거하지만 조인 연산이 증가합니다. 이를 해결하기 위해 성능과 유지보수를 고려하여 의도적으로 반정규화를 적용합니다."
  },
  {
    "id": 255,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터 모델의 릴레이션(Relation)에서 튜플(Tuple)들의 특징으로 옳은 것은?",
    "options": [
      "모든 튜플은 유일해야 하며(중복 불가), 튜플 간의 순서는 상관없다(무순서성).",
      "튜플은 반드시 오름차순으로 물리적 정렬되어 저장되어야 한다.",
      "하나의 릴레이션 내에 동일한 값을 가진 튜플이 여러 개 존재할 수 있다.",
      "튜플의 개수는 항상 속성의 개수보다 적어야 한다."
    ],
    "answer_index": 0,
    "explanation": "릴레이션의 튜플은 기본키에 의해 고유하게 식별되므로 유일해야 하며, 수학적 집합(Set)이므로 튜플 간의 저장 순서는 의미가 없습니다."
  },
  {
    "id": 256,
    "subject": "데이터베이스 구축",
    "question": "SQL에서 테이블의 특정 컬럼에 고유한 값만 들어갈 수 있도록 강제하지만 널(Null) 값은 1회(또는 DBMS에 따라 복수) 허용하는 제약조건은?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "NOT NULL",
      "CHECK"
    ],
    "answer_index": 1,
    "explanation": "UNIQUE 제약조건은 값의 중복을 방지하지만 PRIMARY KEY와 달리 NULL 값을 허용합니다."
  },
  {
    "id": 257,
    "subject": "데이터베이스 구축",
    "question": "분산 데이터베이스에서 한 사이트에 저장된 데이터의 복사본이 여러 사이트에 복제되어 있을 때, 사용자가 복제본의 존재를 몰라도 데이터 일관성을 유지하며 사용할 수 있는 특성은?",
    "options": [
      "분할 투명성 (Fragmentation Transparency)",
      "위치 투명성 (Location Transparency)",
      "복제 투명성 (Replication Transparency)",
      "병행 투명성 (Concurrency Transparency)"
    ],
    "answer_index": 2,
    "explanation": "복제 투명성은 데이터가 여러 노드에 복제되어 있어도 사용자는 단일 데이터베이스처럼 투명하게 작업할 수 있도록 시스템이 동기화를 보장하는 특성입니다."
  },
  {
    "id": 258,
    "subject": "데이터베이스 구축",
    "question": "SQL에서 두 SELECT 결과의 중복을 제거하고 합집합을 구하는 연산자는?",
    "options": [
      "MINUS",
      "UNION ALL",
      "INTERSECT",
      "UNION"
    ],
    "answer_index": 3,
    "explanation": "UNION은 두 쿼리의 결과를 합치고 중복된 튜플을 자동으로 정렬 및 제거합니다. UNION ALL은 중복 제거 없이 모두 출력합니다."
  },
  {
    "id": 259,
    "subject": "데이터베이스 구축",
    "question": "E-R 모델 다이어그램에서 한 개체가 관계를 맺고 있는 다른 개체 집합과 다대다(N:M) 관계일 때, 관계형 데이터베이스로 변환 시 생성해야 하는 테이블은?",
    "options": [
      "교차/연계 테이블 (Junction Table / Intersection Table)",
      "단일 뷰",
      "가상 인덱스",
      "시스템 카탈로그"
    ],
    "answer_index": 0,
    "explanation": "N:M 다대다 관계는 RDBMS에서 직접 외래키로 표현할 수 없으므로 두 개체의 기본키를 외래키로 갖는 별도의 교차(Junction/Mapping) 테이블을 생성하여 1:N 관계로 해소합니다."
  },
  {
    "id": 260,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스에서 데이터의 중복 저장으로 인해 발생하는 삽입 이상, 삭제 이상, 갱신 이상을 총칭하는 용어는?",
    "options": [
      "교착상태 (Deadlock)",
      "이상 현상 (Anomaly)",
      "단편화 (Fragmentation)",
      "역정규화 (De-normalization)"
    ],
    "answer_index": 1,
    "explanation": "이상(Anomaly) 현상은 잘못된 테이블 설계로 인해 릴레이션 조작 시 원치 않는 부작용과 데이터 불일치가 일어나는 현상입니다."
  },
  {
    "id": 261,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 다음 코드의 실행 결과 출력되는 값은?\n\nint a = 5, b = 10;\nint result = (a > b) ? a * 2 : b / 2;\nprintf(\"%d\", result);",
    "options": [
      "20",
      "10",
      "5",
      "2"
    ],
    "answer_index": 2,
    "explanation": "조건식 (a > b) 즉 (5 > 10)은 거짓(False)이므로 콜론 뒤의 식 b / 2 = 10 / 2 = 5 가 평가되어 반환됩니다."
  },
  {
    "id": 262,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 전위 증감 연산자(++x)와 후위 증감 연산자(x++)에 대한 설명으로 옳은 것은?",
    "options": [
      "후위 증감 연산자는 변수가 아닌 상수에도 적용할 수 있다.",
      "후위 증감 연산자는 변수의 값을 2씩 증가시킨다.",
      "전위 증감과 후위 증감은 어떠한 표현식에서도 항상 동일하게 평가된다.",
      "전위 증감은 현재 문장의 연산 전에 먼저 1을 증가시키고, 후위 증감은 문장의 평가가 완료된 후 1을 증가시킨다."
    ],
    "answer_index": 3,
    "explanation": "전위(++x)는 선증가 후참조이며, 후위(x++)는 선참조 후증가 방식으로 동작합니다."
  },
  {
    "id": 263,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 클래스 멤버의 접근 제어자(Access Modifier) 중 '동일 패키지 내의 클래스와 해당 클래스를 상속받은 다른 패키지의 하위 클래스'에서만 접근을 허용하는 제어자는?",
    "options": [
      "protected",
      "public",
      "default (package-private)",
      "private"
    ],
    "answer_index": 0,
    "explanation": "protected는 같은 패키지 내에서는 무조건 접근 가능하며, 다른 패키지라도 상속 관계(Subclass)에 있으면 접근을 허용합니다."
  },
  {
    "id": 264,
    "subject": "프로그래밍 언어 활용",
    "question": "Java의 가비지 컬렉터(Garbage Collector) 힙(Heap) 메모리 영역 중 새로 생성된 객체가 최초로 할당되는 세부 영역은?",
    "options": [
      "Survivor 영역",
      "Eden 영역",
      "Old 영역",
      "Permanent/Metaspace 영역"
    ],
    "answer_index": 1,
    "explanation": "Young Generation 중 Eden 영역은 객체가 new 연산자로 최초 생성될 때 할당되며, 마이너 GC에서 살아남은 객체들이 Survivor 영역을 거쳐 Old 영역으로 승격(Promotion)됩니다."
  },
  {
    "id": 265,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)에 대한 설명으로 옳은 것은?",
    "options": [
      "깊은 복사는 항상 copy.copy() 함수로 수행한다.",
      "얕은 복사는 모든 원소를 완전히 독립된 새 메모리에 복제한다.",
      "얕은 복사는 최상위 객체만 새로 복사하고 내부 중첩 객체는 참조 주소를 공유하는 반면, 깊은 복사는 중첩된 객체까지 재귀적으로 완전히 독립된 새 객체로 복사한다.",
      "Python의 기본 할당 연산자(=)는 깊은 복사로 동작한다."
    ],
    "answer_index": 2,
    "explanation": "얕은 복사(copy.copy)는 껍데기만 복제하여 내부 요소의 변경이 원본에 영향을 주지만, 깊은 복사(copy.deepcopy)는 모든 중첩 객체까지 독립 복사합니다."
  },
  {
    "id": 266,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 프로세스 제어 블록(PCB, Process Control Block)에 저장되는 정보로 거리가 먼 것은?",
    "options": [
      "프로세스 고유 식별자 (PID)",
      "프로그램 카운터 (PC)",
      "CPU 레지스터 상태",
      "부팅 BIOS 펌웨어 소스 코드"
    ],
    "answer_index": 3,
    "explanation": "PCB에는 PID, 프로세스 상태, PC(다음에 실행할 명령어 주소), CPU 레지스터, 스케줄링 정보, 메모리 관리 정보 등이 보관됩니다."
  },
  {
    "id": 267,
    "subject": "프로그래밍 언어 활용",
    "question": "다중 프로세스 환경에서 서로 다른 프로세스 간에 데이터를 주고받는 프로세스 간 통신(IPC) 기법에 해당하지 않는 것은?",
    "options": [
      "레지스터 캐시 플러시",
      "공유 메모리 (Shared Memory)",
      "소켓 (Socket)",
      "파이프 (Pipe)"
    ],
    "answer_index": 0,
    "explanation": "대표적인 IPC 기법으로는 파이프(익명/명명 파이프), 메시지 큐, 공유 메모리, 세마포어, 소켓(Socket) 등이 있습니다."
  },
  {
    "id": 268,
    "subject": "프로그래밍 언어 활용",
    "question": "선점형 스케줄링 알고리즘인 라운드 로빈(Round Robin)에서 시간 할당량(Time Quantum)을 매우 크게 설정했을 때 나타나는 현상으로 옳은 것은?",
    "options": [
      "문맥 교환(Context Switching) 오버헤드가 극대화된다.",
      "FCFS(First-Come First-Served) 스케줄링과 거의 동일하게 동작한다.",
      "프로세스 응답 시간이 매우 빨라진다.",
      "시스템 처리율이 0으로 떨어진다."
    ],
    "answer_index": 1,
    "explanation": "타임 슬라이스가 지나치게 크면 프로세스가 할당 시간 내에 작업을 끝내므로 FCFS 선입선출과 동일해지며, 너무 작으면 잦은 문맥 교환으로 오버헤드가 커집니다."
  },
  {
    "id": 269,
    "subject": "프로그래밍 언어 활용",
    "question": "가상기억장치 관리 기법 중 프로세스를 동일한 고정 크기의 블록으로 나누는 기법은 '페이징(Paging)'이고, 논리적 의미 단위의 가변 크기 블록으로 나누는 기법은?",
    "options": [
      "스와핑 (Swapping)",
      "블록킹 (Blocking)",
      "세그멘테이션 (Segmentation)",
      "캐싱 (Caching)"
    ],
    "answer_index": 2,
    "explanation": "페이징(Paging)은 고정 크기(Page), 세그멘테이션(Segmentation)은 함수나 배열 같은 논리적 의미 단위의 가변 크기(Segment)로 분할합니다."
  },
  {
    "id": 270,
    "subject": "프로그래밍 언어 활용",
    "question": "페이지 교체 알고리즘 중 FIFO 알고리즘에서 프로세스에 할당된 페이지 프레임 수를 늘려주었음에도 오히려 페이지 부재(Page Fault) 발생 횟수가 증가하는 모순적 현상은?",
    "options": [
      "기아 현상 (Starvation)",
      "스레싱 (Thrashing)",
      "교착상태 (Deadlock)",
      "Belady의 모순 현상 (Belady's Anomaly)"
    ],
    "answer_index": 3,
    "explanation": "Belady의 이상 현상(Belady's Anomaly)은 FIFO 페이지 교체 알고리즘에서 프레임 수를 확장해도 부재 횟수가 늘어나는 현상입니다."
  },
  {
    "id": 271,
    "subject": "프로그래밍 언어 활용",
    "question": "인터넷 프로토콜(IP) 패킷 헤더에서 라우팅 루프(Routing Loop)로 인해 패킷이 네트워크 상에 영구히 떠도는 것을 방지하기 위해 홉을 거칠 때마다 1씩 감소시키는 필드는?",
    "options": [
      "TTL (Time to Live)",
      "CheckSum",
      "Identification",
      "TOS (Type of Service)"
    ],
    "answer_index": 0,
    "explanation": "TTL(Time to Live, 수명) 필드는 라우터를 1회 통과(Hop)할 때마다 1씩 감소하며, 값이 0이 되면 패킷을 즉시 폐기하고 ICMP Time Exceeded를 전송합니다."
  },
  {
    "id": 272,
    "subject": "프로그래밍 언어 활용",
    "question": "웹 브라우저가 사용하는 안전한 암호화 프로토콜인 HTTPS의 기본 TCP 포트 번호는?",
    "options": [
      "80",
      "443",
      "22",
      "8080"
    ],
    "answer_index": 1,
    "explanation": "HTTP 기본 포트는 80, SSL/TLS 보안이 적용된 HTTPS 기본 포트는 443입니다. SSH는 22번 포트입니다."
  },
  {
    "id": 273,
    "subject": "프로그래밍 언어 활용",
    "question": "객체지향 프로그래밍의 4대 핵심 특징 중 '외부에서 객체의 내부 상세 구현을 알 필요 없이 공개된 인터페이스만을 통해 상호작용하도록 데이터와 메서드를 하나로 묶고 은닉하는 특징'은?",
    "options": [
      "다형성 (Polymorphism)",
      "상속성 (Inheritance)",
      "캡슐화 (Encapsulation)",
      "추상화 (Abstraction)"
    ],
    "answer_index": 2,
    "explanation": "캡슐화(Encapsulation)는 데이터와 처리 함수를 하나로 묶고 private 접근 제어자를 통해 정보 은닉(Information Hiding)을 실현합니다."
  },
  {
    "id": 274,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 구조체 멤버에 접근할 때 구조체 변수에는 점(.) 연산자를 사용하고, 구조체 포인터 변수에는 사용하는 연산자는?",
    "options": [
      "콜론 연산자 (::)",
      "별표 연산자 (*)",
      "앰퍼샌드 연산자 (&)",
      "화살표 연산자 (->)"
    ],
    "answer_index": 3,
    "explanation": "구조체 포인터(ptr)를 통해 멤버에 접근할 때는 화살표 연산자(ptr->member)를 사용하며 이는 (*ptr).member 와 동일합니다."
  },
  {
    "id": 275,
    "subject": "프로그래밍 언어 활용",
    "question": "다중 스레드 환경에서 여러 스레드가 동시에 공유 자원에 접근하더라도 데이터의 일관성과 정확성이 유지되는 특성을 의미하는 용어는?",
    "options": [
      "스레드 안전성 (Thread-Safety)",
      "스레드 격리성",
      "동시성 독점성",
      "비동기성"
    ],
    "answer_index": 0,
    "explanation": "스레드 안전(Thread-Safe)은 동기화(Synchronization), 불변 객체, 뮤텍스 등을 활용하여 멀티스레드 환경에서 레이스 컨디션 없이 안전하게 동작함을 의미합니다."
  },
  {
    "id": 276,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 다음 코드의 실행 결과 출력되는 값은?\n\nint x = 10;\nint y = ++x + 5;\nprintf(\"%d %d\", x, y);",
    "options": [
      "10 15",
      "11 16",
      "11 15",
      "10 16"
    ],
    "answer_index": 1,
    "explanation": "++x에 의해 x는 11이 되고, 11 + 5 = 16이 y에 대입되므로 x=11, y=16이 출력됩니다."
  },
  {
    "id": 277,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 원소의 추가, 수정, 삭제가 불가능한 불변(Immutable) 시퀀스 자료형은?",
    "options": [
      "딕셔너리 (dict)",
      "리스트 (list)",
      "튜플 (tuple)",
      "세트 (set)"
    ],
    "answer_index": 2,
    "explanation": "튜플(tuple)은 한 번 생성되면 요소를 수정하거나 삭제할 수 없는 불변(Immutable) 자료형입니다. 리스트는 변경 가능(Mutable)합니다."
  },
  {
    "id": 278,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 우선순위가 높은 프로세스들이 계속 들어와서 우선순위가 낮은 프로세스가 CPU를 영원히 할당받지 못하는 기아(Starvation) 현상을 방지하기 위해 대기 시간에 비례하여 우선순위를 점진적으로 높여주는 기법은?",
    "options": [
      "스와핑 (Swapping)",
      "선점 (Preemption)",
      "워킹셋 (Working Set)",
      "에이징 (Aging)"
    ],
    "answer_index": 3,
    "explanation": "에이징(Aging, 노화) 기법은 큐에서 오래 대기한 프로세스의 우선순위를 점차 올려주어 언젠가는 반드시 실행되도록 보장합니다."
  },
  {
    "id": 279,
    "subject": "프로그래밍 언어 활용",
    "question": "OSI 7계층 참조 모델 중 송신자와 수신자 간의 종단 간(End-to-End) 신뢰성 있는 데이터 전송, 흐름 제어, 오류 제어를 전담하는 계층은?",
    "options": [
      "전송 계층 (Transport Layer, 4계층)",
      "네트워크 계층 (Network Layer, 3계층)",
      "데이터링크 계층 (Data Link Layer, 2계층)",
      "세션 계층 (Session Layer, 5계층)"
    ],
    "answer_index": 0,
    "explanation": "전송 계층(4계층)은 TCP, UDP 프로토콜을 사용하여 양 호스트의 프로세스 간 신뢰성 있는 종단 간 데이터 전송을 책임집니다."
  },
  {
    "id": 280,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 모든 클래스가 암시적으로 최상위 부모로 상속받는 단 하나의 루트 클래스는?",
    "options": [
      "java.lang.Class",
      "java.lang.Object",
      "java.lang.System",
      "java.lang.String"
    ],
    "answer_index": 1,
    "explanation": "Java의 모든 클래스는 별도의 상속을 명시하지 않아도 최상위 클래스인 Object 클래스를 기본으로 상속받습니다."
  },
  {
    "id": 281,
    "subject": "정보시스템 구축관리",
    "question": "DoS 공격의 일종으로 정상적인 크기(64KB)보다 훨씬 큰 규격 외 ICMP 에코 요청 패킷을 전송하여 단편화된 패킷 재조합 시 수신 시스템의 버퍼 오버플로를 유발하는 공격은?",
    "options": [
      "SYN Flooding",
      "Smurf",
      "Ping of Death",
      "TearDrop"
    ],
    "answer_index": 2,
    "explanation": "Ping of Death(죽음의 핑)는 규격 이상의 대형 ICMP 패킷을 잘게 나누어 보낸 후 수신자가 이를 재조합할 때 부하와 크래시를 유도합니다."
  },
  {
    "id": 282,
    "subject": "정보시스템 구축관리",
    "question": "IP 패킷이 전송 도중 단편화(Fragmentation)될 때, 조작된 Offset 값을 전송하여 수신 측이 패킷을 재조합할 때 시퀀스 번호 중복과 버그로 다운되게 만드는 공격은?",
    "options": [
      "Land Attack",
      "Smurf",
      "Ping of Death",
      "TearDrop"
    ],
    "answer_index": 3,
    "explanation": "티어드롭(TearDrop)은 오프셋(Fragment Offset) 값을 고의로 중첩되게 조작하여 수신 시스템의 재조합 로직 취약점을 공격합니다."
  },
  {
    "id": 283,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 보안 공격 중 송신자 IP 주소와 수신자 IP 주소를 희생자의 IP 주소와 동일하게 조작하여 희생자가 자기 자신에게 무한 응답 패킷을 보내 시스템을 마비시키는 공격은?",
    "options": [
      "Land Attack",
      "Smurf",
      "Bonk",
      "SYN Flooding"
    ],
    "answer_index": 0,
    "explanation": "랜드 어택(Land Attack)은 출발지와 목적지 IP 및 포트를 희생자 시스템의 IP로 동일하게 위조하여 내부 루프를 유발하는 공격입니다."
  },
  {
    "id": 284,
    "subject": "정보시스템 구축관리",
    "question": "정상 사용자의 웹 브라우저와 웹 서버 간의 활성화된 세션 ID(Session ID)를 가로채어 인증 과정을 거치지 않고 사용자 권한을 그대로 도용하는 공격은?",
    "options": [
      "스니핑 (Sniffing)",
      "세션 하이재킹 (Session Hijacking)",
      "SQL Injection",
      "파밍 (Pharming)"
    ],
    "answer_index": 1,
    "explanation": "세션 하이재킹은 로그인 성공 후 발급된 세션 토큰이나 쿠키를 도난/가로채어 공격자가 정당한 사용자로 위장 접속하는 공격입니다."
  },
  {
    "id": 285,
    "subject": "정보시스템 구축관리",
    "question": "사용자 시스템의 중요한 문서나 데이터베이스 파일을 고강도 암호화로 잠그고 이를 복호화해 주는 대가로 금전(비트코인 등)을 요구하는 악성코드는?",
    "options": [
      "트로이 목마 (Trojan Horse)",
      "스파이웨어 (Spyware)",
      "랜섬웨어 (Ransomware)",
      "애드웨어 (Adware)"
    ],
    "answer_index": 2,
    "explanation": "랜섬웨어(Ransomware)는 몸값(Ransom)과 소프트웨어(Software)의 합성어로, 사용자 데이터를 인질로 삼아 금전을 갈취하는 대표적인 악성코드입니다."
  },
  {
    "id": 286,
    "subject": "정보시스템 구축관리",
    "question": "사용자를 속여 악성 사이트로 유도하기 위해 DNS 설정을 변조하거나 호스트 파일을 조작하여 정상적인 도메인 주소를 입력해도 가짜 피싱 사이트로 접속되게 만드는 공격은?",
    "options": [
      "큐싱 (Qshing)",
      "피싱 (Phishing)",
      "스미싱 (Smishing)",
      "파밍 (Pharming)"
    ],
    "answer_index": 3,
    "explanation": "파밍(Pharming)은 DNS 스푸핑이나 hosts 파일 변조를 통해 정상적인 URL을 입력해도 해커가 구축한 위조 사이트로 강제 우회시키는 사기 수법입니다."
  },
  {
    "id": 287,
    "subject": "정보시스템 구축관리",
    "question": "접근 통제의 기본 3단계 절차가 올바른 순서로 나열된 것은?",
    "options": [
      "식별 (Identification) -> 인증 (Authentication) -> 인가 (Authorization)",
      "인증 (Authentication) -> 식별 (Identification) -> 인가 (Authorization)",
      "인가 (Authorization) -> 인증 (Authentication) -> 식별 (Identification)",
      "식별 (Identification) -> 인가 (Authorization) -> 인증 (Authentication)"
    ],
    "answer_index": 0,
    "explanation": "접근 통제 3단계: 1) 식별(ID 입력 등 신원 주장) -> 2) 인증(패스워드/생체 등으로 본인 입증) -> 3) 인가(권한 부여) 순서입니다."
  },
  {
    "id": 288,
    "subject": "정보시스템 구축관리",
    "question": "생체 인식(Biometrics) 인증 시스템의 성능 평가 지표 중 '인가되지 않은 다른 사람의 생체 정보를 본인으로 잘못 승인하는 비율'을 의미하는 것은?",
    "options": [
      "본인 거부율 (FRR, False Rejection Rate)",
      "타인 수락률 (FAR, False Acceptance Rate)",
      "교차 오류율 (CER)",
      "동등 오류율 (EER)"
    ],
    "answer_index": 1,
    "explanation": "FAR(타인 수락률)은 보안성 지표로 비인가자를 허용하는 비율이며, FRR(본인 거부율)은 사용 편의성 지표로 정당한 사용자를 거부하는 비율입니다."
  },
  {
    "id": 289,
    "subject": "정보시스템 구축관리",
    "question": "블록 암호 운영 모드 중 '이전 블록의 암호문과 현재 블록의 평문을 XOR 연산한 후 암호화하며, 첫 블록 암호화에 초기화 벡터(IV)를 필요로 하는 모드'는?",
    "options": [
      "CFB (Cipher Feedback) 모드",
      "ECB (Electronic Codebook) 모드",
      "CBC (Cipher Block Chaining) 모드",
      "OFB (Output Feedback) 모드"
    ],
    "answer_index": 2,
    "explanation": "CBC 모드는 이전 블록의 암호화 결과를 현재 블록에 체인처럼 연쇄 결합하여 패턴 유추를 방지하며, 첫 블록을 위해 무작위 IV(초기화 벡터)를 사용합니다."
  },
  {
    "id": 290,
    "subject": "정보시스템 구축관리",
    "question": "웹 애플리케이션 보안을 위해 OSI 7계층(응용 계층)에서 HTTP/HTTPS 트래픽을 정밀 검사하여 SQL 인젝션, XSS 등의 웹 공격을 차단하는 전용 보안 장비는?",
    "options": [
      "NAC (Network Access Control)",
      "네트워크 방화벽 (L3/L4 Firewall)",
      "VPN 게이트웨이",
      "WAF (Web Application Firewall, 웹 방화벽)"
    ],
    "answer_index": 3,
    "explanation": "WAF는 웹 트래픽의 페이로드 본문까지 심층 검사(Deep Packet Inspection)하여 웹 전용 공격(SQLi, XSS, 파일 업로드 취약점 등)을 방어합니다."
  },
  {
    "id": 291,
    "subject": "정보시스템 구축관리",
    "question": "침입 탐지 시스템(IDS) 중 '알려진 공격 패턴(시그니처)을 데이터베이스에 등록해 두고 일치하는 패킷을 탐지하는 기법'으로 오탐률(False Positive)이 낮은 탐지 방식은?",
    "options": [
      "오용 탐지 (Signature / Misuse Detection)",
      "이상 탐지 (Anomaly Detection)",
      "행위 기반 탐지",
      "통계적 휴리스틱 탐지"
    ],
    "answer_index": 0,
    "explanation": "오용 탐지(시그니처 기반)는 이미 알려진 패턴과 매칭하므로 오탐률이 낮지만 새로운 제로데이(Zero-day) 공격은 탐지하지 못합니다."
  },
  {
    "id": 292,
    "subject": "정보시스템 구축관리",
    "question": "재해 복구 센터(DRC) 구축 유형 중 '주 센터와 완전히 동일한 수준의 전산망과 설비를 원격지에 실시간 미러링으로 구축하여 재해 발생 시 수 분(또는 즉각) 내 복구가 가능한 가장 높은 수준의 센터'는?",
    "options": [
      "핫 사이트 (Hot Site)",
      "미러 사이트 (Mirror Site)",
      "웜 사이트 (Warm Site)",
      "콜드 사이트 (Cold Site)"
    ],
    "answer_index": 1,
    "explanation": "Mirror Site는 실시간 복제를 유지하는 RTO≒0의 최상위 복구 센터입니다. Hot Site는 동기/비동기 백업으로 수 시간 내 복구, Cold Site는 기본 전력망만 갖춘 형태입니다."
  },
  {
    "id": 293,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 토폴로지(Topology) 구조 중 중앙에 허브(스위치)를 두고 모든 노드가 1:1로 중앙 장비에 연결되어 있어 특정 단말 장애 시 다른 단말에 영향이 없는 구조는?",
    "options": [
      "링형 (Ring Topology)",
      "버스형 (Bus Topology)",
      "성형 / 스타형 (Star Topology)",
      "메시형 / 망형 (Mesh Topology)"
    ],
    "answer_index": 2,
    "explanation": "스타형(성형)은 중앙 스위치에 모든 노드가 개별 연결되어 단말 장애의 파급이 없지만, 중앙 허브가 고장 나면 전체가 마비됩니다."
  },
  {
    "id": 294,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 유지보수 유형 중 '운영체제 업그레이드, 새로운 하드웨어 도입, 관련 법률 개정 등 외부 환경의 변화에 맞추어 소프트웨어를 수정하는 활동'은?",
    "options": [
      "예방 유지보수 (Preventive Maintenance)",
      "수정 유지보수 (Corrective Maintenance)",
      "완전 유지보수 (Perfective Maintenance)",
      "적응 유지보수 (Adaptive Maintenance)"
    ],
    "answer_index": 3,
    "explanation": "적응 유지보수(Adaptive Maintenance)는 OS, 하드웨어, 컴파일러 등 시스템 운영 환경 변화에 적응시키기 위해 수행하는 유지보수입니다."
  },
  {
    "id": 295,
    "subject": "정보시스템 구축관리",
    "question": "데이터베이스 보안 기술 중 애플리케이션 코드를 수정하지 않고 데이터베이스 엔진 레벨에서 저장소(데이터 파일)를 자동으로 암호화하고 복호화해 주는 기술은?",
    "options": [
      "TDE (Transparent Data Encryption)",
      "플러그인 방식 암호화",
      "API 방식 암호화",
      "하이브리드 암호화"
    ],
    "answer_index": 0,
    "explanation": "TDE(투명한 데이터 암호화)는 DBMS 커널 내부에서 디스크 기록 시 자동 암호화, 읽을 때 자동 복호화하므로 애플리케이션 수정이 전혀 필요 없습니다."
  },
  {
    "id": 296,
    "subject": "정보시스템 구축관리",
    "question": "블록체인(Blockchain) 합의 알고리즘 중 '참여 노드가 보유한 암호화폐 지분(Stake)의 크기에 비례하여 블록 생성 권한과 보상을 부여하는 친환경적 합의 알고리즘'은?",
    "options": [
      "작업 증명 (PoW, Proof of Work)",
      "지분 증명 (PoS, Proof of Stake)",
      "위임 지분 증명 (DPoS)",
      "권위 증명 (PoA)"
    ],
    "answer_index": 1,
    "explanation": "PoS(지분 증명)는 고사양 연산(채굴) 경쟁을 벌이는 PoW와 달리 지분 보유량에 따라 블록 생성권을 부여하여 에너지 소모를 획기적으로 줄인 합의 메커니즘입니다."
  },
  {
    "id": 297,
    "subject": "정보시스템 구축관리",
    "question": "무차별 대입 공격(Brute Force Attack) 및 사전 공격(Dictionary Attack)을 차단하기 위한 인증 보안 대책으로 적합하지 않은 것은?",
    "options": [
      "로그인 연속 실패 횟수 초과 시 계정 일시 잠금(Account Lockout)",
      "CAPTCHA(자동 가입 방지 문자) 인증 적용",
      "비밀번호를 평문으로 데이터베이스에 저장하여 신속하게 검증",
      "다중 요소 인증(MFA / 2FA) 도입"
    ],
    "answer_index": 2,
    "explanation": "비밀번호를 평문으로 저장하는 것은 치명적인 보안 취약점이며, 안전한 솔트(Salt)와 단방향 암호화 해시(SHA-256 등)를 적용해야 합니다."
  },
  {
    "id": 298,
    "subject": "정보시스템 구축관리",
    "question": "오픈소스 웹 애플리케이션 보안 프로젝트(OWASP)에서 정기적으로 발표하는 가장 위험한 상위 10대 웹 취약점 목록을 의미하는 것은?",
    "options": [
      "CVSS 점수",
      "CVE (Common Vulnerabilities and Exposures)",
      "CWE (Common Weakness Enumeration)",
      "OWASP Top 10"
    ],
    "answer_index": 3,
    "explanation": "OWASP Top 10은 웹 애플리케이션에서 빈번하게 발생하는 가장 치명적인 취약점 10가지를 정리하여 표준 보안 가이드라인으로 제시합니다."
  },
  {
    "id": 299,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 비용 산정 모델 중 기능 점수(Function Point) 모델에서 측정하는 '데이터 기능'의 2가지 유형은?",
    "options": [
      "내부 논리 파일 (ILF)과 외부 연계 파일 (EIF)",
      "외부 입력 (EI)과 외부 출력 (EO)",
      "외부 조회 (EQ)와 외부 입력 (EI)",
      "단위 기능과 통합 기능"
    ],
    "answer_index": 0,
    "explanation": "기능 점수의 5대 요소: 데이터 기능(내부 논리 파일 ILF, 외부 연계 파일 EIF)과 트랜잭션 기능(외부 입력 EI, 외부 출력 EO, 외부 조회 EQ)으로 구분됩니다."
  },
  {
    "id": 300,
    "subject": "정보시스템 구축관리",
    "question": "클라우드 서비스 가상화 환경에서 서로 다른 테넌트 간의 가상머신(VM) 메모리 격리가 무너져 다른 고객의 데이터나 호스트 시스템을 침범하는 치명적인 보안 위협은?",
    "options": [
      "DDoS 공격",
      "VM 탈출 (VM Escape)",
      "스푸핑 공격",
      "SYN Flooding"
    ],
    "answer_index": 1,
    "explanation": "VM 탈출(VM Escape)은 게스트 OS 내부의 취약점을 이용해 하이퍼바이저 격리를 뚫고 호스트 운영체제 및 다른 게스트 VM의 자원을 장악하는 하이퍼바이저 취약점 공격입니다."
  },
  {
    "id": 301,
    "subject": "소프트웨어 설계",
    "question": "유스케이스 명세서(Use Case Specification)의 구성 요소 중 '유스케이스가 시작되기 전에 시스템이 반드시 만족해야 하는 상태나 조건'을 의미하는 것은?",
    "options": [
      "기본 흐름 (Basic Flow)",
      "사후 조건 (Post-condition)",
      "사전 조건 (Pre-condition)",
      "대안 흐름 (Alternative Flow)"
    ],
    "answer_index": 2,
    "explanation": "사전 조건(Pre-condition)은 해당 유스케이스가 정상적으로 실행되기 위해 시스템이 미리 갖추어야 할 전제 조건을 명시합니다."
  },
  {
    "id": 302,
    "subject": "소프트웨어 설계",
    "question": "사용자 인터페이스(UI) 설계에서 시스템의 가상 사용자를 실제 인물처럼 구체적인 인구통계학적 특성과 성향을 부여하여 정의하는 기법은?",
    "options": [
      "유저 저니 맵 (User Journey Map)",
      "스토리보드 (Storyboard)",
      "와이어프레임 (Wireframe)",
      "페르소나 (Persona)"
    ],
    "answer_index": 3,
    "explanation": "페르소나(Persona)는 실제 사용자 데이터를 기반으로 특정 사용자 집단을 대표하는 가상의 인물을 설정하여 요구사항과 사용성을 분석하는 기법입니다."
  },
  {
    "id": 303,
    "subject": "소프트웨어 설계",
    "question": "UI 시제품 제작 도구의 발전 단계 중 '정적 레이아웃 와이어프레임에 디자인 요소와 색상을 입힌 정적 그래픽 결과물'은?",
    "options": [
      "목업 (Mockup)",
      "와이어프레임 (Wireframe)",
      "프로토타입 (Prototype)",
      "스케치 (Sketch)"
    ],
    "answer_index": 0,
    "explanation": "와이어프레임은 단순 뼈대(선/상자), 목업(Mockup)은 실제 완성 화면의 시각적 디자인(색상, 폰트), 프로토타입은 실제 상호작용 동작이 가능한 시제품입니다."
  },
  {
    "id": 304,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 개발 생명주기(SDLC) 모델 중 보헴(Boehm)이 제안하였으며, 개발 전 과정에서 위험 분석(Risk Analysis)을 반복적으로 수행하여 프로젝트 실패 위험을 최소화하는 모델은?",
    "options": [
      "폭포수 모델 (Waterfall Model)",
      "나선형 모델 (Spiral Model)",
      "프로토타입 모델",
      "RAD 모델"
    ],
    "answer_index": 1,
    "explanation": "나선형 모델(Spiral Model)은 계획 수립 -> 위험 분석 -> 개발 및 검증 -> 고객 평가의 4단계를 반복(Spiral)하며 대규모 프로젝트의 위험을 관리합니다."
  },
  {
    "id": 305,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 개발 생명주기 모델 중 '요구사항 분석, 설계, 구현, 테스트, 유지보수가 순차적으로 진행되며 이전 단계가 완료되어야 다음 단계로 넘어가는 전통적인 모델'은?",
    "options": [
      "익스트림 프로그래밍 (XP)",
      "애자일 모델 (Agile Model)",
      "폭포수 모델 (Waterfall Model)",
      "스크럼 (Scrum)"
    ],
    "answer_index": 2,
    "explanation": "폭포수 모델(Waterfall Model)은 폭포수처럼 위에서 아래로 순차 진행되는 고전적 모델로, 단계별 산출물이 명확하지만 중간 변경 수용이 어렵습니다."
  },
  {
    "id": 306,
    "subject": "소프트웨어 설계",
    "question": "CASE(Computer-Aided Software Engineering) 도구 중 개발 수명주기의 전반부(요구사항 분석, 시스템 설계)를 지원하는 도구는?",
    "options": [
      "빌드 도구",
      "하위 CASE (Lower CASE)",
      "통합 CASE (Integrated CASE)",
      "상위 CASE (Upper CASE)"
    ],
    "answer_index": 3,
    "explanation": "상위 CASE 도구는 기획, 요구사항 분석, 다이어그램 설계 등 소프트웨어 생명주기 앞부분을 지원하며, 하위 CASE는 코드 생성, 컴파일, 테스트를 지원합니다."
  },
  {
    "id": 307,
    "subject": "소프트웨어 설계",
    "question": "미들웨어(Middleware) 유형 중 '분산 환경에서 클라이언트가 원격 컴퓨터에 존재하는 함수나 프로시저를 로컬 함수 호출하듯 실행할 수 있게 해주는 기술'은?",
    "options": [
      "RPC (Remote Procedure Call)",
      "MOM (Message-Oriented Middleware)",
      "TP 모니터 (TP Monitor)",
      "WAS (Web Application Server)"
    ],
    "answer_index": 0,
    "explanation": "RPC(원격 프로시저 호출)는 네트워크 세부 프로토콜을 숨기고 원격 호스트의 함수를 마치 로컬 함수처럼 투명하게 호출할 수 있게 지원합니다."
  },
  {
    "id": 308,
    "subject": "소프트웨어 설계",
    "question": "미들웨어 중 온라인 트랜잭션 처리(OLTP) 환경에서 다수의 사용자 트랜잭션을 분산 제어하고 ACID 특성을 엄격히 보장하는 미들웨어는?",
    "options": [
      "RPC",
      "TP 모니터 (Transaction Processing Monitor)",
      "ORB",
      "MOM"
    ],
    "answer_index": 1,
    "explanation": "TP 모니터(예: Tuxedo)는 은행 등 고신뢰성 금융권 시스템에서 분산 트랜잭션의 원자성과 무결성을 보장하는 전용 트랜잭션 처리 미들웨어입니다."
  },
  {
    "id": 309,
    "subject": "소프트웨어 설계",
    "question": "웹 애플리케이션 아키텍처에서 정적 컨텐츠(HTML, CSS, 이미지)를 서비스하는 웹 서버(Web Server)와 동적 비즈니스 로직 및 DB 연동을 담당하는 WAS의 연결 설명으로 옳은 것은?",
    "options": [
      "Nginx는 데이터베이스 트랜잭션을 직접 제어한다.",
      "Tomcat은 오직 정적 파일만을 처리하는 웹 서버이다.",
      "Apache/Nginx는 웹 서버, Tomcat/WebLogic은 WAS에 해당한다.",
      "웹 서버와 WAS는 물리적으로 반드시 동일 서버에만 설치해야 한다."
    ],
    "answer_index": 2,
    "explanation": "Apache, Nginx는 정적 자원을 고속 처리하는 웹 서버이며, Tomcat, Jeus, WebLogic 등은 서블릿/JSP 컨테이너를 구동하여 비즈니스 로직을 실행하는 WAS입니다."
  },
  {
    "id": 310,
    "subject": "소프트웨어 설계",
    "question": "코드(Code) 설계 시 부여 방식 중 '일련번호나 항목의 발생 순서대로 1, 2, 3... 번호를 차례로 부여하는 가장 단순한 코드 방식'은?",
    "options": [
      "표의 코드 (Significant Code)",
      "블록 코드 (Block Code)",
      "10진 코드 (Decimal Code)",
      "순차 코드 (Sequence Code)"
    ],
    "answer_index": 3,
    "explanation": "순차 코드(Sequence Code)는 코드화 대상 항목을 순서대로 일련번호로 매기는 가장 단순하고 확장이 용이한 방식입니다."
  },
  {
    "id": 311,
    "subject": "소프트웨어 설계",
    "question": "코드 설계 방식 중 '도서관 십진분류법(DDC)처럼 0~9까지의 10진수를 활용하여 좌측부터 대분류, 중분류, 소분류로 계층화하는 코드'는?",
    "options": [
      "10진 코드 (Decimal Code)",
      "그룹 분류 코드",
      "블록 코드",
      "연상 코드"
    ],
    "answer_index": 0,
    "explanation": "10진 코드(Decimal Code)는 항목을 10진수 계층으로 나누어 무한히 세부 확장이 가능한 코드 체계입니다."
  },
  {
    "id": 312,
    "subject": "소프트웨어 설계",
    "question": "코드 설계 방식 중 '항목의 명칭이나 약칭을 활용하여 대상의 의미를 직관적으로 떠올릴 수 있도록 만든 코드(예: TV-40, KR)'는?",
    "options": [
      "표의 코드 (Significant Code)",
      "연상 코드 (Mnemonic Code)",
      "순차 코드",
      "합성 코드"
    ],
    "answer_index": 1,
    "explanation": "연상 코드(Mnemonic Code)는 항목의 명칭이나 물리적 특성의 약어를 사용하여 코드를 보면 대상을 즉각 연상할 수 있는 코드입니다."
  },
  {
    "id": 313,
    "subject": "소프트웨어 설계",
    "question": "모듈의 결합도(Coupling) 중 '두 모듈이 동일한 외부 전역 변수나 외부 환경(데이터 형식, 통신 프로토콜 등)을 공유할 때 발생하는 결합도'는?",
    "options": [
      "제어 결합도 (Control Coupling)",
      "공통 결합도 (Common Coupling)",
      "외부 결합도 (External Coupling)",
      "스탬프 결합도 (Stamp Coupling)"
    ],
    "answer_index": 2,
    "explanation": "외부 결합도(External Coupling)는 외부 선언 변수, OS 환경, 통신 프로토콜 등을 외부에서 공유하여 참조할 때 형성됩니다."
  },
  {
    "id": 314,
    "subject": "소프트웨어 설계",
    "question": "모듈 결합도 중 '모듈 간에 인터페이스로 배열이나 구조체, 레코드 등 복합 데이터 구조 전체가 전달될 때 발생하는 결합도'는?",
    "options": [
      "내용 결합도 (Content Coupling)",
      "자료 결합도 (Data Coupling)",
      "제어 결합도 (Control Coupling)",
      "스탬프 결합도 (Stamp Coupling)"
    ],
    "answer_index": 3,
    "explanation": "스탬프 결합도(Stamp Coupling)는 필요한 단일 필드만이 아니라 전체 레코드/구조체 데이터 형식이 매개변수로 전달될 때 발생합니다."
  },
  {
    "id": 315,
    "subject": "소프트웨어 설계",
    "question": "모듈 결합도 중 '한 모듈이 다른 모듈에게 무엇을 어떻게 실행할지 결정하는 제어 신호(Control Flag, 명령 코드)를 전달하는 결합도'는?",
    "options": [
      "제어 결합도 (Control Coupling)",
      "스탬프 결합도 (Stamp Coupling)",
      "외부 결합도 (External Coupling)",
      "공통 결합도 (Common Coupling)"
    ],
    "answer_index": 0,
    "explanation": "제어 결합도(Control Coupling)는 상위 모듈이 하위 모듈의 내부 처리 흐름을 통제하는 플래그를 넘겨주는 나쁜 결합도 형태입니다."
  },
  {
    "id": 316,
    "subject": "소프트웨어 설계",
    "question": "모듈 응집도(Cohesion) 중 '모듈 내부의 모든 요소들이 단 하나의 명확한 기능(단일 목적)만을 완벽하게 수행하는 가장 이상적인 응집도'는?",
    "options": [
      "순차적 응집도 (Sequential Cohesion)",
      "기능적 응집도 (Functional Cohesion)",
      "통신적 응집도 (Communicational Cohesion)",
      "절차적 응집도 (Procedural Cohesion)"
    ],
    "answer_index": 1,
    "explanation": "기능적 응집도(Functional Cohesion)는 모듈 내 모든 요소가 단 하나의 고유 작업만을 수행하는 가장 바람직하고 강한 응집도입니다."
  },
  {
    "id": 317,
    "subject": "소프트웨어 설계",
    "question": "모듈 응집도 중 '서로 아무런 관련이 없는 기능들이 우연히 한 모듈 내에 모여 있는 가장 나쁜 품질의 응집도'는?",
    "options": [
      "시간적 응집도 (Temporal Cohesion)",
      "논리적 응집도 (Logical Cohesion)",
      "우연적 응집도 (Coincidental Cohesion)",
      "절차적 응집도 (Procedural Cohesion)"
    ],
    "answer_index": 2,
    "explanation": "우연적 응집도(Coincidental Cohesion)는 구성 요소 간에 아무런 의미적 연관이 없이 작성된 최악의 응집도입니다."
  },
  {
    "id": 318,
    "subject": "소프트웨어 설계",
    "question": "모듈 응집도 중 '모듈 내의 요소들이 동일한 입력 데이터를 사용하여 서로 다른 기능을 수행하거나, 동일한 출력 데이터를 생성하는 응집도'는?",
    "options": [
      "시간적 응집도 (Temporal Cohesion)",
      "순차적 응집도 (Sequential Cohesion)",
      "절차적 응집도 (Procedural Cohesion)",
      "교환적/통신적 응집도 (Communicational Cohesion)"
    ],
    "answer_index": 3,
    "explanation": "통신적(교환적) 응집도는 동일한 입력 자료를 활용하여 복수의 서로 다른 출력을 만들어내는 응집 형태입니다."
  },
  {
    "id": 319,
    "subject": "소프트웨어 설계",
    "question": "UML 관계(Relationship) 중 '인터페이스에 정의된 오퍼레이션들을 구체 클래스가 구현하여 실제 동작 가능한 형태로 완성하는 관계'는?",
    "options": [
      "실체화 관계 (Realization, 점선 삼각형 화살표)",
      "일반화 관계 (Generalization, 실선 삼각형 화살표)",
      "의존 관계 (Dependency, 점선 화살표)",
      "연관 관계 (Association, 실선 화살표)"
    ],
    "answer_index": 0,
    "explanation": "실체화(Realization) 관계는 인터페이스(명세)를 클래스가 실제로 구현(implements)할 때 성립하는 관계입니다."
  },
  {
    "id": 320,
    "subject": "소프트웨어 설계",
    "question": "GoF 생성 패턴 중 '복잡한 인스턴스의 생성 과정과 표현 방법을 분리하여, 동일한 생성 절차에서 서로 다른 표현 결과를 만들 수 있게 해주는 패턴'은?",
    "options": [
      "Prototype 패턴",
      "Builder 패턴",
      "Singleton 패턴",
      "Factory Method 패턴"
    ],
    "answer_index": 1,
    "explanation": "빌더(Builder) 패턴은 복합 객체의 단계별 생성 로직을 캡슐화하여 매개변수가 많은 객체를 깔끔하고 안전하게 조립합니다."
  },
  {
    "id": 321,
    "subject": "소프트웨어 설계",
    "question": "GoF 생성 패턴 중 '원형이 되는 인스턴스를 복제(Clone)하여 새로운 객체를 생성함으로써 객체 생성 비용을 줄이는 패턴'은?",
    "options": [
      "Abstract Factory 패턴",
      "Builder 패턴",
      "Prototype 패턴",
      "Singleton 패턴"
    ],
    "answer_index": 2,
    "explanation": "프로토타입(Prototype) 패턴은 new 생성 비용이 큰 객체의 복사본(Clone)을 생성하여 성능을 최적화합니다."
  },
  {
    "id": 322,
    "subject": "소프트웨어 설계",
    "question": "GoF 구조 패턴 중 '다른 객체에 대한 접근을 제어하기 위해 대리자 객체를 두어 원격 접근, 접근 제어, 지연 로딩(Lazy Loading)을 처리하는 패턴'은?",
    "options": [
      "Decorator 패턴",
      "Adapter 패턴",
      "Bridge 패턴",
      "Proxy 패턴"
    ],
    "answer_index": 3,
    "explanation": "프록시(Proxy) 패턴은 실제 대상 객체 앞에 대리인(Proxy)을 두어 보안 검사, 캐싱, 지연 로딩 등을 투명하게 중개합니다."
  },
  {
    "id": 323,
    "subject": "소프트웨어 설계",
    "question": "GoF 구조 패턴 중 '다수의 유사한 객체를 매번 새로 생성하지 않고 공유(Sharing)를 통해 메모리 사용량을 대폭 절감하는 패턴'은?",
    "options": [
      "Flyweight 패턴",
      "Facade 패턴",
      "Composite 패턴",
      "Proxy 패턴"
    ],
    "answer_index": 0,
    "explanation": "플라이웨이트(Flyweight) 패턴은 폰트 글자 객체나 게임의 타일처럼 대량의 세밀한 객체들을 풀(Pool)에 캐싱하여 공유합니다."
  },
  {
    "id": 324,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '컬렉션의 내부 저장 구조를 노출하지 않고 그 요소들을 순차적으로 순회할 수 있는 방법을 제공하는 패턴'은?",
    "options": [
      "Visitor 패턴",
      "Iterator 패턴",
      "Command 패턴",
      "State 패턴"
    ],
    "answer_index": 1,
    "explanation": "반복자(Iterator) 패턴은 배열, 리스트, 트리 등 집합체의 내부 구현과 무관하게 hasNext(), next() 등으로 일관되게 원소를 순회합니다."
  },
  {
    "id": 325,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '객체의 내부 상태를 캡슐화를 깨뜨리지 않고 외부 저장소에 저장해 두었다가, 나중에 해당 상태로 되돌릴(Undo) 수 있도록 하는 패턴'은?",
    "options": [
      "Strategy 패턴",
      "State 패턴",
      "Memento 패턴",
      "Mediator 패턴"
    ],
    "answer_index": 2,
    "explanation": "메멘토(Memento) 패턴은 텍스트 에디터의 '실행 취소(Undo)'처럼 객체의 이전 스냅샷 상태를 저장하고 복원할 때 사용됩니다."
  },
  {
    "id": 326,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '명령이나 요청 자체를 하나의 독립된 객체로 캡슐화하여 매개변수화, 로깅, 큐잉, 실행 취소를 가능하게 하는 패턴'은?",
    "options": [
      "Observer 패턴",
      "Interpreter 패턴",
      "Mediator 패턴",
      "Command 패턴"
    ],
    "answer_index": 3,
    "explanation": "커맨드(Command) 패턴은 요청을 객체로 감싸 버튼 클릭 이벤트나 트랜잭션 롤백, 매크로 기능을 유연하게 구현합니다."
  },
  {
    "id": 327,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '객체들 간의 복잡한 통신과 상호작용을 캡슐화하여 객체들이 서로 직접 참조하지 않고 중재자를 통해서만 통신하게 하는 패턴'은?",
    "options": [
      "Mediator 패턴",
      "Facade 패턴",
      "Proxy 패턴",
      "Adapter 패턴"
    ],
    "answer_index": 0,
    "explanation": "중재자(Mediator) 패턴은 관제탑처럼 N:M의 복잡한 통신을 1:N으로 단순화하여 결합도를 낮춥니다."
  },
  {
    "id": 328,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '객체가 자신의 내부 상태에 따라 스스로 행위를 변경할 수 있도록 클래스화하여 조건문(if-else)을 제거하는 패턴'은?",
    "options": [
      "Strategy 패턴",
      "State 패턴",
      "Template Method 패턴",
      "Visitor 패턴"
    ],
    "answer_index": 1,
    "explanation": "상태(State) 패턴은 객체의 상태를 각각의 클래스로 분리하여 상태 변화에 따른 동작 분기를 객체 다형성으로 처리합니다."
  },
  {
    "id": 329,
    "subject": "소프트웨어 설계",
    "question": "GoF 행위 패턴 중 '데이터 구조와 그 데이터에 적용할 연산(처리 로직)을 분리하여, 구조를 변경하지 않고도 새로운 연산을 쉽게 추가할 수 있게 하는 패턴'은?",
    "options": [
      "Composite 패턴",
      "Iterator 패턴",
      "Visitor 패턴",
      "Flyweight 패턴"
    ],
    "answer_index": 2,
    "explanation": "방문자(Visitor) 패턴은 대상 객체 구조를 순회하면서 방문자에게 처리를 위임하여 새로운 알고리즘 추가를 용이하게 합니다."
  },
  {
    "id": 330,
    "subject": "소프트웨어 설계",
    "question": "UML 패키지 다이어그램에서 패키지 간의 관계 중 '한 패키지가 다른 패키지에 정의된 요소를 참조할 때 요소의 이름을 자신의 네임스페이스로 가져오는 의존 관계'는?",
    "options": [
      "<<extend>>",
      "<<access>>",
      "<<include>>",
      "<<import>>"
    ],
    "answer_index": 3,
    "explanation": "패키지 다이어그램의 <<import>>는 타 패키지의 요소를 네임스페이스 접두사 없이 직접 사용할 수 있도록 가져오는 관계입니다."
  },
  {
    "id": 331,
    "subject": "소프트웨어 개발",
    "question": "단위 테스트 프레임워크(JUnit 등)에서 테스트 실행 후 실제 계산된 결과값과 예상 기대값이 일치하는지 비교 검증하는 명령문은?",
    "options": [
      "단언문 (Assertion)",
      "주석문 (Annotation)",
      "트랜잭션문 (Transaction)",
      "선언문 (Declaration)"
    ],
    "answer_index": 0,
    "explanation": "단언문(Assertion: assertEquals, assertTrue 등)은 테스트 코드의 기대 결과와 실제 수행 결과를 검증하는 핵심 구문입니다."
  },
  {
    "id": 332,
    "subject": "소프트웨어 개발",
    "question": "테스트 주도 개발(TDD)에서 실제 객체의 동작을 흉내 내어 테스트 환경을 격리하기 위해 사용하는 대역 객체(Test Double)에 해당하지 않는 것은?",
    "options": [
      "Mock",
      "Oracle",
      "Spy",
      "Stub"
    ],
    "answer_index": 1,
    "explanation": "테스트 더블(Test Double)의 유형에는 Dummy, Fake, Stub, Spy, Mock이 있습니다. Oracle(테스트 오라클)은 테스트 결과의 참/거짓을 판별하는 기준 메커니즘입니다."
  },
  {
    "id": 333,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트 기법 중 McCabe의 순환 복잡도(V(G))가 나타내는 제어 흐름 그래프 상의 의미는?",
    "options": [
      "프로그램의 컴파일 에러 개수",
      "프로그램의 총 실행 시간 초(Seconds)",
      "프로그램의 선형적으로 독립적인 경로(Independent Paths)의 최대 수",
      "프로그램에 할당된 힙 메모리 바이트 수"
    ],
    "answer_index": 2,
    "explanation": "순환 복잡도 V(G) = E - N + 2 는 제어 흐름 그래프에서 다른 경로의 조합으로 만들 수 없는 독립된 기본 실행 경로의 수를 의미합니다."
  },
  {
    "id": 334,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트 중 '변수의 정의(Definition)와 변수의 사용(Use) 위치를 추적하여 검증 경로를 도출하는 기법'은?",
    "options": [
      "구문 검사 (Statement Testing)",
      "기본 경로 검사 (Basis Path Testing)",
      "루프 검사 (Loop Testing)",
      "데이터 흐름 검사 (Data Flow Testing)"
    ],
    "answer_index": 3,
    "explanation": "데이터 흐름 검사는 변수에 값이 할당(def)되고 참조/사용(use)되는 연결 관계(DU 체인)의 유효성을 검사합니다."
  },
  {
    "id": 335,
    "subject": "소프트웨어 개발",
    "question": "블랙박스 테스트 기법 중 '시스템이 다양한 입력 이벤트에 반응하여 한 상태에서 다른 상태로 전환되는 전이 경로와 유효성을 검사하는 기법'은?",
    "options": [
      "상태 전이 검사 (State Transition Testing)",
      "경계값 분석",
      "동치 분할",
      "원인-결과 그래프"
    ],
    "answer_index": 0,
    "explanation": "상태 전이 테스트는 자판기나 결제 프로세스처럼 이벤트에 따른 상태 변화를 상태 전이 다이어그램 기반으로 검증합니다."
  },
  {
    "id": 336,
    "subject": "소프트웨어 개발",
    "question": "테스트 계획서나 사전 설계 없이 테스터의 직관과 경험에 기반하여 즉석에서 시스템을 탐색하고 결함을 찾아내는 기법은?",
    "options": [
      "정형 인스펙션",
      "탐색적 테스팅 (Exploratory Testing)",
      "회귀 테스팅",
      "부하 테스팅"
    ],
    "answer_index": 1,
    "explanation": "탐색적 테스팅(Exploratory Testing)은 테스트 설계와 실행, 학습을 동시에 유연하게 수행하는 경험 기반 블랙박스 기법입니다."
  },
  {
    "id": 337,
    "subject": "소프트웨어 개발",
    "question": "시스템 성능 테스트 유형 중 '목표로 하는 정상적인 임계 부하 한계치를 넘어서서 극단적인 가혹 부하를 가해 시스템의 장애 발생 시점과 복구 능력을 측정하는 테스트'는?",
    "options": [
      "스파이크 테스트 (Spike Testing)",
      "부하 테스트 (Load Testing)",
      "스트레스 테스트 (Stress Testing)",
      "내구성 테스트 (Soak Testing)"
    ],
    "answer_index": 2,
    "explanation": "스트레스 테스트는 시스템의 한계 임계치를 초과하는 비정상적인 극한 부하를 인위적으로 주어 시스템의 복원력과 붕괴 거동을 측정합니다."
  },
  {
    "id": 338,
    "subject": "소프트웨어 개발",
    "question": "성능 테스트 중 장시간(수일~수주일) 동안 일정한 부하를 지속적으로 주어 메모리 누수(Memory Leak)나 자원 고갈 여부를 검증하는 테스트는?",
    "options": [
      "단위 테스트",
      "스파이크 테스트",
      "회귀 테스트",
      "내구성/확장 테스트 (Soak Testing / Endurance Testing)"
    ],
    "answer_index": 3,
    "explanation": "Soak(내구성) 테스트는 장시간 시스템을 연속 가동하여 메모리 누수, 세션 누적 등 시간 경과에 따른 성능 저하를 검출합니다."
  },
  {
    "id": 339,
    "subject": "소프트웨어 개발",
    "question": "인접한 두 원소의 대소를 비교하여 조건에 맞지 않으면 자리를 맞바꾸는(Swap) 과정을 반복하며 가장 큰 원소를 맨 뒤로 보내는 정렬 알고리즘은?",
    "options": [
      "버블 정렬 (Bubble Sort)",
      "선택 정렬 (Selection Sort)",
      "삽입 정렬 (Insertion Sort)",
      "기수 정렬 (Radix Sort)"
    ],
    "answer_index": 0,
    "explanation": "버블 정렬은 인접한 두 값을 비교해 교환하면서 거품이 수면으로 올라오듯 매 회전마다 가장 큰 값이 우측 끝으로 이동합니다."
  },
  {
    "id": 340,
    "subject": "소프트웨어 개발",
    "question": "정렬되지 않은 데이터 중 최솟값을 찾아 정렬되지 않은 부분의 가장 앞자리 원소와 교환하는 과정을 반복하는 정렬 방식은?",
    "options": [
      "삽입 정렬 (Insertion Sort)",
      "선택 정렬 (Selection Sort)",
      "버블 정렬 (Bubble Sort)",
      "병합 정렬 (Merge Sort)"
    ],
    "answer_index": 1,
    "explanation": "선택 정렬(Selection Sort)은 매 회전마다 최소값을 '선택'하여 정렬되지 않은 앞쪽 위치에 배치합니다."
  },
  {
    "id": 341,
    "subject": "소프트웨어 개발",
    "question": "삽입 정렬의 단점을 보완하여 원소들을 일정한 간격(Gap)으로 묶어 부분 정렬한 뒤 점차 간격을 줄여나가는 정렬 알고리즘은?",
    "options": [
      "힙 정렬",
      "퀵 정렬",
      "쉘 정렬 (Shell Sort)",
      "기수 정렬"
    ],
    "answer_index": 2,
    "explanation": "쉘 정렬(Shell Sort)은 삽입 정렬이 거의 정렬된 배열에서 매우 빠르다는 점을 응용하여 간격(h) 단위로 삽입 정렬을 반복합니다."
  },
  {
    "id": 342,
    "subject": "소프트웨어 개발",
    "question": "원소 간의 대소 비교를 일절 수행하지 않고 원소의 자릿수(Digit)나 큐(Queue) 버킷을 활용하여 정렬하는 알고리즘은?",
    "options": [
      "선택 정렬",
      "퀵 정렬",
      "힙 정렬",
      "기수 정렬 (Radix Sort)"
    ],
    "answer_index": 3,
    "explanation": "기수 정렬(Radix Sort)은 1의 자리, 10의 자리 순으로 버킷에 분배/수집하며 시간 복잡도 O(dn)을 가집니다."
  },
  {
    "id": 343,
    "subject": "소프트웨어 개발",
    "question": "이진 탐색 트리(BST, Binary Search Tree)에서 특정 노드를 기준으로 왼쪽 서브트리와 오른쪽 서브트리의 키 값 조건으로 옳은 것은?",
    "options": [
      "왼쪽 서브트리 노드들의 값 < 루트 값 < 오른쪽 서브트리 노드들의 값",
      "루트 값 < 왼쪽 서브트리 값 < 오른쪽 서브트리 값",
      "오른쪽 서브트리 값 < 루트 값 < 왼쪽 서브트리 값",
      "모든 서브트리의 값이 루트 값과 동일해야 한다."
    ],
    "answer_index": 0,
    "explanation": "BST의 기본 속성은 모든 노드에 대해 왼쪽 자식은 자신보다 작고, 오른쪽 자식은 자신보다 큽니다."
  },
  {
    "id": 344,
    "subject": "소프트웨어 개발",
    "question": "자가 균형 이진 탐색 트리인 AVL 트리에서 좌우 서브트리의 높이 차이인 균형 인수(Balance Factor)가 허용되는 범위는?",
    "options": [
      "-2, 0, 2",
      "-1, 0, 1",
      "0, 1, 2",
      "0만 허용"
    ],
    "answer_index": 1,
    "explanation": "AVL 트리는 모든 노드의 왼쪽 서브트리와 오른쪽 서브트리의 높이 차이(BF)를 항상 -1, 0, 1 이하로 유지하도록 회전(LL, RR, LR, RL)합니다."
  },
  {
    "id": 345,
    "subject": "소프트웨어 개발",
    "question": "해시 충돌(Hash Collision) 해결 기법 중 선형 탐사법(Linear Probing)의 주된 단점으로 특정 영역에 연속해서 충돌 데이터가 뭉치는 현상은?",
    "options": [
      "스레싱 (Thrashing)",
      "오버플로 (Overflow)",
      "군집화 / 클러스터링 (Clustering)",
      "단편화 (Fragmentation)"
    ],
    "answer_index": 2,
    "explanation": "선형 탐사는 충돌 시 바로 다음 칸(+1)으로 이동하므로 해시 키가 특정 구간에 빽빽하게 몰리는 일차 군집화(Primary Clustering)가 일어납니다."
  },
  {
    "id": 346,
    "subject": "소프트웨어 개발",
    "question": "가중치 그래프에서 시작 정점부터 시작하여 신장 트리를 점진적으로 확장해 나가는 최소 신장 트리(MST) 알고리즘은?",
    "options": [
      "플로이드-워셜 (Floyd-Warshall) 알고리즘",
      "크루스칼 (Kruskal) 알고리즘",
      "벨만-포드 (Bellman-Ford) 알고리즘",
      "프림 (Prim) 알고리즘"
    ],
    "answer_index": 3,
    "explanation": "프림(Prim) 알고리즘은 하나의 정점에서 시작하여 트리에 인접한 가장 가중치가 작은 간선을 선택해 트리를 넓혀가는 정점 중심 그리디 알고리즘입니다."
  },
  {
    "id": 347,
    "subject": "소프트웨어 개발",
    "question": "단일 출발지 최단 경로 알고리즘 중 간선의 가중치에 음수(Negative)가 포함되어 있을 때에도 최단 경로를 올바르게 계산하고 음수 사이클을 검출할 수 있는 알고리즘은?",
    "options": [
      "벨만-포드 (Bellman-Ford) 알고리즘",
      "다익스트라 (Dijkstra) 알고리즘",
      "프림 (Prim) 알고리즘",
      "크루스칼 (Kruskal) 알고리즘"
    ],
    "answer_index": 0,
    "explanation": "다익스트라는 음수 가중치가 있으면 오동작하지만, 벨만-포드는 O(VE)의 시간으로 음수 가중치 및 음수 사이클을 감지할 수 있습니다."
  },
  {
    "id": 348,
    "subject": "소프트웨어 개발",
    "question": "그래프 상의 '모든 정점 쌍(All Pairs) 간의 최단 경로'를 동적 계획법(DP)을 활용하여 구하는 3중 반복문 기반 O(V^3) 알고리즘은?",
    "options": [
      "다익스트라 알고리즘",
      "플로이드-워셜 (Floyd-Warshall) 알고리즘",
      "벨만-포드 알고리즘",
      "위상 정렬 (Topological Sort)"
    ],
    "answer_index": 1,
    "explanation": "플로이드-워셜(Floyd-Warshall)은 경유지(k) 노드를 거치는 경로를 점화식으로 갱신하여 모든 정점 쌍의 최단 경로 행렬을 계산합니다."
  },
  {
    "id": 349,
    "subject": "소프트웨어 개발",
    "question": "문제를 해결할 때 모든 후보군을 트리 구조로 탐색하다가 특정 조건에 맞지 않으면 즉시 탐색을 중단하고 부모 노드로 되돌아가는 가지치기(Pruning) 기법은?",
    "options": [
      "탐욕법 (Greedy)",
      "분할 정복",
      "백트래킹 (Backtracking)",
      "동적 계획법"
    ],
    "answer_index": 2,
    "explanation": "백트래킹(Backtracking, 되추적)은 DFS 기반 탐색 중 유망하지 않은 경로는 조기에 가지치기(Pruning)하여 N-Queen 등의 완전 탐색 비용을 획기적으로 줄입니다."
  },
  {
    "id": 350,
    "subject": "소프트웨어 개발",
    "question": "Git 브랜치 관리 전략 중 master, develop, feature, release, hotfix 브랜치로 체계화된 모델은?",
    "options": [
      "Trunk-based",
      "GitHub-flow",
      "GitLab-flow",
      "Git-flow"
    ],
    "answer_index": 3,
    "explanation": "Git-flow는 Vincent Driessen이 제안한 전통적인 표준 브랜칭 전략으로 5가지 고정 브랜치를 두어 출시와 핫픽스를 체계적으로 관리합니다."
  },
  {
    "id": 351,
    "subject": "소프트웨어 개발",
    "question": "무중단 배포(Zero-downtime Deployment) 방식 중 '운영 환경(Blue)과 동일한 신규 버전 환경(Green)을 완전히 별도로 띄운 뒤 라우터 스위칭으로 한 번에 전환하는 방식'은?",
    "options": [
      "블루-그린 배포 (Blue-Green Deployment)",
      "카나리 배포 (Canary Deployment)",
      "롤링 배포 (Rolling Deployment)",
      "빅뱅 배포"
    ],
    "answer_index": 0,
    "explanation": "블루-그린 배포는 구버전(Blue)과 신버전(Green) 두 세트를 동시에 운영하면서 로드밸런서의 라우팅 대상만 순간 교체하여 다운타임을 없앱니다."
  },
  {
    "id": 352,
    "subject": "소프트웨어 개발",
    "question": "무중단 배포 방식 중 '전체 트래픽의 일부(예: 5% -> 10% -> 50%)만 신규 버전으로 점진적으로 흘려보내며 오류를 모니터링한 뒤 전체로 확장하는 방식'은?",
    "options": [
      "블루-그린 배포",
      "카나리 배포 (Canary Deployment)",
      "롤링 배포",
      "재부팅 배포"
    ],
    "answer_index": 1,
    "explanation": "카나리(Canary) 배포는 광산의 카나리아 새처럼 소수의 사용자 트래픽으로 안전성을 먼저 검증한 뒤 점진적으로 배포 비율을 올리는 기법입니다."
  },
  {
    "id": 353,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트에서 테스트를 수행하기 위해 사전에 정의된 '입력값, 실행 조건, 기대 결과'의 집합을 무엇이라 하는가?",
    "options": [
      "테스트 오라클",
      "테스트 스크립트",
      "테스트 케이스 (Test Case)",
      "테스트 하네스"
    ],
    "answer_index": 2,
    "explanation": "테스트 케이스(Test Case)는 특정 프로그램 경로를 실행하거나 특정 요구사항을 검증하기 위해 개발된 입력값, 사전 조건, 실행 조건, 예상 결과의 집합입니다."
  },
  {
    "id": 354,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 결함 관리 지표 중 '테스트 중 발견된 결함이 수정된 후 다시 동일한 결함으로 재오픈(Reopen)되는 비율'을 의미하는 것은?",
    "options": [
      "결함 에이징",
      "결함 밀도 (Defect Density)",
      "결함 심각도",
      "결함 재발률 (Defect Reopen Rate)"
    ],
    "answer_index": 3,
    "explanation": "결함 재발률은 한 번 해결(Resolved) 판정되었던 버그가 검증 실패로 다시 열리는 비율로, 개발 수정의 품질을 평가하는 척도입니다."
  },
  {
    "id": 355,
    "subject": "소프트웨어 개발",
    "question": "동적 계획법(DP)의 필수 전제 조건 2가지로 옳은 것은?",
    "options": [
      "최적 부분 구조 (Optimal Substructure)와 중복되는 부분 문제 (Overlapping Subproblems)",
      "그리디 선택 속성과 무작위성",
      "완전 이진 트리와 힙 속성",
      "정렬된 배열과 분할 정복"
    ],
    "answer_index": 0,
    "explanation": "동적 계획법은 1) 부분 문제의 최적해가 전체 문제의 최적해가 되는 최적 부분 구조와 2) 동일한 계산이 반복되는 중복 부분 문제가 있을 때 성립합니다."
  },
  {
    "id": 356,
    "subject": "소프트웨어 개발",
    "question": "자료구조 트리(Tree)에서 자식 노드가 전혀 없는 단말 노드를 가리키는 용어는?",
    "options": [
      "루트 노드 (Root Node)",
      "리프 노드 (Leaf Node)",
      "내부 노드 (Internal Node)",
      "조상 노드 (Ancestor Node)"
    ],
    "answer_index": 1,
    "explanation": "차수(Degree)가 0인 노드, 즉 자식 노드가 없는 노드를 잎 노드(Leaf Node) 또는 단말 노드(Terminal Node)라 부릅니다."
  },
  {
    "id": 357,
    "subject": "소프트웨어 개발",
    "question": "그래프의 모든 정점을 방문하되, 방향 그래프에서 모든 간선 (u, v)에 대해 u가 v보다 앞서 나오도록 정점들을 일렬로 나열하는 알고리즘은?",
    "options": [
      "버블 정렬",
      "이진 정렬",
      "위상 정렬 (Topological Sort)",
      "힙 정렬"
    ],
    "answer_index": 2,
    "explanation": "위상 정렬(Topological Sort)은 사이클이 없는 방향 그래프(DAG)에서 선후 관계(의존성)를 보존하며 정점들을 순서대로 나열하는 알고리즘입니다."
  },
  {
    "id": 358,
    "subject": "소프트웨어 개발",
    "question": "스택 메모리 영역에서 할당된 버퍼 크기보다 더 많은 데이터를 무리하게 입력하여 함수 복귀 주소(RET)를 조작하는 해킹 기법은?",
    "options": [
      "SQL 인젝션",
      "힙 오버플로",
      "메모리 누수",
      "스택 버퍼 오버플로 (Stack Buffer Overflow)"
    ],
    "answer_index": 3,
    "explanation": "스택 버퍼 오버플로는 경계 검사가 미흡한 함수(strcpy 등)를 통해 스택의 반환 주소(Return Address)를 악성 쉘코드가 있는 주소로 덮어쓰는 공격입니다."
  },
  {
    "id": 359,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 결함 분석에서 릴리즈 전 단계까지 수정되지 않고 다음 버전으로 이월(Postpone)하기로 결정된 결함 상태는?",
    "options": [
      "Deferred (보류/연기)",
      "Closed",
      "Rejected",
      "Fixed"
    ],
    "answer_index": 0,
    "explanation": "Deferred는 심각도가 낮거나 일정/비용 상의 이유로 이번 배포에서는 조치를 보류하고 차기 버전으로 이관된 상태입니다."
  },
  {
    "id": 360,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트를 수행하기 위해 테스트 대상 컴포넌트를 둘러싸고 있는 가상 드라이버, 스텁, 테스트 베드 등의 보조 소프트웨어 프레임워크를 총칭하는 용어는?",
    "options": [
      "테스트 오라클",
      "테스트 하네스 (Test Harness)",
      "테스트 케이스",
      "테스트 스위트"
    ],
    "answer_index": 1,
    "explanation": "테스트 하네스(Test Harness)는 테스트를 실행하고 결과를 수집할 수 있도록 드라이버, 스텁, 어설션 라이브러리를 포괄하는 지원 환경 도구입니다."
  },
  {
    "id": 361,
    "subject": "데이터베이스 구축",
    "question": "데이터 모델(Data Model)을 구성하는 3대 핵심 요소에 해당하지 않는 것은?",
    "options": [
      "연산 (Operation)",
      "구조 (Structure)",
      "논리 (Logic)",
      "제약조건 (Constraint)"
    ],
    "answer_index": 2,
    "explanation": "데이터 모델 3대 요소는 1) 구조(Structure, 데이터 표현 형태), 2) 연산(Operation, 값 조작 방법), 3) 제약조건(Constraint, 무결성 규칙)입니다."
  },
  {
    "id": 362,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 3단계 스키마 중 '조직 전체의 관점에서 모든 개체, 관계, 보안 제약조건을 기술한 단 하나의 전사적 통합 논리 스키마'는?",
    "options": [
      "물리 스키마",
      "외부 스키마 (External Schema)",
      "내부 스키마 (Internal Schema)",
      "개념 스키마 (Conceptual Schema)"
    ],
    "answer_index": 3,
    "explanation": "개념 스키마(Conceptual Schema)는 전체 데이터베이스의 논리적 구조로 범기관적 입장에서 모든 데이터의 구조와 무결성 제약을 정의합니다."
  },
  {
    "id": 363,
    "subject": "데이터베이스 구축",
    "question": "어떤 릴레이션의 차수(Degree)가 4이고 카디널리티(Cardinality)가 10일 때, 튜플 2개를 추가하고 속성 1개를 새로 추가한 후의 차수와 카디널리티는?",
    "options": [
      "차수 5, 카디널리티 12",
      "차수 6, 카디널리티 10",
      "차수 12, 카디널리티 5",
      "차수 4, 카디널리티 12"
    ],
    "answer_index": 0,
    "explanation": "차수는 속성(열)의 개수이므로 4 + 1 = 5, 카디널리티는 튜플(행)의 개수이므로 10 + 2 = 12 입니다."
  },
  {
    "id": 364,
    "subject": "데이터베이스 구축",
    "question": "릴레이션의 키(Key) 중 '유일성은 만족하지만 최소성은 만족하지 못하는 키'는?",
    "options": [
      "후보키 (Candidate Key)",
      "슈퍼키 (Super Key)",
      "기본키 (Primary Key)",
      "대체키 (Alternate Key)"
    ],
    "answer_index": 1,
    "explanation": "슈퍼키는 튜플을 유일하게 식별할 수 있지만 불필요한 속성이 포함되어 최소성을 갖추지 못한 키의 집합입니다."
  },
  {
    "id": 365,
    "subject": "데이터베이스 구축",
    "question": "후보키(Candidate Key) 중 기본키(Primary Key)로 선택되지 못하고 남은 나머지 후보키들을 가리키는 용어는?",
    "options": [
      "슈퍼키 (Super Key)",
      "외래키 (Foreign Key)",
      "대체키 (Alternate Key)",
      "인덱스키 (Index Key)"
    ],
    "answer_index": 2,
    "explanation": "대체키(Alternate Key)는 보조키라고도 하며 기본키로 지정되지 않은 나머지 후보키들을 의미합니다."
  },
  {
    "id": 366,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 무결성 제약조건 중 '테이블의 특정 속성에 입력되는 데이터의 타입, 길이, 허용값 범위(예: 나이는 0 이상)를 규정하는 제약조건'은?",
    "options": [
      "키 무결성",
      "개체 무결성 (Entity Integrity)",
      "참조 무결성 (Referential Integrity)",
      "도메인 무결성 (Domain Integrity)"
    ],
    "answer_index": 3,
    "explanation": "도메인 무결성은 특정 컬럼에 입력되는 값들이 사전 정의된 데이터 타입, NULL 허용 여부, CHECK 범위 등을 준수해야 함을 의미합니다."
  },
  {
    "id": 367,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 정규화에서 제1정규형(1NF)을 만족하기 위한 필수 요건은?",
    "options": [
      "릴레이션의 모든 속성 값이 더 이상 분해될 수 없는 원자값(Atomic Value)이어야 한다.",
      "부분 함수 종속을 제거해야 한다.",
      "이행적 함수 종속을 제거해야 한다.",
      "결정자가 후보키여야 한다."
    ],
    "answer_index": 0,
    "explanation": "제1정규형(1NF)은 도메인이 원자값으로만 구성되어 반복 그룹이나 다중값 컬럼이 없어야 합니다."
  },
  {
    "id": 368,
    "subject": "데이터베이스 구축",
    "question": "관계대수 연산자 중 두 릴레이션 R(차수 3, 튜플 4개)과 S(차수 2, 튜플 5개)에 대해 카티션 프로덕트(R × S)를 수행한 결과 릴레이션의 차수와 카디널리티는?",
    "options": [
      "차수 6, 카디널리티 9",
      "차수 5, 카디널리티 20",
      "차수 5, 카디널리티 9",
      "차수 6, 카디널리티 20"
    ],
    "answer_index": 1,
    "explanation": "카티션 프로덕트의 결과 차수는 덧셈(3 + 2 = 5), 카디널리티는 곱셈(4 × 5 = 20)이 됩니다."
  },
  {
    "id": 369,
    "subject": "데이터베이스 구축",
    "question": "관계대수 연산자 중 릴레이션 R과 S에 대해 S의 모든 튜플과 관련을 맺고 있는 R의 튜플 속성값들을 구하는 연산자는?",
    "options": [
      "프로젝트 (Project, π)",
      "조인 (Join, ⋈)",
      "디비전 (Division, ÷)",
      "셀렉트 (Select, σ)"
    ],
    "answer_index": 2,
    "explanation": "디비전(÷) 연산자는 '모든 과목을 수강한 학생'처럼 나누는 릴레이션 S의 모든 튜플을 포함하는 R의 속성값을 추출합니다."
  },
  {
    "id": 370,
    "subject": "데이터베이스 구축",
    "question": "SQL SELECT 질의문에서 특정 컬럼의 값이 NULL인 경우 지정한 기본값으로 변환해 주는 ANSI 표준 함수는?",
    "options": [
      "DECODE",
      "NULLIF",
      "COUNT",
      "COALESCE"
    ],
    "answer_index": 3,
    "explanation": "COALESCE(col, '기본값')는 나열된 인자 중 NULL이 아닌 첫 번째 값을 반환하는 표준 함수입니다."
  },
  {
    "id": 371,
    "subject": "데이터베이스 구축",
    "question": "조인(JOIN) 연산 중 '조건에 일치하는 행뿐만 아니라, 왼쪽 테이블의 모든 행을 보존하고 오른쪽 테이블에 매칭되는 데이터가 없으면 NULL로 채워 출력하는 조인'은?",
    "options": [
      "LEFT OUTER JOIN",
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "CROSS JOIN"
    ],
    "answer_index": 0,
    "explanation": "LEFT OUTER JOIN은 왼쪽 기준 테이블의 모든 행을 누락 없이 출력하고 우측에 일치하는 데이터가 없으면 NULL을 채웁니다."
  },
  {
    "id": 372,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션(Transaction)의 생명주기 상태 중 '트랜잭션의 마지막 연산까지 정상적으로 실행된 직후, 커밋 직전의 상태'는?",
    "options": [
      "활동 (Active)",
      "부분 완료 (Partially Committed)",
      "완료 (Committed)",
      "실패 (Failed)"
    ],
    "answer_index": 1,
    "explanation": "마지막 연산이 끝난 직후 아직 디스크 영구 기록(Commit)이 완료되지 않은 단계를 부분 완료(Partially Committed)라고 합니다."
  },
  {
    "id": 373,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션 격리 수준 중 '다른 트랜잭션이 아직 커밋하지 않은 미확정 변경 데이터를 읽는 현상(Dirty Read)'만을 차단하는 격리 수준은?",
    "options": [
      "Repeatable Read",
      "Read Uncommitted",
      "Read Committed",
      "Serializable"
    ],
    "answer_index": 2,
    "explanation": "Read Committed는 커밋된 데이터만 읽도록 보장하여 Dirty Read를 방지하며 오라클, PostgreSQL 등의 기본 격리 수준입니다."
  },
  {
    "id": 374,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션 격리 수준 중 '하나의 트랜잭션 내에서 동일한 레코드를 반복 조회했을 때 다른 트랜잭션의 수정/커밋으로 인해 값이 달라지는 비반복 읽기(Non-repeatable Read)'를 방지하는 수준은?",
    "options": [
      "Snapshot Uncommitted",
      "Read Committed",
      "Read Uncommitted",
      "Repeatable Read"
    ],
    "answer_index": 3,
    "explanation": "Repeatable Read는 트랜잭션 시작 시점의 스냅샷을 일관되게 제공하여 Non-repeatable Read를 방지합니다 (MySQL InnoDB 기본값)."
  },
  {
    "id": 375,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 회복 관리에서 시스템 주기마다 메모리의 변경 블록을 디스크에 강제 플러시하고 체크포인트 레코드를 기록하여 장애 복구 시 탐색 범위를 단축하는 기법은?",
    "options": [
      "검사점 / 체크포인트 기법 (Checkpointing)",
      "지연 갱신 기법",
      "즉시 갱신 기법",
      "로그 덤프 기법"
    ],
    "answer_index": 0,
    "explanation": "체크포인트(검사점) 기법은 검사점 이전의 완료 트랜잭션은 회복 작업에서 제외시켜 복구 시간을 획기적으로 줄여줍니다."
  },
  {
    "id": 376,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 인덱스 구조 중 B-Tree의 변형으로 '모든 키와 실제 레코드 포인터가 최하위 리프 노드에만 저장되고, 리프 노드끼리 양방향 연결 리스트로 연결되어 순차 검색이 매우 빠른 인덱스'는?",
    "options": [
      "B*Tree 인덱스",
      "B+Tree 인덱스",
      "해시 인덱스",
      "비트맵 인덱스"
    ],
    "answer_index": 1,
    "explanation": "B+Tree는 리프 노드에만 데이터 포인터를 저장하고 리프 간 시퀀셜 링크를 두어 범위 검색(Range Scan) 성능을 극대화합니다."
  },
  {
    "id": 377,
    "subject": "데이터베이스 구축",
    "question": "데이터 웨어하우스(DW)나 대용량 분석 환경에서 성별(남/여), 결혼여부처럼 값의 고유 종류(Cardinality)가 적은 컬럼에 적합한 인덱스는?",
    "options": [
      "역방향 인덱스",
      "클러스터드 B-Tree 인덱스",
      "비트맵 인덱스 (Bitmap Index)",
      "함수 기반 인덱스"
    ],
    "answer_index": 2,
    "explanation": "비트맵 인덱스(Bitmap Index)는 각 고유값을 0과 1의 비트열로 표현하여 AND/OR 비트 연산으로 대용량 데이터를 고속 필터링합니다."
  },
  {
    "id": 378,
    "subject": "데이터베이스 구축",
    "question": "물리적 데이터베이스 설계에서 가변 길이 문자열을 저장하기 위해 사용하는 표준 데이터 타입은?",
    "options": [
      "INTEGER",
      "CHAR",
      "BLOB",
      "VARCHAR"
    ],
    "answer_index": 3,
    "explanation": "CHAR는 지정한 바이트만큼 공백을 채우는 고정형이며, VARCHAR는 실제 입력된 문자열 길이만큼만 디스크를 사용하는 가변형입니다."
  },
  {
    "id": 379,
    "subject": "데이터베이스 구축",
    "question": "데이터 마이닝(Data Mining) 기법 중 '장바구니 분석(Market Basket Analysis)처럼 맥주를 사는 고객이 기저귀를 함께 구매하는 규칙'과 같이 항목 간의 상관관계를 도출하는 기법은?",
    "options": [
      "연관 규칙 분석 (Association Rule)",
      "분류 분석 (Classification)",
      "군집 분석 (Clustering)",
      "회귀 분석 (Regression)"
    ],
    "answer_index": 0,
    "explanation": "연관 분석(Association Rule Mining, 지지도/신뢰도/향상도)은 데이터 항목 간의 동시 발생 패턴과 유의미한 연관성을 발견합니다."
  },
  {
    "id": 380,
    "subject": "데이터베이스 구축",
    "question": "데이터 마이닝 기법 중 사전 정답 레이블(Label)이 없는 상태에서 데이터 객체 간의 유사도를 측정하여 유사한 특성을 가진 군집으로 묶는 비지도 학습 기법은?",
    "options": [
      "의사결정나무 (Decision Tree)",
      "군집화 (Clustering)",
      "인공신경망 (ANN)",
      "로지스틱 회귀"
    ],
    "answer_index": 1,
    "explanation": "군집화(Clustering, K-Means 등)는 라벨 없이 특성의 기하학적 유사성만을 기준으로 데이터를 클러스터로 군집화합니다."
  },
  {
    "id": 381,
    "subject": "데이터베이스 구축",
    "question": "SQL 질의문에서 두 컬럼의 값이 같으면 NULL을 반환하고, 서로 다르면 첫 번째 컬럼 값을 반환하는 표준 함수는?",
    "options": [
      "NVL",
      "COALESCE",
      "NULLIF",
      "ISNULL"
    ],
    "answer_index": 2,
    "explanation": "NULLIF(expr1, expr2)는 두 인수가 같으면 NULL을, 다르면 expr1을 반환합니다."
  },
  {
    "id": 382,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터 모델에서 하나의 애트리뷰트(속성)가 취할 수 있는 모든 원자값들의 유효한 집합을 무엇이라 하는가?",
    "options": [
      "튜플 (Tuple)",
      "카디널리티 (Cardinality)",
      "차수 (Degree)",
      "도메인 (Domain)"
    ],
    "answer_index": 3,
    "explanation": "도메인(Domain)은 특정 속성이 가질 수 있는 원자값들의 타입 및 허용 범위 집합(예: 성별 도메인은 '남', '여')입니다."
  },
  {
    "id": 383,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 회복(Recovery) 기법 중 트랜잭션의 갱신 내용을 버퍼에만 보관하고 커밋 전까지는 디스크 반영을 지연시키며, 장애 발생 시 Undo가 전혀 필요 없는 기법은?",
    "options": [
      "지연 갱신 기법 (Deferred Update)",
      "즉시 갱신 기법 (Immediate Update)",
      "그림자 페이징 기법",
      "검사점 기법"
    ],
    "answer_index": 0,
    "explanation": "지연 갱신(Deferred Update)은 커밋될 때까지 DB 물리 쓰기를 미루므로 장애 시 미완료 작업은 무시하면 되어 Undo 작업이 필요 없습니다."
  },
  {
    "id": 384,
    "subject": "데이터베이스 구축",
    "question": "SQL의 집계 함수 중 NULL 값을 가진 행을 계산 대상에서 제외하지 않고 모든 행을 카운트하는 표현식은?",
    "options": [
      "COUNT(column_name)",
      "COUNT(*)",
      "SUM(column_name)",
      "AVG(column_name)"
    ],
    "answer_index": 1,
    "explanation": "COUNT(*)는 행 전체를 대상으로 카운트하므로 컬럼 내 NULL 포함 여부와 무관하게 전체 행 수를 반환합니다."
  },
  {
    "id": 385,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터베이스 정규화 과정 중 다치 종속(MVD: Multivalued Dependency)을 제거하여 만족하는 정규형은?",
    "options": [
      "BCNF",
      "제3정규형 (3NF)",
      "제4정규형 (4NF)",
      "제5정규형 (5NF)"
    ],
    "answer_index": 2,
    "explanation": "제4정규형(4NF)은 BCNF를 만족하고 함수 종속이 아닌 다치 종속(A ->-> B)을 제거하는 정규화 단계입니다."
  },
  {
    "id": 386,
    "subject": "데이터베이스 구축",
    "question": "정규화의 마지막 단계로 조인 종속성(Join Dependency)을 제거하여 무손실 분해를 보장하는 정규형은?",
    "options": [
      "제3정규형 (3NF)",
      "제4정규형 (4NF)",
      "BCNF",
      "제5정규형 (5NF, PJ/NF)"
    ],
    "answer_index": 3,
    "explanation": "제5정규형(5NF)은 투영-조인 정규형(PJ/NF)이라고도 하며 릴레이션의 모든 조인 종속이 후보키를 통해서만 성립하도록 분해합니다."
  },
  {
    "id": 387,
    "subject": "데이터베이스 구축",
    "question": "SQL에서 트랜잭션의 변경 내용을 취소하고 트랜잭션 시작 이전의 상태로 롤백할 때 사용하는 제어어는?",
    "options": [
      "ROLLBACK",
      "COMMIT",
      "SAVEPOINT",
      "REVOKE"
    ],
    "answer_index": 0,
    "explanation": "ROLLBACK은 트랜잭션이 수행한 모든 DML 변경사항을 취소하고 원상태로 복귀시키는 DCL/TCL 명령어입니다."
  },
  {
    "id": 388,
    "subject": "데이터베이스 구축",
    "question": "SQL문 실행 시 트랜잭션 내부에서 특정 중간 지점까지 부분 롤백할 수 있도록 지정하는 위치 표시자는?",
    "options": [
      "CHECKPOINT",
      "SAVEPOINT",
      "BOOKMARK",
      "BREAKPOINT"
    ],
    "answer_index": 1,
    "explanation": "SAVEPOINT(저장점)를 생성하면 ROLLBACK TO SAVEPOINT_NAME 구문을 통해 전체가 아닌 지정 지점까지만 선택 취소할 수 있습니다."
  },
  {
    "id": 389,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 성능 개선을 위한 옵티마이저(Optimizer) 중 사전에 정해진 규칙(우선순위, 인덱스 유무 등)에 따라 실행 계획을 수립하는 방식은?",
    "options": [
      "휴리스틱 옵티마이저",
      "비용 기반 옵티마이저 (CBO, Cost-Based Optimizer)",
      "규칙 기반 옵티마이저 (RBO, Rule-Based Optimizer)",
      "통계 기반 옵티마이저"
    ],
    "answer_index": 2,
    "explanation": "RBO는 고정된 15단계 우선순위 규칙에 따라 경로를 선택하며, CBO는 테이블 통계(카디널리티, 블록 수)를 바탕으로 최소 비용을 예측합니다."
  },
  {
    "id": 390,
    "subject": "데이터베이스 구축",
    "question": "두 개 이상의 컬럼을 결합하여 복합 인덱스(Composite Index)를 구성할 때, 인덱스 선두 컬럼으로 가장 적합한 것은?",
    "options": [
      "NULL 값이 대부분인 컬럼",
      "카디널리티가 가장 낮은 컬럼",
      "SELECT 절에만 등장하고 WHERE 절에는 없는 컬럼",
      "WHERE 조건절에 '='(동등 비교) 조건으로 가장 자주 사용되는 컬럼"
    ],
    "answer_index": 3,
    "explanation": "복합 인덱스는 WHERE 절의 선두 컬럼 조건이 일치해야 인덱스 레인지 스캔을 탈 수 있으므로 동등 조건(=) 빈출 컬럼을 선두에 배치해야 합니다."
  },
  {
    "id": 391,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 함수 내부에서 선언되었지만 함수가 종료되어도 메모리(Data 영역)에서 소멸하지 않고 프로그램 종료 시까지 값을 유지하는 변수는?",
    "options": [
      "정적 변수 (static variable)",
      "지역 변수 (local variable)",
      "레지스터 변수 (register variable)",
      "매크로 상수"
    ],
    "answer_index": 0,
    "explanation": "static 지역 변수는 데이터 영역에 영구 할당되어 함수가 반환되어도 소멸하지 않고 이전 값을 유지합니다."
  },
  {
    "id": 392,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어 포인터 선언 중 'const int *p' 와 'int * const p'의 차이점으로 옳은 것은?",
    "options": [
      "const int *p는 포인터 주소를 바꿀 수 없다.",
      "const int *p는 포인터가 가리키는 값을 변경할 수 없고, int * const p는 포인터 자체의 주소값을 변경할 수 없다.",
      "둘 다 완전히 동일한 동작을 수행한다.",
      "int * const p는 가리키는 대상의 값을 변경할 수 없다."
    ],
    "answer_index": 1,
    "explanation": "const int *p(상수 지시 포인터)는 역참조 값(*p) 수정 불가, int * const p(상수 포인터)는 포인터 주소(p) 수정 불가입니다."
  },
  {
    "id": 393,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 'final' 키워드가 메서드(Method)에 붙었을 때의 의미는?",
    "options": [
      "해당 메서드가 정적(static) 메서드가 된다.",
      "해당 메서드를 상속받을 수 없다.",
      "하위 클래스에서 해당 메서드를 오버라이딩(Overriding)할 수 없다.",
      "해당 메서드가 메모리에서 즉시 해제된다."
    ],
    "answer_index": 2,
    "explanation": "final 변수는 상수화(재할당 불가), final 메서드는 재정의(오버라이딩 불가), final 클래스는 상속 금지입니다."
  },
  {
    "id": 394,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 대용량 데이터를 한꺼번에 메모리에 올리지 않고 'yield' 키워드를 통해 필요할 때마다 값을 하나씩 지연 생성하는 객체는?",
    "options": [
      "람다 (Lambda)",
      "데코레이터 (Decorator)",
      "이터러블 (Iterable)",
      "제너레이터 (Generator)"
    ],
    "answer_index": 3,
    "explanation": "제너레이터(Generator)는 yield를 사용하여 이터레이터를 생성하며 지연 평가(Lazy Evaluation)로 대용량 메모리 효율을 극대화합니다."
  },
  {
    "id": 395,
    "subject": "프로그래밍 언어 활용",
    "question": "CPU 스케줄링의 평가 척도 중 '작업이 준비 큐에 도착하여 실행을 마치고 완전히 종료될 때까지 소요된 총시간'을 의미하는 것은?",
    "options": [
      "반환 시간 (Turnaround Time)",
      "대기 시간 (Waiting Time)",
      "응답 시간 (Response Time)",
      "실행 시간 (Burst Time)"
    ],
    "answer_index": 0,
    "explanation": "반환 시간(Turnaround Time) = 종료 시각 - 도착 시각 = 대기 시간 + 실제 실행(서비스) 시간 입니다."
  },
  {
    "id": 396,
    "subject": "프로그래밍 언어 활용",
    "question": "다중 프로그래밍 환경에서 우선순위가 높은 프로세스가 공유 자원을 점유한 낮은 우선순위 프로세스 때문에 블록되고, 중간 우선순위 프로세스가 CPU를 가로채는 역전 현상은?",
    "options": [
      "스레싱 (Thrashing)",
      "우선순위 역전 (Priority Inversion)",
      "교착상태 (Deadlock)",
      "기아 현상 (Starvation)"
    ],
    "answer_index": 1,
    "explanation": "우선순위 역전(Priority Inversion)은 자원 락 대기로 인해 고순위 작업이 지연되는 현상으로 우선순위 상속(Priority Inheritance)으로 해결합니다."
  },
  {
    "id": 397,
    "subject": "프로그래밍 언어 활용",
    "question": "교착상태(Deadlock)의 4대 발생 조건 중 '프로세스들이 필요한 모든 자원에 선형적인 순서를 부여하여 오직 번호가 증가하는 순서로만 자원을 요청하게 함'으로써 깨뜨릴 수 있는 조건은?",
    "options": [
      "점유와 대기 부정",
      "상호 배제 부정",
      "환형 대기 (Circular Wait) 부정",
      "비선점 부정"
    ],
    "answer_index": 2,
    "explanation": "모든 자원에 고유 번호를 매기고 오름차순으로만 자원을 요구하게 강제하면 사이클이 형성되지 않아 환형 대기를 예방할 수 있습니다."
  },
  {
    "id": 398,
    "subject": "프로그래밍 언어 활용",
    "question": "메모리 관리 기법 중 프로세스를 논리적 크기가 서로 다른 가변 크기의 단위(함수, 객체, 배열 등)로 분할하여 적재할 때 발생할 수 있는 주된 단편화는?",
    "options": [
      "페이지 오버플로",
      "내부 단편화 (Internal Fragmentation)",
      "세그먼트 폴트",
      "외부 단편화 (External Fragmentation)"
    ],
    "answer_index": 3,
    "explanation": "세그멘테이션은 가변 크기 블록이므로 블록 내부는 낭비가 없지만 총 빈 공간은 충분해도 연속된 공간이 부족한 외부 단편화가 발생합니다."
  },
  {
    "id": 399,
    "subject": "프로그래밍 언어 활용",
    "question": "가상기억장치 페이지 교체 알고리즘 중 '참조 빈도수가 가장 적은(Least Frequently Used) 페이지를 교체 대상으로 선택하는 알고리즘'은?",
    "options": [
      "LFU (Least Frequently Used)",
      "LRU (Least Recently Used)",
      "FIFO",
      "NUR"
    ],
    "answer_index": 0,
    "explanation": "LFU는 각 페이지의 과거 호출 횟수(Frequency)를 카운트하여 가장 적게 쓰인 페이지를 방출합니다."
  },
  {
    "id": 400,
    "subject": "프로그래밍 언어 활용",
    "question": "프로그램 실행 시 메모리 참조가 일정 시간 동안 특정 주소 영역에 집중되는 현상 중 '최근에 참조된 변수나 명령어가 가까운 미래에 다시 참조될 가능성이 높은 특성'은?",
    "options": [
      "공간 지역성 (Spatial Locality)",
      "시간 지역성 (Temporal Locality)",
      "순차 지역성 (Sequential Locality)",
      "동적 지역성"
    ],
    "answer_index": 1,
    "explanation": "시간 지역성(Temporal Locality)은 루프 변수처럼 한 번 쓰인 메모리가 곧 다시 쓰이는 특성이며, 배열의 연속 원소 참조는 공간 지역성입니다."
  },
  {
    "id": 401,
    "subject": "프로그래밍 언어 활용",
    "question": "프로세스 스케줄링 알고리즘 중 '각 큐마다 서로 다른 우선순위와 타임 슬라이스를 두고, 프로세스가 CPU를 다 쓰면 우선순위가 낮은 하위 큐로 강등시키는 선점형 스케줄링'은?",
    "options": [
      "라운드 로빈",
      "다단계 큐 (Multi-Level Queue)",
      "다단계 피드백 큐 (Multi-Level Feedback Queue)",
      "HRN"
    ],
    "answer_index": 2,
    "explanation": "다단계 피드백 큐(MFQ)는 프로세스가 큐 간을 동적으로 이동할 수 있어 짧은 대화형 작업에 높은 우선순위를 주는 현대 OS의 대표적 스케줄러입니다."
  },
  {
    "id": 402,
    "subject": "프로그래밍 언어 활용",
    "question": "데이터링크 계층(2계층)의 신뢰성 있는 전송 제어 프로토콜 중 비트 지향(Bit-oriented) 동기식 점대점 데이터링크 프로토콜은?",
    "options": [
      "UDP",
      "IP",
      "TCP",
      "HDLC (High-level Data Link Control)"
    ],
    "answer_index": 3,
    "explanation": "HDLC는 01111110 플래그 비트와 비트 스터핑을 사용하는 대표적인 OSI 2계층 비트 지향 프로토콜입니다."
  },
  {
    "id": 403,
    "subject": "프로그래밍 언어 활용",
    "question": "IP 네트워크에서 호스트의 IP 상태 검사(Ping) 및 라우터의 오류 보고 메시지를 전달하기 위해 사용하는 3계층 보조 프로토콜은?",
    "options": [
      "ICMP (Internet Control Message Protocol)",
      "IGMP",
      "ARP",
      "RARP"
    ],
    "answer_index": 0,
    "explanation": "ICMP는 목적지 도달 불가, 시간 초과(TTL 만료), Echo Request/Reply(Ping) 등의 제어/에러 메시지를 전송합니다."
  },
  {
    "id": 404,
    "subject": "프로그래밍 언어 활용",
    "question": "TCP 전송 계층의 슬라이딩 윈도우(Sliding Window) 메커니즘을 통해 실현되는 핵심 제어 기능은?",
    "options": [
      "경로 배정 (Routing)",
      "흐름 제어 (Flow Control)",
      "세션 수립",
      "물리 신호 변환"
    ],
    "answer_index": 1,
    "explanation": "슬라이딩 윈도우는 수신 측의 버퍼 여유 공간(윈도우 크기)을 송신 측에 지속적으로 알려주어 수신자의 오버플로를 막는 흐름 제어(Flow Control) 기술입니다."
  },
  {
    "id": 405,
    "subject": "프로그래밍 언어 활용",
    "question": "사설 IP(Private IP) 주소 대역 중 Class C 에 해당하는 대역은?",
    "options": [
      "172.16.0.0 ~ 172.31.255.255",
      "10.0.0.0 ~ 10.255.255.255",
      "192.168.0.0 ~ 192.168.255.255",
      "127.0.0.0 ~ 127.255.255.255"
    ],
    "answer_index": 2,
    "explanation": "사설 IP 대역: Class A는 10.0.0.0/8, Class B는 172.16.0.0/12, Class C는 192.168.0.0/16 입니다. 127.0.0.1은 루프백 주소입니다."
  },
  {
    "id": 406,
    "subject": "프로그래밍 언어 활용",
    "question": "HTTP 요청 메서드 중 '동일한 요청을 한 번 보내든 여러 번 반복해서 보내든 서버의 상태 결과가 항상 동일함을 의미하는 특성'은?",
    "options": [
      "연결성 (Connection)",
      "안전성 (Safety)",
      "무상태성 (Stateless)",
      "멱등성 (Idempotency)"
    ],
    "answer_index": 3,
    "explanation": "멱등성(Idempotency)은 여러 번 연산을 적용해도 결과가 달라지지 않는 성질로, GET, PUT, DELETE는 멱등하며 POST는 멱등하지 않습니다."
  },
  {
    "id": 407,
    "subject": "프로그래밍 언어 활용",
    "question": "HTTP 상태 코드(Status Code) 중 클라이언트가 요청한 URL 자원을 서버에서 찾을 수 없을 때 반환하는 응답 코드는?",
    "options": [
      "404 Not Found",
      "200 OK",
      "301 Moved Permanently",
      "500 Internal Server Error"
    ],
    "answer_index": 0,
    "explanation": "404 Not Found는 요청한 리소스가 서버에 존재하지 않을 때 브라우저에 반환하는 표준 4xx 클라이언트 오류 코드입니다."
  },
  {
    "id": 408,
    "subject": "프로그래밍 언어 활용",
    "question": "HTTP/2 프로토콜이 이전 HTTP/1.1에 비해 개선된 핵심 기능으로 옳지 않은 것은?",
    "options": [
      "단일 TCP 연결에서 여러 요청/응답을 동시에 처리하는 멀티플렉싱 (Multiplexing)",
      "평문(Plaintext) 텍스트 기반 전송으로 디버깅 용이성 강화",
      "서버가 클라이언트 요청 전에 리소스를 보내는 서버 푸시",
      "HPACK 알고리즘을 통한 헤더 압축"
    ],
    "answer_index": 1,
    "explanation": "HTTP/2는 텍스트가 아닌 바이너리 프레이밍 계층(Binary Framing)을 사용하여 파싱 속도와 전송 효율을 극대화했습니다."
  },
  {
    "id": 409,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 'malloc' 함수로 동적 할당한 힙 메모리를 시스템에 반환하지 않아 프로세스가 종료될 때까지 메모리를 낭비하는 현상은?",
    "options": [
      "버퍼 오버런",
      "세그멘테이션 폴트",
      "메모리 누수 (Memory Leak)",
      "널 포인터 역참조"
    ],
    "answer_index": 2,
    "explanation": "메모리 누수(Memory Leak)는 동적 할당(malloc) 후 free를 호출하지 않아 사용하지 않는 힙 메모리가 점유된 채 낭비되는 결함입니다."
  },
  {
    "id": 410,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 malloc 함수와 calloc 함수의 가장 결정적인 차이점은?",
    "options": [
      "malloc은 동적 크기 변경이 가능하다.",
      "malloc은 메모리를 0으로 초기화한다.",
      "calloc은 스택 메모리를 할당한다.",
      "calloc은 할당된 메모리 공간을 모두 0으로 자동 초기화한다."
    ],
    "answer_index": 3,
    "explanation": "malloc은 쓰레기값 상태로 메모리만 잡지만, calloc(num, size)은 할당된 모든 바이트를 0으로 깨끗이 클리어합니다."
  },
  {
    "id": 411,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 현재 실행 중인 프로세스가 다른 프로세스로 전환될 때 CPU 레지스터와 프로세스 상태를 저장하고 복원하는 과정은?",
    "options": [
      "문맥 교환 (Context Switching)",
      "페이지 폴트 (Page Fault)",
      "시스템 콜 (System Call)",
      "인터럽트 벡터"
    ],
    "answer_index": 0,
    "explanation": "문맥 교환(Context Switching)은 CPU 제어권을 다른 프로세스에 넘길 때 현재 PCB 상태를 저장하고 새 PCB를 로드하는 작업입니다."
  },
  {
    "id": 412,
    "subject": "프로그래밍 언어 활용",
    "question": "네트워크 주소 변환(NAT, Network Address Translation) 기술을 사용하는 주된 목적은?",
    "options": [
      "TCP 패킷의 손실을 0으로 만들기 위해",
      "한정된 공인 IPv4 주소를 절약하고 사설망 내부 IP를 외부에 은닉하여 보안성을 높이기 위해",
      "도메인 이름을 IP 주소로 매핑하기 위해",
      "무선 통신의 전송 거리를 확장하기 위해"
    ],
    "answer_index": 1,
    "explanation": "NAT는 공인 IP 1개로 여러 사설망 기기가 인터넷을 공유할 수 있게 해주어 IPv4 고갈을 완화하고 내부망을 보호합니다."
  },
  {
    "id": 413,
    "subject": "프로그래밍 언어 활용",
    "question": "전송 계층 프로토콜 중 비연결형(Connectionless)이며 오류 복구 및 재전송 오버헤드가 없어 실시간 동영상 스트리밍, DNS 질의 등에 널리 쓰이는 프로토콜은?",
    "options": [
      "IP (Internet Protocol)",
      "TCP (Transmission Control Protocol)",
      "UDP (User Datagram Protocol)",
      "FTP (File Transfer Protocol)"
    ],
    "answer_index": 2,
    "explanation": "UDP는 3-way handshake나 ACK 확인이 없는 단순 데이터그램 프로토콜로 빠른 전송 속도가 중요한 실시간 스트리밍에 쓰입니다."
  },
  {
    "id": 414,
    "subject": "프로그래밍 언어 활용",
    "question": "인터넷 계층의 프로토콜 중 그룹 내의 여러 호스트에게 동일한 패킷을 일괄 전송하는 멀티캐스트(Multicast) 그룹을 관리하는 프로토콜은?",
    "options": [
      "RARP",
      "ICMP",
      "ARP",
      "IGMP (Internet Group Management Protocol)"
    ],
    "answer_index": 3,
    "explanation": "IGMP는 호스트가 로컬 멀티캐스트 라우터에게 자신이 특정 멀티캐스트 그룹에 가입/탈퇴함을 알리는 프로토콜입니다."
  },
  {
    "id": 415,
    "subject": "프로그래밍 언어 활용",
    "question": "OSI 7계층 참조 모델 중 물리적 전송 매체(케이블, 커넥터, 전압 레벨, 비트 신호 등)의 물리적 규격을 정의하는 최하위 계층은?",
    "options": [
      "물리 계층 (Physical Layer, 1계층)",
      "데이터링크 계층 (2계층)",
      "네트워크 계층 (3계층)",
      "세션 계층 (5계층)"
    ],
    "answer_index": 0,
    "explanation": "물리 계층은 전자기적 신호나 광 신호의 비트 단위 전송을 담당하는 최하위 1계층입니다."
  },
  {
    "id": 416,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 객체를 인스턴스화할 때 호출되며 클래스 이름과 동일하고 반환 타입이 없는 특별한 메서드는?",
    "options": [
      "소멸자 (Destructor)",
      "생성자 (Constructor)",
      "정적 메서드 (Static Method)",
      "게터/세터 (Getter/Setter)"
    ],
    "answer_index": 1,
    "explanation": "생성자(Constructor)는 객체가 메모리에 생성될 때 필드 변수를 초기화하기 위해 단 한 번 실행되는 특수 메서드입니다."
  },
  {
    "id": 417,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 두 개의 리스트 원소들을 1:1로 짝지어 튜플의 이터레이터로 묶어주는 내장 함수는?",
    "options": [
      "filter()",
      "map()",
      "zip()",
      "enumerate()"
    ],
    "answer_index": 2,
    "explanation": "zip([1, 2], ['a', 'b']) -> (1, 'a'), (2, 'b') 처럼 동일한 인덱스의 원소들을 순서쌍 튜플로 묶어줍니다."
  },
  {
    "id": 418,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 포인터 변수 선언 시 아무런 메모리 주소도 가리키지 않는 빈 상태를 나타내기 위해 사용하는 상수는?",
    "options": [
      "0xDEAD",
      "EOF",
      "VOID",
      "NULL"
    ],
    "answer_index": 3,
    "explanation": "NULL은 (void *)0 으로 정의된 널 포인터 상수로 유효하지 않은 주소를 명시할 때 할당합니다."
  },
  {
    "id": 419,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 사용자 프로그램이 파일 입출력, 프로세스 생성 등 특권 명령어(커널 모드)를 실행하기 위해 운영체제 커널에 서비스를 요청하는 인터페이스는?",
    "options": [
      "시스템 호출 (System Call)",
      "인터럽트 (Interrupt)",
      "API",
      "소켓 (Socket)"
    ],
    "answer_index": 0,
    "explanation": "시스템 콜(System Call)은 사용자 모드와 커널 모드 간의 안전한 전환 관문으로 하드웨어 제어 기능을 요청하는 표준 통로입니다."
  },
  {
    "id": 420,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 함수 내에서 전역 변수의 값을 직접 수정(재할당)하고자 할 때 사용하는 키워드는?",
    "options": [
      "nonlocal",
      "global",
      "extern",
      "static"
    ],
    "answer_index": 1,
    "explanation": "Python 함수 내부에서 전역 스코프 변수에 새로운 값을 대입하려면 `global var_name` 선언이 필요합니다."
  },
  {
    "id": 421,
    "subject": "정보시스템 구축관리",
    "question": "해커가 시스템 관리자 권한을 탈취한 후 자신의 침투 흔적을 감추고 백도어(Backdoor)를 은닉하기 위해 사용하는 악성 소프트웨어 도구 모음은?",
    "options": [
      "트로이 목마 (Trojan Horse)",
      "키로거 (Keylogger)",
      "루트킷 (Rootkit)",
      "애드웨어 (Adware)"
    ],
    "answer_index": 2,
    "explanation": "루트킷(Rootkit)은 OS 커널이나 시스템 바이너리를 변조하여 프로세스, 파일, 네트워크 연결을 숨겨 관리자가 침해 사실을 인지하지 못하게 합니다."
  },
  {
    "id": 422,
    "subject": "정보시스템 구축관리",
    "question": "공격자가 특정 기업이나 조직을 표적으로 삼고 장기간에 걸쳐 다양한 해킹 기법(사회공학, 제로데이, 악성코드 등)을 총동원하여 지속적으로 정보를 유출하는 위협은?",
    "options": [
      "랜섬웨어",
      "스미싱",
      "DDoS",
      "APT (Advanced Persistent Threat, 지능형 지속 위협)"
    ],
    "answer_index": 3,
    "explanation": "APT 공격은 불특정 다수가 아닌 특정 표적을 정하고 장기간 은밀하게 잠복하며 핵심 기밀을 탈취하는 지능형 고도화 공격입니다."
  },
  {
    "id": 423,
    "subject": "정보시스템 구축관리",
    "question": "표적 공격 대상이 자주 방문하는 특정 웹사이트를 해커가 미리 감염시켜 두고, 표적 사용자가 해당 사이트를 방문할 때 취약점을 이용해 악성코드를 감염시키는 공격은?",
    "options": [
      "워터링 홀 (Watering Hole) 공격",
      "피싱 (Phishing)",
      "스푸핑 (Spoofing)",
      "스니핑 (Sniffing)"
    ],
    "answer_index": 0,
    "explanation": "워터링 홀은 사자가 물웅덩이(Watering Hole) 근처에 매복해 먹이를 기다리듯 표적이 즐겨 찾는 사이트를 오염시켜 감염시키는 기법입니다."
  },
  {
    "id": 424,
    "subject": "정보시스템 구축관리",
    "question": "사용자가 악성 웹사이트를 방문하는 것만으로도 사용자의 동의나 파일 다운로드 클릭 없이 브라우저 취약점을 악용해 자동으로 악성코드가 실행되는 공격은?",
    "options": [
      "트로이 목마",
      "드라이브 바이 다운로드 (Drive-by Download)",
      "피싱",
      "애드웨어"
    ],
    "answer_index": 1,
    "explanation": "드라이브 바이 다운로드는 웹 브라우저나 플러그인 취약점을 악용해 페이지 로딩 시 자동으로 쉘코드를 내려받아 실행합니다."
  },
  {
    "id": 425,
    "subject": "정보시스템 구축관리",
    "question": "메모리 보호 기법 중 프로그램 실행 시마다 스택, 힙, 라이브러리 메모리 주소를 무작위 난수로 배치하여 고정된 버퍼 오버플로 쉘코드 주소 실행을 무력화하는 기법은?",
    "options": [
      "DEP / NX-bit",
      "스택 카나리 (Stack Canary)",
      "ASLR (Address Space Layout Randomization)",
      "세이프 언링크"
    ],
    "answer_index": 2,
    "explanation": "ASLR은 실행할 때마다 프로세스 가상 메모리 주소를 난수화하여 공격자가 고정된 반환 주소나 라이브러리 함수(RTL) 주소를 예측할 수 없게 만듭니다."
  },
  {
    "id": 426,
    "subject": "정보시스템 구축관리",
    "question": "C언어의 printf, sprintf 함수 등에서 서식 문자열(%s, %x, %n 등)을 검증 없이 사용자 입력값으로 직접 사용할 때 발생하는 보안 취약점은?",
    "options": [
      "레이스 컨디션",
      "버퍼 오버플로",
      "정수 오버플로",
      "포맷 스트링 취약점 (Format String Vulnerability)"
    ],
    "answer_index": 3,
    "explanation": "포맷 스트링 취약점은 `printf(user_input)` 처럼 포맷을 직접 전달할 때 %x로 메모리를 훔쳐보거나 %n으로 메모리를 조작할 수 있는 취약점입니다."
  },
  {
    "id": 427,
    "subject": "정보시스템 구축관리",
    "question": "보안 모델 중 '군사적 기밀 유지를 목적으로 하며, 자신의 권한보다 높은 보안 등급의 문서는 읽을 수 없고(No Read Up), 낮은 등급에는 쓸 수 없다(No Write Down)'는 규칙을 가진 모델은?",
    "options": [
      "벨-라파듈라 모델 (Bell-LaPadula Model, BLP)",
      "비바 모델 (Biba Model)",
      "클락-윌슨 모델",
      "만리장성 모델"
    ],
    "answer_index": 0,
    "explanation": "벨-라파듈라(BLP) 모델은 기밀성 보장이 목적으로 단순 보안 속성(No Read Up)과 스타 보안 속성(No Write Down)을 규정합니다."
  },
  {
    "id": 428,
    "subject": "정보시스템 구축관리",
    "question": "보안 모델 중 '데이터의 무결성(Integrity) 보장을 목적으로 하며, 자신보다 낮은 무결성 등급의 문서는 읽을 수 없고(No Read Down), 높은 등급에는 쓸 수 없다(No Write Up)'는 규칙을 가진 모델은?",
    "options": [
      "벨-라파듈라 모델",
      "비바 모델 (Biba Model)",
      "접근 행렬 모델",
      "역할 기반 모델"
    ],
    "answer_index": 1,
    "explanation": "비바(Biba) 모델은 BLP 모델의 수학적 쌍대(Dual) 모델로, 오염된 데이터의 유입을 막기 위해 무결성을 엄격히 통제합니다."
  },
  {
    "id": 429,
    "subject": "정보시스템 구축관리",
    "question": "공개키(비대칭키) 암호 알고리즘 중 RSA보다 훨씬 짧은 키 길이(256비트)로 RSA 3072비트와 동등한 강력한 보안 강도를 제공하여 모바일 환경에 적합한 알고리즘은?",
    "options": [
      "AES",
      "DES",
      "ECC (Elliptic Curve Cryptography, 타원곡선 암호)",
      "IDEA"
    ],
    "answer_index": 2,
    "explanation": "ECC는 타원곡선 이산로그 문제의 난해성에 기반하여 연산 효율과 키 길이가 짧아 TLS 인증서나 스마트폰 등 경량 환경에 널리 쓰입니다."
  },
  {
    "id": 430,
    "subject": "정보시스템 구축관리",
    "question": "암호학적 해시 함수의 특성 중 '해시값 H(M)이 주어졌을 때 원본 메시지 M을 역으로 찾아내는 것이 계산상 불가능해야 한다'는 특성은?",
    "options": [
      "가역성",
      "제2 역상 저항성",
      "충돌 저항성",
      "역상 저항성 (Pre-image Resistance, 단방향성)"
    ],
    "answer_index": 3,
    "explanation": "역상 저항성은 단방향(One-way) 암호화의 핵심으로 결과 해시값만 보고 입력 원문을 복원하는 것이 불가능해야 함을 뜻합니다."
  },
  {
    "id": 431,
    "subject": "정보시스템 구축관리",
    "question": "해커나 악성 침입자를 유인하기 위해 실제 프로덕션 서버와 동일하게 꾸며놓은 가상의 유인 미끼 시스템을 가리키는 용어는?",
    "options": [
      "허니팟 (Honeypot)",
      "방화벽 (Firewall)",
      "샌드박스 (Sandbox)",
      "프록시 (Proxy)"
    ],
    "answer_index": 0,
    "explanation": "허니팟(Honeypot)은 일부러 취약점을 열어두어 공격자의 침투 수법과 제로데이 악성코드를 수집하고 분석하는 함정 시스템입니다."
  },
  {
    "id": 432,
    "subject": "정보시스템 구축관리",
    "question": "다양한 보안 장비(방화벽, IDS, WAF 등)와 서버에서 발생하는 방대한 보안 로그 데이터를 실시간 수집, 통합, 상관분석(Correlation)하는 통합 보안 관제 시스템은?",
    "options": [
      "DLP (Data Loss Prevention)",
      "SIEM (Security Information and Event Management)",
      "NAC (Network Access Control)",
      "CASB"
    ],
    "answer_index": 1,
    "explanation": "SIEM은 이기종 보안 장비의 로그를 한데 모아 상관관계 룰 기반으로 지능형 이상 징후를 자동 식별하는 중앙 관제 시스템입니다."
  },
  {
    "id": 433,
    "subject": "정보시스템 구축관리",
    "question": "한국정보통신기술협회(TTA)에서 국제 표준(ISO/IEC 25023, 25051)을 기반으로 소프트웨어의 기능성, 신뢰성, 효율성 등을 종합 시험하여 부여하는 국가 공인 품질 인증 마크는?",
    "options": [
      "PIMS 인증",
      "ISMS-P 인증",
      "GS (Good Software) 인증",
      "CMMI 레벨"
    ],
    "answer_index": 2,
    "explanation": "GS 인증(1등급/2등급)은 국산 상용 소프트웨어의 기능성과 품질을 보증하는 대표적인 소프트웨어 품질 인증 제도입니다."
  },
  {
    "id": 434,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 프로세스 개선 및 능력 평가 국제 표준인 SPICE(ISO/IEC 15504)의 6단계 프로세스 능력 수준 중 최상위 5단계는?",
    "options": [
      "관리 단계 (Managed)",
      "예측 단계 (Predictable)",
      "확립 단계 (Established)",
      "최적화 단계 (Optimizing)"
    ],
    "answer_index": 3,
    "explanation": "SPICE 6단계: 0 불완전 -> 1 수행 -> 2 관리 -> 3 확립 -> 4 예측(정량) -> 5 최적화(Optimizing) 순서입니다."
  },
  {
    "id": 435,
    "subject": "정보시스템 구축관리",
    "question": "클라우드 서비스 수준 협약서(SLA)에서 연간 가용성 99.9%를 약정했을 때 1년 중 허용되는 최대 서비스 장애 누적 시간은 약 얼마인가?",
    "options": [
      "약 8.76시간",
      "약 52분",
      "약 24시간",
      "약 30초"
    ],
    "answer_index": 0,
    "explanation": "1년(365일 × 24시간 = 8,760시간)의 0.1%(0.001)는 약 8.76시간입니다. (99.99%는 약 52분)"
  },
  {
    "id": 436,
    "subject": "정보시스템 구축관리",
    "question": "비즈니스 연속성 계획(BCP) 수립 시 업무가 중단되었을 때 조직의 재무적, 법적 손실을 정량 평가하여 최대 허용 중단 시간(MTD)을 산출하는 분석은?",
    "options": [
      "위험 분석 (Risk Analysis)",
      "BIA (Business Impact Analysis, 비즈니스 영향 분석)",
      "취약점 평가",
      "모의 해킹"
    ],
    "answer_index": 1,
    "explanation": "BIA(비즈니스 영향 분석)는 재해로 시스템이 정지되었을 때 업무에 미치는 충격과 손실을 분석하여 핵심 복구 우선순위를 정합니다."
  },
  {
    "id": 437,
    "subject": "정보시스템 구축관리",
    "question": "국내 개인정보 보호법상 정보주체의 개인정보가 유출되었음을 알았을 때, 개인정보처리자가 개인정보보호위원회나 KISA에 즉시 신고해야 하는 유출 규모 기준은?",
    "options": [
      "1백 명 이상",
      "1만 명 이상",
      "1천 명 이상",
      "5만 명 이상"
    ],
    "answer_index": 2,
    "explanation": "개인정보 보호법상 1천 명 이상의 정보주체에 관한 개인정보가 유출된 경우 지체 없이(72시간 이내) 전문기관에 신고해야 합니다."
  },
  {
    "id": 438,
    "subject": "정보시스템 구축관리",
    "question": "개인정보 비식별 조치 중 추가 정보의 결합 없이는 특정 개인을 알아볼 수 없도록 암호화나 식별자 삭제 등을 처리한 정보는?",
    "options": [
      "고유식별정보",
      "익명정보 (Anonymous Data)",
      "민감정보",
      "가명정보 (Pseudonymous Data)"
    ],
    "answer_index": 3,
    "explanation": "가명정보는 추가 정보 없이는 식별이 불가능하며 통계 작성, 공익적 기록 보존, 과학적 연구 목적으로 정보주체 동의 없이 활용 가능합니다."
  },
  {
    "id": 439,
    "subject": "정보시스템 구축관리",
    "question": "클라우드 보안 책임 공유 모델(Shared Responsibility Model)에서 IaaS(인프라 서비스)를 이용할 때 고객(사용자)의 책임 영역에 해당하는 것은?",
    "options": [
      "게스트 운영체제(Guest OS) 패치 및 애플리케이션 보안",
      "물리 데이터센터 출입 통제",
      "하이퍼바이저 가상화 계층 보안",
      "물리 서버 하드웨어 교체"
    ],
    "answer_index": 0,
    "explanation": "IaaS 환경에서 클라우드 제공자(CSP)는 물리 하드웨어와 가상화 계층을 책임지며, 고객은 OS 설정, 보안 패치, 데이터 암호화를 전담합니다."
  },
  {
    "id": 440,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 보안 장비 중 IPsec 프로토콜의 캡슐화 보안 페이로드(ESP)가 제공하는 핵심 보안 기능 3가지는?",
    "options": [
      "가용성, 부인방지, 접근통제",
      "기밀성(암호화), 무결성, 송신처 인증",
      "물리적 절연, 프록시, 캐싱",
      "패킷 압축, 라우팅, 에러 정정"
    ],
    "answer_index": 1,
    "explanation": "ESP(Encapsulating Security Payload)는 데이터 본문을 암호화(기밀성)하고 MAC 코드를 덧붙여 무결성과 발신처 인증을 동시에 제공합니다."
  },
  {
    "id": 441,
    "subject": "정보시스템 구축관리",
    "question": "공격자가 신뢰된 내부 직원의 신분을 사칭하거나 이메일, 전화(보이스피싱) 등을 통해 사람의 심리적 취약점을 파고드는 비기술적 해킹 기법은?",
    "options": [
      "버퍼 오버플로",
      "포트 스캐닝",
      "사회공학 (Social Engineering)",
      "SYN Flooding"
    ],
    "answer_index": 2,
    "explanation": "사회공학(Social Engineering)은 인간의 신뢰, 공포, 호기심 등 심리적 약점을 악용하여 비밀번호나 내부 정보를 빼내는 기법입니다."
  },
  {
    "id": 442,
    "subject": "정보시스템 구축관리",
    "question": "전자문서의 위변조 방지 및 진본성 확인을 위해 문서의 해시값을 송신자의 개인키로 암호화하여 첨부하는 기술은?",
    "options": [
      "워터마킹",
      "공개키 교환",
      "비밀키 암호화",
      "전자서명 (Digital Signature)"
    ],
    "answer_index": 3,
    "explanation": "전자서명(Digital Signature)은 해시값을 발신자의 비공개키(개인키)로 암호화하여 서명하고, 수신자는 발신자의 공개키로 복호화 검증합니다."
  },
  {
    "id": 443,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 프로젝트에서 위험 관리(Risk Management)의 4대 활동 순서가 올바른 것은?",
    "options": [
      "위험 식별 -> 위험 분석 -> 위험 계획 -> 위험 감시",
      "위험 분석 -> 위험 식별 -> 위험 감시 -> 위험 계획",
      "위험 계획 -> 위험 분석 -> 위험 식별 -> 위험 감시",
      "위험 감시 -> 위험 계획 -> 위험 식별 -> 위험 분석"
    ],
    "answer_index": 0,
    "explanation": "위험 관리 절차: 1) 위험 식별(위험 요소 도출) -> 2) 위험 분석/평가(영향도 측정) -> 3) 위험 대책 계획 -> 4) 지속적 감시 및 추적 순서입니다."
  },
  {
    "id": 444,
    "subject": "정보시스템 구축관리",
    "question": "블록 암호화 알고리즘 중 국내 국가보안기술연구소(NSRI)에서 무선 센서 네트워크나 IoT 등 초경량 디바이스 환경을 위해 개발한 64비트 블록 암호는?",
    "options": [
      "AES",
      "HIGHT",
      "DES",
      "RSA"
    ],
    "answer_index": 1,
    "explanation": "HIGHT(High security and light weight)는 RFID 태그, 스마트 센서 등 저전력 환경에 최적화된 국산 64비트 블록 암호 표준입니다."
  },
  {
    "id": 445,
    "subject": "정보시스템 구축관리",
    "question": "웹 브라우저 보안 정책 중 '어떤 출처(Origin: 프로토콜, 도메인, 포트)에서 불러온 문서나 스크립트가 다른 출처의 리소스와 상호작용하는 것을 기본적으로 제한하는 보안 원칙'은?",
    "options": [
      "CSP (Content Security Policy)",
      "CORS",
      "동일 출처 정책 (SOP, Same-Origin Policy)",
      "HSTS"
    ],
    "answer_index": 2,
    "explanation": "SOP(Same-Origin Policy)는 악의적인 스크립트가 다른 도메인의 민감 세션이나 데이터를 가로채지 못하도록 브라우저가 강제하는 핵심 격리 정책입니다."
  },
  {
    "id": 446,
    "subject": "정보시스템 구축관리",
    "question": "크로스 사이트 스크립팅(XSS) 및 데이터 인젝션 공격을 예방하기 위해 웹 페이지에 로드될 수 있는 신뢰된 스크립트 도메인 소스를 HTTP 응답 헤더로 선언하는 보안 정책은?",
    "options": [
      "SOP",
      "HSTS",
      "X-Frame-Options",
      "CSP (Content Security Policy)"
    ],
    "answer_index": 3,
    "explanation": "CSP(콘텐츠 보안 정책)는 HTTP 헤더를 통해 브라우저가 실행할 수 있는 유효한 스크립트 리소스의 출처 화이트리스트를 지정하여 XSS를 무력화합니다."
  },
  {
    "id": 447,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 유지보수 활동 중 '소프트웨어의 기능이나 성능에 결함이 없더라도, 미래의 유지보수성을 향상시키고 잠재 결함을 사전에 예방하기 위해 코드를 재설계하는 활동'은?",
    "options": [
      "예방 유지보수 (Preventive Maintenance)",
      "수정 유지보수 (Corrective Maintenance)",
      "적응 유지보수 (Adaptive Maintenance)",
      "완전 유지보수 (Perfective Maintenance)"
    ],
    "answer_index": 0,
    "explanation": "예방 유지보수(Preventive Maintenance, 소프트웨어 재생 공학)는 미래의 유지보수 비용을 낮추기 위해 선제적으로 코드를 개선하는 활동입니다."
  },
  {
    "id": 448,
    "subject": "정보시스템 구축관리",
    "question": "기업 내부 정보시스템의 중요 기밀 데이터가 USB, 이메일, 프린터 등을 통해 외부로 불법 유출되는 것을 감시 및 차단하는 보안 솔루션은?",
    "options": [
      "NAC",
      "DLP (Data Loss Prevention, 데이터 유출 방지)",
      "VPN",
      "IDS"
    ],
    "answer_index": 1,
    "explanation": "DLP는 엔드포인트와 네트워크 게이트웨이에서 개인정보나 사내 기밀 파일의 비인가 외부 반출을 원천 통제합니다."
  },
  {
    "id": 449,
    "subject": "정보시스템 구축관리",
    "question": "네트워크 접근 제어 솔루션으로 사내 네트워크에 접속하려는 단말기의 백신 설치 여부, OS 패치 상태 등 보안 정책 준수 여부를 검사하여 접속을 허용하거나 격리하는 보안 기술은?",
    "options": [
      "SIEM",
      "WAF",
      "NAC (Network Access Control)",
      "UTM"
    ],
    "answer_index": 2,
    "explanation": "NAC(네트워크 접근 제어)는 단말기가 네트워크에 접속하기 전 무결성을 검증하여 감염된 단말의 내부망 진입을 사전에 차단합니다."
  },
  {
    "id": 450,
    "subject": "정보시스템 구축관리",
    "question": "보안 취약점 점검 방식 중 소스 코드를 보지 않고 외부에서 실제 공격자 관점으로 시스템을 침투하여 취약점을 점검하는 블랙박스 침투 테스트 방식은?",
    "options": [
      "화이트박스 리뷰",
      "소스 코드 감사 (Source Code Audit)",
      "정적 취약점 분석",
      "모의 해킹 (Penetration Testing)"
    ],
    "answer_index": 3,
    "explanation": "모의 해킹(Penetration Testing)은 실제 해커의 시각과 기법으로 시스템 외부에서 취약점을 파고들어 침투 가능성을 실증적으로 검증합니다."
  },
  {
    "id": 451,
    "subject": "소프트웨어 설계",
    "question": "요구사항 도출 기법 중 브레인스토밍(Brainstorming)의 4대 기본 규칙에 해당하지 않는 것은?",
    "options": [
      "타인의 아이디어에 대한 조기 비판 허용",
      "자유분방한 분위기 조성",
      "아이디어의 다량 산출",
      "타인 아이디어와의 결합 및 개선"
    ],
    "answer_index": 0,
    "explanation": "브레인스토밍 4대 규칙은 비판 금지(비판 엄금), 자유분방, 다량 산출, 결합 및 개선입니다. 회의 중 조기 비판은 엄격히 금지됩니다."
  },
  {
    "id": 452,
    "subject": "소프트웨어 설계",
    "question": "요구사항 개발 프로세스의 4단계 순서가 올바르게 나열된 것은?",
    "options": [
      "분석 (Analysis) -> 도출 (Elicitation) -> 명세 (Specification) -> 확인 (Validation)",
      "도출 (Elicitation) -> 분석 (Analysis) -> 명세 (Specification) -> 확인/검증 (Validation)",
      "명세 (Specification) -> 도출 (Elicitation) -> 분석 (Analysis) -> 확인 (Validation)",
      "도출 (Elicitation) -> 명세 (Specification) -> 분석 (Analysis) -> 확인 (Validation)"
    ],
    "answer_index": 1,
    "explanation": "요구사항 개발 프로세스는 1) 도출(Elicitation) -> 2) 분석(Analysis) -> 3) 명세(Specification) -> 4) 확인(Validation) 순서로 진행됩니다."
  },
  {
    "id": 453,
    "subject": "소프트웨어 설계",
    "question": "UML의 확장 메커니즘 중 기존 UML 모델 요소에 새로운 의미나 용도를 부여하기 위해 길러밋(Guillemet, << >>) 기호 사이에 표기하는 것은?",
    "options": [
      "제약조건 (Constraint)",
      "태그값 (Tagged Value)",
      "스테레오타입 (Stereotype)",
      "주석 (Note)"
    ],
    "answer_index": 2,
    "explanation": "스테레오타입(Stereotype)은 <<interface>>, <<include>>, <<extend>> 처럼 길러밋 기호 사이에 새로운 분류 의미를 부여하는 확장 메커니즘입니다."
  },
  {
    "id": 454,
    "subject": "소프트웨어 설계",
    "question": "UML 클래스 다이어그램에서 접근 제어자(가시성) 표기 기호 중 'private'을 나타내는 기호는?",
    "options": [
      "~",
      "+",
      "#",
      "-"
    ],
    "answer_index": 3,
    "explanation": "가시성 기호: + (public), - (private), # (protected), ~ (default / package) 입니다."
  },
  {
    "id": 455,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계 원칙(SOLID) 중 '소프트웨어 엔티티는 확장에 대해서는 열려 있어야 하고(Open), 수정에 대해서는 닫혀 있어야 한다(Closed)'는 원칙은?",
    "options": [
      "개방 폐쇄 원칙 (OCP)",
      "단일 책임 원칙 (SRP)",
      "리스코프 치환 원칙 (LSP)",
      "인터페이스 분리 원칙 (ISP)"
    ],
    "answer_index": 0,
    "explanation": "OCP(개방 폐쇄 원칙)는 기존 코드를 변경하지 않고도 상속이나 인터페이스 다형성을 통해 새로운 기능 확장이 가능하도록 설계하는 원칙입니다."
  },
  {
    "id": 456,
    "subject": "소프트웨어 설계",
    "question": "자바 등 객체지향 언어에서 동일한 이름의 메서드를 매개변수의 타입이나 개수를 다르게 하여 여러 개 정의하는 기법은?",
    "options": [
      "오버라이딩 (Overriding)",
      "오버로딩 (Overloading)",
      "캡슐화 (Encapsulation)",
      "추상화 (Abstraction)"
    ],
    "answer_index": 1,
    "explanation": "오버로딩(Overloading)은 같은 이름의 메서드를 파라미터 시그니처만 다르게 중복 정의하는 것이며, 오버라이딩(Overriding)은 상속받은 메서드를 재정의하는 것입니다."
  },
  {
    "id": 457,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 프로젝트 일정 관리 도구 중 작업들의 선후 종속 관계를 네트워크 화살표 네트워크로 표현하며 최장 소요 시간 경로를 찾아내는 기법은?",
    "options": [
      "WBS",
      "간트 차트 (Gantt Chart)",
      "CPM / PERT 네트워크 (Critical Path Method)",
      "상태 다이어그램"
    ],
    "answer_index": 2,
    "explanation": "CPM(임계 경로 기법)은 프로젝트를 완료하는 데 걸리는 가장 긴 경로(Critical Path)를 계산하여 여유 시간(Float)이 없는 핵심 작업을 집중 관리합니다."
  },
  {
    "id": 458,
    "subject": "소프트웨어 설계",
    "question": "프로젝트 관리에서 전체 업무를 세부적인 작업 패키지(Work Package) 단위로 계층적으로 분할하여 계층 구조로 도식화한 것은?",
    "options": [
      "DFD",
      "CPM 차트",
      "간트 차트",
      "WBS (Work Breakdown Structure, 작업 분할 구조도)"
    ],
    "answer_index": 3,
    "explanation": "WBS(작업 분할 구조도)는 프로젝트의 모든 인도물과 업무 범위를 트리 계층 구조로 세분화하여 일정과 비용 산정의 기준을 제공합니다."
  },
  {
    "id": 459,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 패턴 중 분산 환경에서 클라이언트의 서비스 요청을 등록된 서비스 제공자에게 연결해 주고 결과를 중계하는 컴포넌트를 두는 패턴은?",
    "options": [
      "브로커 패턴 (Broker Pattern)",
      "블랙보드 패턴",
      "파이프-필터 패턴",
      "MVC 패턴"
    ],
    "answer_index": 0,
    "explanation": "브로커(Broker) 패턴은 분산 시스템에서 분산 컴포넌트 간의 원격 메서드 호출과 메시지 라우팅을 브로커가 중개해 결합도를 낮춥니다 (CORBA 표준의 기반)."
  },
  {
    "id": 460,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 중 핵심적인 최소 기능만을 코어 엔진(마이크로커널)에 유지하고, 부가적인 기능들은 독립적인 플러그인(Plugin) 형태로 유연하게 탈부착하도록 하는 아키텍처는?",
    "options": [
      "계층화 아키텍처",
      "마이크로커널 아키텍처 (플러그인 아키텍처)",
      "모놀리식 아키텍처",
      "공유 저장소 아키텍처"
    ],
    "answer_index": 1,
    "explanation": "마이크로커널(플러그인) 아키텍처는 이클립스 IDE, 웹 브라우저 확장 프로그램처럼 코어 시스템에 플러그인을 동적으로 추가하는 확장성 중심 아키텍처입니다."
  },
  {
    "id": 461,
    "subject": "소프트웨어 설계",
    "question": "웹 애플리케이션에서 데이터베이스 연결(Connection)을 미리 여러 개 생성하여 풀(Pool)에 보관해 두고, 요청 시마다 빌려주고 반납받는 기술은?",
    "options": [
      "JDBC 드라이버",
      "JNDI",
      "DBCP (Database Connection Pool)",
      "DB 링크"
    ],
    "answer_index": 2,
    "explanation": "DBCP는 매번 커넥션을 맺고 끊는 오버헤드를 없애고 미리 만들어진 연결 객체를 재사용하여 시스템 성능과 처리량을 대폭 향상시킵니다."
  },
  {
    "id": 462,
    "subject": "소프트웨어 설계",
    "question": "RESTful 웹 서비스 및 분산 환경에서 클라이언트 인증 및 인가를 위해 사용하는 표준 토큰 형식으로 Header, Payload, Signature 세 부분으로 구성된 토큰은?",
    "options": [
      "세션 ID",
      "OAuth 1.0",
      "쿠키 (Cookie)",
      "JWT (JSON Web Token)"
    ],
    "answer_index": 3,
    "explanation": "JWT는 JSON 포맷의 클레임 기반 토큰으로 디지털 서명을 포함하고 있어 별도의 서버 세션 저장소 없이도 자체적으로 유효성을 검증할 수 있습니다."
  },
  {
    "id": 463,
    "subject": "소프트웨어 설계",
    "question": "대규모 마이크로서비스(MSA) 환경에서 서비스 간 결합도를 낮추고 대용량 이벤트 스트림을 실시간으로 발행/구독(Pub/Sub) 처리하는 분산 메시징 플랫폼은?",
    "options": [
      "Apache Kafka",
      "Nginx",
      "Jenkins",
      "Tomcat"
    ],
    "answer_index": 0,
    "explanation": "카프카(Kafka)는 대용량 실시간 로그 및 이벤트 스트리밍 처리에 최적화된 고성능 분산 발행-구독 메시지 브로커입니다."
  },
  {
    "id": 464,
    "subject": "소프트웨어 설계",
    "question": "GoF 구조 패턴 중 '기능의 추상화 계층과 구체적인 구현 계층을 분리하여 두 계층이 서로 독립적으로 다양하게 확장될 수 있도록 다리(Bridge)를 놓는 패턴'은?",
    "options": [
      "Adapter 패턴",
      "Bridge 패턴",
      "Composite 패턴",
      "Facade 패턴"
    ],
    "answer_index": 1,
    "explanation": "브리지(Bridge) 패턴은 상속으로 인한 클래스 폭발을 방지하기 위해 기능 계층과 구현 계층을 별도의 클래스 계층구조로 분리하여 연결합니다."
  },
  {
    "id": 465,
    "subject": "소프트웨어 설계",
    "question": "객체지향 설계 원칙(SOLID) 중 '하나의 클래스는 단 하나의 책임(하나의 변경 이유)만을 가져야 한다'는 원칙은?",
    "options": [
      "인터페이스 분리 원칙 (ISP)",
      "개방 폐쇄 원칙 (OCP)",
      "단일 책임 원칙 (SRP, Single Responsibility Principle)",
      "의존 역전 원칙 (DIP)"
    ],
    "answer_index": 2,
    "explanation": "SRP(단일 책임 원칙)는 클래스가 오직 하나의 책임을 가져야 높은 응집도와 낮은 결합도를 유지할 수 있다는 원칙입니다."
  },
  {
    "id": 466,
    "subject": "소프트웨어 설계",
    "question": "도메인 주도 설계(DDD, Domain-Driven Design)에서 개발자와 도메인 전문가가 상호 오해 없이 일관되게 소통하기 위해 정의하는 공통 용어 사전을 가리키는 용어는?",
    "options": [
      "값 객체 (VO)",
      "바운디드 컨텍스트",
      "엔티티",
      "유비쿼터스 언어 (Ubiquitous Language)"
    ],
    "answer_index": 3,
    "explanation": "유비쿼터스 언어(Ubiquitous Language)는 기획자, 개발자, 도메인 전문가 모두가 프로젝트 전반에서 동일한 의미로 사용하는 단일 공통 언어입니다."
  },
  {
    "id": 467,
    "subject": "소프트웨어 설계",
    "question": "마이크로서비스 아키텍처(MSA)에서 여러 서비스에 걸친 분산 트랜잭션을 처리할 때, 각 로컬 트랜잭션의 성공/실패에 따라 보상 트랜잭션(Compensating Transaction)을 실행하는 패턴은?",
    "options": [
      "Saga 패턴",
      "2단계 커밋 패턴",
      "CQRS 패턴",
      "서킷 브레이커 패턴"
    ],
    "answer_index": 0,
    "explanation": "Saga 패턴은 서비스 간 락을 걸지 않고 일련의 로컬 트랜잭션을 체인으로 실행하며 중간 실패 시 이전 단계들을 보상 트랜잭션으로 취소하여 최종 일관성을 맞춥니다."
  },
  {
    "id": 468,
    "subject": "소프트웨어 설계",
    "question": "분산 시스템에서 특정 마이크로서비스에 장애가 발생했을 때 장애가 다른 연계 서비스로 연쇄 전파되는 것을 방지하기 위해 호출을 차단(Trip)하는 패턴은?",
    "options": [
      "벌크헤드 패턴",
      "서킷 브레이커 패턴 (Circuit Breaker Pattern)",
      "API 게이트웨이 패턴",
      "스트랭글러 패턴"
    ],
    "answer_index": 1,
    "explanation": "서킷 브레이커(누전 차단기) 패턴은 장애 서비스로의 요청 실패율이 임계치를 넘으면 회로를 열어(Open) 즉시 폴백 응답을 주어 시스템 전체 붕괴를 막습니다."
  },
  {
    "id": 469,
    "subject": "소프트웨어 설계",
    "question": "CQRS(Command Query Responsibility Segregation) 패턴의 핵심 개념으로 옳은 것은?",
    "options": [
      "데이터베이스의 모든 트랜잭션을 동기식으로 일원화한다.",
      "모든 요청을 단일 SQL 문으로 통합 처리한다.",
      "데이터를 생성/수정/삭제하는 명령(Command) 모델과 데이터를 조회하는 쿼리(Query) 모델을 분리한다.",
      "클라이언트와 서버의 계층을 단일 모듈로 결합한다."
    ],
    "answer_index": 2,
    "explanation": "CQRS 패턴은 상태를 변경하는 명령(CUD)과 상태를 조회하는 쿼리(R)의 책임과 저장소를 분리하여 복잡성을 줄이고 읽기/쓰기 성능을 각각 최적화합니다."
  },
  {
    "id": 470,
    "subject": "소프트웨어 설계",
    "question": "UML 배치 다이어그램(Deployment Diagram)에서 하드웨어 서버 노드나 실행 환경 안에 실제로 배포되는 실행 파일, 스크립트, 데이터베이스 스키마 등의 물리적 산출물을 가리키는 요소는?",
    "options": [
      "인터페이스 (Interface)",
      "컴포넌트 (Component)",
      "패키지 (Package)",
      "아티팩트 (Artifact)"
    ],
    "answer_index": 3,
    "explanation": "아티팩트(Artifact)는 WAR, JAR, 실행 파일, 설정 파일 등 물리적 노드(Node)에 배포되는 구체적인 소프트웨어 산출물입니다."
  },
  {
    "id": 471,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 요구사항 정의 단계에서 사용자의 요구사항을 체계적으로 도출하기 위해 사용자와 1:1로 직접 대화하며 심층적인 니즈를 파악하는 기법은?",
    "options": [
      "인터뷰 (Interview)",
      "설문조사 (Survey)",
      "브레인스토밍",
      "워크스루"
    ],
    "answer_index": 0,
    "explanation": "인터뷰(Interview)는 질문자와 대상자가 직접 대면하여 잠재 요구사항과 숨은 비즈니스 로직을 심도 있게 파악하는 전통적이고 효과적인 도출 기법입니다."
  },
  {
    "id": 472,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 개발 프로젝트에서 일정 지연을 만회하기 위해 투입 인력을 늘리면 의사소통 비용이 증가하여 일정이 오히려 더 지연된다는 법칙은?",
    "options": [
      "무어의 법칙",
      "브룩스의 법칙 (Brooks's Law)",
      "파레토의 법칙",
      "암달의 법칙"
    ],
    "answer_index": 1,
    "explanation": "브룩스의 법칙(Brooks's Law)은 '지체되는 소프트웨어 개발 프로젝트에 인력을 추가하는 것은 일정을 더 늦출 뿐이다'라는 소프트웨어 공학의 유명한 격언입니다."
  },
  {
    "id": 473,
    "subject": "소프트웨어 설계",
    "question": "UI 설계 원칙 중 '사용자가 시스템 조작 중 실수를 저지르더라도 쉽게 이전 상태로 복구할 수 있고 부작용을 최소화할 수 있어야 한다'는 원칙은?",
    "options": [
      "유효성 (Effectiveness)",
      "직관성 (Intuitiveness)",
      "유연성 (Flexibility)",
      "학습성 (Learnability)"
    ],
    "answer_index": 2,
    "explanation": "유연성(Flexibility)은 사용자의 인터랙션 실수를 너그럽게 수용하고 실행 취소(Undo)나 오류 방지를 지원하는 UI 원칙입니다."
  },
  {
    "id": 474,
    "subject": "소프트웨어 설계",
    "question": "인터페이스 연계 기술 중 웹 표준 기반의 WSDL과 SOAP 프로토콜을 사용하며 XML 메시지를 주고받는 고전적 웹 서비스 기술 표준은?",
    "options": [
      "gRPC",
      "RESTful API",
      "GraphQL",
      "SOAP 웹 서비스 (Simple Object Access Protocol)"
    ],
    "answer_index": 3,
    "explanation": "SOAP(Simple Object Access Protocol)은 HTTP, HTTPS, SMTP 등을 통해 XML 기반의 정형화된 메시지를 교환하는 엔터프라이즈 웹 서비스 프로토콜입니다."
  },
  {
    "id": 475,
    "subject": "소프트웨어 설계",
    "question": "구글이 개발한 오픈소스 고성능 원격 프로시저 호출 프레임워크로 HTTP/2 기반 프로토콜 버퍼(Protocol Buffers)를 사용하여 마이크로서비스 간 통신에 널리 쓰이는 기술은?",
    "options": [
      "gRPC",
      "SOAP",
      "CORBA",
      "AJAX"
    ],
    "answer_index": 0,
    "explanation": "gRPC는 바이너리 프로토콜 버퍼 직렬화와 HTTP/2 멀티플렉싱을 통해 REST API 대비 극도로 빠르고 가벼운 고성능 RPC 통신을 제공합니다."
  },
  {
    "id": 476,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 아키텍처 평가 기법 중 '시스템 아키텍처가 경제적 가치(비용 대비 효과)를 얼마나 창출하는지 ROI 관점에서 의사결정을 지원하는 기법'은?",
    "options": [
      "ATAM",
      "CBAM (Cost Benefit Analysis Method)",
      "SAAM",
      "ARID"
    ],
    "answer_index": 1,
    "explanation": "CBAM은 ATAM 평가 결과를 바탕으로 품질 속성 개선을 위한 아키텍처 전략들의 비용(Cost)과 이익(Benefit)을 정량 분석합니다."
  },
  {
    "id": 477,
    "subject": "소프트웨어 설계",
    "question": "린(Lean) 소프트웨어 개발 방법론의 7대 원칙 중 '불필요한 기능 개발, 대기 시간, 결함 등 가치를 창출하지 못하는 모든 요소를 철저히 배제하는 원칙'은?",
    "options": [
      "지식 창출 (Amplify Learning)",
      "품질 내재화 (Build Quality In)",
      "낭비 제거 (Eliminate Waste)",
      "늦은 결정 (Decide as Late as Possible)"
    ],
    "answer_index": 2,
    "explanation": "린 개발의 최우선 기본 원칙은 낭비 제거(Eliminate Waste)로 가치를 생산하지 않는 중간 단계와 오버헤드를 극도로 줄이는 것입니다."
  },
  {
    "id": 478,
    "subject": "소프트웨어 설계",
    "question": "공통 모듈 설계 시 다른 모듈과의 의존도를 줄이고 독립성을 높이기 위해 지켜야 할 기본 지침으로 옳은 것은?",
    "options": [
      "모든 모듈이 단일 전역 변수를 공유하도록 설계한다.",
      "모듈의 결합도와 응집도를 모두 최대화한다.",
      "모듈의 결합도를 높이고 응집도를 낮춘다.",
      "모듈의 결합도는 최소화하고 응집도는 최대화한다."
    ],
    "answer_index": 3,
    "explanation": "소프트웨어 공학의 대원칙: 결합도는 낮을수록(Low Coupling), 응집도는 높을수록(High Cohesion) 독립성과 재사용성이 우수합니다."
  },
  {
    "id": 479,
    "subject": "소프트웨어 설계",
    "question": "클라이언트가 단일 엔드포인트에 GraphQL 쿼리를 전송하여 필요한 데이터 필드만을 정확히 지정해서 가져옴으로써 Over-fetching과 Under-fetching을 해결한 데이터 쿼리 언어는?",
    "options": [
      "GraphQL",
      "SQL",
      "XPath",
      "XQuery"
    ],
    "answer_index": 0,
    "explanation": "GraphQL은 페이스북이 개발한 API용 쿼리 언어로 클라이언트가 원하는 데이터 구조를 직접 요청할 수 있어 네트워크 대역폭을 절약합니다."
  },
  {
    "id": 480,
    "subject": "소프트웨어 설계",
    "question": "소프트웨어 개발 프로젝트에서 요구사항 변경을 체계적으로 심의, 승인, 반려하기 위해 구성되는 공식 협의체 조직은?",
    "options": [
      "PMO",
      "CCB (Configuration Control Board, 형상 통제 위원회)",
      "QA팀",
      "스크럼팀"
    ],
    "answer_index": 1,
    "explanation": "CCB(형상 통제 위원회)는 프로젝트의 기준선(Baseline) 변경 요구사항을 평가하고 승인/기각을 결정하는 최고 의사결정 기구입니다."
  },
  {
    "id": 481,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트의 기본 원리 중 '아무리 많은 테스트를 수행해도 시스템에 존재하는 모든 결함을 100% 완전히 찾아내는 것은 불가능하다'는 원리는?",
    "options": [
      "오류 부재의 궤변",
      "살충제 패러독스",
      "완벽한 테스팅 불가능 (Exhaustive Testing is Impossible)",
      "초기 테스팅 집중"
    ],
    "answer_index": 2,
    "explanation": "완벽한 테스팅은 무한한 입력 조합으로 인해 현실적으로 불가능하므로 위험 분석과 우선순위에 기반한 효율적 테스트가 필수적입니다."
  },
  {
    "id": 482,
    "subject": "소프트웨어 개발",
    "question": "화이트박스 테스트 검증 기준 중 '조건문 내의 모든 개별 조건식의 참/거짓 가능한 모든 논리적 조합(2^n가지)을 전부 실행해 보는 가장 완벽하고 엄격한 커버리지'는?",
    "options": [
      "구문 커버리지",
      "조건/결정 커버리지",
      "분기 커버리지",
      "다중 조건 커버리지 (Multiple Condition Coverage)"
    ],
    "answer_index": 3,
    "explanation": "다중 조건 커버리지는 n개의 개별 조건식이 있을 때 가능한 모든 조합(2^n)을 100% 테스트하지만 테스트 케이스 수가 폭발적으로 증가합니다."
  },
  {
    "id": 483,
    "subject": "소프트웨어 개발",
    "question": "Halstead의 소프트웨어 과학(Software Science) 복잡도 측정 공식에서 사용하는 2대 기본 측정 요소는?",
    "options": [
      "연산자(Operators)와 피연산자(Operands)의 개수",
      "소스 코드 라인 수와 주석 수",
      "클래스 수와 메서드 수",
      "순환 복잡도와 노드 수"
    ],
    "answer_index": 0,
    "explanation": "할스테드 복잡도 메트릭은 소스 코드에 등장하는 고유한/총 연산자(n1, N1)와 피연산자(n2, N2)의 개수를 기반으로 프로그램의 길이와 노력을 산출합니다."
  },
  {
    "id": 484,
    "subject": "소프트웨어 개발",
    "question": "자바 진영에서 단위 테스트 시 가짜 객체의 동작(메서드 호출 시 반환값)을 사전에 정의(Stubbing)할 때 가장 널리 사용되는 모의 객체 프레임워크는?",
    "options": [
      "Log4j",
      "Mockito",
      "Spring Boot",
      "Maven"
    ],
    "answer_index": 1,
    "explanation": "Mockito는 `when(mock.method()).thenReturn(value)` 등의 직관적인 문법으로 모의 객체를 조작하는 대표적인 Java Mock 프레임워크입니다."
  },
  {
    "id": 485,
    "subject": "소프트웨어 개발",
    "question": "깊이가 d인 포화 이진 트리(Full Binary Tree)가 가질 수 있는 총 노드의 최대 개수를 구하는 공식은? (단, 루트의 깊이는 1)",
    "options": [
      "2^d",
      "2^(d-1)",
      "2^d - 1",
      "d^2"
    ],
    "answer_index": 2,
    "explanation": "깊이 d인 포화 이진 트리의 총 노드 수는 1 + 2 + 4 + ... + 2^(d-1) = 2^d - 1 개입니다. (예: 깊이 3이면 2^3 - 1 = 7개)"
  },
  {
    "id": 486,
    "subject": "소프트웨어 개발",
    "question": "정점(Vertex)의 수가 V개인 무방향 그래프를 인접 행렬(Adjacency Matrix)로 표현할 때 필요한 메모리 공간 복잡도는?",
    "options": [
      "O(E)",
      "O(V + E)",
      "O(V)",
      "O(V^2)"
    ],
    "answer_index": 3,
    "explanation": "인접 행렬은 V × V 크기의 2차원 배열을 할당하므로 간선의 수(E)와 무관하게 항상 O(V^2)의 공간이 필요합니다."
  },
  {
    "id": 487,
    "subject": "소프트웨어 개발",
    "question": "데이터의 값이 특정한 작은 정수 범위 내에 있을 때, 각 원소의 출현 횟수를 카운팅 배열에 누적하여 O(n + k)의 초고속 선형 시간으로 정렬하는 비교하지 않는 정렬 알고리즘은?",
    "options": [
      "계수 정렬 (Counting Sort)",
      "버블 정렬",
      "선택 정렬",
      "삽입 정렬"
    ],
    "answer_index": 0,
    "explanation": "계수 정렬(Counting Sort)은 수의 빈도수를 세어 정렬하므로 원소 간의 대소 비교가 없으며 값의 범위(k)가 작을 때 극도로 빠릅니다."
  },
  {
    "id": 488,
    "subject": "소프트웨어 개발",
    "question": "문자열 검색 알고리즘 중 접두사(Prefix)와 접미사(Suffix) 일치 정보를 담은 부분 일치 테이블(실패 함수)을 사전에 계산하여 불필요한 비교를 건너뛰는 알고리즘은?",
    "options": [
      "보이어-무어 알고리즘",
      "KMP (Knuth-Morris-Pratt) 알고리즘",
      "라빈-카프 알고리즘",
      "단순 브루트포스"
    ],
    "answer_index": 1,
    "explanation": "KMP 알고리즘은 패턴 내의 일치했던 정보를 활용해 텍스트 포인터를 뒤로 되돌리지 않고 건너뛰어 O(N + M)에 문자열을 탐색합니다."
  },
  {
    "id": 489,
    "subject": "소프트웨어 개발",
    "question": "문자열 검색 알고리즘 중 검색 패턴의 끝(우측)부터 시작하여 좌측 방향으로 문자를 비교하며, 실제 텍스트 편집기 검색에서 가장 빠른 성능을 보이는 알고리즘은?",
    "options": [
      "너비 우선 탐색",
      "KMP 알고리즘",
      "보이어-무어 (Boyer-Moore) 알고리즘",
      "이진 탐색"
    ],
    "answer_index": 2,
    "explanation": "보이어-무어(Boyer-Moore) 알고리즘은 불일치 문자 휴리스틱을 통해 불일치 발생 시 패턴 길이만큼 한 번에 건너뛰므로 평균적으로 가장 빠릅니다."
  },
  {
    "id": 490,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 시맨틱 버저닝(Semantic Versioning) 표준 표기 형식 'X.Y.Z (예: 2.1.4)'에서 각 숫자의 의미 순서가 올바른 것은?",
    "options": [
      "Year . Month . Day",
      "Minor . Major . Patch",
      "Patch . Minor . Major",
      "Major(주 버전) . Minor(부 버전) . Patch(패치 버전)"
    ],
    "answer_index": 3,
    "explanation": "SemVer 규약: Major(하위 호환 불가능한 큰 변화), Minor(하위 호환 가능한 신규 기능 추가), Patch(하위 호환 버그 수정) 순서입니다."
  },
  {
    "id": 491,
    "subject": "소프트웨어 개발",
    "question": "Git에서 다른 브랜치에 존재하는 여러 커밋 중 자신이 원하는 '특정 커밋 하나만을 선택'하여 현재 브랜치에 반영하는 명령어는?",
    "options": [
      "git cherry-pick",
      "git rebase",
      "git merge",
      "git stash"
    ],
    "answer_index": 0,
    "explanation": "git cherry-pick <commit-hash> 는 마치 버찌를 따듯 원하는 단일 커밋의 변경 내용만을 현재 작업 브랜치에 골라서 적용합니다."
  },
  {
    "id": 492,
    "subject": "소프트웨어 개발",
    "question": "Git 작업 영역 중 작업 트리(Working Directory)에서 수정한 변경 사항을 다음 커밋에 포함시키기 위해 대기시키는 중간 완충 영역은?",
    "options": [
      "로컬 리포지토리",
      "스테이징 영역 / 인덱스 (Staging Area / Index)",
      "원격 리포지토리",
      "스태시 영역"
    ],
    "answer_index": 1,
    "explanation": "Staging Area(Index)는 `git add` 명령으로 변경 사항을 선별 등록하여 다음 `git commit` 스냅샷을 구성하는 대기 공간입니다."
  },
  {
    "id": 493,
    "subject": "소프트웨어 개발",
    "question": "소스 코드 보안 취약점 진단 도구 중 프로그램을 실행 중인 상태에서 외부 입력값을 주입하여 런타임 보안 취약점을 동적으로 분석하는 기법은?",
    "options": [
      "코드 인스펙션",
      "SAST (Static Application Security Testing)",
      "DAST (Dynamic Application Security Testing)",
      "정적 린터"
    ],
    "answer_index": 2,
    "explanation": "DAST(동적 보안 테스팅)는 웹 애플리케이션을 구동시킨 상태에서 모의 침투를 시도하여 인증 결함, SQLi 등 런타임 취약점을 진단합니다."
  },
  {
    "id": 494,
    "subject": "소프트웨어 개발",
    "question": "쿠버네티스(Kubernetes) 아키텍처에서 생성하고 관리할 수 있는 배포의 가장 작은 기본 단위이자 하나 이상의 컨테이너 그룹을 의미하는 것은?",
    "options": [
      "네임스페이스",
      "서비스 (Service)",
      "노드 (Node)",
      "파드 (Pod)"
    ],
    "answer_index": 3,
    "explanation": "파드(Pod)는 쿠버네티스에서 컨테이너 애플리케이션을 배포하는 최소 실행 단위로, 스토리지와 IP 네트워크 네임스페이스를 공유합니다."
  },
  {
    "id": 495,
    "subject": "소프트웨어 개발",
    "question": "프로그래밍 변수 명명 표기법 중 'user_account_id' 처럼 모든 단어를 소문자로 쓰고 단어 사이를 밑줄(_)로 연결하는 표기법은?",
    "options": [
      "스네이크 케이스 (snake_case)",
      "카멜 케이스 (camelCase)",
      "파스칼 케이스 (PascalCase)",
      "케밥 케이스 (kebab-case)"
    ],
    "answer_index": 0,
    "explanation": "스네이크 케이스(snake_case)는 뱀 모양처럼 언더스코어로 단어를 잇는 방식으로 Python, C, SQL 컬럼명 등에서 널리 쓰입니다."
  },
  {
    "id": 496,
    "subject": "소프트웨어 개발",
    "question": "프로그래밍 변수 명명 표기법 중 'userAccountId' 처럼 첫 단어는 소문자로 시작하고 이후 단어의 첫 글자를 대문자로 표기하는 기법은?",
    "options": [
      "파스칼 케이스 (PascalCase)",
      "카멜 케이스 (camelCase)",
      "스네이크 케이스",
      "케밥 케이스"
    ],
    "answer_index": 1,
    "explanation": "카멜 케이스(camelCase)는 낙타의 등처럼 대소문자가 오르내리는 방식으로 Java, JavaScript의 변수/함수명 표준입니다."
  },
  {
    "id": 497,
    "subject": "소프트웨어 개발",
    "question": "Git에서 아직 커밋하지 않은 작업 트리의 미완료 수정 사항들을 임시 저장소에 잠시 숨겨두고 작업 트리를 깨끗한 최신 상태로 되돌리는 명령어는?",
    "options": [
      "git reset",
      "git revert",
      "git stash",
      "git clean"
    ],
    "answer_index": 2,
    "explanation": "git stash는 진행 중이던 변경사항을 임시 스택에 저장하고 워킹 디렉터리를 직전 커밋 상태로 비워두어 급한 브랜치 전환을 돕습니다."
  },
  {
    "id": 498,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 빌드 자동화 도구 중 XML 기반의 절차적 스크립트 작성 방식을 사용하는 Java 초기의 빌드 도구는?",
    "options": [
      "Make",
      "Maven",
      "Gradle",
      "Ant"
    ],
    "answer_index": 3,
    "explanation": "Apache Ant는 build.xml에 목표(Target)와 작업을 명시적으로 기술하는 초기 Java 빌드 도구입니다."
  },
  {
    "id": 499,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 빌드 도구 중 Groovy나 Kotlin 기반의 DSL(Domain Specific Language)을 채택하여 빌드 속도가 빠르고 안드로이드 표준 빌드 도구로 채택된 것은?",
    "options": [
      "Gradle",
      "Maven",
      "Ant",
      "Webpack"
    ],
    "answer_index": 0,
    "explanation": "Gradle은 점진적 빌드와 데몬 프로세스 캐싱을 통해 Maven 대비 압도적인 빌드 속도를 자랑하는 최신 표준 도구입니다."
  },
  {
    "id": 500,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 개발 방법론 중 짧은 개발 주기를 반복하며 테스트 주도 개발(TDD)과 지속적인 고객과의 소통을 중시하는 방법론군을 총칭하는 용어는?",
    "options": [
      "폭포수 방법론",
      "애자일 (Agile) 방법론",
      "구조적 방법론",
      "정보공학 방법론"
    ],
    "answer_index": 1,
    "explanation": "애자일(Agile)은 변화에 신속하게 대응하며 동작하는 소프트웨어를 지속적으로 릴리즈하는 가벼운 소프트웨어 개발 철학입니다."
  },
  {
    "id": 501,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트에서 테스트를 종료하고 제품을 출시해도 좋은지 판단하는 종료 기준(Exit Criteria)의 항목으로 적절하지 않은 것은?",
    "options": [
      "치명적 결함(Critical Bug)의 잔존 수가 0개인지 여부",
      "목표 테스트 커버리지(예: 80%) 달성률",
      "개발팀 전원의 야근 누적 시간",
      "테스트 계획된 모든 케이스의 실행 완료율"
    ],
    "answer_index": 2,
    "explanation": "테스트 종료 기준은 결함 잔존율, 커버리지 달성도, 테스트 패스율 등 정량적인 품질 메트릭으로 평가해야 합니다."
  },
  {
    "id": 502,
    "subject": "소프트웨어 개발",
    "question": "Git에서 이전 커밋을 삭제하지 않고, 이전 커밋의 변경 사항을 정확히 반대로 상쇄하는 새로운 반대 커밋을 생성하여 안전하게 되돌리는 명령어는?",
    "options": [
      "git clean",
      "git reset --hard",
      "git checkout",
      "git revert"
    ],
    "answer_index": 3,
    "explanation": "git revert는 이미 원격에 푸시된 이력을 보존하면서 특정 커밋의 작업을 취소하는 역커밋을 만들어 공유 저장소의 안전성을 유지합니다."
  },
  {
    "id": 503,
    "subject": "소프트웨어 개발",
    "question": "웹 프론트엔드 최적화 기법 중 여러 개의 JavaScript 및 CSS 파일을 하나로 묶고 불필요한 공백과 주석을 제거하여 번들 크기를 줄이는 기법은?",
    "options": [
      "번들링(Bundling) 및 축소/난독화(Minification)",
      "인덱싱",
      "정규화",
      "마스킹"
    ],
    "answer_index": 0,
    "explanation": "Webpack, Vite 등의 도구를 사용한 번들링 및 미니피케이션은 HTTP 요청 횟수를 줄이고 전송 파일 용량을 경량화합니다."
  },
  {
    "id": 504,
    "subject": "소프트웨어 개발",
    "question": "단위 테스트 작성 패턴 중 '준비(Arrange) -> 실행(Act) -> 검증(Assert)'의 3단계로 테스트 케이스의 구조를 명확히 분리하는 패턴은?",
    "options": [
      "MVC 패턴",
      "AAA (Arrange-Act-Assert) 패턴",
      "TDD 패턴",
      "DRY 패턴"
    ],
    "answer_index": 1,
    "explanation": "AAA 패턴(Given-When-Then과 동일)은 테스트 대상 객체 사전 준비, 테스트 메서드 실행, 결과 검증 3단계로 가독성을 극대화합니다."
  },
  {
    "id": 505,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 배포에서 사용자가 앱의 새로운 버전을 명시적으로 인지하지 못하도록 아주 작은 점진적 단위로 여러 번 운영 서버 인스턴스를 하나씩 순차 교체하는 배포 방식은?",
    "options": [
      "블루-그린 배포",
      "빅뱅 배포",
      "롤링 배포 (Rolling Deployment)",
      "카나리 배포"
    ],
    "answer_index": 2,
    "explanation": "롤링 배포(Rolling Update)는 서비스 인스턴스를 순차적으로 하나씩 구버전에서 신버전으로 업그레이드하여 무중단을 구현합니다."
  },
  {
    "id": 506,
    "subject": "소프트웨어 개발",
    "question": "컴파일 언어와 인터프리터 언어의 실행 특성에 대한 비교로 옳은 것은?",
    "options": [
      "C언어는 인터프리터 언어이고 Python은 순수 컴파일 언어이다.",
      "인터프리터 언어가 항상 컴파일 언어보다 실행 속도가 빠르다.",
      "컴파일 언어는 소스 코드 없이 기계어 파일만으로 실행할 수 없다.",
      "컴파일 언어는 소스 전체를 기계어로 사전 번역하여 실행 속도가 빠르고, 인터프리터 언어는 한 줄씩 해석/실행하여 개발 및 디버깅이 편리하다."
    ],
    "answer_index": 3,
    "explanation": "C/C++ 같은 컴파일 언어는 사전 빌드를 통해 고속 실행 바이너리를 생성하며, Python/JS 같은 인터프리터 언어는 플랫폼 독립적이고 대화식 개발이 용이합니다."
  },
  {
    "id": 507,
    "subject": "소프트웨어 개발",
    "question": "테스트 주도 개발(TDD)을 도입했을 때 기대할 수 있는 효과로 거리가 먼 것은?",
    "options": [
      "테스트 코드 작성을 위한 초기 개발 시간의 완전한 소멸",
      "코드의 모듈화 및 결합도 감소",
      "과감한 리팩토링을 뒷받침하는 안전망 확보",
      "요구사항에 대한 명확한 이해와 버그 감소"
    ],
    "answer_index": 0,
    "explanation": "TDD는 초기에 테스트 코드를 먼저 짜야 하므로 초기 개발 시간은 약간 더 소요되지만 장기적으로 디버깅 및 유지보수 비용을 대폭 절감합니다."
  },
  {
    "id": 508,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 모듈 패키징 작업 시 모듈 간의 결합도를 낮추고 이식성을 높이기 위해 외부 환경 설정값(DB 접속 주소 등)을 소스 코드에 하드코딩하지 않고 관리하는 기법은?",
    "options": [
      "전역 변수 선언",
      "외부 환경 변수(.env / Config) 분리 관리",
      "단일 모듈 병합",
      "인라인 하드코딩"
    ],
    "answer_index": 1,
    "explanation": "12-Factor App 원칙에 따라 환경에 종속적인 설정(환경변수)은 코드와 분리하여 파일이나 OS 변수로 주입받아야 재패키징 없이 배포 가능합니다."
  },
  {
    "id": 509,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 테스트에서 전체 시스템의 기능 테스트가 끝난 후, 최종 배포 직전에 핵심 주요 기능들이 정상 동작하는지 아주 가볍고 빠르게 훑어보는 테스트는?",
    "options": [
      "인수 테스트",
      "스트레스 테스트",
      "스모크 테스트 (Smoke Test / Sanity Test)",
      "보안 테스트"
    ],
    "answer_index": 2,
    "explanation": "스모크 테스트(Smoke Test)는 하드웨어 전원을 켰을 때 연기(Smoke)가 나는지 보듯 빌드 직후 핵심 기본 기능의 정상 기동 여부를 빠르게 점검합니다."
  },
  {
    "id": 510,
    "subject": "소프트웨어 개발",
    "question": "소프트웨어 형상 관리에서 변경 사항을 공식적으로 인정받고 버전 번호가 매겨진 변경 불가능한 기준 상태를 의미하는 용어는?",
    "options": [
      "스냅샷",
      "체크포인트",
      "태그",
      "베이스라인 (Baseline, 기준선)"
    ],
    "answer_index": 3,
    "explanation": "기준선(Baseline)은 공식적인 검토와 승인을 거쳐 합의된 산출물 집합으로 형상 통제 위원회(CCB)의 공식 승인 없이는 변경할 수 없습니다."
  },
  {
    "id": 511,
    "subject": "데이터베이스 구축",
    "question": "데이터 모델링을 수행할 때 고려하는 3가지 기본 관점(Perspective)에 해당하지 않는 것은?",
    "options": [
      "네트워크 관점 (Where)",
      "데이터 관점 (What)",
      "프로세스 관점 (How)",
      "상관 관점 (Interaction)"
    ],
    "answer_index": 0,
    "explanation": "데이터 모델링 3대 관점은 1) 데이터 관점(업무가 필요로 하는 데이터 What), 2) 프로세스 관점(실제 수행 작업 How), 3) 데이터와 프로세스의 상관 관점(Interaction)입니다."
  },
  {
    "id": 512,
    "subject": "데이터베이스 구축",
    "question": "물리적 데이터베이스 설계에서 하나의 테이블에 포함된 대량의 컬럼 중 자주 조회되는 컬럼과 거의 조회되지 않는 대용량 텍스트 컬럼을 별도 테이블로 쪼개는 기법은?",
    "options": [
      "수평 분할 (Horizontal Partitioning)",
      "수직 분할 (Vertical Partitioning)",
      "테이블 병합",
      "중복 컬럼 추가"
    ],
    "answer_index": 1,
    "explanation": "수직 분할은 컬럼(열) 단위로 분리하여 한 블록에 더 많은 행을 담을 수 있게 함으로써 디스크 I/O를 절감합니다."
  },
  {
    "id": 513,
    "subject": "데이터베이스 구축",
    "question": "두 릴레이션의 공통된 속성값에 대해 동등 조인(Equi Join)을 수행한 후, 조인에 사용된 중복 속성을 단 하나만 남기고 결과 릴레이션을 구성하는 순수 관계대수 연산자는?",
    "options": [
      "외부 조인 (Outer Join)",
      "세타 조인 (Theta Join)",
      "자연 조인 (Natural Join, ⋈N)",
      "세미 조인 (Semi Join)"
    ],
    "answer_index": 2,
    "explanation": "자연 조인(Natural Join)은 동일한 이름을 가진 모든 공통 속성을 등가 비교하여 조인하고 중복 컬럼을 하나로 통합합니다."
  },
  {
    "id": 514,
    "subject": "데이터베이스 구축",
    "question": "SQL GROUP BY 구문에서 소계(Subtotal)와 총계(Grand Total)를 계층적 단계로 자동 산출해 주는 표준 함수는?",
    "options": [
      "HAVING",
      "CUBE",
      "GROUPING",
      "ROLLUP"
    ],
    "answer_index": 3,
    "explanation": "ROLLUP(A, B)은 계층적 소계를 계산하여 (A, B별 소계) -> (A별 소계) -> (전체 총계)를 계층적으로 생성합니다."
  },
  {
    "id": 515,
    "subject": "데이터베이스 구축",
    "question": "SQL GROUP BY 구문에서 인자로 지정된 모든 가능한 차원의 조합(다차원 집계)에 대해 소계와 총계를 산출하는 함수는?",
    "options": [
      "CUBE",
      "ROLLUP",
      "GROUPING SETS",
      "RANK"
    ],
    "answer_index": 0,
    "explanation": "CUBE(A, B)는 (A, B), (A), (B), () 처럼 2^n개의 모든 가능한 다차원 조합의 집계를 생성합니다."
  },
  {
    "id": 516,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스에서 특정 이벤트(INSERT, UPDATE, DELETE)가 발생할 때마다 DBMS에 의해 자동으로 감지되어 연쇄 실행되는 저장 프로시저 객체는?",
    "options": [
      "뷰 (View)",
      "트리거 (Trigger)",
      "인덱스 (Index)",
      "시퀀스 (Sequence)"
    ],
    "answer_index": 1,
    "explanation": "트리거(Trigger)는 테이블에 DML 연산이 수행될 때 사전(BEFORE) 또는 사후(AFTER)에 자동으로 트리거되어 실행되는 특수 프로시저입니다."
  },
  {
    "id": 517,
    "subject": "데이터베이스 구축",
    "question": "SQL 질의 실행 결과로 반환된 다중 행(Multiple Rows)의 결과 집합을 한 행씩 순차적으로 순회하며 처리하기 위해 사용하는 포인터 메커니즘은?",
    "options": [
      "트랜잭션 (Transaction)",
      "인덱스 (Index)",
      "커서 (Cursor)",
      "세이브포인트"
    ],
    "answer_index": 2,
    "explanation": "커서(Cursor)는 SELECT 문의 복수 결과 집합에서 현재 처리 중인 행의 위치를 가리키며 FETCH 연산을 통해 한 행씩 추출합니다."
  },
  {
    "id": 518,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 로킹(Locking) 단위에 따른 특성으로 옳은 것은?",
    "options": [
      "로킹 단위와 병행성 사이에는 아무런 관계가 없다.",
      "로킹 단위가 작으면(행 레벨) 동시성이 낮아진다.",
      "로킹 단위가 크면 병행 제어가 정밀해진다.",
      "로킹 단위가 크면(테이블 레벨) 락 관리 오버헤드는 적지만 동시성(병행성)은 낮아진다."
    ],
    "answer_index": 3,
    "explanation": "로킹 단위(테이블 vs 행): 단위가 클수록 락 개수가 적어 오버헤드는 감소하지만 다른 트랜잭션이 대기해야 하므로 동시성이 떨어집니다."
  },
  {
    "id": 519,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 트랜잭션 로킹 기법에서 읽기 전용 공유 락(Shared Lock, S-Lock)과 쓰기 전용 배타 락(Exclusive Lock, X-Lock)의 공존성으로 옳은 것은?",
    "options": [
      "공유 락(S)끼리는 동시에 동일 자원에 접근할 수 있지만, 배타 락(X)은 어떠한 락과도 공존할 수 없다.",
      "배타 락끼리는 동시에 접근할 수 있다.",
      "공유 락이 걸린 자원에 다른 트랜잭션이 배타 락을 즉시 획득할 수 있다.",
      "락의 종류와 관계없이 모든 락은 항상 호환된다."
    ],
    "answer_index": 0,
    "explanation": "S-Lock은 읽기 작업이므로 여러 트랜잭션이 공유할 수 있지만, X-Lock은 쓰기 독점이므로 다른 S-Lock이나 X-Lock과 양립할 수 없습니다."
  },
  {
    "id": 520,
    "subject": "데이터베이스 구축",
    "question": "두 개 이상의 트랜잭션이 서로 상대방이 점유한 자원의 락 해제를 무한히 대기하고 있어 시스템 진행이 영원히 멈추는 상태를 무엇이라 하는가?",
    "options": [
      "스레싱 (Thrashing)",
      "교착상태 (Deadlock)",
      "연쇄 복귀 (Cascading Rollback)",
      "갱신 분실"
    ],
    "answer_index": 1,
    "explanation": "데이터베이스 교착상태(Deadlock)는 트랜잭션들이 순환 대기 고리를 형성하여 외부의 개입(교착 탐지 및 강제 롤백) 없이는 풀리지 않는 상태입니다."
  },
  {
    "id": 521,
    "subject": "데이터베이스 구축",
    "question": "현대 DBMS에서 트랜잭션의 읽기(SELECT) 작업과 쓰기(UPDATE) 작업이 서로를 블록하지 않고, 롤백 세그먼트의 과거 스냅샷 버전을 읽음으로써 동시성을 극대화하는 기법은?",
    "options": [
      "타임스탬프 순서 규약",
      "2단계 로킹 규약",
      "MVCC (Multi-Version Concurrency Control, 다중 버전 동시성 제어)",
      "낙관적 병행 제어"
    ],
    "answer_index": 2,
    "explanation": "MVCC는 데이터 변경 시 이전 버전을 Undo 영역에 유지하여 읽기 요청에는 스냅샷 버전을 보여줌으로써 락 대기 없는 고속 동시성을 제공합니다."
  },
  {
    "id": 522,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스에서 인덱스를 타지 못하고 테이블 전체를 처음부터 끝까지 읽어 들이는 스캔 방식을 의미하는 용어는?",
    "options": [
      "Index Skip Scan",
      "Index Range Scan",
      "Index Unique Scan",
      "Table Full Scan (전체 테이블 스캔)"
    ],
    "answer_index": 3,
    "explanation": "Table Full Scan은 인덱스를 사용하지 않고 테이블의 모든 데이터 블록을 순차적으로 읽는 방식으로 대량 데이터 검색이나 인덱스가 없을 때 수행됩니다."
  },
  {
    "id": 523,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스의 데이터 파일, 테이블, 인덱스, 뷰, 제약조건, 사용자 권한 등에 대한 메타데이터(Metadata)를 보관하는 시스템 테이블의 집합은?",
    "options": [
      "시스템 카탈로그 (System Catalog / Data Dictionary)",
      "로그 파일",
      "임시 테이블 스페이스",
      "트랜잭션 테이블"
    ],
    "answer_index": 0,
    "explanation": "시스템 카탈로그(데이터 사전)는 '데이터에 관한 데이터(메타데이터)'를 보관하며 사용자가 DDL을 실행할 때 DBMS가 자동으로 갱신합니다."
  },
  {
    "id": 524,
    "subject": "데이터베이스 구축",
    "question": "분산 트랜잭션에서 모든 참여 노드가 트랜잭션을 안전하게 커밋하거나 전원 롤백하도록 보장하는 2단계 커밋(2PC)의 2단계가 올바른 것은?",
    "options": [
      "커밋 단계 -> 검증 단계",
      "준비 단계 (Prepare Phase) -> 커밋 단계 (Commit Phase)",
      "시작 단계 -> 실행 단계",
      "판독 단계 -> 기록 단계"
    ],
    "answer_index": 1,
    "explanation": "2PC(2-Phase Commit)는 1) 조정자가 모든 노드에 커밋 준비 가능 여부를 묻는 Prepare 단계와 2) 모두 예(Yes)일 때 최종 Commit을 명령하는 단계로 진행됩니다."
  },
  {
    "id": 525,
    "subject": "데이터베이스 구축",
    "question": "NoSQL 시스템의 트랜잭션 철학인 BASE 원칙의 구성 요소가 아닌 것은?",
    "options": [
      "유연한 상태 (Soft State)",
      "기본적 가용성 (Basically Available)",
      "원자성 (Atomicity)",
      "최종 일관성 (Eventual Consistency)"
    ],
    "answer_index": 2,
    "explanation": "NoSQL의 BASE는 RDBMS의 ACID에 대비되는 완화된 모델로 Basically Available, Soft state, Eventual consistency의 앞 글자를 딴 원칙입니다."
  },
  {
    "id": 526,
    "subject": "데이터베이스 구축",
    "question": "MongoDB와 같이 스키마가 고정되지 않고 JSON, BSON 형태의 유연한 문서 단위로 데이터를 저장하는 NoSQL 데이터베이스 유형은?",
    "options": [
      "그래프 데이터베이스",
      "키-값 데이터베이스",
      "컬럼 기반 데이터베이스",
      "문서 지향 데이터베이스 (Document Store)"
    ],
    "answer_index": 3,
    "explanation": "Document 스토어는 JSON/XML 문서 형태로 복합 구조와 중첩 배열을 유연하게 보관하며 대표적으로 MongoDB가 있습니다."
  },
  {
    "id": 527,
    "subject": "데이터베이스 구축",
    "question": "Neo4j와 같이 노드(Node)와 간선(Edge), 속성(Property)으로 개체 간의 복잡한 연결 관계와 네트워크를 직접 모델링하는 NoSQL 유형은?",
    "options": [
      "그래프 데이터베이스 (Graph DB)",
      "키-값 스토어",
      "문서 스토어",
      "와이드 컬럼 스토어"
    ],
    "answer_index": 0,
    "explanation": "그래프 데이터베이스는 소셜 네트워크, 사기 탐지, 추천 엔진처럼 관계와 경로 탐색이 핵심인 복잡한 네트워크 데이터에 최적화되어 있습니다."
  },
  {
    "id": 528,
    "subject": "데이터베이스 구축",
    "question": "분산 데이터베이스에서 여러 사이트에 분할된 데이터 조각들이 서로 중복되지 않고 상호 배타적인 부분 집합으로 나뉘어야 한다는 분할 원칙은?",
    "options": [
      "완전성 (Completeness)",
      "비중복성 (Disjointness)",
      "재구성성 (Reconstruction)",
      "투명성 (Transparency)"
    ],
    "answer_index": 1,
    "explanation": "데이터 분할 3대 규칙: 완전성(누락 없음), 재구성성(원래 관계 복원 가능), 비중복성(분할된 프래그먼트 간 중복 없음)입니다."
  },
  {
    "id": 529,
    "subject": "데이터베이스 구축",
    "question": "SQL에서 두 테이블을 조인할 때 WHERE 절의 조인 조건이 누락되었을 때 발생하는 조인으로 양 테이블의 모든 가능한 행의 조합(Cartesian Product)이 출력되는 조인은?",
    "options": [
      "NATURAL JOIN",
      "INNER JOIN",
      "CROSS JOIN",
      "LEFT JOIN"
    ],
    "answer_index": 2,
    "explanation": "CROSS JOIN은 조건 없이 두 테이블 간의 카티션 곱(Cartesian Product)을 생성하여 M × N 개의 방대한 행을 결과로 반환합니다."
  },
  {
    "id": 530,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스의 데이터 품질(Quality)을 확보하기 위해 컬럼에 들어갈 수 있는 데이터의 규칙, 포맷, 유효 범위를 체계적으로 표준화한 문서는?",
    "options": [
      "요구사항 추적표",
      "테이블 명세서",
      "ERD",
      "데이터 표준 용어 및 도메인 정의서"
    ],
    "answer_index": 3,
    "explanation": "데이터 표준화는 표준 단어, 표준 용어, 표준 도메인, 표준 코드를 사전 정의하여 전사 시스템의 데이터 불일치를 방지합니다."
  },
  {
    "id": 531,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션 실행 중 시스템에 심각한 오류가 발생했을 때 로그 파일의 변경 전 값(Before Image)을 이용하여 미완료 트랜잭션의 효과를 취소시키는 연산은?",
    "options": [
      "UNDO",
      "REDO",
      "COMMIT",
      "ROLLUP"
    ],
    "answer_index": 0,
    "explanation": "UNDO 연산은 장애 발생 시 완료되지 못한 트랜잭션을 취소하고 원래 상태로 되돌리는 복구 작업입니다."
  },
  {
    "id": 532,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션 실행 중 장애가 발생했으나 이미 커밋(Commit)이 완료된 트랜잭션에 대해 로그의 변경 후 값(After Image)을 이용해 DB에 재반영하는 연산은?",
    "options": [
      "UNDO",
      "REDO",
      "ABORT",
      "CASCADE"
    ],
    "answer_index": 1,
    "explanation": "REDO(재실행) 연산은 이미 정상 커밋되었으나 디스크에 미처 쓰이지 못한 변경사항을 로그를 바탕으로 다시 실행하여 영속성을 보장합니다."
  },
  {
    "id": 533,
    "subject": "데이터베이스 구축",
    "question": "인덱스 설계 시 인덱스 컬럼을 가공하여 조회 조건을 줄 경우(예: `WHERE SUBSTR(jumin, 1, 2) = '90'`) 인덱스가 타지 않는 문제를 해결하기 위한 특수 인덱스는?",
    "options": [
      "비트맵 인덱스",
      "클러스터드 인덱스",
      "함수 기반 인덱스 (Function-Based Index, FBI)",
      "해시 인덱스"
    ],
    "answer_index": 2,
    "explanation": "함수 기반 인덱스는 표현식이나 함수 연산 결과를 미리 인덱스로 생성하여 가공 컬럼 검색 시에도 인덱스 스캔을 탈 수 있게 합니다."
  },
  {
    "id": 534,
    "subject": "데이터베이스 구축",
    "question": "SQL 질의문에서 현재 행을 기준으로 이전 행의 컬럼 값을 가져오는 윈도우 함수는?",
    "options": [
      "LAST_VALUE()",
      "LEAD()",
      "FIRST_VALUE()",
      "LAG()"
    ],
    "answer_index": 3,
    "explanation": "LAG(column, offset) 함수는 현재 행 기준으로 이전 행의 값을 조회하며, 다음 행의 값을 조회하는 것은 LEAD() 함수입니다."
  },
  {
    "id": 535,
    "subject": "데이터베이스 구축",
    "question": "관계 데이터 모델의 릴레이션에서 속성(Attribute)들의 특성으로 옳은 것은?",
    "options": [
      "각 속성은 릴레이션 내에서 유일한 이름을 가지며, 속성 간의 순서는 상관없다(무순서성).",
      "동일한 릴레이션 내에 같은 이름의 속성이 복수로 존재할 수 있다.",
      "속성은 더 이상 쪼갤 수 없는 원자값이 아닌 복합 배열을 가져야 한다.",
      "속성의 물리적 순서가 바뀌면 릴레이션의 의미가 완전히 달라진다."
    ],
    "answer_index": 0,
    "explanation": "릴레이션의 속성은 고유한 명칭을 가지며 수학적 튜플의 성분 집합이므로 컬럼의 나열 순서는 의미가 없습니다."
  },
  {
    "id": 536,
    "subject": "데이터베이스 구축",
    "question": "E-R 모델을 관계형 데이터베이스 모델로 변환(Mapping)할 때 1:1 관계의 올바른 매핑 방식으로 적절하지 않은 것은?",
    "options": [
      "양쪽 개체 중 한쪽의 기본키를 다른 쪽의 외래키로 추가한다.",
      "두 테이블 간의 모든 컬럼을 강제로 삭제한다.",
      "두 개체를 단일 테이블로 통합한다.",
      "양쪽 개체의 기본키를 서로 교차 외래키로 참조하게 한다."
    ],
    "answer_index": 1,
    "explanation": "1:1 관계는 두 개체를 하나의 테이블로 합치거나, 한쪽 테이블에 상대방 기본키를 외래키(UNIQUE 제약)로 배치하여 변환합니다."
  },
  {
    "id": 537,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스 튜닝에서 쿼리 실행 속도를 저하시키는 원인으로 가장 거리가 먼 것은?",
    "options": [
      "WHERE 절에 부정형 조건(!=, NOT IN)을 남발하는 경우",
      "인덱스 컬럼을 함수로 변형하여 비교하는 경우",
      "자주 사용되는 동등 조건 컬럼에 적절한 인덱스를 생성해 둔 경우",
      "대용량 테이블 간의 무조건적인 카티션 곱(CROSS JOIN)을 발생시키는 경우"
    ],
    "answer_index": 2,
    "explanation": "빈출 조회 조건 컬럼에 적절한 선택도(Selectivity) 높은 인덱스를 생성하는 것은 전형적인 성능 향상 튜닝 기법입니다."
  },
  {
    "id": 538,
    "subject": "데이터베이스 구축",
    "question": "트랜잭션 ACID 특성 중 '둘 이상의 트랜잭션이 동시에 병행 실행될 때 각각의 트랜잭션은 다른 트랜잭션의 연산 중간 과정에 간섭받지 않고 독립적으로 수행되어야 한다'는 원칙은?",
    "options": [
      "영속성 (Durability)",
      "원자성 (Atomicity)",
      "일관성 (Consistency)",
      "고립성 / 격리성 (Isolation)"
    ],
    "answer_index": 3,
    "explanation": "고립성(Isolation)은 트랜잭션 실행 중 생성되는 중간 데이터가 커밋 전까지 다른 트랜잭션에게 보이지 않도록 격리하는 특성입니다."
  },
  {
    "id": 539,
    "subject": "데이터베이스 구축",
    "question": "데이터베이스에서 테이블 구조 자체는 남겨두고 테이블 내의 모든 데이터 레코드만을 디스크 공간 반환과 함께 초고속으로 일괄 삭제하는 DDL 명령어는?",
    "options": [
      "TRUNCATE",
      "DELETE",
      "DROP",
      "ALTER"
    ],
    "answer_index": 0,
    "explanation": "TRUNCATE는 로그 기록을 최소화하고 테이블의 초기 저장 공간을 반환하며 모든 행을 즉시 삭제하는 DDL 문입니다 (DELETE보다 훨씬 빠름)."
  },
  {
    "id": 540,
    "subject": "데이터베이스 구축",
    "question": "SQL 질의문에서 특정 문자열 패턴 검색을 위해 사용하는 연산자와 임의의 0개 이상의 문자열을 대표하는 와일드카드 기호는?",
    "options": [
      "IN 연산자와 * 기호",
      "LIKE 연산자와 % 기호",
      "MATCH 연산자와 ? 기호",
      "REGEXP 연산자와 # 기호"
    ],
    "answer_index": 1,
    "explanation": "SQL의 패턴 매칭은 LIKE 연산자를 사용하며, `%`는 0개 이상의 임의 문자열, `_`는 정확히 1개의 임의 문자를 의미합니다."
  },
  {
    "id": 541,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 다음 연산자들의 우선순위가 가장 높은 것은?",
    "options": [
      "비트 AND 연산자 &",
      "산술 덧셈 연산자 +",
      "괄호 연산자 ()",
      "대입 연산자 ="
    ],
    "answer_index": 2,
    "explanation": "연산자 우선순위 중 최우선은 괄호(), 배열 첨자[], 구조체 접근(., ->) 등 최우선 연산자입니다. 대입 연산자는 최하위 그룹에 속합니다."
  },
  {
    "id": 542,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 `int *arr[3];` 과 `int (*arr)[3];` 의 차이점으로 옳은 것은?",
    "options": [
      "`int (*arr)[3]`은 함수 포인터 선언이다.",
      "`int *arr[3]`은 배열 포인터이다.",
      "두 선언은 완전히 동일한 의미를 갖는다.",
      "`int *arr[3]`은 포인터 3개를 저장하는 포인터 배열이고, `int (*arr)[3]`은 크기 3인 정수형 1차원 배열을 가리키는 배열 포인터이다."
    ],
    "answer_index": 3,
    "explanation": "대괄호[]의 우선순위가 *보다 높으므로 `int *arr[3]`은 포인터들의 배열(Array of Pointers)이며, 괄호로 묶은 `int (*arr)[3]`은 배열을 가리키는 포인터(Pointer to an Array)입니다."
  },
  {
    "id": 543,
    "subject": "프로그래밍 언어 활용",
    "question": "자바 가상 머신(JVM)의 메모리 구조 중 클래스 메타데이터, 메서드 바이트코드, static 정적 변수 등이 로딩되어 저장되는 영역은?",
    "options": [
      "메서드 영역 / 메타스페이스 (Method Area / Metaspace)",
      "힙 영역 (Heap)",
      "JVM 스택 영역 (Stack)",
      "PC 레지스터"
    ],
    "answer_index": 0,
    "explanation": "메서드 영역(Java 8 이후 네이티브 메모리의 Metaspace)은 JVM이 시작될 때 생성되어 클래스 로더가 읽어 들인 클래스 구조와 static 변수를 보관합니다."
  },
  {
    "id": 544,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 제네릭(Generic) 와일드카드 선언 중 `<? extends T>` 가 의미하는 것은?",
    "options": [
      "T 클래스의 상위 부모 클래스들만 허용 (하한 제한)",
      "T 클래스 및 T를 상속받은 하위 클래스들만 허용 (상한 제한)",
      "모든 객체 타입을 무제한 허용",
      "인스턴스 생성을 금지"
    ],
    "answer_index": 1,
    "explanation": "`<? extends T>`는 공변성(Covariance)을 부여하여 T 또는 T의 자식 타입만을 파라미터로 허용하는 상한 제한 와일드카드입니다."
  },
  {
    "id": 545,
    "subject": "프로그래밍 언어 활용",
    "question": "단 하나의 추상 메서드만을 선언하여 람다식(Lambda Expression)의 대상이 될 수 있는 Java의 특수 인터페이스를 무엇이라 하는가?",
    "options": [
      "추상 인터페이스",
      "마커 인터페이스",
      "함수형 인터페이스 (Functional Interface)",
      "단일 구현 인터페이스"
    ],
    "answer_index": 2,
    "explanation": "함수형 인터페이스(`@FunctionalInterface`)는 정확히 하나의 추상 메서드만을 가지며 람다식이나 메서드 참조와 1:1로 매핑됩니다."
  },
  {
    "id": 546,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 리스트 슬라이싱 문법 `arr[:: -1]` 의 실행 결과는?",
    "options": [
      "빈 리스트",
      "리스트의 첫 번째 원소만 추출",
      "리스트의 마지막 원소만 삭제",
      "리스트의 모든 원소를 역순으로 뒤집은 새 리스트"
    ],
    "answer_index": 3,
    "explanation": "슬라이싱 step에 -1을 주면 리스트를 끝에서부터 역방향으로 순회하므로 리스트 전체가 역순으로 반전된 결과를 얻습니다."
  },
  {
    "id": 547,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 함수의 가변 인자(Variable Arguments)로 튜플 형태로 위치 인자를 여러 개 동적으로 넘겨받을 때 사용하는 문법 기호는?",
    "options": [
      "*args",
      "**kwargs",
      "&args",
      "$args"
    ],
    "answer_index": 0,
    "explanation": "`*args`는 임의 개수의 위치 인자를 튜플(tuple)로 패킹하여 받고, `**kwargs`는 임의 개수의 키워드 인자를 딕셔너리(dict)로 받습니다."
  },
  {
    "id": 548,
    "subject": "프로그래밍 언어 활용",
    "question": "Python CPython 구현체에서 멀티스레드를 사용하더라도 한 시점에 오직 하나의 스레드만 파이썬 바이트코드를 실행하도록 잠그는 메커니즘은?",
    "options": [
      "JVM 락",
      "GIL (Global Interpreter Lock)",
      "뮤텍스 세마포어",
      "타임슬라이스 락"
    ],
    "answer_index": 1,
    "explanation": "GIL(Global Interpreter Lock)은 파이썬 객체 메모리 관리를 위해 단일 스레드 실행을 강제하므로 CPU 연산 위주의 작업에서는 멀티프로세싱(multiprocessing)을 권장합니다."
  },
  {
    "id": 549,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 정상적으로 실행 중이던 프로세스가 I/O 입출력 요청이나 자원 대기(Wait)로 인해 CPU를 자진 반납하고 들어가는 상태는?",
    "options": [
      "실행 (Running) 상태",
      "준비 (Ready) 상태",
      "대기 / 블록 (Blocked / Waiting) 상태",
      "종료 (Terminated) 상태"
    ],
    "answer_index": 2,
    "explanation": "실행 중인 프로세스가 디스크 I/O 등의 완료를 기다릴 때는 준비 큐가 아닌 대기(Blocked) 큐로 이동하여 이벤트 완료 신호를 기다립니다."
  },
  {
    "id": 550,
    "subject": "프로그래밍 언어 활용",
    "question": "CPU의 가상 주소를 물리적 실제 메모리 주소로 변환하는 하드웨어 장치(MMU) 내에 존재하는 고속 페이지 테이블 변환 캐시 메모리는?",
    "options": [
      "DRAM 버퍼",
      "L1 캐시",
      "레지스터",
      "TLB (Translation Lookaside Buffer)"
    ],
    "answer_index": 3,
    "explanation": "TLB는 가상 페이지 번호와 물리 프레임 번호의 변환 쌍을 캐싱하여 매번 메모리의 페이지 테이블을 2번 참조하는 오버헤드를 획기적으로 줄여줍니다."
  },
  {
    "id": 551,
    "subject": "프로그래밍 언어 활용",
    "question": "IP 주소와 서브넷 마스크를 기반으로 특정 네트워크 대역을 더 작은 여러 개의 서브네트워크로 쪼개어 IP 주소 낭비를 줄이는 기법은?",
    "options": [
      "서브넷팅 (Subnetting)",
      "슈퍼넷팅 (Supernetting)",
      "터널링",
      "스위칭"
    ],
    "answer_index": 0,
    "explanation": "서브넷팅(Subnetting)은 호스트 비트를 빌려와 서브넷 비트로 확장함으로써 단일 네트워크를 여러 개의 독립 서브넷으로 분할하는 기법입니다."
  },
  {
    "id": 552,
    "subject": "프로그래밍 언어 활용",
    "question": "TCP 프로토콜에서 통신 세션을 정상적으로 완전히 종료(Close)하기 위해 클라이언트와 서버 간에 주고받는 절차는?",
    "options": [
      "3-Way Handshake",
      "4-Way Handshake (FIN, ACK, FIN, ACK)",
      "2-Way Handshake",
      "1-Way Reset"
    ],
    "answer_index": 1,
    "explanation": "연결 수립은 3-Way Handshake(SYN -> SYN/ACK -> ACK)이며, 양방향 연결 종료는 4-Way Handshake(FIN -> ACK -> FIN -> ACK)로 수행됩니다."
  },
  {
    "id": 553,
    "subject": "프로그래밍 언어 활용",
    "question": "웹 브라우저와 웹 서버 간에 HTTP의 단방향 요청-응답 한계를 극복하고, 단일 TCP 연결 상에서 지연 없이 실시간 양방향(Full-Duplex) 통신을 지원하는 프로토콜은?",
    "options": [
      "FTP",
      "HTTP/1.0",
      "웹소켓 (WebSocket, ws://)",
      "SNMP"
    ],
    "answer_index": 2,
    "explanation": "웹소켓(WebSocket)은 핸드셰이크 이후 지속적인 연결을 유지하며 채팅, 주식 시세 등 실시간 양방향 데이터 교환을 제공합니다."
  },
  {
    "id": 554,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 문자열의 끝을 나타내기 위해 컴파일러가 문자열 배열의 마지막에 자동으로 삽입하는 아스키 코드 값 0의 특수 문자는?",
    "options": [
      "EOF",
      "개행 문자 ('\\n')",
      "공백 문자 (' ')",
      "널 문자 ('\\0')"
    ],
    "answer_index": 3,
    "explanation": "C언어 문자열은 널 종료 문자('\\0', NULL, 값 0)로 끝을 식별하므로 \"ABC\" 문자열을 저장하려면 최소 4바이트 크기의 배열이 필요합니다."
  },
  {
    "id": 555,
    "subject": "프로그래밍 언어 활용",
    "question": "객체지향 프로그래밍에서 메서드 호출과 실제 실행될 코드의 바인딩이 컴파일 타임이 아닌 프로그램 실행 시점(Runtime)에 객체의 실제 타입에 따라 결정되는 현상은?",
    "options": [
      "동적 바인딩 (Dynamic Binding)",
      "정적 바인딩 (Static Binding)",
      "컴파일 타임 링킹",
      "매크로 치환"
    ],
    "answer_index": 0,
    "explanation": "동적 바인딩(Dynamic/Late Binding)은 부모 클래스 참조 변수로 자식 인스턴스의 오버라이딩된 메서드를 호출할 때 런타임에 다형적으로 메서드를 찾아 실행합니다."
  },
  {
    "id": 556,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 `int *p = (int *)malloc(sizeof(int) * 5);` 로 할당받은 동적 메모리를 해제하기 위해 호출해야 하는 표준 라이브러리 함수는?",
    "options": [
      "delete(p);",
      "free(p);",
      "clear(p);",
      "release(p);"
    ],
    "answer_index": 1,
    "explanation": "C언어의 표준 동적 메모리 해제 함수는 `free(ptr)` 입니다. C++에서는 delete 연산자를 사용합니다."
  },
  {
    "id": 557,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 여러 프로세스가 하나의 공유 자원을 놓고 서로 먼저 접근하려고 경쟁하는 과정에서 접근 순서에 따라 실행 결과가 달라지는 비정상적 상태는?",
    "options": [
      "기아 상태 (Starvation)",
      "교착 상태 (Deadlock)",
      "경쟁 상태 (Race Condition)",
      "오버플로"
    ],
    "answer_index": 2,
    "explanation": "경쟁 상태(Race Condition)는 동기화 메커니즘 없이 두 개 이상의 스레드가 공유 변수에 동시 쓰기 작업을 수행할 때 데이터 불일치가 일어나는 현상입니다."
  },
  {
    "id": 558,
    "subject": "프로그래밍 언어 활용",
    "question": "소프트웨어 인터럽트(Software Interrupt)의 일종으로 0으로 나누기, 불법 메모리 접근, 오버플로 등 프로그램 실행 중 발생하는 예외적인 하드웨어 신호를 가리키는 용어는?",
    "options": [
      "버퍼링 (Buffering)",
      "폴링 (Polling)",
      "스풀링 (Spooling)",
      "트랩 (Trap)"
    ],
    "answer_index": 3,
    "explanation": "트랩(Trap)은 CPU 내부에서 명령어를 실행하다가 발생하는 예외(Exception)나 시스템 콜 호출에 의해 유발되는 동기식 소프트웨어 인터럽트입니다."
  },
  {
    "id": 559,
    "subject": "프로그래밍 언어 활용",
    "question": "DNS(Domain Name System) 레코드 유형 중 호스트 도메인 이름을 IPv4 주소(32비트)로 직접 매핑하는 가장 기본적인 레코드는?",
    "options": [
      "A 레코드 (Address Record)",
      "AAAA 레코드",
      "CNAME 레코드",
      "MX 레코드"
    ],
    "answer_index": 0,
    "explanation": "A 레코드는 도메인을 IPv4 주소로 매핑하며, IPv6 주소로 매핑하는 것은 AAAA 레코드, 별칭 도메인으로 매핑하는 것은 CNAME 레코드입니다."
  },
  {
    "id": 560,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어에서 구조체 변수의 전체 메모리 크기가 각 멤버의 단순 크기 합보다 커지는 주된 원인인 컴파일러 메모리 정렬 최적화 기법은?",
    "options": [
      "메모리 단편화",
      "구조체 패딩 (Structure Padding / Alignment)",
      "가비지 컬렉션",
      "스택 오버플로"
    ],
    "answer_index": 1,
    "explanation": "CPU의 데이터 버스 워드 단위(4바이트 또는 8바이트) 고속 접근을 위해 컴파일러가 구조체 멤버 사이에 빈 바이트 패딩을 채워 넣습니다."
  },
  {
    "id": 561,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 `String` 객체는 불변(Immutable) 객체이므로 문자열을 빈번하게 결합(+)할 때 메모리 낭비가 심합니다. 이를 해결하기 위해 사용하는 가변(Mutable) 문자열 클래스는?",
    "options": [
      "Scanner",
      "StringTokenizer",
      "StringBuilder / StringBuffer",
      "CharacterArray"
    ],
    "answer_index": 2,
    "explanation": "StringBuilder(비동기 고속)와 StringBuffer(스레드 안전)는 가변 버퍼를 사용하여 새로운 객체 생성 없이 문자열을 효율적으로 조작합니다."
  },
  {
    "id": 562,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 객체의 고유한 메모리 주소(식별 정수값)를 반환하는 내장 함수는?",
    "options": [
      "hex()",
      "type()",
      "hash()",
      "id()"
    ],
    "answer_index": 3,
    "explanation": "id(obj) 함수는 해당 객체의 고유 식별자(CPython 구현에서는 실제 메모리 포인터 주소)를 반환합니다."
  },
  {
    "id": 563,
    "subject": "프로그래밍 언어 활용",
    "question": "운영체제에서 가상 기억장치의 페이지 테이블 크기가 너무 커지는 문제를 해결하기 위해 물리 메모리 프레임 번호를 인덱스로 삼아 페이지 번호를 저장하는 방식은?",
    "options": [
      "역페이지 테이블 (Inverted Page Table)",
      "2단계 페이지 테이블",
      "계층적 페이지 테이블",
      "해시 페이지 테이블"
    ],
    "answer_index": 0,
    "explanation": "역페이지 테이블(Inverted Page Table)은 물리 메모리의 프레임 개수만큼만 엔트리를 생성하여 프로세스 수와 무관하게 페이지 테이블 메모리를 극도로 절약합니다."
  },
  {
    "id": 564,
    "subject": "프로그래밍 언어 활용",
    "question": "C언어 표준 라이브러리 함수 중 문자열에서 특정 구분자(Delimiter)를 기준으로 문자열을 토큰 단위로 잘라내는 함수는?",
    "options": [
      "strstr()",
      "strtok()",
      "strchr()",
      "strpbrk()"
    ],
    "answer_index": 1,
    "explanation": "strtok(str, delim) 함수는 구분자를 만나면 널 문자('\\0')로 치환하며 연속 호출을 통해 문자열을 토큰으로 분리합니다."
  },
  {
    "id": 565,
    "subject": "프로그래밍 언어 활용",
    "question": "Java에서 멀티스레드 환경 시 특정 변수에 대해 캐시 메모리가 아닌 메인 메모리에서 직접 값을 읽고 쓰도록 보장하여 가시성(Visibility) 문제를 해결하는 키워드는?",
    "options": [
      "synchronized",
      "transient",
      "volatile",
      "static"
    ],
    "answer_index": 2,
    "explanation": "volatile 키워드는 CPU 코어의 로컬 캐시 사용을 배제하고 항상 메인 메모리에 직접 읽기/쓰기를 수행하여 스레드 간 변수 값의 불일치를 방지합니다."
  },
  {
    "id": 566,
    "subject": "프로그래밍 언어 활용",
    "question": "Java 객체 직렬화(Serialization) 시 특정 멤버 변수를 직렬화 대상에서 제외하고 싶을 때 붙이는 예약어는?",
    "options": [
      "strictfp",
      "volatile",
      "native",
      "transient"
    ],
    "answer_index": 3,
    "explanation": "transient 키워드가 붙은 멤버 변수는 파일 저장이나 네트워크 전송을 위한 직렬화(Serialization) 대상에서 제외되어 기본값으로 복원됩니다."
  },
  {
    "id": 567,
    "subject": "프로그래밍 언어 활용",
    "question": "네트워크 계층의 IPv4 헤더 필드 중 전송 데이터의 무결성을 검증하기 위해 헤더 자체의 비트 오류만을 검사하는 필드는?",
    "options": [
      "Header Checksum (헤더 체크섬)",
      "TTL",
      "Protocol",
      "Total Length"
    ],
    "answer_index": 0,
    "explanation": "IPv4의 Header Checksum은 라우터를 거칠 때마다 TTL이 감소하므로 매 홉마다 재계산되며 오직 헤더의 오류만을 검사합니다."
  },
  {
    "id": 568,
    "subject": "프로그래밍 언어 활용",
    "question": "데이터 오류 제어 기법 중 송신 측에서 여러 프레임을 연속 전송한 후, 수신 측에서 오류가 발생한 프레임 이후의 모든 프레임을 폐기하고 다시 재전송받는 ARQ 방식은?",
    "options": [
      "Stop-and-Wait ARQ",
      "Go-Back-N ARQ",
      "Selective Repeat ARQ",
      "Adaptive ARQ"
    ],
    "answer_index": 1,
    "explanation": "Go-Back-N ARQ는 손상된 프레임(N번)부터 그 뒤에 정상 수신된 프레임까지 모두 폐기하고 N번부터 통째로 재전송하는 슬라이딩 윈도우 기반 방식입니다."
  },
  {
    "id": 569,
    "subject": "프로그래밍 언어 활용",
    "question": "데이터 전송 오류 제어 중 오류가 발생한 특정 프레임 하나만을 선별하여 재전송받는 효율적인 방식은?",
    "options": [
      "Stop-and-Wait ARQ",
      "Go-Back-N ARQ",
      "선택적 재전송 ARQ (Selective Repeat ARQ)",
      "체크섬 방식"
    ],
    "answer_index": 2,
    "explanation": "선택적 재전송(Selective Repeat) ARQ는 수신 측에 버퍼를 두고 오류가 난 프레임만 단독 재전송받아 정렬하므로 대역폭 낭비가 적습니다."
  },
  {
    "id": 570,
    "subject": "프로그래밍 언어 활용",
    "question": "Python에서 파일이나 소켓, 락 등 자원을 열고 닫을 때 자동으로 clean-up(close) 처리를 보장하는 컨텍스트 매니저(Context Manager) 구문 키워드는?",
    "options": [
      "using",
      "try",
      "finally",
      "with"
    ],
    "answer_index": 3,
    "explanation": "`with open('file.txt') as f:` 구문은 블록을 벗어날 때 `__exit__` 메서드가 자동 호출되어 예외 발생 여부와 무관하게 안전하게 리소스를 반환합니다."
  },
  {
    "id": 571,
    "subject": "정보시스템 구축관리",
    "question": "악성코드 중 감염된 컴퓨터들을 원격 C&C(Command & Control) 서버의 명령에 따라 분산 서비스 거부 공격(DDoS)이나 스팸 발송에 동원하는 좀비 PC 네트워크는?",
    "options": [
      "봇넷 (Botnet)",
      "웜 (Worm)",
      "루트킷 (Rootkit)",
      "랜섬웨어 (Ransomware)"
    ],
    "answer_index": 0,
    "explanation": "봇넷(Botnet)은 해커(봇마스터)의 원격 제어를 받는 수천~수만 대의 악성 봇 감염 좀비 PC 집합체입니다."
  },
  {
    "id": 572,
    "subject": "정보시스템 구축관리",
    "question": "서비스 거부 공격(DoS) 중 HTTP 요청 헤더의 끝을 알리는 개행 문자(\\r\\n\\r\\n)를 전송하지 않고 비정상적인 헤더를 매우 천천히 지속 전송하여 웹 서버의 연결 커넥션을 고갈시키는 공격은?",
    "options": [
      "SYN Flooding",
      "슬로로리스 (Slowloris / Slow HTTP Header DoS)",
      "Smurf",
      "Ping of Death"
    ],
    "answer_index": 1,
    "explanation": "Slowloris는 미완성된 HTTP 헤더를 극도로 느린 속도로 쪼개 보내 서버의 가용 워커 스레드를 장시간 점유하여 정상 접속을 마비시킵니다."
  },
  {
    "id": 573,
    "subject": "정보시스템 구축관리",
    "question": "웹 취약점 중 사용자가 로그인하여 유효한 세션 인증을 획득한 상태에서, 공격자가 제작한 악의적인 링크나 폼을 클릭하게 하여 사용자의 의지와 무관한 금융 이체, 비밀번호 변경 요청을 보내게 하는 공격은?",
    "options": [
      "SQL Injection",
      "XSS (Cross-Site Scripting)",
      "CSRF (Cross-Site Request Forgery, 사이트 간 요청 위조)",
      "SSRF"
    ],
    "answer_index": 2,
    "explanation": "CSRF는 희생자의 신뢰된 브라우저 쿠키 인증 정보를 악용하여 희생자가 공격자가 의도한 행위를 해당 웹 서버에 전송하도록 강제합니다."
  },
  {
    "id": 574,
    "subject": "정보시스템 구축관리",
    "question": "XSS(Cross-Site Scripting) 공격 유형 중 게시판 게시글이나 댓글 데이터베이스에 악성 스크립트를 영구 저장시켜 두고, 이를 열람하는 모든 일반 사용자의 브라우저에서 스크립트가 실행되게 하는 공격은?",
    "options": [
      "CSRF",
      "반사형 XSS (Reflected XSS)",
      "DOM 기반 XSS (DOM-based XSS)",
      "저장형 XSS (Stored XSS)"
    ],
    "answer_index": 3,
    "explanation": "Stored(저장형) XSS는 취약한 DB에 악성 스크립트가 영구 적재되어 불특정 다수의 방문자에게 지속적인 피해를 유발하는 가장 위험한 XSS 형태입니다."
  },
  {
    "id": 575,
    "subject": "정보시스템 구축관리",
    "question": "사용자를 속여 시각적으로 투명한 가짜 iframe 버튼을 실제 웹 페이지 위에 덧씌워 두고, 사용자가 정상적인 버튼을 누른다고 착각하여 실제로는 악의적인 기능을 클릭하게 만드는 공격은?",
    "options": [
      "클릭재킹 (Clickjacking / UI Redressing)",
      "피싱 (Phishing)",
      "스푸핑 (Spoofing)",
      "파밍 (Pharming)"
    ],
    "answer_index": 0,
    "explanation": "클릭재킹(UI Redressing)은 투명 프레임을 겹쳐서 사용자의 마우스 클릭 행위를 가로채는 기법으로 `X-Frame-Options: DENY` 설정으로 방어합니다."
  },
  {
    "id": 576,
    "subject": "정보시스템 구축관리",
    "question": "웹 애플리케이션의 파일 경로 매개변수에 `../../../../etc/passwd` 와 같은 상위 디렉터리 이동 시퀀스를 입력하여 서버의 루트 디렉터리 내 민감 시스템 파일에 접근하는 공격은?",
    "options": [
      "SQL 인젝션",
      "디렉터리 트래버설 (Directory Traversal / Path Traversal)",
      "버퍼 오버플로",
      "세션 하이재킹"
    ],
    "answer_index": 1,
    "explanation": "디렉터리 트래버설(경로 순회)은 입력값의 `../` 상대 경로를 검증하지 않아 웹 루트 디렉터리를 벗어나 시스템 핵심 파일을 열람/탈취하는 취약점입니다."
  },
  {
    "id": 577,
    "subject": "정보시스템 구축관리",
    "question": "웹 서버에 JSP, PHP, ASP 등의 악성 실행 스크립트 파일(웹쉘, WebShell)을 업로드한 후 브라우저로 원격 실행하여 서버 제어권을 탈취하는 공격의 방어 대책으로 옳지 않은 것은?",
    "options": [
      "업로드 디렉터리의 실행(Execute) 권한을 전면 제거한다.",
      "서버 측에서 파일 확장자를 화이트리스트 방식으로 엄격히 검증한다.",
      "클라이언트 측 자바스크립트 유효성 검사 하나만 믿고 서버 측 검사는 생략한다.",
      "업로드된 파일명을 임의의 안전한 난수(UUID)로 변경하여 저장한다."
    ],
    "answer_index": 2,
    "explanation": "클라이언트 브라우저 자바스크립트 검사는 프록시(Burp Suite 등)로 쉽게 우회되므로 반드시 서버 측에서 확장자 및 MIME 타입, 실행 권한 차단을 수행해야 합니다."
  },
  {
    "id": 578,
    "subject": "정보시스템 구축관리",
    "question": "접근 통제 보안 모델 중 군대나 정부 기관처럼 중앙 관리자가 자원의 보안 레이블과 주체의 인가 등급을 강제 부여하여 통제하는 모델은?",
    "options": [
      "신원 기반 접근 통제",
      "DAC (Discretionary Access Control, 임의적 접근 통제)",
      "RBAC (역할 기반 접근 통제)",
      "MAC (Mandatory Access Control, 강제적 접근 통제)"
    ],
    "answer_index": 3,
    "explanation": "MAC은 중앙 집중적 규칙에 따라 시스템이 강제적으로 접근을 제어하며 사용자가 자의적으로 권한을 양도할 수 없습니다."
  },
  {
    "id": 579,
    "subject": "정보시스템 구축관리",
    "question": "유닉스/리눅스 파일 시스템의 권한 체계처럼 파일의 소유자(Owner)가 자신의 판단에 따라 다른 사용자에게 읽기/쓰기/실행 권한을 자유롭게 부여할 수 있는 접근 통제 방식은?",
    "options": [
      "DAC (Discretionary Access Control, 임의적 접근 통제)",
      "MAC (강제적 접근 통제)",
      "RBAC",
      "벨-라파듈라 모델"
    ],
    "answer_index": 0,
    "explanation": "DAC(임의적 접근 통제)은 개별 객체의 소유자 재량으로 권한(ACL)을 부여하는 가장 유연한 방식입니다."
  },
  {
    "id": 580,
    "subject": "정보시스템 구축관리",
    "question": "기업 환경에서 데이터의 무결성을 유지하기 위해 직무 분리(Separation of Duties)와 잘 정의된 트랜잭션(Well-formed Transaction)을 강제하는 상업용 보안 모델은?",
    "options": [
      "벨-라파듈라 모델",
      "클락-윌슨 모델 (Clark-Wilson Model)",
      "비바 모델",
      "만리장성 모델"
    ],
    "answer_index": 1,
    "explanation": "클락-윌슨 모델은 상업적 회계 환경에서 금융 사기 방지를 위해 인증된 프로그램(변환 프로시저 TP)을 통해서만 데이터에 접근하게 강제하는 무결성 모델입니다."
  },
  {
    "id": 581,
    "subject": "정보시스템 구축관리",
    "question": "금융 투자 컨설팅 등에서 경쟁 관계에 있는 두 기업의 정보를 한 분석가가 동시에 열람하여 발생할 수 있는 이해 충돌(Conflict of Interest)을 방지하는 보안 모델은?",
    "options": [
      "벨-라파듈라 모델",
      "비바 모델",
      "만리장성 모델 (Chinese Wall / Brewer-Nash Model)",
      "MAC 모델"
    ],
    "answer_index": 2,
    "explanation": "만리장성(Chinese Wall) 모델은 이해 상충이 있는 경쟁사 데이터 그룹 간에 동적인 장벽을 쳐서 정보 접근을 원천 차단합니다."
  },
  {
    "id": 582,
    "subject": "정보시스템 구축관리",
    "question": "공개키 암호화 기반구조(PKI)에서 사용자에게 인증서를 최종 발급하고 전자서명 검증의 신뢰 앵커(Trust Anchor) 역할을 하는 공인 기관은?",
    "options": [
      "OCSP 서버",
      "등록 기관 (RA)",
      "디렉터리 서비스 (LDAP)",
      "인증 기관 (CA, Certificate Authority)"
    ],
    "answer_index": 3,
    "explanation": "인증 기관(CA)은 공개키에 대한 인증서를 생성, 서명, 발급 및 폐기 관리하는 공인 최상위 신뢰 기관입니다."
  },
  {
    "id": 583,
    "subject": "정보시스템 구축관리",
    "question": "디지털 인증서의 표준 규격으로 ISO/IEC와 ITU-T에서 제정하였으며 일련번호, 서명 알고리즘, 발행자, 유효기간, 공개키 정보 등을 정의하는 표준은?",
    "options": [
      "X.509",
      "X.25",
      "IEEE 802.11",
      "PKCS#11"
    ],
    "answer_index": 0,
    "explanation": "X.509는 인터넷 공개키 기반구조(PKI) 인증서의 국제 표준 포맷입니다."
  },
  {
    "id": 584,
    "subject": "정보시스템 구축관리",
    "question": "클라이언트가 특정 인증서의 실시간 폐기 여부를 CA에 확인하기 위해 무거운 전체 폐기 목록(CRL)을 다운받지 않고 단일 인증서 상태를 실시간 질의하는 경량 프로토콜은?",
    "options": [
      "CRL",
      "OCSP (Online Certificate Status Protocol)",
      "LDAP",
      "S/MIME"
    ],
    "answer_index": 1,
    "explanation": "OCSP는 인증서 시리얼 번호만으로 해당 인증서의 현재 상태(Good, Revoked, Unknown)를 실시간으로 빠르게 응답해 줍니다."
  },
  {
    "id": 585,
    "subject": "정보시스템 구축관리",
    "question": "패스워드를 안전하게 단방향 암호화하여 저장하기 위해 솔트(Salt) 적용과 의도적인 연산 지연(Key Stretching)을 지원하는 KDF 알고리즘에 해당하지 않는 것은?",
    "options": [
      "PBKDF2",
      "bcrypt",
      "MD5",
      "Argon2"
    ],
    "answer_index": 2,
    "explanation": "MD5는 고속 해시 함수로 연산 속도가 너무 빠르고 충돌 취약점이 발견되어 비밀번호 저장에 결코 사용해서는 안 됩니다. bcrypt, Argon2 등이 권장됩니다."
  },
  {
    "id": 586,
    "subject": "정보시스템 구축관리",
    "question": "기업 내부 엔드포인트(PC, 노트북, 서버 등) 단말기에서 발생하는 프로세스 동작, 파일 변경, 네트워크 연결 등의 행위를 실시간 감시하고 지능형 위협을 탐지 및 격리하는 솔루션은?",
    "options": [
      "WAF",
      "방화벽 (Firewall)",
      "IDS",
      "EDR (Endpoint Detection and Response)"
    ],
    "answer_index": 3,
    "explanation": "EDR은 전통적인 백신(AV)을 넘어 엔드포인트 단말의 모든 이상 행위를 실시간 기록하고 악성코드 실행 시 즉시 프로세스를 킬하고 네트워크를 격리합니다."
  },
  {
    "id": 587,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 프로젝트에서 정보시스템이 계약된 요구사항대로 완성되었는지, 관련 법령 및 보안 지침을 준수하는지 독립된 제3자가 종합 점검하는 활동은?",
    "options": [
      "정보시스템 감리 (Information System Audit)",
      "단위 테스트",
      "동료 검토",
      "모의 해킹"
    ],
    "answer_index": 0,
    "explanation": "정보시스템 감리는 발주자와 사업자로부터 독립된 외부 전문 감리 법인이 프로젝트의 적합성, 안전성, 효율성을 종합 검사하고 개선을 권고합니다."
  },
  {
    "id": 588,
    "subject": "정보시스템 구축관리",
    "question": "국내 개인정보 보호법의 기본 원칙으로 옳지 않은 것은?",
    "options": [
      "서비스 제공에 필요한 최소한의 개인정보만을 수집해야 한다 (최소 수집의 원칙).",
      "개인정보 처리 목적이 달성된 후에도 미래의 마케팅을 위해 영구히 파기하지 않고 보관한다.",
      "개인정보의 처리 목적을 명확히 하고 그 목적에 필요한 범위 내에서만 처리해야 한다.",
      "개인정보의 분실, 도난, 유출을 방지하기 위해 안전성 확보 조치를 취해야 한다."
    ],
    "answer_index": 1,
    "explanation": "개인정보 보호법상 처리 목적이 달성되었거나 보유 기간이 경과한 개인정보는 지체 없이(5일 이내) 안전하게 영구 파기해야 합니다."
  },
  {
    "id": 589,
    "subject": "정보시스템 구축관리",
    "question": "마이크로서비스 아키텍처(MSA)에서 각 마이크로서비스 간의 통신(East-West 트래픽)을 보안 암호화(mTLS)하고 트래픽 라우팅, 모니터링을 담당하는 전용 인프라 계층은?",
    "options": [
      "로드밸런서",
      "API 게이트웨이",
      "서비스 메시 (Service Mesh, 예: Istio)",
      "서킷 브레이커"
    ],
    "answer_index": 2,
    "explanation": "서비스 메시(Service Mesh)는 사이드카(Sidecar) 프록시를 통해 서비스 간 통신의 상호 mTLS 암호화, 관찰 가능성, 트래픽 카나리 라우팅을 투명하게 전담합니다."
  },
  {
    "id": 590,
    "subject": "정보시스템 구축관리",
    "question": "서버, 네트워크, 스토리지 등의 하드웨어 인프라 구성을 수동으로 설정하지 않고 테라폼(Terraform) 등 코드로 선언하여 버전 관리 및 자동 프로비저닝하는 패러다임은?",
    "options": [
      "SaaS",
      "DevOps",
      "PaaS",
      "IaC (Infrastructure as Code, 코드형 인프라)"
    ],
    "answer_index": 3,
    "explanation": "IaC는 인프라 명세를 선언형 코드로 작성하여 Git 버전 관리, 자동 배포, 환경 간 동일한 인프라 복제(불변 인프라)를 실현합니다."
  },
  {
    "id": 591,
    "subject": "정보시스템 구축관리",
    "question": "국내 공공기관 및 주요 정보통신기반시설의 정보보호 수준 향상을 위해 과학기술정보통신부와 KISA가 인증하는 종합 정보보호 관리체계 인증 제도는?",
    "options": [
      "ISMS-P 인증",
      "CMMI 레벨 5",
      "PMP 인증",
      "ITIL 인증"
    ],
    "answer_index": 0,
    "explanation": "ISMS-P는 정보보호(ISMS)와 개인정보보호(PIMS)를 통합하여 조직의 정보보안 및 개인정보 관리체계가 국가 기준에 부합함을 인증합니다."
  },
  {
    "id": 592,
    "subject": "정보시스템 구축관리",
    "question": "무선 랜(Wi-Fi) 보안 프로토콜 중 무차별 대입 공격을 차단하는 SAE(Simultaneous Authentication of Equals, 동등 동시 인증) 핸드셰이크를 도입한 최신 표준은?",
    "options": [
      "WPA2",
      "WPA3",
      "WPA",
      "WEP"
    ],
    "answer_index": 1,
    "explanation": "WPA3는 SAE 프로토콜을 도입하여 사전 공유 키(PSK) 방식에서도 오프라인 사전 대입 공격을 완벽히 차단하고 192비트 엔터프라이즈 보안을 지원합니다."
  },
  {
    "id": 593,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 개발 초기 요구사항 수립 단계부터 보안 위험을 체계적으로 도출하기 위해 마이크로소프트가 고안한 위협 모델링 기법(STRIDE)의 머리글자 의미가 아닌 것은?",
    "options": [
      "Tampering (데이터 변조)",
      "Spoofing (신분 위장)",
      "Speed (속도 저하)",
      "Repudiation (부인)"
    ],
    "answer_index": 2,
    "explanation": "STRIDE 위협 분류: Spoofing(신분위장), Tampering(변조), Repudiation(부인), Information Disclosure(정보유출), Denial of Service(서비스거부), Elevation of Privilege(권한상승)입니다."
  },
  {
    "id": 594,
    "subject": "정보시스템 구축관리",
    "question": "사용자가 웹 브라우저를 통해 악의적인 웹사이트에 접속했을 때, URL 파라미터나 검색어에 삽입된 스크립트가 서버의 응답 페이지에 즉시 반사(Reflect)되어 실행되는 XSS 공격은?",
    "options": [
      "CSRF",
      "저장형 XSS",
      "DOM 기반 XSS",
      "반사형 XSS (Reflected XSS)"
    ],
    "answer_index": 3,
    "explanation": "Reflected(반사형) XSS는 공격자가 피해자에게 피싱 링크(악성 파라미터 포함)를 클릭하게 유도하여 서버 응답 화면에 스크립트를 즉각 반사 실행시키는 공격입니다."
  },
  {
    "id": 595,
    "subject": "정보시스템 구축관리",
    "question": "클라우드 서비스 모델 중 개발자가 서버, OS, 런타임 환경 구축에 신경 쓰지 않고 오직 애플리케이션 개발에만 집중할 수 있도록 실행 플랫폼 환경을 서비스로 제공하는 모델은?",
    "options": [
      "PaaS (Platform as a Service)",
      "IaaS",
      "SaaS",
      "DaaS"
    ],
    "answer_index": 0,
    "explanation": "PaaS(예: AWS Elastic Beanstalk, Heroku)는 OS, 웹 서버, 데이터베이스 런타임 등 개발 및 배포 플랫폼 전체를 클라우드로 제공합니다."
  },
  {
    "id": 596,
    "subject": "정보시스템 구축관리",
    "question": "보안 공격 중 네트워크 스위치의 MAC 주소 테이블(CAM Table)을 가짜 MAC 주소로 가득 채워 스위치가 허브(Hub)처럼 동작하게 만듦으로써 모든 트래픽을 가로채는 공격은?",
    "options": [
      "ARP 스푸핑",
      "스위치 재밍 / MAC 플러딩 (Switch Jamming / MAC Flooding)",
      "SYN 플러딩",
      "DNS 스푸핑"
    ],
    "answer_index": 1,
    "explanation": "스위치 재밍(MAC Flooding)은 스위치의 주소 테이블을 오버플로시켜 스위치가 Fail-Open 모드로 전환되어 모든 포트로 패킷을 브로드캐스팅하게 만듭니다."
  },
  {
    "id": 597,
    "subject": "정보시스템 구축관리",
    "question": "보안 아키텍처 원칙 중 '사용자나 프로세스에게 일상적인 업무를 수행하는 데 꼭 필요한 최소한의 접근 권한만을 부여해야 한다'는 원칙은?",
    "options": [
      "심층 방어의 원칙",
      "직무 분리의 원칙",
      "최소 권한의 원칙 (Principle of Least Privilege)",
      "개방 설계의 원칙"
    ],
    "answer_index": 2,
    "explanation": "최소 권한의 원칙은 불필요한 과다 권한(관리자 권한 등)을 배제하여 계정 탈취 시의 시스템 피해 범위를 최소화합니다."
  },
  {
    "id": 598,
    "subject": "정보시스템 구축관리",
    "question": "데이터 통신망에서 송수신자 간의 데이터 패킷이 암호화되지 않은 평문 상태일 때 중간자(Man-in-the-Middle)가 트래픽을 훔쳐보는 것을 방지하기 위해 사용하는 기본 암호화 프로토콜은?",
    "options": [
      "FTP",
      "HTTP",
      "Telnet",
      "TLS (Transport Layer Security)"
    ],
    "answer_index": 3,
    "explanation": "TLS(SSL의 후속 표준)는 전송 계층에서 통신 세션을 강력한 대칭키로 암호화하여 패킷 스니핑 도청을 방지합니다."
  },
  {
    "id": 599,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 유지보수 비용 산정 모델 중 유지보수 노력(Effort)에 가장 큰 영향을 미치는 주요 요인으로 거리가 먼 것은?",
    "options": [
      "개발용 모니터의 화면 주사율(Hz)",
      "개발자의 의사소통 및 기술 역량",
      "소프트웨어의 변경 요구 빈도",
      "시스템의 복잡도와 문서화 수준"
    ],
    "answer_index": 0,
    "explanation": "유지보수 비용은 시스템 구조의 복잡성, 소스 문서화 품질, 변경 횟수, 담당 인력의 역량 등에 좌우됩니다."
  },
  {
    "id": 600,
    "subject": "정보시스템 구축관리",
    "question": "소프트웨어 공학(Software Engineering)의 궁극적인 존재 목적과 지향점으로 가장 올바른 것은?",
    "options": [
      "무조건 최신 기술만을 적용하여 가장 화려한 UI를 구축하는 것",
      "최소한의 비용과 정해진 납기 내에 사용자의 요구를 충족하는 고품질의 소프트웨어를 개발하고 유지보수성을 극대화하는 것",
      "테스트 단계를 생략하여 개발 기간을 절반으로 단축하는 것",
      "소프트웨어 명세서를 작성하지 않고 코딩만을 빠르게 진행하는 것"
    ],
    "answer_index": 1,
    "explanation": "소프트웨어 공학은 소프트웨어 위기(Software Crisis)를 극복하기 위해 공학적 원리와 방법론을 적용하여 비용 절감, 품질 향상, 생산성 제고를 달성하는 학문입니다."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK };
}
