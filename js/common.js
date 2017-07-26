$(function(){
  $(".pageTop a").click(function(){
    $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 500,'swing');
    return false;
  })
  var topBtn = $('.pageTop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  $("a").hover(function(){
    $(this).find('img').stop().fadeTo("normal", 0.8);
  },function(){
    $(this).find('img').stop().fadeTo("normal", 1.0);
  });
});
