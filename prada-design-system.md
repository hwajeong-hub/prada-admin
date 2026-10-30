# PRADA 디자인 시스템

> 리워드 어드민(백오피스) 서비스를 위한 PRADA 디자인 시스템 문서입니다.
> 원본: [Figma — Prada 디자인 시스템](https://www.figma.com/design/GJ0YqpZje6k7W9qjncaAll/)

| 항목 | 내용 |
|---|---|
| 버전 | v.1.0 |
| 작업자 | 최화정 |
| 제작 기간 | 2026.09.30 – 2026.10.06 |
| 최근 업데이트 | 2026.10.30 — 로그인 규격을 Figma(HERMES-PRADA · 1. 로그인/로그아웃) 기준으로 수정, [Login 화면](#222-login) 추가<br>2026.10.06 — PRADA · MAKE · SEARCH 화면을 기준으로 디자인 시스템 업데이트 |
| 기본 폰트 | Pretendard (UI) · Gotham Rounded Bold (로고 · 파비콘) |
| 서비스 | 19개 — 로고 · 파비콘만 서비스별로 다르고, 나머지는 공통 |

### 표기 규칙

- 문서 속 **(실서비스)** 는 운영 중인 화면(prada-pang.com)에서 확인한 값입니다.
- **(제안)** 은 PRADA 원본에 없어 새로 제안한 상태입니다. 주로 Hover · Focus · Error · Disabled가 여기에 해당합니다.
- **(원본)** 은 기존 PRADA 디자인 파일의 값입니다.

---

## 목차

1. [Foundations](#1-foundations)
   - [Color](#11-color) · [Typography](#12-typography) · [Spacing · Radius · Effect](#13-spacing--radius--effect) · [Logo · Favicon](#14-logo--favicon) · [Responsive](#15-responsive)
2. [Components](#2-components)
   - ① Input: [Text Field](#21-text-field) · [Dropdown / Menu](#22-dropdown--menu) · [Check Box](#23-check-box) · [Date Picker · Full Calendar](#24-date-picker--full-calendar)
   - ② Data Display: [Table](#25-table) · [Tag / Badge](#26-tag--badge) · [Metric Card](#27-metric-card) · [Chart](#28-chart)
   - ③ Actions: [Button](#29-button) · [Icon](#210-icon)
   - ④ Navigation: [Header](#211-header) · [Tab](#212-tab) · [Side Navigation](#213-side-navigation) · [Accordion](#214-accordion) · [Segmented Control](#215-segmented-control) · [Pagination](#216-pagination)
   - ⑤ Feedback: [Alert](#217-alert) · [Modal / Dialog / Drawer](#218-modal--dialog--drawer) · [Tooltip](#219-tooltip) · [Loading](#220-loading)
   - ⑥ Pattern: [Empty State](#221-empty-state) · [Login](#222-login)

---

## 1. Foundations

### 1.1 Color

토큰은 **Primitive → Semantic** 2단계로 구성합니다. 컴포넌트는 Primitive를 직접 쓰지 않고 **Semantic 토큰을 통해 참조**합니다. 모든 컬렉션은 Light 단일 모드입니다.

#### Primitive

각 스케일은 5(가장 밝음)부터 90(가장 어두움) 순서로 정렬합니다.
`—` 표시는 OKLab 보간값입니다. 스케일을 채우려고 만든 값이라 실제 디자인에는 쓰지 않습니다.

| 단계 | Gray | Cool Gray | Navy | Blue | Red | Green | Purple |
|---|---|---|---|---|---|---|---|
| 90 | `#111111` | `#1A1C20` — | `#0B192F` | `#001D5D` — | `#620000` — | `#083F29` — | `#2A0073` — |
| 80 | `#2D2D2D` | `#26282E` — | `#0D1D35` | `#033580` — | `#8F0000` — | `#286E4F` | `#4000A0` — |
| 70 | `#333333` | `#33363D` | `#192940` | `#164DA6` — | `#BF0000` — | `#307A59` | `#581FCE` — |
| 60 | `#555555` | `#55585E` — | **`#1B2A41`** | `#2867CD` — | `#F10909` | `#0BA36E` | `#7238FF` |
| 50 | `#9E9E9E` | `#797C82` — | `#2D3F5C` | `#3B82F6` | `#FF3E26` | `#10B981` | `#7740FE` |
| 40 | `#DDDDDD` | `#A0A2A7` — | `#32558D` | `#649DFA` — | `#FF705A` — | `#3EB66E` | `#946CFF` — |
| 30 | `#E4E4E4` | `#C8CACE` | `#6480AB` — | `#8AB6FD` — | `#FF9784` — | `#78C891` — | `#B191FF` |
| 20 | `#EEEEEE` | `#CACDD8` | `#99ACC9` — | `#B0CEFE` — | `#FFBBAC` — | `#A6DAB5` — | `#C9B6FF` — |
| 10 | `#F5F5F5` | `#E3E5EB` — | `#D0D9E6` — | `#D6E6FF` — | `#FFDCD5` — | `#D2ECD9` — | `#E3DAFF` — |
| 5 | `#F8F8F8` | `#F0F1F4` — | `#EDF0F5` | `#EAF2FE` — | `#FFEDE9` — | `#E8F5EB` — | `#F0ECFF` — |

**White** `#FFFFFF`

| 컬러 | 역할 |
|---|---|
| White | 기본 배경, 어두운 배경 위 텍스트·아이콘 |
| Navy | 브랜드 메인 컬러입니다. **Navy 60이 Primary**이며 주요 버튼·사이드 내비게이션·포커스에 씁니다. |
| Gray (Neutral) | 텍스트·보더·배경 등 UI의 기반 컬러 |
| Cool Gray | 보조 중립 컬러. 인풋·버튼 보더, 비활성 날짜 |
| Blue | 링크, 정보(Info), 차트 시리즈 3 |
| Red | 오류, 필수 표시, 삭제 같은 파괴적 액션, 차트 시리즈 2 |
| Green | 성공, 완료, 정상, 차트 시리즈 1 |
| Purple | 강조(Highlight), 가이드 문서 어노테이션 |

**Overlay (투명도 컬러)**

| 토큰 | 값 | 용도 |
|---|---|---|
| Overlay/Dim | `#000000` 45% | 모달 배경 Dim |
| Overlay/Selected | `#1B2A41` 8% | 선택된 행·항목 배경 |
| Overlay/Blue 50 4 | `#3B82F6` 4% | 선택된 날짜 셀 배경 (Full Calendar) |
| Overlay/Navy Text 50 | `#1B2A41` 50% | |
| Overlay/Black 5 · 8 · 10 · 15 · 30 · 40 | `#000000` 5~40% | 그림자. Black 30은 Action Button 그림자 |
| Overlay/Gray 70 10 | `#333333` 10% | Alert 그림자 |
| Overlay/Purple 60 10 | `#7238FF` 10% | 가이드 컴포넌트 영역 |
| Overlay/Cool Gray 50 5 · 16 | `#797C82` 5% · 16% | 가이드 케이스 영역 · 칩 |
| Overlay/White 6 | `#FFFFFF` 6% | 내비게이션 하위 메뉴 배경 |
| Overlay/White 75 | `#FFFFFF` 75% | 내비게이션 하위 메뉴 텍스트 |

#### Semantic

용도 기반 토큰입니다. 컴포넌트는 Semantic 변수에 연결합니다.

**Text**

| 토큰 | 참조 | 용도 |
|---|---|---|
| Text/Primary | Gray 70 | 기본 본문, 테이블 텍스트 |
| Text/Secondary | Gray 60 | 보조 설명 |
| Text/Tertiary | Gray 50 | 플레이스홀더, 비활성 |
| Text/Disabled | Gray 50 | 비활성 텍스트 |
| Text/Strong | Gray 90 | 강한 강조 |
| Text/Subtle | Cool Gray 30 | 달력의 이전·다음 달 날짜 |
| Text/Inverse | White | 어두운 배경 위 텍스트 |
| Text/Brand | Navy 60 | 브랜드 텍스트 |
| Text/Link | Blue 50 | 링크·정보 / 뱃지: 대행사, 연장·정보수정 |
| Text/Error | Red 50 | 오류·필수 / 뱃지: 총판사, 환불 |
| Text/Success | Green 60 | 성공·완료 / 뱃지: 광고주, 신규·신규정보 |
| Text/Nav Sub | Overlay/White 75 | 내비게이션 하위 메뉴 텍스트 |

**Background**

| 토큰 | 참조 | 용도 |
|---|---|---|
| Background/Default | White | 기본 배경 |
| Background/Subtle | Gray 5 | 페이지 배경, 테이블 헤더 |
| Background/Surface | Gray 10 | 카드·섹션 배경 |
| Background/Neutral | Gray 20 | Filled 태그, 테이블 헤더, FAQ 답변 |
| Background/Brand | Navy 60 | 주요 버튼 |
| Background/Brand Hover | Navy 50 | 미사용 (Primary 버튼 Hover는 색 변화 없이 그림자만 제거) |
| Background/Navigation | Navy 60 | 사이드 내비게이션 |
| Background/Nav Sub | Overlay/White 6 | 내비게이션 하위 단계 |
| Background/Hover | Gray 5 | Secondary 버튼 Hover, 테이블 행 Hover |
| Background/Cell Hover | Gray 30 | 테이블 셀 Hover |
| Background/Option Hover | Navy 10 | 드롭다운 옵션 Hover |
| Background/Selected | Overlay/Selected | 선택된 행·항목 |
| Background/Info Subtle | Overlay/Blue 50 4 | 정보·선택 강조 배경 — Full Calendar 선택된 날짜 |
| Background/Disabled | Gray 20 | 비활성 버튼·인풋 (제안) |
| Background/Input Disabled | Gray 10 | 인풋 비활성·읽기전용 |
| Background/Tooltip | Gray 60 | 툴팁 |
| Background/Dim | Overlay/Dim | 모달 Dim |
| Background/Loading Dim | Overlay/Black 15 | 로딩 오버레이 배경 (검정 15%) |

**Border**

| 토큰 | 참조 | 용도 |
|---|---|---|
| Border/Default | Gray 30 | 기본 보더, 디바이더 |
| Border/Input | Cool Gray 30 | 인풋·셀렉트·텍스트영역 |
| Border/Input Subtle | Cool Gray 20 | 미사용 (로그인 인풋은 Border/Strong을 씁니다) |
| Border/Button | Cool Gray 30 | Secondary 버튼·아이콘 버튼·Top 버튼 |
| Border/Strong | Gray 50 | Secondary 버튼 Hover, 강조 보더, 로그인 인풋 |
| Border/Emphasis | Gray 70 | 드롭다운 메뉴 보더, 선택된 탭 밑줄 |
| Border/Focus | Navy 60 | 포커스 |
| Border/Neutral | Gray 40 | 중립 보더 — Filter Chip 기본 테두리 (실서비스 `#D8D8D8` 근사) |
| Border/Info | Blue 50 | 정보·선택 강조 보더 — Full Calendar 선택된 날짜 |
| Border/Error | Red 50 | 오류 |
| Border/Brand | Navy 70 | Primary 버튼 |
| Border/Brand Hover | Navy 50 | Mobile Menu 로그아웃 버튼 보더 (Primary 버튼 Hover에는 사용하지 않음) |

**Icon**

| 토큰 | 참조 | 용도 |
|---|---|---|
| Icon/Default | Gray 70 | 기본 아이콘 |
| Icon/Subtle | Gray 50 | 비활성 내비게이션 아이콘, 테이블 필터 아이콘 |
| Icon/Disabled | Gray 50 | 비활성 |
| Icon/Hover | Navy 40 | 아이콘 버튼 Hover |
| Icon/Pressed | Navy 80 | 아이콘 버튼 Pressed·활성(필터 적용 등) |
| Icon/Inverse | White | 어두운 배경 위 |
| Icon/Brand | Navy 60 | 모바일 헤더 메뉴(햄버거) |

**Status**

| 토큰 | 참조 | 용도 |
|---|---|---|
| Status/Info | Blue 50 | 정보 |
| Status/Success | Green 60 | 성공 |
| Status/Error | Red 50 | 오류 |
| Status/Highlight | Purple 50 | 강조, 특별 기능 |
| Status/Positive | Green 40 | 상태 뱃지 정상(OK) |
| Status/Neutral | Gray 50 | 상태 뱃지 대기(WAIT) |

**Chart**

시리즈 순서는 1(평균) → 2(최고) → 3(최저)으로 고정합니다.

| 토큰 | 참조 | 용도 |
|---|---|---|
| Chart/Series 1 | Green 50 | 평균 순위 |
| Chart/Series 2 | Red 50 | 최고 순위 |
| Chart/Series 3 | Blue 50 | 최저 순위 |
| Chart/Series 1~3 Subtle | Green · Red · Blue 20 | 비선택 시리즈(툴팁 범례, 비선택 Hover 점) |
| Chart/Grid | Gray 30 | 격자선 (0.6px) |
| Chart/Guide Line | Gray 50 | Hover 세로 가이드 점선 |
| Chart/Tooltip Background | Gray 70 | 툴팁 배경 |
| Chart/Tooltip Text | White | 툴팁 텍스트 |
| Chart/Tooltip Legend Border | White | 툴팁 범례 1px 테두리 |

**Shadow (색상)**

| 토큰 | 참조 |
|---|---|
| Shadow/Action Button | Overlay/Black 30 |
| Shadow/Card | Overlay/Black 5 |
| Shadow/Navigation | Overlay/Black 10 |
| Shadow/Dropdown Key · Ambient | Overlay/Black 8 · 5 |
| Shadow/Alert | Overlay/Gray 70 10 |
| Shadow/Modal | Overlay/Black 15 |
| Shadow/Tooltip | Overlay/Black 40 |

**Annotation (가이드 문서 전용)**

| 토큰 | 참조 | 용도 |
|---|---|---|
| Annotation/Strong · Subtle | Purple 60 · 30 | 어노테이션 |
| Annotation/Component Area | Overlay/Purple 60 10 | 메인 컴포넌트 영역 배경 |
| Annotation/Case Area | Overlay/Cool Gray 50 5 | Variants 케이스 패널 배경 |
| Annotation/Chip | Overlay/Cool Gray 50 16 | 속성 값 칩 |
| Annotation/Variant Chip · Text | Green 50 · Green 10 | 케이스 그룹 칩 |
| Annotation/Main Chip | Purple 10 | Main Component 칩 |

---

### 1.2 Typography

- **폰트:** Pretendard
- **단계:** Heading · Body · Label · Caption
- **자간:** 모든 스타일 공통 **-2%**

| 스타일 | 굵기 | 크기 | 행간 | 주요 용도 |
|---|---|---|---|---|
| Title/SemiBold | SemiBold | 24 | 150% (36) | 캠페인 섹션 제목, 공지사항 View 팝업 제목, 계정 팝업 현황 수치 |
| Heading 1/SemiBold | SemiBold | 22 | 136.36% (30) | 페이지 타이틀, 현황 수치(Metric) |
| Heading 2/SemiBold | SemiBold | 20 | 150% (30) | 섹션 타이틀 |
| Heading 2/Regular | Regular | 20 | 150% (30) | 모달 타이틀 |
| Heading 3/SemiBold | SemiBold | 18 | 150% (27) | 모바일 메뉴 타이틀 |
| Heading 3/Medium | Medium | 18 | 150% (27) | 프로필 이니셜 |
| Body 1/SemiBold | SemiBold | 16 | 150% (24) | 카드·Drawer 타이틀, 선택된 탭·페이지 번호 |
| Body 1/Medium | Medium | 16 | 150% (24) | 페이지 번호 |
| Body 1/Regular | Regular | 16 | 150% (24) | 탭, Empty State 메시지 |
| Body 2/SemiBold | SemiBold | 15 | 150% (22.5) | 사이드 내비게이션 메뉴 |
| Body 2/Regular | Regular | 15 | 150% (22.5) | 선택 개수 라벨(N개 선택됨) |
| Body 3/SemiBold | SemiBold | 14 | 142.86% (20) | FAQ 질문, 페이지 내 폼 라벨 |
| Body 3/Regular | Regular | 14 | 142.86% (20) | FAQ 답변, 현황 라벨 |
| Label 1/Bold | Bold | 13 | 153.85% (20) | Action Button |
| Label 1/SemiBold | SemiBold | 13 | 153.85% (20) | 헤더 사용자명, 선택 메뉴 |
| Label 1/Medium | Medium | 13 | 153.85% (20) | 필수 표시, Segmented 선택 |
| **Label 1/Regular** | Regular | 13 | 153.85% (20) | **기본 UI 텍스트.** 버튼·인풋·셀렉트·폼 라벨·Tag·Alert·목록 본문 |
| Label 2/SemiBold | SemiBold | 12 | 133.33% (16) | Status Badge, 테이블 강조 |
| Label 2/Medium | Medium | 12 | 133.33% (16) | 모바일 메뉴 보조 |
| Label 2/Regular | Regular | 12 | 133.33% (16) | 테이블 헤더·셀, 툴팁, 인풋 설명 |
| Caption 1/SemiBold | SemiBold | 11 | 150% (16.5) | 메뉴 뱃지 |
| Caption 1/Medium | Medium | 11 | 150% (16.5) | 폼 보조 텍스트 |
| Caption 1/Regular | Regular | 11 | 150% (16.5) | 내비게이션 섹션 라벨, 권한 표시, 차트 축 |
| Caption 2/Medium | Medium | 10 | 130% (13) | 인풋 카운터 |
| Caption 2/Regular | Regular | 10 | 130% (13) | 필터칩, 폼 보조 |
| Caption 3/Medium | Medium | 8 | 100% (8) | Status Badge 점(●) |

---

### 1.3 Spacing · Radius · Effect

Spacing과 Radius는 **Number Primitive**(`0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 30, 32, 40, 100`)를 참조합니다.

> ⚠️ 개별 컴포넌트를 수정할 때 Number 값을 바꾸지 마세요. Number를 바꾸면 이를 참조하는 Spacing·Radius가 모두 함께 바뀝니다. (예: Number/8을 바꾸면 Spacing/8과 Radius/M이 같이 바뀜)

#### Spacing

Auto Layout의 Gap · Padding에 사용합니다. (단위 px)

| 토큰 | 값 | CSS 변수 | 비고 |
|---|---|---|---|
| Spacing/0 | 0 | `var(--spacing-0)` | |
| Spacing/2 | 2 | `var(--spacing-2)` | |
| Spacing/4 | 4 | `var(--spacing-4)` | |
| Spacing/6 | 6 | `var(--spacing-6)` | |
| Spacing/8 | 8 | `var(--spacing-8)` | |
| Spacing/10 | 10 | `var(--spacing-10)` | |
| Spacing/12 | 12 | `var(--spacing-12)` | |
| Spacing/16 | 16 | `var(--spacing-16)` | |
| Spacing/20 | 20 | `var(--spacing-20)` | |
| Spacing/24 | 24 | `var(--spacing-24)` | |
| Spacing/30 | 30 | `var(--spacing-30)` | Action Button 좌우 패딩 |
| Spacing/32 | 32 | `var(--spacing-32)` | |
| Spacing/40 | 40 | `var(--spacing-40)` | |

#### Radius

| 토큰 | 값 | CSS 변수 | 용도 |
|---|---|---|---|
| Radius/None | 0 | `var(--radius-none)` | 기본 인풋(Text Field Default) |
| Radius/XS | 4 | `var(--radius-xs)` | Action Button, 로그인 인풋, 툴팁 |
| Radius/S | 6 | `var(--radius-s)` | Segmented Item |
| Radius/M | 8 | `var(--radius-m)` | Alert Slim, User Menu |
| Radius/L | 10 | `var(--radius-l)` | Modal |
| Radius/XL | 12 | `var(--radius-xl)` | 2줄 Alert (Detail) |
| Radius/Full | 100 | `var(--radius-full)` | Tag, Top Button, 달력 날짜 |

#### Effect (Shadow)

| 스타일 | 값 (x y blur color) | 용도 |
|---|---|---|
| Shadow/Action Button | 0 3 4 `#000` 30% | Action Button, Primary 버튼, 기간 빠른 선택의 선택 버튼 (로그인 버튼에는 쓰지 않음) |
| Shadow/Card | 0 2 5 `#000` 5% | 헤더, Metric Card, Top 버튼 |
| Shadow/Navigation | 4 0 5 `#000` 10% | 사이드 내비게이션 |
| Shadow/Dropdown | 0 4 8 `#000` 8% + 0 0 2 `#000` 5% | 유틸리티 드롭다운 메뉴 |
| Shadow/Alert | 0 4 20 `#333` 10% | Alert(토스트) |
| Shadow/Modal | 0 0 20 `#000` 15% | Modal, Drawer |
| Shadow/Tooltip | 1 1 4 `#000` 40% | 툴팁 |

---

### 1.4 Logo · Favicon

서비스(19개)마다 바뀌는 것은 **로고와 파비콘뿐**입니다. 컬러 · 타이포그래피 · 간격 · 컴포넌트 등 나머지 디자인 시스템은 모든 서비스가 공통으로 사용합니다.

| 컴포넌트 | 변형 | 설명 |
|---|---|---|
| **Logo** | Service = PRADA · GUARD · BULDAK · BATTERY · SEARCH · MAKE · MOUNTAIN · EASY · INDEX · AUSTIN · DOUBLE · PROBE · ROYAL · AURA · JAMONG · SERIES · JAMONG PLUS · GUARD PLUS · SIREN<br>Color = Navy · White | 서비스별 워드마크. **높이 14 공통** (로그인 화면만 높이 28 · 너비 132). Navy(Text/Brand)는 밝은 배경(Header · 로그인), White(Text/Inverse)는 어두운 배경(내비게이션 · 썸네일)에 씁니다. |
| **Favicon** | Service = PRADA · GUARD · BULDAK · BATTERY · SEARCH · MAKE · MOUNTAIN · EASY · INDEX · AUSTIN · DOUBLE · PROBE · ROYAL · AURA · JAMONG · SERIES · JAMONG PLUS · GUARD PLUS · SIREN<br>Size = 180 · 96 · 32 · 16 | 180 Apple Touch Icon · 96 데스크톱 바로가기 · 32 작업표시줄 · 16 브라우저 탭. 배경 Background/Brand + 서비스 첫 글자 심볼 Text/Inverse. |

- **워드마크 · 심볼 글꼴:** Gotham Rounded Bold (신규 서비스는 [LOGO & FAVICON MAKER](https://claude.ai/artifact/UJgKrXuSEo8kDvc6oSSJ2Q)로 생성)

**서비스별 예외**

| 서비스 | 예외 내용 |
|---|---|
| ROYAL | 자체 브랜드 색 사용 (토큰 미연결) — 로고 Navy 변형 `#6D28D9`, 파비콘 배경 `#651FD3` |
| SIREN | 자체 브랜드 색 `#E53935` 사용 (로고 · 파비콘 배경, 토큰 미연결). 파비콘 심볼은 이니셜 대신 사이렌 아이콘 |
| JAMONG PLUS · GUARD PLUS | 파비콘 심볼 `J+` · `G+` (첫 글자 + 플러스) |

**관리 방법**

1. 서비스별 컴포넌트를 따로 만들지 않고, Logo · Favicon 세트에 **Service 변형**으로 추가합니다.
2. 화면에서는 Logo 인스턴스의 **Service 속성만** 바꿉니다. Header는 Logo가 노출(Expose)돼 있어 Header를 선택한 상태에서 바로 바꿀 수 있습니다.
3. 신규 서비스는 아래 **SVG 추출 규칙**에 맞춰 만들면 그대로 Export해 개발에 전달할 수 있습니다.

#### SVG 추출 규칙

Logo · Favicon의 **각 변형(컴포넌트) 프레임이 곧 SVG 캔버스**입니다. 아래 규칙대로 만든 변형은 추가 편집 없이 바로 Export합니다.

**Export 설정 (Figma)**

| 항목 | 값 |
|---|---|
| 대상 | Logo · Favicon 세트의 변형 프레임 1개 = SVG 1개 |
| Format | SVG, 1x |
| Include "id" attribute | 끄기 |
| Outline text | 켜기 |
| Simplify stroke | 켜기 |

**Logo SVG 규격**

| 항목 | 규칙 |
|---|---|
| 캔버스 | 높이 **14** 고정, 너비는 원본 비율로 계산 후 **정수로 반올림** (소수 여백은 좌우 균등) |
| viewBox | `0 0 {너비} 14` — 여백 없이 글자가 캔버스에 꽉 차게 |
| 레이어 | 벡터 1개(`Wordmark`). 선(stroke)은 모두 아웃라인 처리 후 합치기 |
| 사용 요소 | `<svg>` + `<path>`만. `<g>` · `clip-path` · `mask` · `transform` · `stroke` 없음 |
| 색 | Navy `#1B2A41` (Text/Brand) · White `#FFFFFF` (Text/Inverse) 단색 |

| 서비스 | PRADA | GUARD | BULDAK | BATTERY | SEARCH | MAKE | MOUNTAIN |
|---|---|---|---|---|---|---|---|
| 너비 × 14 | 66 | 66 | 79 | 86 | 126 | 51.9 | 96.1 |

| 서비스 | EASY | INDEX | AUSTIN | DOUBLE | PROBE | ROYAL |
|---|---|---|---|---|---|---|
| 너비 × 14 | 45.5 | 55.4 | 65.2 | 72.9 | 60.3 | 59.4 |

| 서비스 | AURA | JAMONG | SERIES | JAMONG PLUS | GUARD PLUS | SIREN |
|---|---|---|---|---|---|---|
| 너비 × 14 | 53.3 | 79.2 | 59.4 | 131.4 | 117.4 | 68.4 |

**Favicon SVG 규격**

| 항목 | 규칙 |
|---|---|
| 캔버스 · viewBox | `0 0 {S} {S}` (S = 180 · 96 · 32 · 16) |
| 레이어 | `Background`(사각형) + `Symbol`(벡터 1개), 그룹 없음 |
| Background | `<rect width="S" height="S" rx="S÷6" fill="#1B2A41">` |
| Symbol | `<path fill="#FFFFFF">` — 서비스 워드마크의 첫 글자 |
| Symbol 영역 | 너비 S×0.611 · 높이 S×0.633 (180 기준 110×114) 안에 비율 유지해 맞추고 가운데 정렬 |
| 사용 요소 | `<svg>` + `<rect>` + `<path>`만. `clip-path` 없음 (프레임 Clip content 끄기) |

| Size | 180 | 96 | 32 | 16 |
|---|---|---|---|---|
| rx | 30 | 16 | 5.33333 | 2.66667 |
| Symbol 영역 | 110×114 | 58.7×60.8 | 19.6×20.3 | 9.8×10.1 |

**SVG 템플릿**

```svg
<!-- logo-{service}-navy.svg -->
<svg width="{W}" height="14" viewBox="0 0 {W} 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="…" fill="#1B2A41"/>
</svg>
```

```svg
<!-- favicon-{service}-32.svg -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="5.33333" fill="#1B2A41"/>
  <path d="…" fill="#FFFFFF"/>
</svg>
```

**파일 이름 · 전달 구조**

```text
brand/
  {service}/
    logo-{service}-navy.svg
    logo-{service}-white.svg
    favicon-{service}-16.svg   (+ .png)
    favicon-{service}-32.svg   (+ .png)
    favicon-{service}-96.svg   (+ .png)
    apple-touch-icon-{service}.png   (180)
```

- 영문 소문자 · 하이픈만 씁니다. (예: `logo-search-navy.svg`, `favicon-make-32.png`)
- PNG는 같은 변형을 PNG 1x로 Export합니다. 180은 `apple-touch-icon`으로 전달합니다.

```html
<link rel="icon" type="image/png" sizes="16x16" href="/brand/{service}/favicon-{service}-16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/brand/{service}/favicon-{service}-32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/brand/{service}/favicon-{service}-96.png">
<link rel="apple-touch-icon" sizes="180x180" href="/brand/{service}/apple-touch-icon-{service}.png">
```

**신규 서비스 추가 · 검수 체크리스트**

- [ ] Logo: Navy · White 2개 변형, 높이 14, 너비 정수, 벡터 1개, stroke 없음
- [ ] Favicon: 180 · 96 · 32 · 16 4개 변형, Background + Symbol 2개 레이어, rx = S÷6, Clip content 끔
- [ ] 색: `#1B2A41` · `#FFFFFF` 두 가지만 (토큰 Text/Brand · Text/Inverse · Background/Brand 연결)
- [ ] Export한 SVG에 `<g>` · `clip-path` · `stroke` · `transform`이 없는지 확인
- [ ] 파일명 규칙 확인 후 `brand/{service}/` 폴더로 전달

**현재 확인 필요**

- 로고 너비가 소수인 서비스가 있습니다 (MAKE 51.9 · MOUNTAIN 96.1 · EASY 45.5 등). SVG 규격(너비 정수)에 맞추려면 프레임 너비를 반올림하고 글자를 가운데 정렬합니다.
- ROYAL의 브랜드 색이 로고(`#6D28D9`)와 파비콘(`#651FD3`)에서 다릅니다. 한 값으로 통일이 필요합니다.
- BULDAK과 BATTERY 파비콘이 같은 'B' 심볼입니다. 브라우저 탭에서 구분이 필요하면 심볼 조정을 검토합니다.
- SEARCH 파비콘의 S는 획이 가늘어 16×16에서 얇게 보일 수 있습니다.

### 1.5 Responsive

데스크톱(1920)과 모바일(360) 두 화면을 기준으로 한 대응 규칙입니다.
같은 컴포넌트를 쓰고 **레이아웃 · 글자 크기 · 팝업 형태만** 바꾸며, 넘치는 영역은 **가로 스크롤**로 처리합니다.

#### Breakpoint · Layout

| 항목 | Desktop | Mobile |
|---|---|---|
| 기준 화면 | 1920 × 1080 | 360 × 740 |
| 헤더 | Header Device=Desktop · 높이 52 | Header Device=Mobile · 높이 52 · 메뉴 버튼 |
| 내비게이션 | Side Navigation 180 고정 | Mobile Menu (헤더 메뉴 버튼으로 열기) |
| 콘텐츠 여백 | 좌우 Spacing/24 · 콘텐츠 1692 | 좌우 Spacing/20 · 콘텐츠 320 |
| 상단 여백 | 헤더 아래 Spacing/32 | 헤더 아래 Spacing/20 |
| 섹션 간격 | 제목 영역 → 콘텐츠 Spacing/40 | 모든 섹션 Spacing/24 |
| 페이지 배경 | Background/Subtle | Background/Subtle (동일) |
| 중간 폭 (실서비스) | 1920 → 1065px: 사이드 내비게이션 180 유지, 콘텐츠는 FILL로 축소, 지표 항목 균등 축소 + 라벨 줄바꿈, 테이블 가로 스크롤 | 약 500px 이하에서 모바일 레이아웃으로 전환 (Header Device=Mobile, 사이드 내비게이션 숨김) |

#### 대응 원칙

데스크톱 컴포넌트를 모바일용으로 새로 만들지 않습니다. 아래 네 가지 방법 중 하나로 대응합니다.

1. **속성 전환:** 같은 컴포넌트에서 `Device` 또는 `Size`만 바꿉니다. (Header, Nav Item, Modal, Dialog, Drawer)
2. **대체:** 데스크톱 요소를 같은 역할의 모바일 요소로 바꿉니다. (Side Navigation → 헤더 메뉴 버튼 + Mobile Menu)
3. **재배치:** 컴포넌트는 그대로 두고 배치만 바꿉니다. (가로 1줄 → 2×2 또는 세로 스택, 일부 요소 숨김)
4. **가로 스크롤:** 줄이면 정보가 손실되는 영역은 너비를 유지하고 가로로 스크롤합니다. (Table)

| 컴포넌트 | 대응 방법 | Mobile |
|---|---|---|
| Header | 속성 전환 | Device=Mobile · 로고 + 메뉴 버튼(Icon/Menu, Icon/Brand) |
| Side Navigation | 대체 | Mobile Menu(300 패널) · Nav Item / Nav Dropdown / Nav Sub Item을 Device=Mobile로 사용 |
| Metric Card | 재배치 | 기간 1줄 + 지표 2×2, Metric Item은 FILL 균등 분배 |
| Filter (Search · Date Field · Button) | 재배치 | 검색 1줄 + 기간 1줄, 기간 빠른 선택 · 엑셀 저장 숨김 |
| Table | 가로 스크롤 | 컬럼 너비 유지 |
| Pagination | 재배치 | 페이지 번호 / Go to page 2줄 스택 |
| Modal · Dialog | 속성 전환 | Device=Mobile · Size=Mobile 340 (viewport − 20) |
| Drawer | 속성 전환 | Size=Mobile · 전체 화면 360(100%) |
| Alert | 크기 조정 | 340 × 56 |

#### 화면 구성 대응 (예: [마스터] 정산로그)

| 영역 | Desktop 1920 | Mobile 360 |
|---|---|---|
| Header | 로고 + 사용자 메뉴 | 로고 + ≡ (사이드 내비게이션 대체) |
| Metric | 1줄 (기간 + 4열) | 기간 1줄 + 지표 2×2 |
| Filter | 검색 · 기간 · 빠른선택 · 엑셀 저장 | 검색 1줄 + 기간 1줄 (빠른선택 · 엑셀 숨김) |
| Table | 1692 전체 너비 · 11컬럼 노출 | 너비 유지 → 가로 스크롤 |
| Pagination | 페이지 번호 + Go to page 1줄 | 페이지 번호 / Go to page 2줄 스택 |

#### Modal (모바일 대응)

모바일에서 Modal · Dialog · Drawer는 새로 만들지 않고 **Device · Size 속성**으로 대응합니다.
Modal · Dialog는 화면 중앙에 340(viewport − 20)으로, Drawer는 전체 화면 360으로 노출합니다.
사이즈별 상세 사양은 [Modal / Dialog / Drawer](#218-modal--dialog--drawer)를 참고하세요.

| 컴포넌트 | Desktop | Mobile |
|---|---|---|
| Modal (확인) | Device=PC 360 · 패딩 Spacing/40 | Device=Mobile 340 · 패딩 Spacing/20 |
| Dialog (조회) | Size=Medium 600 · Large 820 · XLarge 980 | Size=Mobile 340 · 패딩 Spacing/20 |
| Drawer (입력 폼) | Size=Small 328 · Medium 488 · Large 568 | Size=Mobile 360 · 전체 화면 · 하단 버튼 2개 |
| 닫기 (공통) | Icon/Close Large · 상·우 20 | Icon/Close Large · 상·우 10 |
| 뒤 배경 | Background/Dim (검정 45%) | Background/Dim (동일, Drawer는 전체 화면) |

---

## 2. Components

### 공통 원칙

- 모든 컴포넌트는 Semantic 토큰(Color · Spacing · Radius)과 텍스트 스타일에 연결합니다.
- 상태(State)는 Variant로, 텍스트·아이콘·노출 여부는 Component Property(Text · Boolean · Instance Swap)로 제어합니다.
- 데스크톱/모바일 차이는 컴포넌트를 새로 만들지 않고 **Device · Size 속성**으로 대응합니다.

---

### ① Input

입력 요소 공통 규칙:

- 높이 **40px**, 보더 **Border/Input**(Cool Gray 30), 텍스트 **Label 1(13px)**을 씁니다.
- Placeholder는 Text/Tertiary, 입력값은 Text/Primary로 씁니다.
- Focus · Error · Disabled 상태는 원본에 없어 새로 제안한 것입니다. 단 Focus 보더 Border/Focus는 실서비스에서 확인했습니다.

#### 2.1 Text Field

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Text Field** | Style: Default · Login<br>Status: Normal · Focus · Error · Disabled<br>Active: False · True | Label (+ Label text), Required *, Input Text, Description (+ text), Left icon (+ swap), Right icon (+ swap) | 한 줄 입력 (320×66). **Default**는 필터·폼용입니다. 높이 40, Radius None, 보더 Border/Input. **Login**은 어드민 로그인용입니다. 너비 240, 높이 40, Radius/XS, 보더 Border/Strong(Gray 50), 좌우 패딩 Spacing/16, 배경 White. Label은 숨기고 Placeholder로 안내합니다(Label 1/Regular). 아이디 · 비밀번호 두 칸을 간격 0으로 붙여 쌓습니다. Active=True는 값이 입력된 상태입니다. |
| **Date Field** | Status: Normal · Focus · Disabled | — | 날짜(YYYY-MM-DD) 입력 (140×40, 패딩 16, 간격 8). Text Field + 우측 Icon/Calendar 구성이고, 클릭하면 Date Picker가 열립니다. 기간 필터는 `Date Field ~ Date Field + 기간 빠른 선택 Button`으로 조합합니다. |
| **Textarea** | Status: Normal · Focus · Error · Disabled<br>Active: False · True | Text Field와 동일 | 여러 줄 입력 (필드 높이 80, 패딩 Spacing/10·16). 메모, 사유, 공지 내용에 씁니다. |
| **Search Field** | — | 중첩 인스턴스 노출 | Text Field + Icon Button(Search) 조합 (410×40). 조회 페이지 상단 필터 영역에 둡니다. |

- **Disabled(=읽기전용):** Background/Input Disabled + Border/Default + Text/Primary
- **Error:** Description 위치에 오류 메시지를 보여줍니다.
- Label과 Required(*)로 필수 여부를 표시합니다.

#### 2.2 Dropdown / Menu

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Dropdown** | Status: Normal · Focus · Disabled<br>Active: False · True | Text | 셀렉트 (높이 40, 기본 너비 140). 필터 영역, 페이지당 보기 개수에 씁니다. Active=True는 목록이 열린 상태입니다. |
| **Menu Item** | State: Default · Hover · Selected · Disabled | Text | 목록 항목 (높이 40, 패딩 Spacing/16, Label 1). Hover는 Background/Option Hover(Navy 10)를 씁니다(실서비스). |
| **Menu** | — | — | Menu Item 조합 (140×160). 보더 Border/Input. 항목이 많으면 최대 높이를 정하고 스크롤합니다. |
| **User Menu** | — | Name, Role | 헤더 사용자명을 클릭하면 열립니다 (130×144). Radius/M, 보더 Border/Emphasis, Shadow/Dropdown. |

- **인터랙션:** 클릭하면 Menu가 펼쳐지고, 옵션에 Hover하면 Background/Option Hover가 적용되며, 선택하면 닫힙니다.
- 선택지가 2~4개이면 [Segmented Control](#215-segmented-control)을 먼저 고려합니다.

#### 2.3 Check Box

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Check Box** | State: False · True<br>Disabled: False · True<br>Size: Large · Small | Text, Label | 박스 16×16. **Large**는 목록 선택용(Body 2/Regular), **Small**은 로그인 옵션용(Label 2/Regular · "아이디 기억하기")이고, 보더 Navy 60 · Radius 2입니다. |

- 클릭하면 목록 상단의 "N개 선택됨" 개수가 갱신됩니다. 헤더 체크박스는 전체 선택입니다.
- Label을 클릭해도 선택되도록 구현합니다.

#### 2.4 Date Picker · Full Calendar

날짜를 고르는 달력은 용도에 따라 두 가지를 씁니다.

| 구분 | 용도 | 예시 화면 |
|---|---|---|
| **Date Picker** | Date Field 아래에 펼치는 작은 달력. 날짜 하나 또는 기간을 고를 때 | 일별마감 기간 필터 |
| **Full Calendar** | 월 단위로 일정을 보면서 여러 날짜를 골라 설정할 때 | 사용시간 설정 (GUARD) |

##### Date Picker

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Calendar Day** | State: Default · Hover · Selected · Disabled | Date | 날짜 셀 37×37, Radius/Full, Label 1. Default와 Hover는 인터랙티브 컴포넌트로 연결되어 있습니다. |
| **Date Picker** | — | — | Calendar Day 조합 (7열 × 요일 + 5주, 277×262). |

- 셀 가로 간격 3, 주 간격 Spacing/8입니다.
- 선택일은 **Background/Brand 원형**, 이전·다음 달 날짜는 **Text/Subtle**로 표시합니다.
- Hover는 Background/Hover를 씁니다 (제안).
- 원본에 월 이동 헤더가 없어 포함하지 않았습니다.

##### Full Calendar

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Calendar Event** | Type: 발주 · 수정 · 환불 | Time | 날짜 셀 안의 시간대 칩입니다. 높이 20, 패딩 2·6, Radius/XS, Label 2/Regular · Text/Inverse. 셀 너비를 채우고, 넘치면 말줄임합니다. |
| **Full Calendar Day** | State: Default · Today · Selected · Outside | Date, Events | 월간 달력 셀 108×108, 패딩 Spacing/8. 날짜는 Label 1/Regular(20×20), 아래에 Calendar Event를 최대 3개(간격 4) 쌓습니다. |
| **Control Button** | Type: Text · Icon<br>Status: Default · Hover | Text, Icon (swap) | 좁은 영역의 소형 컨트롤 버튼입니다. 높이 24, Radius/XS, Border/Button, Label 1/Regular. Icon 타입은 24×24에 16 아이콘(Chevron Left/Right)을 씁니다. |
| **Full Calendar** | — | — | 헤더(연월 + 날짜 전체 선택 + 이전/다음 달) + 요일 행 + Full Calendar Day 5~6주. 너비는 Fill이고 셀은 균등 분배합니다(기본 740 = Dialog Large 콘텐츠 영역). |

**Calendar Event 색상** — Type Badge(신규 · 연장 · 환불)와 같은 규칙입니다.

| Type | 색상 |
|---|---|
| 발주 | Status/Success (Green 60) |
| 수정 | Status/Info (Blue 50) |
| 환불 | Status/Error (Red 50) |

**Full Calendar Day 상태**

| State | 스타일 |
|---|---|
| Default | Background/Default, 우·하단 1px Border/Input (외곽 좌·상단은 Full Calendar가 처리 — Table 셀 규칙과 동일) |
| Today | 2px Border/Input |
| Selected | 2px **Border/Info** + **Background/Info Subtle** + Radius/M. 여러 날짜를 다중 선택할 수 있습니다. |
| Outside | 이전·다음 달 날짜. Background/Neutral + Text/Tertiary |

- **요일 행:** 높이 32, Background/Subtle, Label 1/Regular · Text/Secondary. 월요일부터 시작합니다.
- **Control Button Hover:** Secondary 버튼과 같은 규칙(Background/Hover + Border/Strong)입니다.
- **인터랙션:** 날짜 셀을 클릭하면 Selected가 켜지고 꺼집니다. "날짜 전체 선택"은 해당 월의 날짜를 모두 선택합니다.

**사용 예시 — 사용시간 설정**

[Dialog/Base](#218-modal--dialog--drawer) Size=Large의 Content Slot에 Full Calendar와 시간 범위 입력을 넣어 만듭니다.

1. 달력에서 날짜를 선택합니다.
2. 발주 · 수정 · 환불 시간을 입력합니다. 각 행은 라벨(Label 1/Regular) + `Text Field ~ Text Field`, 행 간격 24입니다.
3. Footer의 **적용**을 누르면 선택한 날짜에 Calendar Event가 표시됩니다. **닫기**는 Secondary 버튼입니다.

**원본(GUARD-UI)과 다르게 통일한 부분**

- 이벤트 칩 글꼴: Inter 12 → **Pretendard Label 2/Regular**
- 이벤트 칩 간격: 3 → **4** (Spacing 스케일)
- 시간 입력 필드: 원본의 inner shadow를 빼고 **Text Field(Style=Default)** 인스턴스를 사용
- 컨트롤 버튼: 원본의 inner shadow를 빼고 Border/Button 규칙으로 통일
- 이전 달 날짜 배경: `#E6E6E6` → **Background/Neutral** (`#EEEEEE`)
- 팝업 너비: 880 → **Dialog/Base Large (820)**

---

### ② Data Display

#### 2.5 Table

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Table Header Cell** | Type: Text · Filter · Sort · Checkbox<br>Hover: False · True | Text | 높이 34, Background/Neutral, Label 2 · Text/Secondary. 텍스트는 가운데, 필터·정렬 아이콘은 오른쪽(패딩 12)에 둡니다. Hover는 Background/Cell Hover입니다. |
| **Table Cell** | Type: Text · Link · Badge · Checkbox · Icon<br>State: Default · Row Hover · Cell Hover | Text, Icon (swap) | 높이 54, Label 2 · Text/Primary. Link 타입은 Text/Link에 1줄 말줄임입니다. |
| **Table Filter Popover** | — | Count | 헤더 Filter 아이콘을 클릭하면 열립니다 (380×436). 순서는 검색 → 전체 선택 → 옵션 목록(스크롤) → 취소/확인입니다. |

- **구분선:** 셀은 우·하단 1px Border/Default, 테이블 외곽은 좌·상단 1px입니다.
- **Hover:** 행 전체는 Row Hover(Background/Hover), 포인터가 올라간 셀만 Cell Hover(Background/Cell Hover)를 씁니다.
- **Sort:** 아이콘을 클릭하면 오름차순과 내림차순이 바뀝니다.
- **Filter:** 확인을 누르면 적용되고, 취소하거나 바깥을 클릭하면 닫힙니다. 필터가 적용되면 아이콘이 Pressed 상태가 됩니다.
- **말줄임:** 잘린 텍스트에 Hover하면 전체 텍스트를 툴팁으로 보여줍니다.
- **정렬:** 헤더와 셀 모두 가운데 정렬입니다(숫자·텍스트 공통). Checkbox 컬럼은 첫 번째 열에 둡니다.

#### 2.6 Tag / Badge

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Tag** | Type: Outline · Filled · Selected | Text, Close | 높이 32, Radius/Full. Outline은 기본, Filled는 연관 키워드, Selected는 선택 상태입니다. Close=True이면 삭제할 수 있는 키워드 칩이 됩니다(순위조회 키워드 리스트). |
| **Status Badge** | Status: OK · ERROR · WAIT | — | Dot + Label 2/SemiBold. OK는 정상(Status/Positive), ERROR는 오류, WAIT는 대기(Status/Neutral)입니다. |
| **Role Badge** | Role: 총판사 · 관리자 · 대행사 · 광고주 | — | 계정 권한 텍스트 뱃지입니다. Label 1/SemiBold, 배경 없음. |
| **Type Badge** | Type: 신규 · 연장 · 환불 · 정보수정 · 신규정보 | — | 정산·수정 로그의 구분 뱃지입니다. Label 1/SemiBold, 배경 없음. |

**Tag Close=True**

| 항목 | 값 |
|---|---|
| 크기 | 너비 Hug (예: "키워드" 72px), 높이 32 |
| 여백 | 좌우 Spacing/12 (12px) |
| 텍스트 ↔ Close 간격 | Spacing/2 (2px) |
| Close 아이콘 | Icon/Close 12×12, Icon/Default |
| 동작 | Close 아이콘을 클릭하면 해당 Tag(조건)가 삭제됩니다. |

텍스트 뱃지 색상 매핑:

| 색상 | Role Badge | Type Badge |
|---|---|---|
| Text/Error | 총판사 | 환불 |
| Text/Primary | 관리자 | — |
| Text/Link | 대행사 | 연장, 정보수정 |
| Text/Success | 광고주 | 신규, 신규정보 |

**Filter Chip** (실서비스 매체 필터)

목록 상단에서 한 가지 조건으로 데이터를 거르는 필터 버튼입니다.

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Filter Chip** | State: Default · Selected | Text | 높이 34, 좌우 패딩 14, Radius/S(6), 1px 테두리, Label 1/Regular, 그림자 없음. 너비는 텍스트에 맞춰 Hug. |
| **Filter Chip Group** | — | — | Filter Chip 나열. 간격 Spacing/6, 넘치면 줄바꿈, 영역 패딩 0. |

| State | 배경 | 텍스트 | 테두리 |
|---|---|---|---|
| Default | Background/Default | Text/Secondary | Border/Neutral |
| Selected | Status/Info (Blue 50) | Text/Inverse | Border/Info |

- **Hover:** 스타일 변화가 없고 커서만 pointer로 바뀝니다. (실서비스 확인)
- **단일 선택:** 클릭한 칩만 Selected가 되고 이전 선택은 해제됩니다. 첫 칩 **전체**를 누르면 필터가 해제됩니다. (실서비스 확인)
- **Tag와의 차이:** Tag는 이미 선택된 조건을 표시·해제하는 칩(Radius/Full)이고, Filter Chip은 조건을 고르는 버튼입니다.
- 좌우 패딩 14는 Spacing 스케일 밖의 값이지만 실서비스 값을 유지했습니다 (Accordion과 같은 예외 처리).

#### 2.7 Metric Card

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Metric Item** | Highlight: False · True | Value, Label | 수치는 Heading 1/SemiBold, 라벨은 Body 3/Regular입니다. Highlight=True이면 Text/Link로 강조합니다. |
| **Metric Card** | — | Title | 목록 상단의 현황 요약 카드 (496×142). 타이틀은 Body 1/SemiBold입니다. 항목 사이에 1×50 Border/Default 구분선을 넣습니다. |

- 첫 항목(전체)은 Highlight로 강조하고, 카드 하나에 연관된 지표만 묶습니다.
- **반응형:** 항목은 FILL로 균등하게 나눕니다. Value는 한 줄을 유지하고 Label은 줄바꿈합니다.
- 큰 숫자에는 천 단위 구분 기호(,)를 씁니다.

#### 2.8 Chart

순위보고서(일별·시간별)에 쓰는 꺾은선 차트입니다.

| 컴포넌트 | Variants | 설명 |
|---|---|---|
| **Chart** | Selected: Series 1 · 2 · 3<br>Hover: False · True | 740×401, 선 3px + 마커 8. 격자는 Chart/Grid 0.6px, 축은 Caption 1/Regular · Text/Secondary입니다. 선택한 시리즈만 진하게 표시하고 나머지는 투명도 30%로 뒤에 둡니다. |
| **Chart Marker** | Series: 1 · 2 · 3<br>State: Default · Hover · Inactive · Inactive Hover | Default 8, Hover 10입니다. Hover하면 색은 그대로 두고 크기만 커집니다. Inactive는 Chart/Series N Subtle입니다. 테두리는 없습니다. |
| **Chart Legend Box** | Series: 1 · 2 · 3<br>Active: True · False | 툴팁 범례 사각형 10×10에 흰 1px 테두리를 씁니다. |
| **Chart Tooltip** | — | 어두운 툴팁 (111×92). 날짜는 상단, 시리즈별 값은 하단에 둡니다. |
| **Chart Guide Line** | — | Hover 세로 가이드 점선입니다. 실서비스에는 없어 선택적으로 씁니다. |

- **시리즈 순서 고정:** 1 평균 순위(Green) → 2 최고 순위(Red) → 3 최저 순위(Blue)
- **Hover (실서비스):** 선택 시리즈의 점은 8에서 10으로 커지고, 비선택 점은 Inactive Hover가 됩니다. 툴팁에서는 선택 시리즈 Legend만 Active입니다.

---

### ③ Actions

#### 2.9 Button

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Button** | Type: Primary · Secondary<br>Size: Large(40) · Medium(34)<br>Status: Default · Hover · Disabled | Text, Left Icon, Right Icon (+ swap) | **Primary**는 등록·저장 같은 주요 액션에 쓰고, 영역당 1개를 권장합니다. **Secondary**는 삭제·취소·엑셀 저장 같은 보조 액션에 씁니다. |
| **Icon Button** | Type: Primary · Secondary<br>Status: Default · Hover · Disabled | Icon (swap) | 아이콘 단독 버튼 40×40 (예: 검색 버튼). Tooltip이나 aria-label을 함께 제공합니다. |
| **Table Icon Button** | State: Default · Hover · Pressed | Icon (swap) | 테이블 셀 안 아이콘 액션 20×20, 배경 없음. 색은 Icon/Default → Icon/Hover(Navy 40) → Icon/Pressed(Navy 80) 순으로 바뀝니다. 아이콘 예: History, Settings, Copy Plus, Filter. 한 셀에 3개 이하로 둡니다. |
| **Action Button** | Type: Primary · Secondary<br>Status: Default · Hover · Disabled | Text, Left/Right Icon | 하나의 작업 흐름을 끝내는 강조 액션입니다. 어드민 로그인 버튼에는 쓰지 않고 Button Primary · Large를 씁니다([Login](#222-login)). 기본 너비 240(컨테이너 채움), 높이 34. Radius/XS, Label 1/Bold, Shadow/Action Button, 좌우 패딩 Spacing/30. |
| **Top Button** | Direction: Up · Down | — | 페이지 스크롤 플로팅 버튼 52×52. Radius/Full, Border/Button, Shadow/Card. 화면 우측 하단에 고정하고, 스크롤이 생겼을 때만 보여줍니다. |

상태 규칙 (실서비스 확인):

| 상태 | Primary | Secondary |
|---|---|---|
| Default | Background/Brand + Shadow/Action Button | Background/Default + Border/Button |
| Hover | **색 변화 없음** (Background/Brand · Border/Brand 유지), 그림자만 제거 | Background/Hover + Border/Strong |
| Disabled | 그림자 없음 | Background/Default + Border/Default + Text/Disabled |

- **Primary Hover:** 배경·보더·텍스트 색은 그대로 두고 Shadow/Action Button만 사라집니다. Button · Action Button 모두 같은 규칙입니다.
- 기간 빠른 선택에서 선택된 버튼은 Primary입니다. 클릭하면 날짜 입력값이 자동으로 바뀝니다.
- 라벨은 "저장", "조회"처럼 짧은 동사형으로 씁니다.

#### 2.10 Icon

20×20 그리드 기반 아이콘 세트입니다. 모든 아이콘은 **Fill만 쓰는 Vector 1개**로 구성합니다. 그래서 색을 바꿀 때는 Fill 하나만 덮어쓰면 되고, 아이콘을 교체해도 색이 유지됩니다.

| 크기 | 아이콘 |
|---|---|
| **20** (기본) | Search, Caret Down, Check, Plus, Settings, Arrow Top, Arrow Down, History, Copy, Copy Plus, Document, Document Download, Calendar, Bell, Help, User, Coin, Sliders, Analytics, Clock, Trophy, View All, Grid |
| **16** (Arrow · Chevron) | Chevron Down · Up · Left · Right, Chevrons Left · Right |
| **12** | Filter, Sort, Close |
| **24** (Status · Empty · Mobile · Popup) | Status Error, Status Success, Folder X, Menu, Close Large |

- 아이콘 자체에는 상태 변형이 없습니다. 감싸는 컴포넌트(Icon Button, Nav Item, Pagination Arrow 등)의 State가 색 토큰을 바꿉니다.
- Hover · Pressed는 클릭할 수 있는 아이콘에만 적용합니다.
- Disabled와 Subtle은 같은 Gray 50이지만 의미가 달라 토큰을 나눠 씁니다.
- 같은 의미에는 항상 같은 아이콘을 씁니다.

---

### ④ Navigation

#### 2.11 Header

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Header** | Device: Desktop · Mobile | User Name | 높이 52, Background/Default, 하단 보더 Border/Default, Shadow/Card. **Desktop**은 Logo(Service 속성으로 서비스 전환)와 사용자명(Label 1/SemiBold) + Chevron으로 구성하고, 패딩은 L40 · R24, 너비는 Fill입니다. **Mobile**은 360 기준으로 Logo와 Icon/Menu 24(Icon/Brand)를 두고, 패딩은 Spacing/20입니다. 메뉴를 탭하면 Mobile Menu가 열립니다. |
| **Page Header** | — | Title, Description, Show Description | 페이지 타이틀(Heading 1/SemiBold) + 설명 (800×54). Breadcrumb은 쓰지 않습니다. 모든 콘텐츠 페이지 최상단에 같은 위치·간격으로 둡니다. |

#### 2.12 Tab

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Tab Item** | Selected: False · True | Text | 높이 60, Body 1. 선택된 탭은 SemiBold + 하단 2px Border/Emphasis입니다. |
| **Tab Bar** | — | — | Tab Item 조합 (496×60). 예: 캠페인 요약, 네이버 쇼핑/플레이스 |

- 탭은 2개 이상 두고, 하나는 항상 Selected 상태로 둡니다.
- 탭 이름은 짧은 명사형으로 씁니다.

#### 2.13 Side Navigation

어드민 좌측 고정 메뉴입니다. 너비 180, Background/Navigation, 메뉴 항목 높이 40.
모바일에서는 Header 메뉴 버튼으로 여는 **Mobile Menu(300 패널)**로 대체합니다.

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Nav Item** | Device: Desktop · Mobile<br>State: Default · Hover · Active | Text, Icon (swap) | 단일 메뉴로, 화살표가 없습니다. **Desktop**은 180×40, 왼쪽 여백 24, 아이콘-텍스트 간격 4입니다. Hover하면 배경 없이 아이콘·텍스트가 흰색이 됩니다. **Mobile**은 260(Fill)×36, 여백 0, 간격 8이고 Hover가 없습니다. 메뉴 텍스트는 Body 2/SemiBold입니다. |
| **Nav Dropdown** | Device: Desktop · Mobile<br>Expanded: False · True | Text, Icon (swap) | 하위 메뉴가 있는 그룹 메뉴입니다. 메뉴 중 유일하게 화살표를 보여줍니다(접힘 › / 펼침 ⌄). 하위 영역은 Background/Nav Sub(흰색 6%)입니다. |
| **Nav Sub Item** | Device: Desktop · Mobile<br>State: Default · Hover · Active | Text | 하위 항목, 높이 36. 텍스트는 Desktop 48px, Mobile 28px 위치에서 시작합니다. Default는 흰색 75%, Hover는 흰색, Active는 흰색 + SemiBold입니다. |
| **Side Navigation** | — | — | Nav Item(Desktop) + Nav Dropdown 조합 (180×900). 메뉴 개수는 서비스 · 권한에 따라 다릅니다. |
| **Mobile Menu** | — | User Name, Role, Initial | Nav Item(Mobile) + Nav Dropdown 조합 (300×800). 데스크톱과 같은 컴포넌트를 Device만 바꿔 씁니다. |

**메뉴 구성**

메뉴 개수는 서비스와 권한에 따라 달라집니다. 컴포넌트를 새로 만들지 않고, Side Navigation 인스턴스에서 Nav Item을 숨기거나 텍스트 · 아이콘을 바꿔 구성합니다.

| 예시 | 개수 | 메뉴 |
|---|---|---|
| MAKE | 5개 | 공지사항 · 계정관리 · 광고관리 · 정산로그 · 캠페인 › (캠페인 요약 · 캠페인 관리 · 정산관리) |
| SEARCH | 6개 | 공지사항 · 자주 묻는 질문 · 계정관리 · 광고관리 · 정산로그 · 캠페인 › (캠페인 요약 · 캠페인 관리 · 정산관리) |
| PRADA | 8개 | 공지사항 · 자주 묻는 질문 · 계정관리 · 광고관리 · 정산로그 · 수정관리 · 일별마감 · 사용시간 설정 (마스터는 서비스관리 포함 9개) |

- 메뉴는 위에서부터 빈 자리 없이 채웁니다. 항목 높이(40)와 간격은 개수와 관계없이 같고, 남는 영역은 Background/Navigation으로 비워 둡니다.
- 하위 메뉴가 있는 그룹은 Nav Dropdown으로 넣고 목록 맨 아래에 둡니다. 하위 메뉴가 없으면 Nav Dropdown을 숨깁니다.
- Mobile Menu도 같은 규칙으로 구성합니다.

#### 2.14 Accordion

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Accordion Item** | Expanded: False · True | Question, Answer | FAQ 아코디언 (1000×55). Q 표시는 Body 3/SemiBold · Text/Link, 질문은 Text/Primary입니다. 답변 영역은 Background/Neutral · Text/Secondary입니다. |

- 헤더 전체가 클릭 영역입니다. 펼치면 Chevron이 위를 향합니다.
- 여러 개를 세로로 쌓습니다. 첫 항목의 상단 보더는 목록 컨테이너에서 처리합니다.
- **간격 스케일 예외:** Question 패딩 17.5, Answer 패딩 19.5/20.5, 텍스트 좌우 14. 원본 높이를 유지하려고 Spacing 토큰에 연결하지 않았습니다.

#### 2.15 Segmented Control

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Segmented Item** | Selected: False · True | Text | 110×34, Radius/S, Label 1/Medium. 선택되면 Background/Brand + Text/Inverse + Shadow/Action Button입니다. |
| **Segmented Control** | — | — | Segmented Item 조합 (228×40). 예: 일별/시간별, 결제/테스트 |

- 서로 배타적인 옵션 2~4개 중 하나를 고를 때 씁니다. 5개 이상이면 Dropdown을 씁니다.
- 하나는 항상 Selected 상태로 두고, 항목 너비는 같게 맞춥니다.

#### 2.16 Pagination

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Pagination Item** | State: Default · Hover · Selected | Number | 36×36. 현재 페이지는 Background/Brand입니다. Hover는 Background/Hover입니다(제안). |
| **Pagination Arrow** | Type: First · Prev · Next · Last | — | 36×36, Icon/Subtle. 아이콘은 Chevrons Left · Chevron Left · Chevron Right · Chevrons Right 인스턴스입니다. |
| **Pagination** | — | — | 순서는 First(«) · Prev(‹) · 번호 · Next(›) · Last(»)입니다 (340×36). |
| **Pagination Go To** | — | — | 페이지 번호를 직접 입력합니다 (120×40). 라벨은 Label 1/Regular · Text/Tertiary, 필드는 50×40 · Border/Input입니다. |

- **말줄임:** 별도 컴포넌트 없이 Default 상태 Item의 Number에 `...`을 입력합니다. 예) `1 2 3 … 72`
- 테이블 하단 우측에 "50개씩 보기" Dropdown과 함께 둡니다.

---

### ⑤ Feedback

#### 2.17 Alert

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Alert** | Type: Success · Error<br>Layout: Slim · Detail | Title, Message | 토스트 알림, 너비 400, Shadow/Alert. **Slim**은 아이콘 + 1줄 메시지입니다. 높이 56, Radius/M. **Detail**은 제목(Label 1/SemiBold, Error이면 Text/Error) + 본문(좌측 32 들여쓰기)입니다. 패딩 16/16/20/16, 간격 16, Radius/XL. |

- Success는 저장·연장 완료처럼 작업이 끝났을 때 씁니다(Icon/Status Success).
- Error는 선택 누락 같은 안내·오류에 씁니다(Icon/Status Error).
- 화면 상단 중앙에 노출한 뒤 자동으로 사라집니다. 모바일 너비는 340 × 56입니다.
- 메시지에는 결과와 다음 행동을 간결하게 쓰고, 오류일 때는 해결 방법을 함께 안내합니다.

#### 2.18 Modal / Dialog / Drawer

확인이나 추가 입력이 필요할 때 쓰는 오버레이입니다. 뒤 배경은 **Background/Dim(검정 45%)**, 그림자는 **Shadow/Modal**입니다.

| 종류 | 용도 |
|---|---|
| **Modal** | 삭제·환불 등 실행 전 확인 |
| **Dialog** | 조회용 센터 팝업 (공지는 페이지 진입 시 자동 노출, "다시 보지 않기 / 닫기") |
| **Drawer** | 등록·수정 폼, 우측 슬라이드 |

공통으로 닫기 아이콘은 Icon/Close Large를 상·우 20(모바일 10)에 둡니다.

**컴포넌트 구조 (2단계)**

1. **기본 타입 (Base):** 껍데기만 있는 원시 컴포넌트입니다. Header(Title · Meta · Close) + Content Slot + Footer(버튼 0~2개)로 구성합니다. Content Slot에는 폼·테이블·본문·차트 등 어떤 콘텐츠든 넣을 수 있습니다. **새 화면은 항상 Base에서 시작합니다.**
2. **응용 타입 (Applied):** Base 인스턴스에 실서비스 콘텐츠를 미리 채운 완성형입니다. 안에 Base가 Exposed로 들어 있어서, Base의 스타일·간격을 고치면 Applied에도 자동으로 반영됩니다.
3. 새 콘텐츠를 반복해서 쓰게 되면 Base 인스턴스 + 콘텐츠를 컴포넌트로 만들어 Applied에 변형으로 추가합니다.

| 컴포넌트 | Variants | Properties | 설명 |
|---|---|---|---|
| **Modal** | Device: PC · Mobile | Title (+ text), Message, Close | 1~2줄 메시지 + 버튼 최대 2개(취소/확인). **PC**는 360 고정, 패딩 40입니다. **Mobile**은 340(viewport − 20), 패딩 20입니다. 공통으로 Radius/L, Gap Spacing/16을 씁니다. 메시지는 Label 1/Regular입니다. |
| **Dialog/Base** | Size: Medium 600 · Large 820 · XLarge 980 · Mobile 340 | Title, Meta (+ Meta Text), Close, Footer, Secondary Button, Primary Button, Content (Slot) | 조회·확인용입니다. 패딩 32, 헤더 타이틀은 Body 1/SemiBold이고 하단에 Border/Default가 있습니다. |
| **Dialog/Applied** | Size: XLarge · Large · Medium · Mobile | — | XLarge 980은 삭제 로그(7열 테이블), Large 820은 순위보고서(차트 + 정보 테이블), Medium 600은 공지사항 본문, Mobile 340은 삭제 로그 카드 리스트입니다. |
| **Drawer/Base** | Size: Small · Medium · Large · Mobile | Dialog/Base와 동일 | 입력·편집용입니다. 높이는 viewport 100%이고 Content 영역만 스크롤하며, 버튼은 콘텐츠 하단에 둡니다. |
| **Drawer/Applied** | Size: Small · Medium · Large · Mobile | — | Small은 계정등록 폼, Medium은 광고수정(URL + 키워드 칩), Large는 공지사항 본문, Mobile은 계정등록 시트입니다. |

**Dialog 사이즈 선택 기준**

| Size | 너비 | 콘텐츠 |
|---|---|---|
| XLarge | 980 | 7열 이상 데이터 테이블·로그 (삭제로그, 수정 전 데이터) |
| Large | 820 | 리포트형 조회 (차트 + 상품 정보 + 요약/일별 테이블) |
| Medium | 600 | 읽기 중심 텍스트 (공지사항 상세) |
| Mobile | 340 (viewport − 20) | PC 테이블을 카드형 리스트로 전환 |

**Drawer 사이즈 · Breakpoint**

| Size | 용도 | Desktop ≥1024 | Tablet 601~1023 | Mobile ≤600 |
|---|---|---|---|---|
| Small | 단일 컬럼 폼 (입력 8개 이하) | 328 | 328 | 100% |
| Medium | 폼 + 키워드 칩 리스트 (광고수정, 부분환불) | 488 | 420 | 100% |
| Large | 긴 본문 읽기 (공지사항 상세) | Fluid `min(100vw − 44, 1164)` | 420 | 100% |
| Mobile | 전체 화면 시트 (360 기준, 패딩 20, 버튼 Large 40) | — | — | 100% |

- **Desktop:** 패널 왼쪽에 최소 44px Dim 영역을 남겨, 바깥을 클릭하면 닫히게 합니다. 44px은 축소된 사이드 내비게이션 아이콘 레일 폭입니다.
  - 사이드 내비게이션은 약 1200px 이상에서 펼침(180), 그 아래에서는 아이콘 레일(44)로 접힙니다.
  - Large는 viewport가 약 1208px 이상이면 1164px에서 더 커지지 않습니다.
- **Tablet:** 1023px 이하에서는 사이드 내비게이션이 Dim 뒤로 보이고, Drawer는 우측 420px으로 고정됩니다.
- **Mobile:** 600px 이하에서는 전체 화면 시트로 바뀝니다. 디자인 기준 화면은 360(× 740)입니다.
- **인터랙션 (실서비스):** 관리(톱니)나 광고 추가 아이콘을 클릭하면 우측에서 슬라이드되어 열리고 Background/Dim이 깔립니다. 취소를 누르면 닫힙니다.
- 디자인 기준 프레임 568(Large)은 최소 폭을 참고하는 용도입니다.

```css
/* Drawer 너비 */
.drawer--small  { width: 328px; }
.drawer--medium { width: 488px; }
.drawer--large  { width: min(calc(100vw - 44px), 1164px); }

@media (max-width: 1023px) {
  .drawer--medium,
  .drawer--large { width: 420px; }
}
@media (max-width: 600px) {
  .drawer { width: 100%; }
}
.drawer { height: 100vh; } /* 본문 영역만 스크롤 */
```

#### 2.19 Tooltip

| 컴포넌트 | 설명 |
|---|---|
| **Tooltip** | 높이 26 (Label 2/Regular + 상하 Spacing/4). 배경 Background/Tooltip, Radius/XS, Shadow/Tooltip입니다. |

- 말줄임된 텍스트나 아이콘의 보충 설명을 보여줍니다. 마우스를 올리면 대상 요소 바로 아래에 나타납니다.
- 문구는 한두 줄 이내로 쓰고, 필수 정보를 Tooltip에만 두지 않습니다.

#### 2.20 Loading

데이터를 불러오거나 추출하는 동안 화면 전체를 덮어, 작업이 진행 중임을 알리는 로딩입니다. (실서비스 기준)

| 컴포넌트 | Variants | 설명 |
|---|---|---|
| **Loading Spinner** | Step: 1 · 2 · 3 · 4 | 48×48, 90° 원호, 두께 6, Background/Brand(Navy 60). Step마다 90°씩 돌아간 상태입니다. 각 Step은 After delay + Smart Animate(Linear 250ms)로 다음 Step에 연결된 인터랙티브 컴포넌트예요. 인스턴스를 놓기만 하면 프로토타입에서 1초에 1바퀴 돕니다. |
| **Loading Overlay** | — | 화면 전체 로딩입니다. 배경은 Background/Loading Dim(검정 15%) + Background blur 8이고, 중앙에 Loading Spinner가 있습니다. 스피너는 Constraints Center라서 화면 크기에 맞게 리사이즈해도 항상 중앙에 있습니다. |

**사용 규칙**

- **트리거:** 조회 · 엑셀 저장 · 순위데이터 추출처럼 서버 응답을 기다리는 액션을 클릭한 직후에 노출합니다.
- **범위:** Header와 Side Navigation까지 화면 전체를 덮습니다. 로딩 중에는 클릭과 스크롤을 막습니다.
- **종료:** 응답이 오면 바로 사라지고 결과 화면을 보여줍니다. 엑셀이면 다운로드가 시작되고, 필요하면 완료 Alert(Success)를 띄웁니다.

```css
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);      /* Background/Loading Dim */
  backdrop-filter: blur(4px);            /* Figma Background blur 8 */
  display: grid;
  place-items: center;
}
.loading-spinner {
  width: 48px;
  height: 48px;
  border: 6px solid transparent;
  border-top-color: #1B2A41;             /* Background/Brand */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

**피그마 프로토타입**

Loading 페이지의 `Loading · Prototype` 섹션에서 Flow **"Loading · 엑셀 저장"**으로 바로 확인할 수 있습니다.

1. 정산로그 화면에서 우측 상단의 **엑셀 저장**을 클릭합니다.
2. Loading Overlay가 3초 동안 보입니다. (스피너 회전)
3. 완료 Alert이 2초 동안 보인 뒤 1번 화면으로 돌아갑니다.

---

### ⑥ Pattern

#### 2.21 Empty State

| 컴포넌트 | Properties | 설명 |
|---|---|---|
| **Empty State** | Message | 아이콘 Icon/Folder X(24) + 안내 문구(Body 1/Regular · Text/Tertiary), 간격 8, 중앙 정렬 (218×80). 예: 순위조회 검색 결과 없음 |

- "검색 결과 없음"과 "데이터 미등록"을 구분해서 안내합니다.
- 가능하면 다음 행동을 제시합니다.

#### 2.22 Login

어드민 로그인 화면 구성입니다. (Figma: HERMES-PRADA › 1. 로그인/로그아웃 › 로그인 · [모바일]로그인)

| 영역 | 구성 | 사양 |
|---|---|---|
| 페이지 | 배경 · 정렬 | 배경 White. 콘텐츠 너비 240을 화면 가운데에 둡니다. 상하 패딩 Spacing/24, 카드나 테두리는 없습니다. |
| top | Logo + 입력 | Logo(Navy, 132×28) → 간격 Spacing/24 → [Text Field Style=Login](#21-text-field) 2개(아이디 · 비밀번호, 간격 0) |
| button | 옵션 + 버튼 | top과 간격 Spacing/40. [Check Box Size=Small](#23-check-box) "아이디 기억하기" → 간격 Spacing/12 → [Button](#29-button) Primary · Large |
| 로그인 버튼 | Button Primary · Large | 너비 240(채움), 높이 40, Radius None, 좌우 패딩 Spacing/16, Background/Brand + Text/Inverse, Label 1/Medium, **그림자 없음** |
| 하단 | 저작권 | "Copyright © PRADA. All rights reserved." Label 2/Regular · Gray 50, 너비 240, 화면 하단 고정 |

- **Placeholder:** "아이디를 입력해 주세요." · "비밀번호를 입력해 주세요." (마침표 포함)
- **모바일(360):** 같은 구성 그대로 너비 240을 가운데에 둡니다. 크기 · 간격은 바꾸지 않습니다.
- **상태(제안):** 빈 칸으로 제출하면 해당 인풋을 Error 상태로 바꿉니다. 로그인에 실패하면 [Alert](#217-alert) Error를 상단 중앙에 띄우고, 서버 응답을 기다리는 동안 [Loading Overlay](#220-loading)를 보여줍니다.

---

## 부록 · 최종 점검 메모

Figma 최종 파일(2026.10.06) 기준으로 문서와 대조하며 확인한 내용입니다.

| 항목 | 내용 | 권장 조치 |
|---|---|---|
| 변수 | Semantic 컬렉션의 용도 없는 `Boolean` 변수 | ✅ 삭제 완료 |
| 로고 너비 | 19개 중 소수 너비가 있습니다. | SVG 추출 전 정수 반올림 |
| ROYAL 색 | 로고 `#6D28D9` · 파비콘 `#651FD3` 불일치 | 한 값으로 통일 |
| Thumbnail 목차 | 목차 순서를 페이지와 같게(Tab → Side Navigation), "Modal / Drawer" 표기 수정 | ✅ 수정 완료 |
| 문서 범위 | 토큰(Primitive 87 · Semantic 82 · Spacing 13 · Radius 7 · Number 14), 텍스트 스타일 26, 이펙트 스타일 7, 컴포넌트 구성은 이 문서와 일치합니다. | — |
