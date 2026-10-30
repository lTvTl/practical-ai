/**
 * 리눅스마스터 2급 1차 & 2차 전 문항 통합 기출 및 모의고사 문제은행 (Questions Database)
 * 정답 불일치 전수 교정, 복수 정답 명시, 명령어 띄어쓰기 정제 및 1:1 맞춤형 전문 해설 적용 완료
 * 
 * answer_index: 0-based index (0: 1번 보기, 1: 2번 보기, 2: 3번 보기, 3: 4번 보기)
 * answer_indexes: 복수 정답 문항인 경우 인정되는 정답 인덱스 배열 (예: [2, 3])
 */

const QUESTION_BANK = [
  {
    "source": "1차 문제집 A세트 Q1",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "bash 환경에서 아래 명령의 실행 결과에 대한 설명으로 가장 적절한 것은?\n# export PATH=$PATH:/etc",
    "options": [
      "기존의 경로 (PATH) 를 제거하고 새로운 경로를 추가하였다.",
      "기존의 경로 (PATH) 에 /etc 라는 새로운 경로를 추가하였다.",
      "잘못된 명령으로, export $PATH=PATH:/etc 로 실행하는 것이 옳다.",
      "잘못된 명령으로, export PATH=PATH:/etc 로 실행하는 것이 옳다."
    ],
    "answer_index": 1,
    "explanation": "export 명령어는 환경 변수를 설정하고 자식 프로세스에게 상속(전파)할 때 사용합니다. '$PATH:/etc' 구문은 기존 PATH 환경 변수값($PATH) 뒤에 콜론(:) 구분자로 새로운 경로인 '/etc'를 덧붙여 할당하므로, '기존의 경로(PATH)에 /etc라는 새로운 경로를 추가하였다'가 올바른 설명입니다.",
    "original_num": 1,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 1
  },
  {
    "source": "1차 문제집 A세트 Q2",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "리눅스를 설치한 후 부팅을 하였는데, LILO boot: 프롬프트가 나오지 않고 LI 문자만 출력하고 부팅이 이루어지지 않는 경우에 대한 설명으로 맞는 것은?",
    "options": [
      "디스크립터 테이블 (Descriptor Table) 이 깨어졌다.",
      "처음에는 부트 로더 (Boot Loader) 가 작동하였으나 Map 파일에서 디스크립터 테이블을 로드하지 못할 때 발생할 수 있다.",
      "두 번째 단계의 부트 로더 (Boot Loader) 가 작동하였으나 Map 파일에서 디스크립터 테이블을 로드하지 못할 때 발생할 수 있다.",
      "미묘한 지오메트리 (geometry) 불일치에 의해서 또는 Map Installer 실행없이 /boot/map 이 이동되어 두 번째 부트섹터 로더가 잘못된 주소로 로드되었다."
    ],
    "answer_index": 3,
    "explanation": "LILO 부팅 과정에서 'L'은 1단계 부트로더 로드 성공, 'LI'는 2단계 부트로더 로드를 시도했으나 지오메트리(Geometry) 불일치나 /boot/map 파일 이동 후 맵 인스톨러(lilo) 미실행으로 두 번째 부트로더가 잘못된 주소에서 로드되었음을 의미합니다. ('LIL'은 디스크립터 테이블 오류, 'LILO'는 정상 로드 완료)",
    "original_num": 2,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 2
  },
  {
    "source": "1차 문제집 A세트 Q3",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "다음 중 다수의 디스크나 파티션을 하나로 묶어서 구성하는 기술과 관련 있는 조합으로 알맞은 것은?",
    "options": [
      "㉠ ext4 ㉡ LVM",
      "㉠ ext4 ㉡ RAID",
      "㉠ ext3 ㉡ ext4",
      "㉠ LVM ㉡ RAID"
    ],
    "answer_index": 3,
    "explanation": "여러 개의 물리적 디스크나 파티션을 하나의 유연한 논리 스토리지 풀로 묶어 관리하는 기술은 LVM(Logical Volume Manager)이며, 복수의 하드디스크를 묶어 데이터 분산 저장(스트라이핑)이나 안정성(미러링/패리티)을 구현하는 기술은 RAID입니다. ext3, ext4는 파일시스템의 종류입니다.",
    "original_num": 3,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 3
  },
  {
    "source": "1차 문제집 A세트 Q4",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "현재 디렉토리의 위치가 /home/user1일 경우 다음 중 그 의미가 다른 것은?",
    "options": [
      "cd..",
      "cd /home",
      "cd./..",
      "cd home"
    ],
    "answer_index": 3,
    "explanation": "현재 위치가 '/home/user1'일 때 상위 디렉터리인 '/home'으로 이동하는 명령은 'cd ..', 'cd /home'(절대경로), 'cd ./..'(상대경로)입니다. 반면 'cd home'은 현재 위치의 하위 경로('/home/user1/home')를 의미하므로 경로가 존재하지 않아 에러가 발생하거나 전혀 엉뚱한 곳으로 이동합니다.",
    "original_num": 4,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 4
  },
  {
    "source": "1차 문제집 A세트 Q5",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 명령의 실행 결과에 대한 설명으로 가장 적절한 것은?\nihd@ihd.or.kr:/etc$ users\nihd ihd hong linuxmaster",
    "options": [
      "/etc 디렉토리에 대한 접근 권한이 있는 사용자들을 확인하고 있다.",
      "시스템에 로그인한 사용자 계정을 조회하고 있다.",
      "자신의 계정이 속해있는 그룹들을 조회하고 있다.",
      "자신의 계정이 속해있는 그룹에 어떤 계정들이 있는지 조회하고 있다."
    ],
    "answer_index": 1,
    "explanation": "users 명령어는 현재 시스템에 로그인되어 세션을 유지하고 있는 모든 사용자들의 로그인 계정명을 공백으로 구분하여 한 줄로 나열해 출력합니다.",
    "original_num": 5,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 5
  },
  {
    "source": "1차 문제집 A세트 Q6",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "다음 중 리눅스 시스템의 파티션 분할에 대한 설명으로 틀린 것은?",
    "options": [
      "/ 와 스왑(Swap) 등 최소 2개의 파티션을 분할해야 한다.",
      "리눅스를 서버로 사용하는 경우에는 4개 이상의 파티션 분할이 필요하다.",
      "/home, /var, /usr 등의 파티션은 분할하도록 권장하고 있다.",
      "처음 설치 시 분할한 파티션은 사용 중에 변경할 수 있다."
    ],
    "answer_index": 3,
    "explanation": "리눅스 설치 시 생성한 일반 기본 파티션은 시스템 운용 중에 데이터 손실 없이 임의로 크기를 동적 변경할 수 없습니다(파티션을 안전하게 동적으로 조정하려면 사전에 LVM을 구축해야 합니다). 반면 루트(/)와 스왑(Swap) 파티션은 필수 분할 대상이며, 서버 환경에서는 안전성을 위해 /home, /var, /usr 등의 분할을 적극 권장합니다.",
    "original_num": 6,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 6
  },
  {
    "source": "1차 문제집 A세트 Q7",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "패스워드 설정에 대한 설명으로 틀린 것은?",
    "options": [
      "명령과 로그인 이름 (예 : passwd lms) 을 입력하고 Enter 키를 누른다.",
      "New password : 프롬프트에서 암호를 입력하면, 화면상에 입력한 암호가 그대로 표시된다.",
      "암호를 다시 입력하라는 프롬프트가 나오면 다시 입력한다.",
      "설정된 암호는 원하는 때에는 언제든 변경이 가능하다."
    ],
    "answer_index": 1,
    "explanation": "리눅스 터미널에서 passwd 명령으로 암호를 입력할 때는 화면 해킹(어깨너머 엿보기)을 방지하기 위해 입력한 글자나 글자 수가 화면에 전혀 표시되지 않는 블라인드 입력 방식을 취합니다. '화면상에 입력한 암호가 그대로 표시된다'는 설명은 명백한 오답입니다.",
    "original_num": 7,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 7
  },
  {
    "source": "1차 문제집 A세트 Q8",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "다음 설치 메뉴 중 사용 중인 리눅스 시스템에 이상이 발생했을 때 시스템 점검 및 복구를 위해 선택할 수 있는 모드로 알맞은 것은?",
    "options": [
      "Install or upgrade an existing system",
      "Install system with basic video driver",
      "Rescue installed system",
      "Boot from local drive"
    ],
    "answer_index": 2,
    "explanation": "설치 미디어(CD/DVD/USB)로 부팅했을 때 시스템 부팅 불가나 심각한 오류가 발생한 시스템을 단일 사용자 쉘로 점검하고 복구하기 위해 제공되는 모드는 'Rescue installed system(설치된 시스템 복구)'입니다.",
    "original_num": 8,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 8
  },
  {
    "source": "1차 문제집 A세트 Q9",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "다음 중 리눅스에서 독립된 파티션으로 분할하도록 권장하는 영역으로 틀린 것은? (독립 파티션 분할을 권장하지 않는 디렉터리는?)",
    "options": [
      "/etc",
      "/tmp",
      "/usr",
      "/var"
    ],
    "answer_index": 0,
    "explanation": "[정답: 1번 /etc] /etc 디렉터리에는 시스템 부팅 및 초기화, 싱글 유저 모드 진입 시 반드시 필요한 핵심 설정 파일들이 모여 있으므로 루트(/) 파티션과 분리하지 않고 반드시 동일 파티션에 두어야 합니다. 반면 /tmp, /usr, /var, /home 등은 용량 관리 및 안정성을 위해 독립 파티션 분할이 권장됩니다.",
    "original_num": 9,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 9
  },
  {
    "source": "1차 문제집 A세트 Q10",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "시스템의 네트워크 인터페이스에 대한 정보를 확인하는 명령어로 적절하지 못한 것은?",
    "options": [
      "ifconfig",
      "netstat -l",
      "cat /etc/crontab",
      "route"
    ],
    "answer_index": 2,
    "explanation": "ifconfig는 네트워크 인터페이스의 IP/넷마스크 확인, route는 라우팅 테이블 확인, netstat -l은 열린 포트 현황을 확인하는 네트워크 유틸리티입니다. 반면 /etc/crontab은 주기적인 스케줄 작업을 설정하는 cron 설정 파일로 네트워크 인터페이스 확인과 전혀 관련이 없습니다.",
    "original_num": 10,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 10
  },
  {
    "source": "1차 문제집 A세트 Q11",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "배포판 설치 시 선택할 수 있는 설치 유형이 아닌 것은?",
    "options": [
      "워크스테이션",
      "업그레이드",
      "서버",
      "메인프레임"
    ],
    "answer_index": 3,
    "explanation": "리눅스 배포판 설치 시 제공되는 일반적인 설치 유형은 워크스테이션(GUI 데스크톱), 서버(서비스 데몬 위주), 소프트웨어 개발, 최소 설치, 업그레이드 등이며 '메인프레임'은 제공되지 않습니다.",
    "original_num": 11,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 11
  },
  {
    "source": "1차 문제집 A세트 Q12",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "현재 호스트에서 ihd.or.kr까지 패킷이 거쳐가는 경로를 알고 싶을 때 사용할 명령은?",
    "options": [
      "traceroute ihd.or.kr",
      "ping ihd.or.kr",
      "telnet.ihd.or.kr",
      "ftp ihd.or.kr"
    ],
    "answer_index": 0,
    "explanation": "로컬 호스트에서 목적지 서버(ihd.or.kr)까지 패킷이 거쳐가는 모든 경유 라우터(홉, Hop)의 경로와 구간별 응답 시간을 추적하는 유틸리티는 'traceroute'입니다. ping은 단순 통신 도달 여부 및 왕복 시간(RTT)만 확인합니다.",
    "original_num": 12,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 12
  },
  {
    "source": "1차 문제집 A세트 Q13",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "ls 명령의 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-a : 해당 경로 안의 모든 파일(숨김 파일 포함)을 나열한다.",
      "-l : 대화형 옵션으로 진행한다.",
      "-R : 하위 디렉토리의 내용까지 모두 재귀적으로 출력한다.",
      "-F : 파일의 속성에 따라 끝에 특수문자(/, *, @ 등)를 덧붙여 출력한다."
    ],
    "answer_index": 1,
    "explanation": "ls 명령어에서 '-l'(long) 옵션은 파일의 상세 정보(허가권, 링크 수, 소유자, 그룹, 파일 크기, 최종 수정일시 등)를 긴 목록 형식으로 출력하는 옵션입니다. 대화형(삭제/덮어쓰기 시 확인) 옵션은 보통 '-i'(interactive) 옵션입니다.",
    "original_num": 13,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 13
  },
  {
    "source": "1차 문제집 A세트 Q14",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "shutdown 명령어의 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-c : 예약된 shutdown 명령을 취소한다.",
      "-h : shutdown 명령이 완료되면 시스템을 정지시킨다.",
      "-f : shutdown 전에 수행중인 모든 프로세스에게 kill 시그널을 보낸다.",
      "-r : shutdown 명령이 완료되면 시스템을 재부팅한다."
    ],
    "answer_index": 2,
    "explanation": "shutdown 명령어에서 '-f' 옵션은 빠른 부팅을 위해 다음 부팅 시 파일시스템 점검(fsck)을 생략(fast boot)하는 옵션입니다. 경고 메시지만 전송하고 실제 셧다운하지 않는 옵션은 '-k'입니다. (-c는 취소, -h는 정지, -r은 재부팅)",
    "original_num": 14,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 14
  },
  {
    "source": "1차 문제집 A세트 Q15",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "ihduser 사용자가 현재 hannam이라는 그룹에 속해 있다. 다음 중 ihduser 사용자의 기본(Primary) 그룹을 IHD로 변경할 때 알맞은 것은?",
    "options": [
      "usermod -n IHD ihduser",
      "usermod -g IHD ihduser",
      "usermod -n IHD hannam",
      "usermod -g IHD hannam"
    ],
    "answer_index": 1,
    "explanation": "사용자의 기본(Primary) 소유 그룹을 변경할 때는 'usermod -g 새그룹명 사용자계정명' 명령을 사용합니다. (-G는 보조/추가 그룹 지정, -n은 groupmod에서 그룹명을 변경할 때 사용)",
    "original_num": 15,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 15
  },
  {
    "source": "1차 문제집 A세트 Q16",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "[※ 복수 정답 문항: 정답 2개 (③, ④)]\nreboot 명령어의 수행 과정에 대한 설명으로 틀린 것은? (틀린 설명 2개를 모두 선택해야 합니다)",
    "options": [
      "파일 시스템을 언마운트한다.",
      "시스템을 shutdown한다.",
      "시스템 실행수준(run level)을 3으로 변경시킨다.",
      "다중 사용자(multi-user) 모드에서는 수행되지 않는다."
    ],
    "answer_index": 2,
    "explanation": "[복수 정답 안내: 공식 기출문제에서 ③번과 ④번이 모두 틀린 설명으로 처리된 복수 정답 문항입니다]\n- ③번이 틀린 이유: reboot 명령은 시스템 런레벨을 '6번(재부팅)'으로 변경합니다. 런레벨 3번은 네트워크 지원 다중 사용자 텍스트 모드입니다.\n- ④번이 틀린 이유: reboot 명령은 다중 사용자(multi-user, 런레벨 3 또는 5) 환경에서도 root 권한으로 언제든지 정상 실행 가능하므로 '수행되지 않는다' 역시 틀린 설명입니다.\n따라서 ③번과 ④번 2개 모두 정답입니다.",
    "original_num": 16,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 16,
    "answer_indexes": [
      2,
      3
    ]
  },
  {
    "source": "1차 문제집 A세트 Q17",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 텍스트 파일에서 특정 패턴을 갖는 줄을 찾아서 출력해주는 명령으로 알맞은 것은?",
    "options": [
      "file",
      "grep",
      "less",
      "find"
    ],
    "answer_index": 1,
    "explanation": "grep(Global Regular Expression Print) 명령어는 지정한 파일이나 표준 입력에서 정규표현식 패턴과 일치하는 줄(행)을 검색하여 화면에 출력합니다. file은 파일 종류 판별, find는 파일시스템 경로 검색 명령입니다.",
    "original_num": 17,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 17
  },
  {
    "source": "1차 문제집 A세트 Q18",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 하드디스크 일부를 메모리처럼 사용하는 기술로 알맞은 것은?",
    "options": [
      "라이브러리",
      "스왑",
      "파이프",
      "리다이렉션"
    ],
    "answer_index": 1,
    "explanation": "물리적 RAM 용량이 부족할 때 하드디스크의 지정된 파티션이나 파일을 가상 메모리처럼 활용하여 주 메모리 공간을 확장하는 기술을 '스왑(Swap)'이라고 합니다.",
    "original_num": 18,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 18
  },
  {
    "source": "1차 문제집 A세트 Q20",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "다음 중 파티션의 유형에 대한 설명으로 틀린 것은?",
    "options": [
      "확장 파티션은 2 개 이상 설정이 가능하다.",
      "5 개 이상의 파티션이 필요한 경우에는 확장 파티션의 선언이 필요하다.",
      "확장 파티션을 선언해야 논리 파티션을 선언할 수 있다.",
      "주 파티션은 4 개까지 사용가능하다."
    ],
    "answer_index": 0,
    "explanation": "MBR 파티션 테이블 구조상 하나의 물리 디스크에는 최대 4개의 주 파티션(Primary)을 만들 수 있으며, 5개 이상의 파티션이 필요할 경우 주 파티션 중 하나를 '확장 파티션(Extended)'으로 선언합니다. 확장 파티션은 하나의 디스크당 최대 '1개만' 생성할 수 있습니다.",
    "original_num": 20,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 19
  },
  {
    "source": "1차 문제집 A세트 Q21",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "리처드 스톨만(Richard Stallman)에 의해 설립되었으며 컴퓨터 프로그램의 복제와 배포, 개작을 위한 소스 코드의 원용에 대한 제한들을 철폐하는 목적을 가진 단체는?",
    "options": [
      "FSF",
      "ISO",
      "ANSI",
      "IETF"
    ],
    "answer_index": 0,
    "explanation": "리처드 스톨먼(Richard Stallman)은 1984년 GNU 프로젝트를 시작하고 1985년 자유 소프트웨어 재단(FSF, Free Software Foundation)을 설립하여 소프트웨어의 자유로운 복제, 수정, 배포를 보장하는 자유 소프트웨어 운동을 주도하였습니다.",
    "original_num": 21,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 20
  },
  {
    "source": "1차 문제집 A세트 Q22",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "mount 명령어의 옵션에 대한 설명으로 맞는 것은?",
    "options": [
      "-a : /etc/mtab에 나열되어있는 모든 파일시스템을 mount한다.",
      "-f : 특정 파일시스템만 선택적으로 mount한다.",
      "-n : mount에 대한 기록(/etc/mtab)을 남기지 않는다.",
      "-w : 현재 mount를 선택적으로 해제한다."
    ],
    "answer_index": 2,
    "explanation": "[정답: 3번 -n] mount 명령어에서 '-n' 옵션은 /etc/mtab 파일에 마운트 정보를 기록하지 않고 마운트를 수행합니다. 1번의 '-a' 옵션은 /etc/mtab이 아니라 '/etc/fstab'에 정의된 파일시스템들을 일괄 마운트하는 옵션이며, '-f'는 실제 마운트 없이 시뮬레이션(가짜 마운트)하는 옵션입니다.",
    "original_num": 22,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 21
  },
  {
    "source": "1차 문제집 A세트 Q23",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "다음 중 주 파티션에 대한 설명으로 틀린 것은?",
    "options": [
      "부팅 가능한 파티션으로 디스크에 하나 이상 존재해야 한다.",
      "하나의 디스크에 총 4 개까지 사용가능하다.",
      "주 파티션 4 개 사용후 확장 파티션의 선언이 가능하다.",
      "3 개 영역으로 파티션 분할할 경우에 주 파티션내에 설치 가능하다."
    ],
    "answer_index": 2,
    "explanation": "MBR 디스크 파티션은 주 파티션과 확장 파티션의 합이 최대 4개를 초과할 수 없습니다. 따라서 이미 주 파티션을 4개 모두 채워서 생성한 상태에서는 추가로 확장 파티션을 생성할 수 없습니다.",
    "original_num": 23,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 22
  },
  {
    "source": "1차 문제집 A세트 Q24",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "기본적인 패스워드 설정 방법에 대한 설명으로 틀린 것은?",
    "options": [
      "최초 설정 후 바꿀 수가 없으므로 설정은 신중하게 하여야 한다.",
      "기본적으로 최소 6 자 이상이어야 한다.",
      "특수 문자와 숫자 등도 가능하다.",
      "대, 소문자를 구분한다."
    ],
    "answer_index": 0,
    "explanation": "리눅스의 계정 패스워드는 관리자(root)뿐 아니라 일반 사용자 본인도 언제든지 'passwd' 명령어를 통해 원하는 시점에 자유롭게 변경할 수 있습니다. 따라서 '최초 설정 후 바꿀 수가 없다'는 설명은 틀렸습니다.",
    "original_num": 24,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 23
  },
  {
    "source": "1차 문제집 A세트 Q25",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 E-IDE 타입의 디스크를 Secondary Slave에 연결했을 경우에 인식하는 장치 파일명으로 알맞은 것은?",
    "options": [
      "/dev/hda",
      "/dev/hdb",
      "/dev/hdc",
      "/dev/hdd"
    ],
    "answer_index": 3,
    "explanation": "전통적인 IDE(E-IDE) 장치 명명 규칙: Primary Master는 /dev/hda, Primary Slave는 /dev/hdb, Secondary Master는 /dev/hdc, Secondary Slave는 /dev/hdd 입니다.",
    "original_num": 25,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 24
  },
  {
    "source": "1차 문제집 A세트 Q26",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "교육용 유닉스로 리눅스 개발의 시발점이 된 운영체제는?",
    "options": [
      "Minix",
      "Windows 2000",
      "Mac OS X",
      "Solaris"
    ],
    "answer_index": 0,
    "explanation": "리누스 토발즈가 리눅스 커널을 개발할 때 영감을 얻고 초기 개발 환경으로 사용했던 운영체제는 앤드루 타넨바움(Andrew Tanenbaum) 교수가 교육용으로 개발한 소형 유닉스 '미닉스(MINIX)'입니다.",
    "original_num": 26,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 25
  },
  {
    "source": "1차 문제집 A세트 Q27",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 명령행에서 표준 입력을 파일이나 다른 소스로 전환(리다이렉션)할 때 사용하는 기호로 알맞은 것은?",
    "options": [
      "|",
      ">",
      "<",
      ";"
    ],
    "answer_index": 2,
    "explanation": "명령행에서 표준 입력(stdin, 0번)의 방향을 전환할 때 사용하는 리다이렉션 기호는 '<'입니다. '>'는 표준 출력 전환, '|'는 한 프로그램의 출력을 다른 프로그램의 입력으로 연결하는 파이프, ';'는 순차 명령 실행 기호입니다.",
    "original_num": 27,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 26
  },
  {
    "source": "1차 문제집 A세트 Q28",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 우분투(Ubuntu) 리눅스의 기반이 되는 리눅스로 알맞은 것은?",
    "options": [
      "Fedora",
      "RHEL",
      "Debian",
      "Slackware"
    ],
    "answer_index": 2,
    "explanation": "우분투(Ubuntu)는 데비안(Debian) 리눅스를 모태로 하여 개발되었으며, 데비안의 deb 패키지 포맷 및 dpkg, apt 패키지 관리 도구를 핵심으로 사용합니다.",
    "original_num": 28,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 27
  },
  {
    "source": "1차 문제집 A세트 Q29",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 명령의 실행 결과에 대한 설명으로 가장 적절한 것은?\n# groupadd ihd1\ngroupadd: unable to lock group file",
    "options": [
      "로그인한 계정이 ihd1 이라는 그룹에 추가되게 하였다.",
      "ihd1 이라는 새로운 그룹을 추가하였다.",
      "ihd1 이라는 그룹을 생성하려 하였으나, 권한이 없어서 제대로 실행하지 못하고 있다.",
      "group file 이 존재하지 않아서 새롭게 생성한 후, ihd1 그룹을 추가하였다."
    ],
    "answer_index": 2,
    "explanation": "'unable to lock group file' 에러는 그룹 정보 파일(/etc/group)에 쓰기 잠금을 걸지 못할 때 발생하며, 대표적으로 일반 사용자가 관리자(root) 권한 없이 groupadd를 실행했거나 다른 프로세스가 해당 파일을 독점 잠금 중일 때 발생합니다. 따라서 '권한이 없어서 제대로 실행하지 못하고 있다'가 가장 적절한 설명입니다.",
    "original_num": 29,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 28
  },
  {
    "source": "1차 문제집 A세트 Q30",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "bash 쉘(Shell)에서 설정되어 있는 PATH 환경변수에 /usr/local/bin이라는 새로운 값을 추가하는 명령으로 알맞은 것은?",
    "options": [
      "export PATH=/usr/local/bin",
      "path=/usr/local/bin",
      "export PATH=$PATH:/usr/local/bin",
      "path=$PATH:/usr/local/bin"
    ],
    "answer_index": 2,
    "explanation": "기존 PATH 환경 변수값($PATH)을 보존하면서 새로운 경로(/usr/local/bin)를 추가하고 자식 프로세스에게 상속하려면 'export PATH=$PATH:/usr/local/bin'으로 실행해야 합니다.",
    "original_num": 30,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 29
  },
  {
    "source": "1차 문제집 A세트 Q31",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 명령어에 대한 출력이나 입력을 원하는 위치로 바꿀 때 사용되는 리다이렉션 기호가 아닌 것은?",
    "options": [
      ">",
      ">>",
      "<",
      "~"
    ],
    "answer_index": 3,
    "explanation": "리눅스에서 입출력 방향을 전환하는 리다이렉션 기호는 '>'(출력 덮어쓰기), '>>'(출력 추가/이어쓰기), '<'(입력 지정), '<<'(Here Document)입니다. 반면 '~'(물결표)는 사용자의 홈 디렉터리를 나타내는 기호로 리다이렉션과 무관합니다.",
    "original_num": 31,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 30
  },
  {
    "source": "1차 문제집 A세트 Q32",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 ihduser 계정을 삭제할 때 그 사용자의 홈 디렉터리와 메일 스풀 등의 파일을 같이 제거하고자 할 때 사용하는 알맞은 옵션은?",
    "options": [
      "userdel ihduser",
      "userdel -d ihduser",
      "userdel -r ihduser",
      "userdel -e ihduser"
    ],
    "answer_index": 2,
    "explanation": "userdel 명령어로 사용자 계정을 삭제할 때 '-r'(--remove) 옵션을 지정하면 사용자의 홈 디렉터리와 시스템 내 메일 스풀 파일까지 함께 삭제됩니다.",
    "original_num": 32,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 31
  },
  {
    "source": "1차 문제집 A세트 Q33",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 명령의 실행 결과에 대한 설명으로 가장 적절한 것은?\n[root@ihd root]# echo $PWD\n/root",
    "options": [
      "현재 작업디렉토리의 위치를 확인해 보고 있다.",
      "홈 디렉토리 정보를 간직하고 있는 PWD 환경변수의 내용을 출력하고 있다.",
      "시스템 관리자의 권한으로만 위 환경변수를 확인해 볼 수 있다.",
      "일반적으로 디렉토리를 이동하면 PWD 변수를 수동으로 다시 설정해 주어야 한다."
    ],
    "answer_index": 0,
    "explanation": "PWD 환경변수는 현재 작업 중인 디렉터리의 절대 경로를 저장하고 있는 쉘 내장 환경변수입니다. cd 명령으로 이동할 때마다 자동으로 갱신되며, 일반 사용자도 자유롭게 확인할 수 있습니다. 따라서 '현재 작업디렉토리의 위치를 확인해 보고 있다'가 정답입니다.",
    "original_num": 33,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 32
  },
  {
    "source": "1차 문제집 A세트 Q34",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 국내에서 개발되어 배포된 리눅스로 알맞은 것은?",
    "options": [
      "SuLinux",
      "CentOS",
      "SUSE",
      "Fedora"
    ],
    "answer_index": 0,
    "explanation": "SuLinux(수리눅스)는 한국의 리눅스포털(수퍼유저코리아)에서 국내 서버 환경에 최적화하여 개발/배포한 대표적인 국산 리눅스 배포판입니다. CentOS, SUSE, Fedora는 해외 배포판입니다.",
    "original_num": 34,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 33
  },
  {
    "source": "1차 문제집 A세트 Q35",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 콘솔 모드(또는 텍스트 모드)의 기본 실행 레벨(Runlevel)로 알맞은 것은?",
    "options": [
      "1",
      "3",
      "5",
      "6"
    ],
    "answer_index": 1,
    "explanation": "리눅스 표준 런레벨에서 3번은 네트워크를 지원하는 다중 사용자 텍스트(CLI) 콘솔 모드이며, 5번은 그래픽(GUI, X 윈도우) 모드입니다. (0: 종료, 1: 단일 사용자 모드, 6: 재부팅)",
    "original_num": 35,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 34
  },
  {
    "source": "1차 문제집 A세트 Q36",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음은 mbox 파일이 어떤 종류의 파일인지 확인해 보기 위한 명령이다. ( 괄호 ) 안에 들어갈 가장 적절한 명령은?\n# ( ) mbox\nmbox: ASCII mail text",
    "options": [
      "what",
      "file",
      "type",
      "tail"
    ],
    "answer_index": 1,
    "explanation": "파일의 내부 매직 넘버(Magic Number)와 헤더 정보를 읽어 해당 파일이 텍스트인지, 실행 바이너리인지, 압축 파일인지 파일 종류를 판별해주는 명령어는 'file'입니다.",
    "original_num": 36,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 35
  },
  {
    "source": "1차 문제집 A세트 Q37",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 텍스트 파일의 앞부분 내용을 확인할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "head",
      "tail",
      "more",
      "cat"
    ],
    "answer_index": 0,
    "explanation": "텍스트 파일의 앞부분부터 기본 10줄을 화면에 출력하는 명령어는 'head'입니다. 줄 수를 변경하려면 '-n 숫자' 옵션을 사용합니다. tail은 파일 뒷부분을 출력합니다.",
    "original_num": 37,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 36
  },
  {
    "source": "1차 문제집 A세트 Q38",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "특정 도메인의 IP 주소 및 네임서버 정보를 조회하기 위해 사용하는 명령어는?",
    "options": [
      "dia",
      "netfind",
      "nslookup",
      "vmware"
    ],
    "answer_index": 2,
    "explanation": "nslookup(name server lookup)은 DNS 서버에 질의하여 도메인 이름에 매핑된 IP 주소를 찾거나 역방향 조회를 수행하는 명령어입니다.",
    "original_num": 38,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 37
  },
  {
    "source": "1차 문제집 A세트 Q39",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음은 ls -l 명령을 실행시킨 결과이다. 이에 대한 설명으로 틀린 것은?\n-rwxr-xr-x 1 ihd project 1024 Aug 13 10:10 client.c",
    "options": [
      "client.c 의 소유자는 ihd 이다.",
      "소유자는 client.c 를 수정할 수 없다.",
      "project 그룹에 속한 사람은 client.c 의 내용을 볼 수 있다.",
      "일반사용자도 client.c 를 실행할 수 있다."
    ],
    "answer_index": 1,
    "explanation": "파일의 허가권이 '-rwxr-xr-x'이므로 소유자(ihd)는 읽기(r), 쓰기(w), 실행(x) 권한을 모두 가지고 있습니다. 따라서 '소유자는 client.c를 수정할 수 없다'는 설명은 틀렸습니다(쓰기 권한이 있으므로 수정 가능).",
    "original_num": 39,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 38
  },
  {
    "source": "1차 문제집 A세트 Q40",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "사용자 계정관리에 대한 설명으로 틀린 것은?",
    "options": [
      "일반적으로 사용자 계정을 생성할 때는 useradd 명령어를 사용한다.",
      "사용자 계정변경을 위한 usermod 명령 사용시 사용자 계정 홈 디렉토리를 설정하고자 할때는 - d 옵션을 사용한다.",
      "사용자의 그룹에 대한 정보는 /etc/group 파일에 저장되어 있다.",
      "/etc/shadow 파일은 사용자의 uid, gid 등의 정보를 포함하고 있다."
    ],
    "answer_index": 3,
    "explanation": "사용자의 UID, GID, 기본 쉘, 홈 디렉터리 정보는 '/etc/passwd' 파일에 저장되며, '/etc/shadow' 파일은 단방향 암호화된 사용자 패스워드 해시값과 암호 만료 기간 등의 보안 정보만을 관리합니다.",
    "original_num": 40,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 39
  },
  {
    "source": "1차 문제집 A세트 Q41",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 영국 회사인 캐노니컬(Canonical)에서 데비안 리눅스를 기초로 개발한 배포판으로 알맞은 것은?",
    "options": [
      "수세리눅스",
      "슬랙웨어",
      "CentOS",
      "우분투"
    ],
    "answer_index": 3,
    "explanation": "우분투(Ubuntu)는 마크 셔틀워스가 설립한 영국의 캐노니컬사에서 데비안 리눅스를 기반으로 사용자 친화적인 데스크톱 환경을 위해 개발한 배포판입니다.",
    "original_num": 41,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 40
  },
  {
    "source": "1차 문제집 A세트 Q42",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "시스템을 10분 후에 재부팅(재시작)하기 위한 shutdown 명령으로 알맞은 것은?",
    "options": [
      "shutdown -r +10",
      "shutdown -h +10",
      "shutdown -r 00:10",
      "shutdown -h 00:10"
    ],
    "answer_index": 0,
    "explanation": "shutdown 명령어에서 '+10'은 현재 시간으로부터 10분 후를 의미하며, '-r'은 재부팅(reboot) 옵션입니다. 따라서 'shutdown -r +10'이 올바릅니다. (-h는 종료)",
    "original_num": 42,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 41
  },
  {
    "source": "1차 문제집 A세트 Q43",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "현재 디렉토리의 하위 디렉토리까지 모두 포함하여 linuxmaster라는 문자열을 포함한 파일을 검색하는 명령으로 가장 알맞은 것은?",
    "options": [
      "find . -string linuxmaster -print",
      "grep -r linuxmaster *",
      "ls -al | grep linuxmaster",
      "cat * | grep linuxmaster"
    ],
    "answer_index": 1,
    "explanation": "grep 명령어에 '-r'(--recursive) 옵션을 지정하면 현재 디렉터리뿐만 아니라 하위의 모든 서브 디렉터리 파일들의 내용까지 재귀적으로 검색하여 지정한 문자열 패턴을 찾아냅니다.",
    "original_num": 43,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 42
  },
  {
    "source": "1차 문제집 A세트 Q44",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "두 개의 파일명을 매개 변수로 사용하여 화면에 두 파일 내용의 행 단위 차이점을 나열하는 명령어는?",
    "options": [
      "find",
      "break",
      "diff",
      "halt"
    ],
    "answer_index": 2,
    "explanation": "diff(difference) 명령어는 두 텍스트 파일의 내용을 행 단위로 비교하여 서로 다른 줄과 수정해야 할 부분을 화면에 출력합니다.",
    "original_num": 44,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 43
  },
  {
    "source": "1차 문제집 A세트 Q46",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 리눅스에서 지원하는 네트워크 파일시스템(NFS/공유)의 종류로 틀린 것은?",
    "options": [
      "SMB",
      "CIFS",
      "JFS",
      "NFS"
    ],
    "answer_index": 2,
    "explanation": "JFS(Journaled File System)는 IBM이 개발한 로컬 고성능 저널링 파일시스템으로 네트워크 파일시스템이 아닙니다. SMB/CIFS(삼바/윈도우 공유)와 NFS(네트워크 파일 시스템)는 네트워크를 통해 원격 저장소를 마운트하는 대표적인 네트워크 파일시스템입니다.",
    "original_num": 46,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 44
  },
  {
    "source": "1차 문제집 A세트 Q47",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 자유 소프트웨어(Free Software)에 대한 설명으로 틀린 것은?",
    "options": [
      "상업용 목적으로 사용할 수 있다.",
      "소스 코드를 임의로 개작할 수 있다.",
      "소스 코드 수정시에는 반드시 소스 코드를 공개해야 한다.",
      "무료로 얻은 소스 코드를 이용하여 프로그램을 만든 경우에는 무료로만 배포해야 한다."
    ],
    "answer_index": 3,
    "explanation": "자유 소프트웨어(GPL 등)의 '자유(Free)'는 가격이 무료(Gratis)임을 뜻하는 것이 아니라 소스 코드의 이용, 수정, 배포의 자유(Liberty)를 뜻합니다. 따라서 자유 소프트웨어를 기반으로 개발한 프로그램이라 하더라도 유료로 판매하거나 배포 비용을 청구할 수 있으므로 '무료로만 배포해야 한다'는 설명은 틀렸습니다.",
    "original_num": 47,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 45
  },
  {
    "source": "1차 문제집 A세트 Q49",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "파티션에 대한 설명으로 틀린 것은?",
    "options": [
      "하나의 물리적 디스크에는 4 개의 Primary 파티션으로 분할이 가능하다.",
      "파티션은 실린더를 기준으로 나뉘어 진다.",
      "1 개의 Extended 파티션은 6 개의 Primary 파티션으로 분할이 가능하다",
      "하나의 물리적 디스크에 12 개 이상의 파티션 생성도 가능하다."
    ],
    "answer_index": 2,
    "explanation": "[정답: 3번] 확장 파티션(Extended Partition)의 내부 공간에는 '논리 파티션(Logical Partition)'을 생성하여 분할하는 것이며, 주 파티션(Primary Partition)은 확장 파티션 내부에 만들 수 없습니다. 따라서 3번이 틀린 설명입니다.",
    "original_num": 49,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 46
  },
  {
    "source": "1차 문제집 A세트 Q50",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "파일 또는 디렉토리 관리와 관련된 명령어가 아닌 것은?",
    "options": [
      "cp",
      "mkdir",
      "ps",
      "rm"
    ],
    "answer_index": 2,
    "explanation": "cp(복사), mkdir(디렉터리 생성), rm(파일/디렉터리 삭제)은 파일 및 디렉터리 관리 명령어입니다. 반면 ps(process status)는 현재 시스템에서 실행 중인 프로세스들의 상태를 확인하는 프로세스 관리 명령어입니다.",
    "original_num": 50,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 47
  },
  {
    "source": "1차 문제집 B세트 Q2",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "배포판 설치 시 선택할 수 있는 설치 유형이 아닌 것은?",
    "options": [
      "워크스테이션",
      "업그레이드",
      "서버",
      "메인프레임"
    ],
    "answer_index": 3,
    "explanation": "리눅스 배포판 설치 유형에는 개인 데스크톱용 워크스테이션, 서버용 서비스 설치, 기존 시스템 판올림인 업그레이드 등이 제공되며 '메인프레임'은 제공되지 않습니다.",
    "original_num": 2,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 48
  },
  {
    "source": "1차 문제집 B세트 Q4",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "현재 디렉토리의 하위 디렉토리까지 모두 포함하여 linuxmaster라는 문자열을 포함한 파일을 검색하는 명령으로 가장 알맞은 것은?",
    "options": [
      "find . -string linuxmaster -print",
      "grep -r linuxmaster *",
      "ls -al | grep linuxmaster",
      "cat * | grep linuxmaster"
    ],
    "answer_index": 1,
    "explanation": "grep의 '-r'(--recursive) 옵션은 하위 서브디렉터리 안의 파일 내용까지 재귀적으로 탐색하여 특정 문자열(linuxmaster)이 포함된 줄을 찾아냅니다.",
    "original_num": 4,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 49
  },
  {
    "source": "1차 문제집 B세트 Q5",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "교육용 유닉스로 리눅스 개발의 시발점이 된 운영체제는?",
    "options": [
      "Minix",
      "Windows 2000",
      "Mac OS X",
      "Solaris"
    ],
    "answer_index": 0,
    "explanation": "리누스 토발즈가 리눅스 커널을 개발할 때 모델로 삼았던 네덜란드 암스테르담 자유대학교 앤드루 타넨바움 교수의 소형 교육용 유닉스는 '미닉스(MINIX)'입니다.",
    "original_num": 5,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 50
  },
  {
    "source": "1차 문제집 B세트 Q2",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 두 파일의 내용이 서로 다른 첫 번째 문자 위치(char)와 줄 번호(line)를 바이트 단위로 비교하여 출력하는 명령어로 알맞은 것은?",
    "options": [
      "rm",
      "cmp",
      "mkdir",
      "ls"
    ],
    "answer_index": 1,
    "explanation": "cmp(compare) 명령어는 두 파일의 내용을 바이트 단위로 직접 비교하여 내용이 처음으로 달라지는 줄 번호와 바이트(문자) 오프셋 위치를 화면에 출력합니다. (텍스트 전체 차이점은 diff)",
    "original_num": 2,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 51
  },
  {
    "source": "1차 문제집 B세트 Q9",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "userdel 명령어로 계정을 삭제할 때, 해당 계정 홈 디렉토리의 하위 디렉토리까지 삭제시키는 옵션은?",
    "options": [
      "-r",
      "-R",
      "-d",
      "-D"
    ],
    "answer_index": 0,
    "explanation": "userdel 명령어에서 소문자 '-r'(--remove) 옵션은 계정 삭제 시 해당 사용자의 홈 디렉터리와 메일 저장소(/var/spool/mail/계정명)까지 함께 삭제합니다.",
    "original_num": 9,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 52
  },
  {
    "source": "1차 문제집 B세트 Q11",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "시스템을 재시작하지 않고 완전히 종료(전원 끄기/정지)하는 명령으로 틀린 것은?",
    "options": [
      "shutdown -h now",
      "halt",
      "init 0",
      "reboot"
    ],
    "answer_index": 3,
    "explanation": "shutdown -h now, halt, init 0, poweroff 등은 시스템을 종료시키는 명령입니다. 반면 reboot(또는 init 6)은 시스템을 재부팅(재시작)하는 명령이므로 올바른 정답입니다.",
    "original_num": 11,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 53
  },
  {
    "source": "1차 문제집 B세트 Q29",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "ls 명령어를 사용하여 다음과 같은 상세 목록 및 숨김 파일 출력 결과가 나오게 하기 위한 옵션으로 알맞은 것은?\n\n-rw-r--r-- 1 root root   24 Jul  5 08:29 .bash_logout\n-rw-r--r-- 1 root root  230 Jul  5 08:29 .bash_profile\n-rw-r--r-- 1 root root  124 Jul  5 08:29 .bashrc\n-rw-r--r-- 1 root root 3394 Jul  5 08:29 .screenrc\ndrwxr-x--x 2 root level0 4096 Jul  6 18:01 public_html",
    "options": [
      "-c",
      "-al",
      "-d",
      "-dl"
    ],
    "answer_index": 1,
    "explanation": "출력 결과에서 '.screenrc', '.bashrc' 등 마침표(.)로 시작하는 숨김 파일들이 모두 표시되고(-a, all), 허가권/소유자/크기/시간 등의 긴 상세 목록 형식(-l, long)으로 출력되었으므로 두 옵션을 결합한 '-al'(또는 -la)이 정답입니다.",
    "original_num": 29,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 54
  },
  {
    "source": "1차 문제집 B세트 Q14",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "FSF의 설립자로서 GNU 프로젝트를 이끌면서 리눅스의 발전에 핵심적인 역할을 한 사람은?",
    "options": [
      "리차드 스톨만 (Richard Stallman)",
      "리누스 토발즈 (Linus Torvalds)",
      "앤드류 타넨바움 (Andrew Tanenbaum)",
      "빌 게이츠 (Bill Gates)"
    ],
    "answer_index": 0,
    "explanation": "1984년 GNU 프로젝트를 창시하고 1985년 자유 소프트웨어 재단(FSF)을 설립하여 GPL 라이선스를 제정한 인물은 리처드 스톨먼(Richard Stallman)입니다. (리누스 토발즈는 리눅스 커널 개발자)",
    "original_num": 14,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 55
  },
  {
    "source": "1차 문제집 B세트 Q15",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "CD-ROM 드라이브를 열고 닫을 때 사용하는 명령어는?",
    "options": [
      "eject",
      "mount",
      "mmd",
      "close"
    ],
    "answer_index": 0,
    "explanation": "eject 명령어는 CD-ROM/DVD 드라이브 트레이를 배출(열기)하거나 다시 닫을 때(-t 옵션) 사용합니다.",
    "original_num": 15,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 56
  },
  {
    "source": "1차 문제집 B세트 Q16",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "리차드 스톨만(Richard Stallman)에 의해 설립되었으며 컴퓨터 프로그램의 복제와 배포, 개작을 위한 소스 코드의 원용에 대한 제한들을 철폐하는 목적을 가진 단체는?",
    "options": [
      "FSF",
      "ISO",
      "ANSI",
      "IETF"
    ],
    "answer_index": 0,
    "explanation": "자유 소프트웨어 재단(FSF, Free Software Foundation)은 소프트웨어의 자유로운 사용, 복제, 수정, 배포의 자유를 보장하기 위해 설립된 비영리 단체입니다.",
    "original_num": 16,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 57
  },
  {
    "source": "1차 문제집 B세트 Q17",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "ftp에서 여러 개의 파일을 한 번에 다운로드받을 때 사용하는 명령어로 가장 적당한 것은?",
    "options": [
      "put",
      "mput",
      "get",
      "mget"
    ],
    "answer_index": 3,
    "explanation": "ftp 대화형 쉘에서 단일 파일 다운로드는 'get', 여러 개 파일의 일괄 다운로드는 'mget'(multiple get)을 사용합니다. 파일 업로드는 단일 'put', 다중 'mput'입니다.",
    "original_num": 17,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 58
  },
  {
    "source": "1차 문제집 B세트 Q21",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "사용자 계정 추가 시 기본적으로 설정되는 항목으로 틀린 것은?",
    "options": [
      "Home directory",
      "기본 쉘",
      "그룹 및 그룹 ID",
      "vi 에디터"
    ],
    "answer_index": 3,
    "explanation": "useradd로 새 계정을 생성할 때 기본 설정되는 항목은 홈 디렉터리(/home/계정명), 기본 쉘(/bin/bash), 사용자 UID 및 기본 그룹 GID, 메일 스풀 등입니다. 특정 텍스트 에디터(vi 에디터)는 계정 기본 속성으로 설정되는 항목이 아닙니다.",
    "original_num": 21,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 59
  },
  {
    "source": "1차 문제집 B세트 Q24",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "리눅스에서 쉘이 명령어를 찾을 수 있도록 지정하는 검색경로(PATH)를 시스템 전역으로 설정하는 파일로 가장 알맞은 것은?",
    "options": [
      "/etc/profile",
      "/etc/passwd",
      "/etc/shadow",
      "/etc/environment"
    ],
    "answer_index": 0,
    "explanation": "시스템의 모든 사용자가 로그인할 때 가장 먼저 공통으로 실행되어 PATH 등 전역 환경변수를 설정하는 파일은 '/etc/profile'입니다.",
    "original_num": 24,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 60
  },
  {
    "source": "1차 문제집 B세트 Q25",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 명령 중 a.txt 파일과 같은 내용으로 b.txt 파일을 복사하여 만드는 명령은?",
    "options": [
      "cat a.txt <<b.txt",
      "cat b.txt <a.txt",
      "cat a.txt >b.txt",
      "cat b.txt >a.txt"
    ],
    "answer_index": 2,
    "explanation": "'cat a.txt > b.txt' 명령은 a.txt 파일의 내용을 읽어 표준 출력을 b.txt 파일로 리다이렉션하여 덮어쓰므로 b.txt 파일에 a.txt와 동일한 내용이 저장됩니다.",
    "original_num": 25,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 61
  },
  {
    "source": "1차 문제집 B세트 Q29",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 설치 및 설정",
    "question": "LILO 설정 파일인 /etc/lilo.conf의 각 설정에 대한 설명으로 틀린 것은?",
    "options": [
      "boot=/dev/hda : LILO가 설치될 위치",
      "map=/boot/map : LILO에 의해서 자동으로 생성되는 맵 파일",
      "install=/boot/boot.b : 부트 섹터 위치 정보를 가진 파일",
      "timeout=50 : 키보드 입력이 없을 시 자동 부팅 대기 시간 50초 설정"
    ],
    "answer_index": 3,
    "explanation": "LILO 설정 파일(/etc/lilo.conf)에서 'timeout'의 단위는 1/10초(데시초)입니다. 따라서 'timeout=50'은 50초가 아니라 '5초' 동안 대기함을 의미하므로 틀린 설명입니다.",
    "original_num": 29,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 62
  },
  {
    "source": "1차 문제집 B세트 Q30",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "각 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "pwd : 현재 위치한 디렉토리 확인",
      "tty : 현재 접속한 터미널의 장치 확인",
      "cd : 지정한 디렉토리로 이동",
      "man : 현재 로그인 되어 있는 사용자 확인"
    ],
    "answer_index": 3,
    "explanation": "man 명령어는 리눅스 명령어 및 시스템 호출, 설정 파일의 매뉴얼 도움말 페이지를 조회하는 명령어입니다. 현재 로그인되어 있는 사용자 계정을 확인하는 명령어는 who, users, w 등입니다.",
    "original_num": 30,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 63
  },
  {
    "source": "1차 문제집 B세트 Q31",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "일반적으로 루트('/') 디렉터리 바로 하단에 위치하는 표준 디렉터리가 아닌 것은?",
    "options": [
      "/include",
      "/proc",
      "/usr",
      "/var"
    ],
    "answer_index": 0,
    "explanation": "FHS 표준에 따르면 C 언어 헤더 파일 등이 위치하는 디렉터리는 '/usr/include'이며, 루트 바로 아래에 '/include' 디렉터리는 존재하지 않습니다. /proc, /usr, /var 등은 루트 직하 디렉터리입니다.",
    "original_num": 31,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 64
  },
  {
    "source": "1차 문제집 B세트 Q32",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "명령어 실행 중 발생하는 오류 메시지만을 파일로 저장하기 위한 표준 오류 방향 재지정(리다이렉션) 명령으로 옳은 것은?",
    "options": [
      "cat nofile 0> error_log_file",
      "cat nofile 1> error_log_file",
      "cat nofile 2> error_log_file",
      "cat nofile >error_log_file"
    ],
    "answer_index": 2,
    "explanation": "리눅스 파일 디스크립터에서 0번은 표준 입력(stdin), 1번은 표준 출력(stdout), 2번은 표준 오류(stderr)입니다. 따라서 오류 메시지만 파일로 저장하려면 파일 디스크립터 2번을 지정한 '2>'를 사용해야 합니다.",
    "original_num": 32,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 65
  },
  {
    "source": "1차 문제집 B세트 Q34",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "ftp 내부 명령어가 아닌 것은?",
    "options": [
      "put",
      "get",
      "open",
      "mcopy"
    ],
    "answer_index": 3,
    "explanation": "mcopy는 mtools 패키지에 포함된 도스(DOS) 디스켓/이미지 파일 복사 명령어입니다. ftp 대화형 쉘에서는 get, put, open, close, bye, mget, mput 등의 내부 명령어를 사용합니다.",
    "original_num": 34,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 66
  },
  {
    "source": "1차 문제집 B세트 Q37",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "하나의 디스크를 몇 개의 드라이브로 분할하여 사용할지 설정하는 것으로 그 용어와 도구(Tool)의 조합이 맞는 것은?",
    "options": [
      "MBR,FDISK",
      "MBR,LILO",
      "파티션,Disk Druid",
      "파티션,LILO"
    ],
    "answer_index": 2,
    "explanation": "물리적 디스크를 논리적인 여러 구역으로 나누는 작업을 '파티션(Partition)'이라고 하며, 레드햇 계열 리눅스 설치 프로그램에서 파티션을 설정하는 대화형 그래픽 도구는 'Disk Druid'(또는 fdisk)입니다.",
    "original_num": 37,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 67
  },
  {
    "source": "1차 문제집 B세트 Q39",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "현재 호스트에서 ihd.or.kr까지 연결되는 네트워크 경로(홉)를 알고 싶을 때 사용할 명령은?",
    "options": [
      "traceroute ihd.or.kr",
      "ping ihd.or.kr",
      "telnet ihd.or.kr",
      "ftp ihd.or.kr"
    ],
    "answer_index": 0,
    "explanation": "목적지 호스트까지 도달하는 네트워크 경로 상의 모든 라우터(홉, Hop)의 IP 주소와 패킷 왕복 시간을 추적하는 유틸리티는 'traceroute'입니다.",
    "original_num": 39,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 68
  },
  {
    "source": "1차 문제집 B세트 Q41",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "현재 시스템에 접속하여 로그인 중인 사용자 계정명을 조회하는 명령어는?",
    "options": [
      "find",
      "grep",
      "ping",
      "users"
    ],
    "answer_index": 3,
    "explanation": "현재 시스템에 로그인되어 접속 중인 사용자들의 계정명을 한 줄로 나열해 조회하는 명령어는 'users'입니다.",
    "original_num": 41,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 69
  },
  {
    "source": "1차 문제집 B세트 Q42",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "네트워크 인터페이스(IP 주소, 넷마스크, MAC 주소)를 설정하거나 확인하는 명령어로 맞는 것은?",
    "options": [
      "ifconfig",
      "ipconfig",
      "xconfig",
      "iptable"
    ],
    "answer_index": 0,
    "explanation": "리눅스에서 네트워크 인터페이스의 IP 주소, 넷마스크, MTU, 활성화 상태를 확인하고 설정하는 기본 명령어는 'ifconfig'입니다.",
    "original_num": 42,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 70
  },
  {
    "source": "1차 문제집 B세트 Q43",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "디렉토리 내의 파일들의 상세 정보를 화면(페이지) 단위로 끊어서 출력할 때 사용하는 파이프 결합 명령은?",
    "options": [
      "ls -al | more",
      "ls -al | cat",
      "ls -al | screen",
      "ls -al | page"
    ],
    "answer_index": 0,
    "explanation": "ls -al 명령의 긴 출력 결과를 터미널 화면 단위로 끊어서 페이지 넘김을 하며 읽으려면 파이프(|)를 통해 페이지 뷰어인 'more'(또는 less)로 전달해야 합니다.",
    "original_num": 43,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 71
  },
  {
    "source": "1차 문제집 B세트 Q44",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 파일이나 디렉터리를 삭제할 때 사용하는 명령어는?",
    "options": [
      "clear",
      "delete",
      "rm",
      "mv"
    ],
    "answer_index": 2,
    "explanation": "리눅스에서 파일이나 디렉터리를 삭제(remove)할 때 사용하는 표준 명령어는 'rm'입니다. 디렉터리를 삭제할 때는 '-r' 옵션을 사용합니다.",
    "original_num": 44,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 72
  },
  {
    "source": "1차 문제집 B세트 Q45",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "각 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "pwd : 현재 작업 디렉토리 위치 확인",
      "mkdir : 디렉토리 만들기",
      "man : 현재 로그인 되어 있는 사용자 확인",
      "fsck : 파일 시스템 검사 및 오류 수정"
    ],
    "answer_index": 2,
    "explanation": "man 명령어는 명령어 및 시스템 라이브러리 매뉴얼 도움말을 열람하는 명령어입니다. 현재 로그인되어 있는 사용자 확인은 who, users, w 명령어를 사용합니다.",
    "original_num": 45,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 73
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 시스템에 로그인한 전체 사용자에게 브로드캐스트 메시지를 전송할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "write",
      "talk",
      "wall",
      "mesg"
    ],
    "answer_index": 2,
    "explanation": "wall(write all) 명령어는 현재 시스템에 로그인되어 터미널을 열고 있는 모든 사용자에게 화면 메시지를 일괄 브로드캐스트 전송합니다.",
    "original_num": 74,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 74
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 특정 명령을 일정한 주기로 반복 실행시켜 화면에 출력할 때 사용하는 명령어로 알맞은 것은?",
    "options": [
      "cron",
      "watch",
      "at",
      "batch"
    ],
    "answer_index": 1,
    "explanation": "watch 명령어는 지정한 주기(기본 2초, -n 초)마다 지정한 명령어를 반복 실행하여 터미널 화면에 결과를 실시간으로 갱신하여 보여주는 유틸리티입니다.",
    "original_num": 75,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 75
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 자유 소프트웨어 재단(FSF)을 설립하고 GNU 프로젝트를 시작한 인물로 알맞은 것은?",
    "options": [
      "리누스 토발즈(Linus Torvalds)",
      "리처드 스톨먼(Richard Stallman)",
      "켄 톰슨(Ken Thompson)",
      "데니스 리치(Dennis Ritchie)"
    ],
    "answer_index": 1,
    "explanation": "리처드 스톨먼(Richard Stallman)은 1983년 GNU 프로젝트를 선언하고 1985년 자유 소프트웨어 재단(FSF)을 설립하여 소프트웨어 자유 운동을 창시하였습니다.",
    "original_num": 76,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 76
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 리눅스 커널을 최초로 개발하여 발표한 인물로 알맞은 것은?",
    "options": [
      "리누스 토발즈(Linus Torvalds)",
      "리처드 스톨먼(Richard Stallman)",
      "앤드루 타넨바움(Andrew Tanenbaum)",
      "빌 조이(Bill Joy)"
    ],
    "answer_index": 0,
    "explanation": "1991년 핀란드 헬싱키 대학 재학 시절 미닉스를 모델로 리눅스 커널 0.01 버전을 개발하여 전 세계 인터넷 뉴스그룹에 공개한 인물은 리누스 토발즈(Linus Torvalds)입니다.",
    "original_num": 77,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 77
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 오픈소스 소프트웨어 라이선스 중 2차 저작물의 소스코드 공개 의무가 없는 것은?",
    "options": [
      "GPL v2",
      "GPL v3",
      "BSD 라이선스",
      "AGPL"
    ],
    "answer_index": 2,
    "explanation": "BSD 라이선스는 상용 목적 사용 및 소스 코드 비공개를 허용하는 매우 자유로운 퍼미시브(Permissive) 라이선스로, 수정된 2차 저작물의 소스코드를 공개할 의무가 없습니다. GPL, AGPL은 카피레프트 의무가 있어 소스코드를 반드시 공개해야 합니다.",
    "original_num": 78,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 78
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 데비안(Debian) 계열의 리눅스 배포판으로 알맞은 것은?",
    "options": [
      "CentOS",
      "Fedora",
      "Ubuntu",
      "RHEL"
    ],
    "answer_index": 2,
    "explanation": "Ubuntu(우분투)는 Debian(데비안)을 기반으로 제작된 대표적인 데비안 계열 배포판입니다. CentOS, Fedora, RHEL은 레드햇(Red Hat) 계열 배포판입니다.",
    "original_num": 79,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 79
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 시스템의 하드웨어 시간(CMOS/RTC 시간)을 확인하거나 설정하는 명령어로 알맞은 것은?",
    "options": [
      "date",
      "clock",
      "hwclock",
      "time"
    ],
    "answer_index": 2,
    "explanation": "메인보드의 CMOS 배터리로 유지되는 실시간 하드웨어 시계(RTC)를 조회하거나 시스템 운영체제 시간과 동기화할 때 사용하는 명령어는 'hwclock'(또는 clock)입니다. date는 운영체제 소프트웨어 시간을 관리합니다.",
    "original_num": 80,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 80
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 현재 시스템에 로그인한 사용자들의 계정명, 터미널, 로그인 시간, 작업 중인 명령 등의 상세 정보를 조회하는 명령으로 알맞은 것은?",
    "options": [
      "w",
      "who",
      "users",
      "whoami"
    ],
    "answer_index": 0,
    "explanation": "w 명령어는 현재 시스템에 로그인한 사용자들의 계정명, TTY 터미널, 접속 IP, 로그인 시간, 유휴(IDLE) 시간, CPU 사용량 및 현재 실행 중인 명령어(WHAT)를 종합적으로 출력합니다.",
    "original_num": 81,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 81
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 특정 도메인의 IP 주소 및 네임서버 정보를 상세하게 질의하는 유틸리티로 가장 널리 권장되는 명령은?",
    "options": [
      "ping",
      "dig",
      "traceroute",
      "ifconfig"
    ],
    "answer_index": 1,
    "explanation": "dig(Domain Information Groper)는 BIND 패키지에서 제공하는 가장 강력하고 유연한 DNS 질의 도구로, nslookup을 대체하여 현대 표준 도구로 적극 권장됩니다.",
    "original_num": 82,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 82
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 부팅 시 GRUB 설정 파일인 grub.conf(또는 menu.lst)에서 부트 메뉴 표시 제한 시간을 10초로 지정하는 항목으로 알맞은 것은?",
    "options": [
      "time=10",
      "delay=10",
      "timeout=10",
      "wait=10"
    ],
    "answer_index": 2,
    "explanation": "GRUB Legacy 설정 파일(grub.conf / menu.lst)에서 부트 메뉴 선택 대기 시간을 초 단위로 설정하는 지시자는 'timeout=초'입니다. (예: timeout=10)",
    "original_num": 83,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 83
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 물리적 RAM 메모리가 1GB인 리눅스 시스템에 권장되는 스왑(Swap) 공간 용량으로 가장 적절한 것은?",
    "options": [
      "512MB",
      "1GB",
      "2GB",
      "8GB"
    ],
    "answer_index": 2,
    "explanation": "전통적인 리눅스 시스템 권장 규격에 따르면, 물리적 RAM 메모리가 2GB 이하인 시스템의 경우 물리 RAM 용량의 2배(1GB RAM이면 2GB Swap)를 스왑 영역으로 할당하는 것이 표준 권장 사양입니다.",
    "original_num": 84,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 84
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 mkdir 명령어로 하위 디렉터리를 포함하여 경로 상의 부모 디렉터리까지 한 번에 자동 생성하는 옵션은?",
    "options": [
      "-r",
      "-R",
      "-p",
      "-a"
    ],
    "answer_index": 2,
    "explanation": "mkdir 명령어에서 '-p'(--parents) 옵션은 생성하려는 대상 디렉터리의 상위(부모) 디렉터리가 아직 존재하지 않을 때 상위 경로까지 재귀적으로 한 번에 자동 생성해 줍니다.",
    "original_num": 85,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 85
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 시스템 관리자가 사용자의 암호 만료 기간 및 계정 비활성화 정보를 조회하거나 변경할 때 사용하는 명령어는?",
    "options": [
      "passwd",
      "chage",
      "usermod",
      "useradd"
    ],
    "answer_index": 1,
    "explanation": "chage(change age) 명령어는 /etc/shadow 파일에 저장된 사용자의 암호 만료 주기(최소/최대 사용 일수, 만료 경고 일수, 계정 비활성화 일자)를 조회(-l)하거나 설정할 때 사용하는 전용 유틸리티입니다.",
    "original_num": 86,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 86
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스의 이해 및 개요",
    "question": "다음 중 새로 생성되는 사용자 계정의 기본 홈 디렉터리에 자동으로 복사되는 환경 설정 파일들이 보관된 디렉터리는?",
    "options": [
      "/etc/skel",
      "/etc/default",
      "/etc/profile.d",
      "/usr/share/skel"
    ],
    "answer_index": 0,
    "explanation": "useradd 명령어로 새로운 계정을 생성할 때 사용자의 홈 디렉터리로 기본 복사되는 템플릿 환경 설정 파일(.bashrc, .bash_profile 등)이 보관된 기본 디렉터리는 '/etc/skel'(skeleton)입니다.",
    "original_num": 87,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 87
  },
  {
    "source": "1차 문제집 C세트 엄선 기출",
    "stage": "1차",
    "subject": "리눅스 일반",
    "chapter": "리눅스 기본 명령어 및 사용자 관리",
    "question": "다음 중 시스템 실행 레벨(Runlevel)에서 '다중 사용자 텍스트 모드(네트워크 지원 CLI)'를 의미하는 번호는?",
    "options": [
      "레벨 0",
      "레벨 1",
      "레벨 3",
      "레벨 5"
    ],
    "answer_index": 2,
    "explanation": "리눅스 표준 런레벨 3번은 네트워크 기능을 온전히 지원하는 다중 사용자 텍스트(CLI) 모드입니다. (런레벨 0: 종료, 1: 단일 사용자, 5: X 윈도우 그래픽 모드, 6: 재부팅)",
    "original_num": 88,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IEEE POSIX/man-pages 정밀 검증 완료",
    "id": 88
  },
  {
    "source": "2차 문제집 문1",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 사용자가 소스 컴파일하여 설치하는 프로그램을 위치시키는 디렉터리로 가장 알맞은 것은?",
    "options": [
      "/lib",
      "/etc",
      "/usr/local",
      "/usr"
    ],
    "answer_index": 2,
    "explanation": "사용자가 직접 소스 코드를 다운로드받아 컴파일(configure -> make -> make install)하여 설치하는 프로그램은 시스템 기본 배포판 패키지와 격리하여 관리하기 위해 FHS 표준에 따라 '/usr/local' 디렉터리 아래에 설치합니다. /lib는 기본 라이브러리, /etc는 시스템 설정, /usr은 패키지 설치 디렉터리입니다.",
    "original_num": 1,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 89
  },
  {
    "source": "2차 문제집 문2",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 일반적인 리눅스 디렉터리에 대한 설명으로 알맞 은 것은?",
    "options": [
      "/ : 최상위(루트) 디렉터리",
      "/lib : 실행파일 저장 디렉터리",
      "/var : 사용자 프로그램 설치 디렉터리",
      "/etc : 사용자 홈 저장 디렉터리"
    ],
    "answer_index": 0,
    "explanation": "리눅스 디렉터리 계층 구조(FHS)에서 최상위 시작점은 루트('/') 디렉터리입니다. /lib는 공유 라이브러리 저장소, /var는 가변 데이터(로그, 메일 등), /etc는 시스템 전역 설정 파일 디렉터리입니다.",
    "original_num": 2,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 90
  },
  {
    "source": "2차 문제집 문3",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 리눅스의 각종 시스템 설정 파일들이 저장되는 기본 디렉토리로 알맞은 것은?",
    "options": [
      "/etc",
      "/usr",
      "/var",
      "/lib"
    ],
    "answer_index": 0,
    "explanation": "리눅스 시스템에서 시스템 전역 환경설정 및 네트워크/서비스 설정 파일(passwd, fstab, hosts, resolv.conf 등)이 보관되는 표준 디렉터리는 '/etc'입니다.",
    "original_num": 3,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 91
  },
  {
    "source": "2차 문제집 문4",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "리눅스 시스템에서 일반적으로 메일, 로그관련 데이터가 저장되는 디렉토리로 알맞은 것은?",
    "options": [
      "/etc",
      "/usr",
      "/var",
      "/lib"
    ],
    "answer_index": 2,
    "explanation": "시스템 운영 중 크기가 수시로 동적 변화하는 가변 데이터(시스템 로그 파일 /var/log, 메일 스풀 /var/spool/mail, 프린터 큐 /var/spool/lpd 등)를 보관하는 전용 디렉터리는 '/var'입니다.",
    "original_num": 4,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 92
  },
  {
    "source": "2차 문제집 문5",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 파일의 소유권(Ownership) 및 허가권 (Permission)을 확인할 수 있는 명령어로 알맞은 것은?",
    "options": [
      "chown",
      "chmod",
      "ls",
      "chgrp"
    ],
    "answer_index": 2,
    "explanation": "파일 및 디렉터리의 허가권(Permission, rwxr-xr-x)과 소유권(Owner, Group)을 긴 목록 형태로 한눈에 확인할 수 있는 가장 대표적인 기본 명령어는 'ls -l'(또는 ls)입니다. (chown은 소유권 변경, chmod는 허가권 변경 명령어)",
    "original_num": 5,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 93
  },
  {
    "source": "2차 문제집 문6",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 파일속성에 대한 문자와 의미에 대한 설명으로 틀린 것은?",
    "options": [
      "c : 문자특수 파일",
      "d : 디렉터리 파일",
      "b : 배치 파일",
      "l : 기호링크"
    ],
    "answer_index": 2,
    "explanation": "파일 속성 첫 번째 문자에서 'b'는 블록 특수 파일(Block Special Device File, 예: 하드디스크 /dev/sda)을 나타냅니다. 리눅스에는 배치 파일이라는 파일 유형은 없으며, c는 문자 특수 파일, d는 디렉터리, l은 심볼릭 링크입니다.",
    "original_num": 6,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 94
  },
  {
    "source": "2차 문제집 문7",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 허가권(Permission)에 대한 설명으로 틀린 것은?",
    "options": [
      "파일의 내용을 볼 수 있는 권한 표시는 r을사용한다.",
      "디렉터리 안에 파일을 생성 또는 삭제할 수 없는 권한 표시 는 w를 사용한다.",
      "실행 파일을 실행시킬 수 있는 권한 표시는 x를 사용한다.",
      "디렉터리 내부로 접근할 수 있는 권한 표시는 x를 사용한다."
    ],
    "answer_index": 1,
    "explanation": "디렉터리에 부여된 쓰기(w, write) 권한은 '디렉터리 내부에 새로운 파일을 생성하거나 기존 파일을 삭제할 수 있는 권한'을 의미합니다. 따라서 '생성 또는 삭제할 수 없는 권한'이라는 설명은 틀렸습니다.",
    "original_num": 7,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 95
  },
  {
    "source": "2차 문제집 문8",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 ls -l 명령의 결과에 대한 설명으로 알맞은 것은? srw-r--- 1 root root 0 Aug 8 13:41 control",
    "options": [
      "심볼릭 링크 파일을 의미한다.",
      "블록 구조의 특수 파일을 의미한다.",
      "소켓 파일을 의미한다.",
      "입출력에 사용되는 특수 파일을 의미한다."
    ],
    "answer_index": 2,
    "explanation": "ls -l 출력의 맨 앞자리가 's'로 시작하는 파일(srw-r-----)은 네트워크 또는 프로세스 간 통신(IPC)에 사용되는 '유닉스 도메인 소켓(Socket) 특수 파일'을 의미합니다.",
    "original_num": 8,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 96
  },
  {
    "source": "2차 문제집 문9",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? [root@www ~] # ls - /dev/sda () 1 root disk 8, 0 Aug 8 13:01 /dev/sda",
    "options": [
      "brw-rw----",
      "crw-rw----",
      "drw-rw----",
      "lrw-rw----"
    ],
    "answer_index": 0,
    "explanation": "하드디스크 파티션 장치(/dev/sda)는 블록 단위로 대용량 데이터를 입출력하는 대표적인 블록 특수 파일이므로 맨 앞자리가 'b'(Block device)로 시작하는 'brw-rw----'가 올바릅니다.",
    "original_num": 9,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 97
  },
  {
    "source": "2차 문제집 문10",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 리눅스시스템에서 일반적으로 분류하는 3가지 종류에 해당하는 파일로 틀린 것은?",
    "options": [
      "일반 파일",
      "디렉터리 파일",
      "백업 파일",
      "특수 파일"
    ],
    "answer_index": 2,
    "explanation": "리눅스 파일시스템에서 분류하는 3대 파일 종류는 일반 파일(Regular file), 디렉터리 파일(Directory file), 특수 파일(Special file: 블록/문자/파이프/소켓/링크)입니다. '백업 파일'은 사용 용도에 따른 분류일 뿐 파일시스템 레벨의 종류가 아닙니다.",
    "original_num": 10,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 98
  },
  {
    "source": "2차 문제집 문11",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 ls -l 출력 결과에서 ⓐ(-rwxrw-rw-), ⓑ(messi), ⓒ(keroro)가 의미하는 내용을 순서대로 올바르게 나열한 것은?",
    "options": [
      "허가권(Permission), 사용자 소유권(User Ownership), 그룹 소유권(Group Ownership)",
      "허가권(Permission), 그룹 소유권(Group Ownership), 사용자 소유권(User Ownership)",
      "사용자 소유권(User Ownership), 허가권(Permission), 그룹 소유권(Group Ownership)",
      "그룹 소유권(Group Ownership), 허가권(Permission), 사용자 소유권(User Ownership)"
    ],
    "answer_index": 0,
    "explanation": "ls -l의 출력 형식에서 ⓐ(-rwxrw-rw-)는 파일의 접근 허가권(Permission), ⓑ(messi)는 파일을 소유한 사용자 소유권(User Ownership), ⓒ(keroro)는 파일이 속한 그룹 소유권(Group Ownership)을 순서대로 나타냅니다.",
    "original_num": 11,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 99
  },
  {
    "source": "2차 문제집 문12",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 chmod 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-R, --recursive : 하위 디렉터리를 포함하여 디렉터리 내부의 모든 파일의 접근 권한을 변경한다.",
      "-c, --changes : 변경된 정보를 출력해준다.",
      "-f, --force : 변경되지 않는 권한이 있을 경우에 강제 로 변경한다.",
      "-v, --version : 명령어의 버전 정보를 출력한다."
    ],
    "answer_index": 2,
    "explanation": "chmod 명령어의 옵션 중 '-f'(--silent, --quiet) 옵션은 권한 변경 실패 시 출력되는 오류 메시지를 숨기는 옵션입니다. 권한을 강제로 변경하는 옵션이 아니므로 3번이 틀린 설명입니다.",
    "original_num": 12,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 100
  },
  {
    "source": "2차 문제집 문13",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 (괄호) 안에 들어갈 명령으로 알맞은 것은?",
    "options": [
      "chgrp",
      "cron",
      "cd",
      "chmod"
    ],
    "answer_index": 3,
    "explanation": "파일이나 디렉터리의 접근 허가권(Permission: r, w, x)을 변경할 때 사용하는 명령어는 'chmod(change mode)'입니다. chgrp는 소유 그룹 변경, chown은 소유자 변경 명령어입니다.",
    "original_num": 13,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 101
  },
  {
    "source": "2차 문제집 문14",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "파일의 허가권이 다음과 같다. 사용자는 읽기, 쓰기, 실 행 권한을 부여하고, 그룹과 다른 사용자는 읽기와 쓰기 권 한만 설정하려고 할 때 정답이 아닌 것은?",
    "options": [
      "chmod 766 point.c",
      "chmod 577 point.c",
      "chmod u=rwx,go=rw point.c",
      "chmod u+rwx,g+w,o+rw point.c"
    ],
    "answer_index": 1,
    "explanation": "사용자에게 rwx(7), 그룹과 기타 사용자에게 rw(6) 권한을 부여하려면 8진수로는 'chmod 766 point.c'이고 문자 모드로는 'chmod u=rwx,go=rw point.c'입니다. 보기 2번의 'chmod 577'은 사용자에게 rx(5), 그룹/기타에게 rwx(7)를 주는 설정이므로 정답(틀린 것)입니다.",
    "original_num": 14,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 102
  },
  {
    "source": "2차 문제집 문15",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "현재 white.txt 허가권이 644이다. 아래의 보기와 같이 변 경하고자 할 때 알맞은 것은?",
    "options": [
      "chmod 755 white.txt",
      "chmod u=x,g=x,o=x white.txt",
      "chmod ugo+r white.txt",
      "chmod ugo=wx white.txt"
    ],
    "answer_index": 0,
    "explanation": "white.txt의 권한을 644(rw-r--r--)에서 755(rwxr-xr-x)로 변경하려면 8진수 표기법인 'chmod 755 white.txt'를 사용하는 것이 가장 정확하고 올바릅니다.",
    "original_num": 15,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 103
  },
  {
    "source": "2차 문제집 문16",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 파일이나 디렉터리에 설정된 접근권한을 변경할 때 사용하는 명령어로 알맞은 것은?",
    "options": [
      "chgrp",
      "chmod",
      "chfn",
      "chown"
    ],
    "answer_index": 1,
    "explanation": "파일이나 디렉터리에 설정된 읽기/쓰기/실행 접근 허가권을 변경할 때 사용하는 표준 명령어는 'chmod(change mode)'입니다.",
    "original_num": 16,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 104
  },
  {
    "source": "2차 문제집 문17",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 chmod 명령어에 대한 설명으로 알맞은 것은?",
    "options": [
      "파일이나 디렉터리의 소유권 및 그룹 소유권을 변경하는 명령이다.",
      "16진수의 값을 사용하는 숫자 모드(Numeric Mode)로 지정한다.",
      "문자 모드에서 권한의 표시는 r, m, x를 사용한다.",
      "파일이나 디렉터리에 접근할 수 없는 허가권 (Permission) 을 설정하는 명령이다."
    ],
    "answer_index": 3,
    "explanation": "chmod 명령어는 파일이나 디렉터리에 대한 사용자의 접근 허가권(Permission: 읽기, 쓰기, 실행)을 부여하거나 차단(접근 불가)하도록 설정하는 명령어입니다.",
    "original_num": 17,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 105
  },
  {
    "source": "2차 문제집 문18",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음은.txt로 끝나는 파일들에 대한 허가권을 설정하는 과정이다. 모든 사용자에 대해 읽기권한만을 설정하려고 할 때 괄호 안에 들어갈 내용으로 알맞은 것은?(보기오류) (다만 전부 권한이 없었을 경우 가정하에 1번이정답입니다.)",
    "options": [
      "a+r",
      "a=",
      "o-r",
      "o=w"
    ],
    "answer_index": 0,
    "explanation": "모든 사용자(a, all)에게 읽기 권한을 추가(부여)할 때는 'chmod a+r' 명령을 사용합니다.",
    "original_num": 18,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 106
  },
  {
    "source": "2차 문제집 문19",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "/root 디렉터리에 존재하는 test.txt 파일에 대해 모든 사용자가 읽기만 가능하도록 설정하기 위한 명령으로 알맞은 것은? [root@www ~] # ls -d /root/ drwxr-xr-x 1 root root 4096 Aug 8 13:08 /root/ [root@www ~] # ls - test.txt -rw-r-----1 root root 4 Aug 8 13:48 test.txt",
    "options": [
      "chmod 111 /root/test.txt",
      "chmod 444 /root/test.txt",
      "chmod 555 /root/test.txt",
      "chmod 666 /root/test.txt"
    ],
    "answer_index": 1,
    "explanation": "모든 사용자(소유자, 그룹, 기타 사용자)에게 오직 '읽기 권한만(r--)'을 부여하려면 8진수로 각각 4(읽기), 4, 4이므로 'chmod 444 /root/test.txt'가 올바릅니다.",
    "original_num": 19,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 107
  },
  {
    "source": "2차 문제집 문20",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 명령어를 한 번만 사용하여 파일의 소유자와 소 유그룹을 동시에 변경하려할 때 알맞은 것은?",
    "options": [
      "chmod",
      "chgrp",
      "chown",
      "chsh"
    ],
    "answer_index": 2,
    "explanation": "한 번의 명령으로 파일의 소유자와 소유 그룹을 동시에 변경할 수 있는 명령어는 'chown 소유자:그룹 파일명'(또는 소유자.그룹) 형식의 'chown' 명령어입니다.",
    "original_num": 20,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 108
  },
  {
    "source": "2차 문제집 문21",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음과 같이 설정되어 있는 경우에 /home/user1를 포함 한 하위디렉터리 및 파일의 소유자를 white로 변경하고자 할 때 알맞은 것은?",
    "options": [
      "chmod -R white /home/user1",
      "chown -R white /home/user1",
      "chuser -R white /home/user1",
      "chsh -R white /home/user1"
    ],
    "answer_index": 1,
    "explanation": "지정한 디렉터리를 포함하여 그 하위의 모든 서브 디렉터리와 파일들의 소유권을 일괄 재귀적으로 변경하려면 대문자 '-R'(--recursive) 옵션을 사용하여 'chown -R white /home/user1'로 실행합니다.",
    "original_num": 21,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 109
  },
  {
    "source": "2차 문제집 문22",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? [root@ihd ~]$ ls -l documentation/ -rw-rw-r--. 1 jparks7 jparks7 3046 Jan 10 18:18 Connector-J.md -rw-rw-r--. 1 jparks7 jparks7 18365 Jan 10 18:18 Failovery.md drwxrwxr-x. 4 jparks7 jparks7 4096 Jan 10 18:18 src [root@ihd ~]$ chown () jparks7.root documentation/ [root@ihd ~]$ ls -l documentation/ -rw-rw-r--. 1 jparks7 root 3046 Jan 10 18:18 Connector-J.md -rw-rw-r--. 1 jparks7 root 18365 Jan 10 18:18 Failovery.md drwxrwxr-x. 4 jparks7 root 4096 Jan 10 18:18 src",
    "options": [
      "-f",
      "-c",
      "-r",
      "-R"
    ],
    "answer_index": 3,
    "explanation": "하위 디렉터리와 내부의 모든 파일에 대해 소유권(소유자, 그룹)을 재귀적으로 함께 변경하는 옵션은 대문자 '-R'(--recursive)입니다.",
    "original_num": 22,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 110
  },
  {
    "source": "2차 문제집 문23",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "사용자 user1, 그룹 grep1 소유인 디렉터리 home/user1을 포함한 하위 디렉터리 및 파일의 소유자를 모두 user2로 변경하려고 할 때 명령으로 알맞은 것은?",
    "options": [
      "chown -R user2 /home/user1",
      "chown -H user2 /home/user1",
      "chmod -R user2 /home/user1",
      "chmod -H user2 /home/user1"
    ],
    "answer_index": 0,
    "explanation": "/home/user1 디렉터리를 포함하여 그 안의 모든 하위 파일들의 소유자를 user2로 변경하려면 'chown -R user2 /home/user1'을 사용합니다.",
    "original_num": 23,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 111
  },
  {
    "source": "2차 문제집 문24",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 파일이나 디렉터리의 소유그룹 권한을 변경하는 명령어로 알맞은 것은?",
    "options": [
      "chgrp",
      "chmod",
      "groupmod",
      "usermod"
    ],
    "answer_index": 0,
    "explanation": "파일이나 디렉터리의 소유 그룹(Group Ownership)만을 전문적으로 변경할 때 사용하는 명령어는 'chgrp(change group)'입니다.",
    "original_num": 24,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 112
  },
  {
    "source": "2차 문제집 문25",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 chgrp 옵션 중 하위 디렉터리를 포함하여 디렉터리 내부의 모든 파일의 그룹 소유권을 ihd으로 변경할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-h",
      "-f",
      "-R",
      "-v"
    ],
    "answer_index": 2,
    "explanation": "chgrp 명령어에서 하위 디렉터리를 포함한 모든 내부 파일의 그룹 소유권을 재귀적으로 일괄 변경할 때 사용하는 옵션은 대문자 '-R'(--recursive)입니다.",
    "original_num": 25,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 113
  },
  {
    "source": "2차 문제집 문26",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 리눅스 파일에 대한 설명으로 틀린 것은?",
    "options": [
      "디렉토리 파일은 파일 및 디렉토리의 이름뿐 아니라 해 당 파일 및 디렉토리에 대한 포인터가 들어있는 파일이 다.",
      "일반파일은 텍스트, 또는 실행 가능한 바이너리 프로그 램 및 여러 가지 유형의 데이터를 포함 할 수 있다.",
      "파일확장자의 의미가 없으며, 파일 속성을 변경하여 실 행 파일로 사용할 수 있다.",
      "파일명내에 공백이나필드분리자를 포함할수있다."
    ],
    "answer_index": 3,
    "explanation": "리눅스 파일 이름에는 널 문자(NULL, \\0)와 슬래시(/)를 제외한 대부분의 문자를 쓸 수 있으나, 공백이나 필드 분리자(탭, 특수기호)를 파일명에 포함할 경우 쉘 해석기에서 인자 분리 오류가 발생하므로 따옴표로 감싸거나 역슬래시로 이스케이프해야 합니다. '단순 포함할 수 있다'는 일반적인 파일 명명 규칙 관점에서 권장되지 않는 틀린 설명입니다.",
    "original_num": 26,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 114
  },
  {
    "source": "2차 문제집 문27",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 umask 명령어의 옵션 중 현재 설정된 umask 값을 숫자가 아닌 기호 문자(u=rwx,g=rx,o=rx 형태)로 표기하려고 할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-S",
      "-p",
      "-u",
      "-t"
    ],
    "answer_index": 0,
    "explanation": "umask 명령어에 '-S'(--symbolic) 옵션을 사용하면 숫자가 아닌 'u=rwx,g=rx,o=rx'와 같은 기호 문자 형식으로 현재 적용된 마스크 상태를 직관적으로 출력해 줍니다.",
    "original_num": 27,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 115
  },
  {
    "source": "2차 문제집 문28",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? um ask 명령어는 파일이나 디렉터리 생성 시 부여되는 기본 허가권을 지정하는 명령이다. umask 값이 0022일 때 파일 생성 시 기본 권한이(㉠)이고 디렉터리는 기본 권한이 (㉡)로 설정된다",
    "options": [
      "㉠ u=rw,g=r,o=r ㉡ u=rwx,g=rx,o=rx",
      "㉠ u=rw,g=rw,o=r ㉡ u=rwx,g=rwx,o=r",
      "㉠ u=rw,g=rw,o=r ㉡ u=rwx,g=rwx,o=rx",
      "㉠ u=rw,g=rw,o=rw ㉡ u=rw,g=rw,o=rx"
    ],
    "answer_index": 0,
    "explanation": "umask 값이 0022일 때 파일 생성 기본 권한은 666-022=644이므로 'u=rw,g=r,o=r'이고, 디렉터리 생성 기본 권한은 777-022=755이므로 'u=rwx,g=rx,o=rx'가 됩니다.",
    "original_num": 28,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 116
  },
  {
    "source": "2차 문제집 문29",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "umask 설정값과 관련된 설명으로 틀린 것은?",
    "options": [
      "umask 는 파일 및 디렉터리 생성시 기본권한을 설정할 수 있는 명령어이다.",
      "기본적인 umask 값은 8진수로 022 또는 002이다.",
      "umask 값이 8진수로 022일때 파일을 생성하면 권한은 644이다.",
      "umask 값 설정은 root만이 가능하다."
    ],
    "answer_index": 3,
    "explanation": "umask 값은 root 관리자뿐만 아니라 일반 사용자도 터미널이나 쉘 프로파일(~/.bashrc)에서 언제든지 자유롭게 자신의 umask 값을 변경할 수 있으므로 'root만이 가능하다'는 설명은 틀렸습니다.",
    "original_num": 29,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 117
  },
  {
    "source": "2차 문제집 문30",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 보안상 가장 안전한 umask 설정값으로 알맞은 것은?",
    "options": [
      "umask 066",
      "umask 077",
      "umask 022",
      "umask 002"
    ],
    "answer_index": 1,
    "explanation": "umask 숫자가 클수록 생성 시 차단되는 권한이 많아집니다. 'umask 077'을 설정하면 파일은 600(rw-------), 디렉터리는 700(rwx------)으로 생성되어 그룹과 다른 사용자의 모든 접근을 원천 차단하므로 보안상 가장 안전합니다.",
    "original_num": 30,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 118
  },
  {
    "source": "2차 문제집 문31",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? [jparks7@ihd ~]$ umask -S u=rwx,g=rwx,o=rx [jparks7@ihd ~]$ umask () [jparks7@ihd ~]$ mkdir ihd [jparks7@ihd ~]$ touch ihd.txt [jparks7@ihd ~]$ ls -l -rw-r--r-- 1 jparks7 jparks7 0 Jan 31 17:00 ihd.txt drwxr-xr-x 2 jparks7 jparks7 4096 Jan 31 16:57 ihd",
    "options": [
      "033",
      "022",
      "0002",
      "011"
    ],
    "answer_index": 1,
    "explanation": "생성된 파일의 권한이 644(rw-r--r--), 디렉터리가 755(rwxr-xr-x)이므로 적용된 umask 값은 디렉터리 기준 777-755 = '022' (파일 기준 666-644 = 022)입니다.",
    "original_num": 31,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 119
  },
  {
    "source": "2차 문제집 문32",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "Set-UID의 설명으로 틀린 것은?",
    "options": [
      "보통 실행파일에 사용되며 Set-UID가 부여된 파일을 실 행 시, 해당 파일을 실행하는 동안 실행시킨 사용자의 권한이 아닌 해당 파일의 소유자 권한으로 인식한다.",
      "소유자 권한 부분의 x자리에 s로 표기된다.",
      "디렉터리에 설정되는 특수 권한으로 일종의 공유 디렉터 리로 사용된다.",
      "실행 권한이 없는 파일에 부여하면 대문자 S로 나타난 다."
    ],
    "answer_index": 2,
    "explanation": "디렉터리에 설정되어 모든 사용자가 자유롭게 파일을 생성할 수 있으나 삭제는 본인 소유 파일만 가능하게 제한하는 특수 권한은 'Sticky Bit'(스티키 비트, 예: /tmp)입니다. SetUID는 실행 파일에 설정되어 실행 중 소유자 권한을 획득하는 권한이므로 3번은 스티키 비트에 대한 설명으로 틀렸습니다.",
    "original_num": 32,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 120
  },
  {
    "source": "2차 문제집 문33",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 디렉터리에 대한 설명으로 틀린 것은? [root@ihd ~]# ls -ld /tmp drwxrwxrwt. 12 root root 4096 2016-02-02 16:47 /tmp",
    "options": [
      "사용자 소유권과 그룹 소유권 모두 root이다.",
      "Set-UID와 Set-GID가 설정되어 있다.",
      "X 윈도 실행 시에 필요한 소켓 등 시스템에서 필요한 파일들이 임시 저장되는 디렉터리이다.",
      "특정 응용프로그램이 다른 응용 프로그램에서 생성한 파일을 삭제 못한다."
    ],
    "answer_index": 1,
    "explanation": "공용 디렉터리(예: /tmp)에 모든 사용자가 쓰기 작업을 할 수 있으면서도 다른 사용자가 만든 파일은 삭제하거나 이름을 바꿀 수 없도록 보호하는 특수 권한은 'Sticky Bit'(스티키 비트, 1000)입니다.",
    "original_num": 33,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 121
  },
  {
    "source": "2차 문제집 문34",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 조건으로 /project 디렉터리의 권한을 설정하려 할 때 괄호 안에 들어갈 chmod 8진수 값으로 알맞은 것은?\n[조건]\n1. /project 디렉터리는 해당 그룹에 속한 사용자만 접근하고, 파일 생성 시 자동으로 그룹 소유권이 project로 설정되도록 한다.\n2. project 그룹에 속한 사용자들의 파일 생성은 제한 없으나, 파일 삭제 시에는 본인이 생성한 파일만 가능하도록 설정한다.\n# chmod () /project",
    "options": [
      "1770",
      "2770",
      "3770",
      "7770"
    ],
    "answer_index": 2,
    "explanation": "ls -l 출력에서 기타 사용자(others)의 실행 권한 위치에 소문자 't'가 표기된 파일이나 디렉터리는 'Sticky Bit(스티키 비트)'가 설정되어 있음을 의미합니다.",
    "original_num": 34,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 122
  },
  {
    "source": "2차 문제집 문35",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "/project 디렉터리에 Set-GID를 설정하려고 할 때 (괄호) 안에 들어갈 내용으로 알맞은 것은? chmod () /project",
    "options": [
      "a+r",
      "g+t",
      "o+t",
      "g+s"
    ],
    "answer_index": 3,
    "explanation": "SetGID(2000)와 Sticky Bit(1000)를 디렉터리에 동시 적용하고 소유자와 그룹에 rwx(770) 권한을 부여하려면 특수 권한 자리의 값은 2000 + 1000 = 3000이 되므로 전체 8진수 퍼미션 값은 '3770'이 됩니다.",
    "original_num": 35,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 123
  },
  {
    "source": "2차 문제집 문36",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 data 디렉터리를 공유 모드로 설정할 때 명령으 로 알맞은 것은?",
    "options": [
      "chmod o+s data/",
      "chmod u+s data/",
      "chmod o+t data/",
      "chmod g+s data/"
    ],
    "answer_index": 2,
    "explanation": "fdisk는 MBR 파티션 테이블을 생성, 조회, 수정, 삭제하는 대표적인 파티션 관리 대화형 유틸리티입니다.",
    "original_num": 36,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 124
  },
  {
    "source": "2차 문제집 문37",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 설명에 해당하는 특수권한으로 알맞은 것은?",
    "options": [
      "Set-UID",
      "Set-GID",
      "Sticky-Bit",
      "Set-OID 1.4 파일 시스템 관리"
    ],
    "answer_index": 2,
    "explanation": "fdisk 내부 대화형 명령어 중 파티션 타입을 변경할 때 사용하는 명령어는 't'(type)입니다.",
    "original_num": 37,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 125
  },
  {
    "source": "2차 문제집 문38",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? 리눅스 커널 2.4 버전부터는 ()파일 시스템 기능이 있는 ext3를 사용하였고, 시스템에 충돌이 발생하거나 전원 문제가 발생된 경우에 데이터 복구 확률을 높여준다.",
    "options": [
      "저널링(Journaling)",
      "ext4",
      "ext",
      "ext2"
    ],
    "answer_index": 0,
    "explanation": "fdisk에서 리눅스 표준 파일시스템 파티션의 16진수 타입 코드는 '83'(Linux)입니다. (82번은 Linux swap)",
    "original_num": 38,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 126
  },
  {
    "source": "2차 문제집 문39",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? ()파일시스템은 ext2 및 ext3와 호환성이 있는 확장 버전으로 64비트 기억 공간 제한을 없애고, 최대 1Exabyte의 디스크 볼륨과 16Terabyte의 파일을 지원하는 등 대형 파일 시스템과 관련된 기능이 대폭 강화되었다.",
    "options": [
      "ext",
      "minix",
      "ext4",
      "Reiserfs"
    ],
    "answer_index": 2,
    "explanation": "fdisk 내부 명령어 중 새로 변경한 파티션 테이블 정보를 디스크에 실제로 기록(저장)하고 프로그램을 종료하는 명령어는 'w'(write)입니다.",
    "original_num": 39,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 127
  },
  {
    "source": "2차 문제집 문40",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 SGI에서 개발한 저널링 파일 시스템으로 알맞은 것은?",
    "options": [
      "EXT3",
      "XFS",
      "JFS",
      "NTFS"
    ],
    "answer_index": 1,
    "explanation": "fdisk 내부 명령어 중 변경된 내용을 디스크에 저장하지 않고 취소하며 안전하게 빠져나오는 명령어는 'q'(quit)입니다.",
    "original_num": 40,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 128
  },
  {
    "source": "2차 문제집 문41",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음에서 설명하는 파일 시스템의 종류로 알맞은 것은? 256 바이트 길이의 파일 이름, 2GB의 단일 파일, 4TB의 디스크를 사용할 수 있으며, ext3 이전까지 대부분의 리눅스가 채택한 파일 시스템이다.",
    "options": [
      "msdos",
      "ext",
      "ext2",
      "nfs"
    ],
    "answer_index": 2,
    "explanation": "파티션을 분할한 후 데이터를 저장할 수 있도록 ext4, XFS 등의 파일시스템을 생성(포맷)하는 표준 명령어는 'mkfs(make file system)'입니다.",
    "original_num": 41,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 129
  },
  {
    "source": "2차 문제집 문43",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음은 윈도우의 파일 시스템인 FAT-32를 읽기 모드로 /mnt 디렉터리에 마운트 할 때 마운트하는 과정이다. (괄호) 안에 들어갈 내용으로 알맞은 것은? #mount -t (㉠) -o (㉡) /mnt",
    "options": [
      "㉠ vfat ㉡ ro",
      "㉠ vfat ㉡ rw",
      "㉠ msdos ㉡ rw",
      "㉠ msdos ㉡ ro"
    ],
    "answer_index": 0,
    "explanation": "mke2fs에서 파일시스템의 블록 크기(Block Size: 1024, 2048, 4096 바이트 등)를 수동으로 지정할 때 사용하는 옵션은 '-b'입니다.",
    "original_num": 43,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 130
  },
  {
    "source": "2차 문제집 문44",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 명령어의 빈칸에 알맞은 내용으로 순서대로 나열한 것으로 알맞은 것은? (조건 : IDE 방식의 P-ATA에 연결된 2번째 디스크의 첫번째 파티션을 ext4 파일시스템 형식으로 read-only 옵션을 주어 마운트하려고 한다.) # mount -t (ⓐ) -o ro (ⓑ) /read-only",
    "options": [
      "ⓐ ext4 - ⓑ /dev/hda1(a : 1번째 디스크)",
      "ⓐ ext4 - ⓑ /dev/hdb1(b : 2번째 디스크)",
      "ⓐ /dev/hda1 - ⓑ ext4",
      "ⓐ /dev/hdb1 - ⓑ ext4"
    ],
    "answer_index": 1,
    "explanation": "외장 저장 장치나 포맷된 파일시스템을 특정 디렉터리 경로(마운트 포인트)에 연결하여 사용 가능하도록 만드는 명령어는 'mount'입니다.",
    "original_num": 44,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 131
  },
  {
    "source": "2차 문제집 문45",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 mount 명령어의 설명으로 알맞은 것은?",
    "options": [
      "디스크의 파티션을 생성·삭제·확인하는데 사용한다.",
      "파일시스템의 무결성 오류를 수정할 때 사용한다.",
      "파티션의 파일시스템을 생성할 수 있다.",
      "CD-ROM과 같은 광학드라이브를 /mnt 같은 디렉터리에 붙여서 사용할 수 있게 해준다."
    ],
    "answer_index": 3,
    "explanation": "mount 명령어로 읽기 전용(read-only)으로 마운트할 때 사용하는 옵션은 '-o ro'(또는 -r)입니다.",
    "original_num": 45,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 132
  },
  {
    "source": "2차 문제집 문46",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 ISO 이미지 파일을 /mnt 디렉토리에 읽기 전용으로 마운트 하는 명령으로 알맞은 것은?",
    "options": [
      "mount -t iso9660 -o rw,loop /test.iso /mnt",
      "mount -t iso9660 -o rw,acl /test.iso /mnt",
      "mount -t iso9660 -o ro,loop /test.iso /mnt",
      "mount -t sr0 -o ro,loop /test.iso /mnt"
    ],
    "answer_index": 2,
    "explanation": "파일시스템을 특정 디렉터리에 마운트할 때 파일시스템의 종류(ext4, xfs, nfs 등)를 명시적으로 지정하는 옵션은 '-t'(type)입니다.",
    "original_num": 46,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 133
  },
  {
    "source": "2차 문제집 문47",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 umount 명령에서 /etc/mtab에 명시된 파일 시스템 호출할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-h",
      "-t",
      "-o",
      "-a"
    ],
    "answer_index": 3,
    "explanation": "시스템 부팅 시 마운트할 파일시스템의 장치명, 마운트 포인트, 파일시스템 유형, 마운트 옵션, dump 및 fsck 점검 주기가 정의된 핵심 정적 설정 파일은 '/etc/fstab'입니다.",
    "original_num": 47,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 134
  },
  {
    "source": "2차 문제집 문48",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 fdisk 옵션 중 파티션의 크기를 출력하려고 할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-l",
      "-v",
      "-s",
      "-t fdisk 실행 시 주요 명령"
    ],
    "answer_index": 2,
    "explanation": "/etc/fstab 파일의 6번째(마지막) 필드는 시스템 부팅 시 fsck(파일시스템 무결성 점검) 실행 여부 및 순서를 지정합니다. (0: 점검 안함, 1: 루트 파티션 최우선 점검, 2: 기타 일반 파티션 순차 점검)",
    "original_num": 48,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 135
  },
  {
    "source": "2차 문제집 문49",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 fdisk 실행 시 주요 명령에 대한 설명으로 틀린 것은?",
    "options": [
      "p 명령은 현재 디스크의 정보를 출력한다.",
      "d 명령은 파티션을 삭제한다.",
      "n 명령은 파티션을 새롭게 생성(추가)한다.",
      "t 명령은 파티션을 마운트 한다."
    ],
    "answer_index": 3,
    "explanation": "/etc/fstab 파일의 5번째 필드는 dump 명령어에 의한 백업 대상 여부를 지정합니다. (0: 백업 안함, 1: 매일 백업 수행)",
    "original_num": 49,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 136
  },
  {
    "source": "2차 문제집 문50",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "운영 중인 시스템에 새로운 하드디스크를 추가하였다. 다음 중 관련 작업 순서로 알맞은 것은?",
    "options": [
      "mount - fdisk - mkfs",
      "fdisk - mkfs - mount",
      "fdisk - mount - mkfs",
      "mkfs - mount - fdisk"
    ],
    "answer_index": 1,
    "explanation": "마운트되어 있는 파일시스템의 연결을 해제할 때 사용하는 명령어는 'umount'입니다. (unmount가 아니라 'umount' 철자에 주의)",
    "original_num": 50,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 137
  },
  {
    "source": "2차 문제집 문51",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 생성 되는 파일 시스템의 종류가 다른 것은?",
    "options": [
      "mke2fs -j /dev/sdb1",
      "mkfs -t ext3 /dev/sdb1",
      "mkfs /dev/sdb1",
      "mke2fs -t ext3 /dev/sdb1"
    ],
    "answer_index": 2,
    "explanation": "현재 시스템에 마운트되어 있는 모든 파일시스템의 전체 디스크 용량, 사용량, 사용 가능한 남은 공간, 마운트 위치를 확인하는 명령어는 'df(disk free)'입니다.",
    "original_num": 51,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 138
  },
  {
    "source": "2차 문제집 문52",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 /dev/hda2를 ext3 파일 시스템으로 생성하려고 할 때 명령으로 틀린 것은?",
    "options": [
      "mkfs -t ext3 /dev/hda2",
      "mke2fs -t ext3 /dev/hda2",
      "mke2fs -j /dev/hda2",
      "fsck -t ext3 /dev/hda2"
    ],
    "answer_index": 3,
    "explanation": "특정 디렉터리나 파일이 디스크 상에서 실제로 점유하고 있는 용량을 확인할 때 사용하는 명령어는 'du(disk usage)'입니다.",
    "original_num": 52,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 139
  },
  {
    "source": "2차 문제집 문53",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 /lost+found 디렉토리와 가장 관계가 깊은 명령 어로 알맞은 것은?",
    "options": [
      "fdisk",
      "chmod",
      "last",
      "fsck"
    ],
    "answer_index": 3,
    "explanation": "df나 du 명령어에서 사람이 읽기 쉬운 단위(KB, MB, GB, TB)로 용량을 환산하여 출력해 주는 옵션은 '-h'(--human-readable)입니다.",
    "original_num": 53,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 140
  },
  {
    "source": "2차 문제집 문54",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 fsck 명령의 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-A : 어떤 질문도 하지 않고 파일 시스템에서 발견되는 모든 문제를 자동으로 수리",
      "-r : 파일 시스템을 수리하기 전에 확인을 요청",
      "-V : 수행 중인 사항에 대한 추가정보를 인쇄",
      "-s : 파일 시스템을 점검하기 전에 슈퍼블럭을 나열"
    ],
    "answer_index": 0,
    "explanation": "비정상적인 시스템 종료 시 파일시스템의 무결성을 검사하고 손상된 아이노드나 블록 오류를 진단 및 복구하는 명령어는 'fsck(file system consistency check)' 또는 'e2fsck'입니다.",
    "original_num": 54,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 141
  },
  {
    "source": "2차 문제집 문55",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 fsck 명령 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-A 옵션을 사용하면 /etc/fstab의 모든 파일시스템에 대해 기능을 수행한다.",
      "-a 옵션을 사용하면 오류 발견 시 자동으로 복구를 시도한 다.",
      "-s 옵션을 사용하면 파일 시스템 점검 전에 모든 inode를 출력한다.",
      "-r 옵션을 사용하면 복구 시도 전에 확인을 요청한다."
    ],
    "answer_index": 2,
    "explanation": "e2fsck 명령어 실행 시 모든 오류 수정 질문에 자동으로 'yes'로 승인하여 무인 자동 복구를 진행하도록 하는 옵션은 '-y'입니다.",
    "original_num": 55,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 142
  },
  {
    "source": "2차 문제집 문56",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 df 명령을 사용시 파일시스템의 종류를 확인할 때 입력하는 옵션으로 알맞은 것은?",
    "options": [
      "-T",
      "-t",
      "-h",
      "-a #df -hT(용량단위(h),파일시스템(T)을 보여준다) #df -i 마운트된 파일시스템의 아이노드 사용량 관련 정보출력"
    ],
    "answer_index": 0,
    "explanation": "ext2, ext3, ext4 파일시스템의 슈퍼블록 파라미터(마운트 횟수, 예약 블록 비율, 파일시스템 점검 주기 등)를 조회하고 튜닝할 때 사용하는 명령어는 'tune2fs'입니다.",
    "original_num": 56,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 143
  },
  {
    "source": "2차 문제집 문57",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "df -fi",
      "df -h",
      "df -hT",
      "df -fm"
    ],
    "answer_index": 2,
    "explanation": "하드디스크 상의 물리적인 불량 섹터(Bad Sector)를 스캔하여 파일시스템 생성 시 제외할 수 있도록 지원하는 도구는 'badblocks'입니다.",
    "original_num": 57,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 144
  },
  {
    "source": "2차 문제집 문58",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 파일이나 디렉터리의 크기를 확인할 때 사용하 는 명령어는?",
    "options": [
      "du",
      "free",
      "fsck",
      "df"
    ],
    "answer_index": 0,
    "explanation": "LVM(Logical Volume Manager)의 구축 3단계 순서는 물리 볼륨 생성(PV: pvcreate) -> 볼륨 그룹 생성(VG: vgcreate) -> 논리 볼륨 분할(LV: lvcreate) 순서로 진행됩니다.",
    "original_num": 58,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 145
  },
  {
    "source": "2차 문제집 문59",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "/ 이하에 있는 각 디렉터리별로 크기를 합쳐서 사람이 읽기 좋은 단위(KB, MB, GB 등)로 출력하기 위한 명령으로 알맞은 것은?",
    "options": [
      "du -s /*",
      "df -s /*",
      "du -sh /*",
      "df -sh /*"
    ],
    "answer_index": 2,
    "explanation": "일반 물리 디스크 파티션을 LVM에서 사용할 수 있도록 물리 볼륨(PV)으로 초기화하는 명령어는 'pvcreate'입니다.",
    "original_num": 59,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 146
  },
  {
    "source": "2차 문제집 문60",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음중 /etc/fstab의 첫 번째 필드에 설정하는 값으로 틀린 것은?",
    "options": [
      "UUID",
      "마운트 포인트",
      "LABEL",
      "장치파일명"
    ],
    "answer_index": 1,
    "explanation": "생성된 물리 볼륨(PV)들을 하나로 묶어 거대한 스토리지 풀인 볼륨 그룹(VG)으로 생성하는 명령어는 'vgcreate'입니다.",
    "original_num": 60,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 147
  },
  {
    "source": "2차 문제집 문61",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "/etc/fstab 파일 4번째 필드의 주요 옵션 중 로컬(Local) 시스템에서 일반 사용자가 마운트 할 수 있는 권한을 부여 하는 옵션으로 알맞은 것은?",
    "options": [
      "defaults",
      "grpquota",
      "user",
      "usrquota"
    ],
    "answer_index": 2,
    "explanation": "볼륨 그룹(VG)의 여유 공간으로부터 사용자가 실제 마운트하여 사용할 파티션 단위인 논리 볼륨(LV)을 생성하는 명령어는 'lvcreate'입니다.",
    "original_num": 61,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 148
  },
  {
    "source": "2차 문제집 문62",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 사용자 쿼터를 이용하기 위해 etc/fstab에 설정 하는 옵션 값으로 알맞은 것은?",
    "options": [
      "usrquota",
      "userquota",
      "grpquota",
      "groupquota"
    ],
    "answer_index": 0,
    "explanation": "기존에 사용 중인 논리 볼륨(LV)의 용량이 부족할 때 동적으로 파티션 크기를 확장하는 명령어는 'lvextend'입니다. (축소는 lvreduce)",
    "original_num": 62,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 149
  },
  {
    "source": "2차 문제집 문63",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "리눅스 /etc/fstab 파일의 설정 필드 중 부팅 시 파일 시스템 무결성 점검(fsck) 실행 여부 및 순서와 가장 연관이 있는 필드는 몇 번째인가?",
    "options": [
      "3번째",
      "4번째",
      "5번째",
      "6번째"
    ],
    "answer_index": 3,
    "explanation": "RAID-0은 여러 디스크에 데이터를 병렬로 분산 기록하는 스트라이핑(Striping) 방식으로, 입출력 속도는 가장 빠르지만 디스크 1개만 고장 나도 전체 데이터가 유실되는 단점이 있습니다.",
    "original_num": 63,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 150
  },
  {
    "source": "2차 문제집 문64",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "사용자의 쿼터 관련 정보를 기록하는 파일로 알맞은 것 은?",
    "options": [
      "aquota.user",
      "aquota.group",
      "user.aquota",
      "group.aquota"
    ],
    "answer_index": 0,
    "explanation": "RAID-1은 두 개 이상의 디스크에 동일한 데이터를 완전 복제 기록하는 미러링(Mirroring) 방식으로 데이터 안정성이 가장 우수하나 디스크 사용 효율은 50%로 떨어집니다.",
    "original_num": 64,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 151
  },
  {
    "source": "2차 문제집 문65",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "사용자의 쿼터 관련 정보를 기록하는 파일로 틀린것은?",
    "options": [
      "대상은 사용자와 그룹이다.",
      "사용자의 디스크 사용량을 제한할 수 있다.",
      "사용자가 생성할 수 있는 파일 및 디렉터리 수를 제한",
      "그룹의 디스크 쿼터100MB설정 해당그룹 각 사용자당 100MB로 제한"
    ],
    "answer_index": 3,
    "explanation": "RAID-5는 패리티(Parity) 정보를 모든 디스크에 분산 저장하여 최소 3개 이상의 디스크가 필요하며, 1개의 디스크 장애 발생 시에도 무중단 서비스 및 데이터 복구가 가능합니다.",
    "original_num": 65,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 152
  },
  {
    "source": "2차 문제집 문66",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "리눅스 파일 시스템에서 특별한 종류의 디스크 블록으로 파일이름, 소유주, 권한, 시간, 디스크에서의 위치 등에 대한 정보를 담고 있는 것으로 알맞은 것은?",
    "options": [
      "partition table",
      "super block",
      "inode",
      "data block"
    ],
    "answer_index": 2,
    "explanation": "사용자나 그룹 단위의 디스크 쿼터(Quota) 용량 한도를 vi 에디터를 열어 대화형으로 수정하고 설정할 때 사용하는 명령어는 'edquota'입니다.",
    "original_num": 66,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 153
  },
  {
    "source": "2차 문제집 문67",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 edquota 옵션 중 디스크 쿼터의 soft 제한을 초과 했을때의 유예기간을 설정하는 옵션?",
    "options": [
      "-q",
      "-s",
      "-t",
      "-p"
    ],
    "answer_index": 2,
    "explanation": "사용자 단위 디스크 쿼터 사용량 및 한도 정보를 저장하는 바이너리 데이터베이스 파일은 파일시스템 최상위에 생성되는 'aquota.user'입니다. (그룹 단위는 aquota.group)",
    "original_num": 67,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 154
  },
  {
    "source": "2차 문제집 문68",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "파일 시스템 및 권한 관리",
    "question": "다음 중 messi 사용자에 설정된 쿼터를 keroro 사용자에게도 복사하여 동일하게 적용하기 위한 edquota 명령으로 알맞은 것은?",
    "options": [
      "edquota -p messi keroro",
      "edquota -p keroro messi",
      "edquota -c messi keroro",
      "edquota -u messi keroro"
    ],
    "answer_index": 0,
    "explanation": "다른 사용자의 쿼터 설정을 대상 사용자에게 복사(프로토타입 복제)할 때는 'edquota -p 원본사용자 대상사용자' 형식을 사용합니다. 따라서 'edquota -p messi keroro'가 올바른 명령입니다.",
    "original_num": 68,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 GNU Coreutils/FHS 3.0 정밀 검증 완료",
    "id": 155
  },
  {
    "source": "2차 문제집 문69",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 nanuminfo 사용자의 디스크 용량을 soft 10MB, hard 11MB로 설정하기 위한 setquota 명령어로 알맞은 것은?",
    "options": [
      "setquota -u nanuminfo 10M 11M 0 0 /home/nanuminfo",
      "setquota -u nanuminfo 11M 10M 0 0 /home/nanuminfo",
      "setquota -u nanuminfo 10M 11M 0 0 /home",
      "setquota -u nanuminfo 11M 10M 0 0 /home"
    ],
    "answer_index": 2,
    "explanation": "리눅스에서 명령어 해석기이자 대화형 인터페이스인 셸(Shell)은 사용자(User)와 커널(Kernel) 사이에서 사용자가 입력한 명령을 해석하여 커널에 전달하고 실행 결과를 사용자에게 돌려주는 역할을 합니다.",
    "original_num": 69,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 156
  },
  {
    "source": "2차 문제집 문70",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 설명으로 알맞은 것은? 커널과 사용자간의 다리역할을 하는 것으로 사용자로부터 명령을 받아 그것을 해석하고 프로그램을 실행하는 역할을 한다.",
    "options": [
      "메타캐릭터(Metacharacter)",
      "히스토리(History)",
      "셸(Shell)",
      "환경변수(Environment Variable)"
    ],
    "answer_index": 2,
    "explanation": "유닉스 최초의 표준 본 셸(sh)을 기반으로 GNU 프로젝트에서 대화형 편의 기능(히스토리, 명령어 완성 등)을 대폭 확장하여 개발한 리눅스 기본 셸은 'bash(Bourne-Again Shell)'입니다.",
    "original_num": 70,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 157
  },
  {
    "source": "2차 문제집 문71",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? $ () -s /bin/bash Changing shell for ihd. Password: Shell changed. $ grep user01 /etc/passwd ihd:x:500:500::/home/user01:/bin/bash",
    "options": [
      "chsh",
      "usermod",
      "groupmod",
      "shell"
    ],
    "answer_index": 0,
    "explanation": "C 언어와 유사한 문법 구조를 채택하여 버클리 대학의 빌 조이(Bill Joy)가 개발한 셸은 'csh(C Shell)'입니다.",
    "original_num": 71,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 158
  },
  {
    "source": "2차 문제집 문72",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 설명으로 알맞은 것은? - 리눅스의 표준 셸이다. - GNU 프로젝트에 의해 개발되었다.",
    "options": [
      "bash",
      "tcsh",
      "zsh",
      "ksh"
    ],
    "answer_index": 0,
    "explanation": "데이비드 콘(David Korn)이 본 셸의 문법적 호환성을 유지하면서 C 셸의 편리한 기능을 통합하여 개발한 셸은 'ksh(Korn Shell)'입니다.",
    "original_num": 72,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 159
  },
  {
    "source": "2차 문제집 문73",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 (괄호)에 해당하는 결과물로 알맞은 것은?",
    "options": [
      "/bin/bash",
      "/bin/ksh",
      "/bin/sh",
      "SHELL"
    ],
    "answer_index": 0,
    "explanation": "현재 시스템에서 사용 가능한 정식 지원 셸들의 목록은 '/etc/shells' 파일에 등록되어 있습니다.",
    "original_num": 73,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 160
  },
  {
    "source": "2차 문제집 문74",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 변경 가능한 셸의 목록을 확인할 때 사용하는 파일로 알맞은 것은?",
    "options": [
      "/etc/shells",
      "/etc/shell",
      "/etc/bashrc",
      "/etc/profile"
    ],
    "answer_index": 0,
    "explanation": "사용자가 로그인할 때 기본으로 부여되는 로그인 셸 정보는 '/etc/passwd' 파일의 맨 마지막 7번째 필드에 기록되어 있습니다.",
    "original_num": 74,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 161
  },
  {
    "source": "2차 문제집 문75",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 리눅스시스템에 로그인 후 사용 중인 셸을 확인하는 방법으로 알맞은 것은?",
    "options": [
      "명령 프롬프트 상에서 ‘echo $SHELL’ 을 실행하여 확 인한다.",
      "명령 프롬프트 상에서 ‘chsh -l’ 을 실행하여 확인한다.",
      "명령 프롬프트 상에서 ‘cat /etc/shells’ 을 실행하여 확 인한다.",
      "명령 프롬프트 상에서 ‘chsh’ 을 실행하여 확인한다."
    ],
    "answer_index": 0,
    "explanation": "현재 로그인한 사용자의 로그인 셸을 변경할 때 사용하는 전용 명령어는 'chsh(change shell)' 또는 'usermod -s'입니다.",
    "original_num": 75,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 162
  },
  {
    "source": "2차 문제집 문76",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 (괄호) 안에 들어갈 셸프롬프트 형식으로 알맞은 것은? () echo $PS1 [ \\u@ \\h: \\w] \\$ () pwd /etc/sysconfig () hostname testbed () whoami ihd",
    "options": [
      "[testbed@sysconfig:ihd]$",
      "[testbed@/etc/sysconfig:ihd]$",
      "[ihd@testbed:sysconfig]$",
      "[ihd@testbed:/etc/sysconfig]$ 2.2 셸변수와 환경변수"
    ],
    "answer_index": 3,
    "explanation": "현재 터미널 세션에 설정된 모든 환경변수 목록을 조회할 때 사용하는 명령어는 'env' 또는 'printenv'이며, 셸 지역 변수까지 모두 보려면 'set'을 사용합니다.",
    "original_num": 76,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 163
  },
  {
    "source": "2차 문제집 문77",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 조건으로 bash 셸에서 변수를 설정하고 확인하려 할 때 알맞은 것은? ㉠ city 변수값은 seoul로 지정한다. ㉡ echo 명령으로 city 변수값을 출력한다.",
    "options": [
      "㉠ city=seoul ㉡ echo $city",
      "㉠ city=seoul ㉡ echo $CITY",
      "㉠ seoul=city ㉡ echo $CITY",
      "㉠ seoul=city ㉡ echo $city"
    ],
    "answer_index": 0,
    "explanation": "현재 셸에서 선언한 지역 변수를 모든 자식 프로세스에게도 상속되는 '환경변수'로 전역 등록할 때 사용하는 명령어는 'export'입니다.",
    "original_num": 77,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 164
  },
  {
    "source": "2차 문제집 문78",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "현재 설정된 전체 환경변수의 값은 아래와 같다. 다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? [root@ihd]# () | head -7 LANG=en_US.UTF-8 USER=root LOGNAME=root HOME=/root PATH=/usr/lib64/qt-3.3/bin:/usr/local/sbin MAIL=/var/spool/mail/root SHELL=/bin/tcsh",
    "options": [
      "echo",
      "history",
      "env",
      "alias"
    ],
    "answer_index": 2,
    "explanation": "메모리에 등록된 환경변수나 셸 변수를 제거(해제)할 때 사용하는 명령어는 'unset'입니다.",
    "original_num": 78,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 165
  },
  {
    "source": "2차 문제집 문79",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 현재 셸에 선언된 모든 환경 변수를 확인하는 명령어로 알맞은 것은?",
    "options": [
      "test",
      "env",
      "ksh",
      "while"
    ],
    "answer_index": 1,
    "explanation": "시스템의 기본 언어 로케일 환경변수를 확인하거나 변경할 때 사용하는 환경변수는 'LANG'입니다.",
    "original_num": 79,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 166
  },
  {
    "source": "2차 문제집 문81",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 셸 사용 시 기본으로 지원되는 언어를 확인 하려 할 때 알맞은 것은?",
    "options": [
      "echo $PWD",
      "echo $TERM",
      "echo $LANG",
      "echo $USER"
    ],
    "answer_index": 2,
    "explanation": "history 명령어에서 메모리 내에 보관하는 최대 명령어 개수는 'HISTSIZE' 환경변수에 지정되고, 로그아웃 시 디스크 파일(~/.bash_history)에 저장되는 최대 개수는 'HISTFILESIZE'에 지정됩니다.",
    "original_num": 81,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 167
  },
  {
    "source": "2차 문제집 문82",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 마지막에 실행한 명령부터 세어 8번째 전에 사 용했던 명령어를 다시 실행하고자 할 때 사용 할 수 있는 명령 어로 알맞은 것은?",
    "options": [
      "history -8",
      "history 8",
      "!-8",
      "!8"
    ],
    "answer_index": 2,
    "explanation": "자주 사용하는 길고 복잡한 명령어에 간단한 단축 별칭을 지정하여 편리하게 사용할 수 있도록 해주는 셸 내장 명령어는 'alias'이며, 해제는 'unalias'입니다.",
    "original_num": 82,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 168
  },
  {
    "source": "2차 문제집 문83",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 가장 최근에 입력한 마지막 10개의 명령어 목록 을 출력할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "!-10",
      "10!",
      "history 10",
      "!!"
    ],
    "answer_index": 2,
    "explanation": "시스템의 모든 사용자가 로그인할 때 가장 먼저 공통으로 실행되어 시스템 전역 환경변수를 설정하는 전역 설정 파일은 '/etc/profile'입니다.",
    "original_num": 83,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 169
  },
  {
    "source": "2차 문제집 문84",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "history 목록의 번호 중에서 7번에 해당하는 명령을 실행 하기 위한 방법으로 알맞은 것은?",
    "options": [
      "!!",
      "7!",
      "history 7",
      "!7"
    ],
    "answer_index": 3,
    "explanation": "개별 사용자의 홈 디렉터리에 위치하여 사용자가 로그인할 때 1회 실행되어 개인 맞춤형 환경변수(PATH 등)를 설정하는 파일은 '~/.bash_profile'입니다.",
    "original_num": 84,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 170
  },
  {
    "source": "2차 문제집 문85",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 가장 마지막에 실행한 명령을 재실행 하려고 할 때 알맞은 것은?",
    "options": [
      "history",
      "!!",
      "!100",
      "!a"
    ],
    "answer_index": 1,
    "explanation": "새로운 서브쉘이나 비로그인 터미널 창을 열 때마다 매번 자동으로 실행되어 사용자 별칭(alias)이나 함수 설정을 불러오는 개인 설정 파일은 '~/.bashrc'입니다.",
    "original_num": 85,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 171
  },
  {
    "source": "2차 문제집 문87",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 history의 환경변수 중 틀린 것은?",
    "options": [
      "HISTSIZE : 히스토리 스택의 크기가 지정되어 있는 변 수로 단위는 명령의 개수이다.",
      "HISTFILESIZE : 실질적인 히스토리 파일의 크기이다.",
      "HISTFILE : 히스토리 파일의 위치를 보여준다.",
      "HISTSIZEFILE : 이 변수에 지정한 값만큼만 history 명 령 실행 시에 출력된다."
    ],
    "answer_index": 3,
    "explanation": "수정된 환경설정 파일(~/.bashrc 또는 /etc/profile)의 내용을 로그아웃하지 않고 현재 셸 세션에 즉시 반영할 때 사용하는 명령어는 'source 파일명' 또는 '. 파일명'입니다.",
    "original_num": 87,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 172
  },
  {
    "source": "2차 문제집 문88",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 alias에 대한 설명으로 틀린 것은?",
    "options": [
      "존재하지 않는 명령어에 특정 명령을 지정하여 사용할 수 있다.",
      "alias 명령을 실행하면 현재 설정된 alias 목록을 출력한다.",
      "unalias 명령으로 alias된 특정 명령을 해제할 수 있다.",
      "alias 명령은 csh 셸에서만 사용할 수 있다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'alias 명령은 csh 셸에서만 사용할 수 있다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 88,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 173
  },
  {
    "source": "2차 문제집 문89",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 alias로 설정된 _mariadb을 해제하는 명령으로 알맞은 것은?",
    "options": [
      "unalias",
      "unalias _mariadb",
      "_mariadb unalias",
      "_mariadb"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'unalias _mariadb'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 89,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 174
  },
  {
    "source": "2차 문제집 문90",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "alias",
      "unalias",
      "set",
      "unset"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'alias'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 90,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 175
  },
  {
    "source": "2차 문제집 문91",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "alias cp='cp -i' 가 등록되어 있다. 다음 중 alias를 해 제하기 위한 방법으로 가장 알맞은 것은?",
    "options": [
      "alias cp=''",
      "unalias cp",
      "alias cp=‘cp -d'",
      "unalias cp=‘cp - I’"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'unalias cp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 91,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 176
  },
  {
    "source": "2차 문제집 문92",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "리눅스시스템에서 파일을 삭제할 때 실수를 방지하기 위 하여 정말 삭제할 것인지 묻도록 설정하고자 한다. 다음 중 올바른 설정방법으로 알맞은 것은?",
    "options": [
      "alias rm=rm -{i",
      "alias rm='rm -i'",
      "alias rm=(rm -9i)",
      "alias rm=`rm -9i`"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'alias rm='rm -i''입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 92,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 177
  },
  {
    "source": "2차 문제집 문93",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "/etc/profile 파일에 대한 설명으로 가장 알맞은 것은?",
    "options": [
      "시스템 전체(모든 사용자)에 적용되는 환경변수와 시작 관련 프로그램을 설정한다.",
      "시스템 전체(모든 사용자)에 적용되는 alias와 함수를 설정한다.",
      "개인사용자의 환경설정과 시작프로그램 설정과 관련이 있는 파일로 로그인시에 읽어 들인다.",
      "개인 사용자가 정의한 alias와 함수들이 있는 파일이다. alias를 지속적으로 사용하려면 이 파일에 설정한다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '시스템 전체(모든 사용자)에 적용되는 환경변수와 시작 관련 프로그램을 설정한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 93,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 178
  },
  {
    "source": "2차 문제집 문94",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 bash에서 개인 사용자가 로그아웃할 때 수행하 는 설정을 지정하는 파일로 알맞은 것은?",
    "options": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_logout",
      "/etc/shells"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '~/.bash_logout'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 94,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 179
  },
  {
    "source": "2차 문제집 문95",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 일반사용자가 alias와 함수들을 변경하려고 할 때 사용하는 파일로 가장 알맞은 것은?",
    "options": [
      "/etc/profile",
      "~/.bash_profile",
      "~/.bash_history",
      "~/.bashrc"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '~/.bashrc'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 95,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 180
  },
  {
    "source": "2차 문제집 문96",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 PATH 설정 값에 /usr/local/mariadb/bin 경로를 추가하려고 할 때 알맞은 것은?",
    "options": [
      "export PATH=/usr/local/mariadb/bin",
      "export PATH=PATH:/usr/local/mariadb/bin",
      "export PATH=$PATH:/usr/local/mariadb/bin",
      "export $PATH=PATH:/usr/local/mariadb/bin"
    ],
    "answer_index": 2,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'export PATH=$PATH:/usr/local/mariadb/bin'입니다.",
    "original_num": 96,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 181
  },
  {
    "source": "2차 문제집 문97",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 아래 조건을 만족하는 PATH 변수 설정으로 알맞은 것은? - 백업 스크립트(/home/ihd/bin/backup.sh)를 편하게 수행할 수 있도록 PATH 변수에 경로를 추가한다. - PATH 변수는 export 되어야 한다.",
    "options": [
      "export PATH=PATH:/home/ihd/bin/backup.sh",
      "export PATH=$PATH:/home/ihd/bin/backup.sh",
      "export PATH=PATH:/home/ihd/bin",
      "export PATH=$PATH:/home/ihd/bin"
    ],
    "answer_index": 3,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'export PATH=$PATH:/home/ihd/bin'입니다.",
    "original_num": 97,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 182
  },
  {
    "source": "2차 문제집 문98",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 bash shell에서 실행 파일을 찾는 디렉터리 경 로를 나타내는 환경 변수로 알맞은 것은?",
    "options": [
      "HOME",
      "PATH",
      "PWD",
      "TERM 03.프로세스 관리 3.1프로세스의 개요"
    ],
    "answer_index": 1,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'PATH'입니다.",
    "original_num": 98,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 183
  },
  {
    "source": "2차 문제집 문99",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 (괄호) 안에 들어갈 설명으로 알맞은 것은? 하나의 프로세스가 다른 프로세스를 실행하기 위 해 시스템 호출 받는 방법에는 (㉠)와 (㉡)가 있 다. (㉠)는 새로운 프로세스를 위해 메모리를 할 당 받아 복사본 형태의 프로세스를 실행하는 형 태로 기존의 프로세스는 그대로 실행되어 있다. 새롭게 생성된 프로세스는 원래의 프로세스와 똑 같은 코드를 기반으로 실행된다.(㉡)는 원래의 프 로세스를 새로운 프로세스로 대체하는 형태로 호 출한 프로세스의 메모리에 새로운프로세스의 코 드를 덮어씌워 버린다.",
    "options": [
      "㉠ exec ㉡ fork",
      "㉠ fork ㉡ exec",
      "㉠ backgroud ㉡ foreground",
      "㉠ foreground ㉡ background"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ fork ㉡ exec'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 99,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 184
  },
  {
    "source": "2차 문제집 문100",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 (괄호 ）에 알맞은 것은? 리눅스가 부팅을 시작하면 커널은 (）프로세 스라는 최초의 프로세스를 발생시키고, 이 프로세 스는 PID 1번을 할당 받는다.",
    "options": [
      "init",
      "pstree",
      "fork",
      "exec"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'init'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 100,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 185
  },
  {
    "source": "2차 문제집 문101",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 프로세스에 관련된 설명으로 알맞은 것은?",
    "options": [
      "최초의 프로세스인 init은 PID 번호가 1이다.",
      "리눅스 부팅 시에 발생하는 프로세스는 exec 방식이다.",
      "하나의 프로세스가 다른 프로세스를 실행하기 위한 방법에는 inetd와 standalone 방식이 있다.",
      "inted 방식으로 관리되는 서비스들은 항상 메모리에 상주한다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '최초의 프로세스인 init은 PID 번호가 1이다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 101,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 186
  },
  {
    "source": "2차 문제집 문102",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 백그라운드 프로세스와 가장 관련있는 특수 기 호로 알맞은 것은?",
    "options": [
      "?",
      "!",
      "/",
      "&"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '&'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 102,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 187
  },
  {
    "source": "2차 문제집 문103",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 포어그라운드(foreground) 프로세스를 백그라 운드(background) 프로세스로 전환할 때 사용하는 인터럽 트 키 조합으로 알맞은 것은?",
    "options": [
      "[Ctrl]+[\\]",
      "[Ctrl]+[c]",
      "[Ctrl]+[z]",
      "[Ctrl]+[d]"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '[Ctrl]+[z]'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 103,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 188
  },
  {
    "source": "2차 문제집 문104",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "Shell 및 환경설정",
    "question": "다음 중 프로세스에 대한 설명으로 틀린 것은?",
    "options": [
      "init 프로세스의 pid는 1번을 갖는다.",
      "fork는 새로운 프로세스 생성을 위한 시스템 호출 명령이다.",
      "foreground로 실행되는 프로그램은 실행 중에 Ctrl+Z를 누 르면 suspend 상태가 된다.",
      "exec 명령은 프로세스의 강제 종료에 주로 사용된다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'exec 명령은 프로세스의 강제 종료에 주로 사용된다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 104,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 189
  },
  {
    "source": "2차 문제집 문105",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음에서 설명하는 내용으로 알맞은 것은? 원래의 프로세스를 새로운 프로세스로 대체하는 형태로 호출한 프로세스의 메모리에 새로운 프로세스의 코드를 덮어씌워 버린다.",
    "options": [
      "inetd",
      "exec",
      "fork",
      "foreground"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'exec'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 105,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 190
  },
  {
    "source": "2차 문제집 문106",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 그림에 해당하는 내용으로 알맞은 것은? [ihd@www ~]$ find / -name -ype d 2>/dev/null > dir.txt & [1] 6924",
    "options": [
      "foreground process",
      "background process",
      "inetd process",
      "standalone process 3.2시그널과 데몬"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'background process'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 106,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 191
  },
  {
    "source": "2차 문제집 문107",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 [Ctrl]+[￦] 입력 시 전송되는 시그널의 번호 로 알맞은 것은?",
    "options": [
      "1",
      "3",
      "15",
      "9"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '3'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 107,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 192
  },
  {
    "source": "2차 문제집 문108",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 [Ctrl]+[c] 입력 시 전송되는 시그널의 번호로 알맞은 것은?",
    "options": [
      "1",
      "2",
      "15",
      "9"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '2'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 108,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 193
  },
  {
    "source": "2차 문제집 문109",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 CTRL-\\를 입력했을 때 보내어 지는 시그널로 알맞은 것은?",
    "options": [
      "HUP",
      "QUIT",
      "KILL",
      "CONT"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'QUIT'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 109,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 194
  },
  {
    "source": "2차 문제집 문110",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "프로세스에 자주 사용되는 시그널과 그 의미가 잘못 짝 지어진 것은?",
    "options": [
      "SIGHUP : 실행중인 프로그램에 정의되어 있는 정상적 인 방법으로 종료하게 한다.",
      "SIGINT : 현재 작동 중인 프로그램의 동작을 멈출 때 사용한다.",
      "SIGQUIT : 사용자가 터미널에서 종료키(quit)를 누를 때 보내어진다.",
      "SIGKILL : 무조건 실행중인 프로그램을 중지 시킨다."
    ],
    "answer_index": 0,
    "explanation": "리눅스 시그널 체계에서 1번 SIGHUP(Hangup)은 프로세스 재시작 없이 설정 파일을 다시 읽어들여 적용(Reload)할 때 전송합니다. 따라서 정답은 'SIGHUP : 실행중인 프로그램에 정의되어 있는 정상적 인 방법으로 종료하게 한다.'입니다.",
    "original_num": 110,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 195
  },
  {
    "source": "2차 문제집 문111",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음은 프로세스간의 통신을 위한 시그널(signal) 번호 의 연결이 옳지 않은 것은?",
    "options": [
      "SIGHUP - 0",
      "SIGINT - 2",
      "SIGSTOP - 19",
      "SIGKILL - 9"
    ],
    "answer_index": 0,
    "explanation": "리눅스 시그널 체계에서 1번 SIGHUP(Hangup)은 프로세스 재시작 없이 설정 파일을 다시 읽어들여 적용(Reload)할 때 전송합니다. 따라서 정답은 'SIGHUP - 0'입니다.",
    "original_num": 111,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 196
  },
  {
    "source": "2차 문제집 문112",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 kill 명령 사용 시 지정한 시그널이 없을 때 기 본으로 보내지는 시그널로 알맞은 것은?",
    "options": [
      "TERM - 가능한 정상 종료",
      "QUIT - 실행종료",
      "KILL - 무조건 종료",
      "STOP - 무조건적으로 그리고 즉각적으로 정지"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'TERM - 가능한 정상 종료'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 112,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 197
  },
  {
    "source": "2차 문제집 문113",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 [Ctrl]+[z]를 입력했을 때 보내지는 시그널 번호로 알맞은 것은?",
    "options": [
      "2",
      "3",
      "19",
      "20"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '20'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 113,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 198
  },
  {
    "source": "2차 문제집 문114",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 데몬에 대한 설명으로 틀린 것은?",
    "options": [
      "주기적이고 지속적인 서비스 요청을 처리하기 위해 계 속 실행되는 프로세스이다.",
      "데몬 프로세스를 실행하는 방법에는 standalone 방식과 inet 방식이 있다.",
      "standalone 방식과 inet 방식은 관련된 모든 프로세스 가 메모리에 상주하여 클라이언트 서비스 요청을 처리 하는 방식이다.",
      "리눅스에서는 서버 역할을 하는 프로그램들이 이에 해 당하고 보통 이름 뒤에 데몬을 뜻하는 d를 붙인다."
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'standalone 방식과 inet 방식은 관련된 모든 프로세스 가 메모리에 상주하여 클라이언트 서비스 요청을 처리 하는 방식이다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 114,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 199
  },
  {
    "source": "2차 문제집 문115",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 내용은 무엇에 대한 설명인가? - 특정 서비스를 위한 백그라운드 상태에서 계속 실행되는 서버 프로세스이다. - 보통 리눅스 시스템 부팅 시 자동으로 실행이 된다. - service 명령어로 실행, 중지, 재시작 등을 할 수 있다.",
    "options": [
      "데몬 (Daemon)",
      "프로세스 (Process)",
      "스레드 (Thread)",
      "호출 (Call) 3.3프로세스의 명령어 및 유틸리티"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '데몬 (Daemon)'입니다.",
    "original_num": 115,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 200
  },
  {
    "source": "2차 문제집 문116",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 현재 작업 중인 셸을 확인 할 때 사용하는 명령어로 알맞은 것은?",
    "options": [
      "useradd",
      "ps",
      "groupadd",
      "chkconfig"
    ],
    "answer_index": 1,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'ps'입니다.",
    "original_num": 116,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 201
  },
  {
    "source": "2차 문제집 문117",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "ps 명령 수행 시 나타나는 정보에 대한 설명중 틀린 것은?",
    "options": [
      "USER : BSD 계열에서 나타나는 항목으로 프로세스 사용자의 이름",
      "PID : 프로세스를 식별할 수 있는 번호가 출력이 된다.",
      "RSS : 실제 사용하는 CPU의 사용량을 나타낸다.",
      "PPID : 부모 프로세스에 대한 PID를 나타낸다."
    ],
    "answer_index": 2,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'RSS : 실제 사용하는 CPU의 사용량을 나타낸다.'입니다.",
    "original_num": 117,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 202
  },
  {
    "source": "2차 문제집 문118",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "프로세스 상태코드의 STAT 값 중 “Z”가 의미하는 것으로 알맞은 것은?",
    "options": [
      "죽어있는 상태를 뜻하며, 상태값으로 볼 수 없다.",
      "메모리 안에서 페이지가 잠금된 상태",
      "작업이 종료되었으나 부모 프로세스로부터 회수되지 않 아 메모리를 차지하고 있는 상태",
      "디스크 I/O에 의해 대기하고 있는 상태"
    ],
    "answer_index": 2,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '작업이 종료되었으나 부모 프로세스로부터 회수되지 않 아 메모리를 차지하고 있는 상태'입니다.",
    "original_num": 118,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 203
  },
  {
    "source": "2차 문제집 문119",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 명령어에 대한 설명으로 알맞은 것은?",
    "options": [
      "시스템에 실행 중인 모든 프로세스 중 좀비(Zombie) 프 로세스를 검색한다.",
      "시스템에 실행 중인 모든 프로세스 중 sleep 상태인 프 로세스를 검색한다.",
      "시스템에 실행 중인 모든 프로세스 중 포그라운드 프로 세스를 검색한다.",
      "시스템에 실행 중인 모든 프로세스 중 백그라운드 프로 세스를 검색한다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '시스템에 실행 중인 모든 프로세스 중 좀비(Zombie) 프 로세스를 검색한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 119,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 204
  },
  {
    "source": "2차 문제집 문120",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 결과와 관련 있는 ps 옵션으로 알맞은 것은?",
    "options": [
      "ef",
      "-a",
      "aux",
      "-f *ps만 입력할 경우 유저도 나타나지 않고 PID,TTY,TIME,CMD 만 표시 됩니다."
    ],
    "answer_index": 2,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'aux'입니다.",
    "original_num": 120,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 205
  },
  {
    "source": "2차 문제집 문121",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 pstree 명령어를 사용하여 실행한 명령 부분을 진하게 강조해서 출력할 때 사용하는 옵션으로 알맞은 것 은?",
    "options": [
      "-a",
      "-h",
      "-n",
      "-p"
    ],
    "answer_index": 1,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-h'입니다.",
    "original_num": 121,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 206
  },
  {
    "source": "2차 문제집 문122",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 프로세스의 상태를 트리(tree) 구조로 출력 해 주고, 각 프로세스의 명령행 인자까지 보여주는 명령으로 알맞은 것은?",
    "options": [
      "tree -a",
      "tree -h",
      "pstree -a",
      "pstree -h"
    ],
    "answer_index": 2,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'pstree -a'입니다.",
    "original_num": 122,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 207
  },
  {
    "source": "2차 문제집 문123",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 프로세스 관련 명령어에 대한 설명으로 틀린 것 은?",
    "options": [
      "lsof 명령어는 프로세스의 메모리 맵(Memory Map) 정 보를 확인할 때 사용한다.",
      "jobs 명령어는 백그라운드로 실행 중인 프로세스나 현 재 중지된 프로세스의 목록을 출력해 준다.",
      "top 명령어는 프로세스의 상태를 실시간으로 모니터링 할 때 사용한다.",
      "pstree 명령어는 프로세스의 상태를 트리(Tree) 구조로 출력해 준다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lsof 명령어는 프로세스의 메모리 맵(Memory Map) 정 보를 확인할 때 사용한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 123,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 208
  },
  {
    "source": "2차 문제집 문124",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 kill 명령어의 설명 중 (괄호)에 들어갈 단어로 알맞은 것은?",
    "options": [
      "프로세스 이름",
      "PID",
      "USER",
      "UID"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'PID'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 124,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 209
  },
  {
    "source": "2차 문제집 문125",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 리눅스에서 프로세스에 시그널을 전달하여 종 료시킬 때 사용되는 명령으로 알맞은 것은?",
    "options": [
      "rm",
      "finish",
      "kill",
      "sigsend"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'kill'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 125,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 210
  },
  {
    "source": "2차 문제집 문126",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 kill 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "kill 명령은 PID를 사용한다",
      "여러개의 프로세스에 시그널을 보낼 수 있다.",
      "kill 명령은 작업번호를 사용해서 프로세스를 종료한다.",
      "kill 명령 사용시 시그널을 지정하지 않으면 SIGKILL 시그널이 전송된다."
    ],
    "answer_index": 3,
    "explanation": "리눅스 시그널 체계에서 9번 SIGKILL은 프로세스를 강제 종료시키는 가장 강력한 시그널로, 프로세스 내부에서 무시하거나 잡아서 가로챌 수 없습니다. 따라서 정답은 'kill 명령 사용시 시그널을 지정하지 않으면 SIGKILL 시그널이 전송된다.'입니다.",
    "original_num": 126,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 211
  },
  {
    "source": "2차 문제집 문127",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "ps 명령어를 실행 후 다음과 같은 결과를 보고 ksh 프 로세스를 중지하기 위한 명령으로 올바른 것은?",
    "options": [
      "killall -9 23279",
      "kill -19 ksh",
      "kill -9 23961",
      "killall -9 23961"
    ],
    "answer_index": 2,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'kill -9 23961'입니다.",
    "original_num": 127,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 212
  },
  {
    "source": "2차 문제집 문128",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "ps 명령으로 서버를 점검하는 중에 현재 사용하지 않는 posein이라는 계정이 로그인 되어 있을 것을 발견하였다. 다음 중 계정을 삭제하기 위한 로그아웃 절차로 올바른 것 은?",
    "options": [
      "kill -9 posein",
      "kill -9 28052",
      "kill -15 posein",
      "kill -15 28052"
    ],
    "answer_index": 1,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'kill -9 28052'입니다.",
    "original_num": 128,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 213
  },
  {
    "source": "2차 문제집 문129",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 그림에 해당하는 명령으로 알맞은 것은?",
    "options": [
      "kill -s",
      "kill -l",
      "killall -s",
      "killall -l"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'kill -l'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 129,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 214
  },
  {
    "source": "2차 문제집 문130",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 killall 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "같은 데몬의 여러 프로세스 한번에 종료",
      "시그널 지정하지 않으면 TERM시그널로 보내진다.",
      "프로세스명을 사용한다",
      "PID를 사용한다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'PID를 사용한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 130,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 215
  },
  {
    "source": "2차 문제집 문131",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 httpd 이름으로 실행중인 프로세스들을 종료시 키고자 할 경우 (괄호)안에 들어갈 내용 으로 알맞은 것 은?",
    "options": [
      "kill -1",
      "kill -9",
      "kill -B15",
      "killall"
    ],
    "answer_index": 3,
    "explanation": "프로세스 이름(예: httpd)을 직접 지정하여 해당 이름으로 동작 중인 모든 인스턴스를 한 번에 종료시키는 명령어는 'killall'입니다. (kill 명령어는 PID 번호를 지정해야 합니다.)",
    "original_num": 131,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 216
  },
  {
    "source": "2차 문제집 문132",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 nice 명령어에 대한 설명으로 틀린 것은?",
    "options": [
      "프로세스의 우선순위를 변경하는 명령으로 NI 값을 설정할 때 사용한다.",
      "일반 사용자만이 NI값을 감소시켜 우선순위를 높일 수 있다.",
      "NI 값이 작을수록 우선순위가 높다.",
      "NI의 기본값은 0이고, 지정 가능한 값의 범위는 -20 ~ 19까지이다."
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '일반 사용자만이 NI값을 감소시켜 우선순위를 높일 수 있다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 132,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 217
  },
  {
    "source": "2차 문제집 문133",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 실행 중인 프로세스들의 우선순위를 변경하는 명령어는?",
    "options": [
      "nice",
      "kill",
      "ps",
      "signal"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'nice'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 133,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 218
  },
  {
    "source": "2차 문제집 문134",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 프로세스 우선순위 변경에 사용되는 NI값의 범위로 알맞은 것은",
    "options": [
      "-20 ∼ 19",
      "-20 ∼ 20",
      "-19 ∼ 19",
      "-19 ∼ 20"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-20 ∼ 19'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 134,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 219
  },
  {
    "source": "2차 문제집 문135",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 명령의 결과에 대한 설명으로 알맞은 것은?",
    "options": [
      "우선순위를 낮춘 것이다.",
      "우선순위를 높인 것이다.",
      "위의 명령은 일반사용자는 실행할 수 없다.",
      "사용법 오류로 인해 실행되지 않는다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '우선순위를 낮춘 것이다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 135,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 220
  },
  {
    "source": "2차 문제집 문136",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 renice 명령에 대한 설명으로 틀린 것은?",
    "options": [
      "프로세스명을 사용한다.",
      "실행중인 프로세스 우선순위를 변경",
      "PID 이외의 사영자명, 그룹ID로 사용가능",
      "실행중인 프로세스에 NI값 즉시 부여된다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '프로세스명을 사용한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 136,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 221
  },
  {
    "source": "2차 문제집 문137",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음은 명령의 결과에 대한 설명으로 틀린 것은? # renice -10 1222",
    "options": [
      "위의 명령은 일반 사용자는 실행 할수 없다",
      "기존의 값에서 -10이 된 NI값으로 설정 된다.",
      "우선순위를 높인 것이다.",
      "1222는 PID를 나타낸다."
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '기존의 값에서 -10이 된 NI값으로 설정 된다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 137,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 222
  },
  {
    "source": "2차 문제집 문138",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 그림과 같은 상황에서 renice 명령을 실행 시에 적용되는 bash 셸의 NI값으로 알맞은 것은? # renice -10 7847",
    "options": [
      "-15",
      "-10",
      "5",
      "10"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-10'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 138,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 223
  },
  {
    "source": "2차 문제집 문139",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 사용자가 로그아웃하거나 작업 중인 터미널이 종료되어도 실행 중인 프로세스를 백그라운드로 계속 동작하도록 유지시켜 주는 명령어로 알맞은 것은?",
    "options": [
      "bg",
      "fg",
      "nohup",
      "&"
    ],
    "answer_index": 2,
    "explanation": "nohup(no hangup) 명령어는 터미널 연결이 끊어지거나 사용자가 로그아웃할 때 발생하는 SIGHUP(Hangup) 시그널을 프로세스가 무시하도록 하여 백그라운드 작업을 중단 없이 계속 실행하도록 보장합니다.",
    "original_num": 139,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 GNU Coreutils/FHS 3.0 정밀 검증 완료",
    "id": 224
  },
  {
    "source": "2차 문제집 문139",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 root 사용자가 ihd 사용자의 cron 작업을 변경하려고 할 때 명령으로 알맞은 것은?",
    "options": [
      "crontab -e ihd",
      "crontab -u ihd",
      "crontab -e -u ihd",
      "crontab -u -e ihd"
    ],
    "answer_index": 2,
    "explanation": "사용자가 터미널을 닫거나 로그아웃하여 HUP(Hangup) 시그널이 전달되더라도 실행 중인 백그라운드 프로세스가 중단되지 않고 작업을 계속 이어가도록 하는 명령어는 'nohup'입니다. 기본적으로 출력은 nohup.out 파일에 기록됩니다.",
    "original_num": 139,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 225
  },
  {
    "source": "2차 문제집 문140",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 crontab 명령어를 사용하여 등록된 스케줄링 작업을 확인할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-e",
      "-l",
      "-t",
      "-r"
    ],
    "answer_index": 1,
    "explanation": "사용자가 터미널을 닫거나 로그아웃하여 HUP(Hangup) 시그널이 전달되더라도 실행 중인 백그라운드 프로세스가 중단되지 않고 작업을 계속 이어가도록 하는 명령어는 'nohup'입니다. 기본적으로 출력은 nohup.out 파일에 기록됩니다.",
    "original_num": 140,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 226
  },
  {
    "source": "2차 문제집 문141",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 중 crontab에 설정된 내용을 삭제하는 옵션으로 알맞은 것은?",
    "options": [
      "crontab -d",
      "crontab -r",
      "crontab -l",
      "crontab -D"
    ],
    "answer_index": 1,
    "explanation": "crontab은 주기적인 예약 작업을 [분 시 일 월 요일 명령] 규격으로 스케줄링합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'crontab -r'입니다.",
    "original_num": 141,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 227
  },
  {
    "source": "2차 문제집 문142",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음의 조건으로 crontab에 등록할 때 알맞은 것은? -1월부터 12월까지 2개월마다 1일날 오전 1시 10분에 실행 되도록 한다. -실행 파일의 경로(/home/messi/jalin.sh",
    "options": [
      "10 1 1-12/2 1 * /home/messi/jalin.sh",
      "1 10 1-12/2 1 * /home/messi/jalin.sh",
      "1 10 1-12/2 1 * /home/messi/jalin.sh",
      "10 1 1 1-12/2 * /home/messi/jalin.sh"
    ],
    "answer_index": 3,
    "explanation": "crontab 시간 필드는 [분 시 일 월 요일] 순서입니다. '1월부터 12월까지 2개월마다(1-12/2) 1일날 오전 1시 10분'에 실행되도록 하려면 '10 1 1 1-12/2 * 실행경로'가 올바른 설정입니다.",
    "original_num": 142,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 228
  },
  {
    "source": "2차 문제집 문143",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음 조건으로 crontab에 등록할 때 알맞은 것은?",
    "options": [
      "12 13 * * 1-5 /etc/joon.sh",
      "13 12 * * 1-5 /etc/joon.sh",
      "12 13 1-5 * * /etc/joon.sh",
      "13 12 1-5 * * /etc/joon.sh"
    ],
    "answer_index": 1,
    "explanation": "crontab은 주기적인 예약 작업을 [분 시 일 월 요일 명령] 규격으로 스케줄링합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '13 12 * * 1-5 /etc/joon.sh'입니다.",
    "original_num": 143,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 229
  },
  {
    "source": "2차 문제집 문144",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "프로세스 관리 및 스케줄링",
    "question": "다음의 조건으로 crontab 등록할 때 알맞은 것은?",
    "options": [
      "0 4 1,3,5 * * /home/ihd/backup.sh",
      "4 0 * * 1,3,5 /home/ihd/backup.sh",
      "0 4 * * 1,3,5 /home/ihd/backup.sh",
      "0 4 1,3,5 * * /home/ihd/backup.sh"
    ],
    "answer_index": 2,
    "explanation": "crontab 시간 필드는 [분 시 일 월 요일] 순서입니다. '새벽 4시 정각에 매주 월, 수, 금요일마다' 실행되도록 지정하려면 '0 4 * * 1,3,5 실행경로'가 올바른 설정입니다.",
    "original_num": 144,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 230
  },
  {
    "source": "2차 문제집 문145",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음에서 설명하는 내용으로 알맞은 것은?",
    "options": [
      "gedit",
      "pico",
      "emacs",
      "nano"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'emacs'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 145,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 231
  },
  {
    "source": "2차 문제집 문146",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 리눅스에서 사용되는 에디터로 틀린 것은?",
    "options": [
      "vi",
      "emacs",
      "pico",
      "notepad"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'notepad'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 146,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 232
  },
  {
    "source": "2차 문제집 문147",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? pico는 자유 소프트웨어의 라이선스가 아니었기 때문에 소스의 수정이 불가능하였다. GNU프로젝 트에서는 pico의 복제버전(clone)인 () 프로 그램을 개발하였다.",
    "options": [
      "emacs",
      "vi",
      "nano",
      "mini"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'nano'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 147,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 233
  },
  {
    "source": "2차 문제집 문148",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 편집기와 호환되면서 독자적으로 다양한 기 능을 추가하여 만든 편집기로 알맞은 것은?",
    "options": [
      "vin",
      "emacs",
      "picon",
      "vim"
    ],
    "answer_index": 3,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'vim'입니다.",
    "original_num": 148,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 234
  },
  {
    "source": "2차 문제집 문149",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 emacs 최초 개발자로 알맞은 것은?",
    "options": [
      "리누스 토발즈",
      "리처드 스톨만",
      "제임스 고블링",
      "브람 무레나르"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '리처드 스톨만'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 149,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 235
  },
  {
    "source": "2차 문제집 문150",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 같은 특성을 갖는 편집기로 알맞은 것은? - 브람 무레나르(Bram Moolenaar)가 만든 편집기. - 편집시 다양한 색상을 이용하여 가시성을 높임. - ex 모드에서 히스토리 기능 제공. - 확장된 정규 표현식 문법, 강력한 문법 강조 기능. - 다중 되돌리기 기능 및 유니코드를 비롯한 다국어 지원, 문법 검사 등의 기능도 지원",
    "options": [
      "emacs",
      "vi",
      "gedit",
      "vim"
    ],
    "answer_index": 3,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'vim'입니다.",
    "original_num": 150,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 236
  },
  {
    "source": "2차 문제집 문151",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 설명에 해당하는 편집기로 알맞은 것은? 그놈 데스크톱 환경용으로 개발된 자유 소프트웨어인 텍스트 편집기이다. 마이크로소프트, 윈도, 맥 OS X에서도 사용 할 수 있다. UTF-8과 호환하며, 프로그램 코드, 마크업 언어와 같은 구조화된 텍스트 문서를 편집하는 용도에 중점을 두었다. X 윈도 시스템에 맞춰 개발했으며, GTK+와 그놈 라이브러리를 이용하여 개발되었고, 그놈 파일 관리자인 노틸러스와의 사이에서 드래그 앤 드롭이 가능하다.",
    "options": [
      "vi",
      "gedit",
      "vim",
      "pico"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'gedit'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 151,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 237
  },
  {
    "source": "2차 문제집 문152",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음에서 설명하는 편집기로 알맞은 것은?",
    "options": [
      "vim",
      "emacs",
      "gvim",
      "pico"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'pico'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 152,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 238
  },
  {
    "source": "2차 문제집 문153",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 리눅스 에디터의 종류와 설명으로 틀린 것은?",
    "options": [
      "vi는 유닉스 계열 시스템에서 가장 많이 쓰이는 편집기 로 빌 조이가 개발하였다.",
      "emacs는 리처드 스톨만이 매크로기능이 있는 텍스트 교정 및 편집기로 개발하였다.",
      "pico는 워싱턴대학에서 만든 유닉스용 편집기로 윈도우 의 메모장처럼 사용이 간편하다.",
      "nano는 자유 소프트웨어의 라이선스가 아니므로 소스 의 수정이 불가능하다. 4.1 에디터 활용"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'nano는 자유 소프트웨어의 라이선스가 아니므로 소스 의 수정이 불가능하다. 4.1 에디터 활용'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 153,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 239
  },
  {
    "source": "2차 문제집 문154",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 pico 편집기에서 커서의 위치를 해당 줄의 끝 으로 이동하는 조합으로 알맞은 것은?",
    "options": [
      "[Ctrl]+[x]",
      "[Ctrl]+[e]",
      "[Ctrl]+[p]",
      "[Ctrl]+[f]"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '[Ctrl]+[e]'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 154,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 240
  },
  {
    "source": "2차 문제집 문155",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 emacs에 대한 설명 중 틀린 것은?",
    "options": [
      "방향키, PageUp/PageDown키도 사용 가능하다.",
      "vi와 달리 입력모드와 명령모드가 없다.",
      "종료하려면 [Ctrl]+[x]후에 [Ctrl]+[c]를 누른다.",
      "시스템과의 호환성은 우수하지 않다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '시스템과의 호환성은 우수하지 않다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 155,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 241
  },
  {
    "source": "2차 문제집 문156",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 편집기 실행 시 명령 모드에서 입력 모드로 전환할 때 사용하는 키(key)로 틀린 것은?",
    "options": [
      "w",
      "i",
      "a",
      "o"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'w'입니다.",
    "original_num": 156,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 242
  },
  {
    "source": "2차 문제집 문157",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 편집기에서 나머지 셋과 성격이 틀린명령은?",
    "options": [
      "i",
      "a",
      "o",
      "j"
    ],
    "answer_index": 3,
    "explanation": "vi 편집기에서 'i', 'a', 'o'는 텍스트 입력을 위한 입력 모드 전환 키이며, 'j'는 명령 모드에서 커서를 한 줄 아래로 이동시키는 방향 이동 키입니다.",
    "original_num": 157,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 243
  },
  {
    "source": "2차 문제집 문158",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi로 messi.txt라는 파일을 편집하는 중에 비정상 적으 로 종료가 되었다. 다음 중 작업 중이던 파일을 불러오 는 방법은?",
    "options": [
      "vi -c messi.txt",
      "vi -r messi.txt",
      "vi -C posin.txt",
      "vi -R messi.txt"
    ],
    "answer_index": 1,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'vi -r messi.txt'입니다.",
    "original_num": 158,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 244
  },
  {
    "source": "2차 문제집 문159",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 편집기에서 file.txt 파일을 편집 중 정전이나 비정상 종료가 되었을 때 생성되는 스왑(복구) 파일명으로 알맞은 것은?",
    "options": [
      "file.txt.swap",
      "file.txt.swp",
      ".file.txt.swap",
      ".file.txt.swp"
    ],
    "answer_index": 3,
    "explanation": "vi(vim) 편집기는 편집 중인 문서의 비정상 종료에 대비하여 동일한 디렉터리에 파일명 앞에 마침표(.)가 붙어 숨김 속성을 가지며 뒤에 '.swp' 확장자가 붙는 임시 스왑 파일(예: .file.txt.swp)을 생성하여 보관합니다.",
    "original_num": 159,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 GNU Coreutils/FHS 3.0 정밀 검증 완료",
    "id": 245
  },
  {
    "source": "2차 문제집 문160",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 “vi +15 index.html”과 동일한 명령으로 알맞 은 것은?",
    "options": [
      "vi -c 15 index.html",
      "vi -ir 15 index.html",
      "vi -iR 15 index.html",
      "vi -il 15 index.html"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'vi -c 15 index.html'입니다.",
    "original_num": 160,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 246
  },
  {
    "source": "2차 문제집 문161",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi로 ihd.txt라는 파일을 열면서 커서의 위치를 20번째 줄로 위치시키려고 할 때 알맞은 것은?",
    "options": [
      "vi +20 ihd.txt",
      "vi-20 ihd.txt",
      "vi + ihd.txt",
      "vi -r ihd.txt"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'vi +20 ihd.txt'입니다.",
    "original_num": 161,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 247
  },
  {
    "source": "2차 문제집 문162",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음은 $HOME/.vimrc 파일의 설정 내용이다. 다음 중 설정에 대한 설명으로 틀린 것은? set nu set noai set ts=4 map q :wq!",
    "options": [
      "행의 앞에 행번호를 표시 기능이 켜져 있다.",
      "탭의 크기를 4로 설정한다.",
      "자동들여쓰기 기능이 켜져 있다.",
      "매크로가 선언되어 있고 기능이 켜져 있다."
    ],
    "answer_index": 2,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '자동들여쓰기 기능이 켜져 있다.'입니다.",
    "original_num": 162,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 248
  },
  {
    "source": "2차 문제집 문163",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 편집기에서 문서의 각 라인 번호를 표시해 주는 명령으로 알맞은 것은?",
    "options": [
      ":set nu",
      ":set nonu",
      ":set ai",
      ":set noai"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':set nu'입니다.",
    "original_num": 163,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 249
  },
  {
    "source": "2차 문제집 문164",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 편집기의 환경 설정을 등록하여 실행시에 계속적으로 지정한 설정이 사용가능하게 해주는 파일로 알맞은 것은?",
    "options": [
      "exrc",
      "bash_history",
      "swap",
      "rhosts"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'exrc'입니다.",
    "original_num": 164,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 250
  },
  {
    "source": "2차 문제집 문165",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi 명령어 중 편집 중인 파일을 저장만 수행하는 명령 으로 알맞은 것은?",
    "options": [
      ":w",
      ":wq",
      ":wq!",
      ":q!"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':w'입니다.",
    "original_num": 165,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 251
  },
  {
    "source": "2차 문제집 문166",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 vi 명령모드에서 현재 행 위치 부터 3행을 복사하 는 명령어로 알맞은 것은?",
    "options": [
      "3p",
      "pp3",
      "y3",
      "3yy"
    ],
    "answer_index": 3,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '3yy'입니다.",
    "original_num": 166,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 252
  },
  {
    "source": "2차 문제집 문167",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi 에디터 set 명령의 설명으로 틀린 것은?",
    "options": [
      ":set nu - 행 번호 보이기",
      ":set ts=4 - [tab] 키를 입력 하였을 때 이동하는 크기 조정",
      ":set notnu - 행 번호 보이지 않기",
      ":set all - 전체 환경설정 확인"
    ],
    "answer_index": 2,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':set notnu - 행 번호 보이지 않기'입니다.",
    "original_num": 167,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 253
  },
  {
    "source": "2차 문제집 문168",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi 에디터에서 편집 중인 문서의 줄 번호를 보여 주지 않게 하는 명령어로 알맞은 것은?",
    "options": [
      ":set nonu",
      ":!set nu",
      ":set notnu",
      ":set nu"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':set nonu'입니다.",
    "original_num": 168,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 254
  },
  {
    "source": "2차 문제집 문169",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi 편집기에서 각 라인별로 번호를 붙여 주는 명령으로 알맞은 것은?",
    "options": [
      ":set number",
      ":set list",
      ":set atoindent",
      ":set nolist"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':set number'입니다.",
    "original_num": 169,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 255
  },
  {
    "source": "2차 문제집 문170",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi 편집기 실행할 때 줄 번호를 나타나도록 설정하는 과정의 일부이다. 다음 (괄호) 안에 들어갈 내용으로 알 맞은 것은?",
    "options": [
      "ㄱ) exrc (ㄴ) set nu",
      "ㄱ).exrc (ㄴ) set nu",
      "ㄱ) exrc (ㄴ) :set nu",
      "ㄱ).exrc (ㄴ) :set nu"
    ],
    "answer_index": 1,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'ㄱ).exrc (ㄴ) set nu'입니다.",
    "original_num": 170,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 256
  },
  {
    "source": "2차 문제집 문172",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "vi 편집모드에서 [Enter]키를 입력하여 다음 행으로 이 동했을 때 위 줄과 같은 열에 커서를 위치 시키려고 한다. 다음 중 vi 편집기에서 지정하는 환경 설정으로 알맞은 것 은?",
    "options": [
      ":set all",
      ":set ai",
      ":set sm",
      ":set ic"
    ],
    "answer_index": 1,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':set ai'입니다.",
    "original_num": 172,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 257
  },
  {
    "source": "2차 문제집 문173",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "에디터 (vi/vim)",
    "question": "다음 중 vi로 편집중인 file.txt 파일을 강제적으로 저장 하고 빠져 나올 때 사용하는 ex 모드 명령으로 알맞은 것은?",
    "options": [
      ":w!",
      ":wq!",
      ":wq",
      ":q!"
    ],
    "answer_index": 1,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 ':wq!'입니다.",
    "original_num": 173,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 258
  },
  {
    "source": "2차 문제집 문174",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "make install",
      "gcc",
      "make",
      "configure"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'configure'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 174,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 259
  },
  {
    "source": "2차 문제집 문175",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 소스 파일로 프로그램을 설치하는 단계로 알맞 은 것은?",
    "options": [
      "configure-> make-> make install",
      "configure-> make install-> make",
      "make -> configure ->make install",
      "make-> make install-> configure"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'configure-> make-> make install'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 175,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 260
  },
  {
    "source": "2차 문제집 문176",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 cmake에 대한 설명으로 틀린 것은?",
    "options": [
      "소프트웨어 빌드에 특화된 언어로 독자적인 설정 스크 립트를 이용한다.",
      "크로스 컴파일을 할 수 없다.",
      "SWIG, Qt, FLTK 등을 지원한다.",
      "평행 빌드(Parallel builds)를 지원한다. 05-1 패키지 설치법"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '크로스 컴파일을 할 수 없다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 176,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 261
  },
  {
    "source": "2차 문제집 문177",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "sendmail-8.12.8-6.i386.rpm 다음 중 RPM 패키지의 이름 형식에 대한 설명으로 알맞는 것은?",
    "options": [
      "sendmail : 패키지 버전",
      "8.12.8 : 패키지 릴리즈",
      "6 : 패키지 이름",
      "i386 : 패키지 아키텍처"
    ],
    "answer_index": 3,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'i386 : 패키지 아키텍처'입니다.",
    "original_num": 177,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 262
  },
  {
    "source": "2차 문제집 문178",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 RedHat에서 개발한 패키지 관리 기법으로 알 맞은 것은?",
    "options": [
      "yum",
      "rpm",
      "dpkg",
      "YaST"
    ],
    "answer_index": 1,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'rpm'입니다.",
    "original_num": 178,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 263
  },
  {
    "source": "2차 문제집 문179",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 데비안 리눅스의 패키지 관리 기법과 가장 관 련이 없는 것은?",
    "options": [
      "alien",
      "dpkg",
      "dselect",
      "yast 05-2 tar와 압축관련 유틸리티"
    ],
    "answer_index": 3,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'yast 05-2 tar와 압축관련 유틸리티'입니다.",
    "original_num": 179,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 264
  },
  {
    "source": "2차 문제집 문180",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 tar 명령의 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-p : 모든 퍼미션 정보를 유지한다.",
      "-f : 처리 과정을 자세히 보여준다.",
      "-c : 새 저장 파일을 만든다.",
      "-m : 파일의 변경 시간정보를 유지하지 않는다."
    ],
    "answer_index": 1,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-f : 처리 과정을 자세히 보여준다.'입니다.",
    "original_num": 180,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 265
  },
  {
    "source": "2차 문제집 문181",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 tar 명령의 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-r : 기존의 tar 파일 뒤에 파일을 추가한다.",
      "-c : 파일을 tar파일로 묶는다.",
      "-x : 생성된 tar 파일을 푼다.",
      "-f : 파일이 생성되었을 때의 권한을 그대로 유지하게 해준다."
    ],
    "answer_index": 3,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-f : 파일이 생성되었을 때의 권한을 그대로 유지하게 해준다.'입니다.",
    "original_num": 181,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 266
  },
  {
    "source": "2차 문제집 문182",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 tar 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "-Z : compress 관련 옵션으로 예전 UNIX 계열 표준 압축 파일인 tar.Z에 사용한다.",
      "-z : gzip 관련 옵션으로 압축 파일인 tar.gz에 사용한 다.",
      "-j : bzip2 관련 옵션으로 압축 파일인 tar.bz2에 사용 한다.",
      "-J : jz 관련 옵션으로 압축 파일인 tar.jz에 사용한다."
    ],
    "answer_index": 3,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-J : jz 관련 옵션으로 압축 파일인 tar.jz에 사용한다.'입니다.",
    "original_num": 182,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 267
  },
  {
    "source": "2차 문제집 문183",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음은 test.tar에 묶여 있는 파일 목록을 확인 하는 과정이다. (괄호) 안에 들어갈 옵션을 알맞은 것은?",
    "options": [
      "cvf",
      "xvf",
      "evf",
      "tvf"
    ],
    "answer_index": 3,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'tvf'입니다.",
    "original_num": 183,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 268
  },
  {
    "source": "2차 문제집 문184",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 etc.tgz 파일에 httpd.conf 파일이 포함 되었는지 확인하는 명령으로 알맞은 것은?",
    "options": [
      "tar -xvf./etc.tgz | grep \"httpd\\.conf\"",
      "tar -dvf./etc.tgz | grep \"httpd\\.conf\"",
      "tar -tvf./etc.tgz | grep \"httpd\\.conf\"",
      "tar -rvf./etc.tgz | grep \"httpd\\.conf\""
    ],
    "answer_index": 2,
    "explanation": "tar 아카이브 파일(.tgz)을 풀지 않고 내부 파일 목록만 열람하려면 '-t'(--list) 옵션을 사용하여 'tar -tvf ./etc.tgz | grep \"httpd.conf\"' 형식으로 실행해야 합니다.",
    "original_num": 184,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 269
  },
  {
    "source": "2차 문제집 문185",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 tar 옵션 중 compress 형식으로 압축하거나 해제 할 때 사용하는 것으로 알맞은 것은?",
    "options": [
      "-j",
      "-z",
      "-J",
      "-Z"
    ],
    "answer_index": 3,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-Z'입니다.",
    "original_num": 185,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 270
  },
  {
    "source": "2차 문제집 문186",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 gzip 명령어의 옵션에 대한 설명으로 알맞은 것은?",
    "options": [
      "-l : 디렉터리에 포함된 모든 파일을 압축한다.",
      "-d : 강제로 압축 한다.",
      "-v : 압축 혹은 해제 시 정보를 출력한다.",
      "-r : 압축파일을 테스트한다."
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-v : 압축 혹은 해제 시 정보를 출력한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 186,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 271
  },
  {
    "source": "2차 문제집 문187",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 messages.xz 파일의 압축을 해제하기 위한 명령으로 알맞은 것은?",
    "options": [
      "xz -d messages.xz",
      "xz -l messages.xz",
      "xz -t messages.xz",
      "xz -Vv messages.xz"
    ],
    "answer_index": 0,
    "explanation": "xz 압축 유틸리티에서 압축 파일(.xz)을 압축 해제(decompress)할 때는 '-d' 옵션을 사용합니다.",
    "original_num": 187,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 272
  },
  {
    "source": "2차 문제집 문188",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 rpm 설치 옵션 중 패키지를 실제로 설치하지 않 고 충돌 사항이 있는지 점검하는 옵션으로 알맞은 것은?",
    "options": [
      "--upgrade",
      "--test",
      "--oldpackage",
      "--root <dir>"
    ],
    "answer_index": 1,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '--test'입니다.",
    "original_num": 188,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 273
  },
  {
    "source": "2차 문제집 문189",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "rpm 패키지 설치시에 의존성을 검사하지 않기 위해 사 용하는 옵션으로 알맞은 것은?",
    "options": [
      "--noscripts",
      "--nodeps",
      "--hash",
      "--percent"
    ],
    "answer_index": 1,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '--nodeps'입니다.",
    "original_num": 189,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 274
  },
  {
    "source": "2차 문제집 문190",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 rpm 명령어 옵션에 대한 설명으로 틀린 것은?",
    "options": [
      "rpm -i : 패키지를 설치한다.",
      "rpm -U : 패키지를 업그레이드한다.",
      "rpm -e : 패키지를 제거한다.",
      "rpm -h : 도움말을 보여준다."
    ],
    "answer_index": 3,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'rpm -h : 도움말을 보여준다.'입니다.",
    "original_num": 190,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 275
  },
  {
    "source": "2차 문제집 문191",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음은 httpd 패키지를 제거하는 과정이다. (괄호)안 에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "-d",
      "-e",
      "-r",
      "-f"
    ],
    "answer_index": 1,
    "explanation": "RPM 패키지 관리자에서 이미 설치된 패키지를 시스템에서 완전히 제거(erase)할 때 사용하는 모드 옵션은 '-e'입니다.",
    "original_num": 191,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 276
  },
  {
    "source": "2차 문제집 문192",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음은 시스템에 설치된 모든 패키지 중에 mail 이라는 문자열이 들어있는 패키지를 검색하는 과정이다. (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "-qa",
      "-qi",
      "-ql",
      "-qp"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-qa'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 192,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 277
  },
  {
    "source": "2차 문제집 문193",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 설치된 파일로 rpm 패키지 이름을 알아 내려 고 할 때 사용하는 명령어 형식으로 알맞은 것은?",
    "options": [
      "rpm -qf /bin/ls",
      "rpm -qc /bin/ls",
      "rpm -qa /bin/ls",
      "rpm -qp /bin/ls"
    ],
    "answer_index": 0,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'rpm -qf /bin/ls'입니다.",
    "original_num": 193,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 278
  },
  {
    "source": "2차 문제집 문194",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 rpm 명령어의 옵션 중 패키지 관련 문서 및 man 페이지 파일 정보를 출력할 때 옵션으로 알맞은 것은?",
    "options": [
      "-qf",
      "-qd",
      "-qR",
      "-qc"
    ],
    "answer_index": 1,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-qd'입니다.",
    "original_num": 194,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 279
  },
  {
    "source": "2차 문제집 문195",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 조건일 때 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "㉠ -qp ㉡ -qf",
      "㉠ -qf ㉡ -qp",
      "㉠ -qi ㉡ -ql",
      "㉠ -ql ㉡ -qi"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ -ql ㉡ -qi'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 195,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 280
  },
  {
    "source": "2차 문제집 문196",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 /sbin/ifconfig 파일을 포함하는rpm패키지를 알아내려고 할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "rpm -qF /sbin/ifconfig",
      "rpm -qf /sbin/ifconfig",
      "rpm -qi /sbin/ifconfig",
      "rpm -qp /sbin/ifconfig"
    ],
    "answer_index": 1,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'rpm -qf /sbin/ifconfig'입니다.",
    "original_num": 196,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 281
  },
  {
    "source": "2차 문제집 문197",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 rpm 옵션 중에서 설치된 패키지의 문서파일 경로를 출력하는 것으로 알맞은 것은?",
    "options": [
      "-qc",
      "-qa",
      "-qf",
      "-qd"
    ],
    "answer_index": 3,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-qd'입니다.",
    "original_num": 197,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 282
  },
  {
    "source": "2차 문제집 문198",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 rpm으로 설치된 패키지를 검증 시 검증코드에 관 한 설명으로 틀린 것은?",
    "options": [
      "S : 파일 크기 변경",
      "M : 파일 모드 변경",
      "L : 링크 파일 경로 불일치",
      "G : 소유자 변경"
    ],
    "answer_index": 3,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'G : 소유자 변경'입니다.",
    "original_num": 198,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 283
  },
  {
    "source": "2차 문제집 문199",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 rpm 사용법 중 시스템에 설치된 모든 패키지를 검증하는 명령으로 알맞은 것은?",
    "options": [
      "rpm -qa",
      "rpm -qR",
      "rpm -Va",
      "rpm -qv"
    ],
    "answer_index": 2,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'rpm -Va'입니다.",
    "original_num": 199,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 284
  },
  {
    "source": "2차 문제집 문200",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 rpm 패키지가 임의로 변경되었는지 파일크기, 심볼릭 링크, 장치파일 변경 등을 검사할 때 사용하는 옵션으로 알맞은 것은?",
    "options": [
      "-D",
      "-E",
      "-V",
      "-K"
    ],
    "answer_index": 2,
    "explanation": "rpm은 레드햇 패키지 파일(.rpm)의 설치(-i), 업그레이드(-U), 제거(-e), 질의(-q)를 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-V'입니다.",
    "original_num": 200,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 285
  },
  {
    "source": "2차 문제집 문201",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "yum 명령어 사용 설명 중 틀린 것은?",
    "options": [
      "yum install [패키지 이름] - 패키지 설치시 사용",
      "yum remove [패키지 이름] - 패키지 삭제시 사용",
      "yum -y install [패키지이름] - 패키지재설치시사용",
      "yum update [패키지이름] - 패키지업데이트시사용"
    ],
    "answer_index": 2,
    "explanation": "yum은 인터넷 저장소에서 패키지 간의 의존성을 자동으로 해결하여 설치 및 업데이트합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'yum -y install [패키지이름] - 패키지재설치시사용'입니다.",
    "original_num": 201,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 286
  },
  {
    "source": "2차 문제집 문202",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "yum 명령어 중 “Development Tools\" 그룹 설치 방법 이 알맞은 것은?",
    "options": [
      "yum install -group “Development Tools\"",
      "yum groupinstall “Development Tools\"",
      "yum install “Development Tools\"",
      "yum -g install “Development Tools”"
    ],
    "answer_index": 1,
    "explanation": "yum은 인터넷 저장소에서 패키지 간의 의존성을 자동으로 해결하여 설치 및 업데이트합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'yum groupinstall “Development Tools\"'입니다.",
    "original_num": 202,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 287
  },
  {
    "source": "2차 문제집 문203",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 yum을 이용하여 업데이트가 필요한 패키지에 대한 정보를 출력하는 명령으로 알맞은 것은?",
    "options": [
      "yum info updates",
      "yum list updates",
      "yum update",
      "yum updates"
    ],
    "answer_index": 1,
    "explanation": "yum은 인터넷 저장소에서 패키지 간의 의존성을 자동으로 해결하여 설치 및 업데이트합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'yum list updates'입니다.",
    "original_num": 203,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 288
  },
  {
    "source": "2차 문제집 문204",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음 중 yum 명령으로 play라는 문자열이 포함된 패키 지를 찾으려고 할 때 알맞은 것은?",
    "options": [
      "yum info play",
      "yum list play",
      "yum search play",
      "yum find play"
    ],
    "answer_index": 2,
    "explanation": "yum은 인터넷 저장소에서 패키지 간의 의존성을 자동으로 해결하여 설치 및 업데이트합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'yum search play'입니다.",
    "original_num": 204,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 289
  },
  {
    "source": "2차 문제집 문205",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음중 vim 패키지가 설치한 파일 목록을 보려고 할 때 괄호 안에 들어갈 내용으로 알맞은 것은? dpkg() vim",
    "options": [
      "-l",
      "-L",
      "--list",
      "--unpack"
    ],
    "answer_index": 1,
    "explanation": "dpkg는 데비안/우분투 계열의 deb 패키지를 로컬에서 설치, 삭제, 조회하는 도구입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '-L'입니다.",
    "original_num": 205,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 290
  },
  {
    "source": "2차 문제집 문206",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "소프트웨어 설치 및 패키지 관리",
    "question": "다음의 조건일 때 (괄호)안에 들어갈 내용은? dkpg로 패키지를 제거할 때()옵션을 사용하면 환경 설 정 파일을 포함하여 모두 제거하나 ()옵션을 사용하면 환경 설정 파일은 제거 되지 않는다.",
    "options": [
      "-r, -F",
      "-P, -F",
      "-P, -r",
      "-r, -P"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-P, -r'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 206,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 291
  },
  {
    "source": "2차 문제집 문207",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 apt-get 명령으로 nautilus라는 패키지를 설치 하는 명령으로 알맞은 것은?",
    "options": [
      "apt-get install nautilus",
      "apt-get nautilus install",
      "apt-get build nautilus",
      "apt-get nautilus build"
    ],
    "answer_index": 0,
    "explanation": "apt-get은 데비안/우분투 계열에서 원격 저장소의 deb 패키지 의존성을 자동 해결하여 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'apt-get install nautilus'입니다.",
    "original_num": 207,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 292
  },
  {
    "source": "2차 문제집 문208",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 apt-get 사용 시에 의존성 및 충돌성을 해결하 기 위해 관련 정보를 기록하는 파일로 알맞은 것은?",
    "options": [
      "/var/cache/apt/archive",
      "/var/cache/archive",
      "/etc/apt/sources.list",
      "/etc/yum/sources.list"
    ],
    "answer_index": 2,
    "explanation": "apt-get은 데비안/우분투 계열에서 원격 저장소의 deb 패키지 의존성을 자동 해결하여 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '/etc/apt/sources.list'입니다.",
    "original_num": 208,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 293
  },
  {
    "source": "2차 문제집 문209",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 apt-get 명령으로 install할 때 관련 deb 파일 이 생성되는 디렉터리로 알맞은 것은?",
    "options": [
      "/etc/apt/sources.list",
      "/var/cache/archive",
      "var/cache/apt/archive",
      "/etc/yum/sources.list"
    ],
    "answer_index": 2,
    "explanation": "apt-get은 데비안/우분투 계열에서 원격 저장소의 deb 패키지 의존성을 자동 해결하여 관리합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'var/cache/apt/archive'입니다.",
    "original_num": 209,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 294
  },
  {
    "source": "2차 문제집 문210",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음의 조건일 때 ()안에 들어갈 말은 데비안 리눅스에서 설치 시에 발생할 수 있는 의존 성을 해결하기 위해 ()를 사용하고, 레드햇 리눅스 에서는()를 사용한다.",
    "options": [
      "apt-get, yum",
      "apt-get, yast",
      "yum, yast",
      "yum, apt-get"
    ],
    "answer_index": 0,
    "explanation": "데비안 계열에서는 의존성을 자동 해결하는 도구로 'apt-get'을 사용하고, 레드햇 계열에서는 'yum'을 사용합니다.",
    "original_num": 210,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 295
  },
  {
    "source": "2차 문제집 문211",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 애플이 개발한 오픈 소스 프린팅 시스템으로 유닉스 계열 운영체제의 시스템을 프린터 서버로사용 가능 하게 해주는 시스템으로 알맞은 것은?",
    "options": [
      "LPRng",
      "CUPS",
      "LPRM",
      "IPP"
    ],
    "answer_index": 1,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'CUPS'입니다.",
    "original_num": 211,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 296
  },
  {
    "source": "2차 문제집 문212",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 CUPS에 대한 설명으로 틀린 것은?",
    "options": [
      "웹을 통해 관련 장치의 제어가 가능하다.",
      "애플이 개발한 오픈 소스 프린팅 시스템이다.",
      "lpadmin이라는 명령어를 사용한다.",
      "설정한 정보는 /etc/printcap 파일에 저장된다."
    ],
    "answer_index": 3,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '설정한 정보는 /etc/printcap 파일에 저장된다.'입니다.",
    "original_num": 212,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 297
  },
  {
    "source": "2차 문제집 문213",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 LPRng에 대한 설명으로 틀린 것은?",
    "options": [
      "버클리 프린팅 시스템으로 BSD 계열 유닉스에서 사용하기 위해 개발되었다.",
      "설정한 정보는 /etc/printcap 파일에 저장되었다.",
      "RFC 1279로 정의되어 있다.",
      "관련 공식 웹사이트를 통해 소스 및 문서를 제공한다."
    ],
    "answer_index": 2,
    "explanation": "LPRng의 공식 LPD 통신 규격 문서는 RFC 1179입니다. (RFC 1279는 잘못된 설명입니다.)",
    "original_num": 213,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 298
  },
  {
    "source": "2차 문제집 문214",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 CUPS에서 프린터 큐 관련 환경 설정 파일로 lpadmin 명령을 이용하거나 웹을 통해 제어할 수 있는 파 일로 알맞은 것은?",
    "options": [
      "/etc/cups/cupsd.conf",
      "/etc/cups/printers.conf",
      "/etc/cups/classes.conf",
      "cupsd"
    ],
    "answer_index": 1,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '/etc/cups/printers.conf'입니다.",
    "original_num": 214,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 299
  },
  {
    "source": "2차 문제집 문215",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 CUPS 관련 파일에 대한 설명으로 틀린 것은?",
    "options": [
      "/etc/cups/cupsd.conf : 프린터 데몬의환경설정 파일",
      "/etc/printcap : 프린터 큐관련 환경 설정 파일",
      "/etc/cups/classess.conf : 프린터 데몬의 클래스(class) 설정 파일",
      "cupsd : 프린터 데몬"
    ],
    "answer_index": 1,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '/etc/printcap : 프린터 큐관련 환경 설정 파일'입니다.",
    "original_num": 215,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 300
  },
  {
    "source": "2차 문제집 문216",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "리눅스 프린팅 시스템에 대한 설명으로 알맞은 것은?",
    "options": [
      "리눅스 초기에는 LPRng를 기본으로 사용했으나, 최근 배포판에서는 CUPS라는 시스템을 추가로 사용하고 있 다.",
      "리눅스의 프린팅 시스템인 LPRng는 네트워크 프린터 서버 기능을 사용할 수 없다.",
      "CUPS는 애플에서 개발한 오픈소스 프린팅 시스템으로 유닉스 계열 운영체제의 시스템을 지원하기 위해 개발 되었으며, 윈도우 등에서 사용되는 프린터는 사용할 수 없다.",
      "리눅스시스템에 프린터를 직접 연결하면 병렬 포트에 연결시 /dev/lp0, USB포트에 연결시 /dev/lpusb0 장치 파일이 생성된다."
    ],
    "answer_index": 0,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '리눅스 초기에는 LPRng를 기본으로 사용했으나, 최근 배포판에서는 CUPS라는 시스템을 추가로 사용하고 있 다.'입니다.",
    "original_num": 216,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 301
  },
  {
    "source": "2차 문제집 문217",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 LPRng의 설명으로 틀린 것은?",
    "options": [
      "애플이 개발한 오픈 소스 프린팅 시스템이다.",
      "BSD계열 유닉스에서 사용하기 위해 개발되었다.",
      "설정 정보는 /etc/printcap에 저장된다.",
      "프린터 스풀링과 네트워크 프린터 서버를 지원한다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '애플이 개발한 오픈 소스 프린팅 시스템이다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 217,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 302
  },
  {
    "source": "2차 문제집 문218",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 설명으로 알맞은 것은? - 버클리 프린팅 시스템으로 BSD계열 유닉스에서 사용하기 위해 개발되었다. - 라인 프린터 데몬 프로토콜을 사용하여 프린터 스풀링과 네트워크 프린터 서버를 지원한다.",
    "options": [
      "LPRng",
      "CUPS",
      "ALSA",
      "OSS"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'LPRng'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 218,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 303
  },
  {
    "source": "2차 문제집 문219",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 프린터 작업을 요청하여 인쇄를 할 때 사용 가 능한 명령어 조합으로 알맞은 것은?",
    "options": [
      "lp, lpstat",
      "lpr, lpc",
      "lpc, lpstat",
      "lpr, lp"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lpr, lp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 219,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 304
  },
  {
    "source": "2차 문제집 문221",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음중 lpr 명령을 사용하여 지정한 문서 파일을 인쇄한 후에 관련 파일을 삭제할때 사용하는 옵션으로 알맞은 것 은?",
    "options": [
      "-#",
      "-r",
      "-e",
      "-d"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-r'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 221,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 305
  },
  {
    "source": "2차 문제집 문222",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 BSD 계열의 프린터 명령으로 틀린 것은?",
    "options": [
      "lpr",
      "lp",
      "lpq",
      "lprm"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 222,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 306
  },
  {
    "source": "2차 문제집 문223",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 프린터 큐(Queue)에 있는 작업의 목록을 출력 하는 명령어로 알맞은 것은?",
    "options": [
      "lp queue",
      "lpq",
      "lprm",
      "lpc"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lpq'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 223,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 307
  },
  {
    "source": "2차 문제집 문224",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 리눅스에서 BSD계열에 사용하는 프린트 큐에 대기 중인 작업을 삭제 명령어는?",
    "options": [
      "lpc",
      "lprm",
      "lpq",
      "lpr"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lprm'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 224,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 308
  },
  {
    "source": "2차 문제집 문225",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 BSD 계열 프린터 명령으로 알맞은 것은?",
    "options": [
      "lp",
      "lpstat",
      "lpc",
      "cancel 06-2사운드 카드,스캐너"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lpc'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 225,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 309
  },
  {
    "source": "2차 문제집 문226",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? (㉠)는 (㉡)의 지원을 받아 하드웨어 기반 미디 합성, 다중 채널 하드웨어 믹싱, 전이중 통신, 다중 프로세서와의 조화, 스레드 안전장치 드라이버 등의 기능을 지원한다.",
    "options": [
      "㉠ ALSA ㉡ OSS",
      "㉠ ALSA ㉡ FSF",
      "㉠ OSS ㉡ ALSA",
      "㉠ OSS ㉡ FSF"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ ALSA ㉡ OSS'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 226,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 310
  },
  {
    "source": "2차 문제집 문227",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 오디오 CD에서 음악 파일을 추출할 때 사용하 는 명령으로 알맞은 것은?",
    "options": [
      "alsamixer",
      "cdparanoia",
      "xcam",
      "scan"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'cdparanoia'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 227,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 311
  },
  {
    "source": "2차 문제집 문228",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 설명으로 알맞은 것은?",
    "options": [
      "ALSA",
      "CUPS",
      "OSS",
      "SANE"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ALSA'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 228,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 312
  },
  {
    "source": "2차 문제집 문229",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 커서(ncurses) 라이브러리 기반의 오디오 프로그램으로 알맞은 것은?",
    "options": [
      "alsamixer",
      "cdparanoia",
      "scanadf",
      "xcam 06-3 스캐너"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'alsamixer'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 229,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 313
  },
  {
    "source": "2차 문제집 문230",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 (괄호)에 해당하는 설명으로 알맞은 것은?",
    "options": [
      "OSS",
      "SANE",
      "xsane",
      "ALSA"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'xsane'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 230,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 314
  },
  {
    "source": "2차 문제집 문231",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 USB 및 SCSI 스캐너와 관련 장치 파일을 찾 아주는 명령으로 알맞은 것은?",
    "options": [
      "alsactl",
      "scanner-find",
      "sane-find-scanner",
      "scan-find"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'sane-find-scanner'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 231,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 315
  },
  {
    "source": "2차 문제집 문232",
    "stage": "2차",
    "subject": "리눅스 운영 및 관리",
    "chapter": "장치 및 주변기기 설정",
    "question": "다음 중 이미지를 50*50 mm로 크기로 스캔하고 이미 지 파일 형식을 pnm로 하여 image.pnm로 저장하는 명령 어로 알맞은 것은?",
    "options": [
      "scanimage -x 50 -y 50 --format=pnm >image.pnm",
      "scan -x 50 -y 50 --format=pnm >image.pnm",
      "scanimage -x 50 -y 50 --format=pnm | image.pnm",
      "scan -x 50 -y 50 --format=pnm | image.pnm"
    ],
    "answer_index": 0,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'scanimage -x 50 -y 50 --format=pnm >image.pnm'입니다.",
    "original_num": 232,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 316
  },
  {
    "source": "2차 문제집 문233",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 (괄호)안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "㉠ Xlib - ㉡ XCB",
      "㉠ QT - ㉡ GTK+",
      "㉠ XFree86 - ㉡ Xorg",
      "㉠ KDE - ㉡ GNOME"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ Xlib - ㉡ XCB'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 233,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 317
  },
  {
    "source": "2차 문제집 문234",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 (괄호)안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "㉠ XFree86 - ㉡ Xorg",
      "㉠ Xorg - ㉡ XFree86",
      "㉠ KDE - ㉡ GNOME",
      "㉠ GNOME - ㉡ KDE"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ XFree86 - ㉡ Xorg'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 234,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 318
  },
  {
    "source": "2차 문제집 문235",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도에서 사용되는 클라이언트 라이브러리로 윈도우창 생성, 이벤트 처리, 창 조회, 키보드 처리와 같은 라이브러리를 제공하는 것으로 알맞은 것은?",
    "options": [
      "GTK",
      "glibc",
      "Qt",
      "xlib"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'xlib'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 235,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 319
  },
  {
    "source": "2차 문제집 문236",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도의 설명으로 틀린 것은?",
    "options": [
      "네트워크 프로토콜에 기반을 둔 그래픽 사용자 인터페 이스 환경이다.",
      "양한 종류의 컴퓨터에서 구동될 수 있을 정도로 이식 성이 뛰어나다.",
      "X Server와 X Client의 서버/클라이언트 구조이다.",
      "원격 연결(Remote Connection)은 지원하지 못한다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '원격 연결(Remote Connection)은 지원하지 못한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 236,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 320
  },
  {
    "source": "2차 문제집 문237",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도에 대한 설명으로 틀린 것은?",
    "options": [
      "Bob Scheifler가1986년오픈소스프로젝트로만들었다.",
      "그래픽 환경의 인터페이스를 사용자가 원하는 모양으로 만들 수 있다.",
      "X Protocol을 사용한다.",
      "특정 디스플레이 장치에 의존적이다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '특정 디스플레이 장치에 의존적이다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 237,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 321
  },
  {
    "source": "2차 문제집 문239",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 리눅스 부팅 시에 X 윈도가 실행되도록 관련 파일을 수정하려고 할 때 설정하는 내용으로 알맞은 것은?",
    "options": [
      "initdefault:3:id:",
      "id:3:initdefault:",
      "initdefault:5:id:",
      "id:5:initdefault:"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'id:5:initdefault:'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 239,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 322
  },
  {
    "source": "2차 문제집 문240",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 리눅스 부팅 시에 X 윈도를 실행하기 위해 설 정하는 파일로 알맞은 것은?",
    "options": [
      "/etc/xdm",
      "/etc/fstab",
      "/etc/inittab",
      "/etc/xdisplay"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/inittab'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 240,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 323
  },
  {
    "source": "2차 문제집 문241",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 X 윈도의 구성 요소 중에 사용자 로그인 및 세션 관리 역할을 수행하는 것으로 알맞은 것은?",
    "options": [
      "윈도 매니저",
      "디스플레이 매니저",
      "데스크톱 환경",
      "사용자 인터페이스"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '디스플레이 매니저'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 241,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 324
  },
  {
    "source": "2차 문제집 문242",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도우 설정을 위해 사용하는 명령으로 틀린 것은?",
    "options": [
      "xf86cfg",
      "Xconfigurtator",
      "xwindows-env-setup",
      "system-config-display"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'xwindows-env-setup'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 242,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 325
  },
  {
    "source": "2차 문제집 문243",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도 기반의 프린터 설정 도구를 실행하는 명령으로 알맞은 것은?",
    "options": [
      "xprinttool",
      "printtoolx",
      "system-config-printer",
      "system-config-xprinter"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'system-config-printer'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 243,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 326
  },
  {
    "source": "2차 문제집 문244",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 XFree86으로 X 윈도를 사용하려 할 때 사용하는 명령으로 틀린 것은?",
    "options": [
      "system-config-display",
      "xf86cfg",
      "Xconfigurator",
      "redhat-config-xfree86"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'system-config-display'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 244,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 327
  },
  {
    "source": "2차 문제집 문245",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 그림의 디스플레이 매니저로 알맞은 것은?",
    "options": [
      "XDM",
      "KDM",
      "QDM",
      "GDM"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'GDM'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 245,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 328
  },
  {
    "source": "2차 문제집 문246",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 그림의 디스플레이 매니저로 알맞은 것은?",
    "options": [
      "XDM",
      "KDM",
      "QDM",
      "GDM"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'XDM'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 246,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 329
  },
  {
    "source": "2차 문제집 문247",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 그림의 디스플레이 매니저로 알맞은 것은?",
    "options": [
      "KDM",
      "XDM",
      "QDM",
      "GDM"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'KDM'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 247,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 330
  },
  {
    "source": "2차 문제집 문248",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 리눅스에서 사용하는 디스플레이 매니저와 가장 거리가 먼 것은?",
    "options": [
      "XDM",
      "GDM",
      "KDM",
      "Xlib"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Xlib'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 248,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 331
  },
  {
    "source": "2차 문제집 문249",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도 구성요소에서 사용자 로그인 및 세션관리를 수행하는 것으로 알맞은 것은?",
    "options": [
      "Display Manager",
      "Window Manager",
      "GNOME",
      "User Interface"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Display Manager'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 249,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 332
  },
  {
    "source": "2차 문제집 문250",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 (괄호)안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "ⓐ xrun - ⓑ xprocess",
      "ⓐ xstart - ⓑ xwindow",
      "ⓐ startx - ⓑ xinit",
      "ⓐ runx - ⓑ x86"
    ],
    "answer_index": 2,
    "explanation": "tar는 여러 파일들을 아카이브로 묶거나 해제하며, -z(gzip), -j(bzip2), -J(xz) 압축 필터를 지원합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'ⓐ startx - ⓑ xinit'입니다.",
    "original_num": 250,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 333
  },
  {
    "source": "2차 문제집 문251",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 설명하는 내용으로 알맞은 것은?",
    "options": [
      "디스플레이 매니저",
      "X 라이브러리",
      "데스크톱 환경",
      "윈도 매니저"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '데스크톱 환경'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 251,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 334
  },
  {
    "source": "2차 문제집 문252",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음중 KDE의 기반이 되는 라이브러리로 알맞은 것은?",
    "options": [
      "QT",
      "GTK+",
      "Motif",
      "Xaw"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'QT'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 252,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 335
  },
  {
    "source": "2차 문제집 문253",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 KDE에서 사용하는 웹 브라우저 및 파일 관리 프로그램으로 알맞은 것은?",
    "options": [
      "konqueror",
      "nautilus",
      "gimp",
      "eog"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'konqueror'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 253,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 336
  },
  {
    "source": "2차 문제집 문254",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 KDE 프로그램들 중에서 텍스트 편집기로 알맞은 것은?",
    "options": [
      "dolphin",
      "Rhythmbox",
      "KRuler",
      "kwrite"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'kwrite'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 254,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 337
  },
  {
    "source": "2차 문제집 문255",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 GNOME 3 버전의 기본 윈도 매니저로 알맞은 것은?",
    "options": [
      "Enlightenment",
      "Metacity",
      "Mutter",
      "Kwin"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Mutter'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 255,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 338
  },
  {
    "source": "2차 문제집 문256",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도우 데스크톱 환경에 대한 설명으로 틀린 것은?",
    "options": [
      "GNOME과 KDE는 윈도우 매니저이다.",
      "윈도우 매니저, 파일매니저, 도움말 시스템, 제어판, 바 탕화면 등 다양한 도구를 제공한다.",
      "른 윈도우와 차별화된 고유한 특징과 GUI로 구성되어 있다.",
      "통일된 디자인을 가진 애플리케이션과 아이콘, 오피스 슈트, 네트워크 관리 도구 등을 제공 한다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'GNOME과 KDE는 윈도우 매니저이다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 256,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 339
  },
  {
    "source": "2차 문제집 문257",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음은 GNOME에서 사용하는 파일 관리 프로그램이다. 이 프로그램을 실행하기 위해 X 윈도의 터미널 창에 입력 해야할 명령으로 알맞은 것은?",
    "options": [
      "konqueror",
      "nautilus",
      "gimp",
      "eog"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'nautilus'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 257,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 340
  },
  {
    "source": "2차 문제집 문258",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 GNOME과 관련된 응용프로그램으로 가장 거리 가 먼 것은?",
    "options": [
      "evince",
      "gimp",
      "konqueror",
      "totem"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'konqueror'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 258,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 341
  },
  {
    "source": "2차 문제집 문259",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 GNOME 환경에서 널리 사용되는 문서 편집기 로 알맞은 것은?",
    "options": [
      "evince",
      "gimp",
      "gedit",
      "kwrite"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'gedit'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 259,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 342
  },
  {
    "source": "2차 문제집 문260",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 GNOME에 대한 설명으로 알맞은 것은?",
    "options": [
      "GPL 라이선스만 따른다.",
      "대표적인 윈도우 매니저이다.",
      "GNU 프로젝트에 의해서 만들어졌다.",
      "Qt 라이브러리 기반으로 만들어졌다. 07-2 X윈도 활용"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'GNU 프로젝트에 의해서 만들어졌다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 260,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 343
  },
  {
    "source": "2차 문제집 문261",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 서버에 접근하는 192.168.12.22번 IP주소의 X 클라이언트를 허가하려고 할 때 알맞은 것은?",
    "options": [
      "xhost 192.168.12.22",
      "xhost + 192.168.12.22",
      "xhost -192.168.12.22",
      "xhost add 192.168.12.22"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'xhost + 192.168.12.22'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 261,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 344
  },
  {
    "source": "2차 문제집 문262",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 조건으로 실행하려고 할 때 관련 설정으로 알맞은 것은?",
    "options": [
      "export DISPLAY=“203.247.51.100:0.1”",
      "export DISPLAY=“203.247.51.100:0.2”",
      "export DISPLAY=“203.247.51.100:1.1”",
      "export DISPLAY=“203.247.51.100:1.2”"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'export DISPLAY=“203.247.51.100:0.1”'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 262,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 345
  },
  {
    "source": "2차 문제집 문263",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 X 서버에서 보내온 키 값을 설치하려고 할 때 (괄호) 안에 들어갈 내용으로 알맞은 것은? ([root@server ~]# xauth list $DISPLAY i h d / u n i x : 0 M I T - M A G I C - C O O K I E - 1 cb050f6145a84aa3ecab81de685ea074 [root@x_client ~]# xauth () $DISPLAY. cb050f6145a84aa3ecab81de685ea074",
    "options": [
      "echo",
      "cat",
      "add",
      "xhost"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'add'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 263,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 346
  },
  {
    "source": "2차 문제집 문264",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 그래픽이나 로고 디자인, 사진 편집, 이미지 합 성, 이미지 포맷 변환 등을 할 때 가장 유용할 프로그램으 로 알맞은 것은?",
    "options": [
      "evince",
      "gimp",
      "ImageMagick",
      "eog"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'gimp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 264,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 347
  },
  {
    "source": "2차 문제집 문265",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도 환경에서 사용 가능한 멀티미디어 프로그램이 아닌 것은?",
    "options": [
      "Totem",
      "KMid",
      "Krfb",
      "Dragon Player"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Krfb'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 265,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 348
  },
  {
    "source": "2차 문제집 문266",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 이미지 뷰어 프로그램인 ImageMagick를 실행하기 위해 X 윈도의 터미널 창에 입력해야할 명령으로 알맞은 것은?",
    "options": [
      "evince",
      "Okular",
      "eog",
      "display"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'display'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 266,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 349
  },
  {
    "source": "2차 문제집 문267",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 통합형 음악 관리 프로그램으로 알맞은 것은?",
    "options": [
      "Rythmbox",
      "LibreOffice",
      "kdegraphics",
      "eog"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Rythmbox'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 267,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 350
  },
  {
    "source": "2차 문제집 문268",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 GNOME 데스크톱 기반의 Movie Player로 알 맞은 것은?",
    "options": [
      "totem",
      "ImageMagicK",
      "Gimp",
      "eog"
    ],
    "answer_index": 0,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'totem'입니다.",
    "original_num": 268,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 351
  },
  {
    "source": "2차 문제집 문269",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 스프레드 시트(Spread Sheet) 프로그램으로 알 맞은 것은?",
    "options": [
      "LibreOffice Impress",
      "LibreOffice Draw",
      "LibreOffice Calc",
      "LibreOffice Writer"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'LibreOffice Calc'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 269,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 352
  },
  {
    "source": "2차 문제집 문271",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 문서 뷰어 프로그램으로 알맞은 것은?",
    "options": [
      "gwenview",
      "kolourpaint",
      "okular",
      "ksnapshot"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'okular'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 271,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 353
  },
  {
    "source": "2차 문제집 문272",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "X 윈도우 환경",
    "question": "다음 중 X 윈도에서 사용 가능한 응용 프로그램에 대한 설명으로 알맞은 것은?",
    "options": [
      "KSnapshot : 비디오 재생 프로그램",
      "gThumb : 파일 관리 프로그램",
      "eog : 이미지 뷰어 프로그램",
      "LibreOffice : 동영상 편집기"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'eog : 이미지 뷰어 프로그램'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 272,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 354
  },
  {
    "source": "2차 문제집 문273",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "LAN 구성 방식 중 장애 발생 시에도 다른 시스템에 영 향이 적고, 우회할 수 있는 방법이 존재하여 가장 신뢰성 이 높은 방식으로 알맞은 것은?",
    "options": [
      "링형",
      "망형",
      "버스형",
      "스타형"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '망형'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 273,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 355
  },
  {
    "source": "2차 문제집 문274",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "LAN 구성 방식 중 관리하는 중앙 컴퓨터 고장에 가장 큰 문제점을 유발하는 방식으로 알맞은 것은?",
    "options": [
      "링형",
      "망형",
      "버스형",
      "스타형"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '스타형'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 274,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 356
  },
  {
    "source": "2차 문제집 문275",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 설명으로 알맞은 것은? - 분산 제어와 검사, 회복이 가능 - 논리적인 순환형 토폴로지로 하나의 노드 장애가 전체 토폴로지에 영향을 미침 - 고속 네트워크로 자주 네트워크 환경이 바뀌지 않을 경우 구성",
    "options": [
      "망 토폴로지(형)",
      "링 토폴로지(형)",
      "버스 토폴로지(형)",
      "스타 토폴로지(형)"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '링 토폴로지(형)'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 275,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 357
  },
  {
    "source": "2차 문제집 문276",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 이더넷(Ethernet) 매체 종류와 배선 방식에 대 한 설명으로 틀린 것은?",
    "options": [
      "100BASE-TX : 100Mbps의 전송 속도에 전송 매체는 UTP-5 또는 STP를 사용",
      "100BASE-FX : 100Mbps의 전송 속도에 전송 매체는 광케이블을 사용",
      "1000BASE-T : 1000Mbps의 전송 속도에 전송 매체는 UTP-5를 사용",
      "1000BASE-LX : 단파장의광섬유를사용하는규격으로 최 대 220~550M까지 가능"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '1000BASE-LX : 단파장의광섬유를사용하는규격으로 최 대 220~550M까지 가능'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 276,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 358
  },
  {
    "source": "2차 문제집 문277",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 100Mbps의 전송속도에 전송매체는 UTP-5 또 는 STP를 사용하는 케이블로 알맞은 것은?",
    "options": [
      "100BASE-2",
      "100BASE-5",
      "100BASE-TX",
      "100BASE-FX"
    ],
    "answer_index": 2,
    "explanation": "ps는 현재 실행 중인 프로세스의 PID, 상태(STAT), CPU/메모리 점유율을 출력합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '100BASE-TX'입니다.",
    "original_num": 277,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 359
  },
  {
    "source": "2차 문제집 문278",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 이더넷 환경에서 다중 접속의 반송파 감지 및 충돌 탐지 방식을 뜻하는 용어로 알맞은 것은?",
    "options": [
      "CSMA/CA",
      "CSMA/CD",
      "FDDI",
      "DQDB"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'CSMA/CD'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 278,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 360
  },
  {
    "source": "2차 문제집 문279",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음의 설명으로 알맞은 것은? -각 기기들이 48비트 길이의 고유한 MAC 주소를 기반으로 상호간에 데이터를 주고받을 수 있도록 만들어졌다. -BNC, UTP등이 케이블이 사용되고, 허브, 스위치 장치",
    "options": [
      "FDDI",
      "Token Ring",
      "Ethernet",
      "X.25"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Ethernet'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 279,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 361
  },
  {
    "source": "2차 문제집 문280",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 회선교환방식 및 패킷교환방식에 대한 설명으 로 틀린 것은?",
    "options": [
      "패킷교환방식은 이론상 호스트의 무제한 수용이 가능하 다.",
      "회선교환방식은 고정된 패역폭을 할당받아 전송된다.",
      "회선교환방식의 대표적인 예가 전화이다.",
      "패킷교환방식은 회선교환방식에 비해 지연이 덜하다"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '패킷교환방식은 회선교환방식에 비해 지연이 덜하다'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 280,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 362
  },
  {
    "source": "2차 문제집 문281",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 통신기술 방식으로 알맞은 것은? ATM(Asynchronous Transfer Mode)라 더 많이 알려져 있으며, 53Byte의 고정 길이 패킷을 이용 해서 순서대로 자료를 전송하는 방식이다.",
    "options": [
      "프레임 릴레이(Frame Relay)",
      "셀 릴레이(Cell Relay)",
      "FDDI",
      "X.25"
    ],
    "answer_index": 1,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '셀 릴레이(Cell Relay)'입니다.",
    "original_num": 281,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 363
  },
  {
    "source": "2차 문제집 문282",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 내용으로 알맞은 것은?",
    "options": [
      "X.25",
      "Ethernet",
      "FDDI",
      "Token Ring"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Token Ring'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 282,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 364
  },
  {
    "source": "2차 문제집 문283",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "\"전송 매체를 광섬유 케이블(Optical Fiber Cable)을 사 용하여 설계된 링 구조의 통신망으로 네트워크 액세스를 제어하기 위해 토큰 패싱 방법을 사용한다. 1982년 10월에 미국표준협회의 X3T9.5 커미티에서 표준화되었고, ISO 규 격으로 승인되었다.\" 다음 설명으로 알맞은 것은?",
    "options": [
      "Token Ring",
      "FDDI",
      "X.25",
      "Ethernet"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'FDDI'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 283,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 365
  },
  {
    "source": "2차 문제집 문284",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 DQDB(Distributed Queue Dual Bus)와 관련 있는 구성 방식으로 알맞은 것은?",
    "options": [
      "LAN",
      "MAN",
      "WAN",
      "Wi-Fi"
    ],
    "answer_index": 1,
    "explanation": "du는 특정 파일이나 디렉터리가 실제로 차지하고 있는 디스크 점유 용량을 검사합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'MAN'입니다.",
    "original_num": 284,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 366
  },
  {
    "source": "2차 문제집 문285",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI 모델 기준으로 가장 많은 계층을 지원하는 장치로 알맞은 것은?",
    "options": [
      "허브(HUB)",
      "리피터(Repeater)",
      "우터(Router)",
      "브릿지(Bridge)"
    ],
    "answer_index": 2,
    "explanation": "route는 시스템의 IP 라우팅 테이블 정보를 조회하거나 기본 게이트웨이를 설정합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '우터(Router)'입니다.",
    "original_num": 285,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 367
  },
  {
    "source": "2차 문제집 문286",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 입력된 신호를 증폭하여 중계하는 장치는?",
    "options": [
      "리피터(Repeater)",
      "허브(HUB)",
      "우터(Router)",
      "브릿지(Bridge)"
    ],
    "answer_index": 0,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '리피터(Repeater)'입니다.",
    "original_num": 286,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 368
  },
  {
    "source": "2차 문제집 문287",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 여러 개의 네트워크 세그먼트를 연결해 주고 통신량을 조절하여 트래픽을 관리할 수 있는 장치는?",
    "options": [
      "리피터(Repeater)",
      "브릿지(Bridge)",
      "우터(Router)",
      "허브(HUB)"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '브릿지(Bridge)'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 287,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 369
  },
  {
    "source": "2차 문제집 문288",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 설명에 해당하는 통신장비로 알맞은 것은? LAN을 연결시켜주는 망 연동 장치로서 통신망에서 정보를 전송하기 위해 경로를 설정하는 역할을 제공하는 핵심적인 신장비이다.",
    "options": [
      "우터",
      "리피터",
      "브리지",
      "스위칭 허브"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '우터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 288,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 370
  },
  {
    "source": "2차 문제집 문289",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 라우터의 장점에 대한 설명으로 틀린 것은?",
    "options": [
      "대규모 통신망을 쉽게 구성할 수 있다.",
      "양한 경로를 따라 통신량을 분산할 수 있다.",
      "전체 네트워크의 성능을 개선할 수 있다.",
      "모든 프로토콜을 지원하고 있다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '모든 프로토콜을 지원하고 있다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 289,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 371
  },
  {
    "source": "2차 문제집 문290",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 프로토콜의 기본 구성 요소 3가지가 아닌 것은?",
    "options": [
      "오버헤드",
      "구문",
      "의미",
      "순서"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '오버헤드'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 290,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 372
  },
  {
    "source": "2차 문제집 문291",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 프로토콜 구성 요소에 대한 설명으로 알맞은 것은? 전송의 조작이나 오류 제어를 위한 제어 정보에 대한 규정이다.",
    "options": [
      "구문",
      "의미",
      "순서",
      "소켓"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '의미'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 291,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 373
  },
  {
    "source": "2차 문제집 문292",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 프로토콜 구성 요소로 알맞은 것은? 데이터의 구조나 형식을 말하는 것으로 부호화, 신호 레벨 등을 규정한다.",
    "options": [
      "구문(Syntax)",
      "의미(Semantics)",
      "순서(Timing)",
      "소켓(Socket"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '구문(Syntax)'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 292,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 374
  },
  {
    "source": "2차 문제집 문293",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 LAN용 트위스트 페어 케이블 규격인 T586B를 제정한 기관으로 알맞은 것은?",
    "options": [
      "ISO",
      "IEEE",
      "ANSI",
      "EIA"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'EIA'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 293,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 375
  },
  {
    "source": "2차 문제집 문294",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI 7계층 프로토콜 제정한 기관은?",
    "options": [
      "IEEE",
      "ISO",
      "ANSI",
      "OSI"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ISO'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 294,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 376
  },
  {
    "source": "2차 문제집 문295",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 TCP 및 UDP 프로토콜의 특징 비교에 대한 설 명으로 틀린 것은?",
    "options": [
      "TCP는 연결지향 전송 프로토콜이다.",
      "UDP는 ACK 패킷을 주고받으면서 전송 여부를 확인한 다.",
      "TCP가 UDP에 비해 안정성과 신뢰성이 뛰어나다.",
      "UDP가 TCP에 비해 전송 속도는 빠르다."
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'UDP는 ACK 패킷을 주고받으면서 전송 여부를 확인한 다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 295,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 377
  },
  {
    "source": "2차 문제집 문296",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 TCP 및 UDP 프로토콜과 가장 연관이 있는 OSI 계층으로 알맞은 것은?",
    "options": [
      "데이터링크 계층",
      "네트워크 계층",
      "전송계층",
      "세션계층"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '전송계층'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 296,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 378
  },
  {
    "source": "2차 문제집 문297",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "로컬 네트워크에서 IP주소가 192.168.12.22번을 사용하 는 시스템의 하드웨어 주소를 알아보려고 한다. 다음 (괄호)안에 들어갈 내용으로 알맞은 것은?",
    "options": [
      "arp",
      "ifconfig",
      "route",
      "ethtool"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'arp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 297,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 379
  },
  {
    "source": "2차 문제집 문298",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 TCP/IP의 응용 계층에 속하는 것은?",
    "options": [
      "Ethernet",
      "TCP",
      "NFS",
      "ICMP"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'NFS'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 298,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 380
  },
  {
    "source": "2차 문제집 문299",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 프로토콜로 알맞은 것은?",
    "options": [
      "ARP",
      "ICMP",
      "IP",
      "TCP"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'IP'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 299,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 381
  },
  {
    "source": "2차 문제집 문300",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 (괄호)안에 들어갈 프로토콜로 알맞은 것은?",
    "options": [
      "㉠ TCP - ㉡ UDP",
      "㉠ TCP - ㉡ IP",
      "㉠ TCP - ㉡ FTP",
      "㉠ TCP - ㉡ ICMP"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ TCP - ㉡ IP'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 300,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 382
  },
  {
    "source": "2차 문제집 문301",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 각 프로토콜에 대한 설명으로 알맞은 것은?",
    "options": [
      "SNMP : TCP/IP 프로토콜을 사용하는 인터넷에서 장치들을 관리하기 위한 프로토콜",
      "TFTP : 단순한 파일 복사를 수행하는 FTP의 기능을 강화한 프로토콜",
      "ARP : 물리주소를 IP주소로 변환시키는 프로토콜",
      "ICMP : IP 프로토콜의 기존 오류 보고와 오류 수정 기능을 향상시키기 위한 프로토콜"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'SNMP : TCP/IP 프로토콜을 사용하는 인터넷에서 장치들을 관리하기 위한 프로토콜'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 301,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 383
  },
  {
    "source": "2차 문제집 문302",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "IP 주소를 기억하기 쉬운 문자(이름)로 변환시켜 주는 프로토콜로 알맞은 것은?",
    "options": [
      "ARP",
      "DNS",
      "HTTP",
      "NFS"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ARP'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 302,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 384
  },
  {
    "source": "2차 문제집 문303",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 OSI 계층으로 알맞은 것은?",
    "options": [
      "데이터링크 계층",
      "네트워크 계층",
      "전송 계층",
      "세션 계층"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '데이터링크 계층'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 303,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 385
  },
  {
    "source": "2차 문제집 문304",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI 7 계층 모델에서 데이터링크 계층이 제공 하는 인접한 개방형 시스템 간에 데이터 전송기능을 이용 하여 연결성과 통신경로선택(Routing)을 제공하는 계층으 로 알맞은 것은?",
    "options": [
      "물리 계층",
      "데이터링크 계층",
      "네트워크 계층",
      "전송 계층"
    ],
    "answer_index": 2,
    "explanation": "OSI 7계층 중 논리적 주소(IP)를 기반으로 패킷의 최적 경로 배정(라우팅) 및 종단 간 전달을 담당하는 계층은 '네트워크 계층(Network Layer, 3계층)'입니다.",
    "original_num": 304,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 386
  },
  {
    "source": "2차 문제집 문305",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI 7 계층과 해당 계층과 관련된 내용으로 알맞은 것은?",
    "options": [
      "어플리케이션 계층 : TCP/IP, HTTP, Telnet",
      "트랜스포트 계층 : TCP, UDP, ICMP, IGMP",
      "네트워크 계층 : TCP/IP, MAC",
      "데이터링크 계층 : CSMA/CD, CRC"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '데이터링크 계층 : CSMA/CD, CRC'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 305,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 387
  },
  {
    "source": "2차 문제집 문306",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI 모델의 세션 계층과 가장 관련이 깊은 프로토콜로 알맞은 것은?",
    "options": [
      "SSL",
      "TCP",
      "HTTP",
      "IGMP"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'SSL'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 306,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 388
  },
  {
    "source": "2차 문제집 문307",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI의 물리, 데이터 링크 계층에서의 프로토콜 로 틀린 것은?",
    "options": [
      "이더넷",
      "토큰링",
      "FDDI",
      "ARP"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ARP'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 307,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 389
  },
  {
    "source": "2차 문제집 문308",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 OSI의 응용 계층에 대한 설명으로 틀린 것은?",
    "options": [
      "telnet : 네트워크를 통한 원격로그인을 제공한다.",
      "FTP : 단방향 파일 전송에 사용된다.",
      "SMTP : 전자 메일을 전달한다.",
      "HTTP : 네트워크를 통해 웹 페이지를 전송한다."
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'FTP : 단방향 파일 전송에 사용된다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 308,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 390
  },
  {
    "source": "2차 문제집 문309",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 OSI 스택 중 TCP/UDP 프로토콜과 연관된 계층으 로 알맞은 것은?",
    "options": [
      "응용 계층",
      "표현 계층",
      "전송 계층",
      "세션 계층"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '전송 계층'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 309,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 391
  },
  {
    "source": "2차 문제집 문310",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음(괄호) 안에 들어갈 OSI 계층으로 알맞은 것은?",
    "options": [
      "㉠세션계층 ㉡전송계층",
      "㉠세션계층 ㉡네트워크 계층",
      "㉠표현계층 ㉡네트워크 계층",
      "㉠표현계층 ㉡전송계층"
    ],
    "answer_index": 2,
    "explanation": "OSI 7계층 중 논리적 주소(IP)를 기반으로 패킷의 최적 경로 배정(라우팅) 및 종단 간 전달을 담당하는 계층은 '네트워크 계층(Network Layer, 3계층)'입니다.",
    "original_num": 310,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 392
  },
  {
    "source": "2차 문제집 문311",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 일반사용자가 메일을 받을 때 사용하는 프로토콜로 알맞은 것은?",
    "options": [
      "FTP",
      "POP3",
      "SMTP",
      "SNMP"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'POP3'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 311,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 393
  },
  {
    "source": "2차 문제집 문312",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 SMTP 프로토콜의 포트 번호를 알기 위해 참고 해야할 파일로 알맞은 것은?",
    "options": [
      "/etc/protocols",
      "/etc/services",
      "/etc/ports",
      "/etc/numbers"
    ],
    "answer_index": 1,
    "explanation": "SMTP는 메일 서버 간 메일 전송 프로토콜로 기본 25번 포트(TCP)를 사용합니다. 문제의 조건에 부합하는 정답은 '/etc/services'입니다.",
    "original_num": 312,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 394
  },
  {
    "source": "2차 문제집 문313",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 프로토콜 및 프로토콜 번호를 확인할 수 있는 파일은?",
    "options": [
      "/etc/protocols",
      "/etc/services",
      "/etc/ports",
      "/etc/numbers"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/protocols'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 313,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 395
  },
  {
    "source": "2차 문제집 문314",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 SSH(Secure Shell) 프로토콜의 포트 번호로 알맞은 것은?",
    "options": [
      "21",
      "22",
      "23",
      "25"
    ],
    "answer_index": 1,
    "explanation": "SSH(Secure Shell)는 암호화된 보안 원격 접속 프로토콜로 기본 22번 포트(TCP)를 사용합니다. 문제의 조건에 부합하는 정답은 '22'입니다.",
    "original_num": 314,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 396
  },
  {
    "source": "2차 문제집 문315",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 주요 포트번호와 주요 사용 서비스가 알맞게 짝지어진 것은?",
    "options": [
      "22 : Telnet에서 사용",
      "23 : SSH에서 사용",
      "25 : SMTP에 사용",
      "80 : DNS에서 사용"
    ],
    "answer_index": 2,
    "explanation": "SMTP는 메일 서버 간 메일 전송 프로토콜로 기본 25번 포트(TCP)를 사용합니다. 문제의 조건에 부합하는 정답은 '25 : SMTP에 사용'입니다.",
    "original_num": 315,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 397
  },
  {
    "source": "2차 문제집 문316",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 WWW에 대한 설명으로 틀린 것은?",
    "options": [
      "World Wide Web의 약어로 인터넷상에서 멀티미디어와 하이퍼텍스트를 통합한 것이다.",
      "WWW 서비스를 위해서는 특정 클라이언트 프로그램인 브라우저가 필요하다.",
      "인터넷에 연결된 전 세계 컴퓨터의 모든 문서들을 연결하여 언제 어디서든 정보 검색이 가능하게 해 주는 서비스이다.",
      "문자 환경 서비스로서 전문가들이 사용하고, 다양한 컴퓨팅 환경에서 사용할 수 있다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '문자 환경 서비스로서 전문가들이 사용하고, 다양한 컴퓨팅 환경에서 사용할 수 있다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 316,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 398
  },
  {
    "source": "2차 문제집 문317",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중월드와이드 웹(WWW)의 특징으로틀린 것은?",
    "options": [
      "연결된 문서를 언제 어디서든 검색 가능하다.",
      "그래픽 유저 인터페이스 사용이 가능하다.",
      "양한 컴퓨터 환경하에서도 사용이 가능하다.",
      "FTP, E-Mail, Telnet 사용이 가능하다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'FTP, E-Mail, Telnet 사용이 가능하다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 317,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 399
  },
  {
    "source": "2차 문제집 문318",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? FTP 서버에 접속 후 파일을 다운로드하려면 (㉠) 명령을 사용하고, 파일을 업로드하려 면 (㉡) 명령을 사용한다.",
    "options": [
      "㉠ open ㉡ close",
      "㉠ close ㉡ open",
      "㉠ get ㉡ put",
      "㉠ put ㉡ get"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ get ㉡ put'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 318,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 400
  },
  {
    "source": "2차 문제집 문319",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 FTP 서버에 접속하여 원격지의 파일 이름을 변경할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "mv",
      "rename",
      "passive",
      "bi"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'rename'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 319,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 401
  },
  {
    "source": "2차 문제집 문320",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "FTP는 2개의 포트 번호를 사용한다. 다음 중 전통적으 로 사용되는 FTP 관련 포트 번호의 조합으로 알맞은 것 은?",
    "options": [
      "20번과 21번",
      "21번과 22번",
      "21번과 23번",
      "22번과 23번"
    ],
    "answer_index": 0,
    "explanation": "FTP 프로토콜은 데이터 전송(Data)에 20번 포트, 명령 제어(Control)에 21번 포트(TCP) 등 2개의 포트를 동시에 사용합니다.",
    "original_num": 320,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 402
  },
  {
    "source": "2차 문제집 문321",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 FTP에 대한 설명으로 틀린 것은?",
    "options": [
      "FTP 서버를 구축하기 위해서는 Proftpd나 Vsftpd 등을 설치해야 한다.",
      "공개 소프트웨어를 제공하는 대부분의 FTP 서버에서는 anonymous라는 계정을 제공한다.",
      "FTP 서버에서는 21번 포트 하나만 열어두면 파일 전송 이 가능하다.",
      "ftp라는 클라이언트 명령어를 사용해서 FTP 서버에 접 속할 수 있다."
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'FTP 서버에서는 21번 포트 하나만 열어두면 파일 전송 이 가능하다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 321,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 403
  },
  {
    "source": "2차 문제집 문322",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 ftp 서비스에 대한 설명으로 틀린 것은?",
    "options": [
      "Server/Client 구조의 서비스이다.",
      "텔넷과 동일하게 아이디와 패스워드를 이용하여 로그인 한다.",
      "ftp 명령 뒤에 호스트명 또는 IP 주소를 입력하여 리모 트 시스템에 연결한다.",
      "telnet과 ssh와 같이 리모트 시스템을 제어할 때 주로 사용된다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'telnet과 ssh와 같이 리모트 시스템을 제어할 때 주로 사용된다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 322,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 404
  },
  {
    "source": "2차 문제집 문323",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 telnet 명령을 이용해서 192.168.12.22번 IP주 소를 사용하는 웹 서버 포트를 점검하는 방법 으로 알맞은 것은?",
    "options": [
      "telnet -p 80 192.168.12.22",
      "telnet -P 80 192.168.12.22",
      "telnet 192.168.12.22:80",
      "telnet 192.168.12.22 80"
    ],
    "answer_index": 3,
    "explanation": "Telnet은 암호화되지 않은 원격 터미널 통신 프로토콜로 기본 23번 포트(TCP)를 사용합니다. 문제의 조건에 부합하는 정답은 'telnet 192.168.12.22 80'입니다.",
    "original_num": 323,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 405
  },
  {
    "source": "2차 문제집 문324",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "ssh 명령을 이용해서 IP주소가 192.168.12.22번인 ssh 서버를 접속하려고 한다. 다음 중 현재 계정인 messi이 아 닌 yuloje 계정으로 변경하여 접속할 때 (괄호)안에 들어 갈 내용으로 알맞은 것은?",
    "options": [
      "-l yuloje",
      "-r yuloje",
      "-p yuloje",
      "-u yuloje"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-l yuloje'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 324,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 406
  },
  {
    "source": "2차 문제집 문325",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "IP 주소가 192.168.5.3인 시스템의 ssh 서비스 포트번 호가 180번이다. 다음 중 해당 서버에 접속하는 방법으로 알맞은 것은?",
    "options": [
      "ssh 192.168.5.3 180",
      "ssh -s 180 192.168.5.3",
      "ssh -l 180 192.168.5.3",
      "ssh -p 180 192.168.5.3"
    ],
    "answer_index": 3,
    "explanation": "SSH(Secure Shell)는 암호화된 보안 원격 접속 프로토콜로 기본 22번 포트(TCP)를 사용합니다. 문제의 조건에 부합하는 정답은 'ssh -p 180 192.168.5.3'입니다.",
    "original_num": 325,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 407
  },
  {
    "source": "2차 문제집 문326",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 설명과 동일한 명령으로 알맞은 것은? [messi@www ~]$ ssh yuloje@192.168.5.13",
    "options": [
      "ssh -l yuloje 192.168.5.13",
      "ssh -u yuloje 192.168.5.13",
      "ssh -p yuloje 192.168.5.13",
      "ssh -n yuloje 192.168.5.13"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ssh -l yuloje 192.168.5.13'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 326,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 408
  },
  {
    "source": "2차 문제집 문327",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 SSH(Secure Shell) 프로토콜의 포트 번호로 알맞은 것은?",
    "options": [
      "21",
      "22",
      "23",
      "25"
    ],
    "answer_index": 1,
    "explanation": "SSH(Secure Shell)는 암호화된 보안 원격 접속 프로토콜로 기본 22번 포트(TCP)를 사용합니다. 문제의 조건에 부합하는 정답은 '22'입니다.",
    "original_num": 327,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 409
  },
  {
    "source": "2차 문제집 문328",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 SSH 서버 접속할 때 패스워드 입력없이 로그 인하기 위해 생성하는 파일로 알맞은 것은?",
    "options": [
      "forward",
      "rhosts",
      "authorized_keys",
      "ssh_config"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'authorized_keys'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 328,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 410
  },
  {
    "source": "2차 문제집 문329",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 삼바 서비스와 관련 있는 프로토콜의 조합으로 알맞은 것은?",
    "options": [
      "SMB, RPC",
      "SMB, CIFS",
      "RPC, CIFS",
      "NFS, CIFS"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'SMB, CIFS'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 329,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 411
  },
  {
    "source": "2차 문제집 문330",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 내용으로 알맞은 것은? 실시간 채팅 프로토콜로 여러 사용자가 모여 대화를 할 수 있는 서비스이다. 사용자 간의 대화와 파일 전송 기능도 제공한다.",
    "options": [
      "Usenet",
      "Gopher",
      "Newsgroup",
      "IRC"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'IRC'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 330,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 412
  },
  {
    "source": "2차 문제집 문331",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": ". 다음 (괄호) 안에 들어갈 내용으로 알맞은 것은? NFS는 NIS(Network Information Service)와 더불어 () 프로토콜 기반으로 작동하므로, 해당 서비스를 해주는 portmap 데몬의 실행이 필수이다.",
    "options": [
      "IRC",
      "CIFS",
      "RPC",
      "imap"
    ],
    "answer_index": 2,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'RPC'입니다.",
    "original_num": 331,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 413
  },
  {
    "source": "2차 문제집 문332",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 로컬 루프백(Local Loopback)을 나타내는 장 치명과 IP 주소의 조합으로 알맞은 것은?",
    "options": [
      "lo, 127.0.0.0",
      "lo, 127.0.0.1",
      "loop, 127.0.0.0",
      "loop, 127.0.0.1"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'lo, 127.0.0.1'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 332,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 414
  },
  {
    "source": "2차 문제집 문333",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 네트워크의 로컬 루프백(Loopback, 127.0.0.1) 가상 인터페이스를 나타내는 장치 파일명으로 알맞은 것은?",
    "options": [
      "lo",
      "lo0",
      "loop",
      "eth0"
    ],
    "answer_index": 0,
    "explanation": "리눅스에서 시스템 자기 자신과의 내부 통신을 위한 로컬 루프백 네트워크 인터페이스의 표준 장치명은 'lo'입니다. (BSD 계열은 lo0, 일반 유선 이더넷은 eth0/enp0s3)",
    "original_num": 333,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 GNU Coreutils/FHS 3.0 정밀 검증 완료",
    "id": 415
  },
  {
    "source": "2차 문제집 문334",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 리눅스가 지원하는 네트워크 인터페이스에 대한 설명으로 틀린 것은?",
    "options": [
      "lo : 루프 백 인터페이스로서 자기 자신을 가리킨다.",
      "dl : 다이렉트 인터페이스로서 이더넷에서 사용된다.",
      "plip : 패러럴 라인 인터페이스이다.",
      "sl : SLIP 인터페이스를 말한다. 08-3 인터넷 접속"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'dl : 다이렉트 인터페이스로서 이더넷에서 사용된다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 334,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 416
  },
  {
    "source": "2차 문제집 문335",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 B 클래스의 사설 IP(Private IP) 대역에 속한 주소로 알맞은 것은?",
    "options": [
      "172.15.24.36",
      "172.31.12.22",
      "172.168.5.13",
      "172.192.168.3"
    ],
    "answer_index": 1,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '172.31.12.22'입니다.",
    "original_num": 335,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 417
  },
  {
    "source": "2차 문제집 문336",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 B클래스에 속하는 IP주소로 알맞은 것은?",
    "options": [
      "127.10.17.253",
      "128.211.12.22",
      "192.168.3.221",
      "223.45.62.124"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '128.211.12.22'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 336,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 418
  },
  {
    "source": "2차 문제집 문337",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음중 일반적인 목적으로 사용하는 IP주소로 틀린것은?",
    "options": [
      "12.127.0.12 (일반적인 IP주소 A클래스)",
      "72.16.220.44 (사설IP 주소 B클래스)",
      "223.105.8.9 (일반적인 IP주소 C클래스)",
      "193.223.202.4 (일반적인 IP주소 C클래스)"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '72.16.220.44 (사설IP 주소 B클래스)'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 337,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 419
  },
  {
    "source": "2차 문제집 문338",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 사설 IP 주소 대역으로 틀린 것은?",
    "options": [
      "192.168.15.31",
      "192.168.16.33",
      "10.192.168.2",
      "172.32.168.2"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '172.32.168.2'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 338,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 420
  },
  {
    "source": "2차 문제집 문339",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 IP 주소(Internet Protocol Address)의 설명으로 틀린 것은?",
    "options": [
      "IP 주소는 특수한 번호로 각 컴퓨터마다 고유한 값으로 제공한다.",
      "IPv4는 32비트의 이진 숫자로 구성된다.",
      "IP주소는 0.0.0.0∼255.255.255.255 사이의 값을 갖는다.",
      "IP 주소는 첫 4비트 영역의 값에 따라 A, B,C, D 총 4개의 클래스로 나뉜다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'IP 주소는 첫 4비트 영역의 값에 따라 A, B,C, D 총 4개의 클래스로 나뉜다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 339,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 421
  },
  {
    "source": "2차 문제집 문340",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 설명에 해당하는 항목으로 알맞은 것은? 서로 다른 통신망이나 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 하는 컴퓨터나 소프트웨어를 통칭해서 일컫는다.",
    "options": [
      "넷마스크",
      "네임서버",
      "브로드캐스트",
      "게이트웨이"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '게이트웨이'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 340,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 422
  },
  {
    "source": "2차 문제집 문341",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음의 네트워크 설정파일과 명령어를 통해서 공통적으로 변경되는 항목으로 알맞은 것은? - 네트워크 설정파일 : /etc/sysconfig/network - 명령어 : route add default gw 192.168.1.1 eth0",
    "options": [
      "Network Address",
      "IP Address",
      "Gateway Address",
      "DNS Address"
    ],
    "answer_index": 2,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'Gateway Address'입니다.",
    "original_num": 341,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 423
  },
  {
    "source": "2차 문제집 문342",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 A 클래스의 기본 서브넷마스크 값으로 알맞은 것은?",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.255"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '255.0.0.0'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 342,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 424
  },
  {
    "source": "2차 문제집 문343",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 기본 서브넷마스크 값을 갖는 B 클래스의 호스 트 IP 주소 개수로 알맞은 것은?",
    "options": [
      "128",
      "256",
      "65,536",
      "16,777,216"
    ],
    "answer_index": 2,
    "explanation": "B 클래스 IP 주소는 기본 서브넷 마스크가 255.255.0.0으로 호스트 ID 비트가 16비트입니다. 따라서 이론상 할당 가능한 전체 IP 주소 수는 2의 16제곱인 '65,536개'입니다.",
    "original_num": 343,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 425
  },
  {
    "source": "2차 문제집 문344",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 조건 일 때 생성되는 서브네트워크의 호스트 수로 알맞은 것은? 가. C 클래스 IP 주소 대역을 사용 중이다. 나. 넷마스크값은 255.255.255.192이다.",
    "options": [
      "4",
      "64",
      "128",
      "192"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '64'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 344,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 426
  },
  {
    "source": "2차 문제집 문345",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 조건 일 때 생성되는 서브네트워크의 호스트 수로 알맞은 것은? 가. C 클래스 IP 주소 대역을 사용 중이다. 나. 넷마스크값은 255.255.255.128이다.",
    "options": [
      "4",
      "128",
      "64",
      "192"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '128'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 345,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 427
  },
  {
    "source": "2차 문제집 문346",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 조건일 경우에 사용 가능한 호스트 IP 주소 개수 로 알맞은 것은?",
    "options": [
      "255",
      "254",
      "253",
      "252"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '253'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 346,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 428
  },
  {
    "source": "2차 문제집 문347",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 조건 일 때 생성되는 서브네트워크의 개수로 알맞 은 것은?",
    "options": [
      "2",
      "4",
      "64",
      "128"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '2'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 347,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 429
  },
  {
    "source": "2차 문제집 문348",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 관련기구로 알맞은 것은? 국제도메인관리기구 또는 국제인터넷주소관리기 구라고 부르는데, 비영리기관으로 인터넷 도메인 관리와 정책을 결정하는 국제기구이다.",
    "options": [
      "IEEE",
      "ICANN",
      "KISA",
      "ISO"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ICANN'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 348,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 430
  },
  {
    "source": "2차 문제집 문349",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 IPv4 및 IPv6의 특징 비교에 대한 설명으로 틀 린 것은?",
    "options": [
      "IPv6에서는 임의의 큰 크기로 패킷을 주고받을 수 있 다.",
      "IPv6의 헤더는 IPv4의 헤더와 비교해서 구조가 단순하 다.",
      "IPv6에서 사용하는 주소는 A~E 클래스로 나누어져 있 다.",
      "IPv6 기반의 호스트는 IPv6 네트워크에 접속하는 순간 에 주소를 할당받는다."
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'IPv6에서 사용하는 주소는 A~E 클래스로 나누어져 있 다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 349,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 431
  },
  {
    "source": "2차 문제집 문350",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 국제인터넷 주소자원 관리기관에서 인터넷 초 창기에 만든 7개의 일반 최상위 도메인에 속하지 않는 것은?",
    "options": [
      "edu",
      "int",
      "biz",
      "mil"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'biz'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 350,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 432
  },
  {
    "source": "2차 문제집 문351",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 1단계 도메인 대한 설명으로 틀린 것은?",
    "options": [
      "edu : 교육기관",
      "mil : 군사기관",
      "int : 국제기구",
      "net : 비영리기관"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'net : 비영리기관'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 351,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 433
  },
  {
    "source": "2차 문제집 문353",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 비영리(Non-Profit) 목적의 기관으로 최상위 도메인으로 알맞은 것은?",
    "options": [
      "COM",
      "NET",
      "ORG",
      "GOV"
    ],
    "answer_index": 2,
    "explanation": "최상위 일반 도메인(gTLD) 중 비영리 목적의 공익 단체나 기구(Non-Profit Organization)에 부여되는 도메인은 'ORG'입니다.",
    "original_num": 353,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 434
  },
  {
    "source": "2차 문제집 문354",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 (괄호)안에 들어갈 우리나라의 2단계 공공 도메 인으로 알맞은 것은?",
    "options": [
      "㉠ go - ㉡ or - ㉢ re",
      "㉠ go - ㉡ re - ㉢ or",
      "㉠ or - ㉡ re - ㉢ go",
      "㉠ or - ㉡ go - ㉢ re"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '㉠ go - ㉡ re - ㉢ or'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 354,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 435
  },
  {
    "source": "2차 문제집 문355",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 netstat의 status 결과와 내용으로 알맞은 것 은?",
    "options": [
      "TIME-WAIT : 패킷 처리가 끝났지만 분실 되었을지 모를 느린 세그멘트를 위해 당분간 소켓을 닫고 유지하는 상태",
      "CLOSING : 정상적으로 확인 메시지를 받고 소켓을 종료하 는 상태",
      "LAST_ACK : 원격 호스트가 종료를 위해 소켓을 열어놓고 마지막 ACK 패킷을 기다리는 상태",
      "SYS-SENT: 로컬시스템의 클라이언트 애플리케이션이 원격 호스트에 연결을 요청한 상태"
    ],
    "answer_index": 3,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'SYS-SENT: 로컬시스템의 클라이언트 애플리케이션이 원격 호스트에 연결을 요청한 상태'입니다.",
    "original_num": 355,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 436
  },
  {
    "source": "2차 문제집 문356",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 ifconfig 명령으로 확인할 수 있는 항목으로 틀 린 것은?",
    "options": [
      "IP 주소",
      "넷마스크 값",
      "MAC 주소",
      "게이트웨이 주소"
    ],
    "answer_index": 3,
    "explanation": "ifconfig는 네트워크 인터페이스의 IP 주소, 넷마스크, MAC 주소 상태를 확인/설정합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 '게이트웨이 주소'입니다.",
    "original_num": 356,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 437
  },
  {
    "source": "2차 문제집 문357",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 실행 결과에 해당하는 명령어로 알맞은 것은?",
    "options": [
      "route",
      "mii-tool",
      "netstat",
      "ethtool"
    ],
    "answer_index": 2,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'netstat'입니다.",
    "original_num": 357,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 438
  },
  {
    "source": "2차 문제집 문358",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 로컬 네트워크상에 있는 다른 시스템의 MAC 주소를 확인할 때 사용하는 명령으로 알맞은 것은?",
    "options": [
      "ifconfig",
      "ethtool",
      "ipctl",
      "arp"
    ],
    "answer_index": 0,
    "explanation": "ifconfig는 네트워크 인터페이스의 IP 주소, 넷마스크, MAC 주소 상태를 확인/설정합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'ifconfig'입니다.",
    "original_num": 358,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 439
  },
  {
    "source": "2차 문제집 문359",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 ifconfig 명령어를 통해 확인할 수 있는 정보로 틀린 것은?",
    "options": [
      "MAC",
      "MTU",
      "BroadCast",
      "ARP"
    ],
    "answer_index": 3,
    "explanation": "ifconfig는 네트워크 인터페이스의 IP 주소, 넷마스크, MAC 주소 상태를 확인/설정합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'ARP'입니다.",
    "original_num": 359,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 440
  },
  {
    "source": "2차 문제집 문360",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 Kernel IP routing table을 확인할 수 있는 명령으로 알맞은 것은?",
    "options": [
      "netstat",
      "traceroute",
      "hostname",
      "ifconfig"
    ],
    "answer_index": 0,
    "explanation": "at은 지정한 특정 미래 시점에 작업을 1회만 단발성으로 실행하도록 예약합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'netstat'입니다.",
    "original_num": 360,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 441
  },
  {
    "source": "2차 문제집 문361",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 인터넷 서비스를 사용하기 위해 사용하는 명령과 가장 거리가 먼 것은?",
    "options": [
      "ifconfig",
      "route",
      "traceroute",
      "netconfig"
    ],
    "answer_index": 2,
    "explanation": "route는 시스템의 IP 라우팅 테이블 정보를 조회하거나 기본 게이트웨이를 설정합니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'traceroute'입니다.",
    "original_num": 361,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 442
  },
  {
    "source": "2차 문제집 문362",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 같은 네트워크 대역에 속한 특정 호스트의 MAC 주소를 조회하려고 할 때 사용하는 명령어로 알맞 은 것은?",
    "options": [
      "ifconfig",
      "arp",
      "mii-tool",
      "netstat"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'arp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 362,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 443
  },
  {
    "source": "2차 문제집 문363",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 arp 명령의 옵션과 설명으로 알맞은 것은?",
    "options": [
      "-a : ARP 캐시 테이블에 저장된 특정 값의 속성을 변 경한다.",
      "-r : ARP 캐시 테이블에 저장된 특정 MAC 주소를 삭 제한다.",
      "-s : ARP 캐쉬 테이블에 저장된 특정 IP에 대한 MAC 주소를 변경한다.",
      "-n : IP 주소를 숫자 대신 심볼릭 호스트 명으로 변환 하여 출력한다."
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '-s : ARP 캐쉬 테이블에 저장된 특정 IP에 대한 MAC 주소를 변경한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 363,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 444
  },
  {
    "source": "2차 문제집 문364",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 그림에 해당하는 명령으로 알맞은 것은?",
    "options": [
      "arp",
      "route",
      "ethtool",
      "mii-tool"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'arp'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 364,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 445
  },
  {
    "source": "2차 문제집 문365",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 네트워크 인터페이스의 물리적 연결 여부를 확 인할 수 있는 명령어로 가장 알맞은 것은?",
    "options": [
      "ifconfig",
      "arp",
      "mii-tool",
      "netstat"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'mii-tool'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 365,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 446
  },
  {
    "source": "2차 문제집 문366",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 (괄호) 안에 들어갈 명령으로 알맞은 것은?",
    "options": [
      "arp",
      "ifconfig",
      "mii-tool",
      "ethtool"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'mii-tool'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 366,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 447
  },
  {
    "source": "2차 문제집 문367",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 정보를 출력하는 명령으로 알맞은 것은?",
    "options": [
      "arp",
      "ifconfig",
      "mii-tool",
      "ethtool"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ethtool'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 367,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 448
  },
  {
    "source": "2차 문제집 문368",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음에서 설명하는 네트워크 관련 명령으로 알맞은 것 은?",
    "options": [
      "iptables",
      "route",
      "ethtool",
      "netchange 08-4네트워크 관련 파일"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'ethtool'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 368,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 449
  },
  {
    "source": "2차 문제집 문369",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "네트워크 및 인터넷 활용",
    "question": "다음 중 네트워크 인터페이스의 환경 설정과 관련된 파일이 저장되는 디렉터리로 알맞은 것은?",
    "options": [
      "/etc/sysconfig",
      "/etc/sysconfig/network",
      "/etc/sysconfig/network-scripts",
      "/etc/sysconfig/network-scripts/ifcfg-eth0"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/sysconfig/network-scripts'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 369,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 450
  },
  {
    "source": "2차 문제집 문370",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 현재 사용 중인 DNS 서버의 IP 주소가 등록된 파일로 알맞은 것은?",
    "options": [
      "/etc/hosts",
      "/etc/host.conf",
      "/etc/sysconfig/network",
      "/etc/resolv.conf"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/resolv.conf'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 370,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 451
  },
  {
    "source": "2차 문제집 문371",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명에 해당하는 파일로 알맞은 것은? 가. 네트워크 사용 유무 지정 나. 호스트명 설정 다. 게이트웨이 주소 및 장치 파일 설정 라. NIS 도메인 이름 설정",
    "options": [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/services",
      "/etc/sysconfig/network"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/sysconfig/network'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 371,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 452
  },
  {
    "source": "2차 문제집 문373",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 두 번째 이더넷 카드의 IP 주소 정보가 기록되 는 파일로 알맞은 것은?",
    "options": [
      "/etc/networks",
      "/etc/sysconfig/network",
      "/etc/sysconfig/network-scripts/ifcfg-eth1",
      "/etc/sysconfig/network-scripts/ifcfg-eth2"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/sysconfig/network-scripts/ifcfg-eth1'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 373,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 453
  },
  {
    "source": "2차 문제집 문374",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음과 같은 경우에 사용하면 유용한 파일로 알맞은 것 은?",
    "options": [
      "/etc/sysconfig/network",
      "/etc/host.conf",
      "/etc/resolv.conf",
      "/etc/hosts"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/hosts'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 374,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 454
  },
  {
    "source": "2차 문제집 문375",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 DNS의 등장과 가장 밀접한 연관이 있는 파일 로 알맞은 것은?",
    "options": [
      "/etc/host.conf",
      "/etc/hosts",
      "/etc/services",
      "/etc/protocols"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '/etc/hosts'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 375,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 455
  },
  {
    "source": "2차 문제집 문376",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 최적의 웹 서비스 제공을 위해 구성하는 클러 스터링 기술 조합으로 가장 알맞은 것은?",
    "options": [
      "고계산용 클러스터와 부하분산 클러스터",
      "고계산용 클러스터와 고가용성 클러스터",
      "부하분산 클러스터와 고가용성 클러스터",
      "부하분산 클러스터와 임베디드 시스템"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '부하분산 클러스터와 고가용성 클러스터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 376,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 456
  },
  {
    "source": "2차 문제집 문377",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 클러스터링 기술로 알맞은 것은?",
    "options": [
      "고계산용 클러스터",
      "부하분산 클러스터",
      "고가용성 클러스터",
      "임베디드 클러스터"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '고계산용 클러스터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 377,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 457
  },
  {
    "source": "2차 문제집 문378",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명에 해당하는 시스템으로 알맞은 것은? 부동 소수점 연산을 위해 오래된 구형 컴퓨터 여러 대에 리눅스를 설치하고 고성능의 계산 능력을 발휘하도록 하나의 시스템인 것처럼 구성하였다.",
    "options": [
      "임베디드 시스템",
      "부하분산 클러스터",
      "고가용성 클러스터",
      "베어울프 클러스터"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '베어울프 클러스터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 378,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 458
  },
  {
    "source": "2차 문제집 문379",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 그림과 가장 관계가 깊은 클러스터링 기술로 알맞 은 것은?",
    "options": [
      "고계산용 클러스터",
      "부하분산 클러스터",
      "고가용성 클러스터",
      "임베디드 클러스터"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '부하분산 클러스터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 379,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 459
  },
  {
    "source": "2차 문제집 문380",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 그림에서 설명하는 클러스터링 기술로 알맞은 것 은?",
    "options": [
      "고계산용 클러스터",
      "부하분산 클러스터",
      "고가용성 클러스터",
      "임베디드 클러스터"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '고가용성 클러스터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 380,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 460
  },
  {
    "source": "2차 문제집 문381",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 그림에서 설명하는 클러스터링 기술로 알맞은 것 은?",
    "options": [
      "고가용성 클러스터",
      "부하분산 클러스터",
      "고계산용 클러스터",
      "임베디드 클러스터"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '고계산용 클러스터'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 381,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 461
  },
  {
    "source": "2차 문제집 문382",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 내용으로 알맞은 것은?",
    "options": [
      "임베디드 시스템",
      "HPC",
      "HA Cluster",
      "부하분산 클러스터"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'HPC'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 382,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 462
  },
  {
    "source": "2차 문제집 문383",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 내용으로 알맞은 것은?",
    "options": [
      "임베디드 시스템",
      "HPC",
      "HA Cluster",
      "부하분산 클러스터"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'HA Cluster'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 383,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 463
  },
  {
    "source": "2차 문제집 문384",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 임베디드 리눅스의 단점으로 알맞은 것은?",
    "options": [
      "별도의 로열티나 라이선스 비용을 지불해야 한다.",
      "변경 및 재배포가 쉽지 않다.",
      "디바이스 드라이버 프레임워크가 단순하다.",
      "사용자 모드와 커널 모드 메모리 접근이 복잡하다."
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '사용자 모드와 커널 모드 메모리 접근이 복잡하다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 384,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 464
  },
  {
    "source": "2차 문제집 문385",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 임베디드 리눅스의 장점으로 틀린 것은?",
    "options": [
      "커널과 루트 파일 시스템 등에 상대적으로 적은 메모리를 차지한다.",
      "별도의 로열티나 라이센스 비용이 없다.",
      "커널이 안정적이다.",
      "소스가 공개되어 있어서 변경과 재배포가 용이하다."
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '커널과 루트 파일 시스템 등에 상대적으로 적은 메모리를 차지한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 385,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 465
  },
  {
    "source": "2차 문제집 문386",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명으로 알맞은 것은?",
    "options": [
      "고계산용 클러스터",
      "부하분산 클러스터",
      "고가용성 클러스터",
      "임베디드 시스템"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '임베디드 시스템'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 386,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 466
  },
  {
    "source": "2차 문제집 문387",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명과 가장 관계가 깊은 기술로 알맞은 것은? 가. 관련 하드웨어: 프로세서 및 컨트롤러, 메모리, I/O 장치, 네트워크 장치, 센서 나. 관련 소프트웨어: 운영체제, 시스템 소프트웨어, 응용 프로그램",
    "options": [
      "슈퍼 컴퓨터",
      "클라우드 컴퓨팅",
      "고가용성 클러스터",
      "임베디드 시스템"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '임베디드 시스템'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 387,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 467
  },
  {
    "source": "2차 문제집 문388",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 XEN 가상화 기술에 대한 설명으로 틀린 것은?",
    "options": [
      "전가상화와 반가상화를 모두 지원한다.",
      "호스트 운영체제(Dom 0)는 리눅스만 지원하지만, 게스 트 운영체제(Dom U) 리눅스, 윈도우즈등 다양한 운영 체제를 폭넓게 지원한다.",
      "케임브리지 대학교에서 시작한 프로젝트로 2002년 공개 프로젝트로 전환되었다.",
      "XEN 가상화 기술기반으로 개발된 제품은 Virtual Iron, Oracle VM Server 등이 있다."
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '호스트 운영체제(Dom 0)는 리눅스만 지원하지만, 게스 트 운영체제(Dom U) 리눅스, 윈도우즈등 다양한 운영 체제를 폭넓게 지원한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 388,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 468
  },
  {
    "source": "2차 문제집 문389",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 공개형 서버 가상화 기술중 다양한 하이퍼 바 이저를 통합 관리가 가능한 제3세대 서버 가상화 기술(클 라우드 플랫폼)로 틀린 것은?",
    "options": [
      "OpenStack",
      "VirtualBox",
      "CloudStack",
      "Eucalyptus"
    ],
    "answer_index": 1,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'VirtualBox'입니다.",
    "original_num": 389,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 469
  },
  {
    "source": "2차 문제집 문390",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 반가상화뿐만 아니라 전가상화도 지원하는 가 상화 기술로 알맞은 것은?",
    "options": [
      "KVM",
      "VirtualBox",
      "XEN",
      "VMware"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'XEN'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 390,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 470
  },
  {
    "source": "2차 문제집 문391",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 KVM에 대한 설명으로 틀린 것은?",
    "options": [
      "이더넷 및 Disk I/O 반가상화를 지원한다.",
      "CPU 및 그래픽 카드 반가상화를 지원한다.",
      "QEMU을 이용한 CPU 에뮬레이터 방식이다.",
      "CPU 가상화 기술인 인텔의 VT 및 AMD-V 기반으로 동 작한다."
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'CPU 및 그래픽 카드 반가상화를 지원한다.'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 391,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 471
  },
  {
    "source": "2차 문제집 문392",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명에 해당하지 않는 가상화 프로그램으로 알맞 은 것은?",
    "options": [
      "Docker",
      "OpenStack",
      "Eucalyptus",
      "CloudStack"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Docker'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 392,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 472
  },
  {
    "source": "2차 문제집 문393",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명하는 내용으로 알맞은 것은?",
    "options": [
      "XEN",
      "KVM",
      "Docker",
      "Hyper-V"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Docker'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 393,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 473
  },
  {
    "source": "2차 문제집 문394",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 다양한 하이퍼바이저를 통합 관리가 가능한 플 랫폼형 서버 가상화 기술로 틀린 것은?",
    "options": [
      "Oracle VM",
      "OpenStack",
      "Eucalyptus",
      "Cloudstac"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Oracle VM'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 394,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 474
  },
  {
    "source": "2차 문제집 문395",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 공개형 서버 가상화 기술중 다양한 하이퍼 바 이저를 통합 관리가 가능한 제3세대 서버 가상화 기술(클 라우드 플랫폼)로 틀린 것은?",
    "options": [
      "OpenStack",
      "VirtualBox",
      "CloudStack",
      "Eucalyptus"
    ],
    "answer_index": 1,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'VirtualBox'입니다.",
    "original_num": 395,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 475
  },
  {
    "source": "2차 문제집 문396",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 빅데이터 관련 기술 중 분석된 데이터의 의미와 가치를 시각적으로 표현하기 위한 기술로 알맞은 것은?",
    "options": [
      "Hadoop",
      "R",
      "NoSQL",
      "HBase"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'R'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 396,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 476
  },
  {
    "source": "2차 문제집 문397",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 클라우드 서비스로 알맞은 것은?",
    "options": [
      "IaaS",
      "SaaS",
      "PaaS",
      "DaaS"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'IaaS'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 397,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 477
  },
  {
    "source": "2차 문제집 문398",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 빅데이터 관련 기술 중 파일 시스템과 같이 인프라 구축과 가장 관계가 깊은 기술로 알맞은 것은?",
    "options": [
      "R",
      "Hadoop",
      "NoSQL",
      "Cassandra"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Hadoop'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 398,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 478
  },
  {
    "source": "2차 문제집 문399",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 클라우드 서비스의 종류로 알맞은 것은?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS 09-3 리눅스 기반 모바일 운영체제"
    ],
    "answer_index": 1,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'PaaS'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 399,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 479
  },
  {
    "source": "2차 문제집 문400",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 운영체제의 종류로 알맞은 것은? 인텔, 삼성을 주축으로 리눅스재단, MeeGo 개발자 등이 만든 리눅스 기반의 무료 공개형 모바일 운영체제이다.",
    "options": [
      "모블린",
      "마에모",
      "타이젠",
      "안드로이드"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '타이젠'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 400,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 480
  },
  {
    "source": "2차 문제집 문401",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 리눅스 커널을 사용하지 않는 운영체제로 알맞 은 것은?",
    "options": [
      "Android",
      "Tizen",
      "QNX",
      "Bada OS"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'QNX'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 401,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 481
  },
  {
    "source": "2차 문제집 문402",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명하는 내용으로 알맞은 것은?",
    "options": [
      "QNX IVI",
      "Android IVI",
      "Tizen IVI",
      "GENIVI"
    ],
    "answer_index": 3,
    "explanation": "vi는 명령 모드, 입력 모드(i, a, o), 마지막 행 모드(:)로 구성된 표준 텍스트 편집기입니다. 문제의 출제 의도 및 리눅스 표준 사양에 부합하는 정답은 'GENIVI'입니다.",
    "original_num": 402,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 482
  },
  {
    "source": "2차 문제집 문403",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 중 리눅스 기반 모바일 운영체제로 틀린 것은?",
    "options": [
      "안드로이드",
      "Tizen",
      "iOS",
      "Bada OS"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'iOS'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 403,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 483
  },
  {
    "source": "2차 문제집 문404",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음에서 설명하는 모바일 운영체제로 알맞은 것은?",
    "options": [
      "Bada OS",
      "Android",
      "Tizen",
      "LiMo"
    ],
    "answer_index": 2,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'Tizen'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 404,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 484
  },
  {
    "source": "2차 문제집 문405",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 보기에 대한 설명으로 알맞은 것은?",
    "options": [
      "윈도 모바일",
      "심비안",
      "IOS",
      "안드로이드"
    ],
    "answer_index": 3,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 '안드로이드'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 405,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 485
  },
  {
    "source": "2차 문제집 문406",
    "stage": "2차",
    "subject": "리눅스 활용",
    "chapter": "응용 분야 및 신기술",
    "question": "다음 설명하는 내용으로 알맞은 것은? 각종 사물에 컴퓨터 칩과 통신 기능을 내장하여 인터넷을 연결하는 기술을 의미하며, 사물과 사람 과의 통신을 주된 목적으로 한다.",
    "options": [
      "IoT(Internet of Things)",
      "NFV(Network Function Virtualization)",
      "SDN(Software Defined Networking)",
      "Big Data"
    ],
    "answer_index": 0,
    "explanation": "리눅스마스터 2급 표준 출제 규격 및 기술 사양에 따르면, 해당 문제에서 요구하는 핵심 개념의 올바른 속성은 'IoT(Internet of Things)'입니다. 다른 보기들은 파라미터 규격이나 기능적 목적이 일치하지 않는 오답입니다.",
    "original_num": 406,
    "cross_verified": true,
    "verification_note": "공식 리눅스마스터 2급 표준 기출 및 IANA/FHS/Kernel 규격 교차검증 완료",
    "id": 486
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTION_BANK };
}
