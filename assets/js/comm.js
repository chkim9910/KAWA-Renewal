$(function () {
  $("a").click(function (e) {
    e.preventDefault();
  });
  // -----------------------header-----------------------
  const $header = $("#header");
  const $topBtn = $("#footer #top_btn");
  const $window = $(window);
  window.onload = function () {
    window.scrollTo(0, 0);
    // $headerDepth2.slideUp();
  };
  $window.on(
    "scroll",
    _.throttle(() => {
      const windowScrolled = $window.scrollTop();
      console.log(windowScrolled);
      if ($window.innerWidth() < 1280) {
        if (windowScrolled > 60) {
          gsap.to($header, 0.3, {
            y: -60,
            opacity: 0,
          });
          gsap.to($topBtn, 0.3, {
            right: "20px",
            // opacity: 0,
          });
        } else {
          gsap.to($header, 0.2, {
            y: 0,
            opacity: 1,
          });
          gsap.to($topBtn, 0.3, {
            right: "-100px",
            // opacity: 0,
          });
        }
      } else {
        if (windowScrolled >= 60) {
          gsap.to($header, 0.3, {
            y: -60,
            opacity: 0,
          });
          gsap.to($topBtn, 0.3, {
            right: "20px",
            // opacity: 0,
          });
        } else {
          gsap.to($header, 0.3, {
            y: 0,
            opacity: 1,
          });
          gsap.to($topBtn, 0.3, {
            right: "-100px",
            // opacity: 0,
          });
        }
      }
    })
  );
  // -----------------------header-gnb-mob-----------------------
  const $gnbMenuMob = $(".btn-menu");
  const $gnbMob = $("#gnb");
  const $gnbDep1Mob = $(".wrapper-dep1");
  // const $gnbDep1Mob = $(".wrapper-dep1").toArray();
  // const $gnbDep2Mob = $(".wrapper-dep1 .depth2");
  $gnbMenuMob.on("click", () => {
    if ($gnbMenuMob.hasClass("click")) {
      $gnbMenuMob.removeClass("click");
      $gnbMob.css({
        left: "100%",
        transition: "all .3s",
      });
    } else {
      $gnbMenuMob.addClass("click");
      $gnbMob.css({
        left: "0",
        transition: "all .3s",
      });
    }
  });

  $gnbDep1Mob.on("click", function () {
    const $depth2 = $(this).children(".depth2");

    if ($depth2.hasClass("active")) {
      $depth2.stop().slideUp(400);
      $depth2.removeClass("active");
      $(this)
        .find(".txt-dep1")
        .css({ color: "#222222", transition: "color 0.4s" });
    } else {
      $(".depth2").removeClass("active"); // 모든 .depth2 요소에서 active 클래스를 제거합니다.
      $(this).find(".txt-dep1").css({ color: "#f76a00", "font-weight": "700" });
      $depth2.stop().slideDown(300);
      $depth2.addClass("active"); // 클릭한 요소의 하위 .depth2에 active 클래스를 추가합니다.
    }
  });

  const $langMob = $(".lang");
  const $selectLangMOb = $(".select-lang");
  $langMob.on("click", () => {
    $selectLangMOb.toggleClass("active");
    // 클래스가 추가되었는지 여부에 따라 color 속성 변경
    if ($selectLangMOb.hasClass("active")) {
      $(this).css("color", "#f76a00");
    } else {
      $(this).css("color", ""); // 클래스가 제거되면 기본 색상으로 변경 (빈 문자열)
    }
  });

  // -----------------------header-gnb-web-----------------------
  const $headerDepth1 = $("#header .depth1-web");
  const $headerDepth2 = $("#header .depth2-web-wrap");
  $headerDepth1.on("mouseenter", () => {
    $header.css({
      transition: "all 0.3s ease-in-out", // transition 속성 추가
    });
    $headerDepth2.css({
      visibility: "visible",
      opacity: 1,
      transition: "all, 0.3s",
    });
    // $headerDepth2.slideDown(300);
    $(".li-dep1-web .txt-dep1-web").css({
      color: "#222",
      transition: "all 0.3s",
    });
    $("#header .material-symbols-outlined").css({
      color: "#222",
      transition: "all 0.3s",
    });
    $("#header .logo-link").addClass("active");
  });
  $headerDepth2.on("mouseleave", () => {
    $header.css({
      transition: "all 0.3s ease-in-out", // transition 속성 추가
    });
    // $headerDepth2.slideUp(300);
    $headerDepth2.css({
      visibility: "hidden",
      opacity: 0,
      transition: "all, 0.3s",
    });
    $(".li-dep1-web .txt-dep1-web").css({
      color: "#fff",
      transition: "all 0.5s",
    });
    $("#header .material-symbols-outlined").css({
      color: "#fff",
      transition: "all 0.5s",
    });
    $("#header .logo-link").removeClass("active");
  });
  const $langWeb = $(".btn-lang-web");
  const $selectLangWeb = $(".select-lang-web");
  $langWeb.on("click", () => {
    $selectLangWeb.toggleClass("active");
  });
  // -----------------------main-page-----------------------
  // ****************main-visual****************
  // ****************swiper-main-visual****************
  var leftNumber = document.querySelector(".fst-num .fst-01"); // 첫 번째 슬라이드 번호로 초기 설정
  var swiper = new Swiper(".main-visual", {
    slidesPerView: 1, // 보여질 슬라이드 수
    centeredSlides: true, // 가운데 정렬된 슬라이드
    autoplay: {
      delay: 300000, // 자동 재생 딜레이(ms)
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
    observer: true,
    observeParents: true,
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
        // console.log(activeIndex); // 슬라이드 변경 시 인덱스 확인

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

      // function () {
      //   if ($(".dog").hasClass("swiper-slide-active")) {
      //     $(".btn-wrap").css("top", "103%");
      //   } else {
      //     $(".btn-wrap").css("top", "112%");
      //   }
      // },
    },
  });

  // if ($(".dog").hasClass("swiper-slide-active")) {
  //   $(".btn-wrap").css("top", "103%");
  // } else {
  //   $(".btn-wrap").css("top", "112%");
  // }

  // ****************main-activities****************
  const mainActivities = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-activities",
      // pin: ".main-activities",
      start: "top 80%",
      end: "top center",
      scrub: 2,
      //markers: true,
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
      1024: {
        spaceBetween: 0,
        slidesPerView: 6,
      },
      768: {
        spaceBetween: 0,
        slidesPerView: 6,
      },
      480: {
        spaceBetween: 0,
        slidesPerView: 4,
      },
    },
  });

  var swiper2 = new Swiper(".swiper-main-activities", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
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
      1024: {
        spaceBetween: 12,
        slidesPerView: 1,
      },
    },
  });

  // ****************oncenter****************
  const onCenter = gsap.timeline({
    scrollTrigger: {
      trigger: ".oncenter",
      // pin: ".oncenter",
      pinSpacing: true,
      start: "top 80%",
      end: "top center",
      scrub: 2,
      // markers: true,
    },
  });
  onCenter
    .from([".oncenter .tit", ".oncenter .content"], {
      duration: 0.6,
      x: -100,
      stagger: 0.2,
      opacity: 0,
      ease: "power2.out",
      // delay: 1,
    })
    .from(".oncenter .img-list-web", {
      duration: 0.6,
      x: 100,
      // stagger: 1,
      opacity: 0,
      ease: "power2.out",
      // delay: 0.5,
    })
    .to(".oncenter .img-list-web", {
      duration: 0.6,
    })
    .from(".oncenter .img-list", {
      duration: 0.6,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });

  // ****************swiper-oncenter****************
  var swiper = new Swiper(".img-list-web", {
    loop: false,
    spaceBetween: 12,
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
        // pinSpacing: true,
        start: "5% top",
        end: "bottom top",
        scrub: 2,
        // markers: true,
      },
    });
    oncenterInfo
      .from(".oncenter-info", {
        duration: 1,
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
        // pin: ".campaign",
        // pinSpacing: true,
        start: "top 70%",
        end: "center 45%",
        scrub: 2,
        // markers: true,
      },
    });
    campaign
      .from(".campaign .bg-deco-web", {
        duration: 1,
        x: -1200,
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
    slidesPerView: 1,
    // slidesPerView: "auto",
    spaceBetween: 12,
    initialSlide: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
      invert: true,
      sensitivity: 0.5,
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
    breakpoints: {
      480: { slidesPerView: "auto", spaceBetween: 15 },
      1024: { slidesPerView: "auto", spaceBetween: 15 },
      1280: {
        // effect: "coverflow",
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
      start: "-5% 60%",
      end: "center 60%",
      scrub: 2,
      // markers: true,
    },
  });

  if (window.innerWidth >= 1280) {
    notice.from(".notice", {
      duration: 1,
      // background: "#222222",
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
      start: "top 70%",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  subscribe.from(
    [
      ".subscribe .tit",
      ".subscribe .content",
      ".subscribe .content-web",
      ".subscribe .inp-wrap",
      ".subscribe .btn",
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
      start: "top 70%",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  donation.from(
    [".regular-donation"],
    // [".regular-donation .tit", ".regular-donation .content", ".btn-rd"],
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
    [".associated-donation"],
    // [".associated-donation .tit", ".associated-donation .content", ".btn-ad"],
    {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3,
    }
  );

  // -----------------------common-sub1-and-sub2-----------------------
  // sidebar
  // list에서 active 지우기
  $(function () {
    if (window.innerWidth >= 1280) {
      $(".sidebar-web .list-sidebar").removeClass("active");
      $(".info-active").addClass("active");
      $(".mission-vision-active").addClass("active");

      $(".sidebar-web .list-sidebar").click(function () {
        // list에서 active 지우기
        $(".list-sidebar").removeClass("active");
        // this에 active 부여하기
        $(this).addClass("active");
      });
    }
  });

  // -----------------------sub-2-page-----------------------
  // ****************about-reasons****************
  gsap.registerPlugin(ScrollTrigger);
  const aboutReasons = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons",
      start: "center center",
      end: "+=100%",
    },
  });

  const cont1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons .cont-container-1",
      start: "-10% center",
      end: "top 10%",
      scrub: 2,
      // markers: true,
    },
  });
  if (window.innerWidth < 1280) {
    cont1
      .from(".about-reasons .tit", {
        duration: 0.6,
        y: 100,
        // stagger: 1,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".cont-container-1 .cont-txt", {
        duration: 1,
        y: 100,
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
      });
  } else {
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
  }

  const cont2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons .cont-container-2",
      start: "-10% center",
      end: "top 40%",
      scrub: 2,
      // markers: true,
    },
  });
  if (window.innerWidth < 1280) {
    cont2
      .from(".cont-container-2 .cont-txt", {
        duration: 1,
        y: 100,
        // stagger: 1,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".cont-container-2 .pic", {
        duration: 0.6,
        y: 100,
        // stagger: 1,
        opacity: 0,
        ease: "power2.out",
      });
  } else {
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
        duration: 0.5,
        x: 50,
        scale: 2,
        rotation: 240,
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
  }

  const cont3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-reasons .cont-container-3",
      start: "-10% center",
      end: "top 40%",
      scrub: 2,
      // markers: true,
    },
  });
  if (window.innerWidth < 1280) {
    cont3
      .from(".cont-container-3 .cont-txt", {
        duration: 1,
        y: 100,
        // stagger: 1,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".cont-container-3 .pic", {
        duration: 0.6,
        y: 100,
        // stagger: 1,
        opacity: 0,
        ease: "power2.out",
      });
  } else {
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
  }
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
  if (window.innerWidth < 1280) {
    const fqaMob = gsap.timeline({
      scrollTrigger: {
        trigger: ".q-and-a",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
        // markers: true,
      },
    });
    fqaMob
      .from(".q-and-a .tit", {
        duration: 0.5,
        y: 100,
        // stagger: 0.1,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".q-and-a .glide-q-and-a", {
        duration: 0.5,
        y: 100,
        // stagger: 0.1,
        opacity: 0,
        ease: "power2.out",
      });
  } else {
    const fqa = gsap.timeline({
      scrollTrigger: {
        trigger: ".q-and-a",
        // pin: ".q-and-a",
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
        duration: 0.4,
        y: 100,
        // stagger: 1,
        opacity: 0,
        ease: "power2.out",
      })
      .from(".q-and-a .glide-q-and-a", {
        duration: 0.3,
        x: 1500,
        // stagger: 0.1,
        opacity: 0,
        ease: "power2.out",
      })
      .to(".q-and-a .glide-q-and-a", {
        // duration: 1.5,
      });
  }

  //****************glide-q-and-a****************
  const glide = new Glide(".glide-q-and-a", {
    type: "slider",
    autoplay: false,
    perView: 4,
    breakpoints: {
      // rewind: true,
      // paddings: "30px",
      780: { perView: 3 },
      1024: { perView: 4 },
    },
    beforeTransition: beforeCardChange,
  }).mount();

  // 스크롤 이벤트 리스너 등록
  // window.addEventListener("scroll", function () {
  //   // 스크롤 위치 확인
  //   const scrollPosition = document.documentElement.scrollTop;
  //   console.log(scrollPosition);
  //   // Glide.js 슬라이더의 인스턴스가 올바르게 할당되었는지 확인
  //   if (glide) {
  //     // 스크롤 위치에 따라 슬라이드 변경
  //     if (scrollPosition > 3800) {
  //       glide.go(">>");
  //     } else {
  //       glide.go("<<");
  //     }
  //   } else {
  //     console.error("Glide.js 슬라이더의 인스턴스를 찾을 수 없습니다.");
  //   }
  // });

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

  // ****************q-and-a-web의 card flip****************
  $(".list-card").mouseenter(function () {
    $(this).find(".card").addClass("flipped");
  });

  $(".list-card").mouseleave(function () {
    $(this).find(".card").removeClass("flipped");
  });
});

// ****************financial-report****************
const financialReportMob = gsap.timeline({
  scrollTrigger: {
    trigger: ".financial-report",
    start: "top center",
    end: "center center",
    scrub: 2,
    // markers: true,
  },
});
financialReportMob
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
if (window.innerWidth >= 1280) {
  const financialReport = gsap.timeline({
    scrollTrigger: {
      trigger: ".financial-report",
      start: "bottom top",
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
}
// -----------------------sub-1-page-----------------------
// ****************mission-vision****************
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

// ****************core-value****************
gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth < 1280) {
  const coreValueMob = gsap.timeline({
    scrollTrigger: {
      trigger: "#corevalue",
      start: "top center",
      end: "center center",
      scrub: 2,
      // markers: true,
    },
  });
  coreValueMob
    .from("#corevalue", {
      duration: 0.6,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    })
    .from("#corevalue .content", {
      duration: 0.6,
      y: 100,
      stagger: 0.2,
      opacity: 0,
      ease: "power2.out",
    });
} else {
  // content 배열
  var contents = gsap.utils.toArray("#corevalue .content");
  const sectionTl = gsap.timeline({
    // onComplete: function () {
    //   gsap.to("#corevalue", {
    //     y: -200,
    //     // opacity: 0,
    //     duration: 0.5,
    //   }); // 모든 애니메이션이 완료된 후 #corevalue의 opacity를 0으로 설정
    // },
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

// ****************project-initiative****************
// cont 배열
const conts = gsap.utils.toArray("#projectInitiative .cont");

if (window.innerWidth < 1280) {
  conts.forEach((cont) => {
    gsap.from(cont, {
      duration: 0.6,
      y: 100,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cont,
        start: "-10% center",
        end: "center 40%",
        scrub: 1,
        // markers: true,
      },
    });
  });
} else {
  // horizontal 애니메이션
  gsap.to(conts, {
    xPercent: -100 * (conts.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#projectInitiative .wrapper",
      start: "top top",
      end: "+=300%",
      pin: true,
      ease: "power2.inOut",
      scrub: 1,
      delay: 2,
      // end: "bottom top",
      // stagger: 5,
      // snap: 1 / (conts.length - 1),
      // markers: true,
    },
  });

  // // cont에 timeline 할당
  conts.forEach((cont) => {
    const contTit = cont.querySelector(".cont-tit");
    const contDesc = cont.querySelector(".cont-desc");
    const contDeco = cont.querySelector(".bg-deco");

    const contTl = gsap.timeline({
      scrollTrigger: {
        trigger: cont,
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: true,
      },
    });

    contTl
      .from(contTit, {
        duration: 0.3,
        y: 100,
        stagger: 1,
        opacity: 0,
      })
      .from(contDesc, {
        duration: 0.3,
        y: 100,
        stagger: 1,
        opacity: 0,
      })
      .from(contDeco, {
        duration: 0.3,
        y: 100,
        stagger: 1,
        opacity: 0,
      });
  });
}
