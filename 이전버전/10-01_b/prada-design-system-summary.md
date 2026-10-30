# Prada 디자인 시스템 작업 정리

> 최초 작성: 2026-10-01 · 최종 업데이트: 2026-10-01 (작업 파일 이전 · 텍스트 체크리스트 완료)
> 작업 파일: [Prada 디자인 시스템_정리중 (Figma)](https://www.figma.com/design/YWIcLzEgoznhSYcKGOrSVz)
> 이전(원본) 파일: [HERMES_PRADA (Figma)](https://www.figma.com/design/8kZcif2uWXsdEZ75np8URX)

**관련 문서**
- [prada-state-spec.md](prada-state-spec.md) — 실서비스 녹화 상태값 측정 · 누락 컴포넌트 · 프로덕트 3종 비교표
- [prada-manual-text-checklist.md](prada-manual-text-checklist.md) — Figma에 직접 입력할 텍스트 체크리스트 (노드 링크 포함)

---

## 1. 개요

| 항목 | 내용 |
|---|---|
| 목적 | HERMES_PRADA 어드민 디자인을 Woody 디자인 시스템 구조·스타일로 정리 |
| 스타일 기준 | [Woody 디자인 시스템](https://www.figma.com/design/r0cypsL8ZyTrecrPlrNgD2) (페이지 구조, 명명 규칙, 문서 레이아웃) — 현재 계정은 접근 권한 없음 |
| 원본 디자인 | [HERMES_PRADA](https://www.figma.com/design/8kZcif2uWXsdEZ75np8URX) `260115 v0.0.6 PRADA` 페이지 |
| 실서비스 | prada-pang.com 화면 녹화 (2026-09-30, 약 3분 53초) |
| 교차 검증 | [BATTTERY-UI](https://www.figma.com/design/KhkpCDN4wnxCSxV4S38z6i) · [BULDAK-UI](https://www.figma.com/design/jRINjgFg7DX6xK1RCyJXpn) · [GUARD-UI](https://www.figma.com/design/hNxUO4xEkSLesM5RcSaAHx) (같은 어드민 템플릿, 2026-10-01 새 링크) |
| 원칙 | 원본 디자인은 수정하지 않음. 모든 색·텍스트·간격·반경·그림자는 파운데이션(Variable/Style)에 연결 |
| 상태 표기 | 원본에 없는 상태는 **"제안 상태"**, 실서비스·프로덕트로 확인된 상태는 **"실서비스 확인"** 으로 컴포넌트 description에 기록 |

---

## 2. 파일 구조

```
Thumbnail
———— Foundation ————
 ┗ Color
 ┗ Typography
 ┗ Spacing , Radius   (Effect 포함)
 ┗ Logo, Favicon
                 ┗ Mobile · Responsive 🆕
————  Component  ————
①  Input         ┗⭐ Text Field / Select / Search Field / Check Box / Textarea / Date Field🆕
                 ┗ Menu (selection)
                 ┗ Date Picker
②  Data Display  ┗ Table
                 ┗ Tag / Badge  (Role Badge🆕 · Type Badge🆕)
                 ┗ Metric Card
                 ┗ Chart 🆕  (Chart · Chart Marker · Chart Legend Box · Chart Guide Line · Chart Tooltip · Chart Card)
③  Actions       ┗ Button ⭐  (Table Icon Button🆕)
                 ┗ Icon
④  Navigation    ┗ Side Navigation / Header
                 ┗ Tab
                 ┗ Pagination  (Go To🆕)
                 ┗ Accordion
⑤  Feedback      ┗ Alert
                 ┗ Modal / Drawer  (Dialog🆕)
                 ┗ Tooltip
⑥  Pattern       ┗ Empty State / Page Header / Top Button
```

---

## 3. Foundation

### 3.1 Color

| 컬렉션 | 레벨 | 개수 | 내용 |
|---|---|---|---|
| Primitive (구 Theme) = 전역(Global) 토큰 | Primitive · 비공개 · scope 없음 | **81** (+39 스케일 보간) | Gray 90–5 · White, Cool Gray, Navy, Blue, Red, Green, Purple, Overlay (Dim · Selected · Navy Text 50 · **Black 5/8/10/15/30/40**) |
| Number 🆕 | Primitive · 비공개 · scope 없음 | 14 | 0 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 30 · 32 · 40 · 100 |
| Semantic | Semantic | **57** (+11) | 용도별 토큰, 모두 Primitive alias |

**KRDS 토큰 레벨 정리 (2026-10-01)** — Primitive → Semantic → (Component는 코드) 체인. 값·화면은 변경 없음.
- Primitive 컬렉션은 라이브러리 비공개 + scope 비움 → 디자이너가 레이어에 직접 적용할 수 없음
- ~~Primitive Paint Style `_Primitive/` 비공개~~ → **Woody 방식으로 변경 (2026-10-01)**: Paint Style은 실제 디자인에 쓰인 단계만 공개 스타일로 둠 (`Gray/Gray 70` 형식 35개). 원본 PRADA 화면에서 35단계 모두 사용 확인
- **전역 스케일**: Gray·Cool Gray·Navy·Blue·Red·Green·Purple 각 90→5 10단계. 없던 39단계는 기존 값 사이를 OKLab 보간(밝은 끝 흰색, 어두운 끝 L 0.17)으로 생성, 기존 값은 변경 없음. 보간 단계는 변수 전용(스타일 없음), description에 표기
- Spacing · Radius 20개는 raw 숫자 → `Number/*` alias (연결된 767곳은 그대로)
- Effect Style 7개 그림자 색: hex 고정 · Primitive 직접 연결 → Semantic `Shadow/*` 연결
- 문서 프레임(19개 페이지)의 `White`·`Gray 90`·`Gray 10/20`·`Purple 60/30` → `Background/Default`·`Text/Strong`·`Background/Surface`·`Background/Neutral`·`Annotation/*`
- 예외: Color 페이지 팔레트 견본(35)과 Thumbnail은 Primitive를 보여 주는 문서라 유지
- 명도 대비는 검사하지 않고 기존 값 유지 (사용자 결정)

| 신규 Semantic | 참조 |
|---|---|
| `Text/Strong` | Gray 90 (문서 제목) |
| `Annotation/Strong` · `Annotation/Subtle` | Purple 60 · Purple 30 (스펙 표기) |
| `Shadow/Action Button` · `Card` · `Navigation` · `Dropdown Key` · `Dropdown Ambient` · `Alert` · `Modal` · `Tooltip` | Overlay/Black 30 · 5 · 10 · 8 · 5 · 10 · 15 · 40 |

**이번에 추가·변경한 Semantic 토큰**

| 토큰 | 값 | 내용 |
|---|---|---|
| `Border/Button` 🆕 | Cool Gray 30 `#C8CACE` | Secondary 버튼·아이콘 버튼·Top Button 기본 보더 (버튼이 `Border/Input`을 쓰던 명명 규칙 위반 수정) |
| `Icon/Hover` 🆕 | Navy 40 `#32558D` | 아이콘 버튼 Hover (프로덕트 Icon 가이드) |
| `Icon/Pressed` 🆕 | Navy 80 `#0D1D35` | 아이콘 버튼 Pressed / 필터 적용 |
| `Background/Input Disabled` 🆕 | Gray 10 `#F5F5F5` | 인풋 비활성·읽기전용 |
| `Background/Cell Hover` 🆕 | Gray 30 `#E4E4E4` | 테이블 셀 Hover |
| `Icon/Default` ✏️ | Gray 60 → **Gray 70 `#333333`** | 원본 흰 배경 아이콘 960건이 #333333 |
| `Border/Input` ✏️ | (값 동일) | 설명을 "인풋·셀렉트·텍스트영역 보더"로 한정 |
| `Border/Strong` ✏️ | Gray 50 | Secondary 버튼 Hover 보더로 사용 (실서비스 확인) |
| `Background/Hover` ✏️ | Gray 5 | Secondary 버튼 Hover + 테이블 행 Hover (실서비스 확인) |
| `Text/Link·Success·Error·Primary` ✏️ | (값 동일) | 권한·구분 텍스트 뱃지 색 규칙 설명 추가 |

**명명 규칙**: Semantic 토큰은 `분류/쓰이는 곳` (예: `Border/Input` = 인풋, `Border/Brand` = Primary 버튼, `Border/Button` = Secondary 버튼). 다른 요소의 토큰을 빌려 쓰지 않음.

**프로덕트 3종 색 검증**: BULDAK·BATTTERY·GUARD에서 쓰인 색은 모두 팔레트 안 (예외: `#999999`·`#D9D9D9`·`#767676` 소수).

> 신규 토큰은 Variable만 있고 Paint Style은 없음 (Paint Style 76개 중 Primitive 35개는 `_Primitive/` 비공개).

### 3.2 Typography

- 폰트 **Pretendard**, 자간 **-2%**, 명명 `분류/굵기` (Woody 방식)
- Text Style **26개** (Title · Heading 1–3 · Body 1–2 · Body 3–2 · Label 2–4), 행간은 분류 안에서 통일 (Caption 3만 130%)
- 24px `Title/SemiBold` 복원 (2026-10-01) — 캠페인 섹션 제목·공지 View 제목·팝업 현황 수치에 실제 사용

| 명칭 | 크기 | 행간 | 굵기 |
|---|---|---|---|
| Title 🆕 | 24px | 150% (36px) | SemiBold |
| Heading 1 | 22px | 136.4% (30px) | SemiBold |
| Heading 2 | 20px | 150% (30px) | SemiBold · Regular |
| Heading 3 | 18px | 150% (27px) | SemiBold · Medium |
| Body 1 | 16px | 150% (24px) | SemiBold · Medium · Regular |
| Body 2 | 15px | 150% (22.5px) | SemiBold · Regular |
| Body 3 | 14px | 142.9% (20px) | SemiBold · Regular |
| Label 1 | 13px | 153.8% (20px) | Bold · SemiBold · Medium · Regular |
| Label 2 | 12px | 133.3% (16px) | SemiBold · Medium · Regular |
| Caption 1 | 11px | 150% (16.5px) | SemiBold · Medium · Regular |
| Caption 2 | 10px | 130% (13px) | Medium · Regular |
| Caption 3 | 8px | 100% (8px) | Medium |

### 3.3 Spacing · Radius

| 컬렉션 (→ Number alias) | 값 |
|---|---|
| Spacing (13) | 0 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 30 · 32 · 40 |
| Radius (**7**) | None 0 · XS 4 · S 6 · M 8 · L 10 · **XL 12** 🆕 · Full 100 |

- `Radius/XL` 12: 2줄 Alert(Layout=Detail) — 프로덕트 alert_notice 400×85
- 프로덕트의 Radius 5(244~288건)는 채움·보더 없는 투명 프레임이라 규칙에서 제외

### 3.4 Effect

Shadow/Action Button · Card · Navigation · Dropdown · Alert · Modal · Tooltip (7개, 값 변경 없음 · 색은 Semantic `Shadow/*`에 연결)

### 3.5 Logo, Favicon

| 컴포넌트 | 속성 | 토큰 |
|---|---|---|
| `Logo/PRADA` | Color(Navy/White) | 워드마크 `Text/Brand` · `Text/Inverse` |
| `Favicon/PRADA` 🆕 | Size(180x180/96x96/32x32/16x16) — Apple Touch · 데스크탑 · 작업표시줄 · 브라우저 탭 | 배경 `Background/Brand` · 심볼 `Text/Inverse` |

- Favicon 모서리 반경(30·16·5.3·2.7)은 크기 비례 아이콘 원본 값이라 Radius 토큰 예외 (description에 기록)
- 크기 라벨(180px 등)은 외부 라이브러리 `_Component Annotation` 인스턴스 — 문서용

---

## 4. Components (이번 변경분 중심)

### ① Input
| 컴포넌트 | 변경 |
|---|---|
| Text Field · Textarea · Select | **Disabled = 읽기전용 스타일**로 변경: `Background/Input Disabled` + `Border/Default` + `Text/Primary` (프로덕트 Input 가이드 + 실서비스 Read-only) |
| **Date Field** 🆕 | Status(Normal/Focus/Disabled). Text Field + `Icon/Calendar`. 140×40, 값 예시 `2025-07-10` |

### ② Data Display
| 컴포넌트 | 변경 |
|---|---|
| Table Cell | **State(Default/Row Hover/Cell Hover)** 추가 → 15개 변형 (실서비스 측정: 행 #F9F9F9, 셀 #E6E6E6) |
| **Role Badge** 🆕 | 총판사(Red)·관리자(Primary)·대행사(Blue)·광고주(Green), Label 1/SemiBold |
| **Type Badge** 🆕 | 신규·신규정보(Green)·연장·정보수정(Blue)·환불(Red) |

### ③ Actions
| 컴포넌트 | 변경 |
|---|---|
| Button / Icon Button / Action Button (Secondary) | 기본 보더 `Border/Button`, **Hover = `Border/Strong` + `Background/Hover`**, **Disabled = 흰 배경 + `Border/Default` + `Text/Disabled`** (실서비스 확인) |
| ~~Period Button~~ | 삭제 (2026-10-01) — 기본 Button과 Selected 그림자 외 차이가 없어 Button으로 대체. 그림자 규칙은 Button 설명에 유지 (Primary + Shadow/Action Button) |
| **Table Icon Button** 🆕 | State(Default/Hover/Pressed) = Icon/Default → Icon/Hover → Icon/Pressed, Icon 스왑 |
| Icon | **31종** (+5): `History` · `Copy Plus` · `Document Download` · `Calendar` · `Arrow Down` (프로덕트 원본 벡터) |

### ④ Navigation
| 컴포넌트 | 변경 |
|---|---|
| ~~Pagination Ellipsis~~ | 삭제 (2026-10-01) — Woody 방식으로 Pagination Item Number="..." 사용 |
| **Pagination Go To** 🆕 | `Go to page` 라벨 + 50×40 입력 |

### ⑤ Feedback
| 컴포넌트 | 변경 |
|---|---|
| Alert | **Layout(Slim/Detail)** 추가. Detail = 제목(Label 1/SemiBold, Error는 Text/Error) + 본문(32 들여쓰기), Radius/XL, Title 속성 |
| **Dialog** 🆕 | 980 큰 팝업, 패딩 40, Radius/L, Shadow/Modal, 제목 + 닫기 X(24) + Slot + 닫기/확인(Confirm Button 속성). Modal 페이지 프레임 1180으로 확장 |

### ⑥ Pattern
| 컴포넌트 | 변경 |
|---|---|
| Top Button | **Direction(Up/Down)** 세트로 변경, 보더 `Border/Button` |

---

## 5. 원본 대비 검증 (기존)

- 컴포넌트 높이 원본과 일치 (Tooltip 26 · Page Header 54 · FAQ 55/135 · Metric Card 142 · Alert 56 등)
- 파운데이션 연결 감사: fill·stroke·text·effect 미연결 0건 (기존 컴포넌트 기준)
- FAQ 화면 HTML 재현 테스트: 텍스트 위치 오차 0~0.5px (목록 하단 ±2px)

---

## 5-0. 프로덕트 3종 화면 구성요소 커버리지 (2026-10-01, Logo·Favicon 제외)

BATTTERY·BULDAK·GUARD의 Design 페이지(데스크톱 + 모바일 섹션)에서 화면에 쓰인 인스턴스 전체와 색·글자·Radius·그림자 값을 추출해 DS와 대조. 세 파일은 같은 원격 라이브러리를 쓰며 BULDAK = BATTTERY, GUARD는 수정관리_랜딩URL 화면이 추가됨.

| 프로덕트 컴포넌트 (원격명) | DS 컴포넌트 | 상태 |
|---|---|---|
| Component 11 (check on/off) | Check Box | ✅ |
| Component 13 (ERROR/OK/WAIT) | Status Badge | ✅ |
| Frame 1707482445 (40h 보조 버튼) · Frame 1707482444 (40h 주 버튼) | Button Secondary/Primary | ✅ |
| Frame 1000001672 (헤더 텍스트 + 정렬) | Table Header Cell | ✅ |
| sort (총판사/관리자/대행사/광고주) · property (신규/연장/환불) | Role Badge · Type Badge | ✅ |
| scrolling | Top Button | ✅ |
| Alert (Slim) · alert_notice 85h | Alert Layout Slim/Detail | ✅ |
| header 1920 · 마스터/총판·대행사/광고주 메뉴 | Header Device=Desktop · Side Navigation | ✅ |
| header 360 + icon/menu | **Header Device=Mobile** 🆕 | ✅ 추가 |
| Menu_open (모바일 메뉴 패널) | **Mobile Menu · Mobile Nav Item** 🆕 | ✅ 추가 |
| 아이콘 settings-cog · copy-plus · reload-time · document-download · calendar · close · system-danger · myinfo · document · popover_help · analytics · time · filter · coin · arrow-right | Icon 기존 | ✅ |
| icon/trophy · icon/veiw_all · icon/copy · icon/menu | **Icon/Trophy · View All · Copy · Menu** 🆕 | ✅ 추가 |
| Tag Size=Medium(20h) · input_message · 사용시간 설정 캘린더 · [관리자]광고목록 랜딩(30/42px, #84CC16) | — | PRADA 원본에 없음 → 제외 |

| 파운데이션 | 결과 |
|---|---|
| 색 | 프로덕트 색 모두 팔레트 안 (예외: #999999·#666666·#232323 소수, 랜딩 #84CC16, 틴트 @4/@5) |
| 그림자 | **DS 값 오류 수정**: Shadow/Navigation 0,0→**4,0** r5 10%, Shadow/Tooltip 0,1→**1,1** r4 40%, Shadow/Alert 색 #000→**#333333** 10% (Primitive `Overlay/Gray 70 10` 🆕) |
| 타이포 | **24px 복원**: `Title/SemiBold` 24/150% 🆕 — 캠페인 섹션 제목·공지 View 제목·팝업 현황 수치에서 사용 (이전의 "팝업 수치에만 사용" 판단 정정). Noto Sans KR·Inter는 원본 불일치로 제외 |
| Radius | 프로덕트 값 모두 스케일 안 (1.7/0.8/11/70은 아이콘 내부, 16/30은 파비콘) |
| 신규 Semantic | `Icon/Brand` → Navy 60 (모바일 헤더 메뉴 아이콘) |

## 5-2. Figma 코멘트 반영 (2026-10-01, 작성자 최화정)

| # | 위치 | 코멘트 | 반영 |
|---|---|---|---|
| 1 | Menu | 확장 시 border값 추가 | `Menu` 보더(Border/Input)를 OUTSIDE로 바꿔 Menu Item 배경에 가려지지 않게 함 + Select open 예시 클리핑 해제 |
| 2 | Calendar Day | weekday, default, hover 상태 합칠 방법 찾기 / weekday 삭제 | `Weekday` 변형 삭제(Default와 시각적으로 동일) → Date Picker 요일 머리글 7칸은 일반 레이어로 분리. Default→Hover는 인터랙티브 컴포넌트(While hovering → Change to Hover)로 연결해 Default만 배치하면 됨 |
| 3 | Table Header Cell | 텍스트 가운데, 아이콘 오른쪽 정렬 | Filter·Sort 변형의 아이콘을 Absolute + 오른쪽 고정(패딩 12), 텍스트는 셀 가운데 |
| 4 | Icon | 아이콘 disabled, hover 규칙 추가 | Icon 페이지에 `State 규칙` 섹션 추가 — Default/Hover/Pressed/Disabled/Subtle/Inverse/Brand 토큰과 적용 규칙 |
| 5 | Pagination Arrow | 아이콘과 동일하면 icon 메인의 인스턴스로 | 확인 결과 이미 Icon 페이지 메인(Chevrons Left·Chevron Left/Right·Chevrons Right) 인스턴스 사용 → description에 명시 |
| 6·7 | Pagination Item 옆 Ellipsis · Example | 가운데 정렬 | `…` 글자(기준선에 붙어 아래로 치우침)를 점 3개(3×3, Spacing/2, Icon/Subtle) 가운데 정렬로 교체. Pagination 조합의 "…" Pagination Item도 Ellipsis 인스턴스로 교체 → Example 자동 반영 |
| 8 | Check Box | status를 boolean 토글로 | `Status(Default/Disabled)` → `Disabled(False/True)` — 값이 True/False인 변형 속성이라 인스턴스 패널에 토글로 표시. 기존 인스턴스 11개 연결 유지 |

> 코멘트 스레드 자체(답글·해결 처리)는 건드리지 않음.

## 5-1. 컴포넌트 토큰 적용 감사 (KRDS 규칙, 2026-10-01)

17개 페이지 · 컴포넌트 189개 (변형 포함) · 레이어 555개 검사. 중첩 인스턴스 내부는 원본 컴포넌트에서 검사.

| 항목 | 기준 | 결과 |
|---|---|---|
| 색 (fill · stroke) | Semantic 변수 연결, hex·Primitive 직접 사용 없음 | ✅ 위반 0 |
| 텍스트 | Text Style 적용 | ✅ 위반 0 |
| 그림자 | Effect Style 적용 (색은 `Shadow/*` Semantic) | ✅ 위반 0 |
| Radius | Radius 변수 연결 | ✅ 위반 0 |
| 간격 (gap · padding) | Spacing 변수 연결 | ⚠️ 28곳 예외 (아래 6번) · User Menu `paddingRight 24` 연결 누락 1곳 → 수정 |

예외(Color 페이지 팔레트 견본, Thumbnail)는 Primitive를 보여 주는 문서라 직접 연결 유지.

## 6. 원본 높이 유지를 위해 스케일 외 값으로 넣은 패딩

Tooltip 5 · FAQ 질문 17.5 · FAQ 답변 19.5/20.5 · Metric Card 21.5/30.5 · 사이드 메뉴 18.5/4.5 · User Menu 7.5 · Segmented 3 · FAQ 좌우 14
> **결정 (2026-10-01): 그대로 유지, 예외로 기록.** 해당 컴포넌트 description에 `※ 간격 스케일 예외` 문구 추가 (Accordion Item · Metric Card · Side Navigation · Tooltip · Segmented Control · Date Picker week gap 3).

---

## 7. 남은 이슈 · 후속 과제

| 구분 | 내용 | 상태 |
|---|---|---|
| ~~색상~~ | ~~`Icon/Default` Gray 60 → Gray 70~~ | ✅ 완료 |
| ~~토큰 명명~~ | ~~버튼이 `Border/Input` 사용~~ | ✅ `Border/Button` 신설 |
| ~~컴포넌트~~ | ~~Date Picker 월 이동 헤더 / Pagination Go to page 원본에 없음~~ | 실서비스·프로덕트에 존재 확인 → Go To 추가, 월 헤더는 미반영 |
| ~~텍스트 입력~~ | ~~뱃지·아이콘 라벨·Go To·Alert 제목·Date Field 값~~ | ✅ 완료 (Pretendard 사용 가능해져 자동 입력) |
| 컴포넌트 | Primary Hover·Disabled, Error 상태, Check Box·Tab·Pagination Hover는 실서비스 미확인 | 제안 상태 유지 |
| 컴포넌트 | Select Hover/Open (배경 `#E1E8F2`, 보더 `#8B9099`) — 팔레트에 없음 | 결정 필요 |
| 컴포넌트 | Date Picker 월 이동 헤더(`2026년 9월 ‹ ›`), Calendar Day `Today` 상태 | 미반영 |
| 컴포넌트 | File Upload 필드 + Progress Bar, 공지 팝업 Drawer(넓은 폭), 콘텐츠 카드, 폼 레이아웃(라벨 열) | 미반영 |
| 실서비스 불일치 | 공지사항 목록 `삭제`가 0개 선택에도 활성 (계정관리는 Disabled) | 개발 확인 필요 |
| 실서비스 불일치 | 수정관리 구분(정보수정·신규정보)이 프로덕트는 컬러, 실서비스는 검정 | 결정 필요 |
| 실서비스 불일치 | 테이블 헤더 배경 DS `#EEEEEE` vs 실서비스 `#F5F5F5` → 헤더 Hover 보류 | 결정 필요 |
| 프로덕트 전용 | 사용시간 설정 일정 캘린더(Dialog), 정보 박스, `%` 단위 입력, 순위보고서 차트, Tag Medium(20h) | 미반영 (PRADA 기능 아님) |
| 원본 디자인 | 팝업 현황 수치 24px → 22px, Noto Sans KR·Inter → Pretendard | 원본 수정 시 반영 |
| 문서 | 신규 토큰 5개 Paint Style 미생성, Woody 파일 접근 권한 없음 | 선택 사항 |

---

## 8. 작업 이력

1. Color · Typography 파운데이션 구성 (Woody 스타일)
2. 컬러 Paint Style + Variable 연결, Semantic 토큰, Thumbnail 제작
3. Spacing · Radius 변수, 코드 이름 설정, Icon · Button · Input · Tag/Badge · Pagination 컴포넌트 제작
4. Action Button(어드민 로그인) 추가
5. `Spacing/30` 추가, Text Field `Style=Login` 추가
6. 번호별 컴포넌트 구조로 재편 및 누락 컴포넌트 추가
7. 원본 텍스트 분석 → 행간·자간 정리
8. FAQ 화면 HTML 재현 테스트
9. 4개 프로덕트 교차 분석 → 타이포 통합 (55 → 27개)
10. 명칭 정리 (Title / Heading 1–3 / Label 2–4)
11. 행간 원본 기준 재적용, 24px 제거 (→ 25개)
12. Spacing 문서 bar 삭제, 문서 제목 32px Bold 통일
13. **실서비스 녹화 분석** — 프레임 추출·픽셀 측정으로 Hover/Disabled/Read-only 등 상태값 정리 ([prada-state-spec.md](prada-state-spec.md))
14. 작업 파일을 `Prada 디자인 시스템_정리중`으로 이전
15. Secondary 버튼 Hover 보더 `Border/Strong`, Disabled 흰 배경으로 실서비스 맞춤
16. `Border/Button` 신설 (명명 규칙), `Icon/Default` → Gray 70 (원본 960건 확인)
17. 녹화 vs 디자인 시스템 누락 요소 16개 정리
18. **BULDAK·BATTTERY·GUARD 교차 검증** — 색·Radius 감사, 라이브러리 컴포넌트·화면 분석
19. 토큰 5개 · Radius/XL 추가, Input Disabled · Table Cell State · Alert Detail · Top Button Direction 반영, 아이콘 5종 · Date Field · Period Button · Table Icon Button · Dialog · Role/Type Badge · Pagination Ellipsis/Go To 추가
20. 텍스트 직접 입력 체크리스트 작성 ([prada-manual-text-checklist.md](prada-manual-text-checklist.md))
21. 작업 파일을 `YWIcLzEgoznhSYcKGOrSVz`로, 원본 참조를 `HERMES_PRADA(8kZcif2uWXsdEZ75np8URX)`로 변경
22. **텍스트 체크리스트 전체 입력** — Role/Type Badge, Alert Title 기본값(`알림 제목`)·Detail 본문 Auto height, Pagination Go To, 아이콘 라벨 5종, Date Field(140, `2025-07-10`), Dialog(`타이틀`/`확인`), Period Button(`7월`/`오늘`), 섹션 설명 7곳
23. 신규 컴포넌트 세트 6개(Role/Type Badge, Period Button, Table Icon Button, Date Field, Top Button)에 기존 세트와 같은 보라 점선 테두리 적용, `Document Download` 라벨 2줄 줄바꿈
24. **KRDS 토큰 레벨 정리** — Theme→Primitive(비공개·scope 없음), Number Primitive 추가 후 Spacing·Radius 연결, Overlay/Black 스케일, Semantic 11개 추가, Effect Style 그림자 색 Semantic 연결, 문서 프레임 Primitive 직접 사용 제거, Primitive Paint Style 비공개(`_Primitive/`)
25. **최종 정리** — 컴포넌트 토큰 감사(위반: 간격 예외 28곳만), User Menu 간격 연결, 예외 description 기록, Color 페이지 갱신(`Primitive Color` 제목, Overlay/Black 6종, Semantic 카드 12개 추가, Annotation·Shadow 섹션, `Icon/Default` 참조 표기 Gray 70으로 수정), Radius/XL 문서 카드 추가
26. **Favicon 반영** — 페이지명 `Logo, Favicon`, 세트명 `Favicon/PRADA`, 속성 `size`→`Size`, hex 고정 색(#1B2A41·#FFFFFF)을 `Background/Brand`·`Text/Inverse`로 연결, 세트 점선 테두리·description 추가, 레이어 이름 정리(Background/Symbol)
27. **프로덕트 3종 커버리지 점검** — 아이콘 4종(Trophy·View All·Copy·Menu), Header Device=Mobile, Mobile Nav Item, Mobile Menu(+예시) 추가 · 그림자 3개 원본 값으로 수정 · Title/SemiBold 24 복원 · Icon/Brand · Overlay/Gray 70 10 추가 · Color/Typography/Effect 문서 갱신
28. **Figma 코멘트 8건 반영** — Menu 보더, Calendar Day Weekday 삭제·Hover 인터랙션, Table Header Cell 정렬, Icon State 규칙, Pagination Ellipsis 가운데 정렬·조합 교체, Check Box Disabled 토글
29. **가이드라인 레이아웃 Woody식 개편 (① Input 페이지)** — 컴포넌트별 카드(Text Field · Date Field · Select · Search Field · Check Box · Textarea · Example): 제목 32 Bold + 설명(Body 1) → Variants 패널(Background/Subtle, 속성 칩 Background/Brand · 값 칩 Background/Neutral, 인스턴스 케이스 그리드) → Main Component 영역(Annotation/Strong 8%)에 기존 컴포넌트 세트 이동. 기존 인스턴스 연결 유지, 이전 문서 프레임 삭제. 나머지 페이지는 같은 방식으로 확장 예정
30. **가이드라인 레이아웃 Woody식 개편 (전체 컴포넌트 페이지)** — Input에 이어 14개 페이지를 같은 구성(설명 → Variants 패널 → Example·Spec → Main Component)으로 변경. Variants 패널은 변형 속성으로 자동 생성(옵션이 가장 많은 속성 = 열, 두 번째 = 행, 나머지 = 패널 분리), 없는 조합은 "—" 표시. 기존 문서 프레임은 컴포넌트가 0개 남은 것을 확인 후 삭제, 컴포넌트 세트는 이동만 해 인스턴스 연결 유지. Icon 페이지는 목록형이라 State 규칙 → 아이콘 목록(Main Component)으로만 묶음. Logo·Favicon 페이지는 제외
31. **컬러 시스템 Woody식 정리** — Primitive를 그룹별 90~5 전체 스케일로 확장(+39, OKLab 보간), Paint Style은 실제 사용 단계 35개만 공개 이름(`Gray/Gray 70`)으로, Semantic 스타일 41개는 컴포넌트 사용 중이라 유지. Color 문서에 보간 단계 견본(“변수 전용”) 추가
32. **Primitive 변수 단계순 정렬** — Plugin API에 변수 재정렬 기능이 없어 Cool Gray·Navy·Blue·Red·Green·Purple·Overlay 70개를 90→5 순서로 재생성 후 Semantic 별칭 35·Paint Style 24·Color 문서 견본 46곳 연결 이전, 이전 변수 참조 0건 확인 후 삭제. 값 변경 없음(Semantic 해석값 검증), 깨진 별칭 0
33. **가이드 문서 색 Woody식 정리** — 메인 영역이 Annotation/Strong(Purple 60) + 페인트 투명도 8%였는데 변수 재연결 과정에서 100%로 돌아가 진하게 보임 → Woody처럼 투명도를 변수 값에 포함: Primitive `Overlay/Purple 60 10`·`Cool Gray 50 5`·`Cool Gray 50 16` 추가, Semantic `Annotation/Component Area`(메인 영역)·`Case Area`(케이스 패널)·`Chip`(값 칩)·`Variant Chip`/`Variant Chip Text`(Green 50/10 그룹 칩)·`Main Chip`(Purple 10) 추가. 16개 가이드 페이지 적용 + 페이지 배경 #F5F5F5, 설명 Text/Primary, 메인 영역 안 세트 배경 흰색. 작업 중 단일 컴포넌트 10개 배경이 흰색으로 잘못 바뀐 것을 발견해 원래 값으로 복구(Side Navigation·Mobile Menu → Background/Navigation, Segmented Control → Background/Selected, 나머지 투명). Nav Item 세트 배경 Background/Navigation
34. **Semantic은 Variable 전용으로 정리 (Woody·KRDS)** — Semantic Paint Style 41개를 쓰던 레이어 1,500여 곳(메인/일반 레이어 우선, 이후 인스턴스 오버라이드 49곳)을 같은 Semantic Variable에 직접 연결하고 Style 분리 → 사용처 0 확인 후 41개 삭제. 컴포넌트 색 751개 전부 Variable 연결 확인. 남은 Paint Style은 실사용 Primitive 35개뿐
35. **Period Button 삭제** — 기본 Button과 차이가 Selected 그림자뿐이라 컴포넌트 세트와 가이드 Variants 패널, 관련 그림자 설명 삭제 (다른 페이지 사용처 없음 확인)
36. **기간 선택 그림자 설명 복원** — 원본(4259:36389)의 선택된 기간 버튼 그림자 0 3px 4px 30% = Shadow/Action Button 확인. Button 카드 설명·Button 세트 description·Shadow/Action Button 스타일 설명에 "기간 빠른 선택의 선택된 버튼 = Primary + Shadow/Action Button" 추가
37. **아이콘 구조 통일 · Side Navigation 아이콘 색 수정** — Nav Item이 아이콘 첫 Vector의 선(Stroke)만 덮어써서 면 아이콘에 테두리가 생기고 나머지 조각이 Icon/Default(#333)로 남던 문제. 아이콘 33개(Status 2종 제외)를 선 아웃라인 → Vector 1개 · Fill 1개(Icon/Default)로 통일. 인스턴스 색 복원: Nav Item·Mobile Nav Item Default=Icon/Subtle, Hover·Active=Icon/Inverse / Check Box 체크 Inverse·Disabled / Button·Action Button 아이콘은 라벨 색 기준(Inverse·Disabled·Default) / Pagination Arrow Subtle / 숨김 아이콘(Text Field Search, Tag Close)도 상태 기준 지정. Icon 페이지 State 규칙에 구조 규칙 1줄 추가
38. **Pagination 말줄임 Woody 방식 적용** — Pagination Ellipsis 컴포넌트(점 3개)와 가이드 패널 삭제, Pagination 조합 안의 말줄임을 Pagination Item(State=Default, Number="...")으로 교체. Pagination Item 세트 설명·카드 설명에 사용법 추가. 깨진 인스턴스 0
39. **팝업 닫기 아이콘 추가** — 원본(4259:36603) ic:outline-close 기준 `Icon/Close Large`(24×24, 14×14 면 X, Icon/Default) 신규. Modal에 상단 우측 닫기(절대 위치 상·우 20, 우·상 고정) + `Close` boolean 속성(기본 on) 추가, Dialog 닫기도 Icon/Close(12 확대) → Close Large로 교체. Icon 페이지 24 그룹명 `Status · Empty · Mobile · Popup (24)`
40. **Typography 명칭 한 단계씩 변경** — Label 1→Body 3, Label 2→Label 1, Caption 1→Label 2, Caption 2→Caption 1, Caption 3→Caption 2, Caption 4→Caption 3 (값 변경 없음). 텍스트 스타일 15개 이름, Typography 표, 페이지 설명 텍스트 13곳, 컴포넌트 description 22개 일괄 반영. 이 문서도 이력(1–39) 외 본문 명칭 갱신
41. **Chart 컴포넌트 신규 (페이지 ` ┗ Chart`, Data Display)** — 원본 순위보고서 Barchart-XL(740×401) 기준 + Woody Chart 규칙. Semantic `Chart/Series 1`(Green 50 · 평균 순위)·`Series 2`(Red 50 · 최고)·`Series 3`(Blue 50 · 최저)·`Chart/Grid`(Gray 30)·`Chart/Guide Line`(Gray 50) 추가. 컴포넌트: Chart(Selected Series 1/2/3 × Status Default/Hover, 선 3px · 마커 8 · 비선택 30%, 격자 0.6px, 축 Caption 1/Regular · Text/Secondary), Chart Marker(Series × State Default 8 채움 / Hover 10 흰 채움+2px 보더), Chart Guide Line(1px 점선 4/4), Chart Tooltip(Body 3/SemiBold 날짜 + Item 1–3 on/off, Spacing/12·4, Radius/XS, Border/Default, Shadow/Dropdown), Chart Card(Tag Selected+Outline ×2, Spacing/8 · 24 + Chart). Hover 관련은 제안 상태. Woody식 가이드 3카드, 토큰 감사 위반 0
42. **팝업 규칙 컴포넌트화 (Woody Modal 기준)** — 원본 센터 팝업(공지사항 600 · 순위보고서 820 · 삭제 로그/수정 전 데이터 980 · 모바일 340, 패딩 40/20, 제목 16 SemiBold+하단 보더, 닫기 상·우 20/10)과 우측 패널(328 · 488 · 568)을 정리. Dialog → 세트(Size=Medium/Large/XLarge/Mobile) + Footer · Close boolean 추가(Confirm Button 유지), 닫기를 제목 줄 → 절대 위치로 원본에 맞춤. Drawer → 세트(Size=Small 328/Medium 488/Large 568). 기존 인스턴스 연결 유지, Modal 페이지 Variants 패널(Dialog · Size / Dialog · Footer / Drawer · Size)과 설명 갱신
43. **Mobile · Responsive 가이드 페이지 신규 (Foundation)** — 원본 PRADA(1920) · PRADA_모바일(360) 화면 비교 실측. 카드 4개: ① Breakpoint · Layout(도식 + 표: 헤더 52 동일, Side Nav 180 → Mobile Menu, 콘텐츠 여백 24/1692 → 20/320, 헤더 아래 32 → 20, 제목→콘텐츠 40 / 모바일 섹션 24) ② Typography(페이지 제목 22→20, 카드 제목 16→13, 현황 수치 22→16, 선택 개수 15→13, 셀·버튼·입력 13 유지) ③ Component 대응(Header/Nav/Metric 2×2/검색 한 줄/Table·Chart 가로 스크롤/Pagination 2줄 등) ④ Popup(Modal 340 · Dialog Size=Mobile · Drawer → 전체 화면 360 · Alert 340) + 실제 Mobile 인스턴스 예시
43. **Chart Hover 실서비스 기준 수정 + 토큰 추가** — 화면 기록(prada-pang.com 순위보고서) 확인: 어두운 툴팁(#333, 흰 글자, 범례 사각형 흰 테두리), Hover 점 확대 + 진한 색, 비선택 시리즈 연한 색, 가이드 점선 없음. Semantic 9개 추가: `Chart/Series 1·2·3 Hover`(Green·Red·Blue 90), `Chart/Series 1·2·3 Subtle`(각 20), `Chart/Tooltip Background`(Gray 70), `Chart/Tooltip Text`(White), `Chart/Tooltip Legend Border`(White). Chart Marker State 4종(Default/Hover/Inactive/Inactive Hover), Chart Legend Box 신규(Series × Active/Inactive), Chart Tooltip 어두운 스타일(Radius/S, Spacing/8·4, 그림자·보더 제거, Label 2), Chart Hover 3종에서 가이드 점선 숨김 · 점/범례 상태 반영. 토큰 감사 위반 0
44. **Chart Marker Hover = 크기만 변경** — Hover · Inactive Hover는 색 변화 없이 8→10 확대(Hover=Chart/Series N, Inactive Hover=Subtle). 사용처가 없어진 `Chart/Series 1·2·3 Hover` 토큰 3개 삭제
45. **Number (Primitive) 설명 카드 추가** — Spacing, Radius 페이지 우측에 용도(Spacing · Radius 참조용 원본값, 직접 사용 금지, 비공개 · scope 없음, 새 단계 추가 순서)와 Number → Spacing · Radius 매핑 표(14단계) 추가
46. **모바일 메뉴 원본 대조 수정** — 원본 Menu_open(마스터 · 총판/대행사 · 광고주) 기준: MAIN MENU 11→12px(Label 2/Regular), Mobile Nav Item 39→36(고정 · 세로 가운데), 로그아웃 42→40(strokesIncludedInLayout 해제). Mobile Menu · Mobile Nav Item 설명과 페이지 설명에 권한별 메뉴 구성(마스터 9 · 총판/대행사 7 · 광고주 5), Dim 60px, 각 요소 스타일 추가
47. **인터랙션 전수 점검 (실서비스 화면 기록 4:38, 100초)** — Foundation에 ` ┗ Interaction` 페이지 신규(→ 49에서 삭제): Hover 12 · Focus/Click 14 · 반응형 3 규칙을 대상/동작/변화·토큰/컴포넌트 State/근거(실서비스 · 원본 · 제안) 표로 정리. 반영: Semantic `Background/Option Hover`(Navy 10, 실서비스 #DAE2EF) 추가 → Menu Item Hover 연결(기존 Background/Hover), Table Header Cell에 State=Default/Hover 추가(Background/Cell Hover, 인스턴스 11개 유지 · 가이드 Type × State 패널), Table Filter Popover 신규(380, Search Field + 전체 선택 · Count + 옵션 목록 스크롤 + 취소/확인, Shadow/Dropdown) 및 Table 가이드 카드 추가
48. **인터랙션 후속 수정** — (1) Background/Option Hover 영향 확인: Menu Item Hover 1곳 + 가이드 인스턴스 1개만 사용, Background/Hover 값 변경 없음 → 다른 요소 영향 없음. (2) Primary 그림자 규칙(실서비스): Button · Action Button Primary Default = Shadow/Action Button, Hover = 그림자 없음(+Brand Hover), Disabled 없음 — 인스턴스 30개 반영(Modal/Drawer 18 · Button 8 · Table 2 · Input 1 · Responsive 1). Button 카드 설명(사용자 문구 유지)에 Hover 규칙 추가, Interaction 표 Primary 행 실서비스로 갱신. (3) 반응형 Hug 조정: Metric Item Label → FILL + 줄바꿈(가운데), Value 한 줄 유지 — 1065px에서 "종료예정" 2줄 대응. Mobile · Responsive 페이지 Breakpoint 표에 중간 폭(1920→1065) · 약 500px 모바일 전환 행, Component 대응 Metric Card 행 · 설명 갱신, Interaction 반응형 행 정정
49. **Interaction 페이지 삭제 → 컴포넌트 가이드로 분산** — Hover · Focus · Click 규칙을 각 카드 설명에 근거(실서비스/원본/제안)와 함께 추가: Text Field · Date Field · Select · Search Field · Check Box · Menu Item · Calendar Day · Table Header Cell · Table Cell · Metric Item · Chart · Button · Icon Button · Action Button · Nav Item · Segmented Item · Pagination Item · Accordion Item · Alert · Modal/Dialog · Drawer · Top Button (22개). 반응형 규칙은 Mobile · Responsive 페이지에 유지. Date Field 설명의 삭제된 Period Button 표기 → 기간 빠른 선택 Button으로 정정
