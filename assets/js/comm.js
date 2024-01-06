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

  // -----------------------common-sub1-and-sub2-----------------------
  // sidebar
  // list에서 active 지우기
  $(function () {
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

  // -----------------------sub-2-page-----------------------
  // ****************about-reasons****************
  gsap.registerPlugin(ScrollTrigger);
  const aboutReasons = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons",
      start: "top center",
      end: "center 30%",
      // scrub: 2,
      // markers: true,
    },
  });

  const cont1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont-container-1",
      start: "-10% center",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  cont1
    .from(".about-reasons .tit", {
      duration: 0.6,
      x: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-1 .pic", {
      delay: 0.1,
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-1 .cont-txt", {
      duration: 1,
      x: -100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-1 .bg-deco", {
      duration: 1,
      x: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    });

  const cont2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont-container-2",
      start: "-10% center",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  cont2
    .from(".cont-container-2 .pic", {
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-2 .cont-txt", {
      duration: 1,
      x: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-2 .bg-deco-2-2", {
      duration: 0.2,
      x: -100,
      scale: 2,
      rotation: 720,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-2 .bg-deco-2-3", {
      duration: 0.2,
      x: -100,
      y: 100,
      // rotation: 720,
      opacity: 0,
      ease: "power2.out",
    });

  const cont3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cont-container-3",
      start: "-10% center",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });

  cont3
    .from(".cont-container-3 .pic", {
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-3 .cont-txt", {
      duration: 1,
      x: -100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-3 .bg-deco-3-2", {
      duration: 0.2,
      x: -100,
      rotation: 720,
      opacity: 0,
      ease: "power2.out",
    });

  // ****************donation-usage****************
  const donationUsage = gsap.timeline({
    scrollTrigger: {
      trigger: ".donation-usage",
      start: "top center",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  donationUsage
    .from(".donation-usage .bg-deco-1", {
      duration: 0.3,
      y: -200,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".donation-usage .tit-web", {
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".donation-usage .tit", {
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".donation-usage .swiper-donation-usage", {
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(["#txtWrap", ".glide-donation-usage-web"], {
      delay: 0.1,
      duration: 0.6,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
    });

  // ****************swiper-donation-usage****************
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

  //****************glide-donation-usage-web****************
  new Glide(document.querySelector(".glide-donation-usage-web"), {
    type: "slider",
    startAt: 0,
    perView: 2,
    focusAt: 0,
    keyboard: true,
    // bound: checkbox.checked,
    gap: 10,
  }).mount();

  // ****************donation-usage-web의 txt****************
  // 기본세팅
  $("#txtWrap .cont-txt").removeClass("active");
  $(".cont-txt:first-child").addClass("active");
  const txtEls = $("#txtWrap").find(".cont-txt");

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

  //****************q-and-a****************
  const fqa = gsap.timeline({
    scrollTrigger: {
      trigger: ".q-and-a",
      start: "top center",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });

  fqa
    .from(".q-and-a .bg-deco-1", {
      duration: 0.2,
      x: -100,
      rotation: 520,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".q-and-a .bg-deco-2", {
      duration: 0.2,
      x: -100,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".q-and-a .tit", {
      duration: 0.6,
      y: 100,
      stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".glide-q-and-a", {
      delay: 0.1,
      duration: 0.6,
      x: 200,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
    });

  //****************glide-q-and-a****************
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

  // ****************q-and-a-web의 card flip****************
  $(".list-card").click(function () {
    if ($(this).find(".card").hasClass("flipped")) {
      $(this).find(".card").removeClass("flipped");
    } else {
      $(".card").removeClass("flipped");
      $(this).find(".card").toggleClass("flipped");
    }
  });
});
// ****************financial-report****************
const financialReport = gsap.timeline({
  scrollTrigger: {
    trigger: ".financial-report",
    start: "top center",
    end: "center center",
    scrub: 2,
    // markers: true,
  },
});

financialReport
  .from(".container-financial-report", {
    duration: 0.6,
    y: 100,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".btn-more", {
    duration: 0.6,
    y: 100,
    opacity: 0,
    ease: "power2.out",
  });

// -----------------------sub-1-page-----------------------
// ****************mission-vision-gsap****************
gsap.registerPlugin(ScrollTrigger);
const missionvision = gsap.timeline({
  scrollTrigger: {
    trigger: ".bg-from-left",
    // pin: ".bg-from-left",
    start: "top center",
    end: "center 30%",
    scrub: 2,
    // markers: true,
  },
});

const content = ".mission-vision .mv-content";

missionvision
  .from(".bg-from-left", {
    duration: 1,
    x: 100,
    stagger: 1,
    opacity: 0,
    ease: "power2.out",
  })
  .from(content, {
    duration: 1,
    y: 100,
    stagger: 0.6,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".from-left", {
    duration: 1,
    x: 100,
    stagger: 0.3,
    opacity: 0,
    ease: "power2.out",
  });

// ****************core-value-gsap****************
gsap.registerPlugin(ScrollTrigger);

// content 배열
var contents = gsap.utils.toArray("#corevalue .content");

if (window.innerWidth >= 1280) {
  const sectionTl = gsap.timeline({
    onComplete: function () {
      gsap.to("#corevalue", {
        opacity: 0,
        duration: 1,
      }); // 모든 애니메이션이 완료된 후 #corevalue의 opacity를 0으로 설정
    },
    scrollTrigger: {
      trigger: "#corevalue",
      pin: "#corevalue",
      start: "-10% top",
      end: "+=140%",
      scrub: 0.5,
    },
  });
  // #corevalue에 효과 부여
  sectionTl
    .from("#corevalue", {
      duration: 1,
      x: -100,
      opacity: 0,
    })
    .to("#corevalue", {
      duration: 0.8,
      yPercent: -10,
      opacity: 1,
      ease: "power2.out", // ease 효과 추가
    })
    .from(".tit-box", {
      duration: 1,
      y: 100,
      opacity: 0,
    })
    .from("#contentWrap", {
      opacity: 0,
      // duration: 1,
      // yPercent: 50,
      // y: 100,
    });

  // 각각의 content에 대한 애니메이션
  contents.forEach(function (elem, i) {
    const tlDelay = i;
    var titles = elem.querySelectorAll("#text");
    var contentTl = gsap.timeline();

    gsap.set(".content", {
      zIndex: (i, target, targets) => targets.length - i,
      autoAlpha: 0, // 초기에는 모든 .content를 숨김
    });

    contentTl
      .to(elem, { autoAlpha: 1 }, tlDelay + 2)
      .from(titles, {
        yPercent: 200,
        duration: 2,
        // delay: 3,
        stagger: 0.6,
        ease: "power2.out",
      })
      .to(elem, { autoAlpha: 0 });

    sectionTl.add(contentTl, tlDelay);

    // 각 content 요소에 ScrollTrigger 생성
    ScrollTrigger.create({
      trigger: elem,
      pin: elem,
      start: "top 25%", // 트리거가 시작되는 위치
      end: "+=200%", // 트리거가 끝나는 위치
      // end: "bottom 40%",
      scrub: true,
      toggleActions: "play none none reverse", // 트리거 동작 설정
      onEnter: function () {
        contentTl.play(); // 트리거에 진입하면 애니메이션 재생
      },
      // onLeaveBack: function () {
      //   contentTl.reverse(); // 트리거를 떠날 때 애니메이션 되돌리기
      // },
      // markers: true, // 디버깅을 위한 마커 표시
    });
  });
}

// ****************project-initiative-gsap****************
gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth >= 1280) {
  // cont 배열
  const conts = gsap.utils.toArray("#projectInitiative .cont");

  // horizontal 애니메이션
  gsap.to(conts, {
    xPercent: -100 * (conts.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#projectInitiative .wrapper",
      pin: true,
      start: "40% center",
      // end: "center bottom",
      // end: "+=300%",
      scrub: 1,
      // stagger: 5,
      delay: 2,
      snap: 1 / (conts.length - 1),
      // markers: true,
    },
  });

  // conts에 timeline 할당
  // 글씨 애니메이션
  const contsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .wrapper",
      start: "top center",
      scrub: 1,
      markers: true,
    },
  });

  contsTl
    .from(".cont-1-wrap .cont-1-tit", {
      duration: 0.3,
      x: -100,
      opacity: 0,
      // stagger: 0.3,
      // delay: 1,
    })
    .from(".cont-1-wrap .cont-1-desc", {
      duration: 0.3,
      y: 100,
      opacity: 0,
      stagger: 0.3,
    })
    .from([".cont-1-wrap .bg-deco-1-cls-2", ".bg-deco-1-cls-3"], {
      duration: 0.8,
      scale: 0,
      stagger: 0.2,
      delay: 0.5,
      // y: 100,
      // opacity: 0,
    })
    .from(".cont-1-wrap .bg-deco-1-cls-1", {
      duration: 0.8,
      scale: 0,
      rotate: 180,
    })
    .to(".cont-1-wrap .cont-1-desc", {
      duration: 12,
    });

  const proCont2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-2-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont2
    .from(
      [
        ".cont-2-wrap .cont-2-tit",
        ".cont-2-wrap .cont-2-desc",
        ".cont-1-wrap .bg-deco-2",
      ],
      {
        duration: 0.5,
        y: 100,
        stagger: 0.1,
        opacity: 0,
        ease: "power2.out",
        // delay: 0.5,
      }
    )
    .to([".cont-2-wrap .cont-2-tit", ".cont-2-wrap .cont-2-desc"], {
      duration: 10,
    });

  const proCont3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-3-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont3
    .from([".cont-3-wrap .cont-3-tit", ".cont-3-wrap .cont-3-desc"], {
      duration: 0.5,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
    })
    .to([".cont-3-wrap .cont-3-tit", ".cont-3-wrap .cont-3-desc"], {
      duration: 3,
    });

  const proCont4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-4-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont4
    .from([".cont-4-wrap .cont-4-tit", ".cont-4-wrap .cont-4-desc"], {
      duration: 0.5,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 1.3,
    })
    .to([".cont-4-wrap .cont-4-tit", ".cont-4-wrap .cont-4-desc"], {
      duration: 3,
    });

  const proCont5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-5-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont5
    .from([".cont-5-wrap .cont-5-tit", ".cont-5-wrap .cont-5-desc"], {
      duration: 0.5,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 2.5,
    })
    .to([".cont-5-wrap .cont-5-tit", ".cont-5-wrap .cont-5-desc"], {
      duration: 3,
    });

  const proCont6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-6-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont6
    .from([".cont-6-wrap .cont-6-tit", ".cont-6-wrap .cont-6-desc"], {
      duration: 0.5,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 4.8,
    })
    .to([".cont-6-wrap .cont-6-tit", ".cont-6-wrap .cont-6-desc"], {
      duration: 3,
    });

  const proCont7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-7-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont7
    .from([".cont-7-wrap .cont-7-tit", ".cont-7-wrap .cont-7-desc"], {
      duration: 1,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 11,
    })
    .to([".cont-7-wrap .cont-7-tit", ".cont-7-wrap .cont-7-desc"], {
      duration: 3,
    });

  const proCont8 = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .cont-8-wrap",
      start: "top top",
      scrub: 2,
      markers: true,
    },
  });
  proCont8
    .from([".cont-8-wrap .cont-8-tit", ".cont-8-wrap .cont-8-desc"], {
      duration: 2,
      y: 100,
      stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 35,
    })
    .to([".cont-8-wrap .cont-8-tit", ".cont-8-wrap .cont-8-desc"], {
      duration: 3,
    });

  // conts.seek(Math.floor(scrollTrigger.progress * 100));
}
