const mobileView = document.querySelector(".mobile-view");
const mobileMenu = document.querySelector(".mobile-menu");

let counterNum = 0;
let viewCounter = document.getElementById("view-count");

// Product Counter

function counter() {
  counterNum++;
  if (counterNum > 0) {
    viewCounter.textContent = counterNum;
  }
};

// Mobile Hamburger Munue

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

//  Product Details - Image Slider 

var swiper = new Swiper(".mySwiper", {

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


