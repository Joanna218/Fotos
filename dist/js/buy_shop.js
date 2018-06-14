 $(function() {
     $('.plus1').on('click', function() {
         $(this).toggleClass('is-active')
         $('.info1').slideToggle()

     })
     $('.info_name1').on('click', function() {
         $('.plus1').toggleClass('is-active')
         $('.info1').slideToggle()

     })

     $('.plus2').on('click', function() {
         $(this).toggleClass('is-active')
         $('.info2').slideToggle()

     })
     $('.info_name2').on('click', function() {
         $('.plus2').toggleClass('is-active')
         $('.info2').slideToggle()

     })
     $('.plus3').on('click', function() {
         $(this).toggleClass('is-active')
         $('.info3').slideToggle()

     })
     $('.info_name3').on('click', function() {
         $('.plus3').toggleClass('is-active')
         $('.info3').slideToggle()

     })

     //......................................
     //商品評論頁籤
     //  $('.contents div[id != "tab1"]').hide();
     $('#tab2').hide();
     $(".critical").click(function() {
         //  $(".contents div").hide();
         $('#tab1').hide()
         $('#tab2').hide()

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
     $(".btn_add_car").click(function() {
         // 淡入顯示背景與訊息對話框
         $("#bg").fadeIn(300);
         $("#bg").delay(1000).fadeOut(300);
     });
     //收藏
     $(".heart_pos").click(function() {
         // 淡入顯示背景與訊息對話框
         $("#bg2").fadeIn(300);
         $("#bg2").delay(1000).fadeOut(300);
     });

     //..................................................


     $(".sm_box a").click(function() {
         const bigImagePath = $(this).data('standard')

         $(".big_box img").attr("src", bigImagePath);
         return false;
     });




     //.......................................
     $('.sm_box a img').click(function() {
         $('.sm_box a img').removeClass('sm_img_border');
         $(this).addClass('sm_img_border');
         console.log('ff');
     });
     //..........................
     $('.heart_pos').click(function() {
         $('.color_heart').css('color', 'red');
     });
     //............
     //星星評論
     $('#rate_1').click(function() {

         console.log('1');
     });
     $('#rate_2').click(function() {
         console.log('2');
     });
     $('#rate_3').click(function() {
         console.log('3');
     });
     $('#rate_4').click(function() {
         console.log('4');
     });
     $('#rate_5').click(function() {
         console.log('5');
     });
 });

 var css = document.getElementById('css');
 var d = document.getElementById('#rate_1');
 var c = css.sheet;
 c.insertRule("'#rate_1'#rate_1::before{color:blue;}", 0);