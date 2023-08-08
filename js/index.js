const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "vertical",
  slidesPerView: 1,
  parallax: true,
  thresholdDelta: 1,

  mousewheel: {
    sensitivity: 1,
    releaseOnEdges: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar1",
  },
});

const refs = {
  slideNumber: document.querySelector(".slide-number"),
};

swiper1.on("slideChange", function () {
  if (swiper1.activeIndex + 1 >= 10) {
    refs.slideNumber.textContent = swiper1.activeIndex + 1;
    return;
  }
  refs.slideNumber.textContent = `0${swiper1.activeIndex + 1}`;
});
// -----------------------------------------

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
