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
