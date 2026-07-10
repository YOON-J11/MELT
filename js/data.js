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

export const showroomData = {
    livingRoom: [
        { id: 1, category: "조명", title: "블리드베데르 탁상스탠드", price: "99,900원", img: "./images/showroom_product-01.avif" },
        { id: 2, category: "소가구", title: "롬비켄 골드", price: "78,500원", img: "./images/showroom_product-02.avif" },
        { id: 3, category: "소파", title: "엑토르프 라이트베이지", price: "1,260,000원", img: "./images/showroom_product-03.avif" },
        { id: 4, category: "화병", title: "VOLUTO 볼루토 화병", price: "39,900원", img: "./images/showroom_product-04.avif" }
    ],
    kitchen: [
        { id: 5, category: "조명", title: "루미에르 키친 바 월라이트", price: "219,000원", img: "./images/showroom_product-05.avif" },
        { id: 6, category: "의자", title: "노르딕 아일랜드 바 체어", price: "149,000원", img: "./images/showroom_product-06.avif" },
        { id: 7, category: "주방", title: "아쿠아 플로우 키친 수전", price: "189,000원", img: "./images/showroom_product-07.avif" },
        { id: 8, category: "주방", title: "스텔라 슬림 레인지 후드", price: "329,000원", img: "./images/showroom_product-08.avif" },
        { id: 9, category: "주방", title: "메종 빌트인 전기 오븐", price: "890,000원", img: "./images/showroom_product-09.avif" }
    ],
    bedroom: [
        { id: 10, category: "패브릭", title: "소프트 웨이브 암막 커튼", price: "129,000원", img: "./images/showroom_product-10.avif" },
        { id: 11, category: "의자", title: "클라우드 라운지 1인 체어", price: "459,000원", img: "./images/showroom_product-11.avif" },
        { id: 12, category: "데코", title: "모노 프레임 아트 포스터", price: "79,000원", img: "./images/showroom_product-12.avif" },
        { id: 13, category: "조명", title: "루미너스 플로어 스탠드", price: "239,000원", img: "./images/showroom_product-13.avif" },
        { id: 14, category: "스툴", title: "코지 롱 벤치 스툴", price: "198,000원", img: "./images/showroom_product-14.avif" }
    ]
};