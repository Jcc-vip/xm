class List{
  // 实例化的时候自动调用
  constructor(){
    List.lst();
    List.id = List.getUrlParam('goodsId');
 
  }
  static getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);
     //匹配目标参数
    //  console.log(r);
    if(r != null) return unescape(r[2]);
    return null; //返回参数值
  }
  //获取商品的信息
  //创建一个静态的方法
  static lst(){
    // 1发送ajax请求
    axios.get('http://localhost/xm/server/goods.php?fn=lst',List.id)
    .then(res =>{
     // console.log(res);
     // 将返回的数据转化为对象
     let {
       meta,
       data
     } = JSON.parse(res);
     //console.log(meta, data);
      // 判断请求状态
      if(meta.status == 200){
       // console.log(data);
       // 在这里 因为data的返回值是一个数组，所以必须要先循环遍历
       // 这里声明一个空变量 用来存储追加到页面的数据
       let html = '' ;
       data.forEach(ele =>{
         let {
           id,goodsName,price,t1,t2,t3,t4,
         } = ele;
        // console.log(ele);
        html += `<li class="goods-products">
        <span><a href="products_show.html?goodsId=${id}"><img src="${t1}" alt="" width="250" height="215"
                    class="main-img"></a></span>

        <ul class="goods-small-img">
            <li><img src="${t1}" alt="" width="50" height="50"></li>
            <li><img src="${t2}" alt="" width="50" height="50"></li>
            <li><img src="${t3}" alt="" width="50" height="50"></li>
            <li><img src="${t4}" alt="" width="50" height="50"></li>
        </ul>

        <div class="goods-title">
            <a href="products_show.html?goodsId=${id}">${goodsName}</a>
        </div>
        <div class="goods-label">
            <ul>
                <li><a class="procuts-label" title="包邮">包邮</a></li>
                <li><a class="procuts-label" title="支持花呗">支持花呗</a></li>
                <li><a class="procuts-label" title="满100减">满100元减</a></li>
            </ul>
        </div>
        <span class="goods-money">￥${price}</span>
        <span class="goods-shop-name">京东自营店<a href=""><img src="images/icon/kefu.png" width="20"
                    height="20"></a></span>
        <a href="cart.html" class="add-cart"><img src="images/icon/cart2.png" alt="" width="20"
                height="20"></a>
    </li> `
       });
       // 追加到页面中
       let app = document.getElementById('goods')
      //  console.log(app);
       
       app.innerHTML = html;
      
      }
    })
  }
}
new List();

class sort{
  // 价格的方法
  static Event(){
    axios.get('http://localhost/xm/server/goods.php?fn=jg')
    .then(res =>{
      let {
        meta,
        data
      } = JSON.parse(res);
      if(meta.status == 200){
        let html = '' ;
        console.log(data);
        data.forEach(ele =>{
          // console.log(ele);
          let {
            id,goodsName,price,t1,t2,t3,t4,
          } = ele;
          html += `<li class="goods-products">
          <span><a href="products_show.html?goodsId=${id}"><img src="${t1}" alt="" width="250" height="215"
                      class="main-img"></a></span>
  
          <ul class="goods-small-img">
              <li><img src="${t1}" alt="" width="50" height="50"></li>
              <li><img src="${t2}" alt="" width="50" height="50"></li>
              <li><img src="${t3}" alt="" width="50" height="50"></li>
              <li><img src="${t4}" alt="" width="50" height="50"></li>
          </ul>
  
          <div class="goods-title">
              <a href="products_show.html?goodsId=${id}">${goodsName}</a>
          </div>
          <div class="goods-label">
              <ul>
                  <li><a class="procuts-label" title="包邮">包邮</a></li>
                  <li><a class="procuts-label" title="支持花呗">支持花呗</a></li>
                  <li><a class="procuts-label" title="满100减">满100元减</a></li>
              </ul>
          </div>
          <span class="goods-money">￥${price}</span>
          <span class="goods-shop-name">京东自营店<a href=""><img src="images/icon/kefu.png" width="20"
                      height="20"></a></span>
          <a href="cart.html" class="add-cart"><img src="images/icon/cart2.png" alt="" width="20"
                  height="20"></a>
      </li> `
        });
        // 追加到页面中
        let app1 = document.getElementById('goods')
       //  console.log(app);
        app1.innerHTML = html;
       }
    })
  }

  //销量的方法
  static xl(){
    axios.get('http://localhost/xm/server/goods.php?fn=xl')
    .then(res =>{
      let {
        meta,
        data
      } = JSON.parse(res);
      if(meta.status == 200){
        let html = '' ;
        console.log(data);
        data.forEach(ele =>{
          // console.log(ele);
          let {
            id,goodsName,price,t1,t2,t3,t4,
          } = ele;
          html += `<li class="goods-products">
          <span><a href="products_show.html?goodsId=${id}"><img src="${t1}" alt="" width="250" height="215"
                      class="main-img"></a></span>
  
          <ul class="goods-small-img">
              <li><img src="${t1}" alt="" width="50" height="50"></li>
              <li><img src="${t2}" alt="" width="50" height="50"></li>
              <li><img src="${t3}" alt="" width="50" height="50"></li>
              <li><img src="${t4}" alt="" width="50" height="50"></li>
          </ul>
  
          <div class="goods-title">
              <a href="products_show.html?goodsId=${id}">${goodsName}</a>
          </div>
          <div class="goods-label">
              <ul>
                  <li><a class="procuts-label" title="包邮">包邮</a></li>
                  <li><a class="procuts-label" title="支持花呗">支持花呗</a></li>
                  <li><a class="procuts-label" title="满100减">满100元减</a></li>
              </ul>
          </div>
          <span class="goods-money">￥${price}</span>
          <span class="goods-shop-name">京东自营店<a href=""><img src="images/icon/kefu.png" width="20"
                      height="20"></a></span>
          <a href="cart.html" class="add-cart"><img src="images/icon/cart2.png" alt="" width="20"
                  height="20"></a>
      </li> `
        });
        // 追加到页面中
        let app2 = document.getElementById('goods')
       //  console.log(app);
        app2.innerHTML = html;
       }
    })
  }
  // 人气的方法
  static rq(){
    axios.get('http://localhost/xm/server/goods.php?fn=rq')
    .then(res =>{
      let {
        meta,
        data
      } = JSON.parse(res);
      if(meta.status == 200){
        let html = '' ;
        console.log(data);
        data.forEach(ele =>{
          // console.log(ele);
          let {
            id,goodsName,price,t1,t2,t3,t4,
          } = ele;
          html += `<li class="goods-products">
          <span><a href="products_show.html?goodsId=${id}"><img src="${t1}" alt="" width="250" height="215"
                      class="main-img"></a></span>
  
          <ul class="goods-small-img">
              <li><img src="${t1}" alt="" width="50" height="50"></li>
              <li><img src="${t2}" alt="" width="50" height="50"></li>
              <li><img src="${t3}" alt="" width="50" height="50"></li>
              <li><img src="${t4}" alt="" width="50" height="50"></li>
          </ul>
  
          <div class="goods-title">
              <a href="products_show.html?goodsId=${id}">${goodsName}</a>
          </div>
          <div class="goods-label">
              <ul>
                  <li><a class="procuts-label" title="包邮">包邮</a></li>
                  <li><a class="procuts-label" title="支持花呗">支持花呗</a></li>
                  <li><a class="procuts-label" title="满100减">满100元减</a></li>
              </ul>
          </div>
          <span class="goods-money">￥${price}</span>
          <span class="goods-shop-name">京东自营店<a href=""><img src="images/icon/kefu.png" width="20"
                      height="20"></a></span>
          <a href="cart.html" class="add-cart"><img src="images/icon/cart2.png" alt="" width="20"
                  height="20"></a>
      </li> `
        });
        // 追加到页面中
        let app3 = document.getElementById('goods')
       //  console.log(app);
        app3.innerHTML = html;
       }
    })
  }
  // 默认的方法
  static mr(){
    axios.get('http://localhost/xm/server/goods.php?fn=mr')
    .then(res =>{
      let {
        meta,
        data
      } = JSON.parse(res);
      if(meta.status == 200){
        let html = '' ;
       // console.log(data);
        data.forEach(ele =>{
          // console.log(ele);
          let {
            id,goodsName,price,t1,t2,t3,t4,
          } = ele;
          html += `<li class="goods-products">
          <span><a href="products_show.html?goodsId=${id}"><img src="${t1}" alt="" width="250" height="215"
                      class="main-img"></a></span>
  
          <ul class="goods-small-img">
              <li><img src="${t1}" alt="" width="50" height="50"></li>
              <li><img src="${t2}" alt="" width="50" height="50"></li>
              <li><img src="${t3}" alt="" width="50" height="50"></li>
              <li><img src="${t4}" alt="" width="50" height="50"></li>
          </ul>
  
          <div class="goods-title">
              <a href="products_show.html?goodsId=${id}">${goodsName}</a>
          </div>
          <div class="goods-label">
              <ul>
                  <li><a class="procuts-label" title="包邮">包邮</a></li>
                  <li><a class="procuts-label" title="支持花呗">支持花呗</a></li>
                  <li><a class="procuts-label" title="满100减">满100元减</a></li>
              </ul>
          </div>
          <span class="goods-money">￥${price}</span>
          <span class="goods-shop-name">京东自营店<a href=""><img src="images/icon/kefu.png" width="20"
                      height="20"></a></span>
          <a href="cart.html" class="add-cart"><img src="images/icon/cart2.png" alt="" width="20"
                  height="20"></a>
      </li> `
        });
        // 追加到页面中
        let app4 = document.getElementById('goods')
       //  console.log(app);
        app4.innerHTML = html;
       }
    })
  }
}



window.onload = function(){
  // 左侧导航
  $(function () {
    var $top = $('.sec-mainNav').offset().top + $('.sec-mainNav').height()
    //左侧导航动画
    $('.sec-mainNav li').on('mouseenter', function () {
        var $height = $(this).offset().top + $(this).find('.menu-panel').outerHeight();
        $(this).find('.menu-panel').show();
        if ($height - $top >= 0) {
            $(this).find('.menu-panel').css({
                top: -($height - $top) + 'px'
            })
        }
    });
    $('.sec-mainNav li').on('mouseleave', function () {
        $(this).find('.menu-panel').hide();
    });
});
// 焦点图切换
$(document).ready(function() {
  var galleryClass = '.goods-products';
  $(galleryClass+' li img').hover(function(){
      var $gallery = $(this).parents(galleryClass);
      $('.main-img',$gallery).attr('src',$(this).attr('src').replace('thumb/', ''));
  });
  var imgSwap = [];
  $(galleryClass+' li img').each(function(){
      imgUrl = this.src.replace('thumb/', '');
      imgSwap.push(imgUrl);
  });
  $(imgSwap).preload();
});
$.fn.preload = function() {
  this.each(function(){
      $('<img/>')[0].src = this;
  });
}
var price = document.getElementById('price');
var Popularity = document.getElementById('Popularity');
var Sales = document.getElementById('Sales');
var default1 = document.getElementById('default1');


// 价格的排序
price.onclick = function(){
  // List.id = List.getUrlParam('goodsId');
  sort.Event();
}
// 人气的排序
Popularity.onclick = function(){
  // List.id = List.getUrlParam('goodsId');
  sort.rq();
}
// 销量的排序
Sales.onclick = function(){
  // List.id = List.getUrlParam('goodsId');
  sort.xl();
}
//默认的排序
default1.onclick = function(){
  // List.id = List.getUrlParam('goodsId');
  sort.mr();
}

}
