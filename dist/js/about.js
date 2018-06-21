$(function() {
    AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease-out-back',

    });
    $(".top").hover(function() {
        $(this).append("<div> <p style='font-size:14px;font-family:微軟正黑體; color: white;font-weight:bold; margin:0px; padding:0px'>" + $(this).children("img").attr("alt") + "</p></div>");
        $(this).children("div").stop().fadeIn(300);
        $(this).children("div").children("p").stop().animate({
            "top": 0
        }, 300);
    }, function() {
        $(this).children("div").stop().fadeOut(300);
        $(this).children("div").children("p").stop().animate({
            "top": 10
        }, 300, function() {
            $(this).parent("div").remove();
        });
    });
});