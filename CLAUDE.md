# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) 
when working with code in this repository.

# Additional Instructions
- git workflow @docs/git-instructions.md

# 프로젝트 개요

- 모션 그래픽 디자이너 "꼬막무침"의 한국어 개인 포트폴리오 정적 사이트.
- HTML / CSS / Vanilla JS
- 빌드, 테스트, 린터, 패키지 매니저 없음
- `index.html`을 브라우저에서 직접 열어 확인
- Tailwind CSS는 CDN 방식 사용

# 주요 구조

- `index.html` — 메인 페이지
- `pages/animation.html`
- `pages/broadcast.html`
- `pages/etc.html`
- `css/style.css` — 공통 커스텀 스타일
- `js/script.js` — 공통 UI 동작
- `js/portfolio-data.js` — 포트폴리오 데이터
- `js/portfolio-render.js` — 카테고리 페이지 렌더링
- 카테고리 HTML 3개는 거의 동일한 구조다.
- 헤더, 푸터, Tailwind 설정 등 공통 영역 변경 시 4개 HTML 파일을 모두 확인한다.

# 포트폴리오 데이터

- 영상 추가/수정은 기본적으로 `js/portfolio-data.js`에서 관리한다.
- 카테고리:
  - `animation`
  - `broadcast`
  - `etc`
- 영상 파일 경로:
  - `videos/{category}/`
- 카테고리 페이지의 JS 로드 순서는 유지한다.
  1. `script.js`
  2. `portfolio-data.js`
  3. `portfolio-render.js`

# 작업 규칙

- 기존 디자인과 레이아웃을 임의로 크게 변경하지 않는다.
- 수정 전 관련 파일 구조를 먼저 확인한다.
- 중복 구조를 수정할 때 관련 HTML 파일도 함께 확인한다.
- 불필요한 라이브러리나 빌드 시스템을 추가하지 않는다.
- 가능한 한 현재 HTML/CSS/Vanilla JS 구조를 유지한다.
- 이메일 변경 시 `js/script.js`와 `index.html`을 모두 확인한다.
- `git push`는 실행하지 않는다.
- 중요한 변경 사항은 한국어로 설명한다.

# 주의

- `script.js`는 모바일 메뉴 관련 요소를 참조하므로 관련 마크업 제거 시 JS 오류 여부를 확인한다.
- `portfolio-data.js`에는 외부 사용자 입력이나 검증되지 않은 데이터를 직접 넣지 않는다.