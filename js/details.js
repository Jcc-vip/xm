//接收URL中的参数goodsId
//定义个class类
class details {
    static id;
  constructor(){
    details.id = details.getUrlParam('goodsId');
    details.detailed()
    //  addCart();
   
  }
  static getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);
     //匹配目标参数
    //  console.log(r);
    if(r != null) return unescape(r[2]);
    return null; //返回参数值
  }
  //获取数据库的信息
  // 创建一个静态的方法
  static detailed(){
    // 1发送ajax请求
    // console.log(details.id);
    axios.get('http://localhost/xm/server/xq.php?id='+ details.id).then(
      res=>{
        let { meta,data} = JSON.parse(res);
       // console.log(data);
        // 判断请求状态
        if(meta.status == 200){
              let{
               id,bt,price,brand,time,t1,t2,t3,t4,p1,p2,vip
                } = data;
                //console.log(ele);
               let html = `<div class="products-show-box-title">
                <ul>
                    <li><a href="">首页</a></li>
                    <li>-</li>
                    <li><a href="">分类</a></li>
                    <li>-</li>
                    <li><a class="active-title">${bt}</a></li>
            
                </ul>
            
            </div>
                <div class="products-show-box-mid">
            <div class="products-img">
                <div id="outBox">
                    <div class="leftBox">
                        <div class="normalBox w">
                            <div class="w" id="n"><img src="${t1}" style="width:450px;height:450px; "></div>
                            <div class="w"><img src="${t2}" style="width:450px;height:450px; "></div>
                            <div class="w"><img src="${t3}" style="width:450px;height:450px; "></div>
                            <div class="w"><img src="${t4}" style="width:450px;height:450px; "></div>
                            <div class="w"><img src="${t1}" style="width:450px;height:450px; "></div>
                            <div class="moveBox"></div>
                        </div>
                        <div class="botBox">
                            <ul>
                                <li class="bord"><img src="${t1}" style="width:54px;height: 54px; "></li>
                                <li><img src="${t2}"style="width:54px;height: 54px; "></li>
                                <li><img src="${t3}"style="width:54px;height: 54px; "></li>
                                <li><img src="${t4}"style="width:54px;height: 54px; "></li>
                                <li><img src="${t1}"style="width:54px;height: 54px; "></li>
                            </ul>
                        </div>
                    </div>
                    <div class="magBox">
                        <ul>
                            <li class="m"><img src="${t1}" style=""></li>
                            <li><img src="${t2}" ></li>
                            <li><img src="${t3}" ></li>
                            <li><img src="${t4}" ></li>
                            <li><img src="${t1}" ></li>
                        </ul>
                    </div>
                </div>
            
            </div>
            
                    <div class="products-box-mid-content">
                        <h1 style="font-size: 16px;">${bt}</h1>
                        <ul class="ul-box">
                            <li>
                                <table width="490" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td width="65" height="40"><div align="center">官网价格：</div></td>
                                    <td width="347" class="price" style="text-decoration:line-through;color: #666666;">￥${price}</td>
                                </tr>
                                    <tr>
                                        <td width="65" height="40"><div align="center">VIP价格：</div></td>
                                        <td width="347" class="price">￥${vip}</td>
                                    </tr>
                                <tr>
                                    <td height="40" width="65"><div align="center">上架时间：</div></td>
                                    <td class="time">${time}</td>
                                </tr>
                                <tr>
                                    <td height="40" width="65"><div align="center">品牌：</div></td>
                                    <td class="time">${brand}</td>
                                </tr>
                            </table>
                            </li>
                            <li>
                                <ul class="statistics">
                                    <li>月销量<span class="count">99</span>+</li>
                                    
                                </ul>
                            </li>
                            <li>
                                <table width="490" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="65" height="40"><div align="center">规格：</div></td>
                                        <td width="347" class="price">
                                            <ul class="statistics2">
                                            <li><label><input name="size" type="radio" value="" />64G</label></li>
                                                <li><label><input name="size" type="radio" value="" />128G</label></li>
                                                <li><label><input name="size" type="radio" value="" />256G </label></li>
                                        </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="40" width="65"><div align="center">颜色：</div></td>
                                        <td class="time">
                                            <ul class="statistics2">
                            <li><label><input name="color" type="radio" value="" />黄色</label></li>
                            <li><label><input name="color" type="radio" value="" />橙色</label></li>
                            <li><label><input name="color" type="radio" value="" />红色</label></li>
                                            </ul></td>
                                    </tr>
                                    <tr>
                                        <td height="40" width="65"><div align="center">数量：</div></td>
                                        <td class="time">
                                         <button id="jian">-</button>&nbsp;
                                         <input type="text" value="1" id="num" class="kucun">&nbsp;
                                         <button id="jia">+</button>&nbsp;库存：999+件</td>
                                    </tr>
                                </table>
                            </li>
                            <li>
                                <table width="490" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="65" height="35"><div align="right">发货地：</div></td>
                                        <td width="404">上海市宝山区</td>
                                    </tr>
                                    <tr>
                                        <td width="75" height="35"><div align="right">支付方式：</div></td>
                                        <td width="404">货到付款&nbsp;|&nbsp;微信支付&nbsp;|&nbsp;支付宝&nbsp;|&nbsp;PY</td>
                                    </tr>
                                </table>
            
                            </li>
                            <li>
                                <button type="submit" class="buy"><a href="cart.html" style="color: white;" >立即购买</a></button>
                                <button type="submit" class="buy" id="join">加入购物车</button>
                            </li>
            </ul>
            
            
                    </div>
            
                    <div class="products-shop-box">
            <ul class="shop-title">2010千峰班
                <li>公司代码：657265425625637632</li>
                <li>保证金：9999999￥</li>
                <li>联系人：贾大大</li>
                <li>邮件：57529315@qq.com</li>
                <li>所在地：上海</li>
                <li>地址：上海市宝山区吴淞街道同济支路上铺</li>
                <li>店铺等级：<img src="images/xingxing.png" alt="" width="20" height="20" style="vertical-align: middle;"></li>
                <li><button><a href="">进入店铺</a></button><button><a href="">收藏店铺</a></button></li>
            </ul>
            
                    </div>
            
                </div>
            
            
                <div class="goods-detail-box">
            <div class="detail-left">
            <div class="detail-title">
                <ul>
                    <li id="two1" onmouseover="setContentTab(&#39;two&#39;,1,3)" class="active">商品详情</li>
                    <li id="two2" onmouseover="setContentTab(&#39;two&#39;,2,3)">商品评价（9999）</li>
                    <li id="two3" onmouseover="setContentTab(&#39;two&#39;,3,3)">成交记录（9999）</li>
                </ul>
            
            </div>
            
                <div class="detail" id="con_two_1">
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭建课
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭建课
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭建课
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭建课
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭建课
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭建课
                    该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓该商品参与了公益宝贝计划，卖家承诺每笔成交将为壹乐园计划捐赠0.02元。该商品已累积捐赠24560笔。 善款用途简介：基于游戏教育在儿童成长中的重要性，壹基金设立了“壹乐园计划”，帮助提供滑梯、攀爬架、跷跷板、秋千、乒乓球桌等，为灾后及贫困地区的孩子们搭
                </div>
                <div class="detail2" id="con_two_2">
                    <table width="978" border="0" cellpadding="0" cellspacing="0" class="pinglun" >
                        <tr bgcolor="#fafafa">
                            <td width="86" height="80"><div align="center" style="font-size: 14px;">张三</div></td>
                            <td width="404" style="font-size: 14px;">${p1}</td>
                            <td width="404"><div align="center" style="font-size: 14px;color: #666666;">2013-01-13 15:06</div></td>
                        </tr>
                        <tr bgcolor="#fafafa">
                            <td width="86" height="80"><div align="center" style="font-size: 14px;">张三</div></td>
                            <td width="404" style="font-size: 14px;">${p2}</td>
                            <td width="404"><div align="center" style="font-size: 14px;color: #666666;">2013-01-13 15:06</div></td>
                        </tr>
                        <tr bgcolor="#fafafa">
                            <td width="86" height="80"><div align="center" style="font-size: 14px;">张三</div></td>
                            <td width="404" style="font-size: 14px;">这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦这里是评论内容哦</td>
                            <td width="404"><div align="center" style="font-size: 14px;color: #666666;">2013-01-13 15:06</div></td>
                        </tr>
                    </table>
                    <div class="detail-page">
                        <ul>
                            <li><a href="">上一页</a></li>
                            <li><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">下一页</a></li>
            
                        </ul>
                    </div>
            
            
                </div>
            
                <div class="detail3" id="con_two_3">
                    <div class="detail3-title">
                    <ul>
                        <li>买家</li>
                        <li>产品属性</li>
                        <li>产品数量</li>
                        <li>成交时间</li>
                    </ul>
                    </div>
            
                    <div class="detail3-order">
                        <ul>
            
                            <li>张三</li>
                            <li>颜色：白色<br/>规格:M</li>
                            <li>10</li>
                            <li>2020-5-14</li>
            
                        </ul>
                    </div>
            
                    <div class="detail3-order">
                        <ul>
            
                            <li>张三</li>
                            <li>颜色：白色<br/>规格:M</li>
                            <li>10</li>
                            <li>2020-5-14</li>
            
                        </ul>
                    </div>
            
                    <div class="detail3-order">
                        <ul>
            
                            <li>张三</li>
                            <li>颜色：白色<br/>规格:M</li>
                            <li>10</li>
                            <li>2020-5-14</li>
            
                        </ul>
                    </div>
            
                    <div class="detail3-order">
                        <ul>
            
                            <li>张三</li>
                            <li>颜色：白色<br/>规格:M</li>
                            <li>10</li>
                            <li>2020-5-14</li>
            
                        </ul>
                    </div>
            
                    <div class="detail-page">
                        <ul>
                            <li><a href="">上一页</a></li>
                            <li><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">下一页</a></li>
            
                        </ul>
                    </div>
            
                </div>
            
            
            
            
            </div>
                    <div class="detail-right">
                        <div class="detail-right-title">
                            <span style="padding-left: 10px;">店铺热销产品</span>
                            <span style="float: right;padding-right: 10px;"><a href="">更多</a></span>
            
            
                        </div>
                        <ul>
                            <li><a href=""><img src="images/small1.jpg" alt="" width="60"height="60"></a><div class="detail-right-hot"><h3><a href="">iphone11-64GB</h3></a><p style="text-decoration:line-through;font-size: 14px;color: #666666;font-weight: normal;">￥5499.00</p><p>￥5199.00</p></div></li>
                            <li><a href=""><img src="images/small1.jpg" alt="" width="60"height="60"></a><div class="detail-right-hot"><h3>iphone11-64GB</h3><p style="text-decoration:line-through;font-size: 14px;color: #666666;font-weight: normal;">￥5499.00</p><p>￥5199.00</p></div></li>
                            <li><a href=""><img src="images/small1.jpg" alt="" width="60"height="60"></a><div class="detail-right-hot"><h3>iphone11-64GB</h3><p style="text-decoration:line-through;font-size: 14px;color: #666666;font-weight: normal;">￥5499.00</p><p>￥5199.00</p></div></li>
                            <li><a href=""><img src="images/small1.jpg" alt="" width="60"height="60"></a><div class="detail-right-hot"><h3>iphone11-64GB</h3><p style="text-decoration:line-through;font-size: 14px;color: #666666;font-weight: normal;">￥5499.00</p><p>￥5199.00</p></div></li>
                            <li><a href=""><img src="images/small1.jpg" alt="" width="60"height="60"></a><div class="detail-right-hot"><h3>iphone11-64GB</h3><p style="text-decoration:line-through;font-size: 14px;color: #666666;font-weight: normal;">￥5499.00</p><p>￥5199.00</p></div></li>
                        </ul>
            
            
                    </div>
            
                </div>`
            
            // 追加到页面中
            let xq = document.getElementById('products-show-box');
            xq.innerHTML = html;
        }
      })
    }
  
}
// console.log(id);
new details();


//库存的加减
window.onload = function(){
    // console.log(yy);
    var num_jia = document.getElementById('jia');
    var num_jian = document.getElementById('jian');
    var num_input = document.getElementById('num');
    // 库存加
    num_jia.onclick = function(){
     num_input.value = parseInt(num_input.value)+1;
    }
    // 库存的减
    num_jian.onclick = function(){
        if(num_input.value <= 0 ){
            num_input.value = 0;
        }else{
            num_input.value = parseInt(num_input.value)-1;
        }
    }

    $(function () {
        var sdBoxW = $('.moveBox').css('width');
        sdBoxW = parseInt(sdBoxW);//移动层的宽度
        var magBoxW = $('.magBox').css('width');
        magBoxW = parseInt(magBoxW);//图片放大层的宽度
        var normalBoxW = $('.normalBox').css('width');
        normalBoxW = parseInt(normalBoxW);//事件绑定层的宽度
        var num = 0;//存放下标
        //找出放大图片的比例(核心)
        var scale = magBoxW / sdBoxW;
        //移入normalBox盒子
        $('.normalBox').hover(function () {
            $('.moveBox').css('display', 'block');
            $('.magBox').css('display', 'block');
        }, function () {
            $('.moveBox').css('display', 'none');
            $('.magBox').css('display', 'none');
        });
        //3、移入leftBox层
        $('.leftBox').mouseover(function () {
            //给放大的图片和图片层设置宽度；
            $('.magBox ul li img').css('width', scale * normalBoxW + 'px');
            $('.magBox ul li').css({ 'width': scale * normalBoxW + 'px', 'height': scale * normalBoxW + 'px' })
        });
        //4、设置放大倍数
        var n = 1;
        function sty() {
            $('.moveBox').css({ 'width': 200 / n + 'px', 'height': 200 / n + 'px' });
            $('.multiple').html(n);
            scale = magBoxW / (sdBoxW / n);
        }
        $('.btn1').click(function () {
            n++;
            sty()
        });
        $('.btn2').click(function () {
            if (n == 1) {
                return;
            } else {
                n--;
                sty()
            }
        });
        //1、移入缩小图关联
        $('.botBox ul li').attr('index', function (i, e) {
            return i;
        });
        $('.botBox ul li').mouseover(function () {
            if ($(this).attr('class') == 'bord') {
                return;//跳过第一个
            } else {
                $(this).attr('class', 'bord').siblings().removeAttr('class');
                var index = $(this).attr('index');
                //联动normal和magBox中的图片
                $('.normalBox .w').eq(index).attr('id', 'n').siblings().removeAttr('id');
                $('.magBox ul li').eq(index).attr('class', 'm').siblings().removeAttr('class');
                num = index;
            }
        });
        //2、鼠标在移动层移动
        $('.normalBox').mousemove(function (e) {
            var offset = $(this).offset();
            var X = e.pageX - offset.left - $('.moveBox').width() / 2;
            var Y = e.pageY - offset.top - $('.moveBox').height() / 2;
            if (X <= 0) {
                X = 0;
            } else if (X > $(this).width() - $('.moveBox').width()) {
                X = $(this).width() - $('.moveBox').width();
            }
            if (Y <= 0) {
                Y = 0;
            } else if (Y > $(this).height() - $('.moveBox').height()) {
                Y = $(this).height() - $('.moveBox').height();
            }
            $('.moveBox').css('left', X + 'px');
            $('.moveBox').css('top', Y + 'px');
            $('.magBox ul li').eq(num).css('left', -X * scale + 'px');
            $('.magBox ul li').eq(num).css('top', -Y * scale + 'px');
        });
        
    });

    // gggggg购物车
  let join = document.getElementById('join');//获取节点
  join.onclick = function ( ) { //点击事件
    // console.log(details.id,num_input.value);
    let num1 = num_input.value-0;//获取商品数量
    let information = localStorage.getItem('cart');//获取商品的信息和id
    if(information){//   判断   如果商品的信息 存在
        information = JSON.parse(information);//将商品的信息和id通过json转换为对象
            information[details.id] = num1;
            console.log(information[details.id]);
            information = JSON.stringify(information);
            localStorage.setItem('cart',information);
        // }
    }else{
        // 判断如果不存在就 获取当前商品的id和数量
        information={[details.id]:num1};
        // 把获取的数据转化为数字串
        information=JSON.stringify(information);
        // 再转化过的值存的到localStorage  
        localStorage.setItem('cart',information);

    }


  }




        
    



   

}

    
   
    