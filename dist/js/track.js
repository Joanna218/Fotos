$(function() {
    $('.plus').on('click', function() {
        $(this).toggleClass('is-active')
        $('.detail').slideToggle()

    })

});