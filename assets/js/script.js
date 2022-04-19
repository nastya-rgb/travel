"use strict";

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("header_scrolling", scrollY > 0);

})

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        500:{
            slidesPerView:2,
        },
        1000:{
            slidesPerView:3,
        },
    }
});