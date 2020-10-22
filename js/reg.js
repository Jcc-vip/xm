//  1 获取注册信息的的id
var reg_user = document.getElementById('reg_user');
var reg_pass1 = document.getElementById('reg_pass1');
var reg_pass2 = document.getElementById('reg_pass2');
var reg_led = document.getElementById('reg_led');
var reg_yzm = document.getElementById('yzm');
var reg_code = document.getElementById('reg_yzm');
var reg_options = document.getElementById('reg_options');
var reg_note = document.getElementById('note');
// 2设置状 态用于标识用户名,密码,重复密码是否验证成功
var reg_q = false;
var reg_w = false;
var reg_e = false;
var reg_r = false;
var reg_t = false;
// 3 验证用户名，当失去焦点时触发事件
reg_user.onblur = function () {
  var reg_val = this.value;
  //console.log(reg_val);
  var reg_reg = /^[\w\-\u4E00-\u9FA5]{4,20}$/;
  if(reg_reg.test(reg_val)){
    this.nextElementSibling.innerHTML = '用户名符合！';
    reg_q = true;
  }else if( reg_val == '' ){
    this.nextElementSibling.innerHTML = '用户名不能为空';
    reg_q = false;
  } else{
    this.nextElementSibling.innerHTML = '用户名不符合';
    reg_q = false;
  }
}
  // 验证密码
  reg_pass1.onblur = function(){
    var reg_pass1val = this.value;
    // 验证密码的长度
    if(reg_pass1val.length >= 6 && reg_pass1val.length <= 20){
      // 验证密码输入内容
      // 记录密码的强度
      var a = 0, b = 0, c = 0;
       //验证是否有数字
       var reg_reg1 = /\d+/;
       a = reg_reg1.test(reg_pass1val) ? 1 : 0 ;
       //验证是否有字母
       var reg_reg2 = /[a-zA-Z]+/;
       b = reg_reg2.test(reg_pass1val) ? 1 : 0 ;
       //验证是否有特殊字符
       var reg_reg3 = /[^a-zA-Z\d]+/;
       c = reg_reg3.test(reg_pass1val) ? 1 : 0 ;
       // 强度判断
       var reg_str = '';
       switch (a + b + c) {
        case 1:
          reg_str = '密码强度为：弱';
          break;
        case 2:
          reg_str = '密码强度为：中';
          break;
        case 3:
          reg_str = '密码强度为：强';
          break;
      }
      // 将密码强度追加到密码框后
      this.nextElementSibling.innerHTML = reg_str;
      reg_w = true;
    }else if(reg_pass1val == ''){
      this.nextElementSibling.innerHTML = '密码不能为空';
      reg_w = false;
    } else{
      this.nextElementSibling.innerHTML = '密码不符合要求';
      reg_w = false;
    }
  }
  // 验证重复密码
  reg_pass2.onblur = function(){
    var reg_pass2val = this.value;
    var reg_pass2val1 = reg_pass1.value;
    if(reg_pass2val != '' && reg_pass2val1 == reg_pass2val){
      this.nextElementSibling.innerHTML = '两次密码一致';
      reg_e = true;
    }else{
      this.nextElementSibling.innerHTML = '两次密码不一致';
      reg_e = false;
    }
  } 
  // 验证手机号码
  reg_led.onblur = function () {
    var reg_ledval = reg_led.value;
    var reg_led1 = /^1{1}[3-9]{1}\d{9}$/;
    if (reg_led1.test(reg_ledval)) {
      this.nextElementSibling.innerHTML = '手机符合要求';
      reg_r = true;
    }else if(reg_ledval == '' ){
      this.nextElementSibling.innerHTML = '号码不能为空';
      reg_r = false
    } else {
      this.nextElementSibling.innerHTML = '条件不符合';
      reg_r = false
    }
  };
  // 验证码 部分

  //生成验证码的文字
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
  var reg_c = '';
  reg_yzm.onclick = function(){
    // 迎来存储一个随机的数字
    var txt='';
    var m='';
    for (var i = 0; i <= 3; i++) {
      
      var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
      m += aCode[j];
      //txt是 i加随机数字的集合 要追加到页面中
       txt +=`<i style='color:${color16()}; margin-left:2px;'>${aCode[j]}</i>` ;//得到随机的一个内容
    }
    reg_yzm.innerHTML=txt;
    reg_c = m ;
    // console.log(m);
  }
  reg_yzm.onclick();
  // 验证码 end
  
  // 注册判断
  reg_note.onclick = function (){
  
    //  console.log(reg_c );
    //  console.log(reg_code.value );
   
    // console.log(1111111);
    // console.log(reg_q);
    // console.log(reg_w);
    // console.log(reg_e);
    // console.log(reg_r);
    // console.log(reg_t);
    // console.log(reg_q);
    if(reg_q==1 && reg_w==1 && reg_e==1 && reg_r==1 &&reg_c==reg_code.value ){
      alert("注册成功！");
    }else{
      alert("填写信息错误！");
    }
  }



