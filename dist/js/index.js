$(function() {
    $(window).on('resize', function() {
        var navbar = $(window).width();
        if (navbar >= 992) {
            $(".nav_bar").show();
        }
    });
    $('.header_toggle').click(function() {
        $(".nav_bar").slideToggle(300);
    });
});