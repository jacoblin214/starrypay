/**
 * @Author: jecyu
 * @Date: 2018-01-06 3:04:58 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-06 6:26:52 pm
 */
// 1.寻找tab-nav，动态添加tabs-active类（如果是点击下拉菜单呢）
// 2.检测当前单击目标的位置，让页面定为到tab-content的位置。
// 通过调整滚动条的位置

// 3.找到所有的tab-nav

var tabs_nav = document.getElementsByClassName("tabs-nav");
var tabs_titles = tabs_nav[0].getElementsByTagName("li");

/**
 * 定位页面到tabs的位置
 */
var newHash = "";
$;
