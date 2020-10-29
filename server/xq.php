<?php
header('content-type:text/html;charset=uf8t');
$id = $_GET['id'];
// echo $id;
// 链接数据库
$con =@mysqli_connect("127.0.0.1","root","root","test");
 // 从数据库中查找传输过来的用户名
$res =mysqli_query($con,"select * from goods where id = '$id' ");
// echo json_encode($res);
  //  从查找结果获得一行数据
 $row =@mysqli_fetch_assoc($res);
  // echo json_encode($row)  ;
 
 echo json_encode(
  [
    "meta"=>[
      "status"=>200,
      "meg"=>"成功"
    ],
    "data"=>$row
  ]
 );