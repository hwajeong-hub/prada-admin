/* =========================================================
   캠페인 영역 시안용 예시 데이터 — 캠페인 요약 · 캠페인 관리 · 정산관리가 함께 쓴다
   (prada.js 다음, 화면 스크립트 앞에서 불러온다)
   ========================================================= */
(() => {
  const seeded = (seed) => { let s = seed % 2147483647; if (s <= 0) s += 2147483646; return () => (s = (s * 16807) % 2147483647) / 2147483647; };
  const today = (() => { const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); })();
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  const PRODUCTS = [
    '제주 서귀포 노지 고당도 타이벡 하우스 효돈감귤', '킹콩랙 철제 선반 산업용 중량랙 조립식 앵글 250kg 110X60X150 4단 독립형',
    '제주 고당도 황금향 감귤 가정용 선물세트 산지직송 프리미엄 3kg', '매직쉐프 욕실난방기 화장실 미니 가정용 온풍기 벽걸이 히터 무타공 IPX4 26년 신제품',
    '[국내제작] 비둘기퇴치망 버드스파이크 에어컨실외기 악 조류 가드 기본형', '대림바스 26년형NO필터 좌욕비데물세정비데 DDS-S230A LED조명 간편자가설치',
    '대림바스 비데 26년 신제품 NO필터 IPX7 방수 비데구입 DDS-S100AS 자가설치', '26년형 무타공 신일 욕실난방기 가정용 화장실 난로 전기 히터 벽걸이 온열기',
    '대원헬스 모발콜라겐 3X 20ml x 28포, 3개', '올바른침대 허리 건강엔 바른 허리 매트리스 28cm, SS(슈퍼싱글), 하드'
  ];
  const ANSWERS = ['효돈감귤', '킹콩랙', '황금향', '매직쉐프', '버드스파이크', '대림바스', '대림바스', '신일', '대원헬스', '올바른침대'];

  // 캠페인 (캠페인 관리 표): 등록일 최신순
  const r = seeded(31);
  const campaigns = Array.from({ length: 64 }, (_, i) => {
    const quota = [500, 500, 400, 400, 250, 250, 250, 250, 250, 200][i % 10];
    const used = Math.round(quota * (0.55 + r() * 0.2));
    return {
      id: i + 1, product: PRODUCTS[i % PRODUCTS.length], answer: ANSWERS[i % ANSWERS.length],
      quota, used, wrong: Math.floor(r() * 90), created: ymd(addDays(today, -(i + 1))), on: i % 7 !== 3
    };
  });

  // 일자별 캠페인 요약 (네이버 쇼핑): 최근 180일
  const daily = Array.from({ length: 180 }, (_, d) => {
    const rr = seeded(1000 + d);
    const target = Math.round((14800 + rr() * 2600) / 50) * 50;
    const used = Math.min(target, Math.round(target * (0.69 + rr() * 0.31)));
    return {
      date: ymd(addDays(today, -d)), target, used, wrong: Math.round(used * (0.1 + rr() * 0.1)),
      unique: Math.round(used * (0.7 + rr() * 0.12)), exhausted: 170 + Math.floor(rr() * 55), calls: 0
    };
  });

  // 매체 (정산관리 칩·단가설정)
  const MEDIA = ['아바티', '체리포인트', '머니닷', 'TNK', '애드팝콘', '플코', 'NBT', '아바티 매체사'];
  const CATEGORIES = ['쇼핑', '저장', '방문'];

  window.CampaignData = { campaigns, daily, MEDIA, CATEGORIES, seeded, ymd, addDays, today };
})();
