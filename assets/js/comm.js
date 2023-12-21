var swiper = new Swiper(".main-visual", {
  slidesPerView: 1, // 보여질 슬라이드 수
  centeredSlides: true, // 가운데 정렬된 슬라이드
  autoplay: {
    delay: 5000, // 자동 재생 딜레이(ms)
    disableOnInteraction: false, // 유저 상호작용 후에도 자동 재생 유지
  },
  pagination: {
    el: ".swiper-pagination", // 페이지 표시 요소
    clickable: true, // 페이지 버튼 클릭 가능 여부
  },
  navigation: {
    nextEl: ".swiper-button-next", // 다음 버튼 클래스
    prevEl: ".swiper-button-prev", // 이전 버튼 클래스
  },
});

var swiper = new Swiper(".thumb-tit", {
  loop: false,
  spaceBetween: 12,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".swiper-main-activities", {
  loop: true,
  spaceBetween: 10,
  //
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
