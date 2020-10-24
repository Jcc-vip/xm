<?php
// 修订编码格式
header("content-type:text/html;charset=utf8");
// 提取username的值
$user = $_POST['user'];
// 提取password的值
$pass = $_POST['pass'];
// 提取tel的值
$tel = $_POST['tel'];
// echo $pass;
// 提取email的值
// $email = $_POST['email'];
// 连接数据库
$con = mysqli_connect("127.0.0.1","root","root","test");
// 查找数据库里面的用户名
$res = mysqli_query($con,"select * from reg where user='$user'");
// 查找一个数据库的用户名
$row = mysqli_fetch_assoc($res);
//echo $row;
//判断用户名是否存在
if($row){
    echo ("用户名已被占用");
}else{
    // 给数据库添加数据
    $res = mysqli_query($con,"insert into reg(user,pass,tel) values('$user','$pass',$tel)");
  //  echo ("注册成功");
    // //判断
    // if($res){
    //     echo ("<script>
    //     alert('注册成功');
    //     location.href='reg.html';</script>");
    // }else{
    //     echo ("alert('注册失败请重新注册');");
    // }
} 
//echo ("注册失败");
//   echo ("<script>
// alert('注册失败请重新注册');
// location.href='reg.html';</script>");