
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

  const header = document.querySelector('header'); //헤더 찾아서 변수에 넣기
  const headerMain = document.querySelector('.header-main'); //헤더메인 찾아서 변수에 넣기

  const activate = () => header.classList.add('active');//기능을 변수에 담아 선언. 나중에 activate를 호출하면 active클래스가 붙음

  const deactivate = () => { //deactivate를 호출했을때 윈도우가 최상단에 있고, 마우스가 안올라가있을 경우(헤더에 hover클래스가 없는경우)에만 active제거
    if (window.scrollY === 0 && !header.classList.contains('hover')) {
      header.classList.remove('active');
    }
  }


  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      activate(); //스크롤이 최상단이 아니면 activate함수 호출
      header.classList.add('scrolled'); //scrolled 클래스 추가
    } else {
      header.classList.remove('scrolled'); //scrolled 클래스 제거
      deactivate(); //스크롤이 최상단에 있으면 deactivate함수 호출
    }
  });

  headerMain.addEventListener('mouseover', () => { //헤더메인에 마우스 올렸을때 이벤트
    activate(); //마우스 올렸을때 activate함수 호출
    header.classList.add('hover'); //헤더에 hover클래스 붙임
  });

  header.addEventListener('mouseleave', () => {
    header.classList.remove('hover'); //헤더에서 마우스가 벗어났을때 hover클래스 제거
    deactivate(); //헤더에서 마우스가 나갔을때 deactivate 함수 호출
  });
}


window.addEventListener('DOMContentLoaded', loadHeader); //브라우저가 기본 HTML구조를 모두 읽었을때 loadHeader를 실행