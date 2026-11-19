# AGENTS.md — `study_04` 프로젝트 전용 에이전트 설정

이 파일은 `C:\Users\Jinsung\git\Practical_AI\study_04` 프로젝트 내에서만 동작하는 로컬 에이전트 및 스킬 규칙을 정의합니다.

## 등록된 프로젝트 전용 에이전트

| 에이전트 이름 (`TypeName`) | 역할 | 연결된 스킬 | 정의 파일 |
| :--- | :--- | :--- | :--- |
| **`code-reviewer`** | 코드를 읽고 버그 유무, 코딩 규칙(PEP 8, ES6+, 보안) 준수 여부를 점검하고 성능 최적화를 제안하는 전문 코드 품질 검토자 | `code-review` | `.agents/plugins/study04-agents-plugin/agents/code-reviewer/agent.json` |

## 트리거 규칙
- 사용자가 코드 리뷰, 버그 점검, 코딩 컨벤션 확인, 성능 최적화 제안을 요청할 때 `code-reviewer` 서브에이전트(`invoke_subagent`) 또는 `code-review` 스킬을 사용한다.
- 모든 에이전트는 현재 워크스페이스(`study_04`) 내부 파일만 대상으로 동작한다.

## 변경 이력
| 날짜 | 변경 내용 | 대상 | 사유 |
| :--- | :--- | :--- | :--- |
| 2026-11-17 | 첫 번째 에이전트 `code-reviewer` 및 `code-review` 스킬 생성 | `.agents/plugins/study04-agents-plugin` | 사용자 요청에 따른 프로젝트 전용 코드 품질 검토 에이전트 구축 |
