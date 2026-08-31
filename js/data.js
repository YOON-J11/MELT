const furnitureList = [
    {
        id: 1,
        num: "MELT 01.",
        title: "LOUNGE SOFA",
        korTitle: "라운지 소파",
        desc: "까다롭게 엄선한 프리미엄 린넨 소재는 피부에 닿는 순간 기분 좋은 쾌적함을 선사하며, <br>고밀도 폼을 사용하여 오랜 시간 앉아 있어도 변함없는 탄성과 안락함을 유지합니다. <br>단순한 가구를 넘어 당신의 휴식을 완성하는 오브제가 되어줄 거예요. <br>보이지 않는 내부 프레임부터 겉으로 드러나는 스티치 하나까지, 멜트의 고집스러운 장인 정신을 직접 경험해 보세요.",
        img: "./images/selection-img-01.png",
        link: "#",
    },
    {
        id: 2,
        num: "MELT 02.",
        title: "MINIMALIST DINING TABLE",
        korTitle: "미니멀리스트 식탁",
        desc: "결이 살아있는 월넛 원목을 사용하여 서두르지 않는 삶의 태도를 닮은 식탁입니다. <br>불필요한 장식은 걷어내고, 원목 본연의 자연스러운 결을 그대로 살려 <br>매일 마주하는 식사 시간을 더욱 풍성하고 따뜻하게 만들어줍니다. <br>시간이 흐를수록 깊이를 더하는 원목의 매력을 당신의 다이닝 룸에서 느껴보세요.",
        img: "./images/selection-img-02.png",
        link: "#",
    },
    {
        id: 3,
        num: "MELT 03.",
        title: "OAK WOOD CHAIR",
        korTitle: "오크 원목 체어",
        desc: "가늘고 유려한 선이 돋보이는 디자인으로, 공간에 기분 좋은 리듬감을 불어넣습니다. <br>부드럽게 휘어진 등받이는 허리를 편안하게 받쳐주며, <br>가벼우면서도 단단한 오크 원목을 사용하여 실용성과 내구성을 모두 갖췄습니다. <br>식탁과 함께, 혹은 단독으로 두어 당신만의 서재나 코너 공간을 완성해보세요.",
        img: "./images/selection-img-03.png",
        link: "#",
    },
    {
        id: 4,
        num: "MELT 04.",
        title: "MODULAR SHELF UNIT",
        korTitle: "모듈러 선반장",
        desc: "당신의 취향과 공간의 크기에 따라 무한한 변신이 가능한 선반장입니다. <br>따뜻한 원목 프레임과 매트한 화이트 패널의 조화는 어떤 인테리어에도 자연스럽게 녹아들며, <br>책이나 오브제 등을 단정하게 수납할 수 있습니다. <br>매일 조금씩 변화하는 당신의 일상을 담아내는 유연한 가구입니다.",
        img: "./images/selection-img-04.png",
        link: "#",
    },
    {
        id: 5,
        num: "MELT 05.",
        title: "ACCENT RUG",
        korTitle: "엑센트 러그",
        desc: "거친 듯하면서도 부드러운 핸드위브(Hand-weave) 방식의 린넨 러그입니다. <br>공간에 기분 좋은 텍스처를 더해주며, 여름에는 시원하고 겨울에는 포근한 느낌을 줍니다. <br>자연에서 얻은 색감으로 물들여 깊고 은은한 컬러가 특징입니다. <br>당신의 거실이나 침대 밑에 두어, 공간에 따뜻한 온기를 불어넣어보세요.",
        img: "./images/selection-img-05.png",
        link: "#",
    },
    {
        id: 6,
        num: "MELT 06.",
        title: "MINIMALIST FLOOR LAMP",
        korTitle: "미니멀리스트 플로어 램프",
        desc: "군더더기 없는 미니멀한 디자인과 은은한 황동(Brass) 소재가 조화로운 스탠드 조명입니다. <br>공간을 은은하게 비춰주며, 밤에는 따뜻한 분위기를 연출합니다. <br>조도 조절이 가능하여 당신의 기분에 맞춰 빛의 세기를 조절해보세요. <br>당신의 공간에 기분 좋은 변화를 더해드립니다.",
        img: "./images/selection-img-06.png",
        link: "#",
    },
    {
        id: 7,
        num: "MELT 07.",
        title: "HANDCRAFTED CERAMIC VASE",
        korTitle: "핸드크래프트 세라믹 화병",
        desc: "장인의 정성스러운 손길로 빚어낸 도자기 화병입니다. <br>자연스러운 흙의 질감과 유약의 깊은 색감이 특징이며, <br>어떤 꽃을 꽂아도 기분 좋은 변화를 줍니다. <br>당신의 공간에 기분 좋은 변화를 더해드립니다.",
        img: "./images/selection-img-07.png",
        link: "#",
    },
];

const iconicList = [
    {
        id: 1,
        enName: "Melt Shell Chair", //슬라이드용 한 줄
        enNameLines: ["Melt Shell", "Chair"], //콘텐츠용 줄바꿈
        koName: "멜트 쉘 체어",
        price: "580,000",
        img: "./images/iconic-item-01.png",
    },
    {
        id: 2,
        enName: "Ondul Marble Table",
        enNameLines: ["Ondul Marble", "Table"],
        koName: "온듈 마블 테이블",
        price: "2,250,000",
        img: "./images/iconic-item-02.png",
    },
    {
        id: 3,
        enName: "Lumi Pleats Pendant",
        enNameLines: ["Lumi Pleats", "Pendant"],
        koName: "루미 플리츠 펜던트",
        price: "485,000",
        img: "./images/iconic-item-03.png",
    },
    {
        id: 4,
        enName: "Organic Glass Vase",
        enNameLines: ["Organic Glass", "Vase"],
        koName: "오가닉 글래스 베이스",
        price: "92,000",
        img: "./images/iconic-item-04.png",
    },
    {
        id: 5,
        enName: "Satellite Outdoor Floor Lamp",
        enNameLines: ["Satellite", "Outdoor Floor", "Lamp"],
        koName: "새틀라이트 야외용 장스탠드 조명", //슬라이드용 한 줄
        koNameLines: ["새틀라이트 야외용", "장스탠드 조명"], //콘텐츠용 줄바꿈
        price: "764,000",
        img: "./images/iconic-item-05.png",
    },
    {
        id: 6,
        enName: "Lumi Handtufted Wool Rug",
        enNameLines: ["Lumi Handtufted", "Wool Rug"],
        koName: "루미 핸드터프티드 울 러그",
        price: "1,226,000",
        img: "./images/iconic-item-06.png",
    },
    {
        id: 7,
        enName: "Utzon Stool",
        koName: "우존 스툴",
        price: "392,000",
        img: "./images/iconic-item-07.png",
    },
];

const showroomData = {
    livingRoom: [
        { id: 1, category: "조명", title: "블리드베데르 탁상스탠드", price: "99,900", img: "./images/showroom_product-01.avif" },
        { id: 2, category: "소가구", title: "롬비켄 골드", price: "78,500", img: "./images/showroom_product-02.avif" },
        { id: 3, category: "소파", title: "엑토르프 라이트베이지", price: "1,260,000", img: "./images/showroom_product-03.avif" },
        { id: 4, category: "화병", title: "VOLUTO 볼루토 화병", price: "39,900", img: "./images/showroom_product-04.avif" }
    ],
    kitchen: [
        { id: 5, category: "조명", title: "루미에르 키친 바 월라이트", price: "219,000", img: "./images/showroom_product-05.avif" },
        { id: 6, category: "의자", title: "노르딕 아일랜드 바 체어", price: "149,000", img: "./images/showroom_product-06.avif" },
        { id: 7, category: "주방가전", title: "아쿠아 플로우 키친 수전", price: "189,000", img: "./images/showroom_product-07.avif" },
        { id: 8, category: "주방가전", title: "스텔라 슬림 레인지 후드", price: "329,000", img: "./images/showroom_product-08.avif" },
        { id: 9, category: "주방가전", title: "메종 빌트인 전기 오븐", price: "890,000", img: "./images/showroom_product-09.avif" }
    ],
    bedroom: [
        { id: 10, category: "커튼", title: "소프트 웨이브 암막 커튼", price: "129,000", img: "./images/showroom_product-10.avif" },
        { id: 11, category: "의자", title: "클라우드 라운지 1인 체어", price: "459,000", img: "./images/showroom_product-11.avif" },
        { id: 12, category: "소가구", title: "모노 프레임 아트 포스터", price: "79,000", img: "./images/showroom_product-12.avif" },
        { id: 13, category: "조명", title: "루미너스 플로어 스탠드", price: "239,000", img: "./images/showroom_product-13.avif" },
        { id: 14, category: "의자", title: "코지 롱 벤치 스툴", price: "198,000", img: "./images/showroom_product-14.avif" }
    ]
};


// 상품리스트용 더미데이터
const dummyItems = [
    // showroomData 상품들 (id 1~14)
    { id: 1, mainCategory: "OBJECT", category: "조명", title: "블리드베데르 탁상스탠드", price: "99,900", liked: false, img: "./images/showroom_product-01.avif" },
    { id: 2, mainCategory: "OBJECT", category: "소가구", title: "롬비켄 골드", price: "78,500", liked: false, img: "./images/showroom_product-02.avif" },
    { id: 3, mainCategory: "HOME", category: "소파", title: "엑토르프 라이트베이지", price: "1,260,000", liked: false, img: "./images/showroom_product-03.avif" },
    { id: 4, mainCategory: "OBJECT", category: "화병", title: "VOLUTO 볼루토 화병", price: "39,900", liked: false, img: "./images/showroom_product-04.avif" },
    { id: 5, mainCategory: "OBJECT", category: "조명", title: "루미에르 키친 바 월라이트", price: "219,000", liked: false, img: "./images/showroom_product-05.avif" },
    { id: 6, mainCategory: "HOME", category: "의자", title: "노르딕 아일랜드 바 체어", price: "149,000", liked: false, img: "./images/showroom_product-06.avif" },
    { id: 7, mainCategory: "KITCHEN", category: "주방가전", title: "아쿠아 플로우 키친 수전", price: "189,000", liked: false, img: "./images/showroom_product-07.avif" },
    { id: 8, mainCategory: "KITCHEN", category: "주방가전", title: "스텔라 슬림 레인지 후드", price: "329,000", liked: false, img: "./images/showroom_product-08.avif" },
    { id: 9, mainCategory: "KITCHEN", category: "주방가전", title: "메종 빌트인 전기 오븐", price: "890,000", liked: false, img: "./images/showroom_product-09.avif" },
    { id: 10, mainCategory: "FABRIC", category: "커튼", title: "소프트 웨이브 암막 커튼", price: "129,000", liked: false, img: "./images/showroom_product-10.avif" },
    { id: 11, mainCategory: "HOME", category: "의자", title: "클라우드 라운지 1인 체어", price: "459,000", liked: false, img: "./images/showroom_product-11.avif" },
    { id: 12, mainCategory: "OBJECT", category: "소가구", title: "모노 프레임 아트 포스터", price: "79,000", liked: false, img: "./images/showroom_product-12.avif" },
    { id: 13, mainCategory: "OBJECT", category: "조명", title: "루미너스 플로어 스탠드", price: "239,000", liked: false, img: "./images/showroom_product-13.avif" },
    { id: 14, mainCategory: "HOME", category: "의자", title: "코지 롱 벤치 스툴", price: "198,000", liked: false, img: "./images/showroom_product-14.avif" },

    // HOME - 소파
    { id: 15, mainCategory: "HOME", category: "소파", title: "벨벳 슬립커버 소파", price: "1,050,000", liked: false, img: "" },
    { id: 16, mainCategory: "HOME", category: "소파", title: "모던 리클라이너 소파", price: "1,480,000", liked: false, img: "" },
    { id: 17, mainCategory: "HOME", category: "소파", title: "스칸디 3인 소파", price: "980,000", liked: false, img: "" },
    { id: 18, mainCategory: "HOME", category: "소파", title: "코너 세션 소파", price: "1,690,000", liked: false, img: "" },
    { id: 19, mainCategory: "HOME", category: "소파", title: "미니멀 암리스 소파", price: "720,000", liked: false, img: "" },

    // HOME - 테이블
    { id: 20, mainCategory: "HOME", category: "테이블", title: "대리석 상판 다이닝 테이블", price: "890,000", liked: false, img: "" },
    { id: 21, mainCategory: "HOME", category: "테이블", title: "접이식 좌식 테이블", price: "89,000", liked: false, img: "" },
    { id: 22, mainCategory: "HOME", category: "테이블", title: "원목 사이드 테이블", price: "119,000", liked: false, img: "" },
    { id: 23, mainCategory: "HOME", category: "테이블", title: "유리 상판 콘솔 테이블", price: "259,000", liked: false, img: "" },
    { id: 24, mainCategory: "HOME", category: "테이블", title: "라운드 카페 테이블", price: "149,000", liked: false, img: "" },

    // HOME - 의자
    { id: 25, mainCategory: "HOME", category: "의자", title: "링클 라탄 체어", price: "179,000", liked: false, img: "" },
    { id: 26, mainCategory: "HOME", category: "의자", title: "벨벳 다이닝 체어", price: "129,000", liked: false, img: "" },
    { id: 27, mainCategory: "HOME", category: "의자", title: "스윙 행잉 체어", price: "349,000", liked: false, img: "" },
    { id: 28, mainCategory: "HOME", category: "의자", title: "접이식 캠핑 체어", price: "39,000", liked: false, img: "" },
    { id: 29, mainCategory: "HOME", category: "의자", title: "인체공학 오피스 체어", price: "289,000", liked: false, img: "" },

    // HOME - 침대
    { id: 30, mainCategory: "HOME", category: "침대", title: "패브릭 슬랫 침대", price: "590,000", liked: false, img: "" },
    { id: 31, mainCategory: "HOME", category: "침대", title: "원목 평상형 침대", price: "650,000", liked: false, img: "" },
    { id: 32, mainCategory: "HOME", category: "침대", title: "헤드리스 미니멀 침대", price: "420,000", liked: false, img: "" },
    { id: 33, mainCategory: "HOME", category: "침대", title: "수납형 퀸 침대", price: "790,000", liked: false, img: "" },
    { id: 34, mainCategory: "HOME", category: "침대", title: "스틸 프레임 싱글 침대", price: "259,000", liked: false, img: "" },

    // OBJECT - 조명
    { id: 35, mainCategory: "OBJECT", category: "조명", title: "무드 테이블 램프", price: "69,000", liked: false, img: "" },
    { id: 36, mainCategory: "OBJECT", category: "조명", title: "펜던트 조명 3구", price: "159,000", liked: false, img: "" },
    { id: 37, mainCategory: "OBJECT", category: "조명", title: "벽부착 브래킷 조명", price: "49,000", liked: false, img: "" },
    { id: 38, mainCategory: "OBJECT", category: "조명", title: "미니 캔들 워머 조명", price: "35,000", liked: false, img: "" },
    { id: 39, mainCategory: "OBJECT", category: "조명", title: "LED 플로어 램프", price: "189,000", liked: false, img: "" },

    // OBJECT - 화병
    { id: 40, mainCategory: "OBJECT", category: "화병", title: "글라스 스템 화병", price: "29,000", liked: false, img: "" },
    { id: 41, mainCategory: "OBJECT", category: "화병", title: "러프 텍스처 화병", price: "42,000", liked: false, img: "" },
    { id: 42, mainCategory: "OBJECT", category: "화병", title: "롱넥 세라믹 화병", price: "38,000", liked: false, img: "" },
    { id: 43, mainCategory: "OBJECT", category: "화병", title: "미니 버드 화병", price: "19,000", liked: false, img: "" },
    { id: 44, mainCategory: "OBJECT", category: "화병", title: "마블 라운드 화병", price: "55,000", liked: false, img: "" },

    // OBJECT - 거울
    { id: 45, mainCategory: "OBJECT", category: "거울", title: "우드 프레임 전신거울", price: "159,000", liked: false, img: "" },
    { id: 46, mainCategory: "OBJECT", category: "거울", title: "미니멀 원형 탁상거울", price: "29,000", liked: false, img: "" },
    { id: 47, mainCategory: "OBJECT", category: "거울", title: "골드 프레임 벽거울", price: "119,000", liked: false, img: "" },
    { id: 48, mainCategory: "OBJECT", category: "거울", title: "아치형 전신거울", price: "199,000", liked: false, img: "" },
    { id: 49, mainCategory: "OBJECT", category: "거울", title: "무프레임 사각거울", price: "69,000", liked: false, img: "" },

    // OBJECT - 소가구
    { id: 50, mainCategory: "OBJECT", category: "소가구", title: "접이식 사이드 스툴", price: "45,000", liked: false, img: "" },
    { id: 51, mainCategory: "OBJECT", category: "소가구", title: "라탄 수납 바구니", price: "32,000", liked: false, img: "" },
    { id: 52, mainCategory: "OBJECT", category: "소가구", title: "슬림 트롤리 카트", price: "89,000", liked: false, img: "" },
    { id: 53, mainCategory: "OBJECT", category: "소가구", title: "우드 매거진 랙", price: "39,000", liked: false, img: "" },
    { id: 54, mainCategory: "OBJECT", category: "소가구", title: "미니 서랍장", price: "129,000", liked: false, img: "" },

    // FABRIC - 러그
    { id: 55, mainCategory: "FABRIC", category: "러그", title: "지오메트릭 패턴 러그", price: "99,000", liked: false, img: "" },
    { id: 56, mainCategory: "FABRIC", category: "러그", title: "샤기 러그", price: "139,000", liked: false, img: "" },
    { id: 57, mainCategory: "FABRIC", category: "러그", title: "자연염색 러그", price: "159,000", liked: false, img: "" },
    { id: 58, mainCategory: "FABRIC", category: "러그", title: "도트 패턴 러그", price: "79,000", liked: false, img: "" },
    { id: 59, mainCategory: "FABRIC", category: "러그", title: "극세사 러그", price: "49,000", liked: false, img: "" },

    // FABRIC - 쿠션
    { id: 60, mainCategory: "FABRIC", category: "쿠션", title: "자수 패턴 쿠션", price: "32,000", liked: false, img: "" },
    { id: 61, mainCategory: "FABRIC", category: "쿠션", title: "니트 스퀘어 쿠션", price: "28,000", liked: false, img: "" },
    { id: 62, mainCategory: "FABRIC", category: "쿠션", title: "벨벳 라운드 쿠션", price: "35,000", liked: false, img: "" },
    { id: 63, mainCategory: "FABRIC", category: "쿠션", title: "스트라이프 럼버 쿠션", price: "25,000", liked: false, img: "" },
    { id: 64, mainCategory: "FABRIC", category: "쿠션", title: "코튼 태슬 쿠션", price: "22,000", liked: false, img: "" },

    // FABRIC - 커튼
    { id: 65, mainCategory: "FABRIC", category: "커튼", title: "리넨 헴 커튼", price: "89,000", liked: false, img: "" },
    { id: 66, mainCategory: "FABRIC", category: "커튼", title: "블랙아웃 롤 커튼", price: "69,000", liked: false, img: "" },
    { id: 67, mainCategory: "FABRIC", category: "커튼", title: "시스루 보일 커튼", price: "45,000", liked: false, img: "" },
    { id: 68, mainCategory: "FABRIC", category: "커튼", title: "스트라이프 패턴 커튼", price: "79,000", liked: false, img: "" },
    { id: 69, mainCategory: "FABRIC", category: "커튼", title: "벨벳 헤비 커튼", price: "159,000", liked: false, img: "" },

    // KITCHEN - 식기
    { id: 70, mainCategory: "KITCHEN", category: "식기", title: "오븐 세이프 그라탕 접시", price: "24,000", liked: false, img: "" },
    { id: 71, mainCategory: "KITCHEN", category: "식기", title: "목 트레이 세트", price: "35,000", liked: false, img: "" },
    { id: 72, mainCategory: "KITCHEN", category: "식기", title: "유리 텀블러 세트", price: "19,000", liked: false, img: "" },
    { id: 73, mainCategory: "KITCHEN", category: "식기", title: "스톤웨어 파스타볼", price: "28,000", liked: false, img: "" },
    { id: 74, mainCategory: "KITCHEN", category: "식기", title: "미니 소스 종지 세트", price: "12,000", liked: false, img: "" },

    // KITCHEN - 조리도구
    { id: 75, mainCategory: "KITCHEN", category: "조리도구", title: "무쇠 그릴팬", price: "59,000", liked: false, img: "" },
    { id: 76, mainCategory: "KITCHEN", category: "조리도구", title: "스테인리스 편수 웍", price: "49,000", liked: false, img: "" },
    { id: 77, mainCategory: "KITCHEN", category: "조리도구", title: "실리콘 계량컵 세트", price: "15,000", liked: false, img: "" },
    { id: 78, mainCategory: "KITCHEN", category: "조리도구", title: "대나무 뒤집개 세트", price: "18,000", liked: false, img: "" },
    { id: 79, mainCategory: "KITCHEN", category: "조리도구", title: "다용도 채칼", price: "16,000", liked: false, img: "" },

    // KITCHEN - 주방가전
    { id: 80, mainCategory: "KITCHEN", category: "주방가전", title: "컴팩트 인덕션", price: "159,000", liked: false, img: "" },
    { id: 81, mainCategory: "KITCHEN", category: "주방가전", title: "미니 와인냉장고", price: "289,000", liked: false, img: "" },
    { id: 82, mainCategory: "KITCHEN", category: "주방가전", title: "슬림 전기포트", price: "39,000", liked: false, img: "" },
    { id: 83, mainCategory: "KITCHEN", category: "주방가전", title: "저소음 믹서기", price: "79,000", liked: false, img: "" },
    { id: 84, mainCategory: "KITCHEN", category: "주방가전", title: "빌트인 식기건조기", price: "459,000", liked: false, img: "" },

    // ── furnitureList 상품들 (id 89~95) ──
    { id: 89, mainCategory: "HOME", category: "소파", title: "라운지 소파", price: "1,890,000", liked: false, img: "./images/selection-img-01.png" },
    { id: 90, mainCategory: "HOME", category: "테이블", title: "미니멀리스트 식탁", price: "980,000", liked: false, img: "./images/selection-img-02.png" },
    { id: 91, mainCategory: "HOME", category: "의자", title: "오크 원목 체어", price: "259,000", liked: false, img: "./images/selection-img-03.png" },
    { id: 92, mainCategory: "OBJECT", category: "소가구", title: "모듈러 선반장", price: "459,000", liked: false, img: "./images/selection-img-04.png" },
    { id: 93, mainCategory: "FABRIC", category: "러그", title: "엑센트 러그", price: "189,000", liked: false, img: "./images/selection-img-05.png" },
    { id: 94, mainCategory: "OBJECT", category: "조명", title: "미니멀리스트 플로어 램프", price: "329,000", liked: false, img: "./images/selection-img-06.png" },
    { id: 95, mainCategory: "OBJECT", category: "화병", title: "핸드크래프트 세라믹 화병", price: "68,000", liked: false, img: "./images/selection-img-07.png" },

    // ── iconicList 상품들 (id 96~102) ──
    { id: 96, mainCategory: "HOME", category: "의자", title: "멜트 쉘 체어", price: "580,000", liked: false, img: "./images/iconic-item-01.png" },
    { id: 97, mainCategory: "HOME", category: "테이블", title: "온듈 마블 테이블", price: "2,250,000", liked: false, img: "./images/iconic-item-02.png" },
    { id: 98, mainCategory: "OBJECT", category: "조명", title: "루미 플리츠 펜던트", price: "485,000", liked: false, img: "./images/iconic-item-03.png" },
    { id: 99, mainCategory: "OBJECT", category: "화병", title: "오가닉 글래스 베이스", price: "92,000", liked: false, img: "./images/iconic-item-04.png" },
    { id: 100, mainCategory: "OBJECT", category: "조명", title: "새틀라이트 야외용 장스탠드 조명", price: "764,000", liked: false, img: "./images/iconic-item-05.png" },
    { id: 101, mainCategory: "FABRIC", category: "러그", title: "루미 핸드터프티드 울 러그", price: "1,226,000", liked: false, img: "./images/iconic-item-06.png" },
    { id: 102, mainCategory: "OBJECT", category: "소가구", title: "우존 스툴", price: "392,000", liked: false, img: "./images/iconic-item-07.png" },

];