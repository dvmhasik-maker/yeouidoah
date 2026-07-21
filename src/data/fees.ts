export const FEE_NOTICE = {
  legalBasis:
    "「수의사법」 제20조(진찰 등의 진료비용 게시) 및 같은 법 시행규칙 제18조의3(진찰 등의 진료비용 게시 대상 및 방법), 「동물소유자등에게 알릴 필요가 있는 동물진료업의 행위에 대한 진료비용」 고시에 따라 다음과 같이 진료비용을 게시합니다.",
};

export const FEE_GROUPS = [
  {
    category: "진찰 · 상담",
    rows: [
      { name: "초진 · 재진 진찰료", tiers: [{ label: null, price: "10,000원" }] },
      { name: "상담료 (10분 기준)", tiers: [{ label: null, price: "10,000원" }] },
    ],
  },
  {
    category: "입원",
    rows: [
      {
        name: "입원비",
        tiers: [
          { label: "0~10kg", price: "33,000원" },
          { label: "10~20kg", price: "44,000원" },
          { label: "20~30kg", price: "55,000원" },
        ],
      },
    ],
  },
  {
    category: "예방접종",
    rows: [
      { name: "강아지 종합백신", tiers: [{ label: null, price: "30,000원" }] },
      { name: "고양이 종합백신", tiers: [{ label: null, price: "45,000원" }] },
      { name: "광견병 백신", tiers: [{ label: null, price: "30,000원" }] },
      { name: "켄넬코프 백신", tiers: [{ label: null, price: "25,000원" }] },
      { name: "코로나바이러스 백신", tiers: [{ label: null, price: "25,000원" }] },
      { name: "인플루엔자 백신", tiers: [{ label: null, price: "40,000원" }] },
    ],
  },
  {
    category: "혈액검사",
    rows: [
      { name: "전혈구(CBC) 검사비 및 판독료", tiers: [{ label: null, price: "35,000원" }] },
      { name: "혈액화학 검사비 및 판독료 (1항목당)", tiers: [{ label: null, price: "15,000원" }] },
      { name: "전해질 검사비 및 판독료", tiers: [{ label: null, price: "35,000원" }] },
    ],
  },
  {
    category: "영상검사",
    rows: [
      {
        name: "방사선(X-ray) 촬영비 및 판독료",
        tiers: [
          { label: "0~10kg", price: "40,000원" },
          { label: "10~20kg", price: "50,000원" },
          { label: "20~30kg", price: "60,000원" },
        ],
      },
      { name: "초음파 검사비 및 판독료", tiers: [{ label: "전 체중", price: "40,000원" }] },
    ],
  },
  {
    category: "예방 프로그램",
    rows: [
      {
        name: "심장사상충 예방비",
        tiers: [
          { label: "0~11kg", price: "9,000원" },
          { label: "11~22kg", price: "13,000원" },
          { label: "22~44kg", price: "16,000원" },
        ],
      },
      {
        name: "외부기생충 예방비",
        tiers: [
          { label: "0~10kg", price: "16,000원" },
          { label: "10~20kg", price: "22,000원" },
          { label: "20~40kg", price: "25,000원" },
        ],
      },
    ],
  },
];
