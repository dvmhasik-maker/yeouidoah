export const CHECKUP_CATEGORIES = [
  {
    title: "기본바이탈",
    items: [
      { name: "체중, 체온, 맥박수, 호흡수", dog: true, cat: true },
      { name: "심폐음 청진", dog: true, cat: true },
      { name: "혈압", dog: true, cat: false },
    ],
  },
  {
    title: "신체검사",
    items: [
      { name: "점막충진시간, 피부탄력도", dog: true, cat: true },
      { name: "비만도 (BCS or FBMI)", dog: true, cat: true },
      { name: "피부종괴 확인, 피모상태 촉진", dog: true, cat: false },
      { name: "슬개골, 십자인대, 고관절, 디스크 증상", dog: true, cat: false },
    ],
  },
  {
    title: "전염병",
    items: [{ name: "심장사상충 성충(Kit.), 자충(MF)", dog: true, cat: true }],
  },
  {
    title: "치과",
    items: [
      { name: "구강검사", dog: true, cat: true },
      { name: "Q-ray 스캔", dog: true, cat: true },
    ],
  },
  {
    title: "안과",
    items: [
      { name: "안구검사", dog: true, cat: false },
      { name: "시신경반응", dog: true, cat: false },
      { name: "눈물량(STT)", dog: true, cat: false },
      { name: "안압", dog: true, cat: false },
    ],
  },
  {
    title: "대소변",
    items: [
      {
        name: "요스틱 (10종: Blood, Bilirubin, Urobilinogen, Ketone, Protein, Nitrate, Glucose, pH, SG, Leukocyte)",
        dog: true,
        cat: true,
      },
      { name: "요비중", dog: true, cat: true },
      { name: "소변현미경 (직접, 염색)", dog: true, cat: true },
      { name: "대변현미경 (직접, 염색)", dog: true, cat: true },
    ],
  },
  {
    title: "혈액",
    items: [
      { name: "혈구 검사(CBC)", dog: true, cat: true },
      {
        name: "혈청 검사 (15종: ALB, ALB/GLOB, ALKP, ALT, BUN, BUN/CREA, Ca, CHOL, CREA, GGT, GLOB, GLU, PHOS, TBIL, TP)",
        dog: true,
        cat: true,
      },
      { name: "전해질 검사 (4종: Cl, K, Na, Na/K)", dog: true, cat: true },
    ],
  },
  {
    title: "효소",
    items: [
      { name: "전신 염증(CRP or SAA)", dog: true, cat: true },
      { name: "신부전조기진단(SDMA)", dog: true, cat: true },
      { name: "심장위험평가(proBNP)", dog: false, cat: true },
    ],
  },
  {
    title: "영상",
    items: [
      { name: "흉부 방사선", dog: true, cat: true },
      { name: "복부 방사선", dog: true, cat: true },
      { name: "앞다리 방사선", dog: true, cat: true },
      { name: "뒷다리 방사선", dog: true, cat: true },
      { name: "머리 방사선", dog: true, cat: false },
      { name: "복부 초음파", dog: true, cat: true },
      { name: "심장정밀 초음파", dog: true, cat: false },
    ],
  },
  {
    title: "결과해설",
    items: [{ name: "건강검진 결과서", dog: true, cat: true }],
  },
];

export const CHECKUP_NOTES = [
  {
    title: "검진 소요시간 · 예약제",
    desc: "검진 소요시간은 3시간 내외이며, 검진프로그램은 예약제로 운영됩니다.",
  },
  {
    title: "내원 전 9시간 이상 금식",
    desc: "물은 급여 가능하며, 평소 복용약은 복용 후 내원해 주세요.",
  },
  {
    title: "대소변 채취해오시면 시간 단축",
    desc: "24시간 이내의 대소변 가능하며, 소변은 냉장보관을 권장합니다.",
  },
  {
    title: "예민한 아이는 안정제 복용 권장",
    desc: "예약 후 검진 하루 전까지 병원 내원 시 처방 가능하며, 검진 당일 내원 2시간 전 복용합니다.",
  },
  {
    title: "결과 해설은 7일 후 진행",
    desc: "담당수의사가 1:1로 약 1시간 동안 검진결과서를 바탕으로 자세히 설명해드리며, 보호자만 내원도 가능합니다.",
  },
  {
    title: "스케일링 추가 시 오전예약만 가능",
    desc: "스케일링을 함께 진행하실 경우 예약 시 미리 말씀해 주세요.",
  },
];

export const CHECKUP_OPTIONS = [
  { title: "호르몬", desc: "부신피질(쿠싱, 에디슨), 갑상선" },
  { title: "알러지", desc: "72종, 131종, 131+98종" },
  { title: "PCR", desc: "호흡기 질병, 소화기 질병" },
  { title: "백내장", desc: "" },
  {
    title: "유전성 질병",
    desc: "",
    breed: [
      { species: "강아지", diseases: "구리중독(베들링턴 테리어), 진행성 망막위축증(코카, 리트리버, 푸들, 요크셔)" },
      { species: "고양이", diseases: "비대성 심근증(랙돌, 메인쿤), 골이형성증(스코티쉬 폴드)" },
    ],
  },
  { title: "스케일링", desc: "예약 시 미리 말씀해주세요" },
];
