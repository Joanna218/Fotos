 let flag = 0;
 $(function() {
     // 數量計數器
     //要關上
     $('.plus1').on('click', function() {
         if (flag == 0) {
             $('.info1').slideUp(function() {
                 $('.plus1').replaceWith('<div class="plus1">-</div>');
                 flag = 1;
                 console.log(flag);
             })
         } else if (flag == 1) {
             //flag = 1; // 打開
             $('.info1').slideDown(function() {
                 $('.plus1').replaceWith('<div class="plus1">+</div>');
                 flag = 0;
                 console.log(flag);
             })
         }
     });
     $('.plus2').click(function() {
         $('.info2').slideToggle()
     });
     $('.plus3').click(function() {
         $('.info3').slideToggle()
     });


     //......................................
     //商品評論頁籤
     $('.contents div[id != "tab1"]').hide();
     $("a").click(function() {
         $(".contents div").hide();

         // 顯示出選擇頁籤的對應內容
         var res = $(this).attr("href");
         console.log(res);
         $(res).show();

         // 移除目前的current類別
         $(".current").removeClass("current");

         // 在目前所選頁籤本身加上current類別
         $(this).addClass("current");

         return false;
     });

     //..................................
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

     //............................
     //加入購物車
     // 隱藏背景與訊息對話框
     $("#bg").hide();

     // 點按「Click Me!」按鈕
     $(".btn_add_car").click(function() {
         // 淡入顯示背景與訊息對話框
         $("#bg").fadeIn(300);
         $("#bg").delay(1000).fadeOut(300);
     });

     // 點按「OK」按鈕
     //  $("#ok").click(function() {
     //      // 淡出隱藏背景與訊息對話框
     //      $("#bg").fadeOut(300);
     //  });

     //..................................................


     // $(".sm_box a").click(function() {
     //     $(".big_box img").attr("src", $(this).attr("href"));
     //     return false;
     // });




     //.......................................



     // // clone the text
     // $(".zoomer:first").anythingZoomer({
     //     clone: true
     // });

     // $(".zoomer:last").anythingZoomer();

 });