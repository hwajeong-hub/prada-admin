# 공지사항 기획

기준: `~/Documents/prada-design-system.md` (2026.10.07 수정본), 참조 화면: Figma `[총판/대행사/광고주]계정목록` (4259:49555)

## 목적
운영사가 올린 공지(점검·정산 일정·기능 변경)를 총판·대행사·광고주가 놓치지 않고 확인하게 한다.

## 핵심 행동
공지 제목을 눌러 본문을 읽는다.

## 정보 우선순위
1. 중요 공지 (목록 맨 위 고정 + 진입 시 자동 팝업)
2. 공지 제목과 등록일
3. 구분(공지·점검·업데이트), 작성자, 조회수
- 그 외: 검색, 페이지 이동

## 화면 구성 (계정목록과 같은 셸)
- Header + Side Navigation(공지사항 활성) + Page Header(타이틀 + 설명, Breadcrumb 없음)
- 필터: Dropdown(전체·제목·내용) + Search Field
- Filter Chip Group: 전체 · 공지 · 점검 · 업데이트 + 우측 "총 N건"
- Table: No · 구분 · 제목(Link) · 작성자 · 등록일(Sort) · 조회수(Sort), 모두 가운데 정렬
- Pagination + Go to page + "N개씩 보기" Dropdown
- Dialog/Base Medium 600: 공지 본문 (행 클릭 / 진입 시 자동)
- Top Button, Loading Overlay(조회 시)

## 상태
- [x] 기본
- [x] 빈 상태: 검색 결과 없음 (Empty State)
- [x] 로딩: 조회 시 Loading Overlay
- [ ] 오류: 프로토타입 범위 밖
- [x] 모바일(≤500): Header Mobile + Mobile Menu, 테이블 가로 스크롤, Dialog 340

## 성공 기준
- 진입하자마자 중요 공지를 읽을 수 있고, "다시 보지 않기" 이후에는 뜨지 않는다.
- 목록의 생김새가 계정목록과 같은 시스템으로 보인다(같은 높이·색·간격).

## 가정 / 확인 필요 (제안)
- 등록·수정·삭제는 이번 범위에서 제외했다(읽기 전용 권한 화면 가정).
- **중요 고정 표시**: No 칸에 "중요"를 Label 1/SemiBold · Text/Error로 표시. 문서에 정의가 없어 Type Badge 규칙을 빌렸다.
- **구분 텍스트**: 공지·점검·업데이트를 Text/Primary 일반 텍스트로 표시(색 매핑은 문서에 없음).
- **자동 팝업 Dialog 제목**: Typography 표의 "공지사항 View 팝업 제목 = Title/SemiBold 24"를 따랐다. Dialog/Base 기본 타이틀(Body 1/SemiBold)과 다르다.
- 로고는 Gotham Rounded 글꼴이 없어 텍스트로 근사했다.
