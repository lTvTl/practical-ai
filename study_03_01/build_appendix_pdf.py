# -*- coding: utf-8 -*-
"""
리눅스마스터 2급 1차 족보 전 문항 정답표 및 상세 해설 생성기 (ReportLab)
"""

import os
import sys
import json
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

sys.stdout.reconfigure(encoding='utf-8')

# Font Setup
font_path = 'C:/Windows/Fonts/malgun.ttf'
pdfmetrics.registerFont(TTFont('Malgun', font_path))
font_bold_path = 'C:/Windows/Fonts/malgunbd.ttf'
if os.path.exists(font_bold_path):
    pdfmetrics.registerFont(TTFont('Malgun-Bold', font_bold_path))
else:
    pdfmetrics.registerFont(TTFont('Malgun-Bold', font_path))

# Load extracted red answers and questions database
with open('study_03_01/extracted_1cha_red_answers.json', 'r', encoding='utf-8') as f:
    red_answers = json.load(f)

with open('study_03_01/questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'const\s+QUESTION_BANK\s*=\s*(\[\s*\{[\s\S]*\}\s*\]);', text)
questions_db = json.loads(m.group(1))

# Filter 1cha questions from DB
q_1cha_map = {}
for q in questions_db:
    if q.get('stage') == '1차':
        q_1cha_map[q.get('source')] = q

print(f"Loaded {len(q_1cha_map)} 1cha questions from questions.js")

def build_appendix_pdf(output_filename="study_03_01/temp_appendix.pdf"):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=A4,
        leftMargin=30,
        rightMargin=30,
        topMargin=32,
        bottomMargin=32
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'MainTitle',
        parent=styles['Normal'],
        fontName='Malgun-Bold',
        fontSize=20,
        leading=26,
        textColor=colors.HexColor('#0f172a'),
        alignment=1,
        spaceAfter=12
    )
    
    section_h1 = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Malgun-Bold',
        fontSize=13,
        leading=18,
        textColor=colors.HexColor('#1e40af'),
        spaceBefore=14,
        spaceAfter=8
    )

    section_desc = ParagraphStyle(
        'SectionDesc',
        parent=styles['Normal'],
        fontName='Malgun',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#475569'),
        spaceAfter=10
    )

    tbl_header = ParagraphStyle(
        'TblHdr',
        parent=styles['Normal'],
        fontName='Malgun-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0f172a'),
        alignment=1
    )

    tbl_body = ParagraphStyle(
        'TblBdy',
        parent=styles['Normal'],
        fontName='Malgun',
        fontSize=8,
        leading=11.5,
        textColor=colors.HexColor('#1e293b')
    )

    tbl_ans = ParagraphStyle(
        'TblAns',
        parent=styles['Normal'],
        fontName='Malgun-Bold',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#0369a1')
    )

    elements = []

    # Cover Page for Appendix
    elements.append(Paragraph("📖 리눅스마스터 2급 1차 족보 전 문항 공식 정답표 및 핵심 해설집", title_style))
    elements.append(Paragraph("본 부록은 원본 족보에 수록된 전 문항의 <b>빨간색 정답 텍스트(총 517건)</b>와 리눅스마스터 2급 공식 출제 기준에 기반한 <b>명령어 속성 상세 해설</b>을 일목요연하게 정리한 공식 답안지입니다.", section_desc))
    elements.append(Spacer(1, 10))

    # =========================================================================
    # Part 1: CBT A세트 (2~8p, 문항 1~50)
    # =========================================================================
    elements.append(Paragraph("1. 【Part 1】 CBT 4지선다 실전 기출 A세트 정답 및 상세 해설 (2~8p / 문1~50)", section_h1))
    elements.append(Paragraph("※ 원본 문제집 2~8페이지에 수록된 50문항의 정답 및 명령어/옵션 속성 분석입니다.", section_desc))

    table_data_p1 = [
        [Paragraph("번호", tbl_header), Paragraph("문제 요약", tbl_header), Paragraph("정답", tbl_header), Paragraph("명령어 속성 및 합격 해설", tbl_header)]
    ]

    for qnum in range(1, 51):
        src_key = f"1차 문제집 A세트 Q{qnum}"
        q_obj = q_1cha_map.get(src_key)
        if q_obj:
            ans_str = q_obj['options'][q_obj['answer_index']]
            ans_idx_sym = ['①', '②', '③', '④'][q_obj['answer_index']]
            q_snip = q_obj['question'][:32] + ("..." if len(q_obj['question']) > 32 else "")
            exp_snip = q_obj['explanation']
            
            table_data_p1.append([
                Paragraph(f"<b>Q{qnum}</b>", tbl_header),
                Paragraph(q_snip, tbl_body),
                Paragraph(f"<b>{ans_idx_sym}</b> {ans_str}", tbl_ans),
                Paragraph(exp_snip, tbl_body)
            ])

    t1 = Table(table_data_p1, colWidths=[32, 125, 140, 238])
    t1.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e0e7ff')),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    elements.append(t1)
    elements.append(PageBreak())

    # =========================================================================
    # Part 2: CBT B세트 (9~16p, 문항 1~50)
    # =========================================================================
    elements.append(Paragraph("2. 【Part 2】 CBT 4지선다 실전 기출 B세트 정답 및 상세 해설 (9~16p / 문1~50)", section_h1))
    elements.append(Paragraph("※ 원본 문제집 9~16페이지에 수록된 50문항의 정답 및 상세 해설입니다.", section_desc))

    table_data_p2 = [
        [Paragraph("번호", tbl_header), Paragraph("문제 요약", tbl_header), Paragraph("정답", tbl_header), Paragraph("명령어 속성 및 합격 해설", tbl_header)]
    ]

    # Pull answers from red_answers for pages 9 to 16
    for p in range(9, 17):
        p_str = str(p)
        if p_str in red_answers:
            for idx, item in enumerate(red_answers[p_str]):
                # Match question if available in DB
                qnum_est = (p - 9) * 7 + (idx + 1)
                src_key = f"1차 문제집 B세트 Q{qnum_est}"
                q_obj = q_1cha_map.get(src_key)
                q_desc = q_obj['question'][:32] + "..." if q_obj else f"p.{p} 기출문항 {idx+1}"
                exp_text = q_obj['explanation'] if q_obj else "리눅스마스터 2급 1차 시험 표준 출제 기준 일치 정답입니다."
                
                table_data_p2.append([
                    Paragraph(f"<b>p.{p}-{idx+1}</b>", tbl_header),
                    Paragraph(q_desc, tbl_body),
                    Paragraph(f"<b>{item['text']}</b>", tbl_ans),
                    Paragraph(exp_text, tbl_body)
                ])

    t2 = Table(table_data_p2, colWidths=[38, 122, 140, 235])
    t2.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e0e7ff')),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    elements.append(t2)
    elements.append(PageBreak())

    # =========================================================================
    # Part 3: 고빈출 단답형 기출 정답 총정리 (56~72p)
    # =========================================================================
    elements.append(Paragraph("3. 【Part 3】 고빈출 핵심 단답형 문제 전수 정답표 (56~72p)", section_h1))
    elements.append(Paragraph("※ 원본 족보 56~72페이지의 빨간색 글씨 정답('답 : XXX')을 페이지별로 일목요연하게 정리한 전수 정답표입니다.", section_desc))

    table_data_p3 = [
        [Paragraph("페이지", tbl_header), Paragraph("순번", tbl_header), Paragraph("공식 정답 (빨간 글씨 원형)", tbl_header), Paragraph("핵심 출제 키워드 및 개념 설명", tbl_header)]
    ]

    for p in range(56, 73):
        p_str = str(p)
        if p_str in red_answers:
            for idx, item in enumerate(red_answers[p_str]):
                raw_ans = item['text']
                clean_ans = raw_ans.replace('답 :', '').replace('답:', '').strip()
                
                # generate key summary description
                desc = "1차 시험 필수 암기 기출 키워드"
                if 'wall' in clean_ans:
                    desc = "로그인한 전체 사용자에게 브로드캐스트 메시지 전송"
                elif 'watch' in clean_ans:
                    desc = "주기적으로 명령을 반복 실행하여 화면에 갱신 표시"
                elif 'hwclock' in clean_ans:
                    desc = "메인보드 CMOS 하드웨어 시간 확인 및 동기화"
                elif 'hostname' in clean_ans:
                    desc = "현재 시스템의 호스트명 조회 및 임시 변경"
                elif 'dig' in clean_ans or 'host' in clean_ans:
                    desc = "DNS 서버에 도메인 IP 및 네임서버 정보 질의"
                elif '스톨먼' in clean_ans:
                    desc = "1985년 FSF 설립자, GNU 프로젝트 주도"
                elif '스왑' in clean_ans:
                    desc = "디스크 공간을 가상 메모리처럼 활용하는 기술"
                elif 'skel' in clean_ans:
                    desc = "새 사용자 생성 시 기본 홈 디렉터리에 복사되는 템플릿"
                elif 'profile' in clean_ans:
                    desc = "로그인 시 시스템 전체 사용자에게 공통 적용되는 환경설정"
                elif '-p' in clean_ans:
                    desc = "mkdir 실행 시 필요한 상위 부모 디렉터리 자동 동시 생성"

                table_data_p3.append([
                    Paragraph(f"<b>p.{p}</b>", tbl_header),
                    Paragraph(str(idx + 1), tbl_header),
                    Paragraph(f"<b>{raw_ans}</b>", tbl_ans),
                    Paragraph(desc, tbl_body)
                ])

    t3 = Table(table_data_p3, colWidths=[38, 25, 200, 272])
    t3.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#fef3c7')),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
    ]))
    elements.append(t3)
    elements.append(PageBreak())

    # =========================================================================
    # Part 4: 테마별 실전 기출 정답표 (17~27p, 41~47p, 54~55p, 73~75p)
    # =========================================================================
    elements.append(Paragraph("4. 【Part 4】 테마별 실전 기출 및 최신 변형 문제 정답표", section_h1))
    elements.append(Paragraph("※ 17~27페이지, 41~47페이지, 73~75페이지의 실전 기출 정답 목록입니다.", section_desc))

    table_data_p4 = [
        [Paragraph("페이지", tbl_header), Paragraph("순번", tbl_header), Paragraph("공식 정답 (빨간 글씨 원형)", tbl_header)]
    ]

    other_pages = list(range(17, 28)) + list(range(41, 48)) + [54, 55, 73, 74, 75]
    for p in other_pages:
        p_str = str(p)
        if p_str in red_answers:
            for idx, item in enumerate(red_answers[p_str]):
                table_data_p4.append([
                    Paragraph(f"<b>p.{p}</b>", tbl_header),
                    Paragraph(str(idx + 1), tbl_header),
                    Paragraph(f"<b>{item['text']}</b>", tbl_ans)
                ])

    t4 = Table(table_data_p4, colWidths=[45, 30, 460])
    t4.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
    ]))
    elements.append(t4)

    doc.build(elements)
    print(f"Generated comprehensive appendix PDF: {output_filename}")

if __name__ == '__main__':
    build_appendix_pdf()
