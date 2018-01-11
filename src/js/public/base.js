/**
 * @Author: jecyu
 * @Date: 2017-12-19 4:36:23 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-10 10:49:15 am
 */

// back to top
$("#toTop").on("click", function() {
    $("body, html").animate({ scrollTop: 0 }, 1000);
});

// fix the problem: Dropdown menus close when clicking inside of container

$(document).on("click", ".dropdown .dropdown-menu", function(e) {
    e.stopPropagation();
});
