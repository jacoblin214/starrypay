/**
 * @Author: jecyu
 * @Date: 2018-01-16 3:56:59 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-18 8:50:41 pm 
 */

var $tabs_nav = $(".tabs-nav");
var $tabs_item_link = $tabs_nav.find(".nav-item a");
// console.log($tabs_item_link);

// 路由
window.Router = new Router();
window.Router.init();

var content = document.querySelector("body");

/**
 * 更换 tab 内容
 * @param {*} tabNav
 * @param {*} tabConent
 */
function changeTab(tabNav, tabConentID) {
    // 遍历 a 链接，添加 active
    $tabs_item_link.each(function(index) {
        if ($(this).attr("data-targetTab") === tabNav) {
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

// 操作tab
var tab_1 = "operation_platform";
var tab_2 = "cooperation_channels";

// 找到
Router.route("/" + tab_1, function() {
    changeTab(tab_1, tab_1);
});

Router.route("/" + tab_2, function() {
    changeTab(tab_2, tab_2);
});

$tabs_item_link.on("click", function() {
    let attr = $(this).attr("data-targetTab");
    /*     if (typeof attr !== typeof undefined && attr !== false) {
        // 显示对应的 tab-content
        $("#" + attr)
            .show()
            .siblings()
            .hide();

        // 添加 active 类
        $(this)
            .parent()
            .addClass("active")
            .siblings()
            .removeClass("active");
    } */

    changeTab(attr, attr);
    return false; // 禁止链接的默认行为
});
