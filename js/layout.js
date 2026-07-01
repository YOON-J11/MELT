
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
    initMobileMenu();


  } catch (error) { //파일경로가 틀렸거나 네트워크 문제가 발생했을경우 에러메세지 출력
    console.error('헤더를 불러오는 데 실패했습니다.', error);
  }

}
async function loadFooter() {
  const footerContainer = document.querySelector('#footer');
  if (!footerContainer) return;
  try {
    const response = await fetch('./inc/footer.html');
    const data = await response.text();
    footerContainer.innerHTML = data;
  } catch (error) {
    console.error('푸터를 불러오는 데 실패했습니다.', error)
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

  // 스크롤 로직 
  window.addEventListener('scroll', () => {

    // 모바일 메뉴가 열려있다면(is-open 클래스 확인) 스크롤 로직 무시
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay && overlay.classList.contains('is-open')) return;


    const currentScrollY = window.scrollY;

    // 현재 호버 중인지 확인
    const isHovering = header.classList.contains('hover');

    if (currentScrollY === 0) {
      // 마우스 호버중이 아니고 최상단일때 투명 배경 복귀
      if (!isHovering) {
        header.classList.remove('active', 'hidden', 'scrolled');
    }
    } else {
      // 스크롤 시작: 흰색 배경 강제
      header.classList.add('active');

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤: 숨김
        header.classList.add('hidden');
        header.classList.remove('scrolled');
      } else if (currentScrollY < lastScrollY) {
        // 위로 스크롤: 보임
        header.classList.remove('hidden');
        header.classList.add('scrolled');
      }
    }
    lastScrollY = currentScrollY;
  });

  // PC 전용 호버 로직 (모바일은 무시)
  headerMain.addEventListener('mouseover', () => {
    if (window.innerWidth <= 1024) return;
    header.classList.add('active', 'hover');
  });

  header.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 1024) return;
    header.classList.remove('hover');
    if (window.scrollY === 0) header.classList.remove('active');
  });
}

function initScrollBtns() {
  const upBtn = document.querySelector('.btn-scroll.up');
  const downBtn = document.querySelector('.btn-scroll.down');

  upBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  downBtn.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  })
}

// 메뉴 상태를 한 번에 관리하는 함수
function toggleMenu(isOpen) {
  const overlay = document.querySelector('.mobile-menu-overlay');
  const openBtn = document.querySelector('.btn-menu-trigger');
  const closeBtn = document.querySelector('.btn-menu-close');
  const header = document.querySelector('header');

  if (!overlay || !openBtn || !closeBtn) return;

  // 열 때(true) / 닫을 때(false) 공통 로직
  overlay.classList.toggle('is-open', isOpen); //toggle의 두번째 인자에 true가 오면 무조건 클래스를 붙인다. false가 오면 클래스를 지운다.
  openBtn.style.display = isOpen ? 'none' : 'block';
  closeBtn.style.display = isOpen ? 'block' : 'none';

  if (isOpen) {
    header.classList.add('active');
    document.body.classList.add('menu-is-open');
    document.documentElement.classList.add('menu-is-open');
  } else {
    if (window.scrollY === 0) header.classList.remove('active');
    document.body.classList.remove('menu-is-open');
    document.documentElement.classList.remove('menu-is-open');
  }
}

// 이벤트 초기화 (딱 한 번만 실행)
function initMobileMenu() {
  const openBtn = document.querySelector('.btn-menu-trigger');
  const closeBtn = document.querySelector('.btn-menu-close');

  if (!openBtn || !closeBtn) return;

  openBtn.onclick = () => toggleMenu(true);
  closeBtn.onclick = () => toggleMenu(false);
}

// 리사이즈 시에는 클래스 정리만
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    toggleMenu(false); // PC 사이즈면 강제로 메뉴 닫기
  }
});


window.addEventListener('DOMContentLoaded', () => { //브라우저가 기본 HTML구조를 모두 읽었을때 실행
  loadHeader();
  loadFooter();
  initScrollBtns();

});

