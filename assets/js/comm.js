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
  // ****************swiper-sub2-page****************
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

  //****************glide-sub2-page****************
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
  const projectIni = document.querySelector("#projectInitiative");
  const initiativeTxts = projectIni.querySelectorAll(".text");
  // conts에 timeline 할당
  const contsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projectInitiative .wrapper",
      start: "center 60%",
      // scrub: 1,
      markers: true,
    },
  });

  contsTl.from(initiativeTxts, {
    duration: 0.5,
    y: 100,
    opacity: 0,
    // delay: 1,
  });

  gsap.to(conts, {
    xPercent: -100 * (conts.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#projectInitiative .wrapper",
      pin: true,
      start: "center 60%",
      // end: "+=300%",
      scrub: 1,
      markers: true,
    },
  });
}

// -----------------------common-sub1-and-sub2-----------------------
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
