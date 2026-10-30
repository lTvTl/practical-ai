# -*- coding: utf-8 -*-
"""
단일 파일 오프라인 HTML 번들러
스마트폰에서 웹 서버 없이 단독으로 카카오톡/에어드랍/이메일로 전송하여
직접 열 수 있도록 CSS, JS, 데이터를 단일 index_offline.html로 통합합니다.
"""

import os
import sys

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

with open(os.path.join(BASE_DIR, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

with open(os.path.join(BASE_DIR, 'style.css'), 'r', encoding='utf-8') as f:
    css = f.read()

with open(os.path.join(BASE_DIR, 'questions.js'), 'r', encoding='utf-8') as f:
    questions_js = f.read()

with open(os.path.join(BASE_DIR, 'study_data.js'), 'r', encoding='utf-8') as f:
    study_js = f.read()

with open(os.path.join(BASE_DIR, 'app.js'), 'r', encoding='utf-8') as f:
    app_js = f.read()

# 1. CSS 인라인 치환
html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>\n{css}\n</style>')

# 2. JS 스크립트 인라인 치환
script_targets = [
    '<script src="questions.js"></script>',
    '<script src="study_data.js"></script>',
    '<script src="app.js"></script>'
]

bundled_script = f"""
  <!-- 완전 오프라인 무서버 단독 구동용 통합 스크립트 -->
  <script>
{questions_js}
{study_js}
{app_js}
  </script>
"""

# Replace the block
for st in script_targets:
    html = html.replace(st, '')

html = html.replace('<!-- 데이터 스크립트 로드 -->', bundled_script)

out_file = os.path.join(BASE_DIR, 'linux_master_offline.html')
with open(out_file, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Generated standalone offline HTML: {out_file} ({len(html):,} bytes)")
