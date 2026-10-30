import pymupdf
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('study_03_01/extracted_1cha_red_answers.json', 'r', encoding='utf-8') as f:
    answers = json.load(f)

doc = pymupdf.open('study_03_01/리눅스 마스터 2급 1차 족보.pdf')

page_types = {}
for p_str, items in answers.items():
    p = int(p_str)
    has_opt = any(any(m in item['text'] for m in ['⓵', '⓶', '⓷', '⓸', '①', '②', '③', '④', '가.', '나.', '다.', '라.']) for item in items)
    has_dab = any('답 :' in item['text'] or '답:' in item['text'] for item in items)
    
    if has_dab:
        p_type = '단답형 (답: 형태)'
    elif has_opt:
        p_type = '4지선다 정답 보기'
    else:
        p_type = '기타 단답/키워드'
        
    page_types[p] = (p_type, len(items), [it['text'][:30] for it in items[:3]])

for p in sorted(page_types.keys()):
    ptype, cnt, samps = page_types[p]
    print(f"Page {p:2d}: {ptype:<16} ({cnt:2d}건) | {samps}")
