/*
 * @Author: Jecyu 
 * @Date: 2018-01-26 17:54:43 
 * @Last Modified by: Jecyu
 * @Last Modified time: 2018-01-30 14:13:45
 */

// 找到按钮和弹框
var download_btn = $(".download-btn a");
var download_modal = $("#myModal");
var modal_title = download_modal.find("#myModalLabel");

download_btn.on("click", function changeText() {
  // 获取按钮里的文本
  var download_text = $(this).html();
  modal_title.html(download_text);
});
