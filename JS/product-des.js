
const mobileView = document.querySelector(".mobile-view");
const mobileMenu = document.querySelector(".mobile-menu");

function display() {
    const visibility = mobileView.getAttribute("data-visible");

    if (visibility === "false") {
        mobileView.setAttribute("data-visible", true); 
        mobileMenu.setAttribute("aria-expanded", true);
    } else {
        mobileView.setAttribute("data-visible", false);
        mobileMenu.setAttribute("aria-expanded", false);
    }
};

var swiper = new Swiper(".mySwiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });