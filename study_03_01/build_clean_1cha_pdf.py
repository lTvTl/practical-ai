# -*- coding: utf-8 -*-
"""
리눅스마스터 2급 1차 족보 PDF 완전 정제 및 정답 분리 신규 PDF 생성 스크립트
1. 1~75p 본문:
   - 4지선다형: 빨간색 정답 보기를 일반 검정색으로 변환하여 정답 노출 방지
   - 단답형: '답 : XXX'의 빨간색 답 텍스트를 제거하고 '답 : (          )' 빈칸으로 변환
   - 하단 외부 블로그 광고 URL 완전 제거
2. 76p~:
   - 전 문항(517건) 공식 정답표 및 리눅스마스터 2급 전문 명령어 속성 해설 부록 첨부
"""

import os
import sys
import pymupdf
import re

sys.stdout.reconfigure(encoding='utf-8')

# First, make sure appendix is built
from build_appendix_pdf import build_appendix_pdf

appendix_pdf_path = "study_03_01/temp_appendix.pdf"
build_appendix_pdf(appendix_pdf_path)

input_pdf_path = "study_03_01/리눅스 마스터 2급 1차 족보.pdf"
output_pdf_korean = "study_03_01/리눅스마스터2급_1차_족보_문제지_및_정답해설.pdf"
output_pdf_english = "study_03_01/linux_master_1cha_practice_with_answers.pdf"

print(f"Opening original PDF: {input_pdf_path}")
doc = pymupdf.open(input_pdf_path)
total_pages = len(doc)
print(f"Total source pages: {total_pages}")

# Process pages 1 to 75
for p_idx in range(total_pages):
    p_num = p_idx + 1
    page = doc[p_idx]
    
    # 1. Clean footer ad: "http://blog.naver.com/shadow879/220833406386" & "리눅스마스터 2급 2차족보(클릭)"
    # Search for text instances and redact
    footer_matches = page.search_for("shadow879") + page.search_for("blog.naver.com") + page.search_for("2차족보(클릭)")
    for rect in footer_matches:
        # Expand slightly
        r = pymupdf.Rect(rect.x0 - 5, rect.y0 - 2, rect.x1 + 5, rect.y1 + 2)
        page.add_redact_annot(r, fill=(1, 1, 1))
        
    # 2. Check if this is a fill-in-the-blank / short answer page (pages 56 to 72)
    if 56 <= p_num <= 72:
        # Find all red text spans
        d = page.get_text("dict")
        red_rects = []
        for b in d["blocks"]:
            if "lines" in b:
                for l in b["lines"]:
                    for s in l["spans"]:
                        c = s["color"]
                        r_val = (c >> 16) & 255
                        g_val = (c >> 8) & 255
                        b_val = c & 255
                        if r_val > 180 and g_val < 80 and b_val < 80:
                            red_rects.append((s["bbox"], s["text"].strip()))
                            
        for bbox, text in red_rects:
            r = pymupdf.Rect(bbox)
            # Redact the red text with a white box
            page.add_redact_annot(r, fill=(1, 1, 1))
            
        page.apply_redactions()
        
        # After redactions, write black placeholder "답 : (                 )"
        for bbox, text in red_rects:
            # Insert prompt text
            p_point = pymupdf.Point(bbox[0], bbox[3] - 1)
            # If the original text started with '답 :', draw prompt
            page.insert_text(p_point, "답 : (                           )", fontsize=9.5, color=(0.2, 0.2, 0.2))
            
    else:
        # 3. For multiple-choice pages (2~55p, 73~75p, and page 1 cover):
        # First apply redactions (for footer ads)
        page.apply_redactions()
        
        # Then replace red color operators in stream with black (0 0 0 rg / 0 0 0 RG)
        contents = page.get_contents()
        if contents:
            xrefs = contents if isinstance(contents, list) else [contents]
            for xref in xrefs:
                stream = doc.xref_stream(xref)
                # Replace red stroke and fill operators
                new_stream = stream.replace(b'1 0 0 RG', b'0 0 0 RG')
                new_stream = new_stream.replace(b'1 0 0 rg', b'0 0 0 rg')
                new_stream = new_stream.replace(b'1.0 0.0 0.0 RG', b'0.0 0.0 0.0 RG')
                new_stream = new_stream.replace(b'1.0 0.0 0.0 rg', b'0.0 0.0 0.0 rg')
                doc.update_stream(xref, new_stream)

print("Processed all 75 pages: Red text removed / converted to black / blanked.")

# Append the 17-page appendix
print(f"Attaching appendix from {appendix_pdf_path}...")
appendix_doc = pymupdf.open(appendix_pdf_path)
doc.insert_pdf(appendix_doc)
appendix_doc.close()

# Save final PDF files
print(f"Saving final combined PDF: {output_pdf_korean}...")
doc.save(output_pdf_korean, deflate=True)
doc.save(output_pdf_english, deflate=True)
doc.close()

# Remove temp appendix
if os.path.exists(appendix_pdf_path):
    os.remove(appendix_pdf_path)

print(f"SUCCESS! Created final standalone PDF with {len(pymupdf.open(output_pdf_korean))} pages.")
print(f"File 1: {output_pdf_korean}")
print(f"File 2: {output_pdf_english}")
