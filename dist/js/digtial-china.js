/**
 * @Author: jecyu
 * @Date: 2018-01-12 5:10:53 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-12 5:32:51 pm
 */

/**
 * 斑马线效果
 */
function stripefieldlist() {
    if (!document.getElementsByClassName) return false;
    // 取得文档中所有的 field-list 元素
    var fieldlist = document.getElementsByClassName("field-list");
    var odd;
    var li;
    for (var i = 0; i < fieldlist.length; i++) {
        odd = false;
        lis = fieldlist[i].getElementsByTagName("li");
        for (var j = 0; j < lis.length; j++) {
            if (odd == true) {
                // 使用 addClass 函数实现
                lis[j].className += " ";
                lis[j].className += "special";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

var page = {
    onload: function() {
        this.init();
    },
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        stripefieldlist();
    }
};

$(document).ready(function() {
    page.onload();
});
