$(function() {

    var window_height = $(window).height();
    var row3_height = window_height - 148;
    $('.img_header').css({
        height: window_height
    });
    $('._container_row3').css({
        height: row3_height
    });

    ///////////////////////////////////////////

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        // center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


    //////////////////////////////////////////////////

    AOS.init({
        offset: 100,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
})