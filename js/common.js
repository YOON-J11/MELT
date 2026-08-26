// 스크롤 잠금 시 스크롤바가 사라지며 레이아웃이 밀리지 않도록 폭을 보정
function lockBodyScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  document.body.classList.add('is-locked');
  document.documentElement.classList.add('is-locked');
}

function unlockBodyScroll() {
  document.body.classList.remove('is-locked');
  document.documentElement.classList.remove('is-locked');
  document.documentElement.style.removeProperty('--scrollbar-width');
}

// rAF 기반 스크롤 이벤트 throttle
function throttleWithRaf(fn) {
  let scheduled = false;

  return function (...args) {
    if (scheduled) return;

    scheduled = true;
    requestAnimationFrame(() => {
      fn.apply(this, args);
      scheduled = false;
    });
  };
}

// initRevealOnScroll: 뷰포트 진입 시 .reveal 요소에 is-visible 클래스를 추가
function initRevealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

// 페이지 로드 후 실행
document.addEventListener("DOMContentLoaded", function () {
  initRevealOnScroll();

  // 기본 셀렉트 박스
  const selects = document.querySelectorAll(".select-base");
  selects.forEach((select) => {
    // 초기 상태 체크 (이미 값이 있는 경우 대비)
    if (select.value !== "") {
      select.style.color = "var(--black)";
    }

    // 값이 변경될 때마다 색상 변경
    select.addEventListener("change", function () {
      if (this.value !== "") {
        this.style.color = "var(--black)"; // 선택 시 진하게
      } else {
        this.style.color = "var(--gray)"; // 미선택 시 연하게 (placeholder 색상)
      }
    });
  });



  // 커스텀 셀렉트 (ul, li) 박스
  const customSelects = document.querySelectorAll(".select-custom");
  customSelects.forEach((select) => {
    const trigger = select.querySelector(".select-trigger");
    const options = select.querySelectorAll(".select-options li");

    // 1. 트리거 클릭 시 목록 토글
    trigger.addEventListener("click", () => {
      select.classList.toggle("active");
    });

    // 2. 옵션 선택 시
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        const text = option.textContent;

        trigger.textContent = text; // 버튼 텍스트 변경
        trigger.classList.add("selected"); // 글자색 진하게
        select.classList.remove("active"); // 목록 닫기
      });
    });
  });

  // 3. 외부 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".select-custom")) {
      customSelects.forEach((s) => s.classList.remove("active"));
    }
  });
});
