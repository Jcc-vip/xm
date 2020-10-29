/*********登录部分*******/ 
var index_user = document.getElementById('index_user');
var index_pass = document.getElementById('index_pass');
var index_login =document.getElementById('index_login');
//登录验证
index_login.onclick = function(){
  if(index_user.value == '' || index_pass.value == ''){
    alert('用户或密码不能为空！')
    return;}else{
    index_aa();
   }
}
// 发送请求
var index_aa = function (){
  let data = 'user=' + index_user.value + '&pass=' + index_pass.value ;
  // console.log(data);

  axios.post('http://localhost/xm/server/login.php', data).then(res => {
    //console.log(JSON.parse(res));
     if(res==1){
      alert('登录成功');
      location.href="index.html";
    }else if(res==2){
      alert('密码错误');
    }else{
      alert('用户名不存在');
      return;
    }
  })
 }

 /*******走马灯部分*******/
 var index_box = document.getElementById('index_box');
 var index_one = document.getElementById('index_one');
 var index_two = document.getElementById('index_two');
 var innerdiv = document.getElementById('innerdiv')
// 1 将one赋值给two
index_two.innerHTML = index_one.innerHTML;
// 2 设置外面大盒子的滚动条边距为0
index_box.scrollLeft = 0;
// 3 添加一个滚动事件
function scrollUp(){
  // 4 当大容器的左滚动条高度大于或等于小容器的宽度
  if(index_box.scrollLeft >= index_one.offsetWidth){
    // 就把大容器的左滚动条的距离设置为0 来从新加载
    index_box.scrollLeft = 0;
  }else{
    // 让大容器的左滚动条每次增增加2 
    index_box.scrollLeft += 2;
  }
}
// 设置一个定时器
var mytimer = setInterval(scrollUp, 50);
//鼠标移入
innerdiv.onmouseover = function(){
  clearInterval(mytimer);
  }
  //console.log(mytimer);
//鼠标移出
innerdiv.onmouseout = function(){
  mytimer = setInterval(scrollUp, 50)
}

// 轮播图部分
