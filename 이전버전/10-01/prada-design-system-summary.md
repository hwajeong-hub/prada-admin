# Prada 디자인 시스템 작업 정리

> 최초 작성: 2026-10-01 · 최종 업데이트: 2026-10-01 (실서비스 녹화 분석 · 프로덕트 3종 교차 검증 반영)
> 작업 파일: [Prada 디자인 시스템_정리중 (Figma)](https://www.figma.com/design/WNVerDPZDVBx8scafrJA0j)
> 이전 파일: [Prada 디자인 시스템 (Figma)](https://www.figma.com/design/IaJIj6VosnGdh5MPpaoyIQ)

**관련 문서**
- [prada-state-spec.md](prada-state-spec.md) — 실서비스 녹화 상태값 측정 · 누락 컴포넌트 · 프로덕트 3종 비교표
- [prada-manual-text-checklist.md](prada-manual-text-checklist.md) — Figma에 직접 입력할 텍스트 체크리스트 (노드 링크 포함)

---

## 1. 개요

| 항목 | 내용 |
|---|---|
| 목적 | HERMES_PRADA 어드민 디자인을 Woody 디자인 시스템 구조·스타일로 정리 |
| 스타일 기준 | [Woody 디자인 시스템](https://www.figma.com/design/r0cypsL8ZyTrecrPlrNgD2) (페이지 구조, 명명 규칙, 문서 레이아웃) — 현재 계정은 접근 권한 없음 |
| 원본 디자인 | [HERMES-PRADA](https://www.figma.com/design/LbLV7DvABbwOVzSzuil4m1) `260115 v0.0.6 PRADA` 페이지 |
| 실서비스 | prada-pang.com 화면 녹화 (2026-09-30, 약 3분 53초) |
| 교차 검증 | [BULDAK-UI](https://www.figma.com/design/S7P7QG2eFTCsHpFZqWlNnI) · [BATTTERY-UI](https://www.figma.com/design/C8kamcshVozfVH23IX6Al9) · [GUARD-UI](https://www.figma.com/design/4PGLCcYgF6M9eevCdFsTnl) (같은 어드민 템플릿) |
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
 ┗ Logo
————  Component  ————
①  Input         ┗⭐ Text Field / Select / Search Field / Check Box / Textarea / Date Field🆕
                 ┗ Menu (selection)
                 ┗ Date Picker
②  Data Display  ┗ Table
                 ┗ Tag / Badge  (Role Badge🆕 · Type Badge🆕)
                 ┗ Metric Card
③  Actions       ┗ Button ⭐  (Period Button🆕 · Table Icon Button🆕)
                 ┗ Icon
④  Navigation    ┗ Side Navigation / Header
                 ┗ Tab
                 ┗ Pagination  (Ellipsis🆕 · Go To🆕)
                 ┗ Accordion
⑤  Feedback      ┗ Alert
                 ┗ Modal / Drawer  (Dialog🆕)
                 ┗ Tooltip
⑥  Pattern       ┗ Empty State / Page Header / Top Button
```

---

## 3. Foundation

### 3.1 Color

| 컬렉션 | 개수 | 내용 |
|---|---|---|
| Theme (Primitive) | 36 | Gray 90–5 · White, Cool Gray, Navy, Blue, Red, Green, Purple, Overlay |
| Semantic | **46** (+5) | 용도별 토큰, 모두 Theme alias |

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

> 신규 토큰 5개는 Variable만 있고 Paint Style은 아직 없음(기존 76개 Paint Style).

### 3.2 Typography

- 폰트 **Pretendard**, 자간 **-2%**, 명명 `분류/굵기` (Woody 방식)
- Text Style 25개 (Heading 1–3 · Body 1–2 · Label 1–2 · Caption 1–4), 행간은 분류 안에서 통일 (Caption 3만 130%)
- 24px(Title) 제거 — 4개 프로덕트 모두 팝업 현황 수치에만 쓰인 원본 불일치

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

### 3.3 Spacing · Radius

| 컬렉션 | 값 |
|---|---|
| Spacing (13) | 0 · 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 30 · 32 · 40 |
| Radius (**7**) | None 0 · XS 4 · S 6 · M 8 · L 10 · **XL 12** 🆕 · Full 100 |

- `Radius/XL` 12: 2줄 Alert(Layout=Detail) — 프로덕트 alert_notice 400×85
- 프로덕트의 Radius 5(244~288건)는 채움·보더 없는 투명 프레임이라 규칙에서 제외

### 3.4 Effect

Shadow/Action Button · Card · Navigation · Dropdown · Alert · Modal · Tooltip (7개, 변경 없음)

### 3.5 Logo

`Logo/PRADA` Navy · White

---

## 4. Components (이번 변경분 중심)

### ① Input
| 컴포넌트 | 변경 |
|---|---|
| Text Field · Textarea · Select | **Disabled = 읽기전용 스타일**로 변경: `Background/Input Disabled` + `Border/Default` + `Text/Primary` (프로덕트 Input 가이드 + 실서비스 Read-only) |
| **Date Field** 🆕 | Status(Normal/Focus/Disabled). Text Field + `Icon/Calendar`. 스펙 140×40 (텍스트 입력 전 임시 180) |

### ② Data Display
| 컴포넌트 | 변경 |
|---|---|
| Table Cell | **State(Default/Row Hover/Cell Hover)** 추가 → 15개 변형 (실서비스 측정: 행 #F9F9F9, 셀 #E6E6E6) |
| **Role Badge** 🆕 | 총판사(Red)·관리자(Primary)·대행사(Blue)·광고주(Green), Label 2/SemiBold — 텍스트 입력 필요 |
| **Type Badge** 🆕 | 신규·신규정보(Green)·연장·정보수정(Blue)·환불(Red) — 텍스트 입력 필요 |

### ③ Actions
| 컴포넌트 | 변경 |
|---|---|
| Button / Icon Button / Action Button (Secondary) | 기본 보더 `Border/Button`, **Hover = `Border/Strong` + `Background/Hover`**, **Disabled = 흰 배경 + `Border/Default` + `Text/Disabled`** (실서비스 확인) |
| **Period Button** 🆕 | State(Default/Selected) — 기간 빠른 선택(오늘·1일전·월). Selected = Primary + Shadow/Action Button |
| **Table Icon Button** 🆕 | State(Default/Hover/Pressed) = Icon/Default → Icon/Hover → Icon/Pressed, Icon 스왑 |
| Icon | **31종** (+5): `History` · `Copy Plus` · `Document Download` · `Calendar` · `Arrow Down` (프로덕트 원본 벡터) — 라벨 텍스트 입력 필요 |

### ④ Navigation
| 컴포넌트 | 변경 |
|---|---|
| **Pagination Ellipsis** 🆕 | `…` 36×36, Text/Tertiary (완료) |
| **Pagination Go To** 🆕 | 라벨 + 50×40 입력 — 텍스트 입력 필요 |

### ⑤ Feedback
| 컴포넌트 | 변경 |
|---|---|
| Alert | **Layout(Slim/Detail)** 추가. Detail = 제목(Label 2/SemiBold, Error는 Text/Error) + 본문(32 들여쓰기), Radius/XL, Title 속성 |
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

## 6. 원본 높이 유지를 위해 스케일 외 값으로 넣은 패딩

Tooltip 5 · FAQ 질문 17.5 · FAQ 답변 19.5/20.5 · Metric Card 21.5/30.5 · 사이드 메뉴 18.5/4.5 · User Menu 7.5 · Segmented 3 · FAQ 좌우 14
> 가까운 Spacing 변수로 바꾸면 1px 이내 차이. 정리 여부는 추후 결정.

---

## 7. 남은 이슈 · 후속 과제

| 구분 | 내용 | 상태 |
|---|---|---|
| ~~색상~~ | ~~`Icon/Default` Gray 60 → Gray 70~~ | ✅ 완료 |
| ~~토큰 명명~~ | ~~버튼이 `Border/Input` 사용~~ | ✅ `Border/Button` 신설 |
| ~~컴포넌트~~ | ~~Date Picker 월 이동 헤더 / Pagination Go to page 원본에 없음~~ | 실서비스·프로덕트에 존재 확인 → Go To 추가, 월 헤더는 미반영 |
| **텍스트 입력** | 원격 Figma 환경에 Pretendard 없음 → 뱃지·아이콘 라벨·Go To·Alert 제목·Date Field 값 직접 입력 필요 | ⏳ [체크리스트](prada-manual-text-checklist.md) |
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
10. 명칭 정리 (Title / Heading 1–3 / Caption 1–4)
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
