// 选择器的封装
function $(str) {
	if (str.charAt(0) == "#") {
		return document.getElementById(str.substring(1));
	} else if (str.charAt(0) == ".") {
		return document.getElementsByClassName(str.substring(1));
	} else {
		return document.getElementsByTagName(str);
	}
}
// 简单验证码的封装
function code(){		
  let str = '0123456789qwertyuiopasdfghjklzxcvbnm';		
  let arr = str.split('');			
  let newStr = '';		
  for(let i = 0; i < 4; i++ ){
    newStr += arr[parseInt(Math.random()*arr.length)];
  }		
  return newStr;
}


