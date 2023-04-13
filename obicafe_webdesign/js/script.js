$(function () {
    var $header = $("#header");
    var scrollSize = 800; //超えると表示
    $(window).on("load scroll", function () {
      var value = $(this).scrollTop();
      if (value > scrollSize) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    });
  });