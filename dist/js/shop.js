$(function() {
    // init Isotope
    var $box = $('._container_content').isotope({
        itemSelector: '.box'
    });

    // store filter for each group
    var filters = {};

    $('.filters').on('click', '.button', function() {
        var $this = $(this);
        $('.a').css('visibility', 'visible');
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues(filters);
        // set filter for Isotope
        $box.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // flatten object by concatting values
    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }
    //...................
    //加入購物車

    $('.ad1').click(function() {
        $(".bg1").css('opacity', '1');
        $(".bg1").fadeIn(300);
        return false;
    });
    $('.ad2').click(function() {
        $(".bg2").css('opacity', '1');
        $(".bg2").fadeIn(300);
        return false;
    });
    $('.ad3').click(function() {
        $(".bg3").fadeIn(300);
        return false;
    });
    $('.ad4').click(function() {
        $(".bg4").fadeIn(300);
        return false;
    });
    $('.ad5').click(function() {
        $(".bg5").fadeIn(300);
        return false;
    });
    $('.ad6').click(function() {
        $(".bg6").fadeIn(300);
        return false;
    });
    $('.ad7').click(function() {
        $(".bg7").fadeIn(300);
        return false;
    });
    $('.ad8').click(function() {
        $(".bg8").fadeIn(300);
        return false;
    });
    $('.ad9').click(function() {
        $(".bg9").fadeIn(300);
        return false;
    });
    $('.ad10').click(function() {
        $(".bg10").fadeIn(300);
        return false;
    });
    $('.ad11').click(function() {
        $(".bg11").fadeIn(300);
        return false;
    });
    $('.ad12').click(function() {
        $(".bg12").fadeIn(300);
        return false;
    });
    $('.ad13').click(function() {
        $(".bg13").fadeIn(300);
        return false;
    });
    $('.ad14').click(function() {
        $(".bg14").fadeIn(300);
        return false;
    });
    $('.ad15').click(function() {
        $(".bg15").fadeIn(300);
        return false;
    });
    $('.ad16').click(function() {
        $(".bg16").fadeIn(300);
        return false;
    });
    $('.ad17').click(function() {
        $(".bg17").fadeIn(300);
        return false;
    });
    $('.ad18').click(function() {
        $(".bg18").fadeIn(300);
        return false;
    });
    $('.ad19').click(function() {
        $(".bg19").fadeIn(300);
        return false;
    });
    $('.ad20').click(function() {
        $(".bg20").fadeIn(300);
        return false;
    });
    $('.ad21').click(function() {
        $(".bg21").fadeIn(300);
        return false;
    });
    $('.ad22').click(function() {
        $(".bg22").fadeIn(300);
        return false;
    });
    $('.ad23').click(function() {
        $(".bg23").fadeIn(300);
        return false;
    });
    $('.ad24').click(function() {
        $(".bg24").fadeIn(300);
        return false;
    });
    $('.ad25').click(function() {
        $(".bg25").fadeIn(300);
        return false;
    });
    $('.ad26').click(function() {
        $(".bg26").fadeIn(300);
        return false;
    });
    $('.ad27').click(function() {
        $(".bg27").fadeIn(300);
        return false;
    });
    $('.ad28').click(function() {
        $(".bg28").fadeIn(300);
        return false;
    });
    $('.ad29').click(function() {
        $(".bg29").fadeIn(300);
        return false;
    });
    $('.ad30').click(function() {
        $(".bg30").fadeIn(300);
        return false;
    });
    $('.ad31').click(function() {
        $(".bg31").fadeIn(300);
        return false;
    });
    $('.ad32').click(function() {
        $(".bg32").fadeIn(300);
        return false;
    });
    //收藏
    $(".shop_add_love").click(function() {
        // 淡入顯示背景與訊息對話框
        $("#bg").fadeIn(300);
        $("#bg").delay(1000).fadeOut(300);
        return false;
    });
    //.........................................
    //按下產品跳轉產品頁
    $('.box_container').click(function() {
        window.location.href = '../html/buy_shop.html';
    });
    //...................................
    //數量
    //計數器加減數量
    $(".minus").on('click', function() {
        var value = $(".num").val();
        value--;
        if (value < 2) {
            var little = 1;
            $(".num").val(little);
        } else {
            $(".num").val(value);
        }
        console.log(value);
    });


    $(".add").on('click', function() {
        var value = $(".num").val();
        value++;
        $(".num").val(value);
        console.log(value);
    });
    //..........................
    //叉叉消失alertbox
    $('.sm_icon_xx').click(function() {
        $('.bg').hide();
    });

    ///...
})