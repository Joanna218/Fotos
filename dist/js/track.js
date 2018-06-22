$(function() {
    $('.plus').on('click', function() {
        $(".is-active").removeClass("is-active");
        $(this).addClass("is-active");
        if ($(this).hasClass('is-active')) {
            $(this).parent().next().slideToggle();
            $(this).parent().next().next().slideToggle();
        }
    })

});