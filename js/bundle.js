// Standalone bundled script for direct file:/// execution
(() => {
// NgÃ¢n hÃ ng cÃ¢u há»i tráº¯c nghiá»‡m Ä‘a táº§ng phÃ¢n tÃ­ch Báº£n Thá»ƒ TÆ°Æ¡ng Lai
// 4 Cháº·ng: Danh tÃ­nh & Xuáº¥t phÃ¡t Ä‘iá»ƒm -> TÃ­nh cÃ¡ch & TÆ° duy -> ThÃ¢n pháº­n & GiÃ¡ trá»‹ -> KhÃ¡t vá»ng TÆ°Æ¡ng lai

const STAGES = [
  {
    id: 1,
    title: "Cháº·ng 1: Danh TÃ­nh & Xuáº¥t PhÃ¡t Äiá»ƒm",
    description: "Nháº­n diá»‡n gá»‘c rá»… ná»™i táº¡i, bá»‘i cáº£nh hiá»‡n táº¡i vÃ  Ä‘á»™ng lá»±c thÃºc Ä‘áº©y báº¡n má»—i sá»›m thá»©c dáº­y.",
    icon: "user-check"
  },
  {
    id: 2,
    title: "Cháº·ng 2: TÃ­nh CÃ¡ch & Phong CÃ¡ch TÆ° Duy",
    description: "Giáº£i mÃ£ cÃ¡ch nÃ£o bá»™ báº¡n pháº£n á»©ng trÆ°á»›c biáº¿n sá»‘, Ã¡p lá»±c, sÃ¡ng táº¡o vÃ  sá»± kiÃªn Ä‘á»‹nh.",
    icon: "brain-circuit"
  },
  {
    id: 3,
    title: "Cháº·ng 3: ThÃ¢n Pháº­n, Vá»‹ Tháº¿ & GiÃ¡ Trá»‹ Cá»‘t LÃµi",
    description: "XÃ¡c Ä‘á»‹nh chuáº©n má»±c thÃ nh cÃ´ng, vai trÃ² xÃ£ há»™i vÃ  nhá»¯ng Ä‘iá»u báº¡n tuyá»‡t Ä‘á»‘i khÃ´ng thá»a hiá»‡p.",
    icon: "shield-star"
  },
  {
    id: 4,
    title: "Cháº·ng 4: Táº§m NhÃ¬n & KhÃ¡t Vá»ng TÆ°Æ¡ng Lai",
    description: "PhÃ³ng chiáº¿u bá»‘i cáº£nh 5 - 10 nÄƒm tá»›i vÃ  dáº¥u áº¥n báº¡n muá»‘n kháº¯c ghi trong cuá»™c Ä‘á»i nÃ y.",
    icon: "sparkles"
  }
];

const QUESTIONS = [
  // CHáº¶NG 1: DANH TÃNH & XUáº¤T PHÃT ÄIá»‚M
  {
    id: "q1",
    stage: 1,
    title: "Khi Ä‘Æ°á»£c há»i 'Báº¡n lÃ  ai?', Ä‘iá»u Ä‘áº§u tiÃªn Ä‘á»‹nh hÃ¬nh danh tÃ­nh cá»§a báº¡n trong suy nghÄ© lÃ  gÃ¬?",
    subtitle: "HÃ£y chá»n cÃ¢u tráº£ lá»i mÃ´ táº£ chÃ¢n thá»±c nháº¥t cáº£m xÃºc tá»± thÃ¢n cá»§a báº¡n hiá»‡n nay.",
    options: [
      {
        text: "Má»™t ngÆ°á»i khÃ´ng ngá»«ng tÃ¬m kiáº¿m Ã½ tÆ°á»Ÿng má»›i vÃ  kiáº¿n táº¡o nhá»¯ng thá»© Ä‘á»™c báº£n chÆ°a tá»«ng cÃ³.",
        desc: "Æ¯u tiÃªn sá»± khÃ¡c biá»‡t, tá»± do biá»ƒu Ä‘áº¡t vÃ  báº£n sáº¯c riÃªng.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "Má»™t nhÃ  thá»±c thi bá»n bá»‰, thÃ­ch láº­p káº¿ hoáº¡ch rÃµ rÃ ng vÃ  giáº£i quyáº¿t bÃ i toÃ¡n thá»±c táº¿ báº±ng káº¿t quáº£ Ä‘o Ä‘áº¿m Ä‘Æ°á»£c.",
        desc: "Æ¯u tiÃªn tÃ­nh ká»· luáº­t, sá»± tin cáº­y vÃ  hiá»‡u suáº¥t vÆ°á»£t trá»™i.",
        scores: { execution: 3, wealth: 2, vision: 1 }
      },
      {
        text: "Má»™t ngÆ°á»i dáº«n dáº¯t báº©m sinh, luÃ´n khao khÃ¡t quy tá»¥ con ngÆ°á»i vÃ  táº¡o ra áº£nh hÆ°á»Ÿng lá»›n lÃªn cá»™ng Ä‘á»“ng.",
        desc: "Æ¯u tiÃªn quyá»n lá»±c tÃ­ch cá»±c, truyá»n cáº£m há»©ng vÃ  xÃ¢y dá»±ng Ä‘á»™i ngÅ©.",
        scores: { influence: 3, vision: 2, execution: 1 }
      },
      {
        text: "Má»™t tÃ¢m há»“n tÃ¬m kiáº¿m sá»± bÃ¬nh an, cÃ¢n báº±ng ná»™i tÃ¢m, trÃ¢n trá»ng gia Ä‘Ã¬nh vÃ  sá»©c khá»e toÃ n diá»‡n.",
        desc: "Æ¯u tiÃªn an láº¡c, hÃ i hÃ²a vÃ  sá»‘ng trá»n váº¹n tá»«ng khoáº£nh kháº¯c hiá»‡n táº¡i.",
        scores: { wellBeing: 3, influence: 1, innovation: 1 }
      }
    ]
  },
  {
    id: "q2",
    stage: 1,
    title: "ÄÃ¢u lÃ  Ä‘á»™ng lá»±c ngáº§m sÃ¢u sáº¯c nháº¥t thÃºc Ä‘áº©y báº¡n ná»— lá»±c má»—i ngÃ y?",
    subtitle: "Thá»© lÃ m báº¡n thá»©c dáº­y lÃºc 6h sÃ¡ng hoáº·c trÄƒn trá»Ÿ lÃºc ná»­a Ä‘Ãªm.",
    options: [
      {
        text: "Äá»™c láº­p tuyá»‡t Ä‘á»‘i vá» tÃ i chÃ­nh vÃ  tá»± do lÃ m chá»§ 100% quá»¹ thá»i gian cá»§a mÃ¬nh.",
        desc: "KhÃ´ng bá»‹ rÃ ng buá»™c bá»Ÿi há»£p Ä‘á»“ng cá»‘ Ä‘á»‹nh hay cáº¥p báº­c cÃ´ng sá»Ÿ.",
        scores: { wealth: 3, execution: 2, innovation: 1 }
      },
      {
        text: "LÃ m chá»§ má»™t cÃ´ng nghá»‡ Ä‘á»™t phÃ¡ hoáº·c giáº£i mÃ£ nhá»¯ng tri thá»©c Ä‘á»‰nh cao phá»©c táº¡p.",
        desc: "Niá»m say mÃª khoa há»c, ká»¹ thuáº­t vÃ  xÃ¢y dá»±ng há»‡ thá»‘ng tÃ¢n tiáº¿n.",
        scores: { innovation: 3, execution: 2, vision: 1 }
      },
      {
        text: "Äá»ƒ láº¡i má»™t di sáº£n, cá»©u giÃºp hoáº·c nÃ¢ng táº§m cháº¥t lÆ°á»£ng cuá»™c sá»‘ng cho hÃ ng nghÃ¬n con ngÆ°á»i.",
        desc: "Ã nghÄ©a cuá»™c Ä‘á»i gáº¯n liá»n vá»›i sá»± cá»‘ng hiáº¿n vÃ  giÃ¡ trá»‹ trao Ä‘i.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "XÃ¢y dá»±ng má»™t 'Ä‘áº¿ cháº¿' riÃªng - má»™t tá»• chá»©c, cÃ´ng ty hay phong trÃ o mang Ä‘áº­m dáº¥u áº¥n cÃ¡ nhÃ¢n.",
        desc: "Tham vá»ng thá»‘ng lÄ©nh thá»‹ trÆ°á»ng vÃ  dáº«n dáº¯t má»™t sá»© má»‡nh lá»›n.",
        scores: { vision: 3, execution: 2, wealth: 2 }
      }
    ]
  },
  {
    id: "q3",
    stage: 1,
    title: "Xuáº¥t phÃ¡t Ä‘iá»ƒm vÃ  lá»£i tháº¿ cáº¡nh tranh tá»± nhiÃªn máº¡nh nháº¥t cá»§a báº¡n hiá»‡n táº¡i lÃ  gÃ¬?",
    subtitle: "TÃ i nÄƒng thiÃªn báº©m hoáº·c ká»¹ nÄƒng báº¡n há»c nhanh hÆ¡n ngÆ°á»i bÃ¬nh thÆ°á»ng.",
    options: [
      {
        text: "TÆ° duy phÃ¢n tÃ­ch sáº¯c bÃ©n, nhÃ¬n tháº¥y quy luáº­t áº©n sau cÃ¡c con sá»‘ vÃ  dá»¯ liá»‡u.",
        desc: "Kháº£ nÄƒng chiáº¿n lÆ°á»£c, giáº£i pháº«u váº¥n Ä‘á» vÃ  dá»± Ä‘oÃ¡n logic.",
        scores: { vision: 2, execution: 2, wealth: 2 }
      },
      {
        text: "Kháº£ nÄƒng tháº¥u hiá»ƒu tÃ¢m lÃ½, láº¯ng nghe sÃ¢u sáº¯c vÃ  thuyáº¿t phá»¥c ngÆ°á»i khÃ¡c.",
        desc: "TrÃ­ tuá»‡ cáº£m xÃºc (EQ) cao, dá»… dÃ ng káº¿t ná»‘i vÃ  táº¡o thiá»‡n cáº£m.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Sá»©c bá»n chá»‹u táº£i, Ã½ chÃ­ 'nÃ³i lÃ  lÃ m', khÃ´ng ngáº¡i lao vÃ o viá»‡c khÃ³ vÃ  hoÃ n thÃ nh Ä‘áº¿n cÃ¹ng.",
        desc: "TÃ­nh kiÃªn Ä‘á»‹nh thÃ©p vÃ  nÄƒng lá»±c thá»±c thi khÃ´ng ngáº§n ngáº¡i.",
        scores: { execution: 3, wealth: 1, wellBeing: 1 }
      },
      {
        text: "TrÃ­ tÆ°á»Ÿng tÆ°á»£ng khÃ´ng giá»›i háº¡n, nháº¡y cáº£m vá»›i cÃ¡i Ä‘áº¹p vÃ  xu hÆ°á»›ng tháº©m má»¹/cÃ´ng nghá»‡ má»›i.",
        desc: "TÆ° duy sÃ¡ng táº¡o liÃªn ngÃ nh, kháº£ nÄƒng 'káº¿t ná»‘i nhá»¯ng dáº¥u cháº¥m'.",
        scores: { innovation: 3, vision: 2, influence: 1 }
      }
    ]
  },
  {
    id: "q4",
    stage: 1,
    title: "Má»‘i quan há»‡ cá»§a báº¡n vá»›i sá»± an toÃ n vÃ  vÃ¹ng an toÃ n (Comfort Zone)?",
    subtitle: "CÃ¡ch báº¡n Ä‘á»‹nh vá»‹ mÃ¬nh giá»¯a dÃ²ng xoÃ¡y báº¥t Ä‘á»‹nh cá»§a thá»i Ä‘áº¡i.",
    options: [
      {
        text: "Cáº£m tháº¥y bá»“n chá»“n náº¿u á»Ÿ trong vÃ¹ng an toÃ n quÃ¡ lÃ¢u; thÃ­ch máº¡o hiá»ƒm cÃ³ tÃ­nh toÃ¡n.",
        desc: "Sáºµn sÃ ng Ä‘Ã¡nh cÆ°á»£c lá»›n Ä‘á»ƒ Ä‘á»•i láº¥y bÆ°á»›c nháº£y vá»t táº§m cá»¡.",
        scores: { vision: 3, innovation: 2, wealth: 1 }
      },
      {
        text: "LuÃ´n cáº§n má»™t táº¥m Ä‘á»‡m vá»¯ng cháº¯c trÆ°á»›c khi má»Ÿ rá»™ng tá»«ng bÆ°á»›c tháº­n trá»ng.",
        desc: "Æ¯u tiÃªn quáº£n trá»‹ rá»§i ro, dá»± phÃ²ng tÃ i chÃ­nh vÃ  phÃ¡t triá»ƒn bá»n vá»¯ng.",
        scores: { execution: 2, wealth: 2, wellBeing: 2 }
      },
      {
        text: "ThÃ­ch á»©ng linh hoáº¡t nhÆ° dÃ²ng nÆ°á»›c: NÆ¡i nÃ o cÃ³ tá»± do vÃ  khÃ´ng gian sÃ¡ng táº¡o, nÆ¡i Ä‘Ã³ lÃ  nhÃ .",
        desc: "KhÃ´ng quan trá»ng sá»± á»•n Ä‘á»‹nh hÃ¬nh thá»©c, miá»…n lÃ  Ä‘Æ°á»£c tá»± chá»§ tráº£i nghiá»‡m.",
        scores: { innovation: 2, wellBeing: 2, wealth: 1 }
      },
      {
        text: "An toÃ n thá»±c sá»± lÃ  khi tÃ´i kiá»ƒm soÃ¡t Ä‘Æ°á»£c há»‡ thá»‘ng vÃ  cÃ³ Ä‘á»§ Ä‘á»“ng minh trung thÃ nh.",
        desc: "Táº¡o láº­p sá»± an toÃ n cho chÃ­nh mÃ¬nh vÃ  má»i ngÆ°á»i xung quanh báº±ng vá»‹ tháº¿ lÃ£nh Ä‘áº¡o.",
        scores: { influence: 2, vision: 2, execution: 2 }
      }
    ]
  },

  // CHáº¶NG 2: TÃNH CÃCH & PHONG CÃCH TÆ¯ DUY
  {
    id: "q5",
    stage: 2,
    title: "Khi Ä‘á»‘i máº·t vá»›i má»™t khá»§ng hoáº£ng lá»›n báº¥t ngá» (tháº¥t báº¡i dá»± Ã¡n, biáº¿n cá»‘ tÃ i chÃ­nh/sá»± nghiá»‡p), báº¡n sáº½:",
    subtitle: "Pháº£n á»©ng báº£n nÄƒng trong nhá»¯ng giá» phÃºt ngáº·t nghÃ¨o nháº¥t.",
    options: [
      {
        text: "Giá»¯ Ä‘áº§u láº¡nh, láº­p tá»©c phÃ¢n tÃ­ch nguyÃªn nhÃ¢n gá»‘c rá»… vÃ  cÆ¡ cáº¥u láº¡i toÃ n bá»™ phÆ°Æ¡ng Ã¡n hÃ nh Ä‘á»™ng.",
        desc: "Logic lÃ  vÅ© khÃ­ tá»‘i thÆ°á»£ng, khÃ´ng Ä‘á»ƒ cáº£m xÃºc láº¥n Ã¡t quyáº¿t Ä‘á»‹nh.",
        scores: { execution: 2, vision: 2, wealth: 2 }
      },
      {
        text: "Äá»©ng lÃªn trÆ°á»›c táº­p thá»ƒ, sá»‘c láº¡i tinh tháº§n má»i ngÆ°á»i vÃ  biáº¿n nguy cÆ¡ thÃ nh Ä‘á»™ng lá»±c chuyá»ƒn mÃ¬nh.",
        desc: "Truyá»n lá»­a, gÃ¡nh vÃ¡c trÃ¡ch nhiá»‡m vÃ  Ä‘á»‹nh hÆ°á»›ng lá»‘i thoÃ¡t chung.",
        scores: { influence: 3, vision: 2, execution: 1 }
      },
      {
        text: "Nhanh chÃ³ng 'xoay trá»¥c' (pivot), nghÄ© ra má»™t giáº£i phÃ¡p khÃ¡c thÆ°á»ng, lÃ¡ch khá»i lá»‘i mÃ²n.",
        desc: "Xem khá»§ng hoáº£ng lÃ  cÆ¡ há»™i vÃ ng Ä‘á»ƒ phÃ¡ vá»¡ luáº­t chÆ¡i cÅ©.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "LÃ¹i láº¡i má»™t nhá»‹p Ä‘á»ƒ tÄ©nh tÃ¢m, chÄƒm sÃ³c tinh tháº§n, trÃ¡nh pháº£n á»©ng bá»‘c Ä‘á»“ng gÃ¢y thÃªm tá»•n thÆ°Æ¡ng.",
        desc: "Báº£o tá»“n nÄƒng lÆ°á»£ng ná»™i táº¡i trÆ°á»›c khi tÃ¬m kiáº¿m sá»± cÃ¢n báº±ng phá»¥c há»“i.",
        scores: { wellBeing: 3, execution: 1, influence: 1 }
      }
    ]
  },
  {
    id: "q6",
    stage: 2,
    title: "MÃ´i trÆ°á»ng lÃ m viá»‡c nÃ o kÃ­ch hoáº¡t tá»‘i Ä‘a 100% cÃ´ng suáº¥t trÃ­ tuá»‡ cá»§a báº¡n?",
    subtitle: "KhÃ´ng gian giÃºp báº¡n bÆ°á»›c vÃ o tráº¡ng thÃ¡i dÃ²ng cháº£y (Flow State).",
    options: [
      {
        text: "Má»™t khÃ´ng gian tÄ©nh láº·ng, Ä‘á»™c láº­p, nÆ¡i báº¡n cÃ³ hÃ ng giá» Deep Work liá»n máº¡ch khÃ´ng ai quáº¥y ráº§y.",
        desc: "Tá»‘i Ä‘a hÃ³a nÄƒng suáº¥t chuyÃªn sÃ¢u cá»§a cÃ¡ nhÃ¢n.",
        scores: { execution: 2, innovation: 2, wellBeing: 1 }
      },
      {
        text: "Má»™t 'War Room' sÃ´i Ä‘á»™ng, há»™i tá»¥ nhá»¯ng bá»™ nÃ£o tinh hoa cÃ¹ng tranh luáº­n náº£y lá»­a vÃ  ra quyáº¿t Ä‘á»‹nh tá»‘c Ä‘á»™ cao.",
        desc: "Náº¡p nÄƒng lÆ°á»£ng tá»« sá»± cá»™ng hÆ°á»Ÿng trÃ­ tuá»‡ vÃ  nhá»‹p Ä‘á»™ kháº©n trÆ°Æ¡ng.",
        scores: { vision: 3, influence: 2, wealth: 1 }
      },
      {
        text: "Báº¥t cá»© Ä‘Ã¢u: Má»™t quÃ¡n cÃ  phÃª bÃªn bÃ£i biá»ƒn, má»™t gÃ³c phÃ²ng á»Ÿ Kyoto, chá»‰ cáº§n cÃ³ laptop vÃ  internet tá»‘c Ä‘á»™ cao.",
        desc: "Tá»± do tuyá»‡t Ä‘á»‘i vá» Ä‘á»‹a lÃ½, khÃ´ng ranh giá»›i cÃ´ng sá»Ÿ.",
        scores: { wealth: 2, innovation: 2, wellBeing: 2 }
      },
      {
        text: "Má»™t mÃ´i trÆ°á»ng áº¥m Ã¡p, nhÃ¢n vÄƒn, nÆ¡i má»i ngÆ°á»i quan tÃ¢m nÃ¢ng Ä‘á»¡ nhau cÃ¹ng tiáº¿n bá»™ má»—i ngÃ y.",
        desc: "VÄƒn hÃ³a tin cáº­y, an toÃ n tÃ¢m lÃ½ vÃ  gáº¯n káº¿t sÃ¢u sáº¯c.",
        scores: { wellBeing: 3, influence: 2, vision: 1 }
      }
    ]
  },
  {
    id: "q7",
    stage: 2,
    title: "Báº¡n Ä‘Ã¡nh giÃ¡ tháº¿ nÃ o vá» cÃ¡ch tiáº¿p cáº­n cá»§a mÃ¬nh vá»›i cÃ´ng nghá»‡ má»›i (nhÆ° TrÃ­ tuá»‡ nhÃ¢n táº¡o - AI)?",
    subtitle: "ThÃ¡i Ä‘á»™ cá»§a báº¡n Ä‘á»‘i vá»›i lÃ n sÃ³ng Ä‘á»•i má»›i cÃ´ng nghá»‡ hiá»‡n nay.",
    options: [
      {
        text: "TÃ´i chá»§ Ä‘á»™ng tÃ¬m hiá»ƒu sÃ¢u vá» nguyÃªn lÃ½ cá»‘t lÃµi, viáº¿t prompt phá»©c táº¡p hoáº·c muá»‘n lÃ m chá»§ thuáº­t toÃ¡n.",
        desc: "Xem cÃ´ng nghá»‡ lÃ  Ä‘Ã´i cÃ¡nh Ä‘á»ƒ má»Ÿ khÃ³a tiá»m nÄƒng vÃ´ háº¡n.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "TÃ´i dÃ¹ng AI nhÆ° má»™t Ä‘Ã²n báº©y tá»‘i Æ°u hÃ³a quy trÃ¬nh, tá»± Ä‘á»™ng hÃ³a Ä‘á»ƒ cáº¯t giáº£m chi phÃ­ vÃ  nhÃ¢n bá»™i lá»£i nhuáº­n.",
        desc: "Táº­p trung vÃ o hiá»‡u quáº£ kinh táº¿ vÃ  nÄƒng suáº¥t dÃ²ng tiá»n.",
        scores: { wealth: 3, execution: 2, vision: 1 }
      },
      {
        text: "TÃ´i quan tÃ¢m Ä‘áº¿n tÃ¡c Ä‘á»™ng xÃ£ há»™i cá»§a cÃ´ng nghá»‡: LÃ m sao Ä‘á»ƒ cÃ´ng nghá»‡ phá»¥c vá»¥ con ngÆ°á»i mÃ  khÃ´ng Ä‘Ã¡nh máº¥t nhÃ¢n tÃ­nh.",
        desc: "GÃ³c nhÃ¬n nhÃ¢n vÄƒn, Ä‘áº¡o Ä‘á»©c vÃ  triáº¿t há»c trong ká»· nguyÃªn sá»‘.",
        scores: { wellBeing: 2, influence: 2, vision: 2 }
      },
      {
        text: "TÃ´i dÃ¹ng nÃ³ Ä‘á»ƒ khuáº¿ch Ä‘áº¡i thÃ´ng Ä‘iá»‡p vÃ  káº¿t ná»‘i vá»›i khÃ¡n giáº£/cá»™ng Ä‘á»“ng rá»™ng lá»›n hÆ¡n.",
        desc: "CÃ´ng nghá»‡ lÃ  chiáº¿c loa phÃ³ng thanh cho táº§m áº£nh hÆ°á»Ÿng cÃ¡ nhÃ¢n.",
        scores: { influence: 3, innovation: 1, vision: 1 }
      }
    ]
  },
  {
    id: "q8",
    stage: 2,
    title: "Khi pháº£i lá»±a chá»n giá»¯a má»™t cÆ¡ há»™i an toÃ n (lÆ°Æ¡ng cao á»•n Ä‘á»‹nh) vÃ  má»™t canh báº¡c khá»Ÿi nghiá»‡p (tháº¯ng lá»›n hoáº·c máº¥t tráº¯ng), báº¡n thÆ°á»ng nghiÃªng vá»:",
    subtitle: "Kháº©u vá»‹ máº¡o hiá»ƒm Ä‘Ã­ch thá»±c cá»§a báº¡n.",
    options: [
      {
        text: "Canh báº¡c máº¡o hiá»ƒm! Cuá»™c Ä‘á»i quÃ¡ ngáº¯n Ä‘á»ƒ sá»‘ng má»™t cuá»™c Ä‘á»i trung bÃ¬nh nháº¡t nháº½o.",
        desc: "Cháº¥p nháº­n Ä‘au thÆ°Æ¡ng ngáº¯n háº¡n Ä‘á»ƒ sÄƒn Ä‘uá»•i pháº§n thÆ°á»Ÿng phi Ä‘á»‘i xá»©ng.",
        scores: { vision: 3, wealth: 2, innovation: 1 }
      },
      {
        text: "Chá»n sá»± an toÃ n Ä‘á»ƒ tÃ­ch lÅ©y ná»n táº£ng tÃ i chÃ­nh, sau Ä‘Ã³ dÃ¹ng 20% vá»‘n Ä‘áº§u tÆ° máº¡o hiá»ƒm thÃ´ng minh.",
        desc: "Chiáº¿n lÆ°á»£c Barbell (Quáº£ táº¡) cá»§a Nassim Taleb: Vá»«a phÃ²ng thá»§ kiÃªn cá»‘, vá»«a táº¥n cÃ´ng cÆ¡ há»™i.",
        scores: { wealth: 3, execution: 2, wellBeing: 1 }
      },
      {
        text: "KhÃ´ng chá»n cáº£ hai; tÃ´i chá»n con Ä‘Æ°á»ng tá»± do lÃ m nhá»¯ng dá»± Ã¡n mÃ¬nh Ä‘am mÃª dÃ¹ thu nháº­p lÃªn xuá»‘ng.",
        desc: "Æ¯u tiÃªn tá»‘i thÆ°á»£ng lÃ  quyá»n tá»± quyáº¿t (Autonomy) chá»© khÃ´ng pháº£i quy mÃ´ tiá»n tá»‡.",
        scores: { innovation: 2, wellBeing: 3, wealth: 1 }
      },
      {
        text: "Chá»n nÆ¡i nÃ o cho tÃ´i cÆ¡ há»™i gáº·p gá»¡ nhá»¯ng ngÆ°á»i tháº§y vÄ© Ä‘áº¡i vÃ  má»Ÿ rá»™ng vÃ²ng trÃ²n áº£nh hÆ°á»Ÿng.",
        desc: "Vá»‘n xÃ£ há»™i vÃ  tráº£i nghiá»‡m lÃ£nh Ä‘áº¡o quÃ½ giÃ¡ hÆ¡n lá»£i tá»©c trÆ°á»›c máº¯t.",
        scores: { influence: 3, vision: 2, execution: 1 }
      }
    ]
  },

  // CHáº¶NG 3: THÃ‚N PHáº¬N, Vá»Š THáº¾ & GIÃ TRá»Š Cá»T LÃ•I
  {
    id: "q9",
    stage: 3,
    title: "ThÆ°á»›c Ä‘o nÃ o pháº£n Ã¡nh chÃ­nh xÃ¡c nháº¥t 'ThÃ nh CÃ´ng' theo Ä‘á»‹nh nghÄ©a chÃ¢n tháº­t cá»§a riÃªng báº¡n?",
    subtitle: "ThÆ°á»›c Ä‘o khÃ´ng bá»‹ áº£nh hÆ°á»Ÿng bá»Ÿi ká»³ vá»ng cá»§a cha máº¹ hay máº¡ng xÃ£ há»™i.",
    options: [
      {
        text: "TÃ i sáº£n rÃ²ng lá»›n, dÃ²ng tiá»n thá»¥ Ä‘á»™ng dá»“i dÃ o, tá»± do tÃ i chÃ­nh trÆ°á»›c tuá»•i 40.",
        desc: "Tiá»n báº¡c lÃ  thÆ°á»›c Ä‘o cá»§a giÃ¡ trá»‹ báº¡n táº¡o ra vÃ  chÃ¬a khÃ³a má»Ÿ má»i cÃ¡nh cá»­a tá»± do.",
        scores: { wealth: 3, execution: 2, vision: 1 }
      },
      {
        text: "ÄÆ°á»£c cÃ´ng nháº­n lÃ  báº­c tháº§y tinh hoa sá»‘ má»™t trong chuyÃªn mÃ´n hoáº·c lÄ©nh vá»±c báº¡n theo Ä‘uá»•i.",
        desc: "Sá»± tÃ´n trá»ng tá»« giá»›i chuyÃªn mÃ´n vÃ  nhá»¯ng tÃ¡c pháº©m Ä‘á»ƒ Ä‘á»i.",
        scores: { innovation: 3, execution: 2, vision: 1 }
      },
      {
        text: "HÃ ng triá»‡u ngÆ°á»i Ä‘Æ°á»£c truyá»n cáº£m há»©ng, thay Ä‘á»•i tÆ° duy vÃ  cÃ³ cuá»™c sá»‘ng tá»‘t Ä‘áº¹p hÆ¡n nhá» báº¡n.",
        desc: "Sá»©c áº£nh hÆ°á»Ÿng tÃ­ch cá»±c vÃ  tÃ¬nh yÃªu thÆ°Æ¡ng cá»§a cá»™ng Ä‘á»“ng.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Má»™t tÃ¢m trÃ­ an nhiÃªn, khÃ´ng lo Ã¢u, ngá»§ ngon má»—i tá»‘i, cÃ³ thá»i gian bÃªn ngÆ°á»i thÆ°Æ¡ng yÃªu vÃ  cÆ¡ thá»ƒ khá»e máº¡nh.",
        desc: "Háº¡nh phÃºc Ä‘Ã­ch thá»±c náº±m á»Ÿ sá»± cÃ¢n báº±ng vÃ  bÃ¬nh yÃªn ná»™i táº¡i.",
        scores: { wellBeing: 3, influence: 1, wealth: 1 }
      }
    ]
  },
  {
    id: "q10",
    stage: 3,
    title: "VÃ²ng trÃ²n xÃ£ há»™i (Network) lÃ½ tÆ°á»Ÿng mÃ  báº¡n muá»‘n xÃ¢y dá»±ng vÃ  duy trÃ¬ lÃ  gÃ¬?",
    subtitle: "Báº¡n lÃ  trung bÃ¬nh cá»™ng cá»§a 5 ngÆ°á»i báº¡n dÃ nh nhiá»u thá»i gian nháº¥t.",
    options: [
      {
        text: "VÃ²ng trÃ²n háº¹p cÃ¡c nhÃ  sÃ¡ng láº­p, nhÃ  Ä‘áº§u tÆ° lá»›n vÃ  cÃ¡c nhÃ  lÃ£nh Ä‘áº¡o cÃ³ quyá»n lá»±c thay Ä‘á»•i cuá»™c chÆ¡i.",
        desc: "Táº­p trung vÃ o táº§m nhÃ¬n vÄ© mÃ´ vÃ  sá»©c máº¡nh cá»™ng hÆ°á»Ÿng cáº¥p cao.",
        scores: { vision: 3, wealth: 2, influence: 2 }
      },
      {
        text: "Má»™t cá»™ng Ä‘á»“ng nhá»¯ng ngÆ°á»i lÃ m viá»‡c tá»± do, sÃ¡ng táº¡o ná»™i dung, nghá»‡ sÄ© phÃ³ng khoÃ¡ng Ä‘a vÄƒn hÃ³a kháº¯p nÄƒm chÃ¢u.",
        desc: "Tá»± do, Ä‘a dáº¡ng gÃ³c nhÃ¬n, khÃ´ng phÃ¡n xÃ©t vÃ  trÃ n ngáº­p cáº£m há»©ng sá»‘ng.",
        scores: { innovation: 2, wellBeing: 2, influence: 1 }
      },
      {
        text: "VÃ i tri ká»· thÃ¢m sÃ¢u, nhá»¯ng ngÆ°á»i báº¡n chÃ¢n thÃ nh tá»« thuá»Ÿ hÃ n vi vÃ  gia Ä‘Ã¬nh hÃ²a thuáº­n.",
        desc: "Æ¯u tiÃªn cháº¥t lÆ°á»£ng tÃ¬nh cáº£m tuyá»‡t Ä‘á»‘i hÆ¡n sá»‘ lÆ°á»£ng quan há»‡ xÃ£ giao.",
        scores: { wellBeing: 3, execution: 1, influence: 1 }
      },
      {
        text: "Nhá»¯ng chuyÃªn gia ká»¹ thuáº­t hÃ ng Ä‘áº§u, nhÃ  nghiÃªn cá»©u, hacker vÃ  kiáº¿n trÃºc sÆ° há»‡ thá»‘ng uyÃªn bÃ¡c.",
        desc: "Giao tiáº¿p báº±ng logic chuáº©n xÃ¡c, code sáº¡ch vÃ  giáº£i phÃ¡p tá»‘i Æ°u.",
        scores: { innovation: 3, execution: 2, vision: 1 }
      }
    ]
  },
  {
    id: "q11",
    stage: 3,
    title: "ThÃ³i quen ká»· luáº­t tá»± thÃ¢n Ä‘á»‘i vá»›i thá»i gian vÃ  cÃ´ng viá»‡c hÃ ng ngÃ y cá»§a báº¡n hiá»‡n táº¡i nhÆ° tháº¿ nÃ o?",
    subtitle: "ThÃ nh tá»±u tÆ°Æ¡ng lai Ä‘Æ°á»£c xÃ¢y nÃªn tá»« thÃ³i quen hÃ´m nay.",
    options: [
      {
        text: "Ká»· luáº­t thÃ©p: LÃªn lá»‹ch Time-blocking chi tiáº¿t Ä‘áº¿n tá»«ng 30 phÃºt, theo dÃµi má»¥c tiÃªu OKR/KPI sÃ¡t sao.",
        desc: "TÃ´n thá» chá»§ nghÄ©a hiá»‡u suáº¥t vÃ  sá»± chuáº©n hÃ³a cao Ä‘á»™.",
        scores: { execution: 3, wealth: 2, vision: 1 }
      },
      {
        text: "Linh hoáº¡t theo cáº£m há»©ng: Khi cÃ³ luá»“ng sÃ¡ng táº¡o thÃ¬ lÃ m viá»‡c thÃ¢u Ä‘Ãªm suá»‘t sÃ¡ng, khi cáº¡n nÄƒng lÆ°á»£ng thÃ¬ nghá»‰ ngÆ¡i trá»n váº¹n.",
        desc: "TÃ´n trá»ng nhá»‹p sinh há»c tá»± nhiÃªn vÃ  nhá»¯ng khoáº£nh kháº¯c bÃ¹ng ná»•.",
        scores: { innovation: 3, wellBeing: 2, execution: 1 }
      },
      {
        text: "Táº­p trung vÃ o 1-2 viá»‡c quan trá»ng nháº¥t má»—i ngÃ y (NguyÃªn lÃ½ 80/20), pháº§n cÃ²n láº¡i á»§y quyá»n hoáº·c cáº¯t bá».",
        desc: "TÆ° duy Ä‘Ã²n báº©y hiá»‡u quáº£: LÃ m Ã­t nhÆ°ng táº¡o káº¿t quáº£ vÆ°á»£t báº­c.",
        scores: { vision: 2, execution: 2, wealth: 2 }
      },
      {
        text: "Æ¯u tiÃªn nhá»‹p sá»‘ng Ä‘iá»u Ä‘á»™: Thá»©c dáº­y sá»›m, thiá»n Ä‘á»‹nh/táº­p gym, lÃ m viá»‡c vá»«a pháº£i vÃ  dÃ nh trá»n buá»•i tá»‘i cho báº£n thÃ¢n.",
        desc: "KiÃªn Ä‘á»‹nh vá»›i lá»‘i sá»‘ng trÆ°á»ng thá», bá»n bá»‰ Ä‘Æ°á»ng dÃ i.",
        scores: { wellBeing: 3, execution: 2, influence: 1 }
      }
    ]
  },
  {
    id: "q12",
    stage: 3,
    title: "Khi kiáº¿m Ä‘Æ°á»£c má»™t khoáº£n tiá»n lá»›n báº¥t ngá», Æ°u tiÃªn phÃ¢n bá»• sá»‘ má»™t cá»§a báº¡n lÃ  gÃ¬?",
    subtitle: "CÃ¡ch báº¡n sá»­ dá»¥ng tÆ° báº£n pháº£n Ã¡nh thÃ¢n pháº­n vÃ  tÆ° duy tÃ i chÃ­nh tÆ°Æ¡ng lai.",
    options: [
      {
        text: "TÃ¡i Ä‘áº§u tÆ° 80% vÃ o cÃ¡c tÃ i sáº£n sinh lá»i (chá»©ng khoÃ¡n, báº¥t Ä‘á»™ng sáº£n, crypto) Ä‘á»ƒ táº¡o lÃ£i kÃ©p.",
        desc: "TÆ° duy tÃ­ch lÅ©y tÆ° báº£n vÃ  báº¯t tiá»n lÃ m viá»‡c cáº­t lá»±c cho mÃ¬nh.",
        scores: { wealth: 3, execution: 2, vision: 1 }
      },
      {
        text: "RÃ³t vá»‘n vÃ o dá»± Ã¡n khá»Ÿi nghiá»‡p má»›i hoáº·c nÃ¢ng cáº¥p cÃ´ng cá»¥/thiáº¿t bá»‹ sÃ¡ng táº¡o tá»‘i tÃ¢n nháº¥t.",
        desc: "Äáº§u tÆ° vÃ o phÆ°Æ¡ng tiá»‡n sáº£n xuáº¥t vÃ  cÃ¡c Ã½ tÆ°á»Ÿng cÃ³ biÃªn Ä‘á»™ bá»©t phÃ¡.",
        scores: { innovation: 2, vision: 2, execution: 2 }
      },
      {
        text: "TrÃ­ch má»™t pháº§n lá»›n láº­p quá»¹ há»— trá»£ ngÆ°á»i thÃ¢n, há»c bá»•ng hoáº·c hoáº¡t Ä‘á»™ng thiá»‡n nguyá»‡n xÃ£ há»™i.",
        desc: "San sáº» phÆ°á»›c lÃ nh vÃ  nÃ¢ng Ä‘á»¡ nhá»¯ng hoÃ n cáº£nh kÃ©m may máº¯n.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Äáº§u tÆ° cho tráº£i nghiá»‡m sá»‘ng: Du lá»‹ch khÃ¡m phÃ¡ tháº¿ giá»›i, cÃ¡c khÃ³a há»c nÃ¢ng táº§m tÃ¢m thá»©c vÃ  chÄƒm sÃ³c sá»©c khá»e Ä‘á»‰nh cao.",
        desc: "TÃ i sáº£n quÃ½ nháº¥t lÃ  tráº£i nghiá»‡m phong phÃº vÃ  sá»©c khá»e cá»§a báº£n thÃ¢n.",
        scores: { wellBeing: 3, innovation: 2, wealth: 1 }
      }
    ]
  },

  // CHáº¶NG 4: Táº¦M NHÃŒN & KHÃT Vá»ŒNG TÆ¯Æ NG LAI
  {
    id: "q13",
    stage: 4,
    title: "HÃ£y nháº¯m máº¯t láº¡i vÃ  tÆ°á»Ÿng tÆ°á»£ng báº¡n á»Ÿ 7-10 nÄƒm tá»›i. Báº¡n nhÃ¬n tháº¥y mÃ¬nh Ä‘ang Ä‘á»©ng á»Ÿ Ä‘Ã¢u?",
    subtitle: "Bá»©c tranh trá»±c giÃ¡c sá»‘ng Ä‘á»™ng nháº¥t hiá»‡n lÃªn trong tÃ¢m trÃ­ báº¡n.",
    options: [
      {
        text: "Äá»©ng trÃªn sÃ¢n kháº¥u lá»›n trÆ°á»›c hÃ ng nghÃ¬n khÃ¡n giáº£, truyá»n táº£i táº§m nhÃ¬n khai phÃ³ng vÃ  dáº«n dáº¯t xu hÆ°á»›ng má»›i.",
        desc: "Má»™t biá»ƒu tÆ°á»£ng lÃ£nh Ä‘áº¡o truyá»n cáº£m há»©ng Ä‘áº§y uy quyá»n vÃ  sá»©c hÃºt.",
        scores: { influence: 3, vision: 3, execution: 1 }
      },
      {
        text: "Trong má»™t phÃ²ng thÃ­ nghiá»‡m hoáº·c studio tá»‘i tÃ¢n, ngáº¯m nhÃ¬n sáº£n pháº©m cÃ´ng nghá»‡/nghá»‡ thuáº­t mÃ  cáº£ tháº¿ giá»›i Ä‘ang sá»­ dá»¥ng.",
        desc: "NgÆ°á»i kiáº¿n táº¡o Ä‘á»©ng sau nhá»¯ng Ä‘á»•i thay mang tÃ­nh cÃ¡ch máº¡ng.",
        scores: { innovation: 3, vision: 2, execution: 2 }
      },
      {
        text: "TrÃªn ban cÃ´ng má»™t cÄƒn biá»‡t thá»± nhÃ¬n ra biá»ƒn, nhÃ¢m nhi ly cÃ  phÃª, kiá»ƒm tra cÃ¡c bÃ¡o cÃ¡o Ä‘áº§u tÆ° thá»¥ Ä‘á»™ng tá»± Ä‘á»™ng cháº¡y.",
        desc: "Tá»± do hoÃ n má»¹, lÃ m chá»§ váº­n má»‡nh tÃ i chÃ­nh vÃ  tháº£nh thÆ¡i táº­n hÆ°á»Ÿng cuá»™c Ä‘á»i.",
        scores: { wealth: 3, wellBeing: 2, execution: 1 }
      },
      {
        text: "Trong má»™t khÃ´ng gian yÃªn bÃ¬nh xanh ngÃ¡t, hÆ°á»›ng dáº«n má»™t nhÃ³m há»c trÃ²/khÃ¡ch hÃ ng tÃ¬m láº¡i láº½ sá»‘ng vÃ  chá»¯a lÃ nh tá»•n thÆ°Æ¡ng.",
        desc: "Má»™t báº­c tháº§y tÃ¢m há»“n, ngÆ°á»i soi sÃ¡ng vÃ  nÃ¢ng Ä‘á»¡ cuá»™c Ä‘á»i ngÆ°á»i khÃ¡c.",
        scores: { wellBeing: 3, influence: 3, vision: 1 }
      }
    ]
  },
  {
    id: "q14",
    stage: 4,
    title: "Náº¿u sau nÃ y Ä‘Æ°á»£c viáº¿t má»™t cuá»‘n há»“i kÃ½ vá» cuá»™c Ä‘á»i mÃ¬nh, báº¡n muá»‘n tÃªn cuá»‘n sÃ¡ch lÃ  gÃ¬?",
    subtitle: "ThÃ´ng Ä‘iá»‡p cá»‘t lÃµi gÃ³i gá»n toÃ n bá»™ hÃ nh trÃ¬nh sá»‘ng cá»§a báº¡n.",
    options: [
      {
        text: "'Káº» PhÃ¡ BÄƒng: DÃ¡m NghÄ© KhÃ¡c VÃ  Kiáº¿n Táº¡o Äáº¿ Cháº¿ Tá»« Con Sá»‘ KhÃ´ng'.",
        desc: "KhÃ¡t vá»ng khai phÃ¡, chinh phá»¥c vÃ  má»Ÿ Ä‘Æ°á»ng cho nhá»¯ng Ä‘iá»u vÄ© Ä‘áº¡i.",
        scores: { vision: 3, execution: 2, wealth: 2 }
      },
      {
        text: "'Báº£n Äá»™c Báº£n: HÃ nh TrÃ¬nh Cá»§a Má»™t Káº» Say MÃª SÃ¡ng Táº¡o VÃ  KhÃ¡c Biá»‡t'.",
        desc: "TÃ´n vinh sá»± nguyÃªn báº£n, trÃ­ tuá»‡ Ä‘á»•i má»›i vÃ  cÃ¡i tÃ´i nghá»‡ thuáº­t/ká»¹ thuáº­t.",
        scores: { innovation: 3, execution: 1, wellBeing: 2 }
      },
      {
        text: "'VÃ²ng Tay Lá»›n: Sá»‘ng LÃ  Cho ÄÃ¢u Chá»‰ Nháº­n RiÃªng MÃ¬nh'.",
        desc: "GiÃ¡ trá»‹ cá»§a lÃ²ng tráº¯c áº©n, tÃ¬nh ngÆ°á»i vÃ  sá»± sáº» chia khÃ´ng vá»¥ lá»£i.",
        scores: { influence: 3, wellBeing: 3, vision: 1 }
      },
      {
        text: "'Nghá»‡ Thuáº­t Sá»‘ng Tá»± Táº¡i: Tá»± Do TÃ i ChÃ­nh, An YÃªn Trong TÃ¢m'.",
        desc: "Báº£n lÄ©nh lÃ m chá»§ váº­t cháº¥t Ä‘á»ƒ Ä‘áº¡t tá»›i sá»± giáº£i phÃ³ng tinh tháº§n tá»‘i thÆ°á»£ng.",
        scores: { wealth: 2, wellBeing: 3, execution: 1 }
      }
    ]
  },
  {
    id: "q15",
    stage: 4,
    title: "Ná»—i sá»£ lá»›n nháº¥t náº¿u nhÃ¬n láº¡i cuá»™c Ä‘á»i á»Ÿ tuá»•i 80 lÃ  gÃ¬?",
    subtitle: "Ná»—i sá»£ nghá»‹ch Ä‘áº£o chá»‰ ra chÃ­nh xÃ¡c Ä‘iá»u báº¡n trÃ¢n quÃ½ nháº¥t.",
    options: [
      {
        text: "Sá»‘ng má»™t cuá»™c Ä‘á»i an pháº­n thá»§ thÆ°á»ng, chÆ°a tá»«ng dÃ¡m chÆ¡i má»™t vÃ¡n cÆ°á»£c lá»›n cho Æ°á»›c mÆ¡ cá»§a mÃ¬nh.",
        desc: "Sá»£ sá»± táº§m thÆ°á»ng vÃ  lÃ£ng phÃ­ tiá»m nÄƒng to lá»›n bÃªn trong.",
        scores: { vision: 3, innovation: 2, execution: 1 }
      },
      {
        text: "Cáº£ Ä‘á»i lÃ m viá»‡c quáº§n quáº­t vÃ¬ tiá»n báº¡c danh vá»ng nhÆ°ng Ä‘Ã¡nh máº¥t sá»©c khá»e, sá»± bÃ¬nh yÃªn vÃ  tÃ¬nh cáº£m gia Ä‘Ã¬nh.",
        desc: "Sá»£ sá»± há»‘i tiáº¿c vÃ¬ Ä‘Ã¡nh máº¥t nhá»¯ng giÃ¡ trá»‹ nguyÃªn báº£n cá»§a háº¡nh phÃºc.",
        scores: { wellBeing: 3, influence: 1, wealth: 1 }
      },
      {
        text: "KhÃ´ng cÃ³ Ä‘á»§ tá»± do tÃ i chÃ­nh, pháº£i phá»¥ thuá»™c vÃ o ngÆ°á»i khÃ¡c hoáº·c luÃ´n loay hoay trong vÃ²ng xoÃ¡y cÆ¡m Ã¡o gáº¡o tiá»n.",
        desc: "Sá»£ sá»± báº¥p bÃªnh vÃ  máº¥t quyá»n kiá»ƒm soÃ¡t cuá»™c sá»‘ng.",
        scores: { wealth: 3, execution: 2, wellBeing: 1 }
      },
      {
        text: "Sá»‘ng mÃ  khÃ´ng Ä‘á»ƒ láº¡i báº¥t ká»³ giÃ¡ trá»‹ hay sá»± nÃ¢ng Ä‘á»¡ nÃ o cho ai, biáº¿n máº¥t khÃ´ng dáº¥u tÃ­ch giá»¯a tháº¿ gian.",
        desc: "Sá»£ sá»± cÃ´ láº­p vÃ  cuá»™c Ä‘á»i vÃ´ nghÄ©a khÃ´ng Ä‘á»ƒ láº¡i di sáº£n nhÃ¢n vÄƒn.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      }
    ]
  },
  {
    id: "q16",
    stage: 4,
    title: "Khi Ä‘Æ°á»£c trao má»™t cÃ¢y Ä‘Å©a tháº§n Ä‘á»ƒ nÃ¢ng cáº¥p má»™t siÃªu nÄƒng lá»±c ngay tá»©c kháº¯c, báº¡n chá»n:",
    subtitle: "Lá»±a chá»n nÃ y sáº½ Ä‘Ã³ng vai trÃ² quyáº¿t Ä‘á»‹nh cáº¥u trÃºc lá»™ trÃ¬nh phÃ¡t triá»ƒn tÆ°Æ¡ng lai cá»§a báº¡n.",
    options: [
      {
        text: "Kháº£ nÄƒng nhÃ¬n tháº¥u tÆ°Æ¡ng lai 10 nÄƒm vÃ  láº­p chiáº¿n lÆ°á»£c tháº§n tá»‘c khÃ´ng sai lá»‡ch má»™t bÆ°á»›c.",
        desc: "Táº§m nhÃ¬n thiÃªn tÃ i giÃºp báº¡n luÃ´n Ä‘i trÆ°á»›c thá»i Ä‘áº¡i má»™t bÆ°á»›c.",
        scores: { vision: 3, execution: 2, wealth: 1 }
      },
      {
        text: "NÄƒng lá»±c siÃªu sÃ¡ng táº¡o: LiÃªn tá»¥c náº£y sinh giáº£i phÃ¡p Ä‘á»™t phÃ¡ chÆ°a ai tá»«ng nghÄ© tá»›i.",
        desc: "Bá»™ nÃ£o Ä‘á»•i má»›i biáº¿n má»i váº¥n Ä‘á» báº¿ táº¯c thÃ nh cÆ¡ há»™i triá»‡u Ä‘Ã´.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "Sá»©c hÃºt cÃ¡ nhÃ¢n mÃ£nh liá»‡t vÃ  kháº£ nÄƒng tháº¥u cáº£m thu phá»¥c nhÃ¢n tÃ¢m á»Ÿ cáº¥p Ä‘á»™ Ä‘á»‰nh cao.",
        desc: "Quyá»n nÄƒng táº­p há»£p nhá»¯ng nhÃ¢n tÃ i giá»i nháº¥t tháº¿ giá»›i cÃ¹ng vá» má»™t ngá»n cá».",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Ká»· luáº­t thÃ©p tá»± thÃ¢n vÃ  sá»©c chá»‹u Ä‘á»±ng vÃ´ háº¡n, biáº¿n má»i káº¿ hoáº¡ch thÃ nh hiá»‡n thá»±c vá»›i Ä‘á»™ chÃ­nh xÃ¡c 100%.",
        desc: "Äá»™ng cÆ¡ thá»±c thi khÃ´ng thá»ƒ bá»‹ Ä‘Ã¡nh báº¡i trÆ°á»›c báº¥t ká»³ gian nan nÃ o.",
        scores: { execution: 3, wealth: 2, wellBeing: 1 }
      }
    ]
  }
];

// CÆ¡ sá»Ÿ dá»¯ liá»‡u 8 Báº£n Thá»ƒ TÆ°Æ¡ng Lai (Future Archetypes)
// Má»—i báº£n thá»ƒ bao gá»“m há»“ sÆ¡ chi tiáº¿t, 3 ká»‹ch báº£n tÆ°Æ¡ng lai, lá»™ trÃ¬nh 3 giai Ä‘oáº¡n vÃ  bá»™ cÃ´ng cá»¥ hÃ nh Ä‘á»™ng má»—i ngÃ y.

const ARCHETYPES = {
  visionary_leader: {
    id: "visionary_leader",
    name: "NhÃ  LÃ£nh Äáº¡o TiÃªn Phong",
    subtitle: "The Visionary Leader & Empire Builder",
    badge: "Thá»‘ng LÄ©nh & Äá»‹nh HÃ¬nh Xu Tháº¿",
    slogan: "KhÃ´ng chá» Ä‘á»£i tÆ°Æ¡ng lai Ä‘áº¿n, tÃ´i xÃ¢y dá»±ng nÃ³ báº±ng niá»m tin vÃ  Ä‘á»™i ngÅ© cá»§a mÃ¬nh.",
    color: "#8b5cf6", // Purple/Violet
    gradient: "from-purple-600 via-indigo-600 to-pink-500",
    avatarIcon: "crown",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ Ä‘á»©ng á»Ÿ vá»‹ trÃ­ Ä‘áº§u tÃ u dáº«n dáº¯t má»™t doanh nghiá»‡p, tá»• chá»©c hoáº·c phong trÃ o quy mÃ´ lá»›n. Báº¡n sá»Ÿ há»¯u trá»±c giÃ¡c chiáº¿n lÆ°á»£c nháº¡y bÃ©n, kháº£ nÄƒng quy tá»¥ hiá»n tÃ i vÃ  biáº¿n nhá»¯ng Ä‘iá»u khÃ´ng tÆ°á»Ÿng thÃ nh hiá»‡n thá»±c vá»¯ng cháº¯c.",
    
    traits: [
      { label: "Táº§m nhÃ¬n vÄ© mÃ´", val: 95 },
      { label: "Kháº£ nÄƒng thu phá»¥c nhÃ¢n tÃ¢m", val: 92 },
      { label: "Báº£n lÄ©nh chá»‹u Ã¡p lá»±c", val: 88 },
      { label: "Quyáº¿t Ä‘oÃ¡n & DÃ¡m cháº¥p nháº­n rá»§i ro", val: 90 }
    ],

    scenarios: {
      optimal: "Báº¡n sÃ¡ng láº­p hoáº·c Ä‘iá»u hÃ nh má»™t tá»• chá»©c cÃ³ táº§m áº£nh hÆ°á»Ÿng khu vá»±c/quá»‘c táº¿, lÃ m chá»§ tÃ i chÃ­nh vÃ  táº¡o cÃ´ng Äƒn viá»‡c lÃ m thá»‹nh vÆ°á»£ng cho hÃ ng trÄƒm con ngÆ°á»i. Báº¡n lÃ  hÃ¬nh máº«u truyá»n cáº£m há»©ng tháº¿ há»‡ má»›i.",
      default: "Báº¡n trá»Ÿ thÃ nh má»™t quáº£n lÃ½ cáº¥p cao hoáº·c trÆ°á»Ÿng dá»± Ã¡n tÃ i nÄƒng nhÆ°ng cÃ³ thá»ƒ bá»‹ kÃ¬m káº¹p bá»Ÿi cÃ¡c quy táº¯c cá»§a tá»• chá»©c cÅ© náº¿u khÃ´ng dÃ¡m bÆ°á»›c ra xÃ¢y dá»±ng Ä‘áº¿ cháº¿ riÃªng.",
      pitfall: "Cáº¡m báº«y 'NhÃ  Ä‘á»™c tÃ i cÃ´ Ä‘á»™c': Cáº§u toÃ n, Ã´m Ä‘á»“m má»i viá»‡c, khÃ´ng chá»‹u á»§y quyá»n dáº«n Ä‘áº¿n kiá»‡t sá»©c (burnout) vÃ  lÃ m gÃ£y Ä‘á»• cÃ¡c má»‘i quan há»‡ thÃ¢n tÃ­n gáº§n gÅ©i."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): XÃ¢y Dá»±ng Uy TÃ­n & Ká»· Luáº­t Báº£n ThÃ¢n",
        title: "Tá»± LÃ£nh Äáº¡o ChÃ­nh MÃ¬nh TrÆ°á»›c Khi LÃ£nh Äáº¡o Váº¡n NgÆ°á»i",
        milestone: "LÃ m chá»§ 100% thá»i gian cÃ¡ nhÃ¢n vÃ  dáº«n dáº¯t thÃ nh cÃ´ng 1 dá»± Ã¡n nhÃ³m quy mÃ´ nhá» vá»›i káº¿t quáº£ vÆ°á»£t trá»™i 30%.",
        tasks: [
          "XÃ¢y dá»±ng thÃ³i quen quáº£n trá»‹ nÄƒng lÆ°á»£ng: Thá»©c dáº­y Ä‘Ãºng giá», rÃ¨n luyá»‡n thá»ƒ cháº¥t cÆ°á»ng Ä‘á»™ cao 45 phÃºt/ngÃ y.",
          "Há»c sÃ¢u ká»¹ nÄƒng Storytelling & Diá»…n thuyáº¿t cÃ´ng chÃºng: Truyá»n Ä‘áº¡t táº§m nhÃ¬n gÃ£y gá»n trong 3 phÃºt.",
          "Thá»±c hÃ nh á»§y quyá»n vi mÃ´: Liá»‡t kÃª 5 viá»‡c tá»‘n thá»i gian khÃ´ng táº¡o ra giÃ¡ trá»‹ cao vÃ  chuyá»ƒn giao ngay.",
          "Äá»c vÃ  á»©ng dá»¥ng nguyÃªn lÃ½ quáº£n trá»‹ tá»« 'High Output Management' vÃ  'Principles' cá»§a Ray Dalio."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): XÃ¢y Dá»±ng Äá»™i NgÅ© LÃµi & Táº¡o ÄÃ²n Báº©y",
        title: "Táº¡o Láº­p ÄÃ²n Báº©y TÆ° Báº£n, CÃ´ng Nghá»‡ VÃ  Con NgÆ°á»i",
        milestone: "Quy tá»¥ Ä‘Æ°á»£c bá»™ 3 nÃ²ng cá»‘t (Ká»¹ thuáº­t - Váº­n hÃ nh - BÃ¡n hÃ ng), nÃ¢ng doanh thu hoáº·c quy mÃ´ dá»± Ã¡n lÃªn gáº¥p 5 láº§n.",
        tasks: [
          "Tuyá»ƒn chá»n vÃ  Ä‘Ã o táº¡o 3 nhÃ¢n sá»± háº¡t giá»‘ng cÃ³ nÄƒng lá»±c bá»• khuyáº¿t cho Ä‘iá»ƒm yáº¿u cá»§a báº¡n.",
          "Thiáº¿t láº­p máº¡ng lÆ°á»›i quan há»‡ vá»›i cÃ¡c cá»‘ váº¥n (Mentors) vÃ  nhÃ  Ä‘áº§u tÆ° thiÃªn tháº§n.",
          "XÃ¢y dá»±ng thÆ°Æ¡ng hiá»‡u cÃ¡ nhÃ¢n trÃªn LinkedIn / máº¡ng xÃ£ há»™i vá» tÆ° duy quáº£n trá»‹ & Ä‘á»‹nh hÆ°á»›ng ngÃ nh.",
          "Chuyá»ƒn Ä‘á»•i tá»« 'ngÆ°á»i giáº£i quyáº¿t váº¥n Ä‘á»' sang 'ngÆ°á»i thiáº¿t káº¿ há»‡ thá»‘ng giáº£i quyáº¿t váº¥n Ä‘á»'."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Má»Ÿ Rá»™ng Quy MÃ´ & Chuyá»ƒn Giao Di Sáº£n",
        title: "Chiáº¿m LÄ©nh Thá»‹ TrÆ°á»ng & Kiáº¿n Táº¡o VÄƒn HÃ³a Bá»n Vá»¯ng",
        milestone: "Doanh nghiá»‡p tá»± váº­n hÃ nh khÃ´ng cáº§n báº¡n can thiá»‡p trá»±c tiáº¿p hÃ ng ngÃ y; Ä‘áº¡t tá»± do tÃ i chÃ­nh trá»n váº¹n.",
        tasks: [
          "Chuyá»ƒn giao quyá»n Ä‘iá»u hÃ nh tÃ¡c nghiá»‡p (COO) Ä‘á»ƒ táº­p trung 100% vÃ o chiáº¿n lÆ°á»£c vÄ© mÃ´ vÃ  sÃ¡p nháº­p/Ä‘áº§u tÆ°.",
          "ThÃ nh láº­p quá»¹ há»c bá»•ng hoáº·c vÆ°á»n Æ°Æ¡m Æ°Æ¡m máº§m tháº¿ há»‡ lÃ£nh Ä‘áº¡o tráº» káº¿ cáº­n.",
          "Äáº¡t tá»± do tÃ i chÃ­nh Ä‘a dÃ²ng thu nháº­p thá»¥ Ä‘á»™ng bá»n vá»¯ng.",
          "Viáº¿t sÃ¡ch hoáº·c chia sáº» tri thá»©c quáº£n trá»‹ thá»±c chiáº¿n tá»›i cá»™ng Ä‘á»“ng quá»‘c táº¿."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Khung giá» HoÃ ng kim (Golden 90 Min): DÃ nh 90 phÃºt Ä‘áº§u ngÃ y cho chiáº¿n lÆ°á»£c quan trá»ng nháº¥t, táº¯t toÃ n bá»™ thÃ´ng bÃ¡o.",
        "Nháº­t kÃ½ pháº£n tÆ° cuá»‘i ngÃ y: ÄÃ¡nh giÃ¡ 3 quyáº¿t Ä‘á»‹nh lá»›n trong ngÃ y vÃ  rÃºt ra bÃ i há»c nháº­n thá»©c.",
        "Cuá»™c trÃ² chuyá»‡n 1-1 cháº¥t lÆ°á»£ng: Má»—i tuáº§n trÃ² chuyá»‡n sÃ¢u 30 phÃºt vá»›i Ã­t nháº¥t 1 thÃ nh viÃªn then chá»‘t.",
        "Thiá»n Ä‘á»‹nh tÄ©nh tÃ¢m 15 phÃºt: Rá»­a trÃ´i sá»± á»“n Ã o Ä‘á»ƒ duy trÃ¬ 'cÃ¡i Ä‘áº§u láº¡nh' trÆ°á»›c cÃ¡c cuá»™c Ä‘Ã m phÃ¡n.",
        "Váº­n Ä‘á»™ng thá»ƒ thao sá»©c bá»n (Cháº¡y bá»™, gym hoáº·c boxing): RÃ¨n luyá»‡n Ã½ chÃ­ khÃ´ng Ä‘áº§u hÃ ng."
      ],
      skillStack: [
        "Ká»¹ nÄƒng Thuyáº¿t trÃ¬nh & Thu phá»¥c lÃ²ng ngÆ°á»i (Charismatic Leadership)",
        "Äá»c hiá»ƒu BÃ¡o cÃ¡o tÃ i chÃ­nh & MÃ´ hÃ¬nh kinh doanh (Financial Mastery)",
        "TÆ° duy Há»‡ thá»‘ng & Thiáº¿t káº¿ CÆ¡ cháº¿ (System Thinking)",
        "á»¨ng dá»¥ng AI vÃ o Tá»± Ä‘á»™ng hÃ³a Doanh nghiá»‡p (AI-Driven Operations)"
      ],
      books: [
        "Tá»« Tá»‘t Äáº¿n VÄ© Äáº¡i (Good to Great) - Jim Collins",
        "NguyÃªn Táº¯c (Principles) - Ray Dalio",
        "Thuáº­t Quáº£n Trá»‹ HÃ ng Äáº§u (High Output Management) - Andy Grove",
        "Báº¯t Äáº§u Vá»›i CÃ¢u Há»i Táº¡i Sao (Start With Why) - Simon Sinek"
      ]
    }
  },

  creative_pioneer: {
    id: "creative_pioneer",
    name: "Báº­c Tháº§y SÃ¡ng Táº¡o Äá»™c Báº£n",
    subtitle: "The Innovative Creator & Cultural Pioneer",
    badge: "Äá»™c Báº£n & TiÃªn Phong Nghá»‡ Thuáº­t/Ã TÆ°á»Ÿng",
    slogan: "Sá»± bÃ¬nh thÆ°á»ng lÃ  nhÃ  tÃ¹ cá»§a tÃ¢m há»“n. TÃ´i sinh ra Ä‘á»ƒ táº¡o nÃªn nhá»¯ng Ä‘iá»u khÃ¡c biá»‡t rung chuyá»ƒn giÃ¡c quan.",
    color: "#ec4899", // Pink/Fuchsia
    gradient: "from-pink-500 via-rose-500 to-amber-400",
    avatarIcon: "palette",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  má»™t biá»ƒu tÆ°á»£ng sÃ¡ng táº¡o Ä‘Æ°á»£c cÃ´ng chÃºng hoáº·c giá»›i tinh hoa ngÆ°á»¡ng má»™. Báº¡n sá»Ÿ há»¯u con máº¯t tháº©m má»¹ sáº¯c bÃ©n, kháº£ nÄƒng liÃªn káº¿t nhá»¯ng Ã½ niá»‡m tÆ°á»Ÿng chá»«ng khÃ´ng liÃªn quan thÃ nh tÃ¡c pháº©m, sáº£n pháº©m hoáº·c phong trÃ o lÃ m say Ä‘áº¯m ngÆ°á»i xem.",

    traits: [
      { label: "TÆ° duy Ä‘á»™t phÃ¡", val: 98 },
      { label: "Tháº©m má»¹ & Trá»±c giÃ¡c nháº¡y bÃ©n", val: 94 },
      { label: "Dáº¥u áº¥n cÃ¡ nhÃ¢n Ä‘á»™c báº£n", val: 96 },
      { label: "Kháº£ nÄƒng truyá»n cáº£m xÃºc", val: 90 }
    ],

    scenarios: {
      optimal: "TÃ¡c pháº©m/sáº£n pháº©m cá»§a báº¡n vang danh toÃ n cáº§u, sá»Ÿ há»¯u cá»™ng Ä‘á»“ng ngÆ°á»i hÃ¢m má»™ trung thÃ nh tuyá»‡t Ä‘á»‘i. Báº¡n kiáº¿m tiá»n tá»« chÃ­nh sá»± Ä‘á»™c báº£n cá»§a mÃ¬nh mÃ  khÃ´ng cáº§n thá»a hiá»‡p vá»›i thá»‹ hiáº¿u ráº» tiá»n.",
      default: "Báº¡n váº«n táº¡o ra nhiá»u sáº£n pháº©m tá»‘t nhÆ°ng cháº­t váº­t vá» máº·t thÆ°Æ¡ng máº¡i hÃ³a vÃ¬ thiáº¿u ká»¹ nÄƒng Ä‘Ã³ng gÃ³i vÃ  phÃ¢n phá»‘i giÃ¡ trá»‹ Ä‘áº¿n Ä‘Ãºng Ä‘á»‘i tÆ°á»£ng sáºµn sÃ ng tráº£ giÃ¡ cao.",
      pitfall: "Cáº¡m báº«y 'Nghá»‡ sÄ© Ä‘au khá»•': Bá»‹ phá»¥ thuá»™c cáº£m xÃºc tháº¥t thÆ°á»ng, trÃ¬ hoÃ£n vÃ¬ cáº§u toÃ n vÃ´ lÃ½, hoáº·c kiÃªu ngáº¡o tá»« chá»‘i há»c há»i tÆ° duy kinh doanh vÃ  cÃ´ng nghá»‡ má»›i."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): MÃ i Sáº¯c VÅ© KhÃ­ Äá»™c Báº£n & XÃ¢y Portfolio",
        title: "TÃ­ch LÅ©y 1,000 Giá» SÃ¡ng Táº¡o Thá»±c Chiáº¿n & Äá»‹nh Vá»‹ Phong CÃ¡ch",
        milestone: "HoÃ n thiá»‡n bá»™ Portfolio gá»“m 10 tÃ¡c pháº©m/dá»± Ã¡n chuáº©n quá»‘c táº¿ vÃ  thu hÃºt 1,000 'True Fans' Ä‘áº§u tiÃªn.",
        tasks: [
          "Thá»±c hiá»‡n thá»­ thÃ¡ch '30 ngÃ y sÃ¡ng táº¡o liÃªn tá»¥c' khÃ´ng ngáº¯t quÃ£ng Ä‘á»ƒ phÃ¡ vá»¡ há»™i chá»©ng sá»£ trang giáº¥y tráº¯ng.",
          "NghiÃªn cá»©u giao thoa liÃªn ngÃ nh: Káº¿t há»£p nghá»‡ thuáº­t vá»›i cÃ´ng nghá»‡ AI táº¡o sinh hoáº·c triáº¿t há»c.",
          "XÃ¢y dá»±ng kÃªnh phÃ¢n phá»‘i cÃ¡ nhÃ¢n (Portfolio web, Substack hoáº·c Behance/YouTube) Ä‘Æ°á»£c chau chuá»‘t ká»¹ lÆ°á»¡ng.",
          "TÃ¬m kiáº¿m 1 mentor Ä‘i trÆ°á»›c trong ngÃ nh Ä‘á»ƒ Ä‘Æ°á»£c pháº£n biá»‡n tháº³ng tháº¯n vá» phong cÃ¡ch."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): ÄÃ³ng GÃ³i GiÃ¡ Trá»‹ & ThÆ°Æ¡ng Máº¡i HÃ³a Tinh Táº¿",
        title: "Biáº¿n Sá»± SÃ¡ng Táº¡o ThÃ nh Cá»— MÃ¡y Kinh Doanh Tri Thá»©c/Nghá»‡ Thuáº­t",
        milestone: "Há»£p tÃ¡c vá»›i cÃ¡c thÆ°Æ¡ng hiá»‡u hÃ ng Ä‘áº§u hoáº·c bÃ¡n sáº£n pháº©m Ä‘á»™c báº£n vá»›i má»©c giÃ¡ cao cáº¥p (High-ticket).",
        tasks: [
          "Thiáº¿t káº¿ dÃ²ng sáº£n pháº©m signature (khoÃ¡ há»c chuyÃªn sÃ¢u, triá»ƒn lÃ£m cÃ¡ nhÃ¢n, báº£n quyá»n tÃ¡c pháº©m).",
          "Há»c cÃ¡ch Ä‘Ã m phÃ¡n há»£p Ä‘á»“ng báº£n quyá»n vÃ  báº£o vá»‡ sá»Ÿ há»¯u trÃ­ tuá»‡.",
          "Tá»± Ä‘á»™ng hÃ³a cÃ¡c khÃ¢u hÃ nh chÃ­nh/káº¿ toÃ¡n Ä‘á»ƒ giáº£i phÃ³ng 80% thá»i gian cho cÃ´ng viá»‡c sÃ¡ng táº¡o thuáº§n tÃºy.",
          "XÃ¢y dá»±ng cá»™ng Ä‘á»“ng kÃ­n dÃ nh riÃªng cho nhá»¯ng ngÆ°á»i trÃ¢n trá»ng giÃ¡ trá»‹ Ä‘á»™c báº£n cá»§a báº¡n."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Äá»‹nh HÃ¬nh TrÆ°á»ng PhÃ¡i & Táº¡o Dá»±ng Di Sáº£n",
        title: "Trá»Ÿ ThÃ nh TÆ°á»£ng ÄÃ i Cáº£m Há»©ng & Má»Ÿ Ra Ká»· NguyÃªn Má»›i",
        milestone: "SÃ¡ng láº­p Studio sÃ¡ng táº¡o hoáº·c Viá»‡n nghá»‡ thuáº­t/thiáº¿t káº¿ riÃªng; Ä‘Æ°á»£c nháº¯c tÃªn trong cÃ¡c tuyá»ƒn táº­p chuyÃªn mÃ´n quá»‘c táº¿.",
        tasks: [
          "Tá»• chá»©c triá»ƒn lÃ£m, há»™i tháº£o hoáº·c xuáº¥t báº£n áº¥n pháº©m Ä‘á»ƒ Ä‘á»i.",
          "Táº¡o ra má»™t trÆ°á»ng phÃ¡i hoáº·c phÆ°Æ¡ng phÃ¡p sÃ¡ng táº¡o má»›i mang tÃªn chÃ­nh báº¡n.",
          "Cá»‘ váº¥n vÃ  báº£o trá»£ cho cÃ¡c tÃ i nÄƒng tráº» triá»ƒn vá»ng.",
          "Sá»‘ng tháº£nh thÆ¡i táº¡i cÃ¡c thiÃªn Ä‘Æ°á»ng sÃ¡ng táº¡o trÃªn tháº¿ giá»›i theo phong cÃ¡ch du má»¥c nghá»‡ thuáº­t."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Buá»•i sÃ¡ng Deep Flow 2 giá»: KhÃ´ng Ä‘iá»‡n thoáº¡i, chá»‰ cÃ³ Ã½ tÆ°á»Ÿng, mÃ u sáº¯c hoáº·c mÃ£ code sÃ¡ng táº¡o.",
        "Thu tháº­p tÆ° liá»‡u cáº£m há»©ng (Swipe File): Má»—i ngÃ y lÆ°u láº¡i 3 Ã½ tÆ°á»Ÿng Ä‘á»™c Ä‘Ã¡o tá»« thiÃªn nhiÃªn, kiáº¿n trÃºc hoáº·c sÃ¡ch cá»•.",
        "Äi dáº¡o má»™t mÃ¬nh khÃ´ng thiáº¿t bá»‹ sá»‘ (Wonder Walking) 30 phÃºt Ä‘á»ƒ nÃ£o bá»™ káº¿t ná»‘i cÃ¡c Ã½ tÆ°á»Ÿng ngáº§m.",
        "Thá»­ nghiá»‡m 1 cÃ´ng cá»¥ cÃ´ng nghá»‡ má»›i (GenAI, 3D, Motion) má»—i tuáº§n Ä‘á»ƒ má»Ÿ rá»™ng giá»›i háº¡n sÃ¡ng táº¡o.",
        "Viáº¿t 'Morning Pages' (3 trang nháº­t kÃ½ tá»± do) ngay khi tá»‰nh dáº­y Ä‘á»ƒ giáº£i tá»a táº¯c ngháº½n tÃ¢m thá»©c."
      ],
      skillStack: [
        "Ká»¹ thuáº­t ChuyÃªn mÃ´n Äá»‰nh cao (Art/Design/Writing/Content Direction)",
        "Prompt Engineering & á»¨ng dá»¥ng AI sÃ¡ng táº¡o (Midjourney, Runway, LLMs)",
        "Storytelling & Äá»‹nh vá»‹ ThÆ°Æ¡ng hiá»‡u CÃ¡ nhÃ¢n Sang trá»ng (Luxury Branding)",
        "Äá»‹nh giÃ¡ & ÄÃ m phÃ¡n GiÃ¡ trá»‹ Cao (High-ticket Value Pricing)"
      ],
      books: [
        "Nghá»‡ Thuáº­t Sá»‘ng NhÆ° Má»™t Nghá»‡ SÄ© (Steal Like an Artist) - Austin Kleon",
        "Con ÄÆ°á»ng Nghá»‡ SÄ© (The Artist's Way) - Julia Cameron",
        "Deep Work: LÃ m Ra LÃ m ChÆ¡i Ra ChÆ¡i - Cal Newport",
        "Chiáº¿n Tranh Nghá»‡ Thuáº­t (The War of Art) - Steven Pressfield"
      ]
    }
  },

  strategic_mastermind: {
    id: "strategic_mastermind",
    name: "Chiáº¿n LÆ°á»£c Gia Báº¥t Kháº£ Chiáº¿n Báº¡i",
    subtitle: "The Strategic Mastermind & Asset Allocator",
    badge: "TrÃ­ Tuá»‡ Giáº£i MÃ£ & Tá»‘i Æ¯u Há»‡ Thá»‘ng",
    slogan: "Tháº¿ giá»›i nÃ y váº­n hÃ nh báº±ng cÃ¡c quy luáº­t toÃ¡n há»c vÃ  tÃ¢m lÃ½. Ai náº¯m Ä‘Æ°á»£c quy luáº­t, ngÆ°á»i Ä‘Ã³ lÃ m chá»§ váº­n má»‡nh.",
    color: "#06b6d4", // Cyan
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    avatarIcon: "compass",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  bá»™ nÃ£o chiáº¿n lÆ°á»£c Ä‘á»©ng sau nhá»¯ng thÆ°Æ¡ng vá»¥ Ä‘áº§u tÆ° lá»›n, nhá»¯ng quyáº¿t Ä‘á»‹nh tÃ¡i cáº¥u trÃºc Ä‘á»‹nh má»‡nh, hoáº·c cÃ¡c phÃ¢n tÃ­ch vÄ© mÃ´ Ä‘á»‹nh hÃ¬nh thá»‹ trÆ°á»ng. Báº¡n sá»Ÿ há»¯u tÆ° duy xÃ¡c suáº¥t sáº¯c láº¡nh, kháº£ nÄƒng nháº­n diá»‡n mÃ´ thá»©c áº©n vÃ  ra Ä‘Ã²n Ä‘Ãºng thá»i Ä‘iá»ƒm.",

    traits: [
      { label: "TÆ° duy phÃ¢n tÃ­ch xÃ¡c suáº¥t", val: 96 },
      { label: "Chiáº¿n lÆ°á»£c & Hoáº¡ch Ä‘á»‹nh", val: 95 },
      { label: "Kiá»ƒm soÃ¡t cáº£m xÃºc trÆ°á»›c biáº¿n Ä‘á»™ng", val: 92 },
      { label: "PhÃ¢n bá»• tÃ i sáº£n & DÃ²ng tiá»n", val: 94 }
    ],

    scenarios: {
      optimal: "Báº¡n xÃ¢y dá»±ng Ä‘Æ°á»£c danh má»¥c Ä‘áº§u tÆ° sinh lá»i vÆ°á»£t trá»™i trÃªn thá»‹ trÆ°á»ng tÃ i chÃ­nh hoáº·c trá»Ÿ thÃ nh Cá»‘ váº¥n chiáº¿n lÆ°á»£c tá»‘i cao cho cÃ¡c táº­p Ä‘oÃ n lá»›n, hÆ°á»Ÿng phÃ­ cá»‘ váº¥n dá»±a trÃªn % giÃ¡ trá»‹ tháº·ng dÆ° khá»•ng lá»“.",
      default: "Báº¡n trá»Ÿ thÃ nh má»™t chuyÃªn viÃªn phÃ¢n tÃ­ch tÃ i chÃ­nh/chiáº¿n lÆ°á»£c giá»i nhÆ°ng bá»‹ giá»›i háº¡n thu nháº­p vÃ¬ váº«n bÃ¡n thá»i gian láº¥y lÆ°Æ¡ng thay vÃ¬ kiáº¿m tiá»n báº±ng Ä‘Ã²n báº©y vá»‘n vÃ  phÃ¡n Ä‘oÃ¡n Ä‘á»™c láº­p.",
      pitfall: "Cáº¡m báº«y 'TÃª liá»‡t vÃ¬ phÃ¢n tÃ­ch' (Analysis Paralysis): Thu tháº­p quÃ¡ nhiá»u dá»¯ liá»‡u nhÆ°ng cháº§n chá»« khÃ´ng dÃ¡m vÃ o lá»‡nh hoáº·c khÃ´ng chá»‹u thá»±c thi thá»±c táº¿ khi thá»i cÆ¡ vÃ ng áº­p Ä‘áº¿n."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): LÃ m Chá»§ CÃ¡c MÃ´ HÃ¬nh TÆ° Duy & XÃ¢y Vá»‘n Ban Äáº§u",
        title: "Giáº£i Pháº«u Há»‡ Thá»‘ng & RÃ¨n Luyá»‡n TÆ° Duy XÃ¡c Suáº¥t",
        milestone: "LÃ m chá»§ 20 mÃ´ hÃ¬nh tÆ° duy cá»‘t lÃµi (Mental Models), tÃ­ch lÅ©y quá»¹ kháº©n cáº¥p 12 thÃ¡ng vÃ  báº¯t Ä‘áº§u danh má»¥c Ä‘áº§u tÆ° Ä‘áº§u tiÃªn.",
        tasks: [
          "NghiÃªn cá»©u sÃ¢u mÃ´ hÃ¬nh tÆ° duy cá»§a Charlie Munger, Warren Buffett vÃ  Nassim Taleb.",
          "Thá»±c hÃ nh ghi chÃ©p nháº­t kÃ½ quyáº¿t Ä‘á»‹nh (Decision Journal) cho má»i khoáº£n Ä‘áº§u tÆ° hoáº·c lá»±a chá»n sá»± nghiá»‡p.",
          "ThÃ nh tháº¡o cÃ´ng cá»¥ phÃ¢n tÃ­ch dá»¯ liá»‡u (Python, SQL hoáº·c cÃ¡c ná»n táº£ng tÃ i chÃ­nh nÃ¢ng cao).",
          "Cáº¯t giáº£m tá»‘i Ä‘a ná»£ xáº¥u vÃ  thiáº¿t láº­p tá»· lá»‡ tiáº¿t kiá»‡m/Ä‘áº§u tÆ° tá»± Ä‘á»™ng tá»‘i thiá»ƒu 40% thu nháº­p."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): Tá»‘i Æ¯u HÃ³a Báº¥t Äá»‘i Xá»©ng & Má»Ÿ Rá»™ng Quy MÃ´ Vá»‘n",
        title: "SÄƒn TÃ¬m Lá»£i Nhuáº­n Phi Äá»‘i Xá»©ng & TÆ° Váº¥n Cáº¥p Cao",
        milestone: "XÃ¢y dá»±ng danh má»¥c Ä‘áº§u tÆ° tÄƒng trÆ°á»Ÿng bá»n vá»¯ng gáº¥p 3 láº§n thá»‹ trÆ°á»ng cÆ¡ sá»Ÿ; báº¯t Ä‘áº§u nháº­n cÃ¡c gÃ³i tÆ° váº¥n cá»‘ váº¥n Ä‘á»™c láº­p.",
        tasks: [
          "Ãp dá»¥ng triáº¿t lÃ½ KhÃ¡ng tá»•n thÆ°Æ¡ng (Antifragile): Danh má»¥c hÆ°á»Ÿng lá»£i tá»« sá»± biáº¿n Ä‘á»™ng cá»§a thá»‹ trÆ°á»ng.",
          "Xuáº¥t báº£n cÃ¡c bÃ i viáº¿t phÃ¢n tÃ­ch vÄ© mÃ´ sÃ¢u sáº¯c trÃªn cÃ¡c diá»…n Ä‘Ã n chuyÃªn gia Ä‘á»ƒ Ä‘á»‹nh vá»‹ trÃ­ tuá»‡.",
          "Káº¿t ná»‘i vá»›i máº¡ng lÆ°á»›i nhÃ  Ä‘áº§u tÆ° tÆ° nhÃ¢n vÃ  cÃ¡c quá»¹ Ä‘áº§u tÆ° máº¡o hiá»ƒm.",
          "Thiáº¿t láº­p cÆ¡ cáº¥u tÃ i sáº£n Ä‘a quá»‘c gia Ä‘á»ƒ phÃ¢n tÃ¡n rá»§i ro Ä‘á»‹a chÃ­nh trá»‹ vÃ  láº¡m phÃ¡t."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Vá»‹ Tháº¿ Cá»‘ Váº¥n Tá»‘i Cao & Tá»± Do TÃ i ChÃ­nh VÄ©nh Cá»­u",
        title: "BÃ n Cá» Lá»›n Cá»§a Sá»± Tá»± Do: Sá»‘ng Nhá» LÃ£i KÃ©p TrÃ­ Tuá»‡ & TÆ° Báº£n",
        milestone: "Tá»± do tÃ i chÃ­nh hoÃ n toÃ n (dÃ²ng tiá»n thá»¥ Ä‘á»™ng > gáº¥p 5 láº§n chi phÃ­ sá»‘ng); chá»‰ nháº­n cá»‘ váº¥n cho nhá»¯ng dá»± Ã¡n thá»±c sá»± há»©ng thÃº.",
        tasks: [
          "Váº­n hÃ nh quá»¹ Ä‘áº§u tÆ° gia Ä‘Ã¬nh (Family Office) hoáº·c quá»¹ tÃ­n thÃ¡c riÃªng.",
          "Tham gia Há»™i Ä‘á»“ng quáº£n trá»‹ vá»›i tÆ° cÃ¡ch ThÃ nh viÃªn Ä‘á»™c láº­p hoáº¡ch Ä‘á»‹nh chiáº¿n lÆ°á»£c.",
          "DÃ nh 70% thá»i gian Ä‘á»ƒ Ä‘á»c sÃ¡ch, du hÃ nh vÃ  nghiÃªn cá»©u nhá»¯ng Ä‘á» tÃ i bÃ¡c há»c.",
          "Äá»ƒ láº¡i má»™t há»‡ thá»‘ng tri thá»©c vÃ  quá»¹ tÃ i chÃ­nh thá»‹nh vÆ°á»£ng cho tháº¿ há»‡ káº¿ thá»«a."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Äá»c 2 giá» má»—i ngÃ y: 50% cho lá»‹ch sá»­/tÃ¢m lÃ½ há»c, 50% cho cÃ¡c bÃ¡o cÃ¡o thÆ°á»ng niÃªn vÃ  dá»¯ liá»‡u thá»‹ trÆ°á»ng.",
        "Nháº­t kÃ½ quyáº¿t Ä‘á»‹nh (Decision Journal): Ghi láº¡i lÃ½ do vÃ o lá»‡nh/ra quyáº¿t Ä‘á»‹nh trÆ°á»›c khi biáº¿t káº¿t quáº£.",
        "Táº­p thá»ƒ dá»¥c rÃ¨n luyá»‡n tÃ­nh kiÃªn nháº«n (ChÃ¨o thuyá»n, Ä‘i bá»™ Ä‘Æ°á»ng dÃ i hoáº·c cá» tÆ°á»›ng/cá» vua).",
        "Thá»±c hÃ nh tÆ° duy Nghá»‹ch Ä‘áº£o (Inversion): Thay vÃ¬ há»i 'LÃ m sao thÃ nh cÃ´ng?', hÃ£y há»i 'Äiá»u gÃ¬ cháº¯c cháº¯n lÃ m mÃ¬nh tháº¥t báº¡i?' rá»“i triá»‡t tiÃªu nÃ³.",
        "RÃ  soÃ¡t danh má»¥c tÃ i sáº£n vÃ  chá»‰ sá»‘ KPI cÃ¡ nhÃ¢n vÃ o tá»‘i Chá»§ nháº­t hÃ ng tuáº§n."
      ],
      skillStack: [
        "PhÃ¢n bá»• TÃ i sáº£n & Quáº£n trá»‹ Rá»§i ro (Modern Portfolio Theory & Barbell Strategy)",
        "CÃ¡c MÃ´ hÃ¬nh TÆ° duy Äa ngÃ nh (Latticework of Mental Models)",
        "Ká»¹ nÄƒng ÄÃ m phÃ¡n ThÆ°á»£ng táº§ng & Cáº¥u trÃºc Thá»a thuáº­n (Deal Structuring)",
        "PhÃ¢n tÃ­ch Dá»¯ liá»‡u Lá»›n & Nháº­n diá»‡n ThiÃªn kiáº¿n TÃ¢m lÃ½ (Behavioral Economics)"
      ],
      books: [
        "Chá»‘ng Tá»± MÃ£n / ThiÃªn Nga Äen (The Black Swan & Antifragile) - Nassim Taleb",
        "TÃ¢m LÃ½ Há»c Vá» Tiá»n (The Psychology of Money) - Morgan Housel",
        "NghÄ© Nhanh VÃ  Cháº­m (Thinking, Fast and Slow) - Daniel Kahneman",
        "BÃ¡c Charlie KhÃ´n Ngoan (Poor Charlie's Almanack) - Charlie Munger"
      ]
    }
  },

  digital_solopreneur: {
    id: "digital_solopreneur",
    name: "NhÃ  Khá»Ÿi Nghiá»‡p Tá»± Do KhÃ´ng BiÃªn Giá»›i",
    subtitle: "The Digital Solopreneur & Freedom Architect",
    badge: "Tá»± Chá»§ Tuyá»‡t Äá»‘i & Du Má»¥c Ká»¹ Thuáº­t Sá»‘",
    slogan: "Thá»i gian vÃ  sá»± tá»± do lÃ  xa xá»‰ pháº©m lá»›n nháº¥t Ä‘á»i ngÆ°á»i. TÃ´i thiáº¿t káº¿ cÃ´ng viá»‡c phá»¥c vá»¥ cuá»™c sá»‘ng, khÃ´ng pháº£i ngÆ°á»£c láº¡i.",
    color: "#10b981", // Emerald
    gradient: "from-emerald-500 via-teal-600 to-cyan-500",
    avatarIcon: "plane-takeoff",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  hÃ¬nh máº«u sá»‘ng Ä‘á»™ng cá»§a tháº¿ há»‡ 'CÃ´ng ty má»™t ngÆ°á»i' (One-person Business) hoáº·c du má»¥c ká»¹ thuáº­t sá»‘ tá»± do. Báº¡n váº­n hÃ nh cÃ¡c sáº£n pháº©m sá»‘, dá»‹ch vá»¥ vi mÃ´ hoáº·c ná»™i dung tá»± Ä‘á»™ng hÃ³a, táº¡o ra dÃ²ng tiá»n cao mÃ  khÃ´ng cáº§n nhÃ¢n viÃªn cá»“ng ká»nh hay vÄƒn phÃ²ng cá»‘ Ä‘á»‹nh.",

    traits: [
      { label: "NÄƒng lá»±c tá»± thÃ¢n & Tá»± há»c", val: 97 },
      { label: "Tá»‘i Æ°u hÃ³a Ä‘Ã²n báº©y cÃ´ng nghá»‡", val: 94 },
      { label: "Kháº£ nÄƒng thÃ­ch á»©ng Ä‘á»‹a lÃ½", val: 92 },
      { label: "Quáº£n trá»‹ nÄƒng lÆ°á»£ng tá»± do", val: 95 }
    ],

    scenarios: {
      optimal: "Sá»Ÿ há»¯u 2-3 cá»— mÃ¡y táº¡o thu nháº­p thá»¥ Ä‘á»™ng qua internet (SaaS nhá», khÃ³a há»c sá»‘, báº£n quyá»n ná»™i dung), di chuyá»ƒn qua 10+ quá»‘c gia má»—i nÄƒm, lÃ m viá»‡c 15-20 giá»/tuáº§n mÃ  váº«n cÃ³ thu nháº­p hÃ ng chá»¥c nghÃ¬n Ä‘Ã´ la.",
      default: "LÃ m freelancer hoáº·c kiáº¿m tiá»n online nhÆ°ng váº«n rÆ¡i vÃ o báº«y 'Ä‘á»•i thá»i gian láº¥y tiá»n', thu nháº­p báº¥p bÃªnh vÃ  thÆ°á»ng xuyÃªn lo láº¯ng vá» khÃ¡ch hÃ ng káº¿ tiáº¿p.",
      pitfall: "Cáº¡m báº«y 'Sá»± cÃ´ Ä‘Æ¡n ká»¹ thuáº­t sá»‘': Thiáº¿u tÃ­nh ká»· luáº­t cÃ¡ nhÃ¢n dáº«n Ä‘áº¿n trÆ°á»£t dÃ i trong sá»± phÃ¢n tÃ¢m, cÃ´ láº­p xÃ£ há»™i vÃ  máº¥t Ä‘i Ä‘á»™ng lá»±c phÃ¡t triá»ƒn sÃ¢u."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): XÃ¢y Dá»±ng Ká»¹ NÄƒng GiÃ¡ Trá»‹ Cao & Sáº£n Pháº©m Äáº§u Tay",
        title: "ThoÃ¡t Khá»i VÃ²ng XoÃ¡y BÃ¡n Thá»i Gian & Táº¡o Doanh Thu Sá»‘ Äáº§u TiÃªn",
        milestone: "Kiáº¿m Ä‘Æ°á»£c $1,000/thÃ¡ng Ä‘áº§u tiÃªn hoÃ n toÃ n tá»« mÃ´i trÆ°á»ng internet báº±ng ká»¹ nÄƒng Ä‘á»™c láº­p cá»§a báº¡n.",
        tasks: [
          "XÃ¡c Ä‘á»‹nh 1 ká»¹ nÄƒng giÃ¡ trá»‹ cao (Copywriting, Thiáº¿t káº¿ giao diá»‡n, Láº­p trÃ¬nh No-code, Video Editing).",
          "XÃ¢y dá»±ng sá»± hiá»‡n diá»‡n trÃªn X (Twitter) hoáº·c LinkedIn: Chia sáº» quÃ¡ trÃ¬nh há»c há»i cÃ´ng khai (Build in Public).",
          "Táº¡o ra 1 sáº£n pháº©m sá»‘ vi mÃ´ miá»…n phÃ­ (Lead Magnet) Ä‘á»ƒ thu hÃºt 500 email subscribers.",
          "Thá»±c hiá»‡n cÃ´ng viá»‡c freelance vá»›i má»©c giÃ¡ cao vÃ  biáº¿n khÃ¡ch hÃ ng thÃ nh case study thÃ nh cÃ´ng."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): ÄÃ³ng GÃ³i Sáº£n Pháº©m & Tá»± Äá»™ng HÃ³a DÃ²ng Tiá»n",
        title: "Chuyá»ƒn Äá»•i Tá»« Dá»‹ch Vá»¥ Sang Sáº£n Pháº©m Sá»‘ VÃ´ Táº­n (Infinite Leverage)",
        milestone: "Thu nháº­p sá»‘ vÆ°á»£t gáº¥p 2 láº§n má»©c lÆ°Æ¡ng vÄƒn phÃ²ng thÃ´ng thÆ°á»ng; báº¯t Ä‘áº§u lá»‘i sá»‘ng lÃ m viá»‡c tá»« xa hoÃ n toÃ n.",
        tasks: [
          "ÄÃ³ng gÃ³i quy trÃ¬nh lÃ m viá»‡c thÃ nh sáº£n pháº©m ká»¹ thuáº­t sá»‘ (KhÃ³a há»c Cohort-based, Template Notion, Micro-SaaS).",
          "Thiáº¿t láº­p phá»…u bÃ¡n hÃ ng tá»± Ä‘á»™ng (Email drip campaign, thanh toÃ¡n Stripe/Gumroad).",
          "á»¨ng dá»¥ng AI agents Ä‘á»ƒ thay tháº¿ nhÃ¢n sá»± chÄƒm sÃ³c khÃ¡ch hÃ ng vÃ  marketing tá»± Ä‘á»™ng.",
          "Báº¯t Ä‘áº§u phong cÃ¡ch sá»‘ng du má»¥c: Tráº£i nghiá»‡m sá»‘ng táº¡i cÃ¡c trung tÃ¢m khá»Ÿi nghiá»‡p tá»± do (Bali, Chiang Mai, ÄÃ  Náºµng, Bá»“ ÄÃ o Nha)."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Há»‡ Sinh ThÃ¡i Äá»™c Láº­p & Tá»± Do ToÃ n Diá»‡n",
        title: "Kiáº¿n TrÃºc Cuá»™c Sá»‘ng Äá»‰nh Cao: GiÃ u CÃ³ Vá» Thá»i Gian VÃ  Tráº£i Nghiá»‡m",
        milestone: "Äáº¡t má»‘c 'Financial Independence' vá»›i há»‡ thá»‘ng kinh doanh tá»± váº­n hÃ nh; tá»± do thá»©c dáº­y á»Ÿ báº¥t ká»³ thÃ nh phá»‘ nÃ o báº¡n yÃªu.",
        tasks: [
          "Äa dáº¡ng hÃ³a danh má»¥c tÃ i sáº£n vÃ o báº¥t Ä‘á»™ng sáº£n cho thuÃª vÃ  cá»• phiáº¿u chi tráº£ cá»• tá»©c.",
          "Tham gia cÃ¡c há»™i Ä‘á»“ng Solopreneur toÃ n cáº§u vÃ  Ä‘áº§u tÆ° vÃ o cÃ¡c nhÃ  khá»Ÿi nghiá»‡p Ä‘á»™c láº­p má»›i.",
          "Táº­n hÆ°á»Ÿng cuá»™c sá»‘ng: DÃ nh thá»i gian há»c lÆ°á»›t sÃ³ng, leo nÃºi, ngoáº¡i ngá»¯ má»›i vÃ  viáº¿t sÃ¡ch.",
          "Truyá»n cáº£m há»©ng vÃ  má»Ÿ lá»‘i cho tháº¿ há»‡ tráº» giáº£i phÃ³ng báº£n thÃ¢n khá»i guá»“ng quay 9-to-5."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Time-boxing 4 giá» Deep Work má»—i ngÃ y: Chá»‰ 4 giá» cá»±c ká»³ táº­p trung, thá»i gian cÃ²n láº¡i dÃ nh cho thá»ƒ thao vÃ  sá»‘ng.",
        "Build in Public: Chia sáº» 1 bÃ i há»c thá»±c táº¿ tá»« cÃ´ng viá»‡c lÃªn máº¡ng xÃ£ há»™i má»—i ngÃ y.",
        "Thiáº¿t láº­p 'Digital Sunset': Táº¯t toÃ n bá»™ mÃ n hÃ¬nh sau 8 giá» tá»‘i Ä‘á»ƒ tÃ¡i táº¡o sá»©c sá»‘ng nÃ£o bá»™.",
        "Äi bá»™ 10,000 bÆ°á»›c má»—i ngÃ y khÃ¡m phÃ¡ thÃ nh phá»‘ nÆ¡i báº¡n Ä‘ang Ä‘áº·t chÃ¢n Ä‘áº¿n.",
        "Tá»± thÆ°á»Ÿng 1 ngÃ y 'Zero Task Day' trong tuáº§n: HoÃ n toÃ n khÃ´ng lÃ m viá»‡c, khÃ´ng má»Ÿ email cÃ´ng viá»‡c."
      ],
      skillStack: [
        "Ká»¹ nÄƒng Viáº¿t thuyáº¿t phá»¥c & Báº£n tin email (Direct-response Copywriting)",
        "LÃ m chá»§ cÃ´ng cá»¥ No-code & Tá»± Ä‘á»™ng hÃ³a (Make, Zapier, Webflow, Cursor)",
        "XÃ¢y dá»±ng ThÆ°Æ¡ng hiá»‡u CÃ¡ nhÃ¢n Tá»‘i giáº£n (Minimalist Personal Branding)",
        "TÃ¢m lÃ½ há»c BÃ¡n hÃ ng & Thiáº¿t káº¿ Phá»…u Chuyá»ƒn Ä‘á»•i (Conversion Funnel Design)"
      ],
      books: [
        "Tuáº§n LÃ m Viá»‡c 4 Giá» (The 4-Hour Workweek) - Tim Ferriss",
        "CÃ´ng Ty Má»™t NgÆ°á»i (Company of One) - Paul Jarvis",
        "Kinh Doanh NhÆ° Äá»“ ChÆ¡i (Anything You Want) - Derek Sivers",
        "Cuá»‘n NiÃªn GiÃ¡m Cá»§a Naval Ravikant (The Almanack of Naval Ravikant) - Eric Jorgenson"
      ]
    }
  },

  empathetic_healer: {
    id: "empathetic_healer",
    name: "Sá»© Giáº£ Khai Váº¥n & NuÃ´i DÆ°á»¡ng Tinh Tháº§n",
    subtitle: "The Empathetic Mentor & Transformational Coach",
    badge: "Tháº¥u Cáº£m SÃ¢u Sáº¯c & Chá»¯a LÃ nh Cuá»™c Äá»i",
    slogan: "Váº¿t thÆ°Æ¡ng chÃ­nh lÃ  nÆ¡i Ã¡nh sÃ¡ng Ä‘i vÃ o báº¡n. Sá»© má»‡nh cá»§a tÃ´i lÃ  tháº¯p lÃªn ngá»n Ä‘Ã¨n dáº«n lá»‘i cho nhá»¯ng tÃ¢m há»“n láº¡c lá»‘i.",
    color: "#f59e0b", // Amber/Gold
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    avatarIcon: "heart-handshake",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  má»™t chuyÃªn gia khai váº¥n (Master Coach), nhÃ  trá»‹ liá»‡u tÃ¢m lÃ½, hoáº·c ngÆ°á»i tháº§y tinh tháº§n Ä‘Æ°á»£c hÃ ng nghÃ¬n ngÆ°á»i tin cáº­y tÃ¬m Ä‘áº¿n. Báº¡n sá»Ÿ há»¯u nÄƒng lÆ°á»£ng xoa dá»‹u hiáº¿m cÃ³, kháº£ nÄƒng láº¯ng nghe tháº¥u cáº£m vÃ  nghá»‡ thuáº­t Ä‘áº·t cÃ¢u há»i Ä‘Ã¡nh thá»©c tiá»m nÄƒng ngá»§ quÃªn trong con ngÆ°á»i.",

    traits: [
      { label: "TrÃ­ tuá»‡ cáº£m xÃºc (EQ) vÆ°á»£t trá»™i", val: 98 },
      { label: "NÄƒng lá»±c láº¯ng nghe & Tháº¥u cáº£m", val: 96 },
      { label: "NÄƒng lÆ°á»£ng bÃ¬nh an & ÄÃ¡ng tin cáº­y", val: 94 },
      { label: "Kháº£ nÄƒng chuyá»ƒn hÃ³a tÃ¢m thá»©c", val: 91 }
    ],

    scenarios: {
      optimal: "Báº¡n thÃ nh láº­p má»™t há»c viá»‡n khai váº¥n hoáº·c trung tÃ¢m trá»‹ liá»‡u tÃ¢m há»“n danh tiáº¿ng, Ä‘á»“ng hÃ nh cÃ¹ng cÃ¡c nhÃ  lÃ£nh Ä‘áº¡o vÃ  cÃ¡ nhÃ¢n vÆ°á»£t qua sang cháº¥n, tÃ¬m láº¡i láº½ sá»‘ng rá»±c rá»¡ vÃ  háº¡nh phÃºc Ä‘Ã­ch thá»±c.",
      default: "Báº¡n trá»Ÿ thÃ nh ngÆ°á»i báº¡n láº¯ng nghe tuyá»‡t vá»i á»Ÿ má»i nÆ¡i nhÆ°ng thÆ°á»ng xuyÃªn bá»‹ kiá»‡t sá»©c vÃ¬ 'hÃºt cáº¡n' nÄƒng lÆ°á»£ng tiÃªu cá»±c cá»§a ngÆ°á»i khÃ¡c mÃ  khÃ´ng cÃ³ ranh giá»›i báº£o vá»‡ cáº£m xÃºc.",
      pitfall: "Cáº¡m báº«y 'Vá»‹ cá»©u tinh quÃ¡ táº£i': Hy sinh báº£n thÃ¢n Ä‘á»ƒ giÃºp Ä‘á»¡ má»i ngÆ°á»i, quÃªn chÄƒm sÃ³c tÃ i chÃ­nh vÃ  sá»©c khá»e cá»§a chÃ­nh mÃ¬nh, dáº«n Ä‘áº¿n tá»•n thÆ°Æ¡ng tÃ¢m lÃ½ thá»© phÃ¡t."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): Chuáº©n HÃ³a ChuyÃªn MÃ´n & RÃ¨n Luyá»‡n ThÃ¢n - TÃ¢m",
        title: "XÃ¢y Dá»±ng Ná»™i Lá»±c Vá»¯ng VÃ ng & Láº¥y Chá»©ng Chá»‰ Khai Váº¥n Uy TÃ­n",
        milestone: "HoÃ n thÃ nh 100 giá» thá»±c hÃ nh khai váº¥n/trá»‹ liá»‡u cÃ³ giÃ¡m sÃ¡t vÃ  nháº­n chá»©ng chá»‰ quá»‘c táº¿ (ICF, NGH hoáº·c tÆ°Æ¡ng Ä‘Æ°Æ¡ng).",
        tasks: [
          "Theo há»c cÃ¡c chÆ°Æ¡ng trÃ¬nh Ä‘Ã o táº¡o chuyÃªn sÃ¢u vá» TÃ¢m lÃ½ há»c hÃ nh vi, NLP hoáº·c Khai váº¥n ICF.",
          "Thiáº¿t láº­p 'VÃ²ng trÃ²n ranh giá»›i cáº£m xÃºc': Há»c cÃ¡ch tá»« chá»‘i vÃ  báº£o vá»‡ nÄƒng lÆ°á»£ng cÃ¡ nhÃ¢n.",
          "Thá»±c hÃ nh khai váº¥n miá»…n phÃ­ cÃ³ pháº£n há»“i cho 20 khÃ¡ch hÃ ng Ä‘áº§u tiÃªn Ä‘á»ƒ mÃ i sáº¯c ká»¹ nÄƒng Ä‘áº·t cÃ¢u há»i.",
          "Duy trÃ¬ thÃ³i quen trá»‹ liá»‡u cÃ¡ nhÃ¢n Ä‘á»ƒ chá»¯a lÃ nh triá»‡t Ä‘á»ƒ má»i bÃ³ng tá»‘i tÃ¢m lÃ½ cá»§a báº£n thÃ¢n."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): XÃ¢y Dá»±ng PhÆ°Æ¡ng PhÃ¡p Signature & Má»Ÿ Rá»™ng áº¢nh HÆ°á»Ÿng",
        title: "Táº¡o Láº­p TrÆ°á»ng PhÃ¡i Khai Váº¥n Äá»™c Quyá»n & Tá»• Chá»©c Retreat",
        milestone: "Lá»‹ch khai váº¥n 1-1 kÃ­n chá»— vá»›i má»©c phÃ­ chuyÃªn gia cao cáº¥p; tá»• chá»©c thÃ nh cÃ´ng cÃ¡c khÃ³a tu táº­p/Retreat 30 ngÆ°á»i.",
        tasks: [
          "ÄÃºc káº¿t phÆ°Æ¡ng phÃ¡p chuyá»ƒn hÃ³a tÃ¢m lÃ½ Ä‘á»™c quyá»n mang dáº¥u áº¥n cÃ¡ nhÃ¢n cá»§a báº¡n.",
          "Tá»• chá»©c cÃ¡c chuyáº¿n hÃ nh trÃ¬nh Retreat chá»¯a lÃ nh káº¿t há»£p hÃ²a mÃ¬nh vÃ o thiÃªn nhiÃªn.",
          "PhÃ¡t triá»ƒn kÃªnh Podcast hoáº·c YouTube chia sáº» tri thá»©c chá»¯a lÃ nh vÃ  phÃ¡t triá»ƒn báº£n thÃ¢n sÃ¢u sáº¯c.",
          "ÄÃ o táº¡o Ä‘á»™i ngÅ© trá»£ giáº£ng há»— trá»£ Ä‘á»ƒ khÃ´ng pháº£i lÃ m viá»‡c quÃ¡ sá»©c."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Há»c Viá»‡n Chuyá»ƒn HÃ³a & Lan Tá»a Ãnh SÃ¡ng ToÃ n Cáº§u",
        title: "Äá»ƒ Láº¡i Di Sáº£n Chá»¯a LÃ nh: ÄÃ o Táº¡o Äá»™i NgÅ© Sá»© Giáº£ Káº¿ Cáº­n",
        milestone: "SÃ¡ng láº­p Há»c viá»‡n Khai váº¥n/TÃ¢m lÃ½ Ä‘Ã o táº¡o ra hÃ ng trÄƒm Coach cÃ³ tÃ¢m; xuáº¥t báº£n sÃ¡ch best-seller vá» chá»¯a lÃ nh.",
        tasks: [
          "Xuáº¥t báº£n cuá»‘n sÃ¡ch hÆ°á»›ng dáº«n tá»± chá»¯a lÃ nh vÃ  Ä‘Ã¡nh thá»©c tiá»m nÄƒng con ngÆ°á»i.",
          "ThÃ nh láº­p quá»¹ báº£o trá»£ sá»©c khá»e tÃ¢m tháº§n cho thanh thiáº¿u niÃªn vÃ  nhá»¯ng hoÃ n cáº£nh khÃ³ khÄƒn.",
          "Chuyá»ƒn vai trÃ² sang ngÆ°á»i cá»‘ váº¥n tá»‘i cao vÃ  truyá»n bÃ¡ triáº¿t lÃ½ sá»‘ng an láº¡c kháº¯p cÃ¡c diá»…n Ä‘Ã n quá»‘c táº¿.",
          "Táº­n hÆ°á»Ÿng cuá»™c sá»‘ng tÄ©nh táº¡i bÃªn khu vÆ°á»n mÆ¡ Æ°á»›c, hÃ²a há»£p trá»n váº¹n vá»›i thiÃªn nhiÃªn."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Thiá»n Ä‘á»‹nh chÃ¡nh niá»‡m 30 phÃºt má»—i sÃ¡ng Ä‘á»ƒ neo giá»¯ sá»± Ä‘á»‹nh tÄ©nh trong tÃ¢m há»“n.",
        "Quy táº¯c táº©y rá»­a nÄƒng lÆ°á»£ng sau má»—i buá»•i tham váº¥n: Rá»­a tay nÆ°á»›c áº¥m, hÃ­t thá»Ÿ sÃ¢u vÃ  ngáº¯t káº¿t ná»‘i cáº£m xÃºc.",
        "Viáº¿t 'Nháº­t kÃ½ biáº¿t Æ¡n' (Gratitude Journal): Liá»‡t kÃª 5 Ä‘iá»u nhiá»‡m mÃ u báº¡n cáº£m nháº­n Ä‘Æ°á»£c má»—i ngÃ y.",
        "Äi dáº¡o chÃ¢n tráº§n trÃªn cá» (Earthing) Ä‘á»ƒ tÃ¡i káº¿t ná»‘i vá»›i nÄƒng lÆ°á»£ng Ä‘áº¥t máº¹.",
        "Äá»c sÃ¢u cÃ¡c tÃ¡c pháº©m vá» tÃ¢m linh, triáº¿t há»c phÆ°Æ¡ng ÄÃ´ng vÃ  tÃ¢m lÃ½ há»c phÃ¢n tÃ­ch."
      ],
      skillStack: [
        "Nghá»‡ thuáº­t Láº¯ng nghe Tháº¥u thá»‹ & Äáº·t CÃ¢u há»i ÄÃ¡nh thá»©c (Active Listening & Powerful Questioning)",
        "TÃ¢m lÃ½ há»c HÃ nh vi & Trá»‹ liá»‡u Sang cháº¥n (Trauma-informed Care)",
        "Ká»¹ nÄƒng Äiá»u phá»‘i KhÃ´ng gian An toÃ n (Holding Space & Facilitation)",
        "XÃ¢y dá»±ng ChÆ°Æ¡ng trÃ¬nh Retreat & Chuyá»ƒn hÃ³a NhÃ³m (Transformative Experience Design)"
      ],
      books: [
        "Thá»©c Tá»‰nh Má»¥c ÄÃ­ch Sá»‘ng (A New Earth) - Eckhart Tolle",
        "Hiá»ƒu Vá» TrÃ¡i Tim - Tháº§y Minh Niá»‡m",
        "Sang Cháº¥n TÃ¢m LÃ½: CÆ¡ Thá»ƒ LuÃ´n Ghi Nhá»› (The Body Keeps the Score) - Bessel van der Kolk",
        "Khai Váº¥n TÃ¡i Táº¡o Hiá»‡u Suáº¥t (Coaching for Performance) - John Whitmore"
      ]
    }
  },

  deep_tech_architect: {
    id: "deep_tech_architect",
    name: "Kiáº¿n TrÃºc SÆ° CÃ´ng Nghá»‡ TÆ°Æ¡ng Lai",
    subtitle: "The Deep-Tech Architect & Cyber Pioneer",
    badge: "LÃ m Chá»§ TrÃ­ Tuá»‡ NhÃ¢n Táº¡o & Háº¡ Táº§ng TÆ°Æ¡ng Lai",
    slogan: "MÃ£ nguá»“n vÃ  thuáº­t toÃ¡n lÃ  ngÃ´n ngá»¯ má»›i Ä‘á»ƒ kiáº¿n táº¡o vÅ© trá»¥. Ai lÃ m chá»§ cÃ´ng nghá»‡, ngÆ°á»i Ä‘Ã³ viáº¿t nÃªn luáº­t chÆ¡i.",
    color: "#3b82f6", // Blue
    gradient: "from-blue-600 via-indigo-600 to-cyan-400",
    avatarIcon: "cpu",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  má»™t trong nhá»¯ng chuyÃªn gia cÃ´ng nghá»‡ cao cáº¥p nháº¥t, kiáº¿n trÃºc sÆ° trÆ°á»Ÿng (Chief Architect) hoáº·c nhÃ  sÃ¡ng láº­p cÃ´ng nghá»‡ lÃµi (Deep Tech Founder). Báº¡n giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n hÃ³c bÃºa nháº¥t cá»§a nhÃ¢n loáº¡i báº±ng AI, dá»¯ liá»‡u lá»›n, tÃ­nh toÃ¡n phÃ¢n tÃ¡n hoáº·c robot tá»± hÃ nh.",

    traits: [
      { label: "NÄƒng lá»±c tÆ° duy logic & Thuáº­t toÃ¡n", val: 98 },
      { label: "Tá»‘c Ä‘á»™ háº¥p thá»¥ cÃ´ng nghá»‡ má»›i", val: 96 },
      { label: "Kháº£ nÄƒng xÃ¢y dá»±ng há»‡ thá»‘ng chá»‹u táº£i", val: 93 },
      { label: "Táº§m nhÃ¬n á»©ng dá»¥ng cÃ´ng nghá»‡ lÃµi", val: 91 }
    ],

    scenarios: {
      optimal: "Báº¡n náº¯m giá»¯ cÃ¡c vá»‹ trÃ­ nÃ²ng cá»‘t táº¡i cÃ¡c ká»³ lÃ¢n cÃ´ng nghá»‡ hoáº·c sÃ¡ng láº­p má»™t startup Deep Tech Ä‘á»™t phÃ¡ Ä‘Æ°á»£c Ä‘á»‹nh giÃ¡ hÃ ng chá»¥c triá»‡u Ä‘Ã´, náº¯m trong tay cÃ¡c báº±ng sÃ¡ng cháº¿ cÃ´ng nghá»‡ mang táº§m vÃ³c tÆ°Æ¡ng lai.",
      default: "Báº¡n lÃ  má»™t ká»¹ sÆ° láº­p trÃ¬nh giá»i, nháº­n má»©c lÆ°Æ¡ng Ä‘Ã¡ng mÆ¡ Æ°á»›c nhÆ°ng chá»‰ dá»«ng láº¡i á»Ÿ vai trÃ² 'thá»£ code' thá»±c thi theo yÃªu cáº§u cá»§a ngÆ°á»i khÃ¡c thay vÃ¬ chá»§ Ä‘á»™ng Ä‘á»‹nh hÃ¬nh kiáº¿n trÃºc sáº£n pháº©m.",
      pitfall: "Cáº¡m báº«y 'ThÃ¡p ngÃ  ká»¹ thuáº­t': Say mÃª váº» Ä‘áº¹p cá»§a thuáº­t toÃ¡n phá»©c táº¡p mÃ  coi nháº¹ nhu cáº§u thá»±c táº¿ cá»§a thá»‹ trÆ°á»ng, hoáº·c thiáº¿u ká»¹ nÄƒng giao tiáº¿p dáº«n Ä‘áº¿n khÃ³ thuyáº¿t phá»¥c ngÆ°á»i khÃ¡c."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): Tinh ThÃ´ng CÃ´ng Nghá»‡ LÃµi & XÃ¢y Dá»±ng Dá»± Ãn Open Source",
        title: "VÆ°á»£t Trá»™i Ká»¹ Thuáº­t & LÃ m Chá»§ Kiáº¿n TrÃºc AI/Cloud Hiá»‡n Äáº¡i",
        milestone: "ÄÃ³ng gÃ³p cho dá»± Ã¡n Open Source lá»›n hoáº·c xÃ¢y dá»±ng 1 giáº£i phÃ¡p AI end-to-end cÃ³ 1,000+ stars trÃªn GitHub.",
        tasks: [
          "NghiÃªn cá»©u sÃ¢u kiáº¿n trÃºc Large Language Models (LLMs), RAG, Agentic Workflows vÃ  Vector Databases.",
          "Luyá»‡n táº­p giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n tá»‘i Æ°u hÃ³a há»‡ thá»‘ng chá»‹u táº£i cao (High-concurrency systems).",
          "Viáº¿t cÃ¡c bÃ i blog ká»¹ thuáº­t phÃ¢n tÃ­ch sÃ¢u kiáº¿n trÃºc há»‡ thá»‘ng Ä‘á»ƒ kháº³ng Ä‘á»‹nh uy tÃ­n trong cá»™ng Ä‘á»“ng Dev.",
          "XÃ¢y dá»±ng thÃ³i quen Ä‘á»c cÃ¡c bÃ i bÃ¡o nghiÃªn cá»©u khoa há»c (Arxiv papers) hÃ ng tuáº§n."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): Trá»Ÿ ThÃ nh Tech Lead & ThÆ°Æ¡ng Máº¡i HÃ³a Giáº£i PhÃ¡p",
        title: "Chuyá»ƒn Äá»•i Tá»« Ká»¹ SÆ° Giá»i Sang Kiáº¿n TrÃºc SÆ° TrÆ°á»Ÿng & NhÃ  SÃ¡ng Cháº¿",
        milestone: "LÃ£nh Ä‘áº¡o Ä‘á»™i ngÅ© ká»¹ thuáº­t 10+ ngÆ°á»i hoáº·c ra máº¯t sáº£n pháº©m cÃ´ng nghá»‡ B2B cÃ³ doanh thu Ä‘á»‹nh ká»³ (ARR).",
        tasks: [
          "RÃ¨n luyá»‡n ká»¹ nÄƒng káº¿t ná»‘i giá»¯a ngÃ´n ngá»¯ Ká»¹ thuáº­t vÃ  ngÃ´n ngá»¯ Kinh doanh.",
          "ÄÄƒng kÃ½ báº±ng sÃ¡ng cháº¿ hoáº·c giáº£i phÃ¡p báº£n quyá»n cho thuáº­t toÃ¡n Ä‘á»™c quyá»n cá»§a báº¡n.",
          "Thuyáº¿t trÃ¬nh táº¡i cÃ¡c há»™i nghá»‹ cÃ´ng nghá»‡ quá»‘c táº¿ danh giÃ¡.",
          "Nháº­n cá»• pháº§n thÆ°á»Ÿng (Equity/Stock Options) Ä‘Ã¡ng ká»ƒ táº¡i cÃ¡c cÃ´ng ty cÃ´ng nghá»‡ triá»ƒn vá»ng."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Äá»‹nh HÃ¬nh TÆ°Æ¡ng Lai Sá»‘ & VÆ°á»n Æ¯Æ¡m CÃ´ng Nghá»‡",
        title: "Äá»©ng á»ž Tuyáº¿n Äáº§u Cá»§a Cuá»™c CÃ¡ch Máº¡ng CÃ´ng Nghá»‡ NhÃ¢n Loáº¡i",
        milestone: "Trá»Ÿ thÃ nh Fellow/Distinguished Engineer hoáº·c Founder cÃ´ng nghá»‡; cá»‘ váº¥n cÃ´ng nghá»‡ cho cÃ¡c cÆ¡ quan chiáº¿n lÆ°á»£c.",
        tasks: [
          "Äáº§u tÆ° thiÃªn tháº§n vÃ o cÃ¡c startup cÃ´ng nghá»‡ tráº» tiá»m nÄƒng.",
          "Tham gia xÃ¢y dá»±ng cÃ¡c tiÃªu chuáº©n quá»‘c táº¿ vá» Ä‘áº¡o Ä‘á»©c vÃ  an toÃ n AI.",
          "ThÃ nh láº­p phÃ²ng nghiÃªn cá»©u Ä‘á»™c láº­p (R&D Lab) theo Ä‘uá»•i nhá»¯ng bÃ i toÃ¡n tÃ¡o báº¡o nháº¥t.",
          "Äáº¡t tá»± do tÃ i chÃ­nh hoÃ n háº£o nhá» giÃ¡ trá»‹ cá»• pháº§n cÃ´ng nghá»‡ bá»©t phÃ¡."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Äá»c 1 bÃ i bÃ¡o nghiÃªn cá»©u ká»¹ thuáº­t má»›i (ArXiv paper) má»—i thá»© Ba vÃ  thá»© NÄƒm.",
        "Code kata hoáº·c tÃ¡i cáº¥u trÃºc mÃ£ nguá»“n 45 phÃºt má»—i ngÃ y Ä‘á»ƒ giá»¯ sá»± nháº¡y bÃ©n ngÃ³n tay.",
        "Cháº¡y bá»™ hoáº·c táº­p bÆ¡i Ä‘á»ƒ tháº£ lá»ng Ä‘Ã´i máº¯t vÃ  nÃ£o bá»™ sau hÃ ng giá» nhÃ¬n mÃ n hÃ¬nh.",
        "Táº­p thÃ³i quen giáº£i thÃ­ch má»™t khÃ¡i niá»‡m cÃ´ng nghá»‡ phá»©c táº¡p cho ngÆ°á»i khÃ´ng chuyÃªn hiá»ƒu Ä‘Æ°á»£c.",
        "Thá»±c hÃ nh 'No Screen Sunday': 1 ngÃ y trá»n váº¹n hÃ²a mÃ¬nh vÃ o thiÃªn nhiÃªn khÃ´ng Ä‘á»“ cÃ´ng nghá»‡."
      ],
      skillStack: [
        "Kiáº¿n trÃºc Há»‡ thá»‘ng PhÃ¢n tÃ¡n & AI Agents (Distributed Systems & Multi-agent Frameworks)",
        "Tá»‘i Æ°u hÃ³a MÃ´ hÃ¬nh & Triá»ƒn khai biÃªn (Model Optimization, Quantization, Edge AI)",
        "Báº£o máº­t Há»‡ thá»‘ng & CÆ¡ sá»Ÿ háº¡ táº§ng ÄÃ¡m mÃ¢y (DevSecOps & Cloud Native Architecture)",
        "LÃ£nh Ä‘áº¡o Ká»¹ thuáº­t & Quáº£n trá»‹ Sáº£n pháº©m CÃ´ng nghá»‡ (Technical Leadership & Tech-Product Strategy)"
      ],
      books: [
        "Thiáº¿t Káº¿ á»¨ng Dá»¥ng Chá»‹u Táº£i Cao (Designing Data-Intensive Applications) - Martin Kleppmann",
        "Clean Architecture: Cáº¥u TrÃºc MÃ£ Nguá»“n Sáº¡ch - Robert C. Martin",
        "Zero To One: Tá»« KhÃ´ng Äáº¿n Má»™t - Peter Thiel",
        "Ká»· NguyÃªn TrÃ­ Tuá»‡ NhÃ¢n Táº¡o (The Age of AI) - Henry Kissinger, Eric Schmidt"
      ]
    }
  },

  harmonious_sage: {
    id: "harmonious_sage",
    name: "Hiá»n Triáº¿t ViÃªn MÃ£n & CÃ¢n Báº±ng",
    subtitle: "The Harmonious Sage & Master of Living",
    badge: "ViÃªn MÃ£n ToÃ n Diá»‡n & An NhiÃªn Tá»± Táº¡i",
    slogan: "Sá»± giÃ u cÃ³ thá»±c sá»± khÃ´ng pháº£i lÃ  cÃ³ tháº­t nhiá»u thá»©, mÃ  lÃ  cÃ³ Ä‘á»§ vÃ  lÃ m chá»§ trá»n váº¹n sá»± bÃ¬nh an cá»§a tÃ¢m há»“n.",
    color: "#14b8a6", // Teal
    gradient: "from-teal-500 via-emerald-600 to-green-500",
    avatarIcon: "sun",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  hÃ¬nh máº«u hiáº¿m cÃ³ vá» má»™t cuá»™c Ä‘á»i viÃªn mÃ£n trÃ²n Ä‘áº§y: TÃ i chÃ­nh vá»¯ng vÃ ng, sá»©c khá»e dáº»o dai, gia Ä‘Ã¬nh áº¥m Ãªm vÃ  ná»™i tÃ¢m an tá»‹nh. Báº¡n tháº¥u hiá»ƒu nghá»‡ thuáº­t 'biáº¿t Ä‘á»§', khÃ´ng cháº¡y theo nhá»¯ng áº£o áº£nh hÆ° danh mÃ  táº­p trung nuÃ´i dÆ°á»¡ng nhá»¯ng giÃ¡ trá»‹ sá»‘ng Ä‘Ã­ch thá»±c.",

    traits: [
      { label: "CÃ¢n báº±ng cuá»™c sá»‘ng & TÃ¢m lÃ½", val: 99 },
      { label: "Sá»©c khá»e thá»ƒ cháº¥t & Tinh tháº§n", val: 95 },
      { label: "TrÃ¢n trá»ng gia Ä‘Ã¬nh & CÃ¡c má»‘i quan há»‡", val: 96 },
      { label: "Nghá»‡ thuáº­t quáº£n trá»‹ sá»± hÃ i lÃ²ng", val: 94 }
    ],

    scenarios: {
      optimal: "Báº¡n Ä‘áº¡t Ä‘Æ°á»£c tráº¡ng thÃ¡i tá»± do tÃ i chÃ­nh bá»n vá»¯ng, sá»‘ng trong ngÃ´i nhÃ  mÆ¡ Æ°á»›c chan hÃ²a cÃ¢y cá», con cÃ¡i ngoan ngoÃ£n, tÃ¢m trÃ­ tá»± táº¡i, lÃ m nhá»¯ng viá»‡c mÃ¬nh thÃ­ch vá»›i nhá»¯ng ngÆ°á»i mÃ¬nh yÃªu quÃ½.",
      default: "Báº¡n cÃ³ má»™t cuá»™c sá»‘ng an nhÃ n bÃ¬nh láº·ng nhÆ°ng Ä‘Ã´i khi cáº£m tháº¥y cháº¡nh lÃ²ng trÆ°á»›c sá»± bá»©t phÃ¡ cá»§a báº¡n bÃ¨ Ä‘á»“ng trang lá»©a náº¿u khÃ´ng tá»± tin vÃ o con Ä‘Æ°á»ng bÃ¬nh yÃªn cá»§a mÃ¬nh.",
      pitfall: "Cáº¡m báº«y 'Thá»¥ Ä‘á»™ng & TrÃ¡nh nÃ©': Nháº§m láº«n giá»¯a sá»± bÃ¬nh yÃªn ná»™i táº¡i vá»›i thÃ¡i Ä‘á»™ ngáº¡i khÃ³, bá» cuá»™c quÃ¡ sá»›m trÆ°á»›c nhá»¯ng thá»­ thÃ¡ch cáº§n thiáº¿t cá»§a cuá»™c Ä‘á»i."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): Thanh Lá»c Cuá»™c Sá»‘ng & Thiáº¿t Láº­p Nhá»‹p Sinh Há»c VÃ ng",
        title: "Tá»‘i Giáº£n HÃ³a Cuá»™c Äá»i & ChÄƒm SÃ³c Sá»©c Khá»e ThÃ¢n - TÃ¢m",
        milestone: "Loáº¡i bá» 50% Ä‘á»“ Ä‘áº¡c vÃ  cÃ¡c má»‘i quan há»‡ Ä‘á»™c háº¡i; xÃ¢y dá»±ng chá»‰ sá»‘ sá»©c khá»e hoÃ n háº£o (giáº¥c ngá»§, dinh dÆ°á»¡ng, thá»ƒ lá»±c).",
        tasks: [
          "Ãp dá»¥ng lá»‘i sá»‘ng tá»‘i giáº£n (Minimalism): Chá»‰ giá»¯ láº¡i nhá»¯ng váº­t dá»¥ng mang láº¡i niá»m vui chÃ¢n tháº­t.",
          "KhÃ¡m sá»©c khá»e tá»•ng quÃ¡t toÃ n diá»‡n vÃ  xÃ¢y dá»±ng cháº¿ Ä‘á»™ dinh dÆ°á»¡ng lÃ nh máº¡nh chuáº©n y khoa.",
          "Cáº¯t Ä‘á»©t hoáº·c háº¡n cháº¿ tá»‘i Ä‘a thá»i gian vá»›i nhá»¯ng ngÆ°á»i hay than vÃ£n vÃ  gieo ráº¯c nÄƒng lÆ°á»£ng tiÃªu cá»±c.",
          "Táº­p thÃ³i quen ngá»§ Ä‘á»§ 7-8 tiáº¿ng má»—i Ä‘Ãªm vÃ  táº¯t Ä‘iá»‡n thoáº¡i trÆ°á»›c khi lÃªn giÆ°á»ng 1 tiáº¿ng."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): XÃ¢y Dá»±ng Tá»± Do TÃ i ChÃ­nh Tá»‘i Giáº£n (Lean FIRE)",
        title: "Bá»n Vá»¯ng Nguá»“n Thu & Äáº§u TÆ° Cho Nhá»¯ng Má»‘i Quan Há»‡ Tri Ká»·",
        milestone: "TÃ­ch lÅ©y tÃ i sáº£n Ä‘áº¡t ngÆ°á»¡ng Tá»± do TÃ i chÃ­nh Tá»‘i giáº£n (Lean FIRE); cÃ³ nhá»¯ng chuyáº¿n du lá»‹ch cháº¥t lÆ°á»£ng cÃ¹ng gia Ä‘Ã¬nh.",
        tasks: [
          "Thiáº¿t láº­p nguá»“n thu nháº­p á»•n Ä‘á»‹nh khÃ´ng Ä‘Ã²i há»i lÃ m viá»‡c quÃ¡ 30 giá»/tuáº§n.",
          "XÃ¢y dá»±ng khu vÆ°á»n nhá», há»c cÃ¡ch chÄƒm sÃ³c cÃ¢y cá» vÃ  náº¥u nhá»¯ng bá»¯a Äƒn áº¥m cÃºng cho ngÆ°á»i thÃ¢n.",
          "DÃ nh trá»n váº¹n cuá»‘i tuáº§n cho gia Ä‘Ã¬nh vÃ  sá»Ÿ thÃ­ch cÃ¡ nhÃ¢n (há»™i há»a, Ã¢m nháº¡c, cáº¯m tráº¡i ngoÃ i trá»i).",
          "Thá»±c hÃ nh lá»‘i sá»‘ng bá»n vá»¯ng, giáº£m thiá»ƒu rÃ¡c tháº£i nhá»±a vÃ  sá»‘ng hÃ²a há»£p vá»›i mÃ´i trÆ°á»ng tá»± nhiÃªn."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Cuá»™c Äá»i Trá»n Váº¹n: Sá»‘ng SÃ¢u Sáº¯c Tá»«ng Khoáº£nh Kháº¯c",
        title: "Tá»± Táº¡i Giá»¯a NhÃ¢n Gian: Truyá»n Trao BÃ¬nh An Cho Nhá»¯ng NgÆ°á»i Xung Quanh",
        milestone: "Äáº¡t sá»± tháº£nh thÆ¡i tuyá»‡t Ä‘á»‘i trong tÃ¢m trÃ­; trá»Ÿ thÃ nh báº¿n Ä‘á»— bÃ¬nh yÃªn vÃ  nguá»“n Ä‘á»™ng viÃªn cho ngÆ°á»i thÃ¢n vÃ  báº¡n bÃ¨.",
        tasks: [
          "Sá»Ÿ há»¯u má»™t khÃ´ng gian sá»‘ng mÆ¡ Æ°á»›c gáº§n gÅ©i thiÃªn nhiÃªn.",
          "Chia sáº» nghá»‡ thuáº­t sá»‘ng an láº¡c qua nhá»¯ng bÃ i viáº¿t giáº£n dá»‹ hoáº·c cÃ¡c buá»•i trÃ  Ä‘Ã m áº¥m Ã¡p.",
          "Äi du lá»‹ch cháº­m (Slow Travel), cáº£m nháº­n váº» Ä‘áº¹p cá»§a cÃ¡c vÃ¹ng Ä‘áº¥t mÃ  khÃ´ng cáº§n vá»™i vÃ£ check-in.",
          "Táº­n hÆ°á»Ÿng tá»«ng hÆ¡i thá»Ÿ vÃ  trÃ¢n trá»ng tá»«ng ngÃ y Ä‘Æ°á»£c sá»‘ng trá»n váº¹n trÃªn cÃµi Ä‘á»i nÃ y."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Uá»‘ng 1 cá»‘c nÆ°á»›c áº¥m vÃ  ngáº¯m bÃ¬nh minh 15 phÃºt má»—i sÃ¡ng trong sá»± tÄ©nh láº·ng hoÃ n toÃ n.",
        "Äi bá»™ nháº¹ nhÃ ng trong cÃ´ng viÃªn hoáº·c dÆ°á»›i bÃ³ng cÃ¢y 45 phÃºt má»—i chiá»u.",
        "Bá»¯a cÆ¡m gia Ä‘Ã¬nh áº¥m cÃºng: CÃ¹ng náº¥u nÆ°á»›ng vÃ  trÃ² chuyá»‡n khÃ´ng cÃ³ thiáº¿t bá»‹ Ä‘iá»‡n tá»­ trÃªn bÃ n Äƒn.",
        "Thá»±c hÃ nh 'BuÃ´ng bá»': Má»—i tá»‘i tá»± nhá»§ 'HÃ´m nay mÃ¬nh Ä‘Ã£ lÃ m háº¿t sá»©c, chuyá»‡n ngÃ y mai hÃ£y Ä‘á»ƒ ngÃ y mai lo'.",
        "DÃ nh 1 ngÃ y trong tuáº§n hoÃ n toÃ n khÃ´ng tiÃªu tiá»n vÃ o nhá»¯ng thá»© khÃ´ng thiáº¿t yáº¿u."
      ],
      skillStack: [
        "Nghá»‡ thuáº­t Sá»‘ng Tá»‘i Giáº£n & Quáº£n LÃ½ Nhu Cáº§u (Minimalism & Conscious Living)",
        "Y Há»c Dá»± PhÃ²ng & ChÄƒm SÃ³c Sá»©c Khá»e ToÃ n Diá»‡n (Longevity & Wellness)",
        "Giao Tiáº¿p KhÃ´ng Báº¡o Lá»±c & NuÃ´i DÆ°á»¡ng HÃ´n NhÃ¢n (Nonviolent Communication)",
        "Quáº£n Trá»‹ TÃ i ChÃ­nh An ToÃ n & Äá»™c Láº­p Bá»n Vá»¯ng (Safe Financial Planning)"
      ],
      books: [
        "Lá»‘i Sá»‘ng Tá»‘i Giáº£n Thá»i CÃ´ng Nghá»‡ Sá»‘ (Digital Minimalism) - Cal Newport",
        "Nghá»‡ Thuáº­t Sá»‘ng ÄÆ¡n Giáº£n - Shunmyo Masuno",
        "Háº¡nh PhÃºc Táº¡i TÃ¢m - Thiá»n sÆ° ThÃ­ch Nháº¥t Háº¡nh",
        "Triáº¿t LÃ½ Sá»‘ng Kháº¯c Ká»· (A Guide to the Good Life) - William B. Irvine"
      ]
    }
  },

  impact_catalyst: {
    id: "impact_catalyst",
    name: "NhÃ  Kiáº¿n Táº¡o TÃ¡c Äá»™ng XÃ£ Há»™i",
    subtitle: "The High-Impact Changemaker & Humanitarian",
    badge: "Cá»‘ng Hiáº¿n Vá»‹ NhÃ¢n Sinh & Thay Äá»•i Cá»™ng Äá»“ng",
    slogan: "ThÆ°á»›c Ä‘o cuá»™c Ä‘á»i khÃ´ng pháº£i lÃ  nhá»¯ng gÃ¬ báº¡n giá»¯ cho riÃªng mÃ¬nh, mÃ  lÃ  nhá»¯ng cuá»™c Ä‘á»i báº¡n Ä‘Ã£ nÃ¢ng Ä‘á»¡ bÆ°á»›c qua bÃ£o giÃ´ng.",
    color: "#e11d48", // Rose/Crimson
    gradient: "from-rose-600 via-red-500 to-amber-500",
    avatarIcon: "globe-2",
    summary: "Trong 5 - 10 nÄƒm tá»›i, báº¡n sáº½ lÃ  má»™t nhÃ¢n váº­t tiÃªn phong trong viá»‡c giáº£i quyáº¿t cÃ¡c bÃ i toÃ¡n hÃ³c bÃºa cá»§a xÃ£ há»™i (giÃ¡o dá»¥c bÃ¬nh Ä‘áº³ng, biáº¿n Ä‘á»•i khÃ­ háº­u, xÃ³a Ä‘Ã³i giáº£m nghÃ¨o, y táº¿ cá»™ng Ä‘á»“ng). Báº¡n káº¿t há»£p giá»¯a trÃ¡i tim nhÃ¢n háº­u rá»±c lá»­a vÃ  bá»™ Ã³c váº­n hÃ nh sáº¯c bÃ©n Ä‘á»ƒ táº¡o ra thay Ä‘á»•i mang tÃ­nh há»‡ thá»‘ng.",

    traits: [
      { label: "LÃ½ tÆ°á»Ÿng phá»¥ng sá»± xÃ£ há»™i", val: 99 },
      { label: "Kháº£ nÄƒng váº­n Ä‘á»™ng nguá»“n lá»±c", val: 94 },
      { label: "Bá»n bá»‰ Ä‘áº¥u tranh vÃ¬ chÃ­nh nghÄ©a", val: 95 },
      { label: "Truyá»n cáº£m há»©ng hÃ nh Ä‘á»™ng", val: 92 }
    ],

    scenarios: {
      optimal: "Báº¡n Ä‘iá»u hÃ nh má»™t tá»• chá»©c phi chÃ­nh phá»§ (NGO) hoáº·c doanh nghiá»‡p táº¡o tÃ¡c Ä‘á»™ng xÃ£ há»™i (Social Enterprise) mang láº¡i sá»± Ä‘á»•i Ä‘á»i cho hÃ ng váº¡n ngÆ°á»i, Ä‘Æ°á»£c cá»™ng Ä‘á»“ng quá»‘c táº¿ ghi nháº­n vÃ  vinh danh.",
      default: "Báº¡n nhiá»‡t tÃ¬nh tham gia nhiá»u hoáº¡t Ä‘á»™ng thiá»‡n nguyá»‡n nhÆ°ng hoáº¡t Ä‘á»™ng mang tÃ­nh tá»± phÃ¡t, manh mÃºn, thiáº¿u nguá»“n lá»±c tÃ i chÃ­nh bá»n vá»¯ng nÃªn dá»… bá»‹ quÃ¡ táº£i.",
      pitfall: "Cáº¡m báº«y 'Sá»± pháº«n uáº¥t trÆ°á»›c báº¥t cÃ´ng': QuÃ¡ tháº¥t vá»ng trÆ°á»›c máº·t trÃ¡i cá»§a xÃ£ há»™i dáº«n Ä‘áº¿n cay Ä‘áº¯ng, hoÃ i nghi vÃ  kiá»‡t sá»©c vÃ¬ chiáº¿n Ä‘áº¥u Ä‘Æ¡n Ä‘á»™c."
    },

    roadmap: [
      {
        phase: "Giai Äoáº¡n 1 (NÄƒm 0 - 1): TÃ¬m Kiáº¿m Váº¥n Äá» Cá»‘t LÃµi & Dá»± Ãn ThÃ­ Äiá»ƒm",
        title: "Hiá»ƒu SÃ¢u Ná»—i Äau Cá»™ng Äá»“ng & XÃ¢y Dá»±ng MÃ´ HÃ¬nh Thá»­ Nghiá»‡m",
        milestone: "Triá»ƒn khai thÃ nh cÃ´ng 1 dá»± Ã¡n cá»™ng Ä‘á»“ng táº¡o ra tÃ¡c Ä‘á»™ng Ä‘o lÆ°á»ng Ä‘Æ°á»£c cho Ã­t nháº¥t 200 ngÆ°á»i thá»¥ hÆ°á»Ÿng.",
        tasks: [
          "Thá»±c hiá»‡n nghiÃªn cá»©u thá»±c Ä‘á»‹a (Fieldwork) Ä‘á»ƒ láº¯ng nghe trá»±c tiáº¿p khÃ³ khÄƒn cá»§a Ä‘á»‘i tÆ°á»£ng má»¥c tiÃªu.",
          "Há»c cÃ¡ch viáº¿t Ä‘á» xuáº¥t xin tÃ i trá»£ (Grant Proposal) vÃ  ká»¹ nÄƒng gÃ¢y quá»¹ chuyÃªn nghiá»‡p.",
          "Há»£p tÃ¡c vá»›i cÃ¡c tá»• chá»©c thiá»‡n nguyá»‡n uy tÃ­n Ä‘Ã£ cÃ³ sáºµn máº¡ng lÆ°á»›i cÆ¡ sá»Ÿ.",
          "á»¨ng dá»¥ng nguyÃªn lÃ½ 'Hiá»‡u Quáº£ Vá»‹ Tha' (Effective Altruism) Ä‘á»ƒ tá»‘i Ä‘a hÃ³a tÃ¡c Ä‘á»™ng trÃªn má»—i Ä‘á»“ng tiá»n chi ra."
        ]
      },
      {
        phase: "Giai Äoáº¡n 2 (NÄƒm 1 - 3): XÃ¢y Dá»±ng Doanh Nghiá»‡p XÃ£ Há»™i Tá»± Chá»§ TÃ i ChÃ­nh",
        title: "ThÆ°Æ¡ng Máº¡i HÃ³a VÃ¬ Sá»© Má»‡nh: KhÃ´ng Cáº§n Sá»‘ng Phá»¥ Thuá»™c VÃ o QuyÃªn GÃ³p",
        milestone: "Doanh nghiá»‡p xÃ£ há»™i Ä‘áº¡t Ä‘iá»ƒm hÃ²a vá»‘n vÃ  tá»± táº¡o ra 70% ngÃ¢n sÃ¡ch hoáº¡t Ä‘á»™ng; má»Ÿ rá»™ng ra 3 tá»‰nh thÃ nh.",
        tasks: [
          "XÃ¢y dá»±ng mÃ´ hÃ¬nh kinh doanh cÃ³ lá»£i nhuáº­n Ä‘á»ƒ tÃ¡i Ä‘áº§u tÆ° 100% vÃ o sá»© má»‡nh phá»¥ng sá»±.",
          "Váº­n Ä‘á»™ng cÃ¡c nhÃ  tÃ i trá»£ lá»›n, doanh nghiá»‡p CSR Ä‘á»“ng hÃ nh dÃ i háº¡n.",
          "ÄÆ°a cÃ´ng nghá»‡ vÃ o giÃ¡m sÃ¡t tÃ­nh minh báº¡ch tÃ i chÃ­nh 100% báº±ng Blockchain hoáº·c cÃ´ng khai má»Ÿ.",
          "Táº­p há»£p Ä‘á»™i ngÅ© tÃ¬nh nguyá»‡n viÃªn vÃ  nhÃ¢n sá»± toÃ n thá»i gian cÃ³ cÃ¹ng há»‡ giÃ¡ trá»‹ phá»¥ng sá»±."
        ]
      },
      {
        phase: "Giai Äoáº¡n 3 (NÄƒm 3 - 5+): Váº­n Äá»™ng ChÃ­nh SÃ¡ch & Táº¡o TÃ¡c Äá»™ng Quy MÃ´ Quá»‘c Gia",
        title: "Thay Äá»•i Cáº¥u TrÃºc Há»‡ Thá»‘ng: Äá»ƒ Láº¡i Di Sáº£n NhÃ¢n VÄƒn TrÆ°á»ng Tá»“n",
        milestone: "Giáº£i phÃ¡p cá»§a báº¡n Ä‘Æ°á»£c nhÃ¢n rá»™ng thÃ nh chÃ­nh sÃ¡ch cÃ´ng hoáº·c mÃ´ hÃ¬nh quá»‘c táº¿; nÃ¢ng Ä‘á»¡ cuá»™c sá»‘ng cá»§a hÃ ng váº¡n ngÆ°á»i.",
        tasks: [
          "Tham gia tham váº¥n vÃ  váº­n Ä‘á»™ng cÃ¡c chÃ­nh sÃ¡ch xÃ£ há»™i cÃ³ lá»£i cho ngÆ°á»i yáº¿u tháº¿.",
          "LiÃªn káº¿t vá»›i cÃ¡c tá»• chá»©c cá»§a LiÃªn Há»£p Quá»‘c (UN), World Bank Ä‘á»ƒ tiáº¿p cáº­n nguá»“n lá»±c toÃ n cáº§u.",
          "XÃ¢y dá»±ng há»c viá»‡n Ä‘Ã o táº¡o cÃ¡c nhÃ  lÃ£nh Ä‘áº¡o xÃ£ há»™i tháº¿ há»‡ káº¿ tiáº¿p.",
          "Ghi dáº¥u áº¥n cá»§a báº¡n nhÆ° má»™t ngÆ°á»i tháº¯p Ä‘uá»‘c sÆ°á»Ÿi áº¥m tháº¿ giá»›i nÃ y."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Má»—i tuáº§n dÃ nh Ã­t nháº¥t ná»­a ngÃ y trá»±c tiáº¿p gáº·p gá»¡ vÃ  láº¯ng nghe nhá»¯ng máº£nh Ä‘á»i khÃ³ khÄƒn.",
        "RÃ¨n luyá»‡n ká»¹ nÄƒng káº¿t ná»‘i (Networking) vá»›i cÃ¡c nhÃ  háº£o tÃ¢m vÃ  lÃ£nh Ä‘áº¡o doanh nghiá»‡p hÃ ng Ä‘áº§u.",
        "Táº­p thá»ƒ lá»±c cÆ°á»ng Ä‘á»™ cao Ä‘á»ƒ cÃ³ cÆ¡ thá»ƒ sáº¯t Ä‘Ã¡ gÃ¡nh vÃ¡c cÃ¡c chuyáº¿n Ä‘i cÃ´ng tÃ¡c xa xÃ´i hiá»ƒm trá»Ÿ.",
        "Thiá»n Ä‘á»‹nh tá»« bi (Metta Meditation): Gá»­i nÄƒng lÆ°á»£ng yÃªu thÆ°Æ¡ng vÃ  an lÃ nh Ä‘áº¿n muÃ´n loÃ i.",
        "CÃ¢n báº±ng cáº£m xÃºc: Nháº¯c nhá»Ÿ báº£n thÃ¢n ráº±ng thay Ä‘á»•i tháº¿ giá»›i lÃ  má»™t cuá»™c cháº¡y Marathon, khÃ´ng pháº£i cháº¡y nÆ°á»›c rÃºt."
      ],
      skillStack: [
        "Ká»¹ nÄƒng Váº­n Ä‘á»™ng GÃ¢y quá»¹ & Quáº£n lÃ½ Nguá»“n lá»±c (Fundraising & Resource Mobilization)",
        "Äo lÆ°á»ng & ÄÃ¡nh giÃ¡ TÃ¡c Ä‘á»™ng XÃ£ há»™i (Social Impact Measurement - SROI)",
        "Thiáº¿t káº¿ Doanh nghiá»‡p XÃ£ há»™i Bá»n vá»¯ng (Social Business Model Canvas)",
        "Truyá»n thÃ´ng Thay Ä‘á»•i HÃ nh vi & Váº­n Ä‘á»™ng ChÃ­nh sÃ¡ch (Advocacy & Public Campaigning)"
      ],
      books: [
        "Táº¡o Ra Má»™t Tháº¿ Giá»›i KhÃ´ng NghÃ¨o ÄÃ³i - Muhammad Yunus",
        "LÃ m Viá»‡c Thiá»‡n ÄÃºng CÃ¡ch (Doing Good Better) - William MacAskill",
        "NgÆ°á»i DÃ¡m Cho Äi (The Go-Giver) - Bob Burg, John David Mann",
        "ÄÆ°á»ng DÃ i Tá»›i Tá»± Do (Long Walk to Freedom) - Nelson Mandela"
      ]
    }
  }
};

// Module thuáº­t toÃ¡n tÃ­nh Ä‘iá»ƒm ma tráº­n Ä‘a trá»¥c vÃ  phÃ¢n tÃ­ch Báº£n Thá»ƒ TÆ°Æ¡ng Lai


// Vector trá»ng sá»‘ chuáº©n hÃ³a cá»§a tá»«ng Archetype trÃªn 6 trá»¥c: [vision, execution, innovation, influence, wealth, wellBeing]
const ARCHETYPE_VECTORS = {
  visionary_leader: {
    weights: { vision: 32, execution: 26, innovation: 18, influence: 30, wealth: 24, wellBeing: 12 },
    primaryKey: "visionary_leader"
  },
  creative_pioneer: {
    weights: { vision: 24, execution: 16, innovation: 35, influence: 18, wealth: 16, wellBeing: 26 },
    primaryKey: "creative_pioneer"
  },
  strategic_mastermind: {
    weights: { vision: 32, execution: 28, innovation: 20, influence: 16, wealth: 34, wellBeing: 14 },
    primaryKey: "strategic_mastermind"
  },
  digital_solopreneur: {
    weights: { vision: 22, execution: 26, innovation: 28, influence: 14, wealth: 32, wellBeing: 26 },
    primaryKey: "digital_solopreneur"
  },
  empathetic_healer: {
    weights: { vision: 18, execution: 16, innovation: 14, influence: 35, wealth: 12, wellBeing: 36 },
    primaryKey: "empathetic_healer"
  },
  deep_tech_architect: {
    weights: { vision: 28, execution: 28, innovation: 34, influence: 12, wealth: 24, wellBeing: 16 },
    primaryKey: "deep_tech_architect"
  },
  harmonious_sage: {
    weights: { vision: 14, execution: 20, innovation: 14, influence: 20, wealth: 20, wellBeing: 38 },
    primaryKey: "harmonious_sage"
  },
  impact_catalyst: {
    weights: { vision: 28, execution: 24, innovation: 18, influence: 36, wealth: 14, wellBeing: 28 },
    primaryKey: "impact_catalyst"
  }
};

/**
 * TÃ­nh toÃ¡n káº¿t quáº£ toÃ n diá»‡n dá»±a trÃªn cÃ¢u tráº£ lá»i
 * @param {Object} userData - { name, ageGroup, currentRole, targetYear }
 * @param {Array} userAnswers - Máº£ng lá»±a chá»n cá»§a cÃ¡c cÃ¢u há»i
 */
function calculateFutureProfile(userData, userAnswers) {
  // 1. Khá»Ÿi táº¡o Ä‘iá»ƒm 6 trá»¥c
  const rawScores = {
    vision: 0,
    execution: 0,
    innovation: 0,
    influence: 0,
    wealth: 0,
    wellBeing: 0
  };

  // 2. Cá»™ng dá»“n Ä‘iá»ƒm tá»« cÃ¢u tráº£ lá»i
  userAnswers.forEach((ans) => {
    if (ans && ans.scores) {
      for (const [key, val] of Object.entries(ans.scores)) {
        if (rawScores[key] !== undefined) {
          rawScores[key] += val;
        }
      }
    }
  });

  // 3. Chuáº©n hÃ³a thang Ä‘iá»ƒm % cho tá»«ng trá»¥c (Thang tá»‘i Ä‘a khoáº£ng 30 Ä‘iá»ƒm má»—i trá»¥c trong 16 cÃ¢u)
  const maxPossible = 26; // Chuáº©n hÃ³a tiá»‡m cáº­n 100%
  const percentages = {};
  for (const [key, val] of Object.entries(rawScores)) {
    const pct = Math.min(99, Math.max(35, Math.round((val / maxPossible) * 100)));
    percentages[key] = pct;
  }

  // 4. TÃ­nh toÃ¡n Ä‘á»™ tÆ°Æ¡ng há»£p (Correlation / Cosine Distance) vá»›i tá»«ng Archetype
  const matchScores = [];

  for (const [archId, data] of Object.entries(ARCHETYPE_VECTORS)) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (const axis of ["vision", "execution", "innovation", "influence", "wealth", "wellBeing"]) {
      const userVal = percentages[axis];
      const targetVal = data.weights[axis];
      dotProduct += userVal * targetVal;
      normA += userVal * userVal;
      normB += targetVal * targetVal;
    }

    const similarity = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    const matchPercent = Math.min(98, Math.max(68, Math.round(similarity * 100)));

    matchScores.push({
      id: archId,
      matchPercent,
      archetype: ARCHETYPES[archId]
    });
  }

  // Sáº¯p xáº¿p giáº£m dáº§n theo Ä‘á»™ hÃ²a há»£p
  matchScores.sort((a, b) => b.matchPercent - a.matchPercent);

  const primaryMatch = matchScores[0];
  const secondaryMatch = matchScores[1];

  // 5. TÃ­nh toÃ¡n cÃ¡c chá»‰ sá»‘ bá»• trá»£
  const financialFreedomScore = Math.round((percentages.wealth * 0.6 + percentages.execution * 0.4));
  const socialInfluenceScore = Math.round((percentages.influence * 0.6 + percentages.vision * 0.4));
  const fulfillmentScore = Math.round((percentages.wellBeing * 0.7 + percentages.innovation * 0.3));
  const masteryScore = Math.round((percentages.execution * 0.5 + percentages.innovation * 0.5));

  return {
    userData: {
      name: userData.name || "NhÃ  Khai PhÃ¡ TÆ°Æ¡ng Lai",
      ageGroup: userData.ageGroup || "20 - 30 tuá»•i",
      currentRole: userData.currentRole || "NgÆ°á»i Äang TÃ¡i Äá»‹nh HÃ¬nh Báº£n ThÃ¢n",
      horizon: userData.horizon || "5 - 10 nÄƒm tá»›i",
      createdAt: new Date().toLocaleDateString("vi-VN")
    },
    primary: primaryMatch.archetype,
    primaryMatchPercent: primaryMatch.matchPercent,
    secondary: secondaryMatch.archetype,
    secondaryMatchPercent: secondaryMatch.matchPercent,
    rawScores,
    percentages,
    metrics: {
      financialFreedom: financialFreedomScore,
      socialInfluence: socialInfluenceScore,
      fulfillment: fulfillmentScore,
      mastery: masteryScore
    },
    allMatches: matchScores
  };
}

// Module váº½ biá»ƒu Ä‘á»“ Radar Ä‘a chiá»u tÆ°Æ¡ng tÃ¡c trÃªn HTML5 Canvas
// KhÃ´ng phá»¥ thuá»™c thÆ° viá»‡n náº·ng, há»— trá»£ Retina screen vÃ  animation mÆ°á»£t mÃ 

class RadarChart {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.animationProgress = 0;
    this.animationId = null;
  }

  render(percentages, colorTheme = "#8b5cf6") {
    if (!this.canvas || !this.ctx) return;

    // Äáº£m báº£o Canvas nÃ©t trÃªn mÃ n hÃ¬nh Retina / High DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    const displayWidth = rect.width || 420;
    const displayHeight = rect.height || 360;

    this.canvas.width = displayWidth * dpr;
    this.canvas.height = displayHeight * dpr;
    this.ctx.scale(dpr, dpr);

    const axes = [
      { key: "vision", label: "Táº§m NhÃ¬n", icon: "ðŸ‘ï¸" },
      { key: "execution", label: "Thá»±c Thi", icon: "âš¡" },
      { key: "innovation", label: "SÃ¡ng Táº¡o", icon: "ðŸ’¡" },
      { key: "influence", label: "áº¢nh HÆ°á»Ÿng", icon: "ðŸŒŸ" },
      { key: "wealth", label: "TÃ i ChÃ­nh", icon: "ðŸ’Ž" },
      { key: "wellBeing", label: "CÃ¢n Báº±ng", icon: "ðŸŒ¿" }
    ];

    const values = axes.map((a) => (percentages[a.key] || 50) / 100);

    // Báº¯t Ä‘áº§u Animation
    cancelAnimationFrame(this.animationId);
    let start = null;
    const duration = 1200; // 1.2s

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      // Easing cubic out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.draw(displayWidth, displayHeight, axes, values, easeOut, colorTheme);

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }

  draw(w, h, axes, values, progress, themeColor) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2 + 10;
    const maxRadius = Math.min(w, h) * 0.36;
    const numAxes = axes.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // 1. Váº½ cÃ¡c Ä‘Æ°á»ng Ä‘a giÃ¡c Ä‘á»“ng tÃ¢m ná»n (Máº¡ng nhá»‡n)
    const levels = 5;
    for (let lvl = 1; lvl <= levels; lvl++) {
      const r = (maxRadius / levels) * lvl;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = lvl === levels ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // TÃ´ ná»n nháº¹ cÃ¡c vÃ²ng
      if (lvl % 2 === 0) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.015)";
        ctx.fill();
      }
    }

    // 2. Váº½ cÃ¡c trá»¥c ná»‘i tá»« tÃ¢m ra Ä‘á»‰nh
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Váº½ nhÃ£n (Labels & Icons)
      const labelDistance = maxRadius + 26;
      const lx = centerX + Math.cos(angle) * labelDistance;
      const ly = centerY + Math.sin(angle) * labelDistance;

      ctx.font = "600 12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#e2e8f0";

      const valPct = Math.round(values[i] * 100);
      ctx.fillText(`${axes[i].icon} ${axes[i].label}`, lx, ly - 7);

      ctx.font = "700 11px Outfit, monospace";
      ctx.fillStyle = themeColor;
      ctx.fillText(`${valPct}%`, lx, ly + 9);
    }

    // 3. Váº½ vÃ¹ng Ä‘a giÃ¡c dá»¯ liá»‡u cá»§a ngÆ°á»i dÃ¹ng
    ctx.save();
    ctx.beginPath();
    const points = [];

    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const curValue = values[i] * progress;
      const r = curValue * maxRadius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      points.push({ x, y });

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // TÃ´ Gradient cho vÃ¹ng phá»§
    const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, maxRadius);
    gradient.addColorStop(0, "rgba(139, 92, 246, 0.45)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.15)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // Viá»n phÃ¡t sÃ¡ng Neon
    ctx.strokeStyle = themeColor || "#8b5cf6";
    ctx.lineWidth = 2.5;
    ctx.shadowColor = themeColor || "#8b5cf6";
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.restore();

    // 4. Váº½ cÃ¡c cháº¥m Ä‘iá»ƒm táº¡i tá»«ng Ä‘á»‰nh
    points.forEach((pt) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = themeColor || "#8b5cf6";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });
  }
}

// Module xá»­ lÃ½ xuáº¥t áº£nh Tháº» TÆ°Æ¡ng Lai, In lá»™ trÃ¬nh PDF vÃ  lÆ°u trá»¯ LocalStorage

/**
 * Táº¡o vÃ  táº£i vá» tháº» danh tÃ­nh tÆ°Æ¡ng lai dáº¡ng áº£nh PNG Ä‘á»™ phÃ¢n giáº£i cao
 * @param {Object} profile - Dá»¯ liá»‡u há»“ sÆ¡ tÆ°Æ¡ng lai
 */
function downloadIdentityCard(profile) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = 1200;
  const height = 675;

  canvas.width = width;
  canvas.height = height;

  // 1. Ná»n khÃ´ng gian Futuristic sÃ¢u tháº³m
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#0b0f19");
  bgGrad.addColorStop(0.5, "#111827");
  bgGrad.addColorStop(1, "#1e1b4b");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Hiá»‡u á»©ng Ã¡nh sÃ¡ng hÃ o quang (Neon Glow Orb)
  const orbGrad = ctx.createRadialGradient(250, 200, 50, 250, 200, 450);
  orbGrad.addColorStop(0, "rgba(139, 92, 246, 0.25)");
  orbGrad.addColorStop(1, "rgba(139, 92, 246, 0)");
  ctx.fillStyle = orbGrad;
  ctx.beginPath();
  ctx.arc(250, 200, 450, 0, Math.PI * 2);
  ctx.fill();

  // Khung viá»n Tháº» KÃ­nh Má» (Glass Card)
  const pad = 40;
  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, width - pad * 2, height - pad * 2);

  // Äiá»ƒm nháº¥n 4 gÃ³c phong cÃ¡ch Cyberpunk HUD
  const cornerLen = 30;
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 4;
  // GÃ³c trÃªn trÃ¡i
  ctx.beginPath();
  ctx.moveTo(pad, pad + cornerLen);
  ctx.lineTo(pad, pad);
  ctx.lineTo(pad + cornerLen, pad);
  ctx.stroke();
  // GÃ³c trÃªn pháº£i
  ctx.beginPath();
  ctx.moveTo(width - pad - cornerLen, pad);
  ctx.lineTo(width - pad, pad);
  ctx.lineTo(width - pad, pad + cornerLen);
  ctx.stroke();
  // GÃ³c dÆ°á»›i trÃ¡i
  ctx.beginPath();
  ctx.moveTo(pad, height - pad - cornerLen);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(pad + cornerLen, height - pad);
  ctx.stroke();
  // GÃ³c dÆ°á»›i pháº£i
  ctx.beginPath();
  ctx.moveTo(width - pad - cornerLen, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.lineTo(width - pad, height - pad - cornerLen);
  ctx.stroke();
  ctx.restore();

  // 2. TiÃªu Ä‘á» thÆ°Æ¡ng hiá»‡u
  ctx.font = "700 16px Inter, sans-serif";
  ctx.fillStyle = "#818cf8";
  ctx.fillText("FUTURE-YOU SIMULATION // Há»’ SÆ  Báº¢N THá»‚ TÆ¯Æ NG LAI", pad + 30, pad + 50);

  ctx.font = "400 13px Inter, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText(`MÃƒ Äá»ŠNH DANH: #FT-${Math.floor(100000 + Math.random() * 900000)} | NGÃ€Y MÃ” PHá»ŽNG: ${profile.userData.createdAt}`, pad + 30, pad + 75);

  // 3. TÃªn ngÆ°á»i dÃ¹ng & Danh xÆ°ng
  ctx.font = "800 44px 'Space Grotesk', Inter, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(profile.userData.name.toUpperCase(), pad + 30, pad + 150);

  // Huy hiá»‡u Archetype
  ctx.font = "700 24px Inter, sans-serif";
  ctx.fillStyle = "#38bdf8";
  ctx.fillText(profile.primary.name, pad + 30, pad + 195);

  ctx.font = "500 16px Inter, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  ctx.fillText(profile.primary.subtitle, pad + 30, pad + 225);

  // Kháº©u hiá»‡u sá»‘ng (Slogan)
  ctx.font = "italic 400 18px Inter, sans-serif";
  ctx.fillStyle = "#e2e8f0";
  const sloganText = `"${profile.primary.slogan}"`;
  ctx.fillText(sloganText, pad + 30, pad + 275);

  // 4. Báº£ng chá»‰ sá»‘ nÄƒng lá»±c tÆ°Æ¡ng lai (4 cá»™t Metric Box)
  const metrics = [
    { label: "Tá»° DO TÃ€I CHÃNH", val: `${profile.metrics.financialFreedom}%`, icon: "ðŸ’Ž" },
    { label: "áº¢NH HÆ¯á»žNG XÃƒ Há»˜I", val: `${profile.metrics.socialInfluence}%`, icon: "ðŸŒŸ" },
    { label: "VIÃŠN MÃƒN & AN Láº C", val: `${profile.metrics.fulfillment}%`, icon: "ðŸŒ¿" },
    { label: "Äá»˜ TÆ¯Æ NG THÃCH", val: `${profile.primaryMatchPercent}%`, icon: "ðŸŽ¯" }
  ];

  const boxW = 250;
  const boxH = 95;
  const startY = 320;

  metrics.forEach((m, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const bx = pad + 30 + col * (boxW + 25);
    const by = startY + row * (boxH + 20);

    // Box ná»n
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.fillRect(bx, by, boxW, boxH);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.strokeRect(bx, by, boxW, boxH);

    ctx.font = "600 12px Inter, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(`${m.icon} ${m.label}`, bx + 16, by + 32);

    ctx.font = "800 28px Outfit, monospace";
    ctx.fillStyle = "#38bdf8";
    ctx.fillText(m.val, bx + 16, by + 72);
  });

  // 5. Cá»™t bÃªn pháº£i: ChÃ¢n dung tÃ³m lÆ°á»£c & Lá»i dáº·n dÃ²
  const rx = 650;
  const ry = 140;
  const rw = width - rx - pad - 30;

  ctx.fillStyle = "rgba(139, 92, 246, 0.08)";
  ctx.fillRect(rx, ry, rw, 420);
  ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
  ctx.strokeRect(rx, ry, rw, 420);

  ctx.font = "700 18px Inter, sans-serif";
  ctx.fillStyle = "#a855f7";
  ctx.fillText("Táº¦M NHÃŒN PHÃ“NG CHIáº¾U (5 - 10 NÄ‚M)", rx + 24, ry + 40);

  // Wrap text cho summary
  ctx.font = "400 15px Inter, sans-serif";
  ctx.fillStyle = "#e2e8f0";
  wrapText(ctx, profile.primary.summary, rx + 24, ry + 80, rw - 48, 24);

  // Ká»‹ch báº£n lÃ½ tÆ°á»Ÿng
  ctx.font = "700 15px Inter, sans-serif";
  ctx.fillStyle = "#10b981";
  ctx.fillText("ðŸŒŸ Ká»‹ch Báº£n Cá»±c Thá»‹nh:", rx + 24, ry + 220);

  ctx.font = "400 14px Inter, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  wrapText(ctx, profile.primary.scenarios.optimal, rx + 24, ry + 250, rw - 48, 22);

  // Footer Tháº»
  ctx.font = "500 13px Inter, sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.fillText("FutureYou Platform // Kiáº¿n táº¡o váº­n má»‡nh báº±ng hÃ nh Ä‘á»™ng má»—i ngÃ y.", pad + 30, height - pad - 20);

  // Táº¡o liÃªn káº¿t táº£i áº£nh
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  const safeName = (profile.userData.name || "future_self").toLowerCase().replace(/\s+/g, "_");
  link.download = `FutureYou_${safeName}_card.png`;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

/**
 * In káº¿ hoáº¡ch hÃ nh Ä‘á»™ng hoáº·c lÆ°u thÃ nh file PDF
 */
function printRoadmap() {
  window.print();
}

/**
 * LÆ°u káº¿t quáº£ vÃ o LocalStorage
 */
function saveProfileToStorage(profile) {
  try {
    localStorage.setItem("future_self_profile", JSON.stringify(profile));
  } catch (e) {
    console.warn("KhÃ´ng thá»ƒ lÆ°u profile vÃ o localStorage", e);
  }
}

/**
 * Láº¥y káº¿t quáº£ tá»« LocalStorage
 */
function loadProfileFromStorage() {
  try {
    const raw = localStorage.getItem("future_self_profile");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("KhÃ´ng thá»ƒ Ä‘á»c profile tá»« localStorage", e);
    return null;
  }
}

// FutureYou - Controller chÃ­nh Ä‘iá»u phá»‘i á»©ng dá»¥ng





class App {
  constructor() {
    this.userData = {
      name: "",
      ageGroup: "",
      currentRole: "",
      horizon: "5 - 7 nÄƒm tá»›i"
    };

    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(QUESTIONS.length).fill(null);
    this.calculatedProfile = null;
    this.radarChart = null;
    this.checkedTasks = new Set();

    this.initElements();
    this.bindEvents();
    this.checkExistingSave();
    this.refreshIcons();
  }

  initElements() {
    // Views
    this.viewHero = document.getElementById("app-hero");
    this.viewIdentity = document.getElementById("app-identity");
    this.viewQuiz = document.getElementById("app-quiz");
    this.viewSimulation = document.getElementById("app-simulation");
    this.viewResults = document.getElementById("app-results");

    // Hero buttons
    this.btnStart = document.getElementById("btn-start-journey");
    this.btnNavBrand = document.getElementById("nav-brand");
    this.btnLoadSaved = document.getElementById("btn-load-saved");

    // Identity form
    this.formIdentity = document.getElementById("form-identity");
    this.inputName = document.getElementById("input-name");
    this.selectAge = document.getElementById("select-age");
    this.selectRole = document.getElementById("select-role");
    this.btnBackHero = document.getElementById("btn-back-hero");

    // Quiz elements
    this.quizStageBadge = document.getElementById("quiz-stage-badge");
    this.quizCounter = document.getElementById("quiz-counter");
    this.quizProgressBar = document.getElementById("quiz-progress-bar");
    this.quizStageDesc = document.getElementById("quiz-stage-desc");
    this.quizTitle = document.getElementById("quiz-question-title");
    this.quizSub = document.getElementById("quiz-question-sub");
    this.quizOptionsContainer = document.getElementById("quiz-options-container");
    this.btnQuizPrev = document.getElementById("btn-quiz-prev");
    this.btnQuizNext = document.getElementById("btn-quiz-next");

    // Simulation elements
    this.simulationPct = document.getElementById("simulation-percentage");
    this.simulationStatusText = document.getElementById("simulation-status-text");

    // Action buttons in results
    this.btnDownloadCard = document.getElementById("btn-download-card");
    this.btnPrintRoadmap = document.getElementById("btn-print-roadmap");
    this.btnRetake = document.getElementById("btn-retake");
    this.btnFooterDownload = document.getElementById("btn-footer-download");
    this.btnFooterPrint = document.getElementById("btn-footer-print");
  }

  bindEvents() {
    // Navigation Hero -> Identity
    this.btnStart.addEventListener("click", () => this.showView("identity"));
    this.btnNavBrand.addEventListener("click", () => this.showView("hero"));
    this.btnBackHero.addEventListener("click", () => this.showView("hero"));

    // Check saved
    this.btnLoadSaved.addEventListener("click", () => {
      const saved = loadProfileFromStorage();
      if (saved) {
        this.calculatedProfile = saved;
        this.renderResults();
        this.showView("results");
      }
    });

    // Identity form submit -> Quiz
    this.formIdentity.addEventListener("submit", (e) => {
      e.preventDefault();
      this.userData.name = this.inputName.value.trim() || "NhÃ  Khai PhÃ¡";
      this.userData.ageGroup = this.selectAge.value;
      this.userData.currentRole = this.selectRole.value;

      const checkedHorizon = document.querySelector('input[name="horizon"]:checked');
      if (checkedHorizon) {
        this.userData.horizon = checkedHorizon.value;
      }

      this.currentQuestionIndex = 0;
      this.userAnswers = new Array(QUESTIONS.length).fill(null);
      this.showView("quiz");
      this.renderQuestion();
    });

    // Quiz controls
    this.btnQuizPrev.addEventListener("click", () => {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.renderQuestion();
      }
    });

    this.btnQuizNext.addEventListener("click", () => {
      if (this.currentQuestionIndex < QUESTIONS.length - 1) {
        this.currentQuestionIndex++;
        this.renderQuestion();
      } else {
        // HoÃ n thÃ nh toÃ n bá»™ cÃ¢u há»i -> Cháº¡y simulation
        this.startSimulation();
      }
    });

    // Results Actions
    this.btnDownloadCard.addEventListener("click", () => {
      if (this.calculatedProfile) downloadIdentityCard(this.calculatedProfile);
    });
    this.btnFooterDownload.addEventListener("click", () => {
      if (this.calculatedProfile) downloadIdentityCard(this.calculatedProfile);
    });

    this.btnPrintRoadmap.addEventListener("click", () => printRoadmap());
    this.btnFooterPrint.addEventListener("click", () => printRoadmap());

    this.btnRetake.addEventListener("click", () => {
      if (confirm("Báº¡n cÃ³ muá»‘n lÃ m láº¡i bÃ i tráº¯c nghiá»‡m tá»« Ä‘áº§u?")) {
        this.showView("hero");
      }
    });
  }

  showView(viewName) {
    const views = [this.viewHero, this.viewIdentity, this.viewQuiz, this.viewSimulation, this.viewResults];
    views.forEach((v) => v.classList.add("hidden"));

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (viewName === "hero") this.viewHero.classList.remove("hidden");
    else if (viewName === "identity") this.viewIdentity.classList.remove("hidden");
    else if (viewName === "quiz") this.viewQuiz.classList.remove("hidden");
    else if (viewName === "simulation") this.viewSimulation.classList.remove("hidden");
    else if (viewName === "results") this.viewResults.classList.remove("hidden");

    this.refreshIcons();
  }

  checkExistingSave() {
    const saved = loadProfileFromStorage();
    if (saved && saved.primary) {
      this.btnLoadSaved.classList.remove("hidden");
    }
  }

  renderQuestion() {
    const q = QUESTIONS[this.currentQuestionIndex];
    const stage = STAGES.find((s) => s.id === q.stage);

    // Header info
    this.quizStageBadge.innerText = `${stage.title}`;
    this.quizCounter.innerText = `CÃ¢u ${this.currentQuestionIndex + 1} / ${QUESTIONS.length}`;
    
    // Progress bar
    const pct = Math.round(((this.currentQuestionIndex + 1) / QUESTIONS.length) * 100);
    this.quizProgressBar.style.width = `${pct}%`;

    this.quizStageDesc.innerText = stage.description;
    this.quizTitle.innerText = q.title;
    this.quizSub.innerText = q.subtitle;

    // Prev button state
    this.btnQuizPrev.disabled = this.currentQuestionIndex === 0;

    // Selected state
    const savedAnswer = this.userAnswers[this.currentQuestionIndex];
    this.btnQuizNext.disabled = savedAnswer === null;
    this.btnQuizNext.innerHTML = this.currentQuestionIndex === QUESTIONS.length - 1
      ? `<span>KhÃ¡m PhÃ¡ TÆ°Æ¡ng Lai</span><i data-lucide="sparkles" class="w-3.5 h-3.5"></i>`
      : `<span>Tiáº¿p theo</span><i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>`;

    // Render options
    this.quizOptionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((opt, idx) => {
      const isSelected = savedAnswer && savedAnswer.optionIndex === idx;
      const optEl = document.createElement("div");
      optEl.className = `quiz-option ${isSelected ? "selected" : ""}`;
      optEl.innerHTML = `
        <div class="flex items-start gap-3.5">
          <div class="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center font-mono font-bold text-xs ${
            isSelected ? "bg-purple-500 text-white" : "bg-slate-800 text-slate-400"
          }">
            ${letters[idx]}
          </div>
          <div class="space-y-1">
            <p class="text-sm font-semibold text-white leading-snug">${opt.text}</p>
            <p class="text-xs text-slate-400 font-light leading-normal">${opt.desc}</p>
          </div>
        </div>
      `;

      optEl.addEventListener("click", () => {
        // LÆ°u cÃ¢u tráº£ lá»i
        this.userAnswers[this.currentQuestionIndex] = {
          questionId: q.id,
          optionIndex: idx,
          scores: opt.scores
        };

        // Cáº­p nháº­t giao diá»‡n lá»±a chá»n
        const allOpts = this.quizOptionsContainer.querySelectorAll(".quiz-option");
        allOpts.forEach((o) => o.classList.remove("selected"));
        optEl.classList.add("selected");

        this.btnQuizNext.disabled = false;

        // Tá»± Ä‘á»™ng chuyá»ƒn cÃ¢u sau 350ms náº¿u khÃ´ng pháº£i cÃ¢u cuá»‘i Ä‘á»ƒ táº¡o tráº£i nghiá»‡m mÆ°á»£t mÃ 
        if (this.currentQuestionIndex < QUESTIONS.length - 1) {
          setTimeout(() => {
            this.currentQuestionIndex++;
            this.renderQuestion();
          }, 320);
        }
      });

      this.quizOptionsContainer.appendChild(optEl);
    });

    this.refreshIcons();
  }

  startSimulation() {
    this.showView("simulation");

    const statuses = [
      "Giáº£i mÃ£ vector tÃ­nh cÃ¡ch & phong cÃ¡ch tÆ° duy...",
      "PhÃ¢n tÃ­ch pháº£n á»©ng trÆ°á»›c Ã¡p lá»±c vÃ  biáº¿n sá»‘ cuá»™c Ä‘á»i...",
      "Äá»‹nh lÆ°á»£ng 6 trá»¥c nÄƒng lá»±c: Táº§m nhÃ¬n, Thá»±c thi, SÃ¡ng táº¡o, TÃ i chÃ­nh...",
      "Khá»›p ná»‘i cÆ¡ sá»Ÿ dá»¯ liá»‡u 8 mÃ´ hÃ¬nh Báº£n Thá»ƒ TÆ°Æ¡ng Lai...",
      "Kiáº¿n táº¡o lá»™ trÃ¬nh 3 giai Ä‘oáº¡n vÃ  bá»™ 5 thÃ³i quen vi mÃ´...",
      "MÃ´ phá»ng hoÃ n táº¥t! Sáºµn sÃ ng tháº¥u thá»‹ tÆ°Æ¡ng lai..."
    ];

    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      if (progress > 100) progress = 100;

      this.simulationPct.innerText = `${progress}%`;

      const statusIdx = Math.min(statuses.length - 1, Math.floor((progress / 100) * statuses.length));
      this.simulationStatusText.innerText = statuses[statusIdx];

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.calculateAndShowResults();
        }, 500);
      }
    }, 45); // ~ 2.3 giÃ¢y
  }

  calculateAndShowResults() {
    // TÃ­nh toÃ¡n káº¿t quáº£
    this.calculatedProfile = calculateFutureProfile(this.userData, this.userAnswers);
    saveProfileToStorage(this.calculatedProfile);
    this.checkExistingSave();

    // Hiá»ƒn thá»‹ káº¿t quáº£
    this.renderResults();
    this.showView("results");

    // Báº¯n hiá»‡u á»©ng phÃ¡o hoa Confetti
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  renderResults() {
    const p = this.calculatedProfile;
    if (!p) return;

    // 1. ThÃ´ng tin tháº» chÃ­nh
    document.getElementById("res-user-name").innerText = p.userData.name.toUpperCase();
    document.getElementById("res-badge").innerText = p.primary.badge;
    document.getElementById("res-match-pct").innerText = `${p.primaryMatchPercent}%`;
    document.getElementById("res-arch-name").innerText = p.primary.name;
    document.getElementById("res-arch-subtitle").innerText = p.primary.subtitle;
    document.getElementById("res-slogan").innerText = `"${p.primary.slogan}"`;
    document.getElementById("res-summary").innerText = p.primary.summary;

    // Secondary Archetype
    document.getElementById("res-secondary-name").innerText = p.secondary.name;
    document.getElementById("res-secondary-pct").innerText = `${p.secondaryMatchPercent}%`;

    // 4 Metrics
    document.getElementById("metric-wealth").innerText = `${p.metrics.financialFreedom}%`;
    document.getElementById("metric-influence").innerText = `${p.metrics.socialInfluence}%`;
    document.getElementById("metric-fulfillment").innerText = `${p.metrics.fulfillment}%`;
    document.getElementById("metric-mastery").innerText = `${p.metrics.mastery}%`;

    // 3 Scenarios
    document.getElementById("res-scenario-optimal").innerText = p.primary.scenarios.optimal;
    document.getElementById("res-scenario-default").innerText = p.primary.scenarios.default;
    document.getElementById("res-scenario-pitfall").innerText = p.primary.scenarios.pitfall;

    // 2. Váº½ biá»ƒu Ä‘á»“ Radar
    setTimeout(() => {
      if (!this.radarChart) {
        this.radarChart = new RadarChart("radarChartCanvas");
      }
      this.radarChart.render(p.percentages, p.primary.color);
    }, 100);

    // 3. Render Lá»™ trÃ¬nh 3 Giai Ä‘oáº¡n (Roadmap)
    const roadmapContainer = document.getElementById("roadmap-phases-container");
    roadmapContainer.innerHTML = "";

    const phaseColors = [
      { border: "border-purple-500/40", badge: "bg-purple-900/40 text-purple-300", glow: "hover:border-purple-500/60" },
      { border: "border-cyan-500/40", badge: "bg-cyan-900/40 text-cyan-300", glow: "hover:border-cyan-500/60" },
      { border: "border-emerald-500/40", badge: "bg-emerald-900/40 text-emerald-300", glow: "hover:border-emerald-500/60" }
    ];

    p.primary.roadmap.forEach((phase, idx) => {
      const colorScheme = phaseColors[idx % phaseColors.length];
      const card = document.createElement("div");
      card.className = `glass-panel p-6 rounded-3xl border ${colorScheme.border} ${colorScheme.glow} space-y-4 flex flex-col justify-between transition-all duration-300`;

      let tasksHtml = "";
      phase.tasks.forEach((task, tIdx) => {
        const taskId = `task_${idx}_${tIdx}`;
        const isChecked = this.checkedTasks.has(taskId);
        tasksHtml += `
          <label class="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 hover:text-white transition group select-none">
            <input type="checkbox" class="custom-checkbox mt-0.5" id="${taskId}" ${isChecked ? "checked" : ""}>
            <span class="leading-relaxed ${isChecked ? "line-through text-slate-500" : ""}">${task}</span>
          </label>
        `;
      });

      card.innerHTML = `
        <div class="space-y-3">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-md ${colorScheme.badge} border border-white/10 uppercase tracking-wide inline-block">
            Giai Äoáº¡n ${idx + 1}
          </span>
          <h4 class="font-bold text-white text-base leading-snug">${phase.title}</h4>
          
          <div class="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
            <strong class="text-cyan-400 block mb-1">ðŸŽ¯ Cá»™t Má»‘c Then Chá»‘t (Milestone):</strong>
            ${phase.milestone}
          </div>

          <div class="space-y-2.5 pt-2">
            <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">HÃ nh Äá»™ng Cá»¥ Thá»ƒ (Interactive Checklist):</p>
            ${tasksHtml}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>${phase.phase.split(":")[0]}</span>
          <i data-lucide="check-circle" class="w-3.5 h-3.5 text-slate-600"></i>
        </div>
      `;

      // Láº¯ng nghe sá»± kiá»‡n tick checkbox
      card.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener("change", (e) => {
          const span = e.target.nextElementSibling;
          if (e.target.checked) {
            this.checkedTasks.add(e.target.id);
            span.classList.add("line-through", "text-slate-500");
          } else {
            this.checkedTasks.delete(e.target.id);
            span.classList.remove("line-through", "text-slate-500");
          }
        });
      });

      roadmapContainer.appendChild(card);
    });

    // 4. Render 5 ThÃ³i quen vi mÃ´ hÃ ng ngÃ y (Daily Habits)
    const habitsContainer = document.getElementById("habits-list-container");
    habitsContainer.innerHTML = "";
    p.primary.actionToolkit.habits.forEach((habit, hIdx) => {
      const item = document.createElement("div");
      item.className = "flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition";
      item.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5">
          ${hIdx + 1}
        </div>
        <p class="text-xs md:text-sm text-slate-200 leading-relaxed font-light">${habit}</p>
      `;
      habitsContainer.appendChild(item);
    });

    // 5. Render Skill Stack
    const skillContainer = document.getElementById("skill-stack-container");
    skillContainer.innerHTML = "";
    p.primary.actionToolkit.skillStack.forEach((skill) => {
      const item = document.createElement("div");
      item.className = "flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200";
      item.innerHTML = `
        <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400 flex-shrink-0"></i>
        <span>${skill}</span>
      `;
      skillContainer.appendChild(item);
    });

    // 6. Render Books
    const booksContainer = document.getElementById("books-list-container");
    booksContainer.innerHTML = "";
    p.primary.actionToolkit.books.forEach((book) => {
      const item = document.createElement("div");
      item.className = "flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200";
      item.innerHTML = `
        <i data-lucide="bookmark" class="w-3.5 h-3.5 text-amber-400 flex-shrink-0"></i>
        <span>${book}</span>
      `;
      booksContainer.appendChild(item);
    });

    this.refreshIcons();
  }

  refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }
}

// Khá»Ÿi cháº¡y khi DOM sáºµn sÃ ng
document.addEventListener("DOMContentLoaded", () => {
  window.futureApp = new App();
});

})();
