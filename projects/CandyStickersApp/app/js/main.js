console.log('tese');

$('document').ready(function(){
    $('.mobile-stickers-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.header').mousemove(function(e) {
        var change;
        var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
        var  xpos=xpos*2;ypos=ypos*2;
        
        $('.candy-stickers-image').css('transition', "0s");
        $('.girl-image').css('transition', "0s");
        
        $('.candy-stickers-image').css('transform', "translate(" + (0+(xpos/30)) + "px," + (0+(ypos/40)) + "px)");
        $('.girl-image').css('transform', "translate(" + (0+(xpos/50)) + "px," + (0+(ypos/70)) + "px)");
                       
    });
    $('.header').mouseleave(function(e) {
        $('.candy-stickers-image').css('transition', "1s");
        $('.girl-image').css('transition', "1s");

        $('.candy-stickers-image').css('transform', "translate(" + 0 + "px," + 0 + "px)");
        $('.girl-image').css('transform', "translate(" + 0 + "px," + 0 + "px)");
    });

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var entryName = $('#entry_name');
    var entryMessage = $('#entry_message');
    var entryEmail = $('#entry_email'); 
    var submitButton = $('#submit-button'); 
    var form = $('#feedback_form');

    submitButton.click(function() {
        $(this).attr('class', 'send-feedback-btn');
    });

    entryEmail.keyup(function() {
        form.removeClass('incorrect-email');
        submitButton.attr("disabled", false);
    });

    $('#feedback_form').submit(function(event) {  
        event.preventDefault();
        
        // console.log('from #feedback_form event - ', event);

        form.removeClass('incorrect-email');

        if (!pattern.test(entryEmail.val())) {
            form.addClass('incorrect-email');
            submitButton.attr('disabled', true);
            return false;
        }
    
        var fd = new FormData;
            fd.append('entry_name', entryName.val());
            fd.append('email', entryEmail.val());
            fd.append('entry_message', entryMessage.val());

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
            $.ajax({
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
                }
            });
        }, 2000);
    
    });
});

