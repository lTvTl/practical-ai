/**
 * questions.js 데이터 무결성 검증 스크립트
 * 
 * 사용법:
 *   node .antigravity/commands/validate-questions.js               # 전체 문항 검증
 *   node .antigravity/commands/validate-questions.js all           # 전체 문항 검증
 *   node .antigravity/commands/validate-questions.js <문제ID>      # 특정 문제 ID 단건 검증 (예: 5)
 *   node .antigravity/commands/validate-questions.js "<과목명>"   # 특정 과목 검증 (예: "소프트웨어 설계")
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.resolve(__dirname, '../../questions.js');
if (!fs.existsSync(filePath)) {
  console.error('❌ questions.js 파일을 찾을 수 없습니다:', filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const ctx = {};
try {
  vm.runInNewContext(content + '\n; this.QUESTION_BANK = QUESTION_BANK;', ctx);
} catch (err) {
  console.error('❌ questions.js 구문 분석 실패:', err.message);
  process.exit(1);
}

const bank = ctx.QUESTION_BANK;
if (!Array.isArray(bank)) {
  console.error('❌ QUESTION_BANK 배열이 존재하지 않습니다.');
  process.exit(1);
}

// 인자 파싱
const rawArg = process.argv[2] ? process.argv[2].trim() : '';
let filterId = null;
let filterSubject = null;

if (rawArg && rawArg.toLowerCase() !== 'all') {
  const parsedNum = parseInt(rawArg, 10);
  if (!isNaN(parsedNum) && String(parsedNum) === rawArg) {
    filterId = parsedNum;
  } else {
    filterSubject = rawArg;
  }
}

console.log(`📊 데이터베이스 총 문항 수: ${bank.length}개`);
if (filterId !== null) {
  console.log(`🎯 대상 필터: 문제 ID #${filterId}`);
} else if (filterSubject !== null) {
  console.log(`🎯 대상 필터: 과목 "${filterSubject}"`);
} else {
  console.log('🎯 대상 필터: 전체 문항');
}

const subjects = {};
const ids = new Set();
const allErrors = [];

// 1. 전체 ID 중복 및 과목 집계 (전역 정합성 유지)
bank.forEach((q, idx) => {
  const itemNo = `[#${idx + 1} / ID: ${q.id ?? '누락'}]`;
  if (q.id === undefined || q.id === null) {
    allErrors.push(`${itemNo} id 필드가 누락되었습니다.`);
  } else if (ids.has(q.id)) {
    allErrors.push(`${itemNo} 중복된 ID입니다: ${q.id}`);
  } else {
    ids.add(q.id);
  }

  if (q.subject && typeof q.subject === 'string') {
    subjects[q.subject] = (subjects[q.subject] || 0) + 1;
  }
});

// 2. 필터링된 문항 검증
let targetList = bank;
if (filterId !== null) {
  targetList = bank.filter(q => q.id === filterId);
  if (targetList.length === 0) {
    console.error(`\n❌ ID가 ${filterId}인 문제를 찾을 수 없습니다. (현재 ID 범위: 1 ~ ${bank.length})`);
    process.exit(1);
  }
} else if (filterSubject !== null) {
  targetList = bank.filter(q => q.subject && q.subject.includes(filterSubject));
  if (targetList.length === 0) {
    console.error(`\n❌ "${filterSubject}" 과목에 해당하는 문제를 찾을 수 없습니다.`);
    console.log('등록된 과목 목록:', Object.keys(subjects).join(', '));
    process.exit(1);
  }
}

const errors = [...allErrors.filter(e => {
  if (filterId !== null) return e.includes(`ID: ${filterId}`);
  return true;
})];

targetList.forEach((q, idx) => {
  const itemNo = `[ID: ${q.id ?? '누락'}]`;

  // 과목 체크
  if (!q.subject || typeof q.subject !== 'string') {
    errors.push(`${itemNo} 과목(subject)이 누락되었거나 유효하지 않습니다.`);
  }

  // 문제 지문 체크
  if (!q.question || typeof q.question !== 'string' || q.question.trim() === '') {
    errors.push(`${itemNo} 문제 지문(question)이 비어있습니다.`);
  }

  // 보기 체크
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    errors.push(`${itemNo} 보기(options)는 정확히 4개여야 합니다 (현재: ${q.options ? q.options.length : 0}개).`);
  } else {
    q.options.forEach((opt, optIdx) => {
      if (typeof opt !== 'string' || opt.trim() === '') {
        errors.push(`${itemNo} 보기 ${optIdx + 1}번이 빈 문자열입니다.`);
      }
    });
  }

  // 정답 인덱스 체크
  if (![0, 1, 2, 3].includes(q.answer_index)) {
    errors.push(`${itemNo} 정답 인덱스(answer_index)는 0~3 사이여야 합니다 (현재: ${q.answer_index}).`);
  }

  // 해설 체크
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim() === '') {
    errors.push(`${itemNo} 해설(explanation)이 누락되었습니다.`);
  }
});

// 결과 출력
console.log(`\n검사 문항 수: ${targetList.length}개`);

if (filterId !== null) {
  const item = targetList[0];
  console.log('\n--- 📋 문항 상세 정보 ---');
  console.log(`ID: ${item.id}`);
  console.log(`과목: ${item.subject}`);
  console.log(`지문: ${item.question}`);
  console.log('보기:');
  item.options.forEach((opt, i) => console.log(`  ${i + 1}) ${opt} ${i === item.answer_index ? '⭐ [정답]' : ''}`));
  console.log(`해설: ${item.explanation}`);
} else if (filterSubject === null) {
  console.log('\n📚 과목별 문항 분포:');
  Object.entries(subjects).forEach(([subj, count]) => {
    console.log(` - ${subj}: ${count}문제`);
  });
}

if (errors.length > 0) {
  console.error(`\n❌ 총 ${errors.length}개의 데이터 무결성 오류가 발견되었습니다:`);
  errors.forEach(e => console.error(`  • ${e}`));
  process.exit(1);
} else {
  console.log('\n✅ 검증 통과! (데이터 무결성 완벽)');
}
