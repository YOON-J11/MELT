// [resize 최적화용 변수]
let resizeTimer = null;
const DELAY = 300; //0.3초

// initAllScripts: 모든 개별 로직을 관리하고, 페이지 로드 시 한 번에 초기화
function initAllScripts() {
  mainSlideSwiper();
  selectionDisplay();
  iconicSlideSwiper();
  initIconicSlideMouseFollower();
  marqueeTrack();


  // resize 최적화: 화면 크기 변화 시 이벤트가 과도하게 발생하는 것을 방지하기 위해 최적화를 함. 리사이징이 끝나고 0.3초 후에 syncMediaPosition를 실행한다.
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer); // clearTimeout() : setTimeout()으로 생성한 타임아웃을 취소하는 매서드 (resizeTimer에 값이 있을때 취소됨)
    //리사이징 하기 전에 resizeTimer에 값이 있으면 타임아웃(취소)를 하고나서 setTimeout를 해야한다.
    resizeTimer = setTimeout(syncMediaPosition, DELAY); // setTimeout() : 특정 시간이 지난 다음에 코드를 실행하는 함수
  });
  syncMediaPosition();

  showroomMouseFollower();
  initShowroomClick();
  adjustLinkBoxPosition();
}


// mainSlideSwiper: 메인 배너용 스와이퍼 (페이드 효과, 자동 재생, 8초 전환)
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

// selectionDisplay: OUR SELECTION' 영역 로직. 데이터 객체 배열을 기반으로 메인 이미지와 텍스트를 동적으로 교체하고, 하단 썸네일 클릭 시 updateScreen을 통해 화면을 재구성
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

// iconicSlideSwiper: 일반 스와이퍼 내비게이션 기능
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

// initIconicSlideMouseFollower: 마우스 좌표를 추적하여 슬라이드 호버 시 정보 박스(infoBox)를 마우스 따라다니게 구현하고 화면 끝에 도달하면 박스 방향을 반전(flip-left)시킴
function initIconicSlideMouseFollower() {
  const iconicSlider = document.querySelector(".iconic-slide");
  const FollowGroup = document.querySelector(".section03 .cursor-follow-group");

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

    // 박스의 실제 너비 구하기
    const boxWidth = infoBox.offsetWidth;
    const windowWidth = window.innerWidth;

    // 점(Dot) 위치 갱신
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

    // 정보 박스 위치 갱신
    infoBox.style.left = `${mouseX}px`;
    infoBox.style.top = `${mouseY}px`;

    // 마우스 위치 + 박스 너비가 창 너비를 넘어가면 반전하고, 여유 공간으로 20px 정도를 더해줌
    if (mouseX + boxWidth + 20 > windowWidth) {
      infoBox.classList.add("flip-left");
    } else {
      infoBox.classList.remove("flip-left");
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

// marqueeTrack: 흐르는 텍스트(마키)의 연속적인 흐름을 위해 내용을 복제하여 이어 붙임
function marqueeTrack() {
  const track = document.getElementById('marquee-track');
  const content = track.innerHTML;
  track.innerHTML += content;
}

// syncMediaPosition: placeholder 요소의 위치를 계산(getBoundingClientRect)하여, 실제 컨텐츠(media)가 특정 영역(placeholder) 위에 정확히 겹치도록 좌표를 동기화
function syncMediaPosition() {

  const items = document.querySelectorAll('.value-item');// 모든 value-item 요소 찾기

  items.forEach(item => {
    const placeholder = item.querySelector('.value-item__placeholder'); //영역만 차지하는 투명 공간
    const media = item.querySelector('.value-item__media'); // 실제 컨텐츠가 들어갈 공간

    if (placeholder && media) {
      const placeholderRect = placeholder.getBoundingClientRect(); // getBoundingClientRect() : element의 크기, 위치 정보를 담은 DOMRect 객체를 반환하는 메서드
      const parentRect = item.getBoundingClientRect();
      const relativeLeft = placeholderRect.left - parentRect.left; // 부모인 item(value-item)에서 자식요소인 placeholder(value-item__placeholder)의 왼쪽 좌표값을 빼서,부모에서 얼마나 떨어져 있는지 계산한다.
      media.style.left = `${relativeLeft}px`; // 위에서 나온 값을 media에 left 값으로 적용
    }
  });
}

// showroomMouseFollower: 특정 섹션 영역 진입 시 커스텀 커서(FollowGroup)를 활성화하고 마우스 좌표를 따라다니게 
function showroomMouseFollower() {
  const showroomSections = document.querySelectorAll('.showroom__section');
  const FollowGroup = document.querySelector('.section06 .cursor-follow-group');

  showroomSections.forEach(section => {
    section.addEventListener('mouseenter', () => {

      if (section.classList.contains('active')) {
        return; 
      }

      FollowGroup.classList.add('active');
      section.addEventListener('mousemove', moveHandler);
    });

    section.addEventListener('mouseleave', () => {
      FollowGroup.classList.remove('active');
      section.removeEventListener('mousemove', moveHandler);
    });
  });

  function moveHandler(e) {
    const FollowGroup = document.querySelector('.section06 .cursor-follow-group');
    FollowGroup.style.left = e.clientX + 'px';
    FollowGroup.style.top = e.clientY + 'px';
  }
}

// initShowroomClick: 쇼룸 섹션 클릭 시 active 클래스를 토글하여 특정 섹션을 활성화하고, 커스텀 커서를 숨긴다
function initShowroomClick() {
  const sections = document.querySelectorAll('.showroom__section');

  // 문서 전체에 클릭 이벤트
  document.addEventListener('click', (e) => {

    // 클릭한 곳이 쇼룸 섹션 내부인가 확인
    const clickedSection = e.target.closest('.showroom__section');

    // 외부 클릭 시 원래 형태로 되돌리기
    if (!clickedSection) {
      sections.forEach(s => s.classList.remove('active'));

      // 외부 클릭 시 커서 팔로워는 즉시 숨김
      const cursor = document.querySelector('.section06 .cursor-follow-group');
      if (cursor) cursor.classList.remove('active');
      return;
    }

    // 내부 클릭 시 선택된 섹션만 활성화
    if (clickedSection.classList.contains('active')) return;

    sections.forEach(s => s.classList.remove('active'));
    clickedSection.classList.add('active');

    // 커서 숨기기
    const cursor = document.querySelector('.section06 .cursor-follow-group');
    if (cursor) cursor.classList.remove('active');
  });
}

// adjustLinkBoxPosition: 쇼룸 핫스팟 클릭 시, 링크 박스가 쇼룸 영역 밖으로 나가지 않도록 좌표를 계산하여 위치(분면별 배치)를 조정
function adjustLinkBoxPosition() {
  document.addEventListener('click', (e) => {
    const hotspot = e.target.closest('.product-card__hotspot'); //closest() 메서드는 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회한다

    if (!hotspot) { // hotspot이 없다면, 즉 클릭한곳이 hotspot 영역이 아니라면
      document.querySelectorAll('.product-card').forEach(c => c.classList.remove('is-open')); //product-card에 is-open클래스를 지움
      return;
    }

    const card = hotspot.closest('.product-card');
    // 방금 클릭한 카드(card)를 제외한 '나머지 카드들'만 찾아서 닫기
    document.querySelectorAll('.product-card').forEach(c => {
      if (c !== card) {
        c.classList.remove('is-open');
      }
    });


    const linkBox = card.querySelector('.product-card__link');
    const section = card.closest('.showroom__section');

    // 쇼룸 영역과 핫스팟의 좌표 계산
    const sectionRect = section.getBoundingClientRect(); // Element.getBoundingClientRect() 메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환합니다.
    const hotspotRect = hotspot.getBoundingClientRect();

    // 쇼룸의 중심점 계산
    const midX = sectionRect.left + sectionRect.width / 2; //가로 중심점 좌표
    const midY = sectionRect.top + sectionRect.height / 2; //세로 중심점 좌표

    // 핫스팟이 쇼룸의 어느 분면(Quadrant)에 있는지 판별
    const isRight = hotspotRect.left > midX; //핫스팟의 왼쪽좌표값이 섹션 중심 좌표값 보다 클 경우, true반환(오른쪽에 위치). 반대의경우는 false반환(왼쪽에 위치)
    const isBottom = hotspotRect.top > midY; //핫스팟의 상단좌표값이 섹션 중심 좌표값 보다 클 경우, true반환(하단에 위치). 반대의경우는 false반환(상단에 위치)

    // 위치 조정: 영역 안쪽으로 들어오도록 속성 설정
    linkBox.style.top = isBottom ? 'auto' : '30px';
    linkBox.style.bottom = isBottom ? '30px' : 'auto';
    linkBox.style.left = isRight ? 'auto' : '30px';
    linkBox.style.right = isRight ? '30px' : 'auto';

    // 토글 실행
    card.classList.toggle('is-open');
  });
}

// DOMContentLoaded : HTML문서를 완전히 읽어 들였을때 (DOM이 모두 완성되었을때) 발생하는 이벤트 
document.addEventListener("DOMContentLoaded", initAllScripts); //DOM을 다 읽어들이면 모든 함수 실행