<?php
include('./mysql.php');
// 获取访问的方法名称
$fn = $_GET['fn']; 
// add();
$fn();  // add()

 // 查询数据
 function lst(){
   $sql = 'select * from goods';
   $res = select($sql);
   if($res){
     echo json_encode([
       "meta"=>[
         "status"=>200,
        "msg"=>"数据获取成功"
       ],
       "data"=>$res
     ]);
   }
 }
 // 价格的方法
 function jg(){
  $sql = 'select * from goods order by price ASC';
  $res = select($sql);
  if($res){
    echo json_encode([
      "meta"=>[
        "status"=>200,
       "msg"=>"数据获取成功"
      ],
      "data"=>$res
    ]);
  }
}
// 人气的方法
function rq(){
  $sql = 'select * from goods order by rq ASC';
  $res = select($sql);
  if($res){
    echo json_encode([
      "meta"=>[
        "status"=>200,
       "msg"=>"数据获取成功"
      ],
      "data"=>$res
    ]);
  }
}
// 销量的方法
function xl(){
  $sql = 'select * from goods order by num ASC';
  $res = select($sql);
  if($res){
    echo json_encode([
      "meta"=>[
        "status"=>200,
       "msg"=>"数据获取成功"
      ],
      "data"=>$res
    ]);
  }
}
// 默认的方法
function mr(){
  $sql = 'select * from goods order by id ASC';
  $res = select($sql);
  if($res){
    echo json_encode([
      "meta"=>[
        "status"=>200,
       "msg"=>"数据获取成功"
      ],
      "data"=>$res
    ]);
  }
}
?>