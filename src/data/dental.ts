export const DENTAL_CONDITIONS = [
  {
    title: "LPGS",
    subtitle: "림프구성 형질세포성 치은구내염",
    desc: "치아에 붙은 세균(치태)과 바이러스에 대한 면역과민반응으로 잇몸, 목구멍 등 입안에 생기는 염증입니다. 통증이 심해지면 침을 흘리거나 입주변이 지저분해지고, 그루밍을 못해 털이 고르지 못하게 됩니다.",
    image: "/cat-dental/icon-lpgs.jpg",
    pages: Array.from({ length: 6 }, (_, i) => `/cat-dental/lpgs/page-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    title: "FORL",
    subtitle: "고양이 파치세포 흡수성 병변",
    desc: "고양이에게만 발생하는 질환으로, 파치세포(치아를 파괴하는 세포)가 문제를 일으켜 치아가 녹는 질환입니다. 침을 흘리고 침에 피가 섞이거나, 머리를 흔들거나 음식을 먹기 힘들어하기도 합니다.",
    image: "/cat-dental/icon-forl.jpg",
    pages: Array.from({ length: 6 }, (_, i) => `/cat-dental/forl/page-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    title: "Periodontitis",
    subtitle: "치주염",
    desc: "이를 닦지 않으면 치아에 치석이 생기고 그 주변에 치은염 및 치주염이 생깁니다. 육안으로 치석이 보이고 입냄새가 나며, 잇몸이 붉거나 부어있고 아픈 쪽으로는 씹기를 꺼리는 경향이 있습니다.",
    image: "/cat-dental/icon-periodontitis.jpg",
  },
];

export const DENTAL_THERAPIES = [
  {
    emoji: "🦷",
    cause: "치석",
    treatment: "스케일링",
    desc: "쌓인 치석과 세균막을 제거해 잇몸 염증의 원인을 없앱니다.",
  },
  {
    emoji: "💉",
    cause: "면역증강",
    treatment: "인터페론",
    desc: "면역 반응을 조절해 구내염 등 과민 염증을 가라앉힙니다.",
  },
  {
    emoji: "🩹",
    cause: "문제 치아",
    treatment: "발치",
    desc: "통증을 유발하는 손상된 치아를 제거해 통증을 없앱니다.",
  },
  {
    emoji: "💊",
    cause: "잇몸염증",
    treatment: "소염제",
    desc: "붓고 아픈 잇몸의 염증을 약물로 가라앉힙니다.",
  },
];

export const DENTAL_THERAPY_ILLUSTRATION = "/cat-dental/icon-therapy.jpg";

export const DENTAL_RECOVERY = [
  {
    period: "당일",
    points: [
      "체온이 낮아질 수 있어 담요 등으로 따뜻하게 해주세요.",
      "마취 여파로 어지러워할 수 있으니 침대 등 높은 곳은 피해주세요.",
      "속이 메스꺼워 토할 수 있어요. 물은 소량씩 나눠 주고, 사료는 평소의 절반만 급여해주세요.",
    ],
  },
  {
    period: "다음날부터 1주일",
    points: [
      "수술 부위 자극을 막기 위해 이 기간엔 습식 사료만 급여해주세요 (딱딱한 사료 · 간식 금지).",
      "기침, 출혈, 얼굴 부종, 침흘림, 활력 저하가 며칠간 나타날 수 있습니다. 1주일 이상 지속되면 병원에 문의해주세요.",
    ],
  },
  {
    period: "3일 이후",
    points: [
      "처방받은 소염 영양젤을 10일간 발라주세요.",
      "항산화제, 인터페론, 오메가, 유산균 등 처방된 영양제 복용을 시작합니다.",
    ],
  },
  {
    period: "7일 이후",
    points: [
      "남아있는 치아는 양치를 시작해주세요. 치석이 다시 쌓이면 재발할 수 있습니다.",
      "양치가 어려운 경우 치석 제거 기능이 있는 구강청결제나 보조제를 사용해주세요.",
    ],
  },
  {
    period: "이후 꾸준히",
    points: [
      "식사 시간에 침흘림, 이갈이, 얼굴을 심하게 그루밍하거나 흔드는 모습이 있는지 관찰해주세요.",
      "치과 치료 후 증상이 줄어도 내과적 관리가 추가로 필요한 경우가 있습니다.",
      "상부호흡기 감염 예방을 위해 예방접종은 매년 꼭 맞춰주시고, 간식 급여는 최소화해주세요.",
    ],
  },
];
