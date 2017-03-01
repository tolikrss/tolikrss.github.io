function footerDown() {
    var contentHeight = $('footer').offset().top;
    var footerHeight = $('footer').height();
    var windowHeight = $(window).height();
    var footerMarginTop = windowHeight - contentHeight - footerHeight;
    if (footerMarginTop >= 0) {
        $('footer').css('margin-top', footerMarginTop-20);
    }
};


$(document).ready(function() {

    var $menu = $("#menu");
    var start_pos = $('#menu').offset().top;
    var navHeight = $('#menu').height();
    $('nav').css('height', navHeight);
    footerDown();
    $(window).scroll(function() {
          if ($(this).scrollTop() > start_pos && $menu.hasClass("default")) {
              $menu.removeClass("default").addClass("fixed");
          } else if ($(this).scrollTop() <= start_pos && $menu.hasClass("fixed")) {
              $menu.removeClass("fixed").addClass("default");
          }
    }); //scroll

    var windowWidth = $(window).width();
    $(".toggleMenu").click(function(e) {
        e.preventDefault();
        $(".nav").toggle();
    });
    if (windowWidth < 768) {
      $(".toggleMenu").css("display", "block");
      $(".nav").css("display", "none");
    }
});

$(window).resize(function() {
  var $menu = $("#menu");
  var start_pos = $('#menu').offset().top;
  var navHeight = $('#menu').height();
  $('nav').css('height', navHeight);

  $(window).scroll(function() {
      if ($(this).scrollTop() > start_pos && $menu.hasClass("default")) {
          $menu.removeClass("default").addClass("fixed");
      } else if ($(this).scrollTop() <= start_pos && $menu.hasClass("fixed")) {
          $menu.removeClass("fixed").addClass("default");
      }
  }); //scroll

  var windowWidth = $(window).width();
  console.log(windowWidth);
  $(".toggleMenu").click(function(e) {
      e.preventDefault();
      $(".nav").toggle();
  });
  if (windowWidth < 768) {
      $(".toggleMenu").css("display", "inline-block");
      $(".nav").hide();
  } else {
  };
});
