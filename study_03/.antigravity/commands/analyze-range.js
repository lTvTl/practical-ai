/**
 * questions.js 특정 범위(시작번호 ~ 끝번호) 문제 상세 분석 스크립트
 * 
 * 사용법:
 *   node .antigravity/commands/analyze-range.js <시작번호> <끝번호>
 *   예: node .antigravity/commands/analyze-range.js 1 20
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const startArg = process.argv[2];
const endArg = process.argv[3];

if (!startArg || !endArg) {
  console.error('❌ 사용법: node .antigravity/commands/analyze-range.js <시작번호> <끝번호>');
  console.error('   예시: node .antigravity/commands/analyze-range.js 1 20');
  process.exit(1);
}

const startId = parseInt(startArg, 10);
const endId = parseInt(endArg, 10);

if (isNaN(startId) || isNaN(endId) || startId <= 0 || endId <= 0) {
  console.error('❌ 시작번호와 끝번호는 1 이상의 정수여야 합니다.');
  process.exit(1);
}

if (startId > endId) {
  console.error(`❌ 시작번호(${startId})는 끝번호(${endId})보다 클 수 없습니다.`);
  process.exit(1);
}

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

// 범위 내 문제 필터링 (id 기준)
const rangeQuestions = bank.filter(q => q.id >= startId && q.id <= endId);

console.log('====================================================');
console.log(`📊 [퀴즈 범위 분석] ID #${startId} ~ #${endId}`);
console.log('====================================================');

if (rangeQuestions.length === 0) {
  console.error(`❌ 지정한 범위(${startId} ~ ${endId})에 해당하는 문제가 존재하지 않습니다.`);
  console.log(`💡 현재 DB 문제 ID 범위: 1 ~ ${bank.length}`);
  process.exit(1);
}

console.log(`✅ 범위 내 추출 문항 수: ${rangeQuestions.length}개 (전체 ${bank.length}개 중 ${(rangeQuestions.length / bank.length * 100).toFixed(1)}%)`);

// 1. 데이터 무결성 검증
const errors = [];
rangeQuestions.forEach(q => {
  const prefix = `[ID: ${q.id}]`;
  if (!q.question || typeof q.question !== 'string' || !q.question.trim()) errors.push(`${prefix} 문제 지문 누락`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${prefix} 보기 4개 불일치`);
  if (![0, 1, 2, 3].includes(q.answer_index)) errors.push(`${prefix} 정답 인덱스 범위 오류 (${q.answer_index})`);
  if (!q.explanation || typeof q.explanation !== 'string' || !q.explanation.trim()) errors.push(`${prefix} 해설 누락`);
});

// 2. 통계 집계
const subjects = {};
const answersCount = { 1: 0, 2: 0, 3: 0, 4: 0 };
let totalQuestionLen = 0;
let totalExplanationLen = 0;

rangeQuestions.forEach(q => {
  // 과목
  const subj = q.subject || '미지정';
  subjects[subj] = (subjects[subj] || 0) + 1;

  // 정답 (1-based 변환)
  if ([0, 1, 2, 3].includes(q.answer_index)) {
    answersCount[q.answer_index + 1]++;
  }

  // 글자 수
  totalQuestionLen += (q.question ? q.question.length : 0);
  totalExplanationLen += (q.explanation ? q.explanation.length : 0);
});

// 과목 분포 출력
console.log('\n📚 1. 과목별 문항 분포:');
Object.entries(subjects).forEach(([subj, count]) => {
  const pct = ((count / rangeQuestions.length) * 100).toFixed(1);
  console.log(`  • ${subj}: ${count}문제 (${pct}%)`);
});

// 정답 번호 분포 출력
console.log('\n🎯 2. 정답 번호 분포 (1~4번 균형도):');
[1, 2, 3, 4].forEach(num => {
  const count = answersCount[num];
  const pct = ((count / rangeQuestions.length) * 100).toFixed(1);
  const bar = '■'.repeat(Math.round(count));
  console.log(`  • [${num}번]: ${count}개 (${pct}%) \t${bar}`);
});

// 텍스트 길이 통계
console.log('\n📝 3. 문항 및 해설 통계:');
console.log(`  • 평균 지문 길이: ${(totalQuestionLen / rangeQuestions.length).toFixed(1)}자`);
console.log(`  • 평균 해설 길이: ${(totalExplanationLen / rangeQuestions.length).toFixed(1)}자`);

// 무결성 결과
console.log('\n🔍 4. 데이터 무결성 검증:');
if (errors.length === 0) {
  console.log('  ✅ 범위 내 모든 문항이 스키마 규격을 충족합니다.');
} else {
  console.log(`  ❌ ${errors.length}개의 오류 발견:`);
  errors.forEach(e => console.log(`    - ${e}`));
}

// 문항 요약 리스트
console.log('\n📋 5. 문항 요약 리스트:');
rangeQuestions.forEach(q => {
  const shortQuestion = q.question.length > 30 ? q.question.substring(0, 30) + '...' : q.question;
  console.log(`  [#${String(q.id).padStart(2, ' ')}] [${q.subject}] (정답: ${q.answer_index + 1}번) ${shortQuestion}`);
});
console.log('====================================================\n');
