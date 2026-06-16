
//async : 내부에서 비동기작업(fetch)을 순서대로 기다리며 실행하겠다는 선언
async function loadHeader() { //외부 html파일을을 가져와서 화면에 배치하고 관련된 모든 기능을 활성화하는 함수
  const headerContainer = document.querySelector('#header'); //헤더 찾고 선언

  if (!headerContainer) return; //만약 헤더가 없다면 아래에 있는 로직 실행하지 않고 즉시 종료

  try {
    const response = await fetch('./inc/header.html'); //1.외부파일 가져오기
    const data = await response.text(); //2.가져온 파일을 텍스트로 변환해서 저장
    headerContainer.innerHTML = data; //3.변환된 HTML내용을 비어있던 헤더그릇안에 집어넣기


    topBannerSwiper(); //탑배너 슬라이드 활성화
    megaPromoSwiper(); //메가프로모 슬라이드 활성화
    handleHeader(); //헤더(메뉴들)로직 활성화
    initTopButton(); // 탑버튼 활성화


  } catch (error) { //파일경로가 틀렸거나 네트워크 문제가 발생했을경우 에러메세지 출력
    console.error('헤더를 불러오는 데 실패했습니다:', error);
  }

}


function topBannerSwiper() {//탑배너 스와이퍼
  const topBannerSwiper = new Swiper(".swiper.top-banner", {
    direction: 'vertical', // 아래에서 위로 전환
    slidesPerView: 1, //한 화면에 보여질 슬라이드 수
    loop: true, //무한반복 여부
    speed: 300, //슬라이드 전환 속도 1000=1초
    centeredSlides: true, //활성 슬라이드를 중앙에 배치
     autoplay: {
      //자동재생 설정
      delay: 3000, //슬라이드가 머무르는 시간
      disableOnInteraction: false, // 클릭 또는 스와이프시 멈춤 여부 (완전정지)
      pauseOnMouseEnter: true, // 마우스를 올리면 멈춤 여부(일시정지)
    },
  });
}

function megaPromoSwiper() {//메가프로모 스와이퍼
  const megaPromoSwiper = new Swiper(".swiper.mega-promo", {
    effect: 'fade', //페이드 효과
    fadeEffect: {
      crossFade: true // 슬라이드 전환 시 뒷배경이 비치지 않게 처리
    },
    slidesPerView: 1,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }
  });
}

function handleHeader() {
  const header = document.querySelector('header');
  const headerMain = document.querySelector('.header-main');
  let lastScrollY = window.scrollY;

  const activate = () => header.classList.add('active');
  const deactivate = () => {
    if (window.scrollY === 0 && !header.classList.contains('hover')) {
      header.classList.remove('active');
    }
  };

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // 마우스 호버 중일 때는 스크롤 로직 무시
    if (header.classList.contains('hover')) return;

    if (currentScrollY > 0) {
      activate();
      
      // 스크롤 다운 시
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hidden'); // 헤더 전체 숨김
        header.classList.remove('scrolled'); // 탑배너 숨김은 해제
      } 
      // 스크롤 업 시
      else if (currentScrollY < lastScrollY) {
        header.classList.remove('hidden'); // 전체 숨김 해제
        header.classList.add('scrolled');  // 탑배너만 숨긴 상태로 전환
      }
    } 
    // 최상단 도달 시
    else {
      header.classList.remove('hidden', 'scrolled');
      deactivate();
    }

    lastScrollY = currentScrollY;
  });

  // 호버 이벤트는 기존대로
  headerMain.addEventListener('mouseover', () => {
    header.classList.remove('hidden');
    activate();
    header.classList.add('hover');
  });
  
  header.addEventListener('mouseleave', () => {
    header.classList.remove('hover');
    deactivate();
  });
}


function initTopButton() {
  // 1. 버튼 생성 (HTML에 미리 안 만들어뒀다면 여기서 생성)
  const topBtn = document.createElement('button');
  topBtn.id = 'topBtn';
  topBtn.innerHTML = 'TOP'; // 아이콘을 쓰고 싶다면 <i class="icon-arrow"></i> 등으로 변경 가능
  document.body.appendChild(topBtn);

  // 2. 스크롤 이벤트 (보임/숨김)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // 3. 클릭 이벤트 (부드러운 이동)
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

window.addEventListener('DOMContentLoaded', loadHeader); //브라우저가 기본 HTML구조를 모두 읽었을때 loadHeader를 실행