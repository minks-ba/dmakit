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

function search() {
    let searchQuery = document.querySelector(".search-bar").value.toLowerCase();
    let productName = document.querySelectorAll(".product-item");

    for (let i = 0; i < productName.length; i++) {
        let productsList = productName[i].textContent.toLowerCase();
    
        if (productsList.includes(searchQuery)) {
            productName[i].style.display = "block";
        } else {
            productName[i].style.display = "none";
        }
    }
};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next'.style,
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      }
    }
});


 