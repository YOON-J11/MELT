
// async : 내부에서 await(기다리는 작업)를 사용하겠다고 함수에 미리 알려주는 선언문
async function loadSearchOverlay() {
  const SearchOverlayContainer = document.querySelector('#searchOverlay');
  if (!SearchOverlayContainer) return;
  try {
    const response = await fetch('./inc/search.html');
    const data = await response.text();
    SearchOverlayContainer.innerHTML = data;

    initSearch();

  } catch (error) {
    console.error('검색창을 불러오는 데 실패했습니다.', error)
  }
}

function initSearch() {
  const searchOverlay = document.querySelector("#searchOverlay");
  if (!searchOverlay) return;

  const searchInput = searchOverlay.querySelector('.search-input');
  const clearBtn = searchOverlay.querySelector('.btn-search-clear');

  if (searchInput && clearBtn) {

    // 키보드를 입력할때마다 글자 유무 체크
    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim().length > 0) {
        clearBtn.classList.add('is-show'); //인풋박스에 글자를입력했으면 (value값이 있으면) x버튼을 표시하기
      } else {
        clearBtn.classList.remove('is-show');
      }
    });

    //x버튼(clearBtn)을 눌럿을때
    clearBtn.addEventListener('click', () => {
      searchInput.value = ''; //입력창 텍스트 비우기
      clearBtn.classList.remove('is-show');
      searchInput.focus(); //포커스 유지
    });
  }



  document.addEventListener('click', (e) => {
    // 1. 열기 버튼을 눌렀을 때
    if (e.target.closest('.btn-search-open')) {
      searchOverlay.classList.add('is-open');
      lockBodyScroll();
    }

    // 2. 닫기(X) 버튼을 눌렀을 때
    if (e.target.closest('.btn-search-close')) {
      searchOverlay.classList.remove('is-open');
      unlockBodyScroll();

      // 닫힐 때 검색어랑 X 버튼도 초기화
      if (searchInput && clearBtn) {
        searchInput.value = '';
        clearBtn.classList.remove('is-show');
      }

    }

    // 3. 검은색 불투명 배경을 눌렀을 때 (바깥 영역)
    if (e.target === searchOverlay) {
      searchOverlay.classList.remove('is-open');
      unlockBodyScroll();

      if (searchInput && clearBtn) {
        searchInput.value = '';
        clearBtn.classList.remove('is-show');
      }
    }
  });
}

async function loadTopBanner() {
  const topBannerContainer = document.querySelector('#TopBanner');
  if (!topBannerContainer) return;
  try {
    const response = await fetch('./inc/top-banner.html');
    const data = await response.text();
    topBannerContainer.innerHTML = data;

    handleTopBanner();

  } catch (error) {
    console.error('탑배너를 불러오는 데 실패했습니다.', error)
  }
}

async function loadHeader() { //외부 html파일을을 가져와서 화면에 배치하고 관련된 모든 기능을 활성화하는 함수
  const headerContainer = document.querySelector('#header'); //헤더 찾고 선언

  if (!headerContainer) return; //만약 헤더가 없다면 아래에 있는 로직 실행하지 않고 즉시 종료

  try {
    const response = await fetch('./inc/header.html'); //1.외부파일 가져오기
    // fetch : 외부 서버나 파일에 데이터를 가져와 달라고 요청(주문)하는 기능
    // await : 데이터가 도착할 때까지 다음 줄로 넘어가지 않고 잠시 기다리게 만드는 지시어

    const data = await response.text(); //2.가져온 파일을 텍스트로 변환해서 저장
    headerContainer.innerHTML = data; //3.변환된 HTML내용을 비어있던 헤더그릇안에 집어넣기


    megaPromoSwiper(); //메가프로모 슬라이드 활성화
    handleHeader(); //헤더(메뉴들)로직 활성화
    initMobileMenu();
    accordionMenu();


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


// [컴포넌트 모듈화 : 헤더와 푸터를 별도 파일로 분리하여 `fetch` API로 동적 로딩]
// 전체 순서: 1.자리찾기 -> 2.가져오기 -> 3.꽂고 기능켜기
// 세부 순서:
// 1. 위치잡기 - html문서에서 헤더가 들어갈 빈그릇(id="header")을 먼저 찾아 변수에 담고, 없으면 실행종료(return)한다.
// 2. 파일요청하기 - 외부 html파일(header.html)을 가져오기위해 fetch를 쓰고, 파일이 도착할때까지 기다리기위해 await를 붙인다. (이때 한수 머리에는 asyns가 필수!)
// 3. 텍스트로 바꾸기 -서버가 가져다준 날것의 응답(response)을 우리가 읽을 수 있는 HTML 텍스트로 변환하고, 이것도 끝날 때까지 await로 기다린다.
// 4. 화면에 꽂아넣기: 변환된 텍스트 데이터를 아까 찾아둔 빈 그릇의 innerHTML에 통째로 집어넣는다. (이 순간 화면에 헤더 HTML이 생겨남)
// 5. 기능(이벤트/라이브러리) 살리기: 헤더 HTML이 DOM에 생겼으니, 그 안에 들어있는 버튼이나 슬라이드, 스크롤 기능들이 작동하도록 관련 함수들을 차례대로 실행해 준다.
// 6. 안전장치(에러 처리) 감싸기: 1~5번 과정 중 경로 오타나 네트워크 문제로 터질 수 있으니, 이 모든 핵심 과정을 try로 감싸고 만약의 경우를 대비해 catch로 에러를 잡아준다.


function handleTopBanner() {
  const topBannerContainer = document.querySelector('#TopBanner');
  const topBanner = document.querySelector('.top-banner');
  if (!topBanner || !topBannerContainer) return; // 탑배너가 없으면 종료

  // 스와이퍼 초기화
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


  // 스크롤 로직
  let lastScrollY = window.scrollY;
  const onTopBannerScroll = throttleWithRaf(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      topBannerContainer.classList.remove('hidden');
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      topBannerContainer.classList.add('hidden');
    }
    lastScrollY = currentScrollY;
  });

  window.addEventListener('scroll', onTopBannerScroll, { passive: true });

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
  const topBannerContainer = document.querySelector('#TopBanner');
  if (!header) return;

  // index.html이 아니면 서브페이지로 판단
  const path = window.location.pathname;
  const isMainPage = path.endsWith('/index.html') || path.endsWith('/MELT/') || path === '/' || path === '';

  // 탑배너 유무, 탑배너 높이 감지 후 동적 설정
  if (topBannerContainer) {
    const bannerHeight = topBannerContainer.offsetHeight;
    document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
    header.classList.add('has-banner');
  } else {
    document.documentElement.style.setProperty('--banner-height', '0px');
    header.classList.remove('has-banner');
  }

  // 서브페이지면 로드 되자마자 active 부여
  if (!isMainPage) {
    header.classList.add('active');
  }

  // 스크롤 로직
  let lastScrollY = window.scrollY;
  const onHeaderScroll = throttleWithRaf(() => {
    // 모바일 메뉴가 열려있다면(is-open 클래스 확인) 스크롤 로직 무시
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay && overlay.classList.contains('is-open')) return;

    const currentScrollY = window.scrollY;

    // 현재 호버 중인지 확인
    const isHovering = header.classList.contains('hover');

    if (currentScrollY === 0) {
      // 최상단일때 hidden, scrolled 클래스를 무조건 지워서 탑배너가 보이게 하기
      header.classList.remove('hidden', 'scrolled');

      if (isMainPage && !isHovering) { // 메인페이지에서 헤더에 마우스호버중일 경우 active지우기
        header.classList.remove('active');
      } else {
        header.classList.add('active');
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

  window.addEventListener('scroll', onHeaderScroll, { passive: true });

  // PC 전용 호버 로직 (모바일은 무시)
  headerMain.addEventListener('mouseover', () => {
    if (window.innerWidth <= 1024) return;
    header.classList.add('active', 'hover');
  });

  header.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 1024) return;
    header.classList.remove('hover');
    if (window.scrollY === 0 && isMainPage) { // 메인페이지에서 최상단일 경우 active제거
      header.classList.remove('active');
    }
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
    lockBodyScroll();
  } else {
    // 메인페이지 최상단일 때만 active 제거하고, 서브페이지는 active 유지
    const path = window.location.pathname;
    const isMainPage = path.endsWith('/index.html') || path.endsWith('/MELT/') || path === '/' || path === '';

    if (isMainPage && window.scrollY === 0) {
      header.classList.remove('active');
    }
    unlockBodyScroll();
  }
}

function initMobileMenu() {
  const openBtn = document.querySelector('.btn-menu-trigger');
  const closeBtn = document.querySelector('.btn-menu-close');

  if (!openBtn || !closeBtn) return;

  openBtn.onclick = () => toggleMenu(true);
  closeBtn.onclick = () => toggleMenu(false);
}

function accordionMenu() {

  const headers = document.querySelectorAll('.mobile-accordion__header');//모든 헤더를 찾아서 저장

  //forEach문으로 배열을 순차적으로 순회하면서 함수를 실행하기
  headers.forEach((header) => {
    header.addEventListener('click', () => {
      //클릭한 헤더에 대한 서브메뉴(형제요소)를 찾아서 저장
      const content = header.nextElementSibling;
      //클릭한 헤더에 대한 아이콘을 찾아서 저장
      const downIcon = header.querySelector('.icon-chevron-down');

      if (!content) return; //서브메뉴가 없으면 실행중지

      const isExpanded = content.classList.contains('is-open'); //.contains로 클래스가 붙어있는지 확인함. 클래스가 붙어있다면 true를 반환함

      downIcon.classList.toggle('is-open', !isExpanded); //!isExpanded가 트루면, 클래스를 붙임. 즉 isExpanded가 false면 클래스를 붙임. 즉, is-open클래스가 안붙어있다면 클래스를 붙임
      content.classList.toggle('is-open', !isExpanded);
    })
  })


}

//  리사이즈 이벤트
window.addEventListener('resize', () => {
  const header = document.querySelector('header');
  const path = window.location.pathname;
  const isMainPage = path.endsWith('/index.html') || path.endsWith('/MELT/') || path === '/' || path === '';

  if (window.innerWidth > 1024) {
    toggleMenu(false); // PC 사이즈면 강제로 메뉴 닫기
  }

  // 화면 크기가 변할 때 서브페이지라면 active가 풀리지 않게 방어
  if (header && !isMainPage) {
    header.classList.add('active');
  }
});


window.addEventListener('DOMContentLoaded', () => { //브라우저가 기본 HTML구조를 모두 읽었을때 실행
  loadSearchOverlay();
  loadTopBanner();
  loadHeader();
  loadFooter();
  initScrollBtns();
});

