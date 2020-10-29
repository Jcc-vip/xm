class Goods{
  // 实例化的时候自动调用
  constructor(){
    Goods.list()
  }
  //获取商品的信息
  //创建一个静态的方法
  static list(){
    // 1发送ajax请求
    axios.get('http://localhost/xm/server/goods.php?fn=lst')
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
           id,goodsName,price,t1,sold
         } = ele;
        // console.log(ele);
        html += `<div class = 'products'>
        <div class="products-img"><a href="products_show.html?goodsId=${id}" title="【限时直降|现货速发】购机赠：小米原装耳机+品牌无线充+一拖三数据线+高清保护膜+晒单红包【小米10至尊限时直降】">
        <img src="${t1}" alt=""> </a>
        </div>
        <div class="products-title2">
        <a href="products_show.html?goodsId=${id}">${goodsName}</a>
        </div>
        <div class="products-title3">
             <ul>
                 <li><a class="procuts-label" title="包邮">包邮</a></li>
                 <li><a class="procuts-label" title="支持花呗">支持花呗</a></li>
                 <li><a class="procuts-label" title="满100减">满100元减</a></li>
             </ul> 
              </div>
              <div class="products-piece">
              <span class="piece" title="">¥${price}</span>
              <span class="count" title="已售99件">已售${sold}件</span>
          </div>
        </div> `
       });
       // 追加到页面中
       let app = document.getElementById('dududu');
       //console.log(app);
       let discount = document.getElementById('discount');
       app.innerHTML = html;
       discount.innerHTML = html;
      }
    })
  }
}
new Goods();