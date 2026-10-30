# PRADA 실서비스 상태값 정리 (녹화 기반)

> 출처: 화면 기록 2026-09-30 오후 2.41.44.mov (prada-pang.com, 약 3분 53초)
> 색상은 녹화 프레임 픽셀 측정값(JPEG 압축으로 ±2 오차) → 가장 가까운 Primitive로 매핑

## 1. 확인된 상태 (원본 Figma에 없던 것 → "실서비스 확인"으로 변경 가능)

| 컴포넌트 | 상태 | 측정값 | 매핑 토큰 제안 | 근거 화면 |
|---|---|---|---|---|
| Nav Item | Hover | 텍스트 흰색 + SemiBold (Active와 동일) | Text/Inverse, Body 2/SemiBold | 일별마감→사용시간 설정 hover |
| Button Secondary | Hover | 테두리 진해짐 + 배경 약간 회색(#F8F8F8 근사) | Border/Strong + Background/Hover ✅ Figma 적용 | 공지 상세 `삭제`, 드로어 `닫기` (활성 버튼에 포인터) |
| Button Secondary | Disabled | 배경 흰색, 테두리 #E5E5E5, 텍스트 Gray 50 근사 | Background/Default + Border/Default + Text/Disabled ✅ Figma 적용 | 계정관리 `삭제` (0개 선택). 공지사항 목록 `삭제`는 0개 선택에도 활성 → 실서비스 불일치 |
| Icon Button (검색) | Hover | #203347 → #273B5B (조금 밝아짐) | Background/Brand Hover | 검색 버튼 hover |
| Textarea / Text Field | Focus | 테두리 #9FA09F | Gray 50 `#9E9E9E` | 공지 작성 `내용` 입력 |
| Text Field | Read-only | 배경 #F5F5F5, 테두리 #E6E6E6, 텍스트 진한색 | Background/Subtle(Gray 10) + Border/Input | 광고 추가 `아이디`, `작업 종료일`, 계정 수정 `권한` |
| Select | Hover/Open | 배경 #E1E8F2, 테두리 #8B9099 | **팔레트에 없음** → 신규 또는 Navy 5 `#EDF0F5`로 근사 | `50개씩 보기` 셀렉트 |
| Table Row | Hover | 행 전체 배경 #F9F9F9 | Gray 5 `#F8F8F8` | 수정관리·계정관리·일별마감 |
| Table Cell | Hover | 마우스 올린 셀 배경 #E6E6E6 | Gray 30 `#E4E4E4` | 동일 (행 hover와 동시 적용) |
| Table Header Cell (Sort) | Hover | #F5F5F5 → #ECECEC | Gray 20 `#EEEEEE` | 정산로그 `생성일시` |
| Table Cell (Link) | Hover | 말줄임 텍스트 전체를 Tooltip으로 표시 | Tooltip 컴포넌트 | 수정관리 `상품명` |
| Metric Item | Hover | 위로 약 2px 이동 (translateY -2) | 효과만, 색 변화 없음 | 광고관리 `테스트 현황` |
| Calendar Day | Hover | Navy 원형 채움 + 흰 텍스트 | Background/Brand + Text/Inverse | 사용시간 설정 드로어 |
| Calendar Day | Today | 원형 배경 #F5F5F5 | Background/Subtle(Gray 10) | 30일 |
| Date Picker 월 이동 화살표 | Hover | 배경 #E7E7E7, 작은 radius | Gray 30 + Radius/XS | ‹ › 화살표 |
| Segmented Control | 비선택 | 트랙 배경 #F0F2F3, 텍스트 연회색 | (기존 스펙 확인) | 광고 추가 `결제/테스트` |

## 2. 새로 확인된 구성요소 (기존 "원본에 없어 미포함" 항목 해소)

| 항목 | 내용 |
|---|---|
| Date Picker 월 이동 헤더 | `2026년 9월 ‹ ›` — Label 2 + Chevron 아이콘, 달력 위 |
| Pagination "Go to page" | `Go to page` 라벨(Caption 1) + 숫자 입력(36×32 정도) + `50개씩 보기` 셀렉트 |
| Pagination 말줄임 | `1 2 3 … 424` 형태 Ellipsis 아이템 |
| Accordion 답변 영역 | 배경 #EEEEEE (Gray 20) 확인 |

## 2-1. 디자인 시스템에 없는 컴포넌트 (녹화 대조, 2026-10-01)

| 우선 | 항목 | 녹화 위치 | 현재 DS |
|---|---|---|---|
| 높음 | Date Field (날짜 입력 + 캘린더 아이콘) + `~` 범위 조합 | 수정관리·정산로그·일별마감 필터, 공지 작성 팝업 기간 | 없음 (Icon/Calendar도 없음) |
| 높음 | 기간 빠른선택 버튼 (오늘/1일전/9월/8월…, 선택=Navy+그림자) | 필터 영역 | 없음 (Segmented와 다름: 트랙 없이 개별 박스) |
| 높음 | Table Cell 상태 (Row Hover / Cell Hover) · Header Hover | 모든 테이블 | State 변형 없음 |
| 높음 | Table Cell 컬러 텍스트 (환불 Red · 연장 Blue · 광고주 Green · 대행사 Blue), Bold 텍스트(공지 제목, 순위 `5위`) | 정산로그·계정관리·광고관리·공지 | Type에 없음 |
| 높음 | 아이콘: History(수정전/관리), Copy-Plus(광고 추가), Download(플로팅·엑셀), Document-Download(엑셀 저장/순위데이터 추출), Calendar | 테이블·버튼·플로팅 | 26종에 없음 |
| 중간 | Pagination: Ellipsis(`…`), Go to page 입력, 개수 Select 조합 | 모든 목록 하단 | 없음 |
| 중간 | Date Picker: 월 이동 헤더(`2026년 9월 ‹ ›`), Calendar Day `Today` 상태 | 사용시간 설정 | 없음 |
| 중간 | Text Field `Read-only` 상태 (회색 배경 + 진한 텍스트) | 광고 추가·계정 수정 Drawer | Disabled만 있음 |
| 중간 | Select Hover/Open (배경 #E1E8F2, 보더 #8B9099) | 50개씩 보기 | Focus만 (제안) |
| 중간 | File Upload 필드 (`파일 선택 · 선택된 파일 없음`) + Progress Bar (`0 / 0`) | 엑셀 업로드 Drawer | 없음 |
| 중간 | 공지 팝업 Drawer (넓은 폭, 제목+날짜 헤더, 본문, `다시 보지 않기`/`닫기` 꽉 찬 버튼) | 광고관리 진입 시 | Drawer 328 고정만 |
| 중간 | 콘텐츠 카드 (제목+날짜 헤더 / 본문) | 공지 상세 | 없음 |
| 중간 | 폼 레이아웃 (회색 라벨 열 + 입력 영역) | 공지 작성 | 없음 |
| 낮음 | 플로팅 버튼 아래 방향(↓) — 녹화 화면은 다운로드/하단 이동 아이콘 | 모든 화면 우측 하단 | Top Button(↑)만 |
| 낮음 | Metric Item Hover (위로 2px 이동) | 광고관리 현황 | 상태 없음 |
| 낮음 | 시간 범위 입력 (00:00 ~ 24:00) | 사용시간 설정 | Text Field 조합으로 가능, 패턴 문서 없음 |

## 2-2. 프로덕트 3종(BULDAK·BATTTERY·GUARD) 교차 확인 + Figma 반영 (2026-10-01)

> 세 파일은 같은 어드민 템플릿(화면·노드 구성 동일). 색은 3종 모두 DS 팔레트 안에 들어옴(#999999·#D9D9D9·#767676 소수 예외). Radius 5(244~288건)는 채움/보더 없는 투명 프레임이라 규칙 아님.

| 요소 | 녹화 | 프로덕트 3종 | Figma 반영 |
|---|---|---|---|
| 아이콘 상태 Default/Hover/Pressed | 확인 불가 | Icon 가이드: #333 → Navy 40 → Navy 80 | ✅ 토큰 `Icon/Hover`·`Icon/Pressed` + `Table Icon Button` |
| 입력 Disabled(=읽기전용) | 회색 배경 + 진한 텍스트 | Input 가이드 disabled: Gray 10 + Gray 30 + #333 | ✅ `Background/Input Disabled`, Text Field·Textarea·Select 수정 |
| 테이블 행/셀 Hover | 행 #F9F9F9, 셀 #E6E6E6 | (정적 시안) | ✅ Table Cell `State` 추가, `Background/Cell Hover` |
| Date Field (캘린더 아이콘) | 브라우저 기본 날짜 입력 | 140×40 + icon24 calendar | ✅ `Date Field` (임시 너비 180) + `Icon/Calendar` |
| 기간 빠른 선택 버튼 | 오늘/1일전/9월… | 동일 (Selected Navy + Shadow) | ✅ `Period Button` |
| 플로팅 스크롤 버튼 ↓ | 우측 하단 ↓ | `scrolling` top/down | ✅ `Top Button` Direction Up/Down + `Icon/Arrow Down` |
| 아이콘: 수정 이력·광고 추가·엑셀 저장 | 사용 | reload-time·copy-plus·document-download | ✅ `Icon/History`·`Icon/Copy Plus`·`Icon/Document Download` (라벨 텍스트 보류) |
| 큰 팝업 Dialog (980, 닫기 X) | 없음(Drawer로 대체) | 삭제로그·순위보고서·사용시간 설정·광고 수정 | ✅ `Dialog` (Confirm Button 속성) |
| 권한 텍스트 뱃지 (총판사 Red/관리자/대행사 Blue/광고주 Green) | 광고주 Green·대행사 Blue | `sort` 컴포넌트 | ⏸ 색 규칙만 토큰 설명에 기록, 컴포넌트는 폰트 문제로 보류 |
| 구분 텍스트 뱃지 (신규 Green/연장 Blue/환불 Red, 정보수정 Blue/신규정보 Green) | 환불 Red·연장 Blue, 수정관리 구분은 검정 | `property` 컴포넌트, GUARD 수정관리 컬러 | ⏸ 동일 (실서비스 수정관리 구분 색 불일치) |
| 2줄 Alert (제목 Red + 본문, Radius 12) | 없음 | alert_notice 400×85 | ⏸ 폰트 문제로 보류 |
| Pagination `…`·Go to page | 있음 | 있음 | ⏸ 폰트 문제로 보류 |
| 정보 박스(총합 100% / 오류 시 빨간 배경) | 없음 | GUARD 로직관리 | 미반영 (GUARD 전용) |
| 단위 붙은 입력(`%`) | 없음 | GUARD 로직관리 | 미반영 |
| 순위보고서(라인 차트, 키-값 정보 테이블, ▲ 증감) | 없음 | BULDAK·GUARD | 미반영 (PRADA 기능 아님) |
| 일정 캘린더(날짜 칸에 시간 칩, 다중 선택) | 작은 Date Picker | 사용시간 설정 Dialog | 미반영 — PRADA 실서비스는 Drawer + 작은 달력 |
| Tag Size Medium(20h) | 없음 | 광고 수정 팝업 키워드 | 미반영 |
| Table 헤더 Hover | #F5F5F5 → #ECECEC | — | 미반영 (DS 헤더 배경 #EEEEEE와 실서비스 #F5F5F5 차이 먼저 확인 필요) |

## 3. 녹화에서 확인 안 된 상태 (계속 "제안 상태" 유지)

- Text Field / Select **Error** 상태
- Button **Primary Hover / Pressed** (녹화상 뚜렷한 변화 없음)
- Check Box Hover
- Tab Item Hover, Pagination Item Hover
- Menu Item Hover (셀렉트 드롭다운 열린 목록은 브라우저 기본 UI라 확인 불가)
