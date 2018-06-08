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


    $('.header_container .search').on('click', function() {
        const inputSearch = $('.prompt').val()
        if (!inputSearch) return;

        console.log(inputSearch)
        $('#search-form').submit()
    })

    /*
    $('.header_container .prompt').keypress(function(event) {
        const inputSearch = $('.prompt').val()
        if (event.keyCode == 13 && inputSearch) {
            searchData(inputSearch);
        }
    });

    function searchData(inputSearch) {

      $.ajax({
        url: "http://localhost:7881/dist/search.jsp",
        type: "post",
        data: inputSearch,
        dataType: "json",
        success: function (res) {
          console.log(res)
        },
        error: function (err) {
          console.log(err)
        }
      })
  }
  */
})