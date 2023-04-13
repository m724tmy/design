$(function () {

  var navHeight = $(".header").outerHeight();

  $('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, 500);
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

