/**
 * @Author: jecyu
 * @Date: 2017-12-22 2:35:24 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-09 4:16:05 pm 
 */

var page = {
    onload: function() {
        this.init();
    },
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        // var mySwiper = new Swiper(".swiper-container", {
        //     // direction: 'vertical',
        //     autoplay: {
        //         delay: 5000
        //     },
        //     simulateTouch: true,
        //     loop: true,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         type: "bullets"
        //     },
        //     // Navigation arrows
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev"
        //     },
        //     // scrollbar
        //     scrollbar: {
        //         el: ".swiper-scrollbar"
        //     }
        // });
    }
};

$(document).ready(function() {
    page.onload();
});
