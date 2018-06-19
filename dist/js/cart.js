$(function() {
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

});