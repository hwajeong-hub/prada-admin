---
name: PRADA 어드민
version: 1.0.0
source:
  screens: "Figma TZaAAe9JHlRDhSF4JtLDqQ › draft › PRADA (4259:36390)"
  designSystem: "Figma gvxPykrBYRlbCzyM5wTqWz"
  code: "prada.css (토큰·컴포넌트) · prada.js (셸·공통 동작)"
colors:
  text-primary: "#111111"
  text-secondary: "#333333"
  text-tertiary: "#555555"
  text-subtle: "#9E9E9E"
  text-disabled: "#DDDDDD"
  text-inverse: "#FFFFFF"
  text-error: "#FE1818"
  text-link: "#3B82F6"
  text-brand-light: "#32558D"
  bg-surface: "#FFFFFF"
  bg-subtle: "#F8F8F8"
  bg-disabled: "#F5F5F5"
  bg-table-header: "#EEEEEE"
  bg-table-cell-hover: "#F8F8F8"
  bg-brand: "#1B2A41"
  bg-brand-hover: "#2D3F5C"
  bg-brand-light: "#EDF0F5"
  bg-brand-light-hover: "#D0D9E6"
  bg-dim: "#0B192F4D"
  bg-dim-white: "#FFFFFF0F"
  border-primary: "#9E9E9E"
  border-secondary: "#DDDDDD"
  border-tertiary: "#EEEEEE"
  border-disabled: "#E4E4E4"
  border-brand: "#1B2A41"
  border-brand-light: "#32558D"
  border-brand-light-hover: "#32558D4D"
  border-error: "#FE1818"
  border-select: "#3B82F6"
  icon-default: "#2D2D2D"
  icon-subtle: "#9E9E9E"
  icon-brand: "#1B2A41"
  icon-error: "#FF6262"
  icon-success: "#26C28E"
  badge-dark-green: "#077E57"
  badge-green: "#13AD7A"
  badge-blue: "#3B82F6"
  badge-red: "#FE1818"
  badge-black: "#2D2D2D"
  badge-gray: "#9E9E9E"
  gray-600: "#555555"
  gray-800: "#2D2D2D"
  chart-avg: "#13AD7A"
  chart-avg-disabled: "#CBE9D3"
  chart-max: "#FE1818"
  chart-max-disabled: "#F4CEC6"
  chart-min: "#3B82F6"
  chart-min-disabled: "#CEDEF8"
typography:
  title-semibold:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 24px
    lineHeight: 36px
    fontWeight: 600
    letterSpacing: -0.02em
  heading-1-semibold:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 22px
    lineHeight: 30px
    fontWeight: 600
    letterSpacing: -0.02em
  heading-2-semibold:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 20px
    lineHeight: 30px
    fontWeight: 600
    letterSpacing: -0.02em
  heading-3-semibold:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 18px
    lineHeight: 27px
    fontWeight: 600
    letterSpacing: -0.02em
  body-1:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 16px
    lineHeight: 24px
    fontWeight: 400
    letterSpacing: -0.02em
  body-2:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 15px
    lineHeight: 22.5px
    fontWeight: 400
    letterSpacing: -0.02em
  body-3:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 14px
    lineHeight: 20px
    fontWeight: 400
    letterSpacing: -0.02em
  label-1:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 13px
    lineHeight: 20px
    fontWeight: 400
    letterSpacing: -0.02em
  label-2:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 12px
    lineHeight: 16px
    fontWeight: 400
    letterSpacing: -0.02em
  caption-1:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 11px
    lineHeight: 16.5px
    fontWeight: 400
    letterSpacing: -0.02em
spacing:
  "2": 2px
  "4": 4px
  "6": 6px
  "8": 8px
  "10": 10px
  "12": 12px
  "14": 14px
  "16": 16px
  "18": 18px
  "20": 20px
  "24": 24px
  "30": 30px
  "32": 32px
  "40": 40px
radius:
  none: 0px
  xxs: 2px
  xs: 4px
  s: 6px
  m: 8px
  l: 10px
  xl: 12px
  full: 100px
elevation:
  depth-1: "0 2px 8px rgba(11,25,47,.07)"
  depth-2: "0 3px 6px rgba(11,25,47,.07)"
  depth-3: "2px 3px 12px rgba(11,25,47,.08)"
size:
  control-lg: 40px
  control-md: 34px
  control-sm: 24px
  header: 52px
  sidenav: 180px
motion:
  state: "200ms ease"
  enter: "150ms ease-out"
  exit: "0ms"
components:
  button-primary:
    backgroundColor: "{colors.bg-brand}"
    textColor: "{colors.text-inverse}"
    radius: "{radius.none}"
    height: "{size.control-lg}"
    typography: "{typography.label-1}"
  button-line:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-secondary}"
    radius: "{radius.none}"
  button-secondary:
    backgroundColor: "{colors.bg-brand-light}"
    textColor: "{colors.text-brand-light}"
    borderColor: "{colors.border-brand-light}"
    radius: "{radius.none}"
  button-disabled:
    backgroundColor: "{colors.bg-disabled}"
    textColor: "{colors.text-disabled}"
  text-input:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-primary}"
    radius: "{radius.none}"
    height: "{size.control-lg}"
    typography: "{typography.label-1}"
  table-header:
    backgroundColor: "{colors.bg-table-header}"
    textColor: "{colors.text-tertiary}"
    borderColor: "{colors.border-secondary}"
    typography: "{typography.label-2}"
  table-cell:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-secondary}"
    typography: "{typography.label-2}"
  sidenav:
    backgroundColor: "{colors.bg-brand}"
    textColor: "{colors.text-subtle}"
  toast:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-tertiary}"
    radius: "{radius.m}"
    shadow: "{elevation.depth-3}"
  tooltip:
    backgroundColor: "{colors.gray-600}"
    textColor: "{colors.text-inverse}"
    radius: "{radius.xs}"
  chart-tooltip:
    backgroundColor: "{colors.gray-800}"
    textColor: "{colors.text-inverse}"
    radius: "{radius.s}"
  chip-selected:
    backgroundColor: "{colors.bg-brand-light}"
    textColor: "{colors.text-brand-light}"
    borderColor: "{colors.border-brand-light}"
    radius: "{radius.xs}"
  metric-highlight:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-link}"
  modal:
    backgroundColor: "{colors.bg-surface}"
    radius: "{radius.l}"
    shadow: "{elevation.depth-2}"
  dim:
    backgroundColor: "{colors.bg-dim}"
---

# PRADA 어드민 디자인 시스템

위 YAML 토큰이 정답이고, 아래 본문은 **왜 그렇게 쓰는지**다. 둘이 어긋나면 토큰을 따르고 본문을 고친다.
코드에서는 `prada.css`의 CSS 변수로 쓴다 (`--text-primary`, `--bg-brand`, `--radius-m`, `--shadow-2`, `--motion-state` …). 글자는 `.label-1-regular` 같은 클래스로 쓴다.
화면별 세부 수치(열 너비, 문구, 팝업 크기)는 `../PRADA_DESIGN_RULES.md` §3에 있다. 이 문서는 모든 화면에 공통인 기준만 담는다.

## Overview
- 인상: **차분한 · 밀도 높은 · 정확한**. 광고 운영자가 하루 종일 표와 숫자를 보는 업무용 어드민이다. 장식보다 읽기 쉬움과 실수 방지가 먼저다.
- 사용자: 마스터(운영) · 총판 · 대행사 · 광고주(일반). 같은 화면을 권한에 따라 기능만 덜어서 보여 준다(Layout › 권한).
- 화면은 **PC 1920×1080**과 **모바일 360** 두 벌을 같이 만든다. 1920에서는 Figma와 같은 위치·크기여야 하고, 그 사이 폭에서는 깨지지 않게 반응한다.

## Colors
- **브랜드 색은 Navy 하나(`bg-brand` #1B2A41)**. 주요 버튼, 사이드바, 체크박스 ON, 포커스 테두리, 선택된 Segmented가 모두 이 색이다. 두 번째 강조색을 만들지 않는다.
- Semantic 토큰(`text-*`, `bg-*`, `border-*`, `icon-*`)만 쓴다. Primitive(`Gray/900`, `Navy/600`)를 화면에 직접 쓰지 않는다. 예외: 로고 워드마크.
- 글자 위계는 `text-primary`(본문·값) → `text-secondary`(섹션 제목) → `text-tertiary`(표 머리·라벨) → `text-subtle`(설명·placeholder) 순으로 흐려진다.
- `text-link`(#3B82F6)는 **링크와 "지금 고른 항목"**(현황 카드 강조)에만 쓴다.
- 상태 색은 상태를 알릴 때만: 오류·필수 표시 `text-error`, 상태 배지는 `badge-*`(정상 green · 오류 red · 대기 gray, 권한은 광고주 dark-green · 대행사 blue · 총판사 red · 관리자 black). 배지는 **배경 없이 글자색만** 쓴다.
- 딤(`bg-dim`)은 모달·Drawer·모바일 메뉴 뒤에만. 로딩 오버레이도 같은 딤을 쓴다.
- 날짜 강조: 종료예정·종료 광고의 종료일은 `text-error`.
- 토스트 아이콘 원은 `icon-error`(#FF6262) / `icon-success`(#26C28E) — 글자색 `text-error`보다 부드러운 별도 색이다.
- 대비: Disabled 버튼(1.25:1)은 "누를 수 없음"을 보여 주려는 의도. 강조 숫자 `text-link`(3.7:1)는 24px 큰 글자라 큰 글자 기준(3:1)을 넘는다 — 작은 글자에는 쓰지 않는다.

## Typography
- 폰트는 **Pretendard 하나**, 자간은 항상 **-2%**. 텍스트마다 위 스타일 중 하나를 쓴다(굵기만 SemiBold 600 / Medium 500 / Regular 400으로 바꾼다).
- 쓰임: 페이지 제목 `heading-1-semibold` · 카드 제목 `heading-2-semibold` · 현황 숫자 `title-semibold` · 버튼·입력 `label-1` · 표 `label-2` · 사이드바 메뉴 `body-2-semibold` · 도움말·오류 문구 `caption-1`.
- 위계는 크기보다 **굵기와 색**으로 먼저 만든다. 표 안에서는 12px 하나로 두고, 강조(순위, 상품명)는 SemiBold나 색으로만 준다.
- 모바일은 한 단계씩 작게: 현황 숫자 24 → 18, 카드 제목 20 → 16, 아코디언 질문 14 → 12.

## Spacing
- 간격은 `2 4 6 8 10 12 14 16 18 20 24 30 32 40`만 쓴다.
- **가까운 것일수록 좁게**: 아이콘↔글자 4 · 라벨↔입력 6 · 입력↔오류 문구 4 · 버튼끼리 8 · 툴바↔표 12 · 폼 필드 사이 16~24 · 검색↔툴바↔표↔페이지 이동 24 · 현황 카드↔목록 40.
- 페이지 여백: 본문 좌우 24(PC) / 20(모바일), 제목 영역 위 32 아래 40(PC). 모달·Drawer 위아래 40.
- Figma 테두리는 **안쪽(inside)**이다. CSS 패딩 = Figma 패딩 − 1(테두리), 자식이 있는 박스는 `outline: 1px; outline-offset: -1px`로 크기를 맞춘다.

## Layout
- **셸**: 헤더 52(흰 배경, 아래 1px + Depth 1) · 왼쪽 사이드바 180(Navy, Depth 2) · 본문 폭 1692(1920 기준). 모바일은 사이드바 대신 오른쪽에서 나오는 300 메뉴.
- **목록 템플릿**: 제목·설명 → (현황 카드) → 검색(Dropdown 140 + Search Field 410) → 툴바(선택 개수 …… 버튼) → 표(머리 34 · 행 40) → 페이지 이동(가운데 번호, 오른쪽 이동·N개씩 보기).
- **기간 선택**: [시작일 140] ~ [종료일 140] + 빠른 버튼(55 고정). 모바일은 날짜 두 칸만.
- **표**: 열 너비는 Figma 값 그대로 고정하고 남는 폭은 긴 글자 열(상품명·제목·메모)이 가진다. 모바일은 표를 줄이지 않고 **가로 스크롤**.
- **권한(첫 화면에서 선택)**: 마스터는 전부. 총판·대행사·광고주(일반)는 메뉴 7개(공지·FAQ·계정·광고·정산로그·수정관리·일별마감)와 **읽기·기본 행동만** — 작성·등록·삭제 툴바, 로직관리·추출·엑셀 저장 같은 운영 기능, 서비스관리·사용시간 설정·캠페인은 숨긴다. 순위조회는 권한과 무관한 별도 어드민(로고·메뉴 없는 셸).
- **반응형**: 현황 카드 값·라벨은 한 줄을 지키고, 좁아지면 기간 값은 "~" 뒤에서 두 줄 → 그래도 넘치면 글자를 줄인다(최소 12px).

## Radius
- **입력·버튼·드롭다운·표·헤더·사이드바는 각지게(0)**. 업무 도구의 단단한 인상을 만든다.
- 둥근 것은 "떠 있는 것"과 "작은 표식"만: 체크박스 2 · 툴팁·칩 4 · Segmented 항목 6 · 토스트·카드 박스·Segmented 8 · 모달 10 · 상세 토스트 12 · 태그·원형 버튼 100.
- 예외: 로그인 입력창 4.

## Elevation
- Depth 1: 헤더·사용자 메뉴 / Depth 2: 사이드바·현황 카드·모달·Drawer·툴팁 / Depth 3: 토스트·드롭다운 목록.
- 표·입력·버튼에는 그림자를 쓰지 않는다. 그림자가 있으면 "떠 있는 것"이라고 읽힌다.

## Components
상세 명세(속성·쓸 때·쓰지 말 때)는 `components/*.json`. 공통 원칙만 적는다.
- **버튼**: Large 40(화면 툴바) / Medium 34(모달·Drawer 하단) / Small 24. Primary는 그 영역의 핵심 행동 하나(툴바 [연장]·[등록], 팝업 [저장]). 나머지는 Line, 보조 강조는 Secondary.
- **입력**: DS 7가지 상태(Default·Hover·Focus·Typing·Completed·Error·Disabled). 오류는 **빨간 테두리 + 아래 4px 빨간 문구**. 숫자 칸은 숫자 외 입력을 막는다.
- **토스트**: 위 16에서 스프링으로 등장(270ms) → 2.5초 → 35ms 퇴장. Slim(문구만) / Detail(제목+설명). 완료는 Success, 막힌 행동은 Error.
- **모달·Drawer**: 제목(Body 1/SemiBold) + 아래 1px 선 → 내용 → 하단 CTA. 열릴 때 **버튼에 자동 포커스 금지**(패널에 포커스). 바깥·Esc로 닫힌다. 화면보다 길면 바깥(딤)이 스크롤.
- **확인창(Text Modal 360)**: 되돌릴 수 없는 행동(삭제, 광고 ON/OFF)에만.

### 모션
- 상태 변화(hover·focus·선택·색 바뀜) **200ms ease** / 나타나기(목록·메뉴·모달·툴팁) **150ms ease-out 페이드 + 위에서 4px** / 사라지기 **즉시**.
- 선택 이동은 미끄러지게: Segmented 선택 배경 200ms 이동, 토글 손잡이 200ms, 아코디언·사이드바 하위 메뉴 펼침 200ms.
- `prefers-reduced-motion`이면 모두 끈다.

## Do's and Don'ts
- Do: Figma 수치를 **브라우저에서 재서** 1920 기준으로 맞춘 뒤 넘긴다(위치·크기 ±1px).
- Do: 화면마다 기본 + 빈 상태 + 오류 상태를 같이 만든다(빈 상태 = Empty State, 오류 = 토스트·입력 오류).
- Do: 시안에 없는 값·문구를 정했으면 "임의"라고 남기고 확인받는다.
- Don't: 토큰에 없는 hex·px를 쓰지 않는다. 가장 가까운 토큰을 고르고 안 되면 "토큰 없음"으로 표시한다.
- Don't: 입력·버튼을 둥글게 하지 않는다. 두 번째 브랜드 색을 만들지 않는다.
- Don't: 디자인(시안)과 동작(기획서)이 다르면 **디자인은 시안, 동작은 기획서**를 따른다. 기획서의 화면 그림으로 시안 디자인을 바꾸지 않는다.
- Don't: 선택이 필요한 버튼이라도 Disabled로 숨기지 않는다(광고관리 수정·삭제·연장 — 누르면 "광고를 선택해주세요."). 예외: 계정관리 [삭제], 합계가 맞지 않는 [저장].
