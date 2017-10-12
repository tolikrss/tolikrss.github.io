console.log('Scripts works');

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")                 ||
    obj.css("-ms-transform")                  ||
    obj.css("-o-transform")                   ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
};

$('document').ready(function(){

    if($(window).innerWidth() > 1200) {
        $('[animate]').each(function() {
            var elemCurrentTransform = $(this).css('transform');
            if($(this).attr('animate') === 'left') {     
                $(this).css('transform', 'translateX('+ (-($(this).offset().left + $(this).innerWidth())) +'px)' + ' rotate(' + getRotationDegrees($(this)) + 'deg)');
                $(this).css('transition', 'transform 1s');
            }
            if($(this).attr('animate') === 'right') {
                $(this).css('transform', 'translateX(' + (-$(this).innerWidth() - ($(this).offset().left - $(window).innerWidth() - $(this).innerWidth())) +'px)' + ' rotate(' + getRotationDegrees($(this)) + 'deg)');
                $(this).css('transition', 'transform 1s');
            }
        });
        $('[animate]').each(function() {
            if($(document).scrollTop() + $(window).height() > $(this).offset().top && $(document).scrollTop() - $(this).offset().top < $(this).height()) {
                    $(this).css('transform', 'translateX(' + 0 +'%)' + ' rotate(' + getRotationDegrees($(this)) + 'deg)');
            }
        });
        $(document).on("scroll", function() {
            $('[animate]').each(function() {
            if($(document).scrollTop() + $(window).height() - ($(window).height()/3) > $(this).offset().top && $(document).scrollTop() - $(this).offset().top < $(this).height()) {
                    $(this).css('transform', 'translateX(' + 0 +'%)' + 'rotate(' + getRotationDegrees($(this)) + 'deg)');
            }
            });
        })
    }

    // var entryName      = $('#entry_name'),
    //     entryMessage   = $('#entry_message'),
    //     entryPhone     = $('#entry_phone'),
    //     submitButton   = $('#submit-button'),
    //     form           = $('#contact_form');
    //     openMobileMenu = $('.open-mobile-menu');
    var    menu           = $('.menu-block');

    $('.open-mobile-menu').click(function() {        
        menu.addClass('open');
        $('body').css('max-height', '100vh');
        $('body').css('overflow', 'hidden');
        $('#mobile-overlay').css('display', 'block');
    });    

    $('.menu-block li').click(function() {
        menu.removeClass('open');
        $('body').attr('style', '');
        $('#mobile-overlay').attr('style', '');
    });

    $('#mobile-overlay').click(function() {
        menu.removeClass('open');
        $('body').attr('style', '');
        $(this).attr('style', '');
    });

    $('.close-mobile-menu').click(function() {
        menu.removeClass('open');
        $('body').attr('style', '');
        $('#mobile-overlay').attr('style', '');
    });

    $('.selected-language').click(function() {
        $('.languages-list').toggle();
    });

    $(window).scroll(function(e) {
        var scrollOffsetTop = $(window).scrollTop(),
            windowWidth = parseInt(window.innerWidth), 
            documentWidth = parseInt(document.documentElement.clientWidth);
        if(scrollOffsetTop > $(window).height() && windowWidth > 1200) { // $(document).height()
            $('.scroll-to-up').css('display', 'block');
            $('.scroll-to-up').css('opacity', 1);
        } else {
            $('.scroll-to-up').css('opacity', 0);
            $('.scroll-to-up').css('display', 'none');
        };

        if(scrollOffsetTop > $(window).height() && windowWidth < 1200) {
            $('.open-mobile-menu').addClass('fixed');
        } else {
            $('.open-mobile-menu').removeClass('fixed');

        }
    });
    $('.scroll-to-up').click(function() {
        $(window).scrollTop(0);
    });


    $('.header-section').mousemove(function(e) {
        var change,
            xpos = e.clientX,
            ypos = e.clientY;

        xpos = xpos * 2;
        ypos = ypos * 2;
        
        if($(window).innerWidth() > 1200) {
            $('.header-section .title')        .css('transition', "0s");
            $('.header-section .title .leaf-2').css('transition', "0s");
            $('.header-section .title .leaf-3').css('transition', "0s");
            
            $('.header-section .title')        .css('transform', "translate(" + (0+(xpos/100)) + "px," + (0+(ypos/160)) + "px)");
            $('.header-section .title .leaf-2').css('transform', "translate(" + (0+(-xpos/100)) + "px," + (0+(-ypos/160)) + "px)");
            $('.header-section .title .leaf-3').css('transform', "translate(" + (0+(-xpos/100)) + "px," + (0+(-ypos/160)) + "px)"); 
        }                      
    });
    $('.header-section').mouseleave(function(e) {
        $('.header-section .title')        .css('transition', "1s");
        $('.header-section .title .leaf-2').css('transition', "1s");
        $('.header-section .title .leaf-3').css('transition', "1s");

        $('.header-section .title')        .css('transform', "translate(" + 0 + "px," + 0 + "px)");
        $('.header-section .title .leaf-2').css('transform', "translate(" + 0 + "px," + 0 + "px)");
        $('.header-section .title .leaf-3').css('transform', "translate(" + 0 + "px," + 0 + "px)");
    });

    $('#contact_form').submit(function(event) {
        event.preventDefault();        
    
        // var fd = new FormData;
        //     fd.append('name', entryName.val());
        //     fd.append('phone', entryPhone.val());
        //     fd.append('message', entryMessage.val());

        var submitButton = $('#submit-button');

        submitButton.addClass('sending');

        var sendingDots = $('.sending .sending span'),
            sendingDotsArr = sendingDots.toArray(),
            intervalIteretion = 0;

        var sendingDotsArrInterval = setInterval(function() {
            if(intervalIteretion >= sendingDotsArr.length) { intervalIteretion = 0 };
            sendingDots.removeClass('active');
            sendingDotsArr[intervalIteretion].classList.add('active');            
            intervalIteretion++;
        }, 500);

        setTimeout(function(){
            // $.ajaxSetup({
            //     headers: {
            //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            //     }
            // });
            
            $.ajax({
                // url: $(this).attr('action'),
                // data: $(this).serialize(),
                url: 'https://httpbin.org/post',
                data: fd,
                processData: false,
                contentType: false,
                
                type: 'POST',
                error: function(xhr,status,error) {
                    submitButton.removeClass('sending');
                    clearInterval(sendingDotsArrInterval);
                    submitButton.addClass('sending-error');
                },
                success: function(data) {

                    submitButton.removeClass('sending');
                    clearInterval(sendingDotsArrInterval);                 
                    submitButton.attr("disabled", true);
                    submitButton.addClass('sending-success');
                    console.log('ajax success data =', data);

                    // if(data == 'success') {
                    //     submitButton.removeClass('sending');
                    //     clearInterval(sendingDotsArrInterval);
                    //     submitButton.attr("disabled", true);
                    //     submitButton.addClass('sending-success');
                    // } else {
                    //     submitButton.removeClass('sending');
                    //     clearInterval(sendingDotsArrInterval);                    
                    //     submitButton.addClass('sending-error');
                    // }

                }
            });
        }, 2000);
    
    });
});

window.onload = function() {
    console.log("window load occurred!");
    $('.preloader-overlay').css('display', 'none');
    $('.main-container').css('opacity', 1);
};