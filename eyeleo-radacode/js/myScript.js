function footerDown() {
  var headerHeight = $('.content').height();
  var footerHeight = $('footer').height();
  var windowHeight = $(window).height();
  var contentMarginBottom = windowHeight - headerHeight - footerHeight;
  if (contentMarginBottom >= 0) {
    $('.content').css('margin-bottom', contentMarginBottom);
  }
};
function headerFooterHeightApply() {
  var windowWidth = window.innerWidth;
  var headerHeight = (windowWidth*570/1280);
  var footerHeight = (windowWidth*240/1280);
  $('.header-container').css('min-height', headerHeight);
  $('.footer').css('min-height', footerHeight);
};

$(document).ready(function() {
    var w = window.innerWidth;
    var $target = $('.pows');
    var hold = 700;
    headerFooterHeightApply();
    footerDown();
    if (w >= 320) {
        $.each($target, function(i, t) {
            var $this = $(t);
            setTimeout(function() {
                $this.show('normal');
            }, i * hold);
        });
    }
});
$(window).resize(function() {
    var w = window.innerWidth;
    headerFooterHeightApply();
    footerDown();
    if (w <= 320) {
        $(".pows").hide();
    } else {
        $(".pows").show();
    }
});
