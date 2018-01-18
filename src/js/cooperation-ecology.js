/**
 * @Author: jecyu
 * @Date: 2018-01-16 3:56:59 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-16 9:03:00 pm 
 */

var page = {
    init: function() {
        this.onload();
    },
    onload: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        // 1.找到所有的 tabs-nav下的 nav-item 的链接，监听document的单击事件，点击
        // 2.获取当前导航链接含有当前data-target属性值，激活active并取消相邻兄弟的类。
        // 3.查找对应的tab-content元素，实现显示效果

        var $tabs_nav = $(".tabs-nav");
        var $tabs_item_link = $tabs_nav.find(".nav-item a");
        // console.log($tabs_item_link);

        $tabs_item_link.on("click", function() {
            let attr = $(this).attr("data-targetTab");
            if (typeof attr !== typeof undefined && attr !== false) {
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
            }
            return false; // 禁止链接的默认行为
        });
    }
};

$(document).ready(function() {
    page.init();
});
