class Cart{
  //静态方法声明在class中
  static checOne;
  static all;
  constructor(){
    //获取全选按钮的id
    Cart.all = document.querySelectorAll('.check-all');
    //console.log(Cart.all);
    Cart.list();
    // 等待商品追加完成
    Cart.checkOne = document.getElementsByClassName('check-one');
    Cart.checkAll();
  }
  /******商品表******/
  static list(){
    //获取商品的id
    let goodsId = JSON.parse(localStorage.getItem('cart'));
   // console.log(goodsId);
    // 后台需要goodsid以字符串形式传递 shr = '1,2,3,5';
    var goodsIdStr = '';
    for(var id in goodsId){
      goodsIdStr += id + ',';
     // console.log(goodsIdStr);
    }
    // 2发送ajax请求， 获取数据
    axios.post('http://localhost/xm/server/cart.php?fn=lst','goodsId='+goodsIdStr).then(
      res =>{
       let{
         meta,
         data
       } = JSON.parse(res);
      // console.log(meta,data);
      //判断请求状态
      if(meta.status == 200){
        let html = '';
        data.forEach(goods =>{
          let {
            id,goodsName,price,t1
          } = goods;
          html += `<tr>
          <td class="checkbox"><input class="check-one check" onclick="Cart.chOne()"  type="checkbox" /></td>
          <td class="cart-goods"><img src="${t1}" alt="" /><span><a href=""
                      class="cart-goods-link">${goodsName}</a></span></td>
          <td class="price">${price}</td>
          <td class="count"><span class="reduce"></span><input class="count-input" type="text"
                  value="${goodsId[id]}" /><span class="add" onclick="Cart.addGoodsNum(this,${id})">+</span></td>
          <td class="subtotal">${(goodsId[id] * price).toFixed(2)}</td>
          <td class="operation"><span class="delete" onclick = "Cart.delGoods(this,${id})">删除</span></td>
      </tr> `;
        })
        //追加到页面中
        let tbody = document.querySelector('tbody');
        tbody.innerHTML = html;
      }
      });
      // console.log(all);
  }

       /*******全选的实现******/
       static checkAll(){
         Cart.all[0].addEventListener('click',Cart.allEvent);
         Cart.all[1].addEventListener('click',Cart.allEvent);
        // console.log(Cart.all[0]);
       }
       //全选事件的方法
       static allEvent(){
         //console.log(this);
         // 获取所有单选按钮,让他跟随全选的状态
         // check-all check 复选框的状态 选中true 否 false
         let check = this.checked;
        // console.log(check);
         // 遍历单选按钮 checkOne 为单选按钮
         Array.from(Cart.checkOne).forEach(ele =>{
          // console.log(ele); 当前选中的tr
          ele.checked = check;
          //console.log(ele.cheched);
         })
         //console.log(Cart.checkOne);
         Cart.all[0].checked = check;
         Cart.all[1].checked = check;
         Cart.goodsCount();
       }
       //单选的操作
       static chOne(){
        // console.log(this);
        let count = 0;
        let goodsLen =Cart.checkOne.length;
       // console.log(Cart.checkOne);
       // console.log(goodsLen);
        // 统计选中状态的个数
        Array.from(Cart.checkOne).forEach(ele =>{
          if(ele.checked ) count++;
        })
        // 判断选中的个数是否等于商品个数
       // 当单选按钮全部的数量等于商品个数就把单选按钮的状态给全选
       let checkSta = false;
       if(goodsLen == count){
        // console.log(goodsLen);
         checkSta = true;
       }
       //设置全选按钮的状态
       Cart.all[0].checked = checkSta;
       Cart.all[1].checked = checkSta;
       Cart.goodsCount();
       }
       /********数量和价格的统计****/
       static goodsCount(){
         let count = 0;
         let price = 0;
         // 1 统计选中的单选按钮对应的商品数量
         Array.from(Cart.checkOne).forEach(ele =>{
           if(ele.checked){
            // console.log(ele);
            // 2 找到数量td的节点
            let trObj = ele.parentNode.parentNode;
            //let quantity = document.getElementById('selectedTotal');
          // console.log(trObj);
          //let total = document.getElementById('priceTotal');
          let goodNum = trObj.getElementsByClassName('count-input')[0].value - 0;
           count += goodNum;
         // console.log(goodNum);

           // 获取小计
           let xj = trObj.getElementsByClassName('subtotal')[0].innerHTML- 0;
           price += xj;
         //  console.log(price);
           }
         })
         // console.log(count,price); // 选中的商品的数量和价格
         let totalObj = document.getElementById('selectedTotal');
         // 获取合计
         let priceObj = document.getElementById('priceTotal');
         totalObj.innerHTML = count;
         priceObj.innerHTML = price.toFixed(2);
       }
       static clickStatus = true;
       /*****商品数量的改变******/
       static addGoodsNum(that,id){
         // 设置延时器,防止过快点击，500ms点一次
         if(!Cart.clickStatus) return;
         Cart.clickStatus = false;
         setTimeout(() =>{
           Cart.clickStatus = true;
         },500);
         //console.log(that);
         // 获取原有的数量
         let numObj = that.previousElementSibling;// 返回上一个列表选项的 HTML 内容：
         let num = numObj.value - 0; // 获取到数量的内容
        //  console.log(that);
        //  console.log(num);
        
        num++;
        numObj.value = num ;
        console.log(num);

       // console.log(num);
        //更新loca中的商品数量
        let cartGoods = JSON.parse(localStorage.getItem('cart'));
        cartGoods[id] = num;
        // console.log(caetGoods[id]);
        // 重新设置local的信息
        localStorage.setItem('cart',JSON.stringify(cartGoods));
        // 更新小计
        let trObj = that.parentNode.parentNode;
        // 获取价格
        let oneP = trObj.getElementsByClassName('price')[0].innerHTML;
        trObj.getElementsByClassName('subtotal')[0].innerHTML=(oneP*num).toFixed(2);
        // 更新数量和统计
        Cart.goodsCount();
       }
       /********删除的实现********/
       static delGoods(that,id){
         // 1 删除tr
         that.parentNode.parentNode.remove();
         // 2更新local
         let cartGoods = JSON.parse(localStorage.getItem('cart'));
         // 3 删除属性
         delete cartGoods[id];
         localStorage.setItem('cart',JSON.stringify(cartGoods));
         // 更新数量和总计
         Cart.goodsCount();
       } 
}
new Cart;