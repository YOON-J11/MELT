// [resize 최적화용 변수]
let resizeTimer = null;
const DELAY = 300; //0.3초

// initAllScripts: 모든 개별 로직을 관리하고, 페이지 로드 시 한 번에 초기화
function initAllScripts() {
  mainSlideSwiper();
  selectionDisplay();
  renderIconicSection();
  iconicSlideSwiper();
  if (window.innerWidth > 1024) {
    initIconicSlideMouseFollower();
  }
  marqueeTrack();


  // resize 최적화: 화면 크기 변화 시 이벤트가 과도하게 발생하는 것을 방지하기 위해 최적화를 함. 리사이징이 끝나고 0.3초 후에 syncMediaPosition를 실행한다.
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer); // clearTimeout() : setTimeout()으로 생성한 타임아웃을 취소하는 매서드 (resizeTimer에 값이 있을때 취소됨)
    //리사이징 하기 전에 resizeTimer에 값이 있으면 타임아웃(취소)를 하고나서 setTimeout를 해야한다.
    resizeTimer = setTimeout(() => {
      syncMediaPosition();
      if (thumbSwiper) {
        thumbSwiper.params.spaceBetween = getSpaceBetween();
        thumbSwiper.update();
      }
    }, DELAY); // setTimeout() : 특정 시간이 지난 다음에 코드를 실행하는 함수
  });
  syncMediaPosition();

  showroomMouseFollower();
  initShowroomClick();
  adjustLinkBoxPosition();
  initMobileSelection();
}


// 화면 너비에 따라 마진값을 지정하는 함수
function getSpaceBetween() {
  const width = window.innerWidth;
  if (width <= 768) return 10;
  if (width <= 1024) return 20;
  return 33;
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
let thumbSwiper = null; // 스와이퍼 인스턴스 저장 공간
function selectionDisplay() {
  let currentMainId = 1; // 현재 메인 화면에 크게 보여줄 가구 ID (초기에는 1로 지정)


  function updateScreen() {
    const container = document.querySelector(".selection-display");
    if (!container) return;

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
        spaceBetween: getSpaceBetween(), //마진값 함수로 가져옴
        freeMode: true,
      });
    } else {
      thumbSwiper.params.spaceBetween = getSpaceBetween(); // 리사이즈 시 갱신할 값
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

//모바일용 our selection 스와이퍼
// 1. 데이터를 가져올 컨테이너를 찾는다.
// 2. furnitureList 데이터를 순회(map/forEach)한다.
// 3. 순회하면서 각 데이터에 맞는 HTML 문자열을 만든다.
// 4. 만들어진 문자열을 container.innerHTML에 꽂아준다.
// 5. 스와이퍼를 초기화한다.
function initMobileSelection() {
  const imgWrapper = document.querySelector(".selection-mobile-img-slide .swiper-wrapper");
  const textBox = document.querySelector(".selection-mobile-text-box");
  
  if (!imgWrapper || !textBox) return; // 요소가 없으면 함수 종료

  let imgHtml = "";
  furnitureList.forEach((item) => {
    // 오타 수정: swiper-slide
    imgHtml += `
      <div class="swiper-slide">
        <img src="${item.img}" alt="${item.title}" class="img-fit">
      </div>
    `;
  });
  imgWrapper.innerHTML = imgHtml;

  function updateText(index) {
    const item = furnitureList[index];
    if (!item) return;
    textBox.innerHTML = `
      <span class="num">${item.num}</span>
      <h3 class="title">${item.title} <span>${item.korTitle}</span></h3>
      <p class="desc">${item.desc}</p>
      <a href="${item.link}" class="btn-main">자세히 보기<i class="icon icon-17 icon-arrow-right"></i></a>
    `;
  }

  // 스와이퍼 초기화
  new Swiper(".selection-mobile-img-slide", {
    slidesPerView: 1.5,
    centeredSlides: true,     // 현재 슬라이드를 무조건 가운데로 정렬
    spaceBetween: 0,         // 슬라이드 사이의 간격
    loop: true,
    pagination: {
      el: ".selection-mobile-display .swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        updateText(this.realIndex);
      },
    },
  });

  updateText(0);
}

// toBrHtml: iconic-cont용 줄바꿈 텍스트 생성 (lines 배열이 있으면 <br>로 연결, 없으면 원문 반환)
function toBrHtml(text, lines) {
  if (lines) return lines.join("<br>");
  return text;
}

// renderIconicSection: iconicList 데이터로 PC 슬라이드와 태블릿/모바일 콘텐츠 마크업 생성
function renderIconicSection() {
  const slideWrapper = document.querySelector(".iconic-slide .swiper-wrapper");
  const iconicCont = document.querySelector(".iconic-cont");
  if (!slideWrapper || !iconicCont) return;

  let slideHtml = "";
  let contHtml = "";

  iconicList.forEach((item) => {
    const num = String(item.id).padStart(2, "0");

    slideHtml += `
      <div class="swiper-slide slide${num}">
        <div class="item-box">
          <img src="${item.img}" alt="${item.enName}">
        </div>
        <div class="slide-info">
          <h3 class="info-en-name">${item.enName}</h3>
          <p class="info-ko-name">${item.koName}</p>
          <span class="info-price">${item.price}</span>
        </div>
      </div>
    `;

    contHtml += `
      <div class="iconic-cont__item item__${num}">
        <div class="item-box">
          <img src="${item.img}" alt="${item.enName}">
        </div>
        <div class="item-info">
          <h3 class="info-en-name">${toBrHtml(item.enName, item.enNameLines)}</h3>
          <p class="info-ko-name">${toBrHtml(item.koName, item.koNameLines)}</p>
          <span class="info-price">${item.price}</span>
        </div>
      </div>
    `;
  });

  slideWrapper.innerHTML = slideHtml;
  iconicCont.innerHTML = contHtml;
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

  // 1024px 미만이면 계산 로직을 멈추고, 미디어 요소의 인라인 스타일을 초기화
  if (window.innerWidth < 1024) {
    items.forEach(item => {
      const media = item.querySelector('.value-item__media');
      if (media) media.style.left = ''; // left 값 제거
    });
    return;
  }

  // 1024px 이상일 때만 계산 수행
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
  const showroomSections = document.querySelectorAll('.showroom-desktop .showroom__section');
  const FollowGroup = document.querySelector('.showroom-desktop .cursor-follow-group');

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
    const FollowGroup = document.querySelector('.showroom-desktop .cursor-follow-group');
    FollowGroup.style.left = e.clientX + 'px';
    FollowGroup.style.top = e.clientY + 'px';
  }
}

// initShowroomClick: 쇼룸 섹션 클릭 시 active 클래스를 토글하여 특정 섹션을 활성화하고, 커스텀 커서를 숨긴다
function initShowroomClick() {
  const sections = document.querySelectorAll('.showroom-desktop .showroom__section');

  // 문서 전체에 클릭 이벤트
  document.addEventListener('click', (e) => {

    // 클릭한 곳이 쇼룸 섹션 내부인가 확인
    const clickedSection = e.target.closest('.showroom-desktop .showroom__section');

    // 외부 클릭 시 원래 형태로 되돌리기
    if (!clickedSection) {
      sections.forEach(s => s.classList.remove('active'));

      // 외부 클릭 시 커서 팔로워는 즉시 숨김
      const cursor = document.querySelector('.showroom-desktop .cursor-follow-group');
      if (cursor) cursor.classList.remove('active');
      return;
    }

    // 내부 클릭 시 선택된 섹션만 활성화
    if (clickedSection.classList.contains('active')) return;

    sections.forEach(s => s.classList.remove('active'));
    clickedSection.classList.add('active');

    // 커서 숨기기
    const cursor = document.querySelector('.showroom-desktop .cursor-follow-group');
    if (cursor) cursor.classList.remove('active');
  });
}

// adjustLinkBoxPosition: 쇼룸 핫스팟 클릭 시, 링크 박스가 쇼룸 영역 밖으로 나가지 않도록 좌표를 계산하여 위치(분면별 배치)를 조정
function adjustLinkBoxPosition() {
  document.addEventListener('click', (e) => {
    const hotspot = e.target.closest('.showroom-desktop .product-card__hotspot'); //closest() 메서드는 주어진 CSS 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽(부모 방향, 문서 루트까지)으로 문서 트리를 순회한다

    if (!hotspot) { // hotspot이 없다면, 즉 클릭한곳이 hotspot 영역이 아니라면
      document.querySelectorAll('.showroom-desktop .product-card').forEach(c => c.classList.remove('is-open')); //product-card에 is-open클래스를 지움
      return;
    }

    const card = hotspot.closest('.showroom-desktop .product-card');
    // 방금 클릭한 카드(card)를 제외한 '나머지 카드들'만 찾아서 닫기
    document.querySelectorAll('.showroom-desktop .product-card').forEach(c => {
      if (c !== card) {
        c.classList.remove('is-open');
      }
    });


    const linkBox = card.querySelector('.showroom-desktop .product-card__link');
    const section = card.closest('.showroom-desktop .showroom__section');

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