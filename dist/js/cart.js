$(function() {
    //計數器加減數量
    $(".minus").on('click', function() {
        $(".current_minus").removeClass("current_minus");
        $(this).addClass("current_minus");

        if ($(this).hasClass('current_minus')) {
            var value = $(".current_minus").next().val();
            value--;
            if (value < 2) {
                var little = 1;
                $(".current_minus").next().val(little);
            } else {
                $(".current_minus").next().val(value);
            }
            //console.log(value);
        }
    });


    $(".add").on('click', function() {
        $(".current_add").removeClass("current_add");
        $(this).addClass("current_add");

        if ($(this).hasClass('current_add')) {
            //console.log($(".current").prev().val());
            var value_add = $(".current_add").prev().val();
            value_add++;
            $(".current_add").prev().val(value_add);
            //console.log(value_add);
        };
    });

});