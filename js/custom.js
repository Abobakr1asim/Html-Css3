$(function(){

    var myHeader = $('.header');

   myHeader.height($(window).height());

    $(window).resize(function(){

        myHeader.height($(window).height());

        //adjust slider list item center

        $('.slider').each(function(){

            $(this).css('paddingTop',($(window).height() - $('.slider li').height())/ 2);
        });
    });

    $('.links li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    //adjust slider list item center

     $('.slider').each(function(){

        $(this).css('paddingTop',($(window).height() - $('.slider li').height()) / 2);

     });
    //trigger the bx slider

        $('.slider').bxSlider({
            pager:false
        });
     // smooth scroll to  Div
    $('.links li a').click(function () {

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

/*
        console.log('#' + $(this).data('value'));
*/

    });
    //Our auto bxslider code

    (function autoAslider(){
        $('.Aslider .active').each(function(){
             if (!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000,function() {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoAslider()
                });
            } else {
                 $(this).delay(3000).fadeOut(1000,function(){
                     $(this).removeClass('active');
                     $('.Aslider div').eq(0).addClass('active').fadeIn();
                     autoAslider()
                 })

            }
        });
    }());




// Trigger MixitUp

$('#Container').mixItUp();

// Adjust Shuffle Links

$('.shuffle li').click(function () {

    $(this).addClass('selected').siblings().removeClass('selected');

});

// Trigger Nice Scroll

$('html').niceScroll({

    cursorcolor: '#1abc9c',

    cursorwidth: '10px',

    cursorborder: '1px solid #1abc9c',

    cursorborderradius: 0

});

});
