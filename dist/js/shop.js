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
    $(".shop_add_car").click(function() {
        // 淡入顯示背景與訊息對話框
        $(".bg").fadeIn(300);
        // $(".bg").delay(1000).fad。eOut(300);
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
    $('.box').click(function() {
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