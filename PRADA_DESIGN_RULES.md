# PRADA 어드민 디자인 규칙 (Design Rules)

> 이 문서는 **HERMES-PRADA 화면 파일**과 **Prada 디자인 시스템 파일**을 직접 분석해, 화면이 디자인 시스템을 *어떻게* 쓰는지(규칙성)를 정리한 것입니다.
> "로그인 화면 만들어줘", "공지사항 목록 만들어줘"처럼 짧게 요청해도 이 문서만으로 Figma 시안과 같은 결과가 나오도록 하는 것이 목적입니다.
>
> - 화면 파일: `TZaAAe9JHlRDhSF4JtLDqQ` › page `draft` › section `PRADA` (node `4259:36390`)
> - 디자인 시스템: `gvxPykrBYRlbCzyM5wTqWz` (Foundation / Asset / Components / Templates)
> - 분석 범위: 화면 프레임 114개, 텍스트 노드 약 11,600개, 컴포넌트 인스턴스 약 9,700개 (2026-10-29 기준)

---

## 0. 에이전트가 지켜야 할 최우선 규칙 (TL;DR)

1. **값을 지어내지 않는다.** 색·간격·라운드·글자는 아래 토큰에 있는 것만 쓴다. 토큰에 없는 값이 필요해 보이면 가장 가까운 토큰을 고르고, 그래도 안 되면 "토큰 없음"이라고 표시한다.
2. **색은 Semantic 토큰으로 쓴다** (`Text/Primary`, `BG/Brand` …). Primitive(`Gray/900`, `Navy/600`)를 화면에 직접 쓰지 않는다. (예외: 로고 워드마크 = `Navy/600`)
3. **폰트는 Pretendard 하나**, 자간은 항상 **-2%**. 텍스트는 반드시 Text Style 이름 중 하나로 지정한다.
4. **입력창·버튼·드롭다운은 각지게(radius 0)** 만든다. 둥근 모서리는 카드/모달/알림/체크박스에만 쓴다. (예외: 로그인 입력창 radius 4 — 3.1 참고)
5. **컨트롤 높이는 40px(Large)이 기본**, 모달·드로어 하단 CTA만 34px(Medium).
6. **브랜드 색은 Navy 한 가지.** 주요 버튼·사이드바·체크박스·포커스 테두리가 모두 `Navy/600 (#1B2A41)`.
7. 화면은 **PC 1920×1080** 과 **모바일 360×(812 이상)** 두 벌을 같이 만든다.
8. 화면마다 **기본 상태 + 에러/빈 상태**를 같이 만든다. 에러는 `Alert(Slim)` 토스트, 빈 상태는 `Empty State` 컴포넌트를 쓴다.

---

## 1. Foundation 토큰

### 1.1 Color — Primitive (직접 사용 금지, 참조용)

| 계열 | 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 50 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Gray | #111111 | #2D2D2D | #333333 | #555555 | #9E9E9E | #DDDDDD | #E4E4E4 | #EEEEEE | #F5F5F5 | #F8F8F8 | #FFFFFF |
| Navy | #0B192F | #0D1D35 | #10213A | #1B2A41 | #2D3F5C | #32558D | #6480AB | #99ACC9 | #D0D9E6 | #EDF0F5 | – |
| Blue | – | – | – | – | #164DA6 | #3B82F6 | #649DFA | #CEDEF8 | #EAF2FE | – | – |
| Red | – | – | – | – | #BF0000 | #FE1818 | #FF6262 | #F4CEC6 | #FFEDE9 | – | – |
| Green | – | – | – | – | #077E57 | #13AD7A | #26C28E | #CBE9D3 | #E8F5EB | – | – |

### 1.2 Color — Semantic (화면에서 쓰는 이름)

**Text**
| 토큰 | 값 | 쓰임 (화면에서 확인된 용도) |
|---|---|---|
| `Text/Primary` | Gray/900 #111111 | 본문, 표 셀, 입력값, 체크박스 라벨, 모달 제목 |
| `Text/Secondary` | Gray/700 #333333 | 섹션 소제목(모바일 카드 제목), Line 버튼 hover |
| `Text/Tertiary` | Gray/600 #555555 | 입력창 도움말, 사용자 역할 |
| `Text/Subtle` | Gray/500 #9E9E9E | placeholder, 페이지 설명, Copyright, 사이드바 비활성 메뉴, 빈 상태 문구 |
| `Text/Disabled` | Gray/400 #DDDDDD | 비활성 텍스트 |
| `Text/Inverse` | Gray/0 #FFFFFF | Primary 버튼 글자, 사이드바 활성 메뉴 |
| `Text/Brand` / `-Hover` | Navy/600 / Navy/500 | 브랜드 텍스트 |
| `Text/Brand-Light` / `-Hover` | Navy/400 / Navy/300 | Secondary 버튼 글자 |
| `Text/Error` | Red/400 #FE1818 | 에러 메시지, 필수(*) 표시 |
| `Text/Link` | Blue/400 #3B82F6 | 링크 |

**Background**
| 토큰 | 값 | 쓰임 |
|---|---|---|
| `BG/Surface` | #FFFFFF | 로그인 배경, 카드, 입력창, 헤더, 표 셀 |
| `BG/Subtle` | Gray/50 #F8F8F8 | **로그인 후 페이지 배경**, Line 버튼 hover, 표 hover 행 |
| `BG/Disabled` | Gray/100 #F5F5F5 | 비활성 입력/버튼 |
| `BG/Table-Header` / `-Hover` | Gray/200 #EEEEEE / Gray/300 | 표 헤더 |
| `BG/Table-Cell-Hover` | Gray/50 | 표 행 hover |
| `BG/Brand` / `-Hover` | Navy/600 #1B2A41 / Navy/500 #2D3F5C | Primary 버튼, 사이드 내비게이션 배경 |
| `BG/Brand-Light` / `-Hover` | Navy/50 #EDF0F5 / Navy/100 #D0D9E6 | Secondary 버튼 |
| `BG/Error` | Red/100 #FFEDE9 | 에러 배경 |
| `BG/Success` | Green/100 #E8F5EB | 성공 배경 |
| `BG/Select` | Blue/400 @30% | 선택 영역 |
| `BG/dim` | Navy/900 @30% | 모달·드로어·모바일 메뉴 뒤 딤 |
| `BG/dim-white` | Gray/0 @6% | 어두운 면 위 hover |

**Border**
| 토큰 | 값 | 쓰임 |
|---|---|---|
| `Border/Primary` | Gray/500 #9E9E9E | 입력창·드롭다운 기본 테두리 |
| `Border/Secondary` | Gray/400 #DDDDDD | Line 버튼, 표 셀 선, 비활성 입력 |
| `Border/Tertiary` | Gray/200 #EEEEEE | 헤더 하단선, 카드/알림 테두리, 모달 제목 구분선 |
| `Border/Disabled` | Gray/300 #E4E4E4 | 비활성 체크박스·Secondary 버튼, 모바일 카드 테두리 |
| `Border/Brand` | Navy/600 | 입력 focus/hover/typing, 체크박스 OFF 테두리 |
| `Border/Brand-Light` | Navy/400 | Secondary 버튼 |
| `Border/Error` | Red/400 | 입력 에러 |
| `Border/Select` | Blue/400 | 선택 |
| `Border/Inverse` | #FFFFFF | 어두운 면 위 |

**Icon**
| 토큰 | 값 |
|---|---|
| `Icon/Default` | Gray/800 #2D2D2D |
| `Icon/Subtle` | Gray/500 (닫기 X 등) |
| `Icon/Brand`, `Icon/Pressed` | Navy/600 (입력 caret, 체크 ON) |
| `Icon/Hover` | Navy/500 |
| `Icon/Disabled` | Gray/400 |
| `Icon/Inverse` | #FFFFFF |
| `Icon/Error` | Red/300 #FF6262 |
| `Icon/Success` | Green/300 #26C28E |

**기타**: `Table Text/Badge *` (Green/500, Green/400, Blue/400, Red/400, Gray/800, Gray/500), `Chart/평균·최저·최고` (Green/Blue/Red 400, Disabled는 200).

### 1.3 Typography

- 폰트: **Pretendard** (전 스타일 공통), 자간 **-2%**, 대소문자 변환 없음.

| Style | Weight | Size | Line-height |
|---|---|---|---|
| Title/SemiBold | 600 | 24 | 36 (150%) |
| Heading 1/SemiBold | 600 | 22 | 30 |
| Heading 2/SemiBold · Regular | 600 · 400 | 20 | 30 |
| Heading 3/SemiBold · Medium | 600 · 500 | 18 | 27 |
| Body 1/SemiBold · Medium · Regular | 600 · 500 · 400 | 16 | 24 |
| Body 2/SemiBold · Regular | 600 · 400 | 15 | 22.5 |
| Body 3/SemiBold · Regular | 600 · 400 | 14 | 20 |
| Label 1/Bold · SemiBold · Medium · Regular | 700 · 600 · 500 · 400 | 13 | 20 |
| Label 2/SemiBold · Medium · Regular | 600 · 500 · 400 | 12 | 16 |
| Caption 1/SemiBold · Medium · Regular | 600 · 500 · 400 | 11 | 16.5 |
| Caption 2/Medium · Regular | 500 · 400 | 10 | 13 |
| Caption 3/Medium | 500 | 8 | 8 |

**화면에서의 역할 매핑 (사용 빈도 기반)**
| 역할 | Style | 색 |
|---|---|---|
| 페이지 제목 (Page Header) | Heading 1/SemiBold | Text/Primary |
| 페이지 설명 | Label 1/Regular | Text/Subtle |
| 지표 카드 큰 숫자 | Title/SemiBold | Text/Primary |
| 모달·드로어 제목 | Body 1/SemiBold | Text/Primary |
| 카드/섹션 소제목 | Body 1/SemiBold | Text/Secondary |
| 사이드바 메뉴 | Body 2/SemiBold | 활성 Inverse / 비활성 Subtle |
| 사이드바 섹션 라벨 ("MAIN MENU") | Caption 1/Regular | Text/Subtle |
| 버튼 Large | Label 1/Medium | 타입별 |
| 버튼 Medium·Small | Label 1/Regular | 타입별 |
| 입력값·placeholder | Label 1/Regular | Primary / Subtle |
| 입력 라벨 | Label 1/Regular (+ `*` Label 1/Medium, Text/Error) | Text/Primary |
| 입력 도움말·에러 | Caption 1/Regular | Tertiary / Error |
| 표 셀 (가장 많이 쓰임) | Label 2/Regular | Text/Primary |
| 표 헤더 | Label 2/Regular | **Text/Tertiary** |
| 표 상단 고정 행 제목 | Label 2/SemiBold | Text/Primary |
| 상세 제목 | Body 1/SemiBold | Text/Secondary |
| 상세·폼 본문 | Label 1/Regular | Text/Secondary |
| 팝업 본문 | Body 3/Regular | Text/Primary |
| 확인 모달 제목 / 메시지 | Body 1/Medium / Label 1/Regular | Primary / Secondary |
| 폼 표 라벨 | Label 1/Regular | Text/Secondary |
| 선택 개수 "N개 선택됨" | Body 2/Regular (숫자만 SemiBold) | Text/Primary |
| 페이지 번호 M / S | Body 1/Medium / Label 2/Medium (선택 시 SemiBold) | Tertiary (선택 Inverse) |
| 알림(Toast) 메시지 | Label 1/Regular | Text/Primary |
| 헤더 사용자명 | Label 1/SemiBold | Text/Primary |
| 체크박스 라벨 Small | Label 2/Regular | Text/Primary |
| 체크박스 라벨 Large | Body 2/Regular | Text/Primary |
| Copyright | Label 2/Regular | Text/Subtle |
| 빈 상태 문구 | Body 1/Regular | Text/Subtle |

### 1.4 Spacing

`2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 32, 40` (토큰 이름 `Spacing/N`). 이 밖의 값은 쓰지 않는다.

**자주 쓰는 패턴**
| 관계 | 값 |
|---|---|
| 아이콘 ↔ 텍스트 (버튼 내부) | 4 |
| 라벨 ↔ 입력창 (Box) | 6 |
| 입력창 ↔ 도움말 | 4 |
| 체크박스 ↔ 라벨, 입력 내부 아이콘, 버튼끼리 | 8 |
| 체크박스 ↔ 로그인 버튼, 표 위 툴바 ↔ 표 | 12 |
| 폼 필드 사이 (모달·드로어 Content) | 16 ~ 24 |
| 콘텐츠 블록 사이 (검색바 ↔ 표 ↔ 페이지네이션) | 20 ~ 24 |
| 로그인: 로고 ↔ 입력 묶음 | 24 |
| 로그인: 입력 묶음 ↔ 버튼 묶음 | 40 |
| 모달·드로어 상하 패딩 | 40 |

### 1.5 Radius

| 토큰 | 값 | 쓰임 |
|---|---|---|
| (없음) | **0** | **입력창, 버튼, 드롭다운, 표, 사이드바, 헤더** |
| Radius/XXS | 2 | 체크박스 |
| Radius/XS | 4 | 로그인 입력창(예외) |
| Radius/S | 6 | – |
| Radius/M | 8 | Alert Slim, 사용자 메뉴, 화면 내 카드 박스 |
| Radius/L | 10 | 모달 Dialog |
| Radius/XL | 12 | Alert Detail |
| Radius/Full | 100 | 스크롤 버튼, 원형 요소 |

### 1.6 Elevation (Effect Style)

| Style | 값 | 쓰임 |
|---|---|---|
| Drop Shadow/Depth 1 | 0 2 8 rgba(11,25,47,.07) | 상단 Header, 사용자 메뉴 |
| Drop Shadow/Depth 2 | 0 3 6 rgba(11,25,47,.07) | Side Navigation |
| Drop Shadow/Depth 3 | 2 3 12 rgba(11,25,47,.08) | Alert(토스트) |

---

## 2. 컴포넌트 규칙 (DS 원본 수치)

### 모션 공통 규칙 (모든 화면·모든 작동 기능)
드롭다운 실서비스 녹화(2026-10-29)에서 측정한 값을 **모든 인터랙션의 기준**으로 쓴다. 바뀌는 순간이 뚝 끊기지 않게, 하지만 기다리게 하지 않게.

| 종류 | 값 | 적용 대상 |
|---|---|---|
| **상태 변화** (hover·focus·선택·체크) | `200ms ease` 로 색·배경·테두리 전환 | 버튼, 아이콘 버튼, 입력창·Text Area 테두리, 체크박스, 표 행 hover, 페이지 번호, 사이드 메뉴 글자색, 드롭다운 필드·옵션, 사용자 메뉴 항목, FAQ 질문 행, 닫기·지우기 X 아이콘 |
| **나타나기** (떠 있는 요소) | `150ms ease-out`, `opacity 0→1` + `translateY(-4px→0)` | 드롭다운 목록, 사용자 메뉴, 모달(Dialog·Text Modal) 패널 |
| **나타나기** (배경·화면) | `150ms ease-out`, `opacity 0→1` | 모달 딤, 모바일 메뉴 딤, 화면 진입(로그인·목록·상세·작성·FAQ) |
| **옆에서 들어오기** | `200ms ease-out`, `translateX(100%→0)` | 모바일 Side Navigation 패널 (오른쪽에서) |
| **펼치기·접기** | `200ms ease`, 높이 `grid-template-rows 0fr↔1fr` | FAQ 아코디언 |
| **사라지기** | **즉시** (애니메이션 없음) | 드롭다운·메뉴·모달·모바일 메뉴 닫기 |
| **토스트** | 전용 스프링 (아래 "토스트 인터랙션") | Alert 토스트 |

- CSS 변수로 한 곳에서 관리: `--motion-state: .2s ease;` `--motion-enter: 150ms ease-out;`
- 레이아웃이 흔들리는 hover(글자 굵기 변경 등)는 쓰지 않는다 — 배경·색만 바꾼다.
- `prefers-reduced-motion: reduce`이면 모든 전환·애니메이션을 0으로 (`transition-duration`·`animation-duration: 0s`).
- 새 인터랙션을 만들 때도 위 표의 종류 중 하나로 분류해 같은 값을 쓴다.

### Button
| Size | 높이 | 좌우 패딩 | 글자 |
|---|---|---|---|
| Large | 40 | 16 | Label 1/Medium |
| Medium | 34 | 12 | Label 1/Regular |
| Small | 24 | 6 (상하 2) | Label 1/Regular |

- 모서리 0, 아이콘 16px, 아이콘-텍스트 간격 4, 내용 가운데 정렬.

| Type | Default | Hover | Disabled |
|---|---|---|---|
| **Primary** | BG/Brand, Text/Inverse | BG/Brand-Hover | BG/Disabled, Text/Disabled |
| **Line** | BG/Surface + 1px Border/Secondary, Text/Primary | BG/Subtle, Text/Secondary | 1px Border/Tertiary, Text/Disabled |
| **Secondary** | BG/Brand-Light + 1px Border/Brand-Light, Text/Brand-Light | BG/Brand-Light-Hover, Text/Brand-Light-Hover | BG/Disabled + Border/Disabled, Text/Disabled |

**사용 규칙**: 한 영역의 주 행동은 Primary 1개. 보조 행동은 Line. 두 버튼을 나란히 둘 때 순서는 **[Line(취소/보조)] [Primary(확정)]**, 간격 8, 오른쪽 정렬.
- `Icon Button`: 40×40(Medium) / Small, 같은 Type 체계. 검색 버튼 = Primary Icon Button.
- `CTA Button`: 모달·드로어 하단 전용. 높이 34(Medium), 폭 꽉 채움. `2 Button` = 버튼 2개 간격 8, `1 Button` = 1개.

### Text Input · Text Area · Box (입력 규칙 — 모든 입력에 반드시 적용)
- Text Input: 높이 40, 좌우 패딩 16(CSS 15), 내부 간격 8, 아이콘 20px(Left/Right Icon 슬롯), 모서리 0, 테두리 1px(안쪽). 글자 Label 1/Regular.
- Text Area: 기본 높이 **80**, 패딩 **10/16**(CSS `9px 15px`), 같은 상태 규칙. 크기 조절 핸들 없음.

| State | 언제 | 배경 | 테두리 | 글자 | 아래 메시지 |
|---|---|---|---|---|---|
| Default | 비어 있음 | BG/Surface | Border/Primary | placeholder Text/Subtle | (도움말이 있으면) Caption 1 · Text/Tertiary |
| Hovered | 마우스 올림 | BG/Surface | **Border/Brand** | — | 〃 |
| Focused | 포커스(빈 값) | BG/Surface | **Border/Brand** | caret Icon/Brand | 〃 |
| Typing | 입력 중 | BG/Surface | **Border/Brand** | 입력값 Text/Primary | 〃 |
| Completed | 값 있음·포커스 아님 | BG/Surface | Border/Primary | Text/Primary | 〃 |
| **Error** | 검증 실패 | BG/Surface | **Border/Error** (포커스·hover 중에도 유지) | Text/Primary | **에러 메시지 Caption 1/Regular · Text/Error, 입력 아래 4** |
| **Disabled** | 수정 불가 | **BG/Disabled** | **Border/Secondary** | **Text/Subtle** | — (hover·focus 반응 없음) |

- **에러 메시지는 반드시 글자로 보여준다** — 테두리 색만 바꾸지 않는다. 메시지는 "~을/를 입력해주세요." 형태 (예: "비밀번호를 입력해주세요."). 입력을 시작하면 Error 상태와 메시지가 함께 사라진다.
- 접근성: Error 시 `aria-invalid="true"` + 메시지를 `aria-describedby`로 연결.
- 상태 전환은 모션 공통 규칙(테두리 200ms ease).
- `Box`: 폼 필드 래퍼 = [Label(Label 1/Regular · Text/Primary) + 필수 `*`(Label 1/Medium · **Text/Error**, 간격 2)] 6 [Field(입력 + 선택적 버튼, 간격 8)] 4 [도움말/에러 메시지]. 라벨 없이 쓸 때는 Label을 끈다.
- CSS 토큰 체크: `--text-error`(#FE1818)와 `--border-error`를 **둘 다** 정의한다 (하나만 있으면 메시지·`*`가 검게 나온다).
- `Search Field`: Text Input(오른쪽 테두리 없음) + Primary Icon Button 40×40(돋보기, Inverse) 붙여서, 410×40.
  - 입력 지우기(X): 브라우저 기본 X(`::-webkit-search-cancel-button`)는 숨기고, DS `Close` 아이콘 20px을 Right Icon 슬롯(오른쪽 16)에 둔다. 기본 State=Enabled(Icon/Subtle) → hover State=Default(Icon/Default). 입력값이 있을 때만 보이고, 누르면 값을 지우고 검색 결과도 초기화한 뒤 입력창에 포커스.
- `Dropdown`: 140×40, Select Field(패딩 16, 테두리 Border/Primary → 열림 시 Border/Brand) + 2Depth Menu Item 40px 목록.

### Check Box
- 박스 16×16, radius 2, 라벨과 간격 8.
- OFF: Surface + 1px Border/Brand / ON: 채움 Icon/Brand(Navy) + 흰 체크 / Disabled: BG/Disabled (+Border/Disabled).
- 체크 아이콘(`Check`)은 **14×14**, 박스 안 (1,1)에 가운데 정렬. 체크 표시 자체는 9.52×6.72, 박스 기준 좌우 3.24 · 상하 4.64 여백. (CSS에서 16px 아이콘을 1px 테두리 박스에 넣으면 1px씩 오른쪽 아래로 밀리므로 14px로 넣는다.)
- `Check Box List` Size: **Small** (라벨 Label 2/Regular, 높이 16) — 로그인·표 / **Large** (Body 2/Regular, 높이 23).

### Alert (Toast)
- `Slim`: 400×56, 패딩 16, 아이콘 24 + 간격 8 + 메시지 1줄(Label 1/Regular), BG/Surface, 1px Border/Tertiary, radius 8, Depth 3.
- `Detail`: 400×88(모바일 320, 줄바꿈 시 108), 패딩 16, gap 12, radius 12. 제목 행 = 아이콘 24 + 간격 8 + 제목(Label 1/SemiBold) / 본문 = 메시지(Label 1/Regular, 왼쪽 들여쓰기 32). 같은 토스트 인터랙션으로 뜬다 — `Prada.showToast('error', 메시지, 제목)`.
- 아이콘 Status: Error = Icon/Error 원 + 흰 X / Success = Icon/Success 원 + 흰 체크.
- 모바일(360) 폭: 320 (좌우 20 여백).

#### 토스트 인터랙션 (실서비스 로그인 실패 화면 녹화 기준)

녹화 영상(2026-10-29, 45fps)을 프레임 단위로 측정한 값이다. 녹화 1px = CSS 1px (로그인 폼 240px로 확인).

**위치**
- 화면(뷰포트) **위에서 16px**, 가로 가운데. `position: fixed`이고 레이아웃을 밀어내지 않는다.
- 한 번에 1개만 띄운다.
- 크기와 글자는 **확정**: PC 400×56, 모바일(360) 320×56(좌우 20), 메시지 Label 1/Regular(13px).
  - 실서비스는 PC에서도 320 고정, 글자 약 14px이지만 따르지 않는다. 녹화에서는 인터랙션(위치·움직임·시간)만 가져온다.

**등장 — 위에서 떨어지며 튕기는 스프링**
- 뷰포트 위쪽 밖(`translateY(-72px)` = 높이 56 + 여백 16)에서 내려온다.
- 최종 위치보다 약 **25px 더 내려갔다가** 튕겨 올라오고(-10px), 한 번 더 작게 흔들린 뒤(+5px) 멈춘다.
- 걸리는 시간은 약 **270ms**.
- **페이드 없음**: 처음부터 불투명(opacity 1)이다. 크기 변화도 없다.

| 시간 | 0 | 17 | 34 | 50 | 67 | 84 | 100 | 117 | 134 | 150 | 167 | 186 | 202 | 219 | 236 | 270ms |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 최종 위치 대비 Y (px) | -72 | -24 | +4 | +20 | **+25** | +13 | -1 | -7 | **-10** | -8 | -1 | +3 | **+5** | +5 | +2 | 0 |

> 0ms의 -72는 시작 위치를 추정한 값이다 (등장 직전 프레임에는 토스트가 없음). 나머지는 실측값이다.

**유지**: 등장을 시작한 뒤 **2.5초** 동안 보인다. 그동안 입력값과 체크 상태는 그대로이고, 입력창 에러 테두리도 없다.

**퇴장 — 위로 빠르게 사라짐**
- 위쪽으로 `-72px` 이동해 화면 밖으로 나간다. 약 **35ms**로 거의 즉시 사라지며, 페이드는 없다.
- 끝나면 숨긴다(또는 DOM에서 제거). `animationend` 이벤트에 기대지 말고 35ms 타이머로 숨긴다 — 동작 줄이기 설정에서는 애니메이션이 없어 이벤트가 오지 않는다.

**재실패**: 토스트가 떠 있는 동안 다시 실패하면 같은 토스트를 다시 등장시키고 2.5초 타이머를 새로 시작한다. *(녹화에 없음 — 추정)*

**구현 예시 (CSS keyframes, 실측값 그대로)**
```css
.toast {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translate(-50%, -72px);
  width: 400px;
  max-width: calc(100% - 40px);   /* 모바일 360 → 320 */
}
.toast.is-entering { animation: toast-in 270ms linear forwards; }
.toast.is-leaving  { animation: toast-out 35ms ease-in forwards; }

@keyframes toast-in {
  0%    { transform: translate(-50%, -72px); }
  6.3%  { transform: translate(-50%, -24px); }
  12.6% { transform: translate(-50%,   4px); }
  18.5% { transform: translate(-50%,  20px); }
  24.8% { transform: translate(-50%,  25px); }
  31.1% { transform: translate(-50%,  13px); }
  37%   { transform: translate(-50%,  -1px); }
  43.3% { transform: translate(-50%,  -7px); }
  49.6% { transform: translate(-50%, -10px); }
  55.6% { transform: translate(-50%,  -8px); }
  61.9% { transform: translate(-50%,  -1px); }
  68.9% { transform: translate(-50%,   3px); }
  74.8% { transform: translate(-50%,   5px); }
  81.1% { transform: translate(-50%,   5px); }
  87.4% { transform: translate(-50%,   2px); }
  100%  { transform: translate(-50%,   0); }
}
@keyframes toast-out {
  from { transform: translate(-50%, 0); }
  to   { transform: translate(-50%, -72px); }
}
```
- 스프링 라이브러리(Framer Motion 등)를 쓸 때의 근사값: `type: "spring", stiffness: 2100, damping: 23, mass: 1` (감쇠비 약 0.25, 진동 주기 약 140ms).
- `prefers-reduced-motion: reduce`이면 튕김 없이 바로 최종 위치에 표시한다.

### Table
- 헤더 셀 높이 34, 좌우 패딩 12, BG/Table-Header, 1px Border/Secondary(위·아래·왼쪽, 마지막 열은 오른쪽도), **Label 2/Regular · Text/Tertiary**, 모든 열 가운데 정렬.
- 본문 셀 높이 40(테두리 포함), 좌우 패딩 12, BG/Surface, 아래·왼쪽 1px Border/Secondary, Label 2/Regular · Text/Primary.
- 열 폭: 체크박스 56 · 번호 120(모바일 80) · 날짜 120 → 가운데 정렬. 제목 열은 남는 폭을 채우고 **본문만 왼쪽 정렬**(헤더 "제목"은 가운데).
- 헤더 체크박스 = 전체 선택: 일부 선택 시 `indeterminate`(Navy 채움 + 흰 가로선), 전부 선택 시 ON.
- **상단 고정 행**: 행 배경 BG/Subtle, 제목 Label 2/SemiBold. 항상 목록 맨 위.
- hover 행: BG/Table-Cell-Hover(#F8F8F8). 행 클릭 → 상세 (체크박스 클릭은 제외).
- **모바일**: 표는 줄이지 않고 가로 스크롤 (`width: max-content; min-width: 100%`, 셀 줄바꿈 없음).

### Pagination
- `Pagination Item` M 40×40(PC) / S 32×32(모바일), 간격 2. 순서: « ‹ 번호 › ».
- Default: 숫자 Text/Tertiary · 화살표 16px Icon/Subtle / Hover: BG/Brand-Light + Text/Primary / Selected: BG/Brand + Text/Inverse + SemiBold.
- 페이지가 많으면 `1 2 3 … 72` 처럼 말줄임(…).
- 오른쪽 영역(gap 12): `Pagination Go To`("Go to page" Label 1 Subtle + 입력 50×40, gap 8) + 개수 선택 드롭다운 123×40("50개씩 보기").
- PC: 번호는 콘텐츠 가운데, 오른쪽 영역은 오른쪽 끝. 모바일: 세로로 쌓고 가운데 정렬(gap 10).

### Dropdown 옵션 목록
- 옵션(Menu Item Depth 2) 높이 40, 좌우 패딩 16, 1px Border/Primary(위 제외), Label 1/Regular.
- 옵션 목록은 위치와 상관없이 **항상 필드 아래로** 펼친다 (화면 아래쪽 개수 선택 드롭다운 포함). 목록 그림자 Drop Shadow/Depth 3.

#### 드롭다운 인터랙션 (실서비스 녹화 기준, 2026-10-29, 50fps 프레임 측정)
| 대상 | 상태 | 효과 |
|---|---|---|
| 필드 | hover | 배경 **BG/Brand-Light-Hover**(#D0D9E6) + 테두리 Border/Brand, `background-color`·`border-color` **200ms ease**로 전환 (들어갈 때·나갈 때 모두) |
| 필드 | 열림 (hover 아님) | 기본 모양 그대로 (흰 배경, Border/Primary). 열림 상태를 따로 표시하지 않는다. 화살표(▼)는 회전하지 않는다. |
| 옵션 | hover | 배경만 **BG/Brand-Light-Hover**, 200ms ease. 테두리는 바뀌지 않는다. |
| 옵션 | 선택됨 | hover와 같은 배경 (BG/Brand-Light-Hover)으로 **항상 표시** — 녹화(선택 표시 없음)와 다르지만 확정된 결정. |
| 목록 | 열기 | `opacity 0→1` + `translateY(-4px→0)`, **150ms ease-out** |
| 목록 | 닫기 (필드 다시 클릭·옵션 선택·바깥 클릭·Esc) | **즉시** 사라짐 (애니메이션 없음) |
- 녹화의 hover 색은 #DAE2EF 정도로 측정됐고, 가장 가까운 토큰인 BG/Brand-Light-Hover를 쓴다.
- `prefers-reduced-motion: reduce`이면 전환·애니메이션 없이 바로 바뀐다.

### Metric Card (현황 카드)
- PC: 패딩 20, gap 16, BG/Surface, 1px Border/Tertiary, Depth 2. 제목 **Heading 2/SemiBold**. 항목 가로 4등분(gap 12) 사이 세로 구분선 1×50 Border/Tertiary.
- 항목: 값 **Title/SemiBold**(24) · 라벨 Body 3/Regular · Text/Tertiary, 가운데 정렬. **강조 항목(전체)**은 값·라벨 모두 **Text/Link**(#3B82F6).
- 값·라벨이 항목의 패딩 안쪽보다 길면(예: 조회 기간, 모바일 "오늘 소진 목표량") 패딩까지는 넘쳐도 된다 (Figma 1920 동일).
- **반응형(화면이 좁아질 때)**: 값·라벨이 항목 폭(패딩 포함)을 넘으면 ① 기간 값 "A ~ B"는 "~" 뒤에서 두 줄로 나누고 ② 그래도 넘치면 들어올 때까지 글자를 1px씩 줄인다(최소 12px, 줄 높이 비율 유지). 넓어지면 원래대로. 구현: `prada.js`가 모든 `.metric__item`을 자동으로 맞춘다(화면 크기·내용이 바뀔 때마다).
- 항목 폭: 기본은 균등. 서비스관리처럼 시안에서 조회 기간만 내용 폭(Hug 335 : 나머지 238)이면 같은 비율(`flex: 1.41`)로 함께 줄어들게 한다.
- **인터랙션**: 항목마다 버튼. hover하면 값·라벨이 **Text/Link 파란색**(Metric Item Highlight=True)으로 200ms 전환되고, 누르면 **표가 그 항목의 데이터만** 보여 준다(1페이지로). 고른 항목은 파란색으로 남고, 한 화면에서 하나만 고른다(기본 = 첫 카드의 "전체"). 표 필터·검색과 함께 적용된다. 시안에는 hover 전용 화면이 없어 Highlight=True 변형을 hover·선택 상태로 쓴다.
  - 광고관리: 카드(전체 / 광고(결제) / 테스트) × 항목(전체·정상·오류·대기·종료예정·종료). 계정관리: 전체·관리자·대행사·광고주 → 그 권한 계정.
- 모바일: 제목 Body 1/SemiBold, 항목 116 폭 **2×2**(간격 20), 값 Heading 3/SemiBold · 라벨 Label 2/Regular, 구분선 없음.

### Role Badge (권한)
- 배경 없이 글자만: Label 2/SemiBold. 광고주 = Badge Dark Green(#077E57) · 대행사 = Badge Blue(#3B82F6) · 총판사 = Badge Red(#FE1818) · 관리자 = Badge Black(#2D2D2D).

### Segmented Control
- 높이 40, 패딩 3/4, radius 8, BG/Brand-Light. 항목 높이 34, 좌우 16, radius 6, 폭 균등.
- 선택: BG/Brand + Text/Inverse · Label 1/Medium + Depth 2 / 미선택: 배경 없음 + Text/Tertiary · Label 1/Regular. 라디오 그룹(`role="radiogroup"`)으로 만든다.
- **전환 인터랙션**: 선택 배경(BG/Brand + Depth 2)은 한 장으로, 다른 항목을 누르면 **200ms ease로 미끄러져 옮겨 가고** 글자색(Text/Tertiary ↔ Text/Inverse)도 200ms로 함께 바뀐다. 구현은 `.segmented::before` + `:has()` — 화면 스크립트는 `aria-checked`만 바꾸면 된다. 단, Segmented를 `innerHTML`로 다시 그리면 모션이 사라지므로 **컨트롤은 남겨 두고 내용만 다시 그린다** (예: 순위보고서 일별 ↔ 시간별).

### 표 헤더 Filter · Sort, 표 셀 Icon
- 헤더 Type=Filter: 글자 + Filter 아이콘 12(Icon/Subtle, 간격 2) → 누르면 **Table Filter Popover**. 필터 적용 중·hover면 아이콘 Icon/Brand.
- 헤더 Type=Sort: 글자 + Sort 아이콘 12(▲▼). 누를 때마다 내림차순 → 오름차순 → 해제. 적용 중이면 진행 방향만 진하게, `aria-sort` 표시.
- 셀 Type=Icon: 열 폭 56, 아이콘 20(Icon/Default, hover Icon/Brand) 버튼 — 예: 광고 추가(Copy Plus), 관리(Settings).

### Table Filter Popover
- 폭 380, 패딩 20, gap 16, BG/Surface, 1px Border/Tertiary, Depth 2. 헤더 버튼 아래 4px에 뜬다(모바일은 화면 폭 - 16).
- 구성: Search Field(338) → [전체선택 체크박스(Large) …… ✓ "N개 선택됨" Label 1/SemiBold] + 아래 1px Border/Tertiary → 옵션 체크박스 목록(Large, 간격 20, 최대 높이 236 스크롤) → [취소 Line][확인 Primary] Medium 96, 오른쪽 정렬.
- 전체선택은 일부만 선택 시 indeterminate. [확인]에서만 적용, [취소]·바깥 클릭·Esc는 변경 없이 닫힘.

### Status Badge (광고 상태)
- 배경 없이 점 6(원) + 간격 4 + 글자 Label 2/SemiBold, 점·글자 같은 색: 정상 = Badge Green(#13AD7A) · 오류 = Badge Red(#FE1818) · 대기 = Badge Gray(#9E9E9E). 표 셀 Type=Badge에서 가운데.

### Tooltip
- Gray/600(#555555) 배경, 패딩 4/6, radius 4, Label 2/Regular 흰 글자, Depth 2, 한 줄.
- 대상 **글자 바로 아래 2px, 글자 가운데** 정렬 (사용자 확정). hover·키보드 포커스 때 150ms 페이드로 나타나고 벗어나면 즉시 사라진다. 구현: 요소에 `data-tooltip="문구"`만 달면 `prada.js`가 처리.
- 광고관리 표: 아이디 = "정보보기", 키워드 = 키워드 전체, 순위 = "순위보기", 상품명 = 상품명 전체.

### Tag
- 높이 32, 패딩 0/12, 간격 4, radius 100(알약), Label 1/Regular.
- `Filled`: BG/Subtle + 오른쪽 Close 16 — 입력한 키워드 목록(X로 삭제). 목록 간격 8.
- `Outline`: BG/Surface + 1px Border/Secondary — 고를 수 있는 항목(키워드·순위 기준). `Selected`: BG/Brand + Text/Inverse. 하나만 고르는 묶음은 라디오(`role="radio"`, `aria-checked`), 간격 6.

### Empty State
- 패딩 20, gap 8, 가운데: Warning 아이콘 32(Border/Secondary #DDD) + 문구 Body 1/Regular · Text/Subtle. 예: "현재 조회되는 순위데이터가 없습니다".

### 정보 표 (Key-Value)
- 칸 높이 40(테두리 포함), 패딩 0/12, 1px Border/Secondary — 줄이 겹쳐 2px이 되지 않게 한다. 머리칸 BG/Subtle · Label 2/Regular · Text/Tertiary 가운데, 값 칸 Label 2/Regular · Text/Primary **왼쪽 정렬**, 넘치면 말줄임.
- 칸 너비는 Figma 그대로 고정(`table-layout: fixed` + `colgroup`). 모바일은 [머리칸 84 | 값] 한 줄씩 세로로 쌓는다.

### 스크롤 버튼 (`scrolling`)
- 52×52 원형, BG/Surface, 1px Border/Secondary, 그림자 0 2 5 rgba(0,0,0,.05), 아이콘 18 Icon/Default.
- 오른쪽 20 · 아래 20 고정. 맨 위에 있을 때 "맨 아래로"(down), 그 외에는 "맨 위로"(up) 아이콘.

### Modal / Drawer
- 공통: 화면 전체 `BG/dim` 위에 흰 패널. 제목 영역 = 제목(Body 1/SemiBold) + 아래 12 패딩 + 1px Border/Tertiary 구분선. 제목 ↔ 내용 ↔ CTA 간격 24.
- **Modal Dialog**: 폭 560(모바일 340), 패딩 40/20(모바일 24/16), radius 10, Depth 2, 오른쪽 위 (20,20)에 닫기 X 20px(Icon/Subtle). 내용 ↔ CTA 간격 24, CTA는 Medium(34) 버튼 폭 균등.
- **Text Modal**(확인창): 폭 360(모바일 340), 패딩 32/30, gap 16, radius 10. 제목 Body 1/Medium + 메시지 Label 1/Regular · Text/Secondary(간격 10) → CTA [취소 Line][실행 Primary].
- 바깥(딤) 클릭·Esc로 닫는다.
- 열릴 때 **버튼에 자동 포커스를 주지 않는다** — 브라우저 포커스 링이 버튼 가장자리 라인처럼 보인다. 대신 패널(`tabindex="-1"`, `outline: none`)에 포커스를 준다. 버튼 hover는 배경색만 바뀌고 라인은 없다.
- **Drawer**: 오른쪽에서 열림, 폭 `368 | 488 | 568 | Full`, 패딩 40/24, 모서리 0. 입력 칸이 많고 [입력 + 추가 버튼] 줄이 있는 폼(광고수정)은 **568**, 나머지는 368. 모바일은 모두 Full(패딩 40/16).

### Shell (로그인 후 공통 틀)
- `Header` (Desktop): 1920×52, 좌 40 / 우 24 패딩, 양 끝 정렬, 왼쪽 로고(66×14, Navy) · 오른쪽 사용자명(Label 1/SemiBold) + ▾ 16px. 아래 1px Border/Tertiary + Depth 1.
- `Header` (Mobile): 360×52, 좌우 20, 오른쪽 햄버거 메뉴 24px.
- `Side Navigation` (PC): 폭 180, BG/Brand, Depth 2. 위 "MAIN MENU"(Caption 1/Regular, Subtle, 왼쪽 24). `Nav Item` 높이 40, 패딩 12/16/12/24, 아이콘 20 + 간격 8. 활성 = Text/Inverse, 비활성 = Text/Subtle.
- `Side Navigation` (Mobile): 화면 전체 BG/dim 위, **오른쪽에 300 폭 패널**(BG/Brand). 위 52 높이 헤더에 닫기 X 24(Inverse, 오른쪽). 메뉴 영역 패딩 20/20/0, "MAIN MENU"(Label 2/Regular, 위 24 · 아래 10), `Nav Item` 높이 36 패딩 0. 아래 footer(패딩 20/20/32, gap 20): 프로필(아바타 36 · radius 6 · 1px Border/Primary · 이니셜 Heading 3/Medium Inverse + 이름 Label 1/SemiBold Inverse + 역할 Label 2/Medium Subtle) + 로그아웃 Primary Large 폭 꽉(테두리 Border/Brand-Light-Hover).
- `Nav Item` hover: 글자·아이콘 Text/Inverse. 아이콘은 글자색을 따른다(비활성 #9E9E9E, 활성 흰색).
- `Page Header` (PC): 패딩 32/24/40/24, 제목(Heading 1/SemiBold) 4 설명(Label 1/Regular, Subtle). (Mobile): 패딩 없음.
- `Pagination` + `Pagination Go To` + 작은 Text Input: 표 아래, 페이지 번호는 가운데, 이동 영역은 오른쪽.

---

## 3. 화면(Page) 템플릿

### 3.0 첫 화면 — 권한 선택 (Figma `8164:34347`)
- 흰 배경 가운데: PRADA 로고 132×28 → 62 → [마스터][총판][대행사][광고주(일반)][순위조회] (Button Primary Large **240**, 간격 14). 모바일은 버튼 세로로 꽉 찬 폭(최대 320, 간격 8).
- 권한 버튼 → 그 권한으로 PRADA에 들어가 공지사항부터. [순위조회] → 순위조회 화면(사이드바 메뉴에는 없음).
- **권한별로 보이는 것** (`prada.js`가 자동 처리, `Prada.role` = master | distributor | agency | advertiser, `Prada.isAgency` = 마스터 아님):

| | 마스터 | 총판 · 대행사 | 광고주(일반) |
|---|---|---|---|
| 사이드바 | 전체 + 서비스관리 · 사용시간 설정 · 캠페인 | 공지 · FAQ · 계정 · 광고 · 정산로그 · 수정관리 · 일별마감 | 총판·대행사와 같음 |
| 공지사항 | 선택·삭제·작성 | 읽기만 | 읽기만 |
| 계정관리 | 툴바(사용시간 설정·삭제·등록) | 툴바 없음 | 툴바 없음 |
| 광고관리 | [로직관리][추출][엑셀업로드] + 수정·삭제·연장 | 수정·삭제·연장 | 수정·삭제·연장 |
| 정산로그 · 일별마감 열/검색 | 총판사·대행사·광고주 | 대행사·광고주 | 광고주 |
| 수정관리 | [엑셀 저장] | 없음 | 없음 |
| 마스터 전용 화면 주소로 열기 | — | 공지사항으로 이동 | 공지사항으로 이동 |
- 헤더 사용자 메뉴의 권한 표시: 마스터 / 총판 / 대행사 / 일반. 로그아웃 → 첫 화면.

### 3.1 인증 화면 (로그인) — 화면 파일 `1. 로그인/로그아웃 › 로그인`

로그인 전 화면은 **흰 배경 + 가운데 240px 단일 열**, 셸(헤더·사이드바) 없음.

```
Frame 1920×1080 (모바일 360×812)  fill BG/Surface
└ 세로 Auto Layout, 상하 패딩 24, 좌우 0, 양 끝 정렬(space-between), 가로 가운데
   ├ contents  (폭 240, 높이 채움, 세로 가운데 정렬, gap 40)
   │  ├ top  (gap 24, 가로 가운데)
   │  │  ├ Logo  132×28  (Service=PRADA, Color=Navy → Navy/600)
   │  │  └ input  (gap 0 — 두 입력창이 위아래로 붙음)
   │  │     ├ Box > Text Input  240×40  "아이디를 입력해 주세요."
   │  │     └ Box > Text Input  240×40  "비밀번호를 입력해 주세요."   (type=password)
   │  └ button  (gap 12)
   │     ├ Check Box List  Size=Small  "아이디 기억하기"
   │     └ Button  Primary / Large / 폭 240  "로그인"
   └ Copyright  "Copyright © PRADA. All rights reserved."  Label 2/Regular · Text/Subtle · 가운데
```

- 입력창은 **이 화면에서만 radius 4** (Radius/XS). 다른 화면 입력창은 모두 0.
- 입력창 라벨은 없음 (placeholder로 대신).
- PC와 모바일 구조·수치 동일. 모바일은 프레임 폭만 360 (좌우 여백 60).
- **에러 상태 `[Error Case] 로그인 실패 토스트 메세지`**: `Alert / Slim` + Error 아이콘, 메시지 "아이디 또는 비밀번호가 일치하지 않습니다." PC 400×56, 모바일(360) 320×56.
  - 위치·등장/퇴장 효과는 §2 Alert (Toast)의 "토스트 인터랙션"을 따른다 (상단 가운데 top 16, 스프링 등장, 2.5초 후 위로 퇴장).

### 3.2 로그인 후 목록(List) 화면 — 예: `[마스터]공지사항_List`

```
Frame 1920×1080  fill BG/Subtle (#F8F8F8)
├ Header  (0,0) 1920×52
├ Side Navigation  (0,52) 180×1028
├ Page Header  (180,52) 1740×126
└ 콘텐츠  x=204, y=178, 폭 1692 (= 1920-180-24-24), 세로 gap 24
   ├ search  (가로 gap 8)  [Dropdown 140] [Search Field 410]
   ├ table  (세로 gap 12)
   │  ├ 툴바: 왼쪽 "N개 선택됨"(Check 20 + 간격 4) / 오른쪽 [Line 버튼][Primary 버튼] gap 8
   │  └ 표 (헤더 34 + 행 40 × 10)
   └ Navigation: 가운데 Pagination, 오른쪽 "페이지 이동"(Go To) + 입력 (gap 12)
+ 오른쪽 아래 스크롤 버튼 `scrolling` 52×52 원형(radius 100) — 로컬 컴포넌트
```

- 헤더·사이드바는 스크롤해도 고정(sticky). 콘텐츠 아래 여백 40.
- **모바일 목록** (`[모바일]공지사항 리스트`): 본문 좌우 20, Page Header 아래 gap 24 → search(Dropdown 96 + Search Field 나머지, gap 8) → 툴바(버튼 **Medium 34**) → 표(가로 스크롤) → Pagination S(가운데) 아래 Go To + 개수 선택(gap 10). 하단 여백 100.
- 사용자 메뉴(헤더 사용자명 클릭): 130px 폭 말풍선, radius 8, 1px Text/Primary 테두리, 이름(Label 1/SemiBold) + 역할(Caption 1/Regular, Tertiary) + 구분선(Border/Secondary) + 항목 32px.

### 3.3 모바일 목록·조회 화면 — 예: `[모바일]순위조회_조회전`

```
Frame 360×(내용에 따라)  fill BG/Subtle, 세로 gap 20, 하단 패딩 100
├ Header (Mobile) 360×52
└ 본문 좌우 패딩 20 (내용 폭 320), 세로 gap 20
   ├ Page Header (Mobile)  제목 + 설명
   ├ 카드 container: BG/Surface, 1px Border/Disabled, 패딩 20/20/30/20, gap 24
   │   소제목 Body 1/SemiBold · Text/Secondary → 내용 → 폭 꽉 찬 Primary Large 버튼
   └ Empty State (아이콘 32 + 문구 Body 1/Regular Subtle)
```
- 모바일 높이는 812로 고정하지 않고 내용에 맞게 늘린다 (실제 800~1711).

### 3.4 입력 폼 (등록/수정)
- **짧은 설정**(사용시간, 단가 등)은 **Drawer(오른쪽) 또는 Modal Dialog** 안에 둔다.
  - 폼 필드 = `Box`(라벨 + 입력), 필드 간 gap 24(Drawer) / 10~16(Modal 안 카드).
  - 묶음이 필요하면 카드: BG/Surface, 1px Border/Tertiary, radius 8, 패딩 16, gap 16.
  - 하단은 반드시 `CTA Button` (2 Button = [취소 Line][확인 Primary]).
- **본문이 긴 글 작성**(공지사항 등)은 **별도 페이지의 폼 표**로 만든다 — 3.6 참고.

### 3.5 상세 화면 — 예: `공지사항 상세`
```
콘텐츠(x=204, 폭 1692), 세로 gap 24
├ 카드: BG/Surface, 1px Border/Disabled
│  ├ header 높이 54, 좌우 패딩 20, 양 끝 정렬, 아래 1px Border/Secondary
│  │   제목 Body 1/SemiBold · Text/Secondary  ……  날짜 Label 1/Regular · Text/Subtle
│  └ 본문 패딩 20, Label 1/Regular · Text/Secondary (줄바꿈 유지)
└ 버튼 오른쪽 정렬 gap 8: [목록 Line][삭제 Line][수정 Primary]  (Large)
```
- 모바일: header는 세로(제목 → 날짜, gap 8, 패딩 16/20), 버튼 3개 폭 균등.
- 읽기 전용 권한(총판·대행사·일반)은 [목록]만.

### 3.6 작성·수정 화면 (폼 표) — 예: `공지사항 작성`
```
콘텐츠(x=204, 폭 1692), 세로 gap 24
├ 폼 표: BG/Surface, 1px Border/Secondary
│  각 행 = 라벨 칸 150(BG/Table-Header, Label 1/Regular · Text/Secondary, 가운데, 오른쪽·아래 1px Border/Secondary)
│        + 입력 칸(패딩 20, 아래 1px Border/Tertiary)
│  ├ 등록 옵션  64   Check Box List Small "상단 고정" · "팝업" (간격 30, 칸 패딩 12/20)
│  ├ 팝업 기간 설정  80   [날짜 입력 + 달력 아이콘] ~ [날짜 입력]  (gap 8, "~" Label 1 Tertiary)
│  ├ 제목  80   Text Input 꽉 채움  "제목을 입력해 주세요."
│  └ 내용  440  Text Area 높이 400, 패딩 16  "내용을 입력해 주세요."
└ 버튼 오른쪽 정렬 gap 8: [목록 Line][저장 Primary]
```
- 날짜 placeholder "연도-월-일", 오른쪽 달력 아이콘 20(Icon/Default) → 날짜 선택기.
- 모바일: 표 없이 **라벨 위·입력 아래**(gap 12), 그룹 간 gap 24, 날짜 2칸은 한 줄(148 ~ 148), 내용 높이 320, 버튼 2개 폭 균등.
- 저장 → 목록(등록) 또는 상세(수정)로 이동 + 성공 토스트.

### 3.7 목록 화면의 상태·흐름 (공지사항 기준)
| 상황 | 결과 |
|---|---|
| 삭제 버튼, 선택 0개 | Error 토스트 "선택된 항목이 없습니다." |
| 삭제 버튼, 선택 있음 | Text Modal "선택하신 공지를 삭제하시겠습니까?" / "삭제 후 복구는 불가능합니다." [취소][삭제] |
| 삭제 확정 | 목록 갱신 + Success 토스트 "공지사항 삭제가 완료되었습니다." |
| 등록 / 수정 저장 | Success 토스트 "공지사항 등록이 완료되었습니다." / "공지사항 수정이 완료되었습니다." |
| 첫 진입 (팝업 공지 있음) | Modal Dialog 560: 제목 "[필독] …"(Body 1/SemiBold) · 메타 "날짜 · 작성자 · 조회 N"(Label 1 Subtle) · 구분선 · 본문(Body 3) · CTA [다시 보지 않기 Line][닫기 Primary] |
| 권한: 총판·대행사·일반 | 체크박스 열·툴바(선택 개수/삭제/작성) 없음 → 검색 바로 아래 표 |

### 3.8 자주 묻는 질문 (Accordion) — 예: `[마스터]FAQ`
```
콘텐츠(x=204, 폭 1692)
└ 목록: BG/Surface, 위·아래만 1px Border/Disabled (항목 사이 구분선 없음)
   └ Accordion Item × N
      ├ 질문 행 55 (모바일 53), 패딩 17.5/0 (모바일 18/0)
      │   [Q 열 80 가운데] "Q" Body 3/SemiBold · Table Text/Badge Blue
      │   [질문 텍스트, 좌우 패딩 14] Body 3/SemiBold · Text/Primary
      │   [Chevron 열 80 가운데] Chevron Down 16 · Icon/Default
      └ (펼침) 질문 행 아래 1px Border/Tertiary
         답변 영역: BG/Subtle, 패딩 18/0
           [A 열 80] "A" Body 3/SemiBold · Table Text/Badge Black (위 정렬)
           [답변 텍스트, 좌우 패딩 14] Body 3/Regular · Text/Tertiary (줄바꿈 유지)
```
- 모바일: 열 폭 80 → **40**, 글자 Body 3 → **Label 2**(질문·Q·A SemiBold / 답변 Regular).
- 질문 행 전체가 버튼. **한 번에 하나만 펼친다** — 다른 질문을 펼치면 이전에 펼친 항목은 (같은 200ms로) 접히고, 펼친 질문을 다시 누르면 접힌다.
- 오른쪽 아이콘: 접힘 **Chevron Down** → 펼침 **Chevron Up** (DS Templates › Accordion Item). 구현은 아이콘을 180° 회전, 200ms ease.
- 펼치기·접기는 **부드럽게**: 답변 영역 높이가 `grid-template-rows: 0fr ↔ 1fr`로 **200ms ease** 전환(드롭다운 hover와 같은 200ms). 접힌 답변은 `visibility: hidden`(전환이 끝난 뒤)으로 스크린리더·Tab에서 빠진다. `prefers-reduced-motion: reduce`이면 즉시.
- 권한에 따른 차이 없음 (마스터·총판·대행사·광고주 동일). 작성·수정 화면 없음.

### 3.9 프로필 수정 (Drawer) — 예: `[마스터]공지사항>프로필 수정`
진입: PC는 헤더 사용자 메뉴의 **[프로필 수정]**, 모바일은 모바일 메뉴 하단의 **프로필(아바타·이름) 영역**. 어느 화면에서든 같은 Drawer가 열린다.
```
Drawer / Size=368 (PC) · Size=Full (모바일)
├ 딤 BG/dim (모바일은 딤 없이 화면 전체 패널)
└ 패널: 오른쪽, 폭 368(모바일 100%), BG/Surface, Depth 2, 패딩 40/24 (모바일 40/16), gap 24
   ├ 제목 "프로필 수정"  Body 1/SemiBold, 아래 패딩 12 + 1px Border/Tertiary
   ├ 폼 (Box × 4, 간격 24) — 라벨 Label 1/Regular + 필수 "*" Label 1/Medium·Text/Error, 라벨 ↔ 입력 6
   │   아이디 *  Text Input Disabled (로그인 아이디)
   │   비밀번호 *  Text Input "비밀번호를 입력해주세요." (type=password)
   │   권한 *  Text Input Disabled ("마스터" / "총판")
   │   메모  Text Area 높이 80, 패딩 10/16 "내용을 입력해주세요."
   └ CTA Button 2 Button: [취소 Line][수정 Primary] Medium 34, 폭 균등
```
- Disabled 입력: BG/Disabled + Border/Secondary + 글자 Text/Subtle.
- [수정]: 비밀번호가 비어 있으면 입력창 Error 테두리 + 포커스. 성공 시 Drawer 닫고 Success 토스트 **"프로필 수정이 완료되었습니다."** (PC 400 · 모바일 320).
- [취소]·딤 클릭·Esc → 바로 닫힘. 열기: 딤 페이드 150ms + 패널 오른쪽에서 200ms ease-out (모션 공통 규칙).

### 3.10 계정관리 — 예: `계정관리` (마스터) / `총판/대행사/광고주`
```
콘텐츠(x=204, 폭 1692), 세로 gap 40 (현황 카드 ↔ 목록) / 목록 안 gap 24
├ Metric Card "계정 현황": 전체(강조) · 관리자 · 대행사 · 광고주
├ 검색: Dropdown(전체/아이디/소속) + Search Field
├ 툴바: ✓ N개 선택됨 …… [사용시간 설정 Line][삭제 Line][등록 Primary]   ← 마스터만
├ 표: ☐ 56 | No 80 | 아이디▾ 140 | 비밀번호 140 | 권한▾ 140(Role Badge) | 소속▾ 140 | 수량⇅ 140 | 광고 56(Copy Plus) | 메모(남는 폭, 가운데) | 관리 56(Settings)
└ 페이지 이동 (기본 10개씩 보기)
```
- 열 ▾ = Filter 팝오버, ⇅ = Sort.
- **광고 추가**(행의 Copy Plus) → Drawer "광고추가": 아이디(Disabled) · 결제*(Segmented: 결제 | 테스트) · 수량* · 일수* · 작업 시작일*(달력) · 작업 종료일(Disabled, **= 시작일 + 일수 − 1** 자동) → [닫기][추가] → "광고 추가가 완료되었습니다."
- **계정 등록**(툴바 [등록]) → Drawer "계정등록": 아이디* · 비밀번호* · 권한*(Disabled "총판사") · 소속*("회사명을 입력해주세요.") · 메모 → [닫기][등록] → "계정 등록이 완료되었습니다."
- **계정 수정**(행의 Settings) → Drawer "계정수정": 아이디*(Disabled) · 비밀번호* · 권한*(Disabled) · 메모 → [닫기][수정] → "계정 수정이 완료되었습니다."
- **삭제**: 선택된 계정이 없으면 [삭제] **비활성**(Button Status=Disabled), 선택하면 활성. 광고(수량)가 남은 계정 포함 → Error "광고가 남아있는 계정은 삭제할 수 없습니다." / 그 외 → Text Modal "선택하신 계정을 삭제하시겠습니까?" → "계정 삭제가 완료되었습니다."
- **권한별**: 총판·대행사·광고주는 툴바(선택 개수·삭제·등록) 없음, 사이드바에서 **서비스관리·사용시간 설정 메뉴가 빠진다**.
- 모바일: 현황 카드 2×2, 툴바 버튼 Medium, 표 가로 스크롤.
- Drawer 버튼 문구는 [닫기]로 쓴다 (프로필 수정만 [취소]).
- **사용시간 설정**(툴바) → Modal Dialog **796**(모바일 340, 패딩 40/20) "사용시간 설정":
  - 머리: "YYYY년 M월"(Body 3/SemiBold · Text/Secondary) + [날짜 전체 선택](Button Line **Small** 24) …… [‹][›](Icon Button Line Small 24, 간격 5). 머리 ↔ 달력 ↔ 시간 간격 30.
  - **Full Calendar**: 월요일 시작, 칸 108×108(패딩 8), 요일 줄 32(BG/Subtle, Label 1 · Text/Tertiary), 선 Border/Secondary. 이번 달이 아닌 날 = BG/Disabled + Text/Subtle(선택 불가). **선택한 날 = 2px Border/Select + 배경 Blue/100 30%**. 날짜를 누를 때마다 선택/해제, [날짜 전체 선택]은 이번 달 전체(이미 전부면 해제).
  - **Calendar Event** 칩: 높이 20, 패딩 2/6, radius 4, Label 2/Regular 흰 글자 가운데, 간격 4 — 발주 = Badge Green(#13AD7A) · 수정 = Badge Blue · 환불 = Badge Red, "시작 ~ 종료".
  - 시간: 발주 시간 · 수정 시간 · 환불 시간 (Box 간격 16, [시작] ~ [종료], 기본 00:00 ~ 23:50). 형식 오류 "00:00 형식으로 입력해주세요." / 종료 ≤ 시작 "시작 시간보다 늦게 입력해주세요."
  - [취소][수정] → 선택한 날짜에 세 시간을 저장해 칩으로 표시, 닫고 "사용시간 설정이 완료되었습니다." / 날짜 미선택 시 Error "날짜를 선택해주세요."
  - 모바일: 달력은 대화상자 안에서 **가로 스크롤**(756 고정). 대화상자가 화면보다 길면 바깥(딤)이 스크롤.

### 3.11 광고관리 — 예: `광고관리` (마스터) / `총판/대행사/광고주`
```
콘텐츠(x=204, 폭 1692), 세로 gap 40 (현황 ↔ 목록) / 목록 안 gap 24
├ Metric Card "전체 현황"(1692): 전체(강조) · 정상 · 오류 · 대기 · 종료예정 · 종료
├ (간격 10) "광고 현황" 840 | 12 | "테스트 현황" 840 — 같은 6항목, 강조 없음
├ 검색: Dropdown(전체/아이디/키워드/상품명) + Search Field
├ 툴바: ✓ N개 선택됨 …… [로직관리][⤓순위데이터 추출][엑셀업로드 Secondary][⤓발주데이터 추출] [수정][삭제][연장 Primary]   (Large, ⤓ = Download 16)
├ 표: ☐ 56 | No 80 | 아이디▾ 120 | 상태▾ 80(Status Badge) | 키워드 140 | 순위 80 | 상품명 460(Link) | 프로덕트ID 120 | 벤더ID 120 | 작업일수 100 | 시작일 140 | 종료일 140 | 관리 56(Settings)
└ 페이지 이동
```
- **종료일 강조**: 종료예정(종료일까지 3일 이내)·종료된 광고는 종료일 글자를 **Text/Error(#FE1818)** 변수로 표시 (실서비스 기준, Figma 홈 4개 프레임 예시 행에 변수 연결).
- 순위 = "N위" **Label 2/SemiBold**, 순위가 없으면 "순위없음"(Regular). 상품명 = Text/Link(누르면 상품 페이지 새 창).
- 셀 동작: 아이디 → **계정정보** Drawer 368(총판사·대행사·광고주·권한·메모 모두 Disabled, [취소][확인]) / 순위 → **순위보고서** / 관리(Settings) → 그 광고 **광고수정**.
- 툴바 [수정]·[삭제]·[연장]·[추출]은 **항상 기본 상태(Status=Default)로 보이고 Disabled를 쓰지 않는다** (사용자 확정). [수정]·[삭제]·[연장]은 선택이 없으면 Error "광고를 선택해주세요."
- **[순위데이터 추출]·[발주데이터 추출]은 선택과 상관없이 관련 데이터 전체 파일**을 내려받는다 (사용자 확정): 누르면 표 위 Loading Overlay "데이터를 내려받는 중..."(두 추출 버튼은 잠시 비활성) → CSV 내려받기. 구현: `Prada.showLoading(표, 문구)`. (계정관리 [삭제]의 비활성 규칙과 다름 — 시안에 이 오류 토스트가 있다.)
- **광고수정** Drawer **568**: 상품 URL* · 가격비교 URL · 순위조회 키워드* · 40위 이내 순위조회 키워드*([입력][추가 Primary Large] + Tag Filled 목록, 간격 6) · 3위 이내 순위조회 키워드*(같은 구성) · 메모 → [취소][수정] → "광고 수정이 완료되었습니다." 종료된 광고 → Error "종료된 광고는 수정할 수 없습니다."
- **삭제**: 아직 끝나지 않은(종료일이 지나지 않은) 광고가 섞여 있으면 Error "광고가 남아있는 계정은 삭제할 수 없습니다."(시안 문구 그대로) / 모두 종료된 광고면 Text Modal "선택하신 광고를 삭제하시겠습니까?" / "삭제 후 복구는 불가능합니다." → "광고 삭제가 완료되었습니다."
- **광고연장** Drawer 368: 번호(Disabled, 선택한 번호) · 연장 일수* → [취소][연장] → 종료일·작업일수에 더하고 "광고 연장이 완료되었습니다."
- **순위보고서** Modal Dialog **780**(모바일 340), 내용 gap 32:
  - [일별 | 시간별] Segmented 228 가운데 → (gap 12 묶음) 키워드 Tag Outline/Selected · [상품 이미지 160 | 정보 표 570(상품명 · 상품 URL · 프로덕트ID/벤더ID · 월간 검색량/리뷰수, 머리칸 110 값 460/175)] · 요약 표 740(키워드 84/142 · 종료 순위 64/80 · 시작 순위 64/80 · 시작일 대비 84/142)
  - (gap 12 묶음) [평균 순위][최고 순위][최저 순위] Tag → 꺾은선 차트 740×404: Y축 0~500(50 간격, 0이 위 — 순위가 높을수록 위), X축 일별 7일(MM/DD, 최근이 왼쪽) · 시간별 10시간(HH:00), 격자 #EEE, 선 3px + 점 8. 고른 순위만 진한 색(Chart/…-Default: 평균 #13AD7A · 최고 #FE1818 · 최저 #3B82F6), 나머지는 옅은 색(Chart/…-Disabled: 평균 #CBE9D3 · 최고 #F4CEC6 · 최저 #CEDEF8). 고른 순위 선이 맨 위.
  - [평균 순위]·[최고 순위]·[최저 순위] Tag를 누르면 그 선만 활성(진한 색, 맨 위)이 되고, **hover·포커스는 활성 선의 점에서만** 반응한다. 비활성(옅은) 선의 점은 반응하지 않는다.
  - **점 hover(또는 키보드 포커스) → Chart Tooltip** (DS `Chart` Hover=True): 점 중심 오른쪽 9에 왼쪽 꼬리(9×12) + 상자(Gray/800 #2D2D2D, radius 6, 패딩 8, gap 4). 날짜 Label 2/SemiBold → 3줄 [Legend Box 10(순위 색, 1px 흰 테두리) + 4 + "평균 순위: N위"] 흰 글자, **고른 순위 줄만 SemiBold + 진한 색**, 나머지 Regular + 옅은 색. 상자는 점 높이 가운데, 차트 위·아래 끝에서는 상자만 안쪽으로 밀고 꼬리는 점에 둔다. 오른쪽 끝 점은 왼쪽에 띄운다. 150ms 페이드로 나타나고 벗어나면 즉시 사라진다.
  - 날짜 표: 머리 "MM/DD (요일)" 40 + 값 40, 칸 균등.
  - 시작일 대비: 좋아지면 "▲ N위" Badge Red, 나빠지면 "▼ N위" Badge Blue.
  - 데이터 없음(오류 광고): 차트·날짜 표 대신 Empty State, 그리고 오류 원인을 **Alert Detail**로 안내 — "작업키워드 1번 CPC 노출 오류" / "작업키워드 1번 10위(3위) 이내 순위 미노출 오류" / "해시태그 미등록 오류".
  - 모바일: 키워드 Tag 가로 스크롤, 이미지 꽉 찬 정사각형, 정보·요약 표는 한 줄씩 세로로, 차트·날짜 표는 가로 스크롤.
- **로직관리** Modal Dialog **400**(모바일 340, 패딩 24/16) — **마스터 전용**, 툴바 [로직관리] → 딤 + 모달. **디자인은 PRADA 시안, 작동은 기획서**:
  - 디자인: 유입수 박스(BG/Subtle, 패딩 10, radius 4: "유입수"(Label 1/SemiBold) + "금일 송출 슬롯 N개 / 익일 예상 슬롯 N개"(Label 1/Medium), Text/Secondary) · 안내 3줄("·" + Label 1/Medium, 간격 2) → 매체 8줄(행 40, 사이 구분선 Border/Tertiary 위아래 8, 위아래 패딩 20, 아래 1px 선): 매체명 76(Body 3/SemiBold) · 24 · [입력 64]% · …… 유입 "금일 N · 익일 N 유입"(Label 1/Medium · Text/Brand-Light #32558D) → 합계 줄: "합계 N%" · "총유입 금일 N · 익일 N" · [균등분배](밑줄) → [취소][저장].
  - 작동(기획서): 비율은 **숫자만 · 최대 3자리**(넘는 입력은 받지 않음), placeholder "0" — **비우면 0%**. 합계·매체별 유입은 **입력할 때마다 바로** 계산, **합계가 100%가 아니면 "합계 N%" 빨강(Text/Error) + [저장] 비활성**(100% 미만·초과 모두). [취소]·X·바깥·Esc = 닫힘, 바꾼 값은 적용 안 됨(다시 열면 저장된 값). [저장] → "로직 저장이 완료되었습니다." 유입 = 슬롯 × 50 × 비율.
- **엑셀업로드**(Button Type=Secondary, 아이콘 없음): 파일 선택(xlsx·xls·csv) → "엑셀 업로드가 완료되었습니다." / 다른 형식 "엑셀 파일(xlsx, xls, csv)만 올릴 수 있습니다." / 빈 CSV "올릴 광고가 없습니다."
- **권한별**: 총판·대행사·광고주는 [로직관리]·[추출]·[엑셀업로드] 버튼 없이 [수정][삭제][연장]만.
- 모바일: 현황은 "전체 현황"만(2열 × 3줄), 툴바 3줄 — [순위데이터 추출][발주데이터 추출] / [엑셀업로드][로직관리] (오른쪽 정렬) / 선택 개수 + [수정][삭제][연장] (Medium 34). 표 가로 스크롤.
- Drawer 버튼 문구: 광고관리는 [취소] (계정관리는 [닫기]) — 시안 기준.

### 3.12 정산로그 — 예: `정산로그` (마스터) / `총판/대행사` / `광고주` / `삭제로그 팝업`
```
콘텐츠(x=204, 폭 1692), 세로 gap 40 / 목록 안 gap 24
├ Metric Card "검색 결과": 조회 기간("YYYY-MM-DD ~ YYYY-MM-DD") · 발주 일수 · 연장 일수 · 환불 일수 · 일수 합계 (5등분, 강조 없음)
├ 검색: Dropdown(전체/총판사/대행사/광고주) + Search Field
├ 기간 줄: [시작일 140 📅] 8 ~ 8 [종료일 140 📅] 8 [오늘][1일전][이번 달][-1달][-2달][-3달] (Large, 폭 55 고정, 간격 8, 고른 것 Primary) …… [⤓ 엑셀 저장 Line 100]
├ 표: No 142 | 구분▾ 140(Type Badge) | 총판사▾ 160 | 대행사▾ 160 | 광고주▾ 160 | 수량 120 | 기간 120 | 일수합계 120 | 생성일시(남는 폭) | 시작일 240 | 관리 56(History)
└ 페이지 이동 (기본 50개씩 보기)
```
- **Type Badge(구분)**: 배경 없이 Label 2/SemiBold — 신규 = Badge Dark Green(#077E57) · 연장 = Badge Blue · 환불 = Badge Red.
- 일수: 발주·연장·환불 일수 = 그 구분 행의 일수합계(수량 × 기간) 합, **일수 합계 = 발주 + 연장 − 환불**. 현황 항목(발주·연장·환불)을 누르면 표가 그 구분만, 일수 합계를 누르면 전체 (조회 기간은 누를 수 없음).
- 기간: 빠른 버튼을 누르면 날짜가 채워지고 그 버튼만 Primary. 날짜를 직접 바꾸면(입력 후 Enter·달력) 빠른 버튼 선택이 풀린다. 오류: 형식 "날짜 형식을 확인해주세요." / 시작 > 종료 "기간을 다시 선택해주세요." (입력 아래 빨간 문구, 표를 아래로 민다).
- 관리 History(20) → **삭제 로그** Modal Dialog **940**: 표 No 110 · 상품명 310(왼쪽 정렬, 말줄임) · MID 100 · 시작일 100 · 종료일 100 · 환불요청일 100 · 환불일수 80, 머리 34 · **행 36** → [닫기]. 연장 행에는 History 없음.
- 엑셀 저장 = 지금 조회 결과(필터 포함) 전체를 CSV로.
- **권한별 열**: 총판·대행사 = 총판사 열 없음(생성일시 434) / 광고주 = 총판사·대행사 열 없음(생성일시 594). 툴바·현황은 같다.
- 모바일: 현황 = 조회 기간 한 줄(280) + 2×2, 기간 줄은 날짜 두 칸만(146 ~ 146, 빠른 버튼·엑셀 저장 없음), 표 No 80 · 구분 80 · 소속 100, 가로 스크롤.

### 3.13 수정관리 — 예: `수정관리` (마스터) / `총판, 대행사, 광고주` / `수정 전 데이터 팝업`
```
콘텐츠(x=204, 폭 1692), 현황 카드 없음 / 목록 안 gap 24
├ 검색: Dropdown(전체/수정자 ID/대상자 ID/상품명/키워드) + Search Field
├ 기간 줄: [시작일] ~ [종료일] [이번 달][-1]…[-4] (월 버튼 5개, 기본 = 이번 달) …… [⤓ 엑셀 저장]   ← 엑셀 저장은 마스터만
├ 표: 수정시간 140 | 구분▾ 120 | No 120 | 수정자 ID▾ 120 | 대상자 ID▾ 120 | 상품명(남는 폭, Link) | 키워드 120 | 프로덕트 120 | 벤더 120 | 수정전 56(History)
└ 페이지 이동 (기본 50개씩 보기)
```
- 구분은 배지 없이 일반 글자: 정보수정 · 신규정보. **정보수정 행에만** History 아이콘 → **수정 전 데이터** Modal Dialog 940: 같은 열(수정시간 110 · 구분 72 · No 72 · 수정자 ID 72 · 대상자 ID 72 · 상품명 202(Link, 말줄임) · 키워드 100 · 프로덕트 100 · 벤더 100), 머리 34 · 행 36, 1줄 → [닫기].
- 기간 선택은 정산로그와 같은 공통 부품(`Prada.period`) — 빠른 버튼 구성만 화면마다 다르다(정산로그: 오늘·1일전·4개월 / 수정관리: 5개월).
- 모바일: 기간 줄은 날짜 두 칸만, 표 가로 스크롤(열 너비 PC와 같음).

### 3.13-1 일별마감 — 예: `일별마감` (마스터 · 총판/대행사 동일)
- 정산로그(3.12)와 같은 틀: Metric Card "검색 결과"(조회 기간 · 발주 일수 · 연장 일수 · 환불 일수 · 일수 합계, **누를 수 없음** — 표가 구분별이 아니라 일자별이라서) → 검색(전체/총판사/대행사/광고주) → 기간 줄(월 버튼 5개, 기본 = 이번 달 "당월") …… [⤓ 엑셀 저장] → 표.
- 표: 6칸 균등(282) — 일자 · 발주일수 · 연장일수 · 환불일수 · 일수합계 · 기간합계, 값은 "N일". **일수합계 = 발주 + 연장 − 환불**, **기간합계 = 표 맨 위(최근 일자)부터 그 행까지 일수합계 누적** (시안 숫자와 같은 방식, 사용자 확정). 검색어가 있으면 그 소속의 정산만 모아 계산.
- 모바일: 현황 = 조회 기간 한 줄 + 2×2, 기간 줄은 날짜 두 칸만, 표는 PC와 같은 칸 폭으로 가로 스크롤.

### 3.13-2 순위조회 — 예: `예외 케이스_순위조회` (조회 전 · 조회 완료 · Empty)
- **별도 어드민(시안)**: 헤더 로고 자리·사이드바 메뉴가 비어 있는 셸 — PRADA 메뉴 없이 순위조회만. 첫 화면 [순위조회]로 들어가며 권한과 무관(구현: `<body data-prada-nav="none">`).
- Empty State는 카드 바로 아래 높이 233, 아이콘·문구 가운데(PC 카드와 붙음 / 모바일은 카드 아래 20). 모바일 제목 ↔ 카드 20, 카드 패딩 20/20/30/20.
```
콘텐츠: 입력 카드(x=204, 폭 1692) 10 결과(탭 + 표, 탭 줄은 본문 전체 폭)
├ 카드 "검색 입력"(Body 1/SemiBold · Text/Secondary): 패딩 20/20/30/20, 1px Border/Disabled, 그림자 없음, gap 24
│  ├ [상품 URL 340] 20 [키워드 입력 + 추가 Primary = 340] (라벨 Label 1/SemiBold)
│  ├ 20 "키워드 리스트"(Body 3/SemiBold) 12 Tag Filled 목록(간격 8)
│  └ 20 [순위조회 Primary Large]
├ Tab Bar: 48, 좌우 24, 간격 12, 아래 1px Border/Secondary(안쪽) — Tab Item 패딩 14/10, Body 3 · Text/Secondary, 선택 = SemiBold + 아래 2px Border/Brand
└ 40 표: 프로덕트 142 · 벤더 140 · 키워드 160 · 순위 160 · 월간 검색량 160 · 권장 구좌 120 · 상품명(남는 폭) · 상품 URL 80(Copy 20)
```
- 키워드는 [추가]·Enter로 Tag 추가, X로 삭제. [순위조회] 시 키워드마다 탭 하나. 탭은 ← → 로도 이동.
- Copy 아이콘 → 클립보드에 상품 URL + Success "상품 URL이 복사되었습니다."
- Empty State(폴더 X 아이콘 32 + Body 1 · Text/Subtle, 위 40): 조회 전 "아직 순위 조회 된 데이터가 없습니다" / 조회했지만 못 찾음 "순위를 조회했으나↵순위권에서 상품을 찾을 수 없습니다"(탭·표 없이).
- 오류: "상품 URL을 입력해주세요." · "올바른 URL을 입력해주세요." · "키워드를 추가해주세요." · "이미 추가된 키워드입니다."
- 모바일: 입력 세로로 쌓기(각 280), [순위조회] 꽉 찬 폭, 탭 줄 가로 스크롤, 표 가로 스크롤.

### 3.13-3 서비스관리 [마스터] — 예: `서비스관리`
- Metric Card "검색 결과" 6등분: 조회 기간 · **서비스명**(고른 서비스, 기본 "전체") · 발주 일수 · 연장 일수 · 환불 일수 · 일수 합계 (누를 수 없음).
- 검색(전체/아이디/서비스명) → 기간 줄: [시작일] ~ [종료일] 8 [서비스 Dropdown 123](전체 + 서비스명) — **빠른 기간 버튼 없음**(`Prada.period.html(state, [])`). 기본 = 이번 달.
- 표 7칸 균등: 서비스명 · 아이디 · 비밀번호 · 발주일수 · 연장일수 · 환불일수 · 일수합계(= 발주 + 연장 − 환불), 한 줄 = 서비스 × 계정.
- 모바일: 조회 기간 한 줄 + 2칸씩, Dropdown 꽉 찬 폭, 표 칸 100 가로 스크롤.

### 3.13-4 사용시간 설정 [마스터] (Drawer) — 예: `사용시간 설정`
- **사이드바 메뉴를 누르면 화면 이동 없이 지금 화면 위에 Drawer**가 열린다(`NAV` 링크 자리에 `action:usage`). 계정관리 툴바의 [사용시간 설정](달력 팝업 796, 3.10)과는 다른 것.
- Drawer 패널 **325**(내용 277, 패딩 40/24), 모바일 Full: 제목 → "YYYY년 MM월"(Label 1 · Text/Secondary) 24 **Date Picker**(일요일 시작, 칸 37 원형 · 가로 3 · 세로 8, 요일·날짜 Label 1/Regular, 이번 달 아닌 날 Text/Disabled, 고른 날 BG/Brand + 흰 SemiBold, 여러 날 선택) → 발주 시간 · 수정 시간 · 환불 시간 [시작 126] ~ [종료 126] (기본 00:00~18:30 · 00:00~23:59 · 00:00~18:00) → [닫기][적용].
- 적용: 시간 형식 "00:00 형식으로 입력해주세요." / 종료 ≤ 시작 "시작 시간보다 늦게 입력해주세요." / 날짜 없음 Error "날짜를 선택해주세요." / 성공 "이용시간 설정이 완료되었습니다."

### 3.14 캠페인 — `캠페인 요약` · `캠페인 관리` · `정산관리` (+ 단가설정 · 광고 ON/OFF · 정답 수정 팝업)
- **사이드바 Sub Nav Dropdown**: 머리 = Nav Item(아이콘 View All) + 오른쪽 Chevron 16 — 접힘: Text/Subtle + Chevron Right / 펼침: Text/Inverse + Chevron Down(200ms 회전). 하위 메뉴 = BG/dim-white(흰색 6%) 위아래 4, 항목 36 · 왼쪽 48 · Body 3/Regular Text/Inverse(현재 화면 SemiBold). 펼침·접힘 200ms. 현재 화면이 속한 그룹은 펼친 채 시작. 구현: `prada.js` NAV에서 링크 자리에 `[[이름, 링크]…]`.
- **캠페인 요약**: Metric Card "검색 결과" 3등분(등록된 광고수 · 오늘 소진 목표량 · 오늘 소진 횟수, 누를 수 없음) → 한 줄에 [기간 선택(오늘·1일전·4개월)] 10 [Dropdown + Search Field] → 표 9칸 균등(일자 · 네이버 쇼핑 소진 목표 · 소진 횟수 · 오답 · 유니크 참여 · 모두 소진 · 지면 호출 횟수 · CVR · CTR). 모바일: 현황 = 첫 항목 한 줄 + 2칸, 날짜 → 검색 → 빠른 기간 6칸 균등(34).
- **캠페인 관리**: [등록일 140 📅 "연도. 월. 일"] [Dropdown] [Search Field] → 표: 상품명(남는 폭, **Label 2/SemiBold**) · 할당량 · 소진 횟수 · 남은 횟수 · 오답수 · 등록일 100 · 광고 노출 80(Toggle) · 정답 수정 80(Settings). 모바일: 등록일 한 줄 → 검색 한 줄, 상품명 왼쪽 정렬.
  - **Toggle**: 트랙 32×16(켜짐 BG/Brand-Hover · 꺼짐 Border/Secondary) + 손잡이 14 흰색, 200ms 이동, `role="switch"`. 누르면 Text Modal(제목만) "광고를 ON(OFF) 하시겠습니까?" [취소][확인] → "광고를 ON(OFF) 하였습니다."
  - **정답 수정** Modal Dialog **360**: Text Input + 12 아래 도움말 "저장을 누르면 즉시 반영됩니다."(Label 2 · Text/Subtle) → [취소][저장] → "정답 수정이 완료되었습니다." 비우면 "정답을 입력해주세요."
- **정산관리**: **Chip Item**(전체 + 매체 8개, 하나만, 34 · 패딩 0/14 · radius 4, 선택 = BG/Brand-Light + Border/Brand-Light + Text/Brand-Light, 간격 6, 위아래 6) → [기간 선택(오늘·이번 달)] …… [단가설정][⤓ 정산 다운로드] → 표: 일자 · 구분 80 · 목표유입수 · 소진유입수 · 유입당원가 · 매체단가 · VAT(10%) · 총정산금액(₩ 표기). 매체단가 = 소진유입수 × 유입당원가, VAT = 10%, 총정산 = 매체단가 + VAT.
  - 매체·기간을 바꾸면 **Loading Overlay**(표 위 BG/dim, Spinner 48 + "정산 데이터를 불러오는 중..." Label 2) 후 표 갱신.
  - **단가설정** Modal Dialog **630**(높이 818, NBT 894): 안내 2줄("·" **13px Medium · 줄 150%** Text/Tertiary, 간격 2) 20 → 입력 상자(테두리 안 패딩 16, radius 8, 1px Border/Tertiary, 줄 간격 10): [매체 ▾ 180][카테고리 ▾ 180][적용 시작일 📅 180, **"YYYY. MM. DD"** 표기] / [단가(원) 274][NET(원) 274 "미입력 시 단가"] → [추가하기 Primary]. **구간 입력은 매체가 NBT일 때만** 나타난다(사용자 확정): 매체 줄 아래에 구간마다 한 줄 [구간(이상~미만) 181] ~ [상한 금액 180] [구간삭제 Line 77][구간추가 Secondary 77] — 구간추가는 바로 아래에 새 구간(앞 구간의 상한에서 시작), 구간삭제는 그 줄 삭제(한 줄만 남으면 비활성). 추가하기 → 구간마다 단가 한 줄씩 등록. 오류: "숫자를 입력해주세요." / "이상보다 큰 상한 금액을 입력해주세요." 매체를 바꿔도 입력한 값은 유지. 폼 안 Dropdown은 Chevron Down 20(`mountSelect(…, { chevron: true })`). 아래 "전체 단가"(**14px Medium · 줄 150%**) 10 표(Style=Plain: 머리 BG/Table-Header · Text/Primary 34 + 아래 1px Border/Secondary, 행 40 + 아래 1px Border/Tertiary, 글자 12px · 줄 18, 구분 80 · 매체 80 · 카테고리 120 · 적용 시작일 120 · 구간 60 · 단가 130) — 고른 매체의 단가만. 추가 → "단가 설정이 추가되었습니다."
  - 화면보다 긴 팝업(단가설정 모바일 등)은 대화상자 대신 바깥(딤)이 스크롤.
  - 단가설정 모바일(340, 패딩 24/16): 매체·카테고리·적용 시작일 세로(간격 8) → 묶음 사이 24 → 구간 [이상] ~ [상한] 한 줄 + 아래 [구간삭제][구간추가] 반씩(간격 8) → [단가][NET] 나란히(133) → [추가하기] 꽉 찬 폭. 높이 988(NBT 1126).
  - 모바일: 칩 줄바꿈, 날짜 두 칸 → [오늘][이번 달][단가설정][정산 다운로드] 한 줄, 표 가로 스크롤(구분 80 · 나머지 100).

---

## 4. 문구(Copy) 규칙
- 존댓말 + 마침표: "아이디를 입력해 주세요.", "아이디 또는 비밀번호가 일치하지 않습니다."
- placeholder는 "~을/를 입력해 주세요." (띄어 쓴 "해 주세요" — 화면 기준. DS 기본값 "입력해주세요"는 붙여 씀 → 화면 기준을 따른다)
- 페이지 설명은 한 문장, "~할 수 있습니다." 형태.
- 버튼 문구는 2~4자 동사형: "로그인", "등록", "삭제", "확인", "취소".
- 선택 개수: "N개 선택됨".
- 빈 상태: "아직 ~ 데이터가 없습니다".

---

## 5. 코드 구현용 CSS 변수

```css
:root {
  /* font */
  --font-family: "Pretendard", -apple-system, sans-serif;
  --letter-spacing: -0.02em;

  /* text */
  --text-primary: #111111;  --text-secondary: #333333;  --text-tertiary: #555555;
  --text-subtle: #9e9e9e;   --text-disabled: #dddddd;   --text-inverse: #ffffff;
  --text-brand: #1b2a41;    --text-brand-hover: #2d3f5c;
  --text-brand-light: #32558d; --text-brand-light-hover: #6480ab;
  --text-error: #fe1818;    --text-link: #3b82f6;    --text-brand-light: #32558d;
  /* Table Text/Badge */
  --badge-dark-green: #077e57; --badge-green: #13ad7a; --badge-blue: #3b82f6; --badge-red: #fe1818; --badge-black: #2d2d2d; --badge-gray: #9e9e9e;
  --gray-600: #555555;       /* Tooltip 배경 */
  --gray-800: #2d2d2d;       /* Chart Tooltip 배경 */

  /* background */
  --bg-surface: #ffffff;  --bg-subtle: #f8f8f8;  --bg-disabled: #f5f5f5;
  --bg-table-header: #eeeeee; --bg-table-header-hover: #e4e4e4; --bg-table-cell-hover: #f8f8f8;
  --bg-brand: #1b2a41;    --bg-brand-hover: #2d3f5c;
  --bg-brand-light: #edf0f5; --bg-brand-light-hover: #d0d9e6;
  --bg-error: #ffede9;    --bg-success: #e8f5eb;
  --bg-select: rgba(59,130,246,.3); --bg-dim: rgba(11,25,47,.3); --bg-dim-white: rgba(255,255,255,.06);

  /* border */
  --border-primary: #9e9e9e; --border-secondary: #dddddd; --border-tertiary: #eeeeee;
  --border-disabled: #e4e4e4; --border-brand: #1b2a41; --border-brand-light: #32558d;
  --border-error: #fe1818;  --border-select: #3b82f6;  --border-inverse: #ffffff;

  /* icon */
  --icon-default: #2d2d2d; --icon-subtle: #9e9e9e; --icon-brand: #1b2a41; --icon-hover: #2d3f5c;
  --icon-disabled: #dddddd; --icon-inverse: #ffffff; --icon-error: #ff6262; --icon-success: #26c28e;

  /* radius */
  --radius-xxs: 2px; --radius-xs: 4px; --radius-s: 6px; --radius-m: 8px;
  --radius-l: 10px; --radius-xl: 12px; --radius-full: 100px;

  /* shadow */
  --shadow-1: 0 2px 8px rgba(11,25,47,.07);
  --shadow-2: 0 3px 6px rgba(11,25,47,.07);
  --shadow-3: 2px 3px 12px rgba(11,25,47,.08);

  /* control sizes */
  --control-h-lg: 40px; --control-h-md: 34px; --control-h-sm: 24px;
}
```

**구현 파일 구조**: 로그인 후 화면은 공통 `prada.css`(토큰·컴포넌트·모션·셸)와 `prada.js`(헤더·사이드바(펼침 메뉴·action 메뉴)·모바일 메뉴·프로필 Drawer·사용시간 설정 Drawer·토스트·툴팁·확인창·필터 팝오버·기간 선택·스크롤 버튼 + 세션·권한·입력 에러 처리)를 쓰고, 공통 파일을 고치면 각 화면의 `?v=` 값을 올린다. 캠페인 3화면은 예시 데이터를 `campaign-data.js`로 함께 쓰고, 화면 고유 스타일·스크립트만 각 HTML에 둔다. 위 CSS 변수는 `prada.css`에 한 번만 정의한다.

**Figma → CSS 변환 주의 (테두리는 모두 inside)**
Figma의 1px 테두리는 크기 안쪽에 그려져 크기·위치를 바꾸지 않는다. CSS는 테두리만큼 내용을 밀어내므로 아래처럼 맞춘다.
- `box-sizing: border-box`를 쓴다. 높이가 고정된 컨트롤(입력 40, 버튼 40/34/24)은 `height`로 지정하면 맞는다.
- **테두리가 있는 요소의 패딩 = Figma 패딩 − 1**: 버튼 Large `0 15px` · Medium `0 11px`, 입력·드롭다운 `0 15px`, Text Area `15px`, Alert `15px`(아이콘 왼쪽 16).
- **카드·폼 표처럼 자식이 있는 외곽선**은 `border` 대신 `outline: 1px solid; outline-offset: -1px` — 자식 위치·크기를 밀지 않는다.
- **표 셀**은 `height: 40px; padding: 0 12px`(세로 패딩 0) — 아래 테두리를 높이 안에 포함시킨다. 체크박스 열은 왼쪽 테두리 1을 빼고 `width: 55px`.
- 아래 테두리가 있는 칸(폼 표 입력 칸·모바일 상세 header)은 아래 패딩을 1 줄인다.

텍스트 스타일 클래스 예시 (모두 `font-family: var(--font-family); letter-spacing: var(--letter-spacing);`)
```css
.heading-1-semibold { font: 600 22px/30px var(--font-family); }
.body-1-semibold    { font: 600 16px/24px var(--font-family); }
.body-2-semibold    { font: 600 15px/22.5px var(--font-family); }
.label-1-regular    { font: 400 13px/20px var(--font-family); }
.label-1-medium     { font: 500 13px/20px var(--font-family); }
.label-1-semibold   { font: 600 13px/20px var(--font-family); }
.label-2-regular    { font: 400 12px/16px var(--font-family); }
.label-2-semibold   { font: 600 12px/16px var(--font-family); }
.caption-1-regular  { font: 400 11px/16.5px var(--font-family); }
```

