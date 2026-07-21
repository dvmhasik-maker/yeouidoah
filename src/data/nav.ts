export const NAV_ITEMS = [
  { label: "여의도 동물병원 소개", href: "/about" },
  { label: "진료안내", href: "/treatment" },
  {
    label: "특화진료",
    href: "/specialty",
    children: [
      { label: "건강검진", href: "/specialty/checkup" },
      { label: "심장검진", href: "/specialty/cardiac" },
      { label: "고양이 치과", href: "/specialty/cat-dental" },
    ],
  },
  { label: "칼럼", href: "/column" },
  { label: "진료비용", href: "/fees" },
];

export const CLINIC = {
  name: "여의도 동물병원",
  nameEn: "Yeouido Animal Clinic",
  phone: "02-783-7580",
  address: "서울 영등포구 국제금융로 108, 미라클빌딩 4층",
  mapLat: 37.5187504,
  mapLng: 126.9335477,
  naverPlaceUrl: "https://map.naver.com/p/entry/place/34490360",
  naverMapClientId: "1ezvm4plne",
  kakaoChannelUrl: "https://pf.kakao.com/_FLhdn",
  kakaoChatUrl: "https://pf.kakao.com/_FLhdn/chat",
  hours: [
    { label: "월~토", value: "10:00 - 19:30" },
    { label: "일요일", value: "13:00 - 18:30" },
    { label: "점심시간", value: "12:00 - 13:00" },
  ],
};
