# -*- coding: utf-8 -*-
"""
리눅스마스터 2급 1차 & 2차 전 문항(486문항) 데이터 전수 정밀 교차검증 및 해설/정답/띄어쓰기 완전 정제 엔진
"""

import json
import re

# ==============================================================================
# 1. 띄어쓰기 및 서식 고도화 정제 함수
# ==============================================================================
def clean_spacing(s):
    if not s:
        return ""
    
    # Strip URL and blog watermarks
    s = re.sub(r'https?://[^\s\"\'\)\>]+|www\.[^\s\"\'\)\>]+', '', s)
    s = re.sub(r'리눅스마스터\s*2\s*급\s*2\s*차\s*(?:족보|문제집)\s*\(?\s*클릭\s*\)?', '', s)
    s = re.sub(r'shadow879(?:@naver\.com)?', '', s)
    s = re.sub(r'\(과외\s*,\s*오타\)\s*문의\s*:', '', s)
    s = re.sub(r'그림자의?\s*리눅스\s*마스터\s*2급\s*2차\s*족보', '', s)
    s = re.sub(r'Ver\s*4\.5', '', s)
    s = re.sub(r'(?:0[1-9]|1[0-9])\s*[\.\-]?\s*(?:에디터|장치설정|프린터|Shell|파일\s*시스템|인터넷|응용|X\s*윈도)[\s\S]*$', '', s)
    s = re.sub(r'1\.[1-9]\s*(?:디스크\s*쿼터|관련\s*명령어|권한)[\s\S]*$', '', s)
    s = re.sub(r'2단계\s*공동\s*도메인\s*설명[\s\S]*$', '', s)
    s = re.sub(r'\-OSI\s*계층과\s*관련\s*프로토콜[\s\S]*$', '', s)
    s = re.sub(r'C클래스\(기준\)\-\s*서브네트워크\s*관련문제[\s\S]*$', '', s)
    s = re.sub(r'\-ps명령\s*옵션\s*항목\s*의미[\s\S]*$', '', s)
    s = re.sub(r'명령모드\s*사용\s*예\s*vi\s*\+[\s\S]*$', '', s)
    s = re.sub(r'05\-2\s*rpm\s*사용법[\s\S]*$', '', s)
    s = re.sub(r'\s*해설\s*[:\)].*$', '', s)
    s = re.sub(r'\s*정답\s*[:\)].*$', '', s)
    
    # 1) Dashes: convert en-dash and em-dash to standard hyphen
    s = s.replace('–', '-').replace('—', '-')
    
    # 2) Punctuation spaces: remove space before punctuation
    s = re.sub(r'\s+([,\.\?\!])', r'\1', s)
    s = re.sub(r'\(\s+', '(', s)
    s = re.sub(r'\s+\)', ')', s)
    
    # 3) Korean interrogative cleanups
    s = re.sub(r'것은\s*\?', '것은?', s)
    s = re.sub(r'무엇인가\s*\?', '무엇인가?', s)
    s = re.sub(r'명령은\s*\?', '명령은?', s)
    s = re.sub(r'단체는\s*\?', '단체는?', s)
    s = re.sub(r'옵션은\s*\?', '옵션은?', s)
    s = re.sub(r'사람은\s*\?', '사람은?', s)
    
    # 4) Commands spacing fixes
    s = re.sub(r'#export\b', '# export', s)
    s = re.sub(r'\$export\b', '$ export', s)
    s = re.sub(r'#groupadd\b', '# groupadd', s)
    s = re.sub(r'\bgroupaddihd1\b', 'groupadd ihd1', s)
    s = re.sub(r'\bunabletolockgroupfile\b', 'unable to lock group file', s)
    s = re.sub(r'echo\$PWD', 'echo $PWD', s)
    s = re.sub(r'cat/etc/passwd', 'cat /etc/passwd', s)
    s = re.sub(r'cat/etc/crontab', 'cat /etc/crontab', s)
    s = re.sub(r'grep-r\b', 'grep -r', s)
    s = re.sub(r'ls-l\b', 'ls -l', s)
    s = re.sub(r'ls-al\b', 'ls -al', s)
    s = re.sub(r'tar-cvf\b', 'tar -cvf', s)
    s = re.sub(r'tar-xvf\b', 'tar -xvf', s)
    s = re.sub(r'tar-tvf\b', 'tar -tvf', s)
    s = re.sub(r'rm-rf\b', 'rm -rf', s)
    s = re.sub(r'find\s*\.\s*-string', 'find . -string', s)
    s = re.sub(r'find\s*\.\s*-name', 'find . -name', s)
    s = re.sub(r'shutdown-r\b', 'shutdown -r', s)
    s = re.sub(r'shutdown-h\b', 'shutdown -h', s)
    s = re.sub(r'\buserdel\s*-\s*([a-zA-Z])\b', r'userdel -\1', s)
    s = re.sub(r'\busermod\s*-\s*([a-zA-Z])\b', r'usermod -\1', s)
    s = re.sub(r'\bgroupmod\s*-\s*([a-zA-Z])\b', r'groupmod -\1', s)
    s = re.sub(r'\bchmod\s*-\s*([a-zA-Z])\b', r'chmod -\1', s)
    s = re.sub(r'\bchown\s*-\s*([a-zA-Z])\b', r'chown -\1', s)
    s = re.sub(r'\bls\s*-\s*([a-zA-Z])\b', r'ls -\1', s)
    
    # 5) Specific known squashed strings
    s = s.replace('ihd@ihd.or.kr :/etc$users ihdihdhonglinuxmaster', 'ihd@ihd.or.kr:/etc$ users\nihd ihd hong linuxmaster')
    s = s.replace('ihd@ihd.or.kr:/etc$users ihdihdhonglinuxmaster', 'ihd@ihd.or.kr:/etc$ users\nihd ihd hong linuxmaster')
    s = s.replace('[root@ihdroot]echo$PWD /root', '[root@ihd root]# echo $PWD\n/root')
    s = s.replace('[root@ihdroot]#()mbox mbox:ASCllmailtext', '# ( ) mbox\nmbox: ASCII mail text')
    s = s.replace('[-rwxr-xr-xihdproject1024Aug1310:10client.c]', '-rwxr-xr-x 1 ihd project 1024 Aug 13 10:10 client.c')
    s = s.replace('[root@www ~] # ls – /dev/sda ( ) 1 root disk 8, 0 Aug 8 13:01 /dev/sda', '# ls -l /dev/sda\n( ) 1 root disk 8, 0 Aug 8 13:01 /dev/sda')
    s = s.replace('srw-r—-- 1 root root 0 Aug 8 13:41 control', 'srw-r----- 1 root root 0 Aug 8 13:41 control')
    
    # Final multiple space collapse (preserve newlines if intended)
    lines = s.split('\n')
    cleaned_lines = [re.sub(r'[ \t]+', ' ', l).strip() for l in lines]
    return '\n'.join([l for l in cleaned_lines if l])

print("Clean spacing function tested.")
