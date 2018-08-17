<?php
  require 'db.php' ;
  require 'function.php' ;

  if (isset($_POST['user_name']) ) {
    $checked = checked_user_name($_POST['user_name']);
  }else {
    $checked = checked_user_id($_POST['user_id']);
  }


  if ($checked) {
    //可以註冊
    echo true ;
  }else {
    //不可註冊
    echo false ;
  }