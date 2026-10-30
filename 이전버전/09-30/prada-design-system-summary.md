# Prada 디자인 시스템 작업 정리

> 작성일: 2026-10-01
> 대상 파일: [Prada 디자인 시스템 (Figma)](https://www.figma.com/design/IaJIj6VosnGdh5MPpaoyIQ)

---

## 1. 개요

| 항목 | 내용 |
|---|---|
| 목적 | HERMES_PRADA 어드민 디자인을 Woody 디자인 시스템 구조·스타일로 정리 |
| 스타일 기준 | [Woody 디자인 시스템](https://www.figma.com/design/r0cypsL8ZyTrecrPlrNgD2) (페이지 구조, 명명 규칙, 문서 레이아웃) |
| 원본 디자인 | [HERMES_PRADA](https://www.figma.com/design/8kZcif2uWXsdEZ75np8URX) `260115 v0.0.6 PRADA` 페이지 (45개 화면) |
| 타이포 교차 검증 | GUARD-UI · BULDAK-UI · BATTTERY-UI · HERMES_PRADA (텍스트 약 32,000개) |
| 원칙 | 원본 디자인은 수정하지 않음. 모든 색·텍스트·간격·반경·그림자는 파운데이션(Variable/Style)에 연결 |

---

## 2. 파일 구조

Woody와 동일한 번호별 컴포넌트 그룹 구조로 구성했습니다.

```
Thumbnail
———— Foundation ————
 ┗ Color
 ┗ Typography
 ┗ Spacing , Radius   (Effect 포함)
 ┗ Logo
————  Component  ————
①  Input         ┗⭐ Text Field / Select / Search Field / Check Box / Textarea
                 ┗ Menu (selection)
                 ┗ Date Picker
②  Data Display  ┗ Table
                 ┗ Tag / Badge
                 ┗ Metric Card
③  Actions       ┗ Button ⭐
                 ┗ Icon
④  Navigation    ┗ Side Navigation / Header
                 ┗ Tab
                 ┗ Pagination
                 ┗ Accordion
⑤  Feedback      ┗ Alert
                 ┗ Modal / Drawer
                 ┗ Tooltip
⑥  Pattern       ┗ Empty State / Page Header / Top Button
```

- 각 컴포넌트 페이지: 제목(32px Bold) + 설명 + 컴포넌트 영역(회색 섹션 배경) + 실제 사용 예시(인스턴스 조합)
- 원본에 없어 새로 추가한 상태(Hover·Focus·Error·Disabled 등)는 각 페이지 설명과 컴포넌트 description에 **"제안 상태"** 로 표기

---

## 3. Foundation

### 3.1 Color

**Variable 컬렉션**

| 컬렉션 | 모드 | 개수 | 내용 |
|---|---|---|---|
| Theme (Primitive) | Light | 36 | Gray 90–5 · White, Cool Gray, Navy, Blue, Red, Green, Purple, Overlay(Dim · Selected · Navy Text 50 · Shadow) |
| Semantic | Light | 41 | 용도별 토큰. 모두 Theme 변수를 alias로 참조 |

- 모든 컬러는 **Paint Style(76개) + Variable** 로 제공되며, Style은 Variable에 바인딩되어 있어 값 변경 시 함께 반영됩니다.
- 모든 변수에 코드 이름(WEB) 설정: 예) `var(--color-text-primary)`, `var(--color-gray-70)`
- 원본에서 실제 사용된 색만 추출(원본에 없는 단계는 만들지 않음). `#FF0000`, `#00FFFF`(기획 주석선) 및 5회 이하 근사색은 제외.

**Primitive 주요 값**

| 그룹 | 대표 값 |
|---|---|
| Navy | 90 `#0B192F` · 80 `#0D1D35` · 70 `#192940` · **60 `#1B2A41` (브랜드)** · 50 `#2D3F5C` · 40 `#32558D` · 5 `#EDF0F5` |
| Gray | 90 `#111111` · 80 `#2D2D2D` · **70 `#333333`** · 60 `#555555` · 50 `#9E9E9E` · 40 `#DDDDDD` · 30 `#E4E4E4` · 20 `#EEEEEE` · 10 `#F5F5F5` · 5 `#F8F8F8` · White |
| Cool Gray | 70 `#33363D` · 30 `#C8CACE` · 20 `#CACDD8` |
| Blue / Red / Green / Purple | Blue 50 `#3B82F6` · Red 60 `#F10909` / 50 `#FF3E26` · Green 80–40 · Purple 60/50/30 |

**Semantic 토큰 (41)**

| 분류 | 토큰 |
|---|---|
| Text | Primary · Secondary · Tertiary · Inverse · Brand · Link · Error · Success · Disabled · Subtle |
| Background | Default · Subtle · Surface · Brand · Brand Hover · Navigation(Navy 60) · Selected · Dim · Hover · Disabled · Neutral · Tooltip |
| Border | Default · Input · Input Subtle · Strong · Focus · Error · Brand · Brand Hover · Emphasis |
| Icon | Default · Disabled · Inverse · Subtle |
| Status | Info · Success · Error · Highlight · Positive · Neutral |

### 3.2 Typography

**최종 규칙**
- 폰트: **Pretendard**, 자간 **-2%** (전 스타일 동일)
- 명명: Woody 방식 `분류/굵기` (예: `Label 2/Regular`)
- 행간은 **같은 명칭(분류) 안에서 하나로 통일**
  - 원본(PRADA)에서 고정값(150% 등)으로 쓰인 스타일 → 원본 값
  - 원본에서 Auto로 쓰인 스타일 → 정수 px 규칙 (Heading 1 30px · Label 20px · Caption 1 16px)
  - 분류 안에서 값이 다르면 다수 값, 동수면 큰 값으로 통일 · **Caption 3만 예외로 130%**
- 24px(Title)는 제거 (4개 프로덕트 모두 팝업 4개 화면의 현황 수치에만 쓰였고, 같은 요소가 목록 화면에서는 22px → 원본의 불일치로 판단)

**Text Style (25개)**

| 명칭 | 크기 | 행간 | 굵기 |
|---|---|---|---|
| Heading 1 | 22px | 136.4% (30px) | SemiBold |
| Heading 2 | 20px | 150% (30px) | SemiBold · Regular |
| Heading 3 | 18px | 150% (27px) | SemiBold · Medium |
| Body 1 | 16px | 150% (24px) | SemiBold · Medium · Regular |
| Body 2 | 15px | 150% (22.5px) | SemiBold · Regular |
| Label 1 | 14px | 142.9% (20px) | SemiBold · Regular |
| Label 2 | 13px | 153.8% (20px) | Bold · SemiBold · Medium · Regular |
| Caption 1 | 12px | 133.3% (16px) | SemiBold · Medium · Regular |
| Caption 2 | 11px | 150% (16.5px) | SemiBold · Medium · Regular |
| Caption 3 | 10px | 130% (13px) | Medium · Regular |
| Caption 4 | 8px | 100% (8px) | Medium |

- 각 스타일 description에 행간 px, 근거(원본 사용 횟수), 용도 기록
- 컴포넌트·인스턴스 텍스트 328개 모두 위 25개 스타일에 연결 (미연결 0, 로컬 오버라이드 0)
- 스케일 외 폰트 크기는 문서용 제목에만 사용 (32px 페이지 제목, 64px 썸네일/샘플, 26px 썸네일 뱃지)

**4개 프로덕트 분석 요약**

| 항목 | 결과 |
|---|---|
| 폰트 | Pretendard 97% (Noto Sans KR 196개, Inter 12–24개는 예외) |
| 크기 스케일 | 22 · 20 · 18 · 16 · 15 · 14 · 13 · 12 · 11 · 10 · 8 — 4개 파일 동일 (24는 제거) |
| 자간 | -2% 절대 다수. 예외(0%, -1%, -0.24px)는 약 1% |
| 행간 | 같은 크기에서도 Auto / 100% / 140% / 150% 혼재 → 이번 규칙으로 정리 |

### 3.3 Spacing · Radius

| 컬렉션 | 값 | 스코프 |
|---|---|---|
| Spacing (13) | 0 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · **30** · 32 · 40 | GAP |
| Radius (6) | None 0 · XS 4 · S 6 · M 8 · L 10 · Full 100 | CORNER_RADIUS |

- `Spacing/30`: Action Button 좌우 패딩(원본 30px)을 위해 추가
- Spacing 문서의 시각용 막대(bar)는 실제 크기와 달라 삭제 → 변수에 연결된 demo만 유지

### 3.4 Effect (Shadow)

| Style | 값 | 용도 |
|---|---|---|
| Shadow/Action Button | 0 3px 4px 30% (색: `Overlay/Shadow` 변수) | 로그인 버튼, 세그먼트 선택 |
| Shadow/Card | 0 2px 5px 5% | 헤더, Metric Card, Top 버튼 |
| Shadow/Navigation | 0 0 5px 10% | 사이드 네비게이션 |
| Shadow/Dropdown | 0 4px 8px 8% + 0 0 2px 5% | User Menu |
| Shadow/Alert | 0 4px 20px 10% | Alert(토스트) |
| Shadow/Modal | 0 0 20px 15% | Modal, Drawer |
| Shadow/Tooltip | 0 1px 4px 40% | Tooltip |

### 3.5 Logo

- `Logo/PRADA` (66×14, 원본 벡터): Color=Navy(`Text/Brand`) · White(`Text/Inverse`)

---

## 4. Components

### ① Input

| 컴포넌트 | 변형 | 주요 사양 |
|---|---|---|
| Text Field | Style(Default/Login) × Status(Normal/Focus/Error/Disabled) × Active = 16 | 높이 40. Default: Radius None, Border/Input, 패딩 16 · Login: 너비 240, Radius/XS, Border/Input Subtle, 패딩 12. Label·Required·Description·아이콘 속성 |
| Textarea | Status × Active = 8 | 필드 높이 80, 패딩 10/16 |
| Select | Status(Normal/Focus/Disabled) × Active = 6 | 140×40, Caret Down 아이콘 |
| Search Field | 1 | Text Field + Icon Button 조합 (중첩 인스턴스 노출) |
| Check Box | State × Status × Size(Large/Small) = 8 | 16×16. Large: 목록 선택(Body 2), Small: 로그인 옵션(Caption 1) |
| Menu Item / Menu | State(Default/Hover/Selected/Disabled) | 셀렉트 열림 목록, 항목 높이 40 |
| User Menu | 1 | 헤더 사용자 드롭다운, Radius/M, Border/Emphasis, Shadow/Dropdown |
| Calendar Day / Date Picker | State(Weekday/Default/Hover/Selected/Outside) | 셀 37×37, 7열 × 5주 |

### ② Data Display

| 컴포넌트 | 변형 | 주요 사양 |
|---|---|---|
| Table Header Cell | Type(Text/Filter/Sort/Checkbox) | 높이 34, Background/Neutral, Caption 1 |
| Table Cell | Type(Text/Link/Badge/Checkbox/Icon) | 높이 54, 우·하단 보더, 링크는 1줄 말줄임 |
| Tag | Type(Outline/Filled/Selected) + Close 속성 | 높이 32, Radius/Full |
| Status Badge | Status(OK/ERROR/WAIT) | 점 + Caption 1/SemiBold |
| Metric Item / Metric Card | State(Default/Highlight) | 수치 Heading 1, 라벨 Label 1, 구분선 |

### ③ Actions

| 컴포넌트 | 변형 | 주요 사양 |
|---|---|---|
| Button | Type(Primary/Secondary) × Size(Large 40/Medium 34) × Status = 12 | Radius None, 패딩 16, Label 2. Text·좌우 아이콘 속성 |
| Icon Button | Type × Status = 6 | 40×40 |
| Action Button | Type × Status = 6 | 어드민 로그인 버튼. 34 높이, Fill 너비(240), **Radius/XS · Label 2/Bold · Shadow/Action Button**, 패딩 Spacing/30 |
| Icon | 26종 | UI(20) · Navigation(20) · Chevron(16) · Small(12) · Status/Empty(24). 모두 원본 벡터, 색은 Icon 토큰 |

### ④ Navigation

| 컴포넌트 | 주요 사양 |
|---|---|
| Nav Item / Side Navigation | 너비 180, Background/Navigation, 메뉴 40px, Body 2/SemiBold. Active=Text/Inverse |
| Header | 높이 52, 로고 + 사용자명 + Chevron |
| Tab Item / Tab Bar | 높이 60, Body 1, 선택 시 하단 2px Border/Emphasis |
| Segmented Item / Control | 110×34, Radius/S, 선택 항목 Navy + Shadow/Action Button |
| Pagination Item / Arrow / Pagination | 36×36, 현재 페이지 Background/Brand, « ‹ › » 화살표 |
| Accordion Item | Collapsed/Expanded, FAQ Q/A (질문 행 55, 답변 영역 Background/Neutral) |

### ⑤ Feedback

| 컴포넌트 | 주요 사양 |
|---|---|
| Alert | Success/Error, 400×56, Radius/M, Shadow/Alert |
| Modal | 너비 360, 패딩 40, Radius/L, 버튼 2개(노출된 중첩 인스턴스) |
| Drawer | 너비 328, 패딩·간격 24, 타이틀 + 폼 + 버튼. 배경 Background/Dim |
| Tooltip | Background/Tooltip, Radius/XS, Caption 1 |

### ⑥ Pattern

| 컴포넌트 | 주요 사양 |
|---|---|
| Empty State | Icon/Folder X + Body 1 메시지 |
| Page Header | Heading 1 제목 + Label 2 설명 |
| Breadcrumb | Caption 1, 간격 Spacing/20 |
| Top Button | 52×52, Radius/Full, Shadow/Card |

---

## 5. 원본 대비 검증

### 5.1 컴포넌트 높이 (원본과 비교)

| 컴포넌트 | 원본 | 디자인 시스템 |
|---|---|---|
| Tooltip | 26 | 26 ✓ |
| Page Header | 54 | 54 ✓ |
| Drawer 타이틀 행 | 34 | 34 ✓ |
| FAQ 접힘 / 펼침(2줄) | 55 / 135 | 55 / 135 ✓ |
| Metric Card | 142 | 142 ✓ |
| 사이드 메뉴 섹션 / 메뉴 | 40 / 40 | 40 / 40 ✓ |
| User Menu (박스 / 프로필) | 144 (133 / 49) | 144 (133 / 49) ✓ |
| Alert | 56 | 56 ✓ |
| Button · Tab · Pagination · Segmented · Menu Item | 고정 높이 | 동일 ✓ |

- 파운데이션 연결 감사: 컴포넌트 전체 fill·stroke·text·effect 미연결 0건
- Figma 스트로크가 레이아웃 높이에 포함되던 설정(`strokesIncludedInLayout`)은 모두 해제해 원본과 동일하게 맞춤

### 5.2 HTML 재현 테스트 (FAQ-펼침 화면)

- 디자인 시스템 토큰(CSS 변수)과 Woody식 타이포로 [prada-faq.html](prada-faq.html) 작성
- 텍스트 세로 중심 위치 비교: 메뉴·제목·목록 시작점 오차 0~0.5px, 목록 하단 최대 ±2px (여러 줄 답변의 행간 차이)
- 비교 이미지: [faq-compare-side.png](faq-compare-side.png), [faq-compare-overlay.png](faq-compare-overlay.png)

---

## 6. 원본 높이 유지를 위해 스케일 외 값으로 넣은 패딩

| 위치 | 값 |
|---|---|
| Tooltip 상하 패딩 | 5 |
| FAQ 질문 행 상하 | 17.5 |
| FAQ 답변 행 상 / 하 | 19.5 / 20.5 |
| Metric Card 상 / 하 | 21.5 / 30.5 |
| 사이드 메뉴 섹션 상 / 하 | 18.5 / 4.5 |
| User Menu 프로필 하단 | 7.5 |
| Segmented Control 상하 | 3 |
| FAQ 질문·답변 좌우 | 14 |

> 가까운 Spacing 변수로 바꾸면 1px 이내 차이가 생깁니다. 정리 여부는 추후 결정.

---

## 7. 남은 이슈 · 후속 과제

| 구분 | 내용 | 상태 |
|---|---|---|
| 색상 | `Icon/Default`가 `#555555`(Gray 60)로 연결되어 있으나 원본 아이콘은 `#333333`(Gray 70) | 결정 필요 |
| 원본 디자인 | 팝업 4개 화면의 현황 수치 24px → Heading 1(22px)로 통일 필요 | 원본 수정 시 반영 |
| 원본 디자인 | Noto Sans KR(196개)·Inter 텍스트 → Pretendard 통일 필요 | 원본 수정 시 반영 |
| 원본 디자인 | 자간 예외(Tag·달력 0%, Segmented -0.24px, User Menu -1%) → 디자인 시스템은 -2%로 통일 (Tag 폭 약 1px 차이) | 참고 |
| 문서 | 문서용 텍스트 약 254개는 스타일 미연결(페이지 제목 32px, 스와치 라벨 등) | 선택 사항 |
| 컴포넌트 | 제안 상태(Hover·Focus·Error·Disabled 등)는 원본에 없음 → 기획/디자인 확인 필요 | 확인 필요 |
| 컴포넌트 | Date Picker 월 이동 헤더, Pagination의 "Go to page" 입력은 원본에 없어 미포함 | 참고 |
| 원본 불일치 | 사이드 메뉴의 정산로그·일별마감이 같은 코인 아이콘 사용 (원본 그대로) | 참고 |

---

## 8. 작업 이력

1. Color · Typography 파운데이션 구성 (Woody 스타일)
2. 컬러 Paint Style + Variable 연결, Semantic 토큰, Thumbnail 제작
3. Spacing · Radius 변수, 코드 이름 설정, Icon · Button · Input · Tag/Badge · Pagination 컴포넌트 제작
4. Action Button(어드민 로그인) 추가 — Woody Action Button 가이드 형식
5. `Spacing/30` 추가, Text Field에 `Style=Login` 변형 추가
6. 번호별 컴포넌트 구조로 재편 및 누락 컴포넌트 추가 (Menu, Date Picker, Table, Metric Card, Side Navigation/Header, Tab, Accordion, Alert, Modal/Drawer, Tooltip, Pattern, Logo, 아이콘 22종)
7. 원본 텍스트 분석 → 행간·자간 사용처별 정리 → px 값 % 변환
8. FAQ 화면 HTML 재현 테스트 및 원본 대비 검증
9. 4개 프로덕트 교차 분석 → Woody식 타이포(`분류/굵기`)로 통합 (55 → 27개)
10. 명칭 정리 (Title / Heading 1–3 / Caption 1–4)
11. 행간을 원본 기준으로 재적용 후 분류 내 통일, 24px(Title) 제거 (→ 25개)
12. Spacing 문서 bar 삭제, 문서 제목 32px Bold 통일
