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
 * @param {string} bannerUrl 图片地址
 */
function changeTab(tabNav, tabConentID, bannerUrl) {
  // 遍历 a 链接，添加 active

  tabNav.each(function(index) {
    var tab_nav_attr = $(this).attr("href") + ""; // 加 '' 转为字符串
    if (tab_nav_attr.slice(2) === tabConentID) {
      $(this)
        .parent() // 它父亲 tab-item
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
var tab_1 = "about_us";
var tab_2 = "contact_us";
var tab_3 = "internal_dynamic";
var tab_4 = "new_dynamic";

var tab_1_bannerUrl = "../images/about_banner-1@3x.png";
var tab_2_bannerUrl = "../images/about_banner-2@3x.png";
var tab_3_bannerUrl = "../images/about_banner-3@3x.png";
var tab_4_bannerUrl = "../images/about_banner-4@3x.png";

Router.route("/" + tab_1, function() {
  changeTab($tabs_item_link, tab_1, tab_1_bannerUrl);
});

Router.route("/" + tab_2, function() {
  changeTab($tabs_item_link, tab_2, tab_2_bannerUrl);
});

Router.route("/" + tab_3, function() {
  changeTab($tabs_item_link, tab_3, tab_3_bannerUrl);
});
Router.route("/" + tab_4, function() {
  changeTab($tabs_item_link, tab_4, tab_4_bannerUrl);
});
