<?php
  require 'db.php' ;
  require 'function.php' ;

  $checked = join_users($_POST['user_name'], $_POST['user_id'], $_POST['user_pwd'], $_POST['user_email'], $_POST['user_gender'], $_POST['user_birth'], $_POST['user_addr']);

  if ($checked) {
    echo true;
  }else {
    echo false;
  }

  // echo $_POST['user_name'].$_POST['user_id'].$_POST['user_pwd'].$_POST['user_email'].$_POST['user_gender'].$_POST['user_birth'].$_POST['user_addr']
 ?>