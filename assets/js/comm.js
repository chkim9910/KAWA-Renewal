// swiper
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

var swiper = new Swiper(".carousel-campaign", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// // gsap
// gsap.registerPlugin(ScrollTrigger);

// let coloredSections = gsap.utils.toArray("[data-color]");
// coloredSections.forEach((section, i) => {
//   // grab the colors from the attribute
//   let [bgColor, color] = section.getAttribute("data-color").split(" ");
//   ScrollTrigger.create({
//     trigger: section,
//     start: "400 bottom",
//     end: "+=100%",
//     onToggle: (self) => {
//       // whenever we enter a section from either direction (scrolling up or down), animate to its color
//       if (self.isActive) {
//         gsap.to("body", {
//           backgroundColor: bgColor,
//         });
//         // when we LEAVE the very first section scrolling in reverse -OR- when we scroll past the very last section (forward), return to the "normal" colors
//       } else if (
//         (i === 0 && self.direction < 0) ||
//         (i === coloredSections.length - 1 && self.direction > 0)
//       ) {
//         gsap.to("body", {
//           backgroundColor: "$white",
//         });
//       }
//     },
//   });
// });

// ScrollTrigger.create({
//   trigger: ".campaign",
//   pin: ".container",
//   start: "top top",
//   end: "bottom bottom",
//   markers: false,
// });

// let bg = gsap.utils.toArray(".bg-deco");
// gsap.set(bg, { yPercent: 200, opacity: 0 });

// headings.forEach((bg, i) => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".trigger",
//       start: () => `top+=${i * window.innerHeight} top`,
//       end: () => `top+=${(i + 1) * window.innerHeight} top`,
//       markers: true,
//       scrub: true,
//     },
//   });

//   tl.to(bg, { yPercent: 0, opacity: 1 }).to(
//     bg,
//     { yPercent: -200, opacity: 0 },
//     "+=1"
//   );
// });
