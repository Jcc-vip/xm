var login_user = $('#login_user');
var login_pass = $('#login_pass');
var login_code = $('#login_code');
var login_log = $('#login_log');
var login_yzm = $('#login_yzm')
// console.log(login_user);
// 验证码 部分
  var sCode = "1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
  var aCode = sCode.split(",");
  var aLength = aCode.length;//获取到数组的长度 
  function color16(){//十六进制颜色随机
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    return color;
  }
  var login_c = '';
  login_yzm.onclick = function(){
    // 存储一个随机的数字
    var txt='';
    var m='';
    for (var i = 0; i <= 3; i++) {
      var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
      m += aCode[j];
      //txt是 i加随机数字的集合 要追加到页面中
       txt +=`<i style='color:${color16()}; margin-left:2px;'>${aCode[j]}</i>` ;//得到随机的一个内容
    }
    login_yzm.innerHTML=txt;
    login_c = m ;
   // console.log(m);
  }
 login_yzm.onclick();

// 登录验证部分
login_log.onclick = function(){
  if(login_user.value == '' || login_pass.value == ''){
    alert('用户或密码不能为空！')
    return;}

   if(login_code.value != login_c){
    alert('验证码填写错误！')
  }else{
    login_aa();
    // alert('登录成功！');
    // location.href="index.html"
   }


}


// 发送请求
var login_aa = function (){
  let data = 'user=' + login_user.value + '&pass=' + login_pass.value ;
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