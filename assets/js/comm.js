$(function () {
  // -----------------------main-page-----------------------
  // swiper-main-page
  var swiper = new Swiper(".main-visual", {
    slidesPerView: 1, // 보여질 슬라이드 수
    centeredSlides: true, // 가운데 정렬된 슬라이드
    autoplay: {
      delay: 500000, // 자동 재생 딜레이(ms)
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
    breakpoints: {
      1280: {
        spaceBetween: 0,
        slidesPerView: 6,
      },
    },
  });
  var swiper2 = new Swiper(".swiper-main-activities", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    // centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    variableWidth: true,
    breakpoints: {
      1280: {
        spaceBetween: 12,
      },
    },
  });

  // swiper-campaign
  var swiper = new Swiper(".carousel-campaign", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // -----------------------sub-2-page-----------------------
  // swiper-sub2-page
  var swiper = new Swiper(".swiper-donation-usage", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //glide-sub2-page
  new Glide(".glide-q-and-a", {
    type: "slider",
    autoplay: false,
    // rewind: true,
    perView: 4,
    // paddings: "30px",
    breakpoints: {
      780: { perView: 1 },
      1280: { perView: 4 },
    },
    beforeTransition: beforeCardChange,
  }).mount();
  function beforeCardChange(args) {
    var current = $(".list-card.active");
    current.removeClass("active");

    var left = args.swipe.distance > 0;
    var direction = left ? args.index - 1 : args.index + 1;
    var newIndex =
      parseInt(current.attr("data-slide-number")) + (left ? -1 : 1);
    if (newIndex > args.length) {
      newIndex = 1;
    } else if (newIndex <= 0) {
      newIndex = args.length;
    }
    $('[data-slide-number="' + newIndex + '"]').addClass("active");
  }
  $(".dot").click(function () {
    $(".dot").removeClass("selected");
    $(this).addClass("selected");
  });
  // glide-donation-usage-web
  new Glide(document.querySelector(".glide-donation-usage-web"), {
    type: "slider",
    startAt: 0,
    perView: 2,
    focusAt: 0,
    keyboard: true,
    // bound: checkbox.checked,
    gap: 10,
  }).mount();

  // donation-usage-web의 txt부분
  // 기본세팅
  $("#txtWrap .cont-txt").removeClass("active");
  $(".cont-txt:first-child").addClass("active");
  const txtEls = $("#txtWrap").find(".cont-txt");
  console.log(txtEls);

  $("#btnNext").on("click", function () {
    let activeNow = $("#txtWrap").find(".active");
    // 현재 active 되어 있는 클래스 지우기
    let present = activeNow.removeClass("active");
    //현재 index 의 다음 index를 가진 클래스를 active 해주기
    present = present.next().addClass("active");
    // present 요소의 인덱스 구하기
    let index = txtEls.index(present);
    console.log(index);
    if (index == -1) {
      txtEls.removeClass("active");
      txtEls.eq(0).addClass("active");
    }
  });
  $("#btnPrev").on("click", function () {
    let activeNow = $("#txtWrap").find(".active");
    let present = activeNow.removeClass("active");
    present = present.prev().addClass("active");
    let index = txtEls.index(present);
    console.log(index);
    if (index == -1) {
      txtEls.removeClass("active");
      txtEls.eq(4).addClass("active");
    }
  });

  // q-and-a-web의 card flip 효과
  $(".list-card").click(function () {
    if ($(this).find(".card").hasClass("flipped")) {
      $(this).find(".card").removeClass("flipped");
    } else {
      $(".card").removeClass("flipped");
      $(this).find(".card").toggleClass("flipped");
    }
  });
});

// -----------------------sub-1-page-----------------------

// gsap-sub-1-page
gsap.registerPlugin(ScrollTrigger);

// section css 세팅
// gsap.set("#corevalue", { autoAlpha: 0 });

// content css 세팅
gsap.set(".content", { autoAlpha: 0 });

// content 배열
var contents = gsap.utils.toArray("#corevalue .content");

if (window.innerWidth >= 1280) {
  sectionTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#corevalue",
      pin: "#corevalue",
      start: "top top",
      end: "+=140%",
      scrub: 0.5,
      // markers: true,
    },
  });
  // sectionSt = ScrollTrigger.create({
  //   trigger: "#corevalue",
  //   pin: "#corevalue",
  //   start: "top top",
  //   end: "+=140%",
  //   scrub: 0.5,
  //   // markers: true,
  // });

  // 각각의 content 정의
  contents.forEach(function (elem, i) {
    const tlDelay = i;
    var titles = elem.querySelectorAll("#text");
    var contentTl = gsap.timeline(); // 애니메이션은 일단 정지된 상태로 시작합니다.
    // var contentTl = gsap.timeline({ paused: true }); // 애니메이션은 일단 정지된 상태로 시작합니다.
    // console.log(tlDelay);

    gsap.set("#corevalue .content", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    contentTl
      .to(elem, { autoAlpha: 1 }, tlDelay)
      .from(titles, {
        yPercent: 200,
        duration: 1,
        ease: "power2.out",
        stagger: 0.6,
      })
      .to(elem, { autoAlpha: 0 });

    sectionTl.add(contentTl, tlDelay);

    // 각 content 요소에 ScrollTrigger 생성
    let contentSt = ScrollTrigger.create({
      trigger: elem,
      scrub: true,
      start: "top top", // 트리거가 시작되는 위치
      end: "+=120%", // 트리거가 끝나는 위치
      toggleActions: "play none none reverse", // 트리거 동작 설정
      onEnter: function () {
        contentTl.restart(); // 트리거에 진입하면 애니메이션 재생
      },
      onLeaveBack: function () {
        contentTl.reverse(); // 트리거를 떠날 때 애니메이션 되돌리기
      },
      // markers: true, // 디버깅을 위한 마커 표시
    });
  });
}

$(function () {
  // -----------------------common-----------------------
  // sidebar
  // list에서 active 지우기
  $(".sidebar-web .list-sidebar").removeClass("active");
  $(".info-active").addClass("active");
  $(".mission-vision-active").addClass("active");

  $(".sidebar-web .list-sidebar").click(function () {
    // list에서 active 지우기
    $(".list-sidebar").removeClass("active");
    // this에 active 부여하기
    $(this).addClass("active");
  });
});
