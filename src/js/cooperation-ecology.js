/**
 * @Author: jecyu
 * @Date: 2018-01-16 3:56:59 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-18 9:19:45 pm
 */
/**
 * 更换 tab 内容
 * @param {*} tabNav
 * @param {*} tabConent
 */
function changeTab(tabNav, tabConentID) {
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
}

// 初始化路由
window.Router = new Router();
window.Router.init();

// 找到 tabs link
var $tabs_nav = $(".tabs-nav");
var $tabs_item_link = $tabs_nav.find(".nav-item a");

// 操作tab
var tab_1 = "card_cooperation";
var tab_2 = "industry_cooperation";
var tab_3 = "pay_for_access";
var tab_4 = "authentication_access";
var tab_5 = "sub_application_access";
var tab_6 = "cooperation_channels";
var tab_7 = "joint_venture";

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

Router.route("/" + tab_5, function() {
  changeTab($tabs_item_link, tab_5);
});

Router.route("/" + tab_6, function() {
  changeTab($tabs_item_link, tab_6);
});

Router.route("/" + tab_7, function() {
  changeTab($tabs_item_link, tab_7);
});

// $tabs_item_link.on("click", function() {
//   let attr = ($(this).attr("href") + "").slice(2);
//   changeTab($tabs_item_link, attr);
//   return false; // 禁止链接的默认行为
// });

// $tabs_item_link.each(function(index) {
//   // 找到所有的 a 链接传过去
//   let attr = ($(index).attr("href") + "").slice(2);
//   changeTab($tabs_item_link, attr);
//   return false; // 禁止链接的默认行为
// });
