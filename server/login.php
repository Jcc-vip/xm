<?php
header('content-type:text/html;charset=uf8t');
$user = $_POST['user'];
$pass = $_POST['pass'];
// echo $pass;
// echo $user;
// 链接数据库
$con =@mysqli_connect("127.0.0.1","root","root","test");
 // 从数据库中查找传输过来的用户名
$res =@mysqli_query($con,"select * from reg where user = '$user' ");
  //  从查找结果获得一行数据
 $row =@mysqli_fetch_assoc($res);

  // 判断账号和密码
if($row){
    if($row['pass'] === $pass){
        // 发送 cookie（用户名的的数值  发送成功为true 失败为 false）
        // 成功就继续输出3 失败则往下走 返回别的值 
        setcookie('user',$user);  // 发送的cookie命名为name  
        echo 1 ;
    }else{
        echo 2 ;  //密码错误
    }
}else{
    echo  3;  // 用户名不存在
}