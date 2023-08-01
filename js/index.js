const swiper = new Swiper(".swiper", {
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
    el: ".swiper-scrollbar",
  },
});

const refs = {
  slideNumber: document.querySelector(".slide-number"),
};

swiper.on("slideChange", function () {
  if (swiper.activeIndex + 1 >= 10) {
    refs.slideNumber.textContent = swiper.activeIndex + 1;
    return;
  }
  refs.slideNumber.textContent = `0${swiper.activeIndex + 1}`;
});
