(function () {
  $('#user_name').on('keyup', () => {
    //有輸入資料才送後端
    if ($('#user_name').val() != '') {
      $.ajax({
        url: '../php/checked_register.php',
        method: 'post',
        data: {
          user_name: $('#user_name').val().trim(),
        },
        dataType: 'html'
      }).done((res) => {
        console.log(res)
        if (res) {
          //可以註冊，維持原狀藍色
          $('#user_name').parent().removeClass('has-error');
        } else {
          //不可註冊，變成警告紅色
          $('#user_name').parent().addClass('has-error');
        }
      }).fail((err) => {
        console.log(err)
      })
    }
    // else {
    //   $('#user_name').parent().parent().removeClass('has-error').removeClass('has-success');
    //   $('#register_form button').attr('disabled', false);
    // }
  });

  $('#user_id').on('keyup', () => {
    //有輸入資料才送後端
    if ($('#user_id').val() != '') {
      $.ajax({
        url: '../php/checked_register.php',
        method: 'post',
        data: {
          user_id: $('#user_id').val().trim()
        },
        dataType: 'html'
      }).done((res) => {
        console.log(res)
        if (res) {
          //可以註冊，維持原狀藍色
          $('#user_id').parent().removeClass('has-error');
        } else {
          //不可註冊，變成警告紅色
          $('#user_id').parent().addClass('has-error');
        }
      }).fail((err) => {
        console.log(err)
      })
    }

  });


  $('#register').on('submit', function () {

    var pwd = $('#user_pwd').val().trim();
    var re_pwd = $('#user_repwd').val().trim();
    if (pwd != re_pwd) {
      alert('密碼有錯誤，請再次確認');
      $('#user_pwd').parent().addClass('has-error');
      $('#user_repwd').parent().addClass('has-error');
      return false;
    } else {
      $.ajax({
        url: "../php/register.php",
        method: "post",
        data: {
          user_name: $('#user_name').val().trim(),
          user_id: $('#user_id').val().trim(),
          user_pwd: $('#user_pwd').val().trim(),
          user_email: $('#user_email').val().trim(),
          user_gender: $('#user_gender').val(),
          user_birth: $('#user_birth').val(),
          user_addr: $('#user_addr').val()
        },
        dataType: 'html'
      }).done((res) => {
        console.log('test');
        if (res) {
          console.log('test2');
          alert('註冊成功');
          window.location.href = './login.html';
        }
      }).fail((err) => {
        console.log(err)
      })
    }

    return false;
  })





})()