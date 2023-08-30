// !--------------mobile menu------------------
(() => {
  const menuBtnOpen = document.querySelector("[data-menu-open]");
  const menuBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  const body = document.querySelector("body");
  const screenWidth = window.matchMedia("(max-width: 999px)");

  menuBtnOpen.addEventListener("click", openMenu);
  menuBtnClose.addEventListener("click", openMenu);

  function openMenu() {
    if (screenWidth.matches) {
      const expanded =
        menuBtnOpen.getAttribute("aria-expanded") === "true" || false;
      menuBtnOpen.setAttribute("aria-expanded", !expanded);

      // open|closure of the mob menu
      mobileMenuRef.classList.toggle("is-open");

      // body scroll lock

      body.classList.toggle("no-scroll");
    }
  }
})();

//! ------------------hero swiper--------------
const swiper1 = new Swiper(".swiper1", {
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
//! ------------------explore swiper-----------------------

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
// !------------------video gallery-----------------------
const player = {
  miniature: document.querySelector(".video__player-miniature"),
  playBtn: document.querySelector(".video__player-button"),
  framePlayer: document.querySelector(".video__player-frameplayer"),
  title: document.querySelector(".video__player-title"),
  text: document.querySelector(".video__player-text"),
};
const miniatures = {
  list: document.querySelector(".video__miniatures"),
  item: document.querySelector(".video__miniatures-item"),
};

player.playBtn.addEventListener("click", onPlayBtnClick);
miniatures.list.addEventListener("click", onMiniatureClick);

function enableElement(element) {
  element.classList.remove("hidden");
}
function disableElement(element) {
  element.classList.add("hidden");
}

function onPlayBtnClick() {
  enableElement(player.framePlayer);
  disableElement(player.playBtn);
  disableElement(player.miniature);
}
function onMiniatureClick(event) {
  swapDataFromMiniature(event, player);
}

function swapDataFromMiniature(event, player) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const tempData = {
    title: player.title.textContent,
    text: player.text.textContent,
    image: player.miniature.getAttribute("src"),
    link: player.framePlayer.getAttribute("src"),
  };

  const newData = {
    title: `${event.target.parentNode.parentNode.children[1].children[0].textContent}`,
    text: `${event.target.parentNode.parentNode.children[1].children[1].textContent}`,
    image: event.target.getAttribute("src"),
    link: event.target.getAttribute("data-link"),
  };

  player.miniature.setAttribute("src", newData.image);
  event.target.setAttribute("src", tempData.image);

  player.framePlayer.setAttribute("src", newData.link);
  event.target.setAttribute("data-link", tempData.link);

  player.title.textContent = newData.title;
  event.target.parentNode.parentNode.children[1].children[0].textContent =
    tempData.title;

  player.text.textContent = newData.text;
  event.target.parentNode.parentNode.children[1].children[1].textContent =
    tempData.text;
}

// !----------------------photo gallery---------------------------
var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
