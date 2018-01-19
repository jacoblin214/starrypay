/**
 * @Author: jecyu
 * @Date: 2018-01-18 9:24:40 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-19 10:56:07 am
 */

/**
 * 更换 tab 内容
 * @param {*} tabNav
 * @param {*} tabConent
 * @param {string} bannerUrl 图片地址
 */
function changeTab(tabNav, tabConentID, bannerUrl) {
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

    // 显示对应的 banner
    // 找到 banner
    var $banner = $(".section-banner .banner");
    var $banner_img = $banner.find("img");
    // 图片地址
    $banner_img.attr("src", bannerUrl);
}

// 路由
window.Router = new Router();
window.Router.init();

// 找到 tabs link
var $tabs_nav = $(".tabs-nav");
var $tabs_item_link = $tabs_nav.find(".nav-item a");

// 操作tab
var tab_1 = "starrypay";
var tab_2 = "certification";
var tab_3 = "core_card";

var tab_1_bannerUrl = "../images/product/product_banner-1.png";
var tab_2_bannerUrl = "../images/product/product_banner-2.png";
var tab_3_bannerUrl = "../images/product/product_banner-1.png";
// 回调函数处理
// for (let i = 1; i <= 7; i++) {
//     // tab 变了
//     let tab = "tab_" + i;
//     // console.log(typeof tab);
//     Router.route("/" + tab, function() {
//         changeTab($tabs_item_link, tab);
//     });
// }

Router.route("/" + tab_1, function() {
    changeTab($tabs_item_link, tab_1, tab_1_bannerUrl);
});

Router.route("/" + tab_2, function() {
    changeTab($tabs_item_link, tab_2, tab_2_bannerUrl);
});

Router.route("/" + tab_3, function() {
    changeTab($tabs_item_link, tab_3, tab_3_bannerUrl);
});

$tabs_item_link.on("click", function() {
    // 获取目标 tab
    let attr = $(this).attr("data-targetTab");
    // 获取 bannerUrl
    let banner_url = $(this).attr("data-bannerUrl");
    changeTab($tabs_item_link, attr, banner_url);
    return false; // 禁止链接的默认行为
});
