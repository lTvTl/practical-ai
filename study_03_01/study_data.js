/**
 * 리눅스마스터 2급 초단기 합격을 위한 핵심 요약 정리집 (Study Hub Database)
 * 1차 필수 이론 및 2차 10대 핵심 챕터 완벽 망라
 */

const STUDY_CHAPTERS = [
  {
    "id": "stage1_core",
    "stage": "1차",
    "title": "📌 1차 단기 합격 필수 요약 (리눅스의 이해 & 역사 & 라이선스)",
    "description": "1차 필기시험의 60% 이상을 차지하는 오픈소스 역사, 라이선스 완벽 비교 및 필수 기본 명령어",
    "sections": [
      {
        "subtitle": "1. 리눅스의 탄생과 오픈소스 역사",
        "content": "• <b>리누스 토발즈(Linus Torvalds)</b>: 1991년 핀란드 헬싱키 대학교 재학 중 Minix를 참고하여 x86 아키텍처용 리눅스 커널(버전 0.01) 개발 발표.\n• <b>리처드 스톨먼(Richard Stallman)</b>: 1984년 유닉스 호환 자유 소프트웨어 시스템 개발을 위한 <b>GNU 프로젝트</b> 선언, 1985년 <b>자유 소프트웨어 재단(FSF)</b> 설립.\n• <b>GNU(GNU's Not Unix)</b>: 운영체제에 필요한 컴파일러(GCC), 쉘(Bash), 기본 명령어 유틸리티(Coreutils) 등을 개발하였으나 커널(Hurd) 개발이 지연되던 중, 리눅스 커널과 결합하여 완전한 운영체제(GNU/Linux) 완성."
      },
      {
        "subtitle": "2. 오픈소스 소프트웨어 라이선스 완벽 비교 (빈출 1위)",
        "table": {
          "headers": [
            "라이선스",
            "2차 저작물 소스코드 공개 의무",
            "독점 소프트웨어 결합",
            "주요 특징 및 대표 소프트웨어"
          ],
          "rows": [
            [
              "GPL (v2 / v3)",
              "의무 (동일한 GPL 적용 필수)",
              "불가 (전체 소스 공개 필요)",
              "가장 대표적인 강력한 카피레프트(Copyleft). 리눅스 커널, Git, Bash"
            ],
            [
              "LGPL",
              "수정본만 공개 (단순 링크 시 비공개 허용)",
              "허용 (동적/정적 링크 가능)",
              "라이브러리용 라이선스로 독점 상용 SW와의 연동 허용. glibc 등"
            ],
            [
              "BSD 라이선스",
              "의무 없음 (비공개 상용화 허용)",
              "자유롭게 허용",
              "저작권 고지만 유지하면 소스코드 비공개 및 독점 상용화 가능. Nginx, FreeBSD"
            ],
            [
              "Apache 라이선스",
              "의무 없음 (비공개 상용화 허용)",
              "자유롭게 허용",
              "특허권 양도 조항 포함, 아파치 재단 SW 전반. Apache HTTP Server, Hadoop, Android"
            ],
            [
              "MIT 라이선스",
              "의무 없음 (극히 제한 없음)",
              "자유롭게 허용",
              "저작권 및 허가 표시만 유지하면 모든 사용/수정/배포/상업적 이용 가능. Node.js, jQuery"
            ]
          ]
        }
      },
      {
        "subtitle": "3. 리눅스 배포판 3대 계열",
        "content": "• <b>레드햇(Red Hat) 계열</b>: RHEL, CentOS, Fedora, Rocky Linux. 패키지 관리자로 <b>RPM, YUM, DNF</b> 사용. 기업 서버 환경에서 가장 널리 사용.\n• <b>데비안(Debian) 계열</b>: Debian, Ubuntu, Linux Mint. 패키지 관리자로 <b>dpkg, apt-get, apt</b> 사용. 데스크톱 및 클라우드 인스턴스에서 표준적.\n• <b>슬랙웨어(Slackware) 계열</b>: Slackware, openSUSE (SUSE 계열 분파). 안정성과 유닉스 전통 구조 고수."
      },
      {
        "subtitle": "4. 시스템 실행 레벨 (Runlevel)",
        "content": "• <b>0번</b>: 시스템 종료 (Halt / Poweroff)\n• <b>1번 (Single User)</b>: 단일 사용자 모드 (시스템 복구, root 패스워드 재설정 시 사용)\n• <b>2번</b>: 다중 사용자 모드 (네트워크 기능 미지원 CLI)\n• <b>3번 (Multi-User CLI)</b>: 네트워크를 지원하는 표준 다중 사용자 텍스트 모드\n• <b>4번</b>: 미사용 (사용자 정의 예약)\n• <b>5번 (X11 / GUI)</b>: 다중 사용자 그래픽 모드 (X 윈도우 환경 실행)\n• <b>6번</b>: 시스템 재부팅 (Reboot)"
      }
    ]
  },
  {
    "id": "chap01_filesystem",
    "stage": "2차",
    "title": "01장. 파일 시스템 및 권한/소유권 관리",
    "description": "리눅스 디렉터리 구조, chmod/chown 명령어, umask 계산법, 특수권한(SetUID/SetGID/Sticky), fdisk/mount/quota",
    "sections": [
      {
        "subtitle": "1. 표준 파일 시스템 계층 구조 (FHS)",
        "content": "• <code>/ (Root)</code>: 최상위 루트 디렉터리\n• <code>/bin</code>: 기본 필수 실행 명령 파일 (ls, cp, mv, rm, cat 등)\n• <code>/sbin</code>: 시스템 관리자(root) 전용 시스템 관리 명령어 (fdisk, reboot, ifconfig 등)\n• <code>/etc</code>: 시스템 환경 설정 파일 전반 (/etc/passwd, /etc/fstab, /etc/resolv.conf 등)\n• <code>/var</code>: 시스템 운용 중 가변적인 데이터 저장 (로그 /var/log, 메일 스풀, 웹 루트)\n• <code>/proc</code>: 커널 및 실행 중인 프로세스 정보를 담고 있는 메모리 상의 가상 파일 시스템\n• <code>/home</code>: 일반 사용자들의 기본 홈 디렉터리 (/home/username)\n• <code>/usr/local</code>: 사용자가 직접 소스 컴파일하여 설치하는 프로그램 디렉터리"
      },
      {
        "subtitle": "2. 파일 허가권(Permission)과 chmod 계산법",
        "content": "• 권한 표기: <code>r (읽기: 4)</code>, <code>w (쓰기: 2)</code>, <code>x (실행: 1)</code>\n• 3단 그룹 구분: [소유자(u)] [소유그룹(g)] [기타사용자(o)] [모두(a)]\n• 예: <code>chmod 755 file</code> → rwxr-xr-x (소유자 7=4+2+1, 그룹 5=4+1, 기타 5=4+1)\n• 기호 모드: <code>chmod u+x,g-w test.sh</code>"
      },
      {
        "subtitle": "3. umask 공식 (단골 계산 문제)",
        "content": "• <b>디렉터리 기본 권한</b>: <code>최대 권한(777) - umask</code>\n  - 예: umask가 022인 경우 → 777 - 022 = <b>755 (drwxr-xr-x)</b>\n• <b>일반 파일 기본 권한</b>: <code>최대 권한(666) - umask</code> (파일은 생성 시 실행 x 권한이 원천 제외됨)\n  - 예: umask가 022인 경우 → 666 - 022 = <b>644 (-rw-r--r--)</b>\n  - 만약 umask가 027인 경우 → 666 - 027 → (6-0)(6-2)(6-7=음수불가/비트AND) = <b>640 (-rw-r-----)</b>"
      },
      {
        "subtitle": "4. 특수 권한 3인방 (SetUID, SetGID, Sticky Bit)",
        "table": {
          "headers": [
            "특수 권한",
            "8진수 값",
            "표기 위치 및 형태",
            "역할 및 대표 사례"
          ],
          "rows": [
            [
              "SetUID",
              "4000",
              "소유자 x 자리에 s (실행 권한 없으면 S)",
              "프로세스 실행 중 소유자(root) 권한으로 일시 동작. /usr/bin/passwd"
            ],
            [
              "SetGID",
              "2000",
              "소유그룹 x 자리에 s (실행 권한 없으면 S)",
              "실행 중 그룹 권한 획득, 디렉터리에 설정 시 하위 생성 파일의 그룹 소유권 상속"
            ],
            [
              "Sticky Bit",
              "1000",
              "기타사용자 x 자리에 t (실행 권한 없으면 T)",
              "공유 디렉터리(/tmp)에 설정되어, 누구나 파일 생성은 가능하나 본인이 생성한 파일만 삭제 가능"
            ]
          ]
        }
      },
      {
        "subtitle": "5. 파일 시스템 구축 및 마운트 명령어",
        "content": "• <code>fdisk -l</code>: 디스크 파티션 테이블 확인 및 파티션 분할 작업\n• <code>mkfs (mke2fs)</code>: 파티션에 리눅스 파일 시스템(ext4, xfs 등) 포맷 생성\n• <code>mount [-t 유형] [-o 옵션] 장치명 마운트포인트</code>: 파일 시스템 연결\n• <code>/etc/fstab</code>: 부팅 시 자동 마운트 설정 파일 (장치명, 마운트포인트, 파일시스템, 마운트옵션, dump여부, fsck검사순서의 6개 필드)\n• <code>fsck (e2fsck)</code>: 비정상 종료 시 손상된 파일 시스템 점검 및 복구 도구"
      }
    ]
  },
  {
    "id": "chap02_shell",
    "stage": "2차",
    "title": "02장. Shell(쉘) 및 환경설정",
    "description": "쉘의 역사와 종류, 주요 환경변수(PATH, HOME, SHELL, PS1), alias, history 및 쉘 설정 파일",
    "sections": [
      {
        "subtitle": "1. 주요 쉘(Shell)의 특징 비교",
        "content": "• <b>sh (Bourne Shell)</b>: 스티브 본 개발, 유닉스 최초의 표준 쉘. 가볍고 간결하나 히스토리, alias 기능 부재.\n• <b>csh / tcsh (C Shell)</b>: 빌 조이 개발, C 언어 구문과 유사. 히스토리, 명령행 편집, alias 기능 최초 도입.\n• <b>ksh (Korn Shell)</b>: 데이비드 콘 개발, 본 쉘과 csh의 장점을 결합하여 강력한 프로그래밍 기능 제공.\n• <b>bash (Bourne-Again Shell)</b>: 브라이언 폭스 개발, GNU 프로젝트의 기본 쉘. 리눅스 표준 기본 쉘로 sh 호환 및 자동완성, 명령행 편집 완벽 지원.\n• <b>zsh</b>: bash와 tcsh의 기능을 강화하고 강력한 플러그인과 테마를 지원하는 현대적 쉘."
      },
      {
        "subtitle": "2. 핵심 환경변수 (환경 조회: env, export)",
        "content": "• <code>PATH</code>: 실행 파일을 검색할 디렉터리 경로 목록 (콜론 <code>:</code>으로 구분)\n  - 새로운 경로 추가 명령: <code>export PATH=$PATH:/usr/local/bin</code>\n• <code>HOME</code>: 현재 사용자의 홈 디렉터리 절대 경로\n• <code>SHELL</code>: 현재 로그인한 사용자의 기본 쉘 경로\n• <code>PS1</code>: 쉘 프롬프트 모양 설정 변수 (<code>\\u</code>:사용자, <code>\\h</code>:호스트명, <code>\\w</code>:현재작업디렉터리)\n• <code>HISTSIZE</code>: 메모리에 유지할 히스토리 명령 개수\n• <code>HISTFILESIZE</code>: .bash_history 파일에 저장할 히스토리 최대 라인 수\n• <code>LANG</code>: 시스템 기본 로케일/언어 설정 (영문 기본값: <code>LANG=C</code> 또는 <code>en_US.UTF-8</code>)"
      },
      {
        "subtitle": "3. 쉘 시작 환경설정 파일의 실행 순서",
        "content": "1. <code>/etc/profile</code> (전체 사용자 공통 전역 설정)\n2. <code>/etc/profile.d/*.sh</code> (전역 스크립트 모음)\n3. <code>~/.bash_profile</code> 또는 <code>~/.bash_login</code>, <code>~/.profile</code> (개인 로그인 쉘 설정)\n4. <code>~/.bashrc</code> (개인 쉘 구동 시 alias 및 함수 설정)\n5. <code>/etc/bashrc</code> (전체 사용자 공통 서브쉘 환경 설정)\n6. <code>~/.bash_logout</code> (로그아웃 시 실행되는 개인 스크립트)"
      }
    ]
  },
  {
    "id": "chap03_process",
    "stage": "2차",
    "title": "03장. 프로세스 관리 및 작업 스케줄링",
    "description": "프로세스 상태, ps 옵션, kill 시그널 번호(1, 2, 9, 15), nice/renice, nohup 및 crontab 스케줄링",
    "sections": [
      {
        "subtitle": "1. 프로세스 모니터링: ps와 top",
        "content": "• <code>ps aux</code> (BSD 스타일):\n  - <code>a</code>: 터미널과 연관된 모든 사용자 프로세스 출력\n  - <code>u</code>: 프로세스 소유자(USER), CPU%, MEM% 등 상세 정보 출력\n  - <code>x</code>: 데몬 등 터미널에 종속되지 않은 백그라운드 프로세스까지 포함\n• <code>ps -ef</code> (System V 스타일):\n  - <code>-e</code>: 모든 프로세스 출력\n  - <code>-f</code>: 풀 포맷 (UID, PID, PPID, C, STIME, TTY, TIME, CMD) 출력\n• <code>top</code>: 실시간 CPU 및 메모리 점유율 동적 모니터링 (단축키 <code>M</code>: 메모리 정렬, <code>P</code>: CPU 정렬, <code>k</code>: kill, <code>q</code>: 종료)"
      },
      {
        "subtitle": "2. 필수 암기 시그널 번호 (kill -시그널번호 PID)",
        "table": {
          "headers": [
            "시그널 번호",
            "시그널 명칭",
            "동작 및 핵심 특징"
          ],
          "rows": [
            [
              "1",
              "SIGHUP",
              "재시작(Hangup). 데몬의 설정 파일을 다시 읽어들일 때 사용"
            ],
            [
              "2",
              "SIGINT",
              "키보드 인터럽트 (터미널에서 Ctrl + C 입력과 동일)"
            ],
            [
              "9",
              "SIGKILL",
              "강제 종료! 프로세스가 무시하거나 캐치할 수 없는 최후의 강제 종료"
            ],
            [
              "15 (기본값)",
              "SIGTERM",
              "정상 종료 요청 (kill 명령의 기본 옵션, 자원 정리 후 종료)"
            ],
            [
              "18",
              "SIGCONT",
              "정지된 프로세스를 다시 계속 실행"
            ],
            [
              "19",
              "SIGSTOP",
              "프로세스 강제 정지 (무시 불가)"
            ],
            [
              "20",
              "SIGTSTP",
              "터미널 정지 시그널 (Ctrl + Z 입력과 동일)"
            ]
          ]
        }
      },
      {
        "subtitle": "3. nice와 renice의 차이점",
        "content": "• <b>nice</b>: 프로세스를 <u>처음 실행할 때</u> 우선순위를 지정하여 실행\n  - 문법: <code>nice -n [값] 명령어</code> (값 기본값 10, 범위 -20 ~ 19)\n• <b>renice</b>: 이미 <u>실행 중인 프로세스(PID)의 우선순위를 즉각 변경</u>\n  - 문법: <code>renice [값] -p PID</code>\n• <b>우선순위 규칙</b>: -20이 가장 높은 우선순위(빠른 처리), 19가 가장 낮은 우선순위. 우선순위를 높이는(마이너스 값) 설정은 오직 <b>root</b>만 가능!"
      },
      {
        "subtitle": "4. crontab 주기적 작업 예약 (5개 필드)",
        "content": "• 형식: <code>[분] [시] [일] [월] [요일] [실행할_명령어]</code>\n  - 분: 0~59 / 시: 0~23 / 일: 1~31 / 월: 1~12 / 요일: 0~7 (0과 7은 일요일, 1:월, 2:화... 6:토)\n• 예시:\n  - <code>0 3 * * * /backup.sh</code>: 매일 새벽 3시 0분에 실행\n  - <code>*/10 * * * * /check.sh</code>: 10분마다 실행\n  - <code>0 12 1 * * /report.sh</code>: 매월 1일 정오 12시에 실행\n  - <code>0 9 * * 1-5 /work.sh</code>: 매주 월요일부터 금요일까지 오전 9시 정각 실행\n• 관련 명령어: <code>crontab -e</code> (편집), <code>crontab -l</code> (조회), <code>crontab -r</code> (전체 삭제)"
      }
    ]
  },
  {
    "id": "chap04_editor",
    "stage": "2차",
    "title": "04장. 에디터 (vi, vim, emacs, pico)",
    "description": "vi 에디터 3대 모드, 커서 이동/복사/삭제 단축키, ex 모드 환경설정 및 치환 명령어, emacs",
    "sections": [
      {
        "subtitle": "1. vi 에디터의 3대 동작 모드",
        "content": "• <b>명령 모드 (Command Mode)</b>: 커서 이동, 삭제, 복사, 붙여넣기 수행 (vi 시작 기본 모드)\n• <b>입력 모드 (Insert Mode)</b>: 실제 텍스트 입력 (명령 모드에서 <code>i</code>, <code>a</code>, <code>o</code>, <code>I</code>, <code>A</code>, <code>O</code> 입력 시 진입, <code>Esc</code>로 복귀)\n  - <code>i</code>: 커서 앞 입력 / <code>a</code>: 커서 뒤 입력 / <code>o</code>: 커서 아래 새로운 빈 행 생성 후 입력\n• <b>ex (마지막 줄) 모드 (Last Line Mode)</b>: 파일 저장(<code>:w</code>), 종료(<code>:q</code>, <code>:wq</code>, <code>:q!</code>), 검색(<code>/패턴</code>), 치환(<code>:s</code>) 수행 (명령 모드에서 <code>:</code> 입력 시 진입)"
      },
      {
        "subtitle": "2. vi 명령 모드 주요 단축키",
        "content": "• <b>커서 이동</b>: <code>h</code>(좌), <code>j</code>(하), <code>k</code>(상), <code>l</code>(우), <code>0</code>(행 처음), <code>$</code>(행 끝), <code>G</code>(파일 맨 끝 행), <code>1G (gg)</code>(파일 첫 행)\n• <b>삭제 및 잘라내기</b>: <code>x</code>(한 글자 삭제), <code>dd</code>(한 행 전체 삭제), <code>5dd</code>(5행 연속 삭제), <code>dw</code>(단어 삭제)\n• <b>복사 및 붙여넣기</b>: <code>yy</code>(한 행 복사), <code>3yy</code>(3행 복사), <code>p</code>(커서 아래에 붙여넣기), <code>P</code>(커서 위에 붙여넣기)\n• <b>되돌리기</b>: <code>u</code>(Undo, 직전 작업 취소), <code>Ctrl + r</code>(Redo, 취소한 작업 재실행)"
      },
      {
        "subtitle": "3. ex 명령 모드 치환 및 환경설정",
        "content": "• <b>문자열 치환</b>:\n  - <code>:s/old/new/g</code>: 현재 행의 모든 old를 new로 변경\n  - <code>:%s/old/new/g</code>: 파일 전체 행의 모든 old를 new로 변경\n• <b>주요 set 옵션</b>:\n  - <code>:set number (set nu)</code>: 행 번호 표시 (해제: <code>:set nonu</code>)\n  - <code>:set autoindent (set ai)</code>: 자동 들여쓰기 설정 (해제: <code>:set noai</code>)\n  - <code>:set ignorecase (set ic)</code>: 검색 시 대소문자 무시 (해제: <code>:set noic</code>)\n• <b>vi 환경설정 파일</b>: <code>~/.exrc</code> 또는 <code>~/.vimrc</code>"
      }
    ]
  },
  {
    "id": "chap05_packages",
    "stage": "2차",
    "title": "05장. 소프트웨어 설치 및 패키지 관리",
    "description": "tar 아카이브와 압축(gzip, bzip2, xz), RedHat RPM/YUM 도구, Debian DPKG/APT 도구",
    "sections": [
      {
        "subtitle": "1. tar 아카이브 및 압축 도구 (초빈출)",
        "table": {
          "headers": [
            "도구 / 확장자",
            "압축 옵션",
            "해제 옵션",
            "특징 및 압축률"
          ],
          "rows": [
            [
              "tar (단순 묶기)",
              "tar -cvf f.tar 파일들",
              "tar -xvf f.tar",
              "-c(생성), -x(해제), -t(목록조회), -v(상세), -f(파일명)"
            ],
            [
              "gzip (.tar.gz / .tgz)",
              "tar -zcvf f.tar.gz 파일들",
              "tar -zxvf f.tar.gz",
              "빠른 속도, 표준 압축 포맷, 옵션: -z"
            ],
            [
              "bzip2 (.tar.bz2)",
              "tar -jcvf f.tar.bz2 파일들",
              "tar -jxvf f.tar.bz2",
              "gzip보다 높은 압축률, 옵션: -j"
            ],
            [
              "xz (.tar.xz)",
              "tar -Jcvf f.tar.xz 파일들",
              "tar -Jxvf f.tar.xz",
              "최고의 고압축률 포맷, 옵션: -J (대문자)"
            ]
          ]
        }
      },
      {
        "subtitle": "2. RPM (Red Hat Package Manager) 핵심 옵션",
        "content": "• <b>설치 및 업그레이드</b>:\n  - <code>rpm -ivh 패키지.rpm</code>: 신규 설치 (-i: install, -v: verbose, -h: hash progress)\n  - <code>rpm -Uvh 패키지.rpm</code>: 업그레이드 설치 (없으면 신규 설치)\n  - <code>rpm -Fvh 패키지.rpm</code>: 이전 버전이 설치되어 있을 때만 갱신(Freshen)\n• <b>제거 모드</b>: <code>rpm -e 패키지명</code> (--nodeps 옵션으로 의존성 무시 제거 가능)\n• <b>질의(Query) 모드</b>:\n  - <code>rpm -qa</code>: 시스템에 설치된 모든 RPM 패키지 목록 출력\n  - <code>rpm -qf /bin/ls</code>: 특정 파일이 속한 패키지명 조회\n  - <code>rpm -ql 패키지명</code>: 패키지가 설치한 모든 파일 목록 확인\n  - <code>rpm -qi 패키지명</code>: 패키지의 버전, 요약, 제작사 등 상세 정보 출력\n• <b>검증 모드</b>: <code>rpm -V 패키지명</code> (파일 크기 S, 퍼미션 M, 체크섬 5 등 변조 검사)"
      },
      {
        "subtitle": "3. YUM 및 APT 의존성 자동해결 도구",
        "content": "• <b>YUM (Yellowdog Updater, Modified)</b>: 레드햇 계열의 네트워크 기반 패키지 관리 도구. 패키지 의존성을 자동으로 분석하여 필요 라이브러리를 동시 설치.\n  - <code>yum install 패키지명</code> / <code>yum update</code> / <code>yum remove 패키지명</code>\n  - 저장소 설정 파일 위치: <code>/etc/yum.repos.d/*.repo</code>\n• <b>APT (Advanced Package Tool)</b>: 데비안/우분투 계열의 도구.\n  - <code>apt-get update</code> (패키지 인덱스 갱신), <code>apt-get install</code>, <code>apt-get remove</code>\n  - 저장소 설정 파일: <code>/etc/apt/sources.list</code>"
      }
    ]
  },
  {
    "id": "chap06_devices",
    "stage": "2차",
    "title": "06장. 장치 및 주변기기 설정",
    "description": "프린터 CUPS 환경과 lpr/lprm/lpq, 사운드 ALSA/OSS, 스캐너 SANE, lspci 명령어",
    "sections": [
      {
        "subtitle": "1. 프린터 관리 및 CUPS",
        "content": "• <b>CUPS (Common Unix Printing System)</b>: 리눅스 표준 인쇄 시스템. 웹 브라우저를 통해 <code>http://localhost:631</code> 포트로 편리하게 프린터 설정 및 관리 지원.\n• <b>주요 인쇄 명령어</b>:\n  - <code>lpr -# [매수] -P [프린터명] [파일명]</code>: 인쇄 작업 요청 (예: <code>lpr -# 2 -P lp doc.txt</code>)\n  - <code>lpq</code>: 프린터 큐(Queue)의 대기 작업 목록 확인\n  - <code>lprm [작업번호]</code>: 인쇄 대기열에서 작업 취소/삭제 (전체 삭제: <code>lprm -</code>)\n  - <code>lpc</code>: 프린터 제어 및 상태 점검 도구"
      },
      {
        "subtitle": "2. 사운드 및 스캐너 서브시스템",
        "content": "• <b>사운드 시스템</b>:\n  - <b>OSS (Open Sound System)</b>: 초기 유닉스/리눅스 표준 사운드 아키텍처.\n  - <b>ALSA (Advanced Linux Sound Architecture)</b>: 현대 리눅스 표준 사운드 커널 모듈 드라이버. 미디(MIDI) 지원, 다중 오디오 스트림 및 플러그 앤 플레이 지원.\n• <b>스캐너 서브시스템</b>:\n  - <b>SANE (Scanner Access Now Easy)</b>: 평판 스캐너, 디지털 카메라 등의 이미지 획득 하드웨어 표준 API.\n  - <b>XSANE</b>: X 윈도우 기반의 SANE GUI 프론트엔드 프로그램.\n  - <code>scanimage</code>: 명령행에서 이미지를 스캔하는 명령어."
      }
    ]
  },
  {
    "id": "chap07_xwindow",
    "stage": "2차",
    "title": "07장. X 윈도우 환경",
    "description": "X11 아키텍처, Xlib/XCB, 디스플레이 매니저(GDM, KDM), 데스크톱 환경(GNOME, KDE), xhost/DISPLAY/xauth",
    "sections": [
      {
        "subtitle": "1. X 윈도우 아키텍처와 특징",
        "content": "• <b>클라이언트-서버 모델</b>: X 윈도우는 네트워크 기반의 클라이언트/서버 구조로 동작합니다.\n  - <b>X 서버 (X Server)</b>: 디스플레이 모니터, 키보드, 마우스 등 하드웨어 입출력을 직접 제어하고 화면에 그래픽을 그리는 주체.\n  - <b>X 클라이언트 (X Client)</b>: 실제 연산을 수행하고 X 서버에 화면 출력을 요청하는 응용 프로그램(브라우저, 터미널 등).\n• <b>독립성</b>: 그래픽 화면 UI 스타일과 윈도우 프레임 배치 등은 X 자체에 내장되지 않고 외부 윈도우 매니저에게 위임됨."
      },
      {
        "subtitle": "2. 디스플레이 매니저와 데스크톱 환경",
        "content": "• <b>디스플레이 매니저 (Display Manager)</b>: 사용자 그래픽 로그인 화면을 제공하고 X 세션을 시작시키는 프로그램.\n  - <code>XDM</code> (X 기본), <code>GDM</code> (GNOME 전용), <code>KDM / SDDM</code> (KDE 전용), <code>LightDM</code>\n• <b>데스크톱 환경 (Desktop Environment)</b>:\n  - <b>GNOME</b>: GNU 프로젝트의 공식 GUI 환경. <b>GTK+</b> 라이브러리 기반.\n  - <b>KDE</b>: C++ 기반의 <b>Qt</b> 라이브러리 사용. 윈도우 OS와 유사한 시작 메뉴 및 작업 표시줄 구성.\n• <b>윈도우 매니저 (Window Manager)</b>: 창의 이동, 크기 조절, 최소화/최대화, 타이틀 바 관리 (Mutter, KWin, Metacity, Compiz 등)."
      },
      {
        "subtitle": "3. 원격 X 프로그램 실행 및 인증",
        "content": "• <code>DISPLAY</code> 환경변수: 출력할 X 서버의 위치 지정.\n  - 문법: <code>export DISPLAY=[IP주소]:[디스플레이번호].[스크린번호]</code> (예: <code>export DISPLAY=192.168.1.100:0.0</code>)\n• <code>xhost</code>: 호스트 기반 접근 제어 (예: <code>xhost + 192.168.1.50</code> 허용, <code>xhost +</code> 전체 허용)\n• <code>xauth</code>: 매직 쿠키(Magic Cookie) 기반의 암호화 키 인증 도구 (보안성이 높음)."
      }
    ]
  },
  {
    "id": "chap08_network_basics",
    "stage": "2차",
    "title": "08장. 네트워크 기초 및 프로토콜",
    "description": "OSI 7계층, TCP/IP, 서브넷 마스크 계산법, C클래스 호스트 수 계산, 주요 서비스 포트 번호",
    "sections": [
      {
        "subtitle": "1. OSI 7계층 vs TCP/IP 4계층",
        "table": {
          "headers": [
            "OSI 7계층",
            "TCP/IP 계층",
            "역할",
            "대표 프로토콜 / 장비"
          ],
          "rows": [
            [
              "응용 계층 (Application)",
              "응용 계층",
              "사용자 인터페이스 및 네트워크 응용 서비스",
              "HTTP, FTP, SSH, Telnet, DNS, SMTP"
            ],
            [
              "표현 계층 (Presentation)",
              "응용 계층",
              "데이터 암호화, 압축, 코드 변환 (ASCII, JPEG)",
              "SSL/TLS, JPEG, MPEG"
            ],
            [
              "세션 계층 (Session)",
              "응용 계층",
              "통신 세션 연결 및 동기화 제어",
              "NetBIOS, RPC, 소켓(Socket)"
            ],
            [
              "전송 계층 (Transport)",
              "전송 계층",
              "종단 간 신뢰성 있는 전송(TCP) 또는 고속 전송(UDP)",
              "TCP, UDP, 포트 번호 (L4 스위치)"
            ],
            [
              "네트워크 계층 (Network)",
              "인터넷 계층",
              "논리적 주소 지정(IP) 및 최적 경로 패킷 라우팅",
              "IP, ICMP, ARP, RARP / 라우터(Router)"
            ],
            [
              "데이터링크 계층 (Data Link)",
              "네트워크 인터페이스",
              "인접 노드 간 물리 주소(MAC) 프레임 전송, 오류 제어",
              "이더넷, CSMA/CD, MAC / 스위치, 브리지"
            ],
            [
              "물리 계층 (Physical)",
              "네트워크 인터페이스",
              "0과 1의 전기적 신호 비트 전송",
              "UTP 케이블, 리피터, 허브(Hub)"
            ]
          ]
        }
      },
      {
        "subtitle": "2. 주요 인터넷 서비스 포트 번호 (무조건 암기)",
        "content": "• <code>20 / 21</code>: FTP (20: Data 데이터 전송, 21: Control 제어)\n• <code>22</code>: SSH (Secure Shell - 원격 보안 쉘)\n• <code>23</code>: Telnet (원격 터미널 접속 - 평문)\n• <code>25</code>: SMTP (메일 발송 서버)\n• <code>53</code>: DNS (도메인 네임 서버 - UDP/TCP 53)\n• <code>67 / 68</code>: DHCP (67: 서버, 68: 클라이언트)\n• <code>80</code>: HTTP (웹 서버 - 비암호화)\n• <code>110</code>: POP3 (메일 수신 프로토콜)\n• <code>143</code>: IMAP (메일 동기화 수신 프로토콜)\n• <code>443</code>: HTTPS (SSL/TLS 보안 웹 서버)\n• <code>2049</code>: NFS (Network File System)"
      },
      {
        "subtitle": "3. C 클래스 서브넷 마스크 및 가용 호스트 수 계산 공식",
        "content": "• <b>호스트 수 공식</b>: <code>실제 사용 가능한 IP 개수 = 2^(호스트 비트 수) - 2</code>\n  - (네트워크 주소 1개와 브로드캐스트 주소 1개는 호스트로 할당 불가하여 반드시 2를 뺌!)\n• <b>서브넷팅 대표 표</b>:\n  - <code>/24</code> (255.255.255.0): 호스트 비트 8개 → 2^8 - 2 = <b>254개</b>\n  - <code>/25</code> (255.255.255.128): 호스트 비트 7개 → 2^7 - 2 = <b>126개</b> (서브넷 2개)\n  - <code>/26</code> (255.255.255.192): 호스트 비트 6개 → 2^6 - 2 = <b>62개</b> (서브넷 4개)\n  - <code>/27</code> (255.255.255.224): 호스트 비트 5개 → 2^5 - 2 = <b>30개</b> (서브넷 8개)\n  - <code>/28</code> (255.255.255.240): 호스트 비트 4개 → 2^4 - 2 = <b>14개</b> (서브넷 16개)"
      }
    ]
  },
  {
    "id": "chap09_network_admin",
    "stage": "2차",
    "title": "09장. 네트워크 관리 및 명령어",
    "description": "ifconfig/ip, route, netstat 상태 코드, arp, ping, traceroute, 주요 네트워크 설정 파일",
    "sections": [
      {
        "subtitle": "1. 네트워크 상태 확인 및 구성 명령어",
        "content": "• <code>ifconfig [인터페이스] [IP] netmask [마스크] up</code>: IP 주소 할당 및 활성화\n• <code>ip addr show</code>: 현대 리눅스(iproute2)의 네트워크 인터페이스 주소 확인\n• <code>route -n</code>: 커널 라우팅 테이블 확인 (기본 게이트웨이 default gateway 조회)\n• <code>netstat -antp</code>: 활성화된 네트워크 소켓, 연결 포트 및 해당 프로세스(PID) 조회\n  - <code>-a</code>: 모든 소켓 / <code>-n</code>: 주소/포트를 숫자로 표기 / <code>-t</code>: TCP만 / <code>-p</code>: PID 출력\n• <code>arp -a</code>: IP 주소와 매핑된 물리적 MAC 주소 캐시 테이블 확인\n• <code>traceroute [호스트]</code>: 목적지 서버까지 도달하는 중간 라우터 홉(Hop) 경로 추적\n• <code>ethtool eth0</code> (또는 <code>mii-tool</code>): 물리 랜 카드의 링크 속도(100/1000Mbps) 및 듀플렉스 상태 확인"
      },
      {
        "subtitle": "2. netstat 주요 TCP 연결 상태(State)",
        "content": "• <code>LISTEN</code>: 서비스 데몬이 포트를 열고 클라이언트의 연결 요청을 대기 중인 상태\n• <code>ESTABLISHED</code>: 3-way 핸드셰이크가 완료되어 데이터 통신이 정상적으로 연결된 상태\n• <code>SYN_SENT</code>: 로컬에서 원격으로 연결 요청(SYN)을 보낸 후 응답을 기다리는 상태\n• <code>SYN_RECV</code>: 원격으로부터 SYN을 받고 SYN+ACK 응답을 보낸 상태\n• <code>TIME_WAIT</code>: 연결 종료 후 패킷 지연 유실을 방지하기 위해 잠시 소켓을 열어두고 대기 중인 상태"
      },
      {
        "subtitle": "3. 필수 네트워크 설정 파일",
        "content": "• <code>/etc/resolv.conf</code>: DNS 네임서버 설정 (<code>nameserver 168.126.63.1</code>)\n• <code>/etc/hosts</code>: IP 주소와 호스트 이름을 1:1로 직접 매핑하는 로컬 파일 (DNS보다 우선 조회)\n• <code>/etc/sysconfig/network</code>: 호스트명(HOSTNAME) 및 기본 게이트웨이(GATEWAY) 설정\n• <code>/etc/sysconfig/network-scripts/ifcfg-eth0</code>: 특정 인터페이스 IPADDR, NETMASK, BOOTPROTO(static/dhcp), ONBOOT 설정"
      }
    ]
  },
  {
    "id": "chap10_advanced",
    "stage": "2차",
    "title": "10장. 리눅스 응용 및 신기술 동향",
    "description": "리눅스 클러스터(HPC, LVS, HA), 가상화(KVM, Xen), 클라우드 컴퓨팅, 임베디드 리눅스 및 차량용 OS(QNX, GENIVI)",
    "sections": [
      {
        "subtitle": "1. 리눅스 클러스터(Cluster) 3대 분류",
        "content": "• <b>고계산용 클러스터 (HPC, High Performance Computing)</b>:\n  - 여러 대의 컴퓨터를 초고속 네트워크로 연결하여 슈퍼컴퓨터급 대용량 병렬 연산 처리 (베오울프 Beowulf 클러스터).\n• <b>부하분산 클러스터 (LVS, Load Balancing Cluster)</b>:\n  - 외부에서 들어오는 웹/서비스 트래픽 요청을 여러 대의 리얼 서버로 균등 분산하여 서버 과부하 방지.\n• <b>고가용성 클러스터 (HA, High Availability Cluster)</b>:\n  - 주 서버(Active)에 장애 발생 시 대기 서버(Standby)가 즉시 서비스를 인수(Failover)하여 무중단 서비스 제공."
      },
      {
        "subtitle": "2. 서버 가상화(Virtualization) 기술",
        "content": "• <b>하이퍼바이저(Hypervisor)</b>: 물리 하드웨어와 가상 머신(VM) 사이에서 자원을 중재/분할하는 소프트웨어 레이어.\n  - <b>전가상화 (Full-Virtualization)</b>: 하드웨어를 완전 에뮬레이션하여 게스트 OS 수정 없이 구동 가능 (KVM, VMware, VirtualBox).\n  - <b>반가상화 (Para-Virtualization)</b>: 성능 향상을 위해 게스트 OS의 커널을 일부 수정하여 하이퍼바이저와 통신 (Xen).\n• <b>컨테이너(Container)</b>: OS 커널을 공유하며 프로세스 단위로 격리하여 기동 속도가 빠르고 경량화된 가상화 (Docker, LXC, Podman)."
      },
      {
        "subtitle": "3. 클라우드 컴퓨팅 서비스 분류",
        "content": "• <b>IaaS (Infrastructure as a Service)</b>: 가상 서버, 스토리지, 네트워크 등 기초 인프라를 대여 제공 (AWS EC2, GCP Compute Engine, OpenStack).\n• <b>PaaS (Platform as a Service)</b>: 개발자가 애플리케이션 개발에만 집중할 수 있도록 실행 런타임, DB 플랫폼 제공 (Google App Engine, Heroku).\n• <b>SaaS (Software as a Service)</b>: 완제품 소프트웨어를 웹 브라우저를 통해 서비스로 이용 (Google Workspace, Dropbox, Office 365)."
      },
      {
        "subtitle": "4. 차량용 및 모바일 임베디드 OS (기출 단골)",
        "content": "• <b>QNX</b>: 블랙베리(BlackBerry) 사의 마이크로커널 기반 실시간 운영체제(RTOS). 차량용 인포테인먼트 및 디지털 콕핏에 널리 사용되며 HTML5 기반 HMI 지원.\n• <b>GENIVI 연합</b>: 리눅스 기반 표준 자동차용 차량 내 인포테인먼트(IVI, In-Vehicle Infotainment) 플랫폼 개발을 위해 2009년 BMW, 인텔 등이 주도하여 설립한 비영리 컨소시엄 (현재 Connected Vehicle Systems Alliance).\n• <b>Tizen (타이젠)</b>: 리눅스 재단과 삼성전자가 주도하여 개발한 오픈소스 모바일/스마트TV/웨어러블 운영체제."
      }
    ]
  }
];
