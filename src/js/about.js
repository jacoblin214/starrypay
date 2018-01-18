/**
 * @Author: jecyu
 * @Date: 2018-01-16 3:56:59 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-18 9:35:05 pm
 */

/**
 * 更换 tab 内容
 * @param {*} tabNav
 * @param {*} tabConent
 */
function changeTab(tabNav, tabConentID) {
    // 遍历 a 链接，添加 active
    tabNav.each(function(index) {
        if ($(this).attr("data-targetTab") === tabConentID) {
            $(this)
                .parent()
                .addClass("active")
                .siblings()
                .removeClass("active");
        }
    });

    // 显示对应的 tab-content
    $("#" + tabConentID)
        .show()
        .siblings()
        .hide();
}

// 路由
window.Router = new Router();
window.Router.init();

// 找到 tabs link
var $tabs_nav = $(".tabs-nav");
var $tabs_item_link = $tabs_nav.find(".nav-item a");

// 操作tab
var tab_1 = "about_us";
var tab_2 = "contact_us";
var tab_3 = "internal_dynamic";
var tab_4 = "new_dynamic";

Router.route("/" + tab_1, function() {
    changeTab($tabs_item_link, tab_1);
});

Router.route("/" + tab_2, function() {
    changeTab($tabs_item_link, tab_2);
});

Router.route("/" + tab_3, function() {
    changeTab($tabs_item_link, tab_3);
});

Router.route("/" + tab_4, function() {
    changeTab($tabs_item_link, tab_4);
});

$tabs_item_link.on("click", function() {
    let attr = $(this).attr("data-targetTab");
    changeTab($tabs_item_link, attr);
    return false; // 禁止链接的默认行为
});
