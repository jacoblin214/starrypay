/**
 * @Author: jecyu
 * @Date: 2017-12-19 4:36:23 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-18 8:50:21 pm 
 */

// 获取 Nav 的hash。
var page = {
    init: function() {
        this.onload();
    },
    onload: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        // back to top
        $("#toTop").on("click", function() {
            $("body, html").animate(
                {
                    scrollTop: 0
                },
                1000
            );
        });

        // fix the problem: Dropdown menus close when clicking inside of container

        $(document).on("click", ".dropdown .dropdown-menu", function(e) {
            e.stopPropagation();
        });
    }
};

$(document).ready(function() {
    page.init();
    /*     let dropdown_menu = $(".dropdown .dropdown-menu");
    let dropdown_menu_link = dropdown_menu.find("a");
    console.log(dropdown_menu_link);

    dropdown_menu_link.on("click", function() {
        // 获取目标链接
        let href = $(this).attr("data-href");
        // 获取目标 tab
        let attr = $(this).attr("data-targetTab");

        console.log("click");
        console.log(attr);
        if (typeof attr !== typeof undefined && attr !== false) {
            // 显示对应的 tab-content
            $("#" + attr)
                .show()
                .siblings()
                .hide();
            // 找到 tabs-nav
            let $tabs_nav = $(".tabs-nav");
            let $tabs_item_link = $tabs_nav.find(".nav-item a");
            // 匹配含有相同 data-contentTab的链接值
            $tabs_item_link.each(function(index) {
                if ($(this).attr("data-targetTab") === attr) {
                    // 添加 active 类
                    $(this)
                        .parent()
                        .addClass("active")
                        .siblings()
                        .removeClass("active");
                }
            });

            // 检测是否在已经在“合作与生态页”，是的话禁止当前链接的默认行为
            if (location.hash !== undefined && location.hash !== "") {
                if (location.hash === "product-center") {
                    return false;
                }
            }
        }
    }); */
});
