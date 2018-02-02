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
    var _this = this;
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

    // 给页面的 tab-nav 绑定 scroll 时间
    var $tabs_nav = $(".tabs-nav");
    // 检测是否存在
    if ($tabs_nav.length === 0) return false;
    // 复制一个新的 nav，用来 stickUp
    var $tabs_nav_clone = $tabs_nav
      .addClass("original") // 添加原始类
      .clone(true, true) // 复制一个副本及它的事件函数
      .addClass("cloned")
      .insertBefore($tabs_nav)
      .css("position", "fixed")
      .css("top", "0")
      .css("z-index", 500)
      .removeClass("original")
      .hide(); // 隐藏复制的tab-nav
    // 监听页面滚动，设置 stickUp
    var scrollIntervalId = setInterval(_this.setFixed(), 10);

    // $tabs_nav_clone 的处理
    $tabs_item_clone_link = $tabs_nav_clone.find("a");
    $tabs_item_clone_link.on("click", function() {
      $(this)
        .parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  },
  // 设置粘贴到顶部
  setFixed: function() {
    var _this = this;
    var $orgNav = $(".original");

    // 元素上侧偏移 Document 顶部的距离
    _this.offsetH = $orgNav.offset().top;
    _this.offsetL = $orgNav.offset().left;
    _this.$orgNavW = $orgNav.width();

    // 监听页面滚动
    $(window).on("scroll", function() {
      var scrollT = $(this).scrollTop();
      if (scrollT >= _this.offsetH) {
        // 滚动条滑过导航栏，只显示 clone 后的导航栏
        $(".cloned")
          .css("left", _this.offsetL + "px")
          .css("top", "40px")
          .css("width", "300px")
          .show();

        // 处理它的导航按钮
        $(".cloned")
          .find("li")
          .removeClass("active");

        $orgNav.css("visibility", "hidden");
        // 绑定监听
      } else {
        // 滚动条没有滑过导航栏，只显示原始的导航栏
        $(".cloned").hide();
        $orgNav.css("visibility", "visible");
      }
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
