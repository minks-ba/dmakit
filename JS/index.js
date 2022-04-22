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






 