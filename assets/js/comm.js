$(function () {
  // -----------------------main-page-----------------------
  // ****************main-visual****************
  // ****************swiper-main-visual****************
  var leftNumber = document.querySelector(".fst-num .fst-01"); // 첫 번째 슬라이드 번호로 초기 설정
  var swiper = new Swiper(".main-visual", {
    slidesPerView: 1, // 보여질 슬라이드 수
    centeredSlides: true, // 가운데 정렬된 슬라이드
    autoplay: {
      delay: 5000, // 자동 재생 딜레이(ms)
      disableOnInteraction: false, // 유저 상호작용 후에도 자동 재생 유지
    },
    pagination: {
      el: ".swiper-progress-bar", // 페이지 표시 요소
      type: "progressbar", // 진행 표시 막대 타입
      // clickable: true, // 페이지 버튼 클릭 가능 여부
    },
    navigation: {
      nextEl: ".swiper-button-next", // 다음 버튼 클래스
      prevEl: ".swiper-button-prev", // 이전 버튼 클래스
    },
    on: {
      init: function () {
        // 슬라이드가 초기화될 때 첫 번째 슬라이드 번호로 leftNumber 설정
        var activeIndex = this.activeIndex;
        var leftNumber = document.querySelector(
          ".fst-num .fst-0" + (activeIndex + 1)
        );
        leftNumber.classList.add("active");
      },
      slideChange: function () {
        // 슬라이드가 변경될 때마다 leftNumber 업데이트
        var activeIndex = this.activeIndex;
        console.log(activeIndex); // 슬라이드 변경 시 인덱스 확인

        var leftNumbers = document.querySelectorAll(".fst-num .num");
        leftNumbers.forEach(function (number) {
          number.classList.remove("active");
        });

        var leftNumber = document.querySelector(
          ".fst-num .fst-0" + (activeIndex + 1)
        );
        leftNumber.classList.add("active");

        var rightNumber = document.querySelector(".lst-num");
        rightNumber.innerText = "03";
      },
    },
  });

  // ****************main-activities****************
  const mainActivities = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-activities",
      pin: ".main-activities",
      start: "top top",
      end: "bottom top",
      scrub: 2,
      markers: true,
    },
  });
  mainActivities
    .from(".main-activities .tit", {
      duration: 0.6,
      x: 50,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
      // delay: 1,
    })
    .from(
      [
        ".main-activities .swiper-main-activities",
        ".main-activities .thumb-tit",
      ],
      {
        duration: 0.8,
        x: 100,
        stagger: 0.2,
        opacity: 0,
        ease: "power2.out",
        // delay: 1.5,
      }
    )
    .to(
      [
        ".main-activities .swiper-main-activities",
        ".main-activities .thumb-tit",
      ],
      {
        duration: 2,
      }
    );

  // ****************swiper-main-activities****************
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
    mousewheel: true,
    // slidesPerView: 3,
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
        slidesPerView: 1,
      },
    },
  });
  // 모든 슬라이드에 대해 active 클래스를 설정하는 함수 정의
  // function setActiveSlide() {
  //   var swiperSlides = document.querySelectorAll(
  //     ".swiper-main-activities .swiper-slide"
  //   );
  //   swiperSlides.forEach(function (slide) {
  //     slide.classList.remove("active");
  //   });
  //   var activeSlide = document.querySelector(
  //     ".swiper-main-activities .swiper-slide-active"
  //   );
  //   activeSlide.classList.add("active");
  // }

  // // Swiper 초기화 후 active 클래스 설정 함수 호출
  // swiper2.on("init", function () {
  //   setActiveSlide();
  // });

  // // 슬라이드 변경 시 active 클래스 설정 함수 호출
  // swiper2.on("slideChange", function () {
  //   setActiveSlide();
  // });

  // swiper.on("slideChange", function () {
  //   setActiveSlide();
  // });

  // ****************oncenter****************
  const onCenter = gsap.timeline({
    scrollTrigger: {
      trigger: ".oncenter",
      pin: ".oncenter",
      pinSpacing: true,
      start: "top top",
      end: "bottom top",
      scrub: 2,
      markers: true,
    },
  });
  onCenter
    .from([".oncenter .tit", ".oncenter .content"], {
      duration: 0.8,
      x: 100,
      stagger: 0.2,
      opacity: 0,
      ease: "power2.out",
      // delay: 1,
    })
    .from(".oncenter .img-list", {
      duration: 0.6,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".oncenter .img-list-web", {
      duration: 0.6,
      x: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
      delay: 0.5,
    })
    .to(".oncenter .img-list-web", {
      duration: 2,
    });

  // ****************swiper-oncenter****************
  var swiper = new Swiper(".img-list-web", {
    loop: false,
    spaceBetween: 20,
    centeredSlides: true,
    mousewheel: true,
    // autoplay: {
    //   delay: 2500,
    //   slidesPerView: 2,
    //   disableOnInteraction: false,
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  // ****************oncenter-info****************
  if (window.innerWidth >= 1280) {
    const oncenterInfo = gsap.timeline({
      scrollTrigger: {
        trigger: ".oncenter-info",
        pin: ".oncenter-info",
        pinSpacing: true,
        start: "10% top",
        end: "bottom top",
        scrub: 2,
        markers: true,
      },
    });
    oncenterInfo
      .from(".oncenter-info", {
        duration: 0.6,
        // y: 100,
        // stagger: 0.6,
        background: "#ffffff",
        opacity: 0,
        ease: "power2.out",
        // delay: 1,
      })
      .from(".wrapper-web .bg-opacity-15", {
        duration: 1.5,
        yPercent: 100,
        opacity: 0,
      })
      .from(".wrapper-web .bg-opacity-35", {
        duration: 1.5,
        yPercent: -100,
        opacity: 0,
      })
      .from([".info-list-web .rescue-web", ".info-list-web .affiliate-web"], {
        duration: 0.6,
        y: 50,
        stagger: 0.6,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
      })
      .from([".info-list-web .protect-web", ".info-list-web .adopt-web"], {
        duration: 0.6,
        y: 50,
        stagger: 0.6,
        opacity: 0,
        ease: "power2.out",
        delay: 0.8,
      })
      .to([".info-list-web .protect-web", ".info-list-web .adopt-web"], {
        duration: 2.5,
      })
      .to([".info-list-web .rescue-web", ".info-list-web .affiliate-web"], {
        duration: 1,
        y: -50,
        opacity: 0,
      })
      .to([".info-list-web .protect-web", ".info-list-web .adopt-web"], {
        duration: 1,
        y: -50,
        opacity: 0,
      })
      .to([".wrapper-web .bg-opacity-15", ".wrapper-web .bg-opacity-35"], {
        duration: 1,
        stagger: 1,
        y: -500,
        opacity: 0,
        delay: 1,
      });
  }
  // ****************campaign****************
  if (window.innerWidth >= 1280) {
    const campaign = gsap.timeline({
      scrollTrigger: {
        trigger: ".campaign",
        pin: ".campaign",
        pinSpacing: true,
        start: "top top",
        end: "center top",
        scrub: 2,
        markers: true,
      },
    });
    campaign
      .from(".campaign .bg-deco-web", {
        duration: 0.8,
        x: -2000,
        // opacity: 0,
        ease: "power2.out",
        // delay: 1,
      })
      .from([".campaign .tit", ".campaign .content"], {
        duration: 0.8,
        x: 100,
        stagger: 0.2,
        opacity: 0,
        ease: "power2.out",
        delay: 1,
      })
      .from(".campaign .carousel-campaign", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        // delay: 1,
      })
      .to(".campaign .carousel-campaign", {
        duration: 2,
      });
  }

  // ****************swiper-campaign****************
  var swiper = new Swiper(".carousel-campaign", {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".carousel-campaign .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1280: {
        spaceBetween: 60,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      },
    },
  });

  // ****************notice****************

  const notice = gsap.timeline({
    scrollTrigger: {
      trigger: ".notice",
      // pin: ".notice",
      pinSpacing: true,
      start: "top 60%",
      end: "center 60%",
      scrub: 2,
      markers: true,
    },
  });

  if (window.innerWidth >= 1280) {
    notice.from(".notice", {
      duration: 0.8,
      background: "#222222",
      opacity: 1,
      ease: "power2.out",
    });
  }

  notice.from([".notice .tit-notice", ".notice .list-notice", ".btn-more"], {
    duration: 1,
    y: 100,
    stagger: 0.2,
    opacity: 0,
    ease: "power2.out",
    // delay: 1,
  });

  // ****************subscribe****************
  const subscribe = gsap.timeline({
    scrollTrigger: {
      trigger: ".subscribe",
      // pin: ".subscribe",
      pinSpacing: true,
      start: "top 40%",
      end: "center center",
      scrub: 2,
      markers: true,
    },
  });
  subscribe.from(
    [
      ".subscribe .tit",
      ".subscribe .content",
      ".subscribe .content-web",
      ".inp-wrap",
      ".btn",
    ],
    {
      duration: 2,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      // delay: 1,
    }
  );

  // ****************donation****************
  const donation = gsap.timeline({
    scrollTrigger: {
      trigger: ".donation",
      // pin: ".subscribe",
      pinSpacing: true,
      start: "top 40%",
      end: "center center",
      scrub: 2,
      markers: true,
    },
  });
  donation.from(
    [".regular-donation .tit", ".regular-donation .content", ".btn-rd"],
    {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      // delay: 1,
    }
  );
  donation.from(
    [".associated-donation .tit", ".associated-donation .content", ".btn-ad"],
    {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      // delay: 1,
    }
  );

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
      end: "+=100%",
      // end: "center 30%",
      // end: "+=200%",
      // scrub: 2,
      // markers: true,
    },
  });

  const cont1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons .cont-container-1",
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
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-1 .pic", {
      delay: 0.1,
      duration: 0.6,
      y: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-1 .cont-txt", {
      duration: 1,
      x: -100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-1 .bg-deco", {
      duration: 1,
      x: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    });

  const cont2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons .cont-container-2",
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
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-2 .cont-txt", {
      duration: 1,
      x: 100,
      // stagger: 1,
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
      trigger: ".about-reasons .cont-container-3",
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
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".cont-container-3 .cont-txt", {
      duration: 1,
      x: -100,
      // stagger: 1,
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
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".donation-usage .tit-web", {
      duration: 0.6,
      y: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".donation-usage .tit", {
      duration: 0.6,
      y: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".donation-usage .swiper-donation-usage", {
      duration: 0.6,
      y: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(["#txtWrap", ".glide-donation-usage-web"], {
      delay: 0.1,
      duration: 0.6,
      y: 100,
      // stagger: 0.1,
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
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .from(".q-and-a .glide-q-and-a", {
      delay: 0.1,
      duration: 0.6,
      x: 200,
      // stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
    });

  //****************glide-q-and-a****************
  const glide = new Glide(".glide-q-and-a", {
    type: "slider",
    autoplay: false,
    perView: 4,
    breakpoints: {
      // rewind: true,
      // paddings: "30px",
      780: { perView: 1 },
      1280: { perView: 4 },
    },
    beforeTransition: beforeCardChange,
  }).mount();

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", function () {
    // 스크롤 위치 확인
    const scrollPosition = document.documentElement.scrollTop;

    // Glide.js 슬라이더의 인스턴스가 올바르게 할당되었는지 확인
    if (glide) {
      // 스크롤 위치에 따라 슬라이드 변경
      if (scrollPosition > 5000) {
        glide.go(">>");
      } else {
        glide.go("<<");
      }
    } else {
      console.error("Glide.js 슬라이더의 인스턴스를 찾을 수 없습니다.");
    }
  });

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
  .from(".financial-report .container-financial-report", {
    duration: 0.6,
    y: 100,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".financial-report .btn-more", {
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
    trigger: ".mission-vision",
    // pin: ".bg-from-left",
    start: "20% center",
    end: "center 30%",
    scrub: 2,
    // markers: true,
  },
});

missionvision
  .from(".mission-vision .bg-deco", {
    duration: 1,
    x: 100,
    // stagger: 1,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".mission-vision .mv-content", {
    duration: 1,
    y: 100,
    // stagger: 0.6,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".mission-vision .from-left", {
    duration: 1,
    x: 100,
    // stagger: 0.3,
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
    var titles = elem.querySelectorAll("#corevalue #text");
    var contentTl = gsap.timeline();

    gsap.set("#corevalue .content", {
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
      start: "top 25%", // 트리거가 시작되는 위치
      end: "+=200%", // 트리거가 끝나는 위치
      pin: elem,
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
      start: "40% center",
      end: "+=300%",
      // end: "bottom top",
      pin: true,
      scrub: 1,
      // stagger: 5,
      delay: 2,
      // snap: 1 / (conts.length - 1),
      // markers: true,
    },
  });

  // conts에 timeline 할당
  // 글씨 애니메이션
  const contsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .wrapper",
      start: "top center",
      end: "bottom top",
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
      // stagger: 0.3,
    })
    .from([".cont-1-wrap .bg-deco-1-cls-2", ".bg-deco-1-cls-3"], {
      duration: 0.8,
      scale: 0,
      // stagger: 0.2,
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
      end: "center center",
      scrub: 2,
      // markers: true,
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
        // stagger: 0.1,
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
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  proCont3
    .from([".cont-3-wrap .cont-3-tit", ".cont-3-wrap .cont-3-desc"], {
      duration: 0.5,
      y: 100,
      // stagger: 0.1,
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
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  proCont4
    .from([".cont-4-wrap .cont-4-tit", ".cont-4-wrap .cont-4-desc"], {
      duration: 0.5,
      y: 100,
      // stagger: 0.1,
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
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  proCont5
    .from([".cont-5-wrap .cont-5-tit", ".cont-5-wrap .cont-5-desc"], {
      duration: 0.5,
      y: 100,
      // stagger: 0.1,
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
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  proCont6
    .from([".cont-6-wrap .cont-6-tit", ".cont-6-wrap .cont-6-desc"], {
      duration: 0.5,
      y: 100,
      // stagger: 0.1,
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
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  proCont7
    .from([".cont-7-wrap .cont-7-tit", ".cont-7-wrap .cont-7-desc"], {
      duration: 1,
      y: 100,
      // stagger: 0.1,
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
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  proCont8
    .from([".cont-8-wrap .cont-8-tit", ".cont-8-wrap .cont-8-desc"], {
      duration: 2,
      y: 100,
      // stagger: 0.1,
      opacity: 0,
      ease: "power2.out",
      delay: 35,
    })
    .to([".cont-8-wrap .cont-8-tit", ".cont-8-wrap .cont-8-desc"], {
      duration: 3,
    });

  // conts.seek(Math.floor(scrollTrigger.progress * 100));
}
