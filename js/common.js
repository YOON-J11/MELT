// 페이지 로드 후 실행
document.addEventListener("DOMContentLoaded", function () {


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

        console.log("선택된 값:", value); // 실제 값 활용 가능
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
