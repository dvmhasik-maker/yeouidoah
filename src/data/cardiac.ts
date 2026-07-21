export const CARDIAC_CHECKS = [
  { title: "문진 · 청진", desc: "병력 청취와 청진을 통해 심잡음 유무와 등급을 평가합니다." },
  { title: "흉부 방사선", desc: "심장 크기와 폐부종, 흉수 등 심부전 징후를 확인합니다." },
  { title: "심전도 검사 (ECG)", desc: "부정맥 여부와 심장 리듬 이상을 확인합니다." },
  { title: "심장초음파 (에코)", desc: "판막, 심근, 심박출량을 정밀하게 평가합니다." },
  { title: "NT-proBNP 혈액검사", desc: "심장에 가해지는 스트레스 정도를 수치로 확인합니다." },
  { title: "혈압 측정", desc: "고혈압으로 인한 심장 부담 여부를 확인합니다." },
];

export const CARDIAC_CANDIDATES = [
  { emoji: "🩺", title: "심잡음이 들리는 경우", desc: "진료 중 청진에서 심잡음이 확인된 경우" },
  { emoji: "💨", title: "의심 증상이 있는 경우", desc: "기침, 호흡곤란, 운동 후 쉽게 지치는 증상" },
  { emoji: "⏳", title: "시니어 반려동물", desc: "7세 이상 심장질환 위험이 높아지는 시기" },
  { emoji: "🧬", title: "호발 견종 · 묘종", desc: "품종별로 발생 빈도가 높은 심장질환이 있는 경우" },
];

export const CARDIAC_PROGRAMS = [
  {
    image: "/cardio/vhs-xray-analysis.jpg",
    title: "흉부 방사선 정밀 분석",
    desc: "VHS(심장 크기 지수) · VLAS(좌심방 확장 지수)를 분석 프로그램으로 정밀 측정해, 심장이 커졌는지를 감각이 아닌 객관적인 수치로 확인합니다.",
  },
  {
    image: "/cardio/echo-report-sample.jpg",
    title: "심장초음파 결과 분석",
    desc: "초음파로 측정한 수치를 국제 가이드라인(ACVIM) 기준과 비교해 분석결과지로 정리하고, 보호자님께 명확한 자료와 함께 소견을 설명해 드립니다.",
  },
];

export const CARDIAC_BREEDS = [
  {
    species: "강아지 · 승모판폐쇄부전증(MMVD)",
    diseases: "말티즈, 푸들, 치와와, 요크셔테리어, 시츄 등 소형 · 노령견",
  },
  {
    species: "고양이 · 비대성심근증(HCM)",
    diseases: "랙돌, 메인쿤, 브리티시숏헤어, 스코티쉬폴드 등",
  },
];
