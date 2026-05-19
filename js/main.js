function mainSlideSwiper() {
  //메인 슬라이더 스와이퍼
  const mainSlideSwiper = new Swiper(".swiper.main-slide", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true, // 페이드 전환 시 겹침 현상을 방지
    },
    autoplay: {
      delay: 8000, // 8초마다 전환
      disableOnInteraction: false, // 유저가 드래그한 후에도 자동 재생 유지
    },
    speed: 1000, // 전환되는 속도 (1초 동안 스르륵)

    pagination: {
      el: ".swiper.main-slide .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
}
mainSlideSwiper();

function selectionDisplay() {
  //섹션02 OUR SELECTION영역 슬라이드 로직
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

  let currentMainId = 1; // 현재 메인 화면에 크게 보여줄 가구 ID (초기에는 1로 지정)
  let thumbSwiper = null; // 스와이퍼 인스턴스 저장 공간

  function updateScreen() {
    // 화면갈아 끼우고 재배치하는 핵심 로직
    const container = document.querySelector(".selection-display");
    const imgBox = container.querySelector(".selection-display__img-box");
    const textBox = container.querySelector(".selection-display__text-box");
    const wrapper = container.querySelector(".swiper-wrapper");

    //왼쪽 메인이미지에 데이터 찾아서 넣기
    const mainItem = furnitureList.find((item) => item.id === currentMainId);
    imgBox.innerHTML = `<img class="img-fit" src="${mainItem.img}" alt="${mainItem.title}">`;
    textBox.innerHTML = `
      <span class="num">${mainItem.num}</span>
      <h3 class="title">${mainItem.title} <span>${mainItem.korTitle}</span></h3>
      <p class="desc">${mainItem.desc}</p>
      <a href="${mainItem.link}" class="btn-main">자세히 보기<i class="icon icon-17 icon-arrow-right"></i></a>
    `;

    //오른쪽 하단 썸네일 조립
    let thumbHtml = "";
    furnitureList.forEach((item) => {
      const isActive = item.id === currentMainId ? "is-active" : ""; // 현재 메인에 뜬 ID와 일치하면 'is-active' 클래스를 부여, 아니면 빈 값

      thumbHtml += `
        <div class="swiper-slide ${isActive}" data-id="${item.id}">
          <img class="img-fit" src="${item.img}" alt="${item.title}">
        </div>
      `;
    });
    wrapper.innerHTML = thumbHtml;

    //스와이퍼 세팅
    if (thumbSwiper === null) {
      thumbSwiper = new Swiper(".selection-display__thumbs", {
        slidesPerView: "auto",
        spaceBetween: 33, //마진값
        freeMode: true,
      });
    } else {
      thumbSwiper.update();
    }

    // [오른쪽 밑 썸네일] 클릭 이벤트 연결
    const smallSlides = container.querySelectorAll(".swiper-slide");
    smallSlides.forEach((slide) => {
      slide.addEventListener("click", function () {
        currentMainId = parseInt(this.getAttribute("data-id"));
        updateScreen(); // 내부에 있는 함수를 다시 호출해서 화면 갱신
      });
    });
  }
  // 함수가 정의되었으니 최초에 딱 한 번 수동 실행해서 첫 화면 띄우기
  updateScreen();
}
selectionDisplay();

function iconicSlideSwiper() {
  const iconicSlideSwiper = new Swiper(".swiper.iconic-slide", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      prevEl: ".iconic-slide .swiper-button-prev",
      nextEl: ".iconic-slide .swiper-button-next",
    },
  });
}
iconicSlideSwiper();

function initIconicSlideMouseFollower() {
  const iconicSlider = document.querySelector(".iconic-slide");
  const FollowGroup = document.querySelector(".cursor-follow-group");

  // 페이지에 아이코닉슬라이더나 커서 그룹이 없으면 무시하기
  if (!iconicSlider || !FollowGroup) return;

  const infoBox = FollowGroup.querySelector(".info-box");
  const cursorDot = FollowGroup.querySelector(".cursor-dot");
  const infoBoxInner = FollowGroup.querySelector(".info-box .info-box-inner");
  const slides = iconicSlider.querySelectorAll(".swiper-slide");

  // iconicSlider 위에서 마우스가 움직일 때 좌표 갱신
  iconicSlider.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 점(Dot) 위치 갱신
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    // 정보 박스(infoBox) 위치 갱신
    infoBox.style.left = `${mouseX}px`;
    infoBox.style.top = `${mouseY}px`;

    const windowWidth = window.innerWidth;

    // 마우스 위치에서 박스가 오른쪽으로 뻗어나갈 공간이 부족하다면
    if (mouseX + boxWidth > windowWidth) {
      infoBox.classList.add("flip-left"); // flip-left 클래스 붙이기
    } else {
      infoBox.classList.remove("flip-left"); // flip-left 클래스 지우기
    }
  });

  // 슬라이드 호버 시 정보 가로채기 및 active 클래스 토글
  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      const targetInfo = slide.querySelector(".slide-info");
      if (targetInfo) {
        infoBoxInner.innerHTML = targetInfo.innerHTML; 
        FollowGroup.classList.add("active");
      }
    });

    // 마우스를 뺐을 때 active 클래스 비우고 infoBoxInner 비우기
    slide.addEventListener("mouseleave", () => {
      FollowGroup.classList.remove("active");
      infoBoxInner.innerHTML = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initIconicSlideMouseFollower();
});