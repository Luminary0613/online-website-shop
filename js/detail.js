$(function(){
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

    //接收URL中的参数booksId
    var id = getUrlParam('goodsId');
    console.log(id);

    $.ajax({
     type:'get',
     url:'http://localhost:8181/data/goods.json',
     success:function(res){
         console.log(res);
         display(res);
         new Magnifier();
         new GoodsList();
     }
    })
    function display(res){
        var str="";
        for(var i=1;i<res.length;i++){
            if(id==res[i].goodsId){
                console.log(id);
                str=`<div class="left">
                        <div class="s_box">
                            <img src="${res[i].src2}"/>
                            <span></span>
                            <p></p>
                        </div>
                        <div class="b_box">
                            <img src="${res[i].src2}"/>
                        </div>
                    </div>
                    <div class="right"  index="${res[i].goodsId}">
                        <span class="new">${res[i].mark}</span>
                        <h2>${res[i].name}</h2>
                        <h3>出游必备，惬意始于足下</h3>
                        <div class="info">
                            <p class="f1"><span class="tou">价格</span><span class="price">${res[i].price}</span></p>
                            <p><span class="tou">购物返</span><span class="det">新用户返回馈金+积分</span></p>
                            <p><span class="tou">配送</span><span class="addr">请选择地址<i></i></span></p>
                            <p><span class="tou">服务</span><a href="#">支持30天无忧退换货·48小时快速退款·满88元免邮费</a></p>
                        </div>
                        <div class="number">
                            <span>数量</span>
                            <div class="change">
                                <input type="button" id="reduce" class="reduce" value="-"/><input type="text" id="num" class="num" value="1"/><input type="button" id="plus" class="plus" value="+"/>
                            </div>
                            
                        </div>
                        <p class="btn">
                            <a href="#" class="buy">立即购买</a>
                            <a href="#" class="addcar">加入购物车</a>
                        </p>
                    </div>`
            }
        }
        $("main .m-b").html(str);
    }
    function Magnifier(){
        //				获取元素
                this.sBox = document.querySelector(".s_box");
                this.bBox = document.querySelector(".b_box");
                this.span = document.querySelector(".s_box span");
                this.bImg = document.querySelector(".b_box img");
        //				绑定事件
                this.addEvent()
            }
            Magnifier.prototype.init = function(){
        //				右边大图的宽高  除以  右边框的宽高  得到比例
                var w = this.bImg.offsetWidth / this.bBox.offsetWidth;
                var h = this.bImg.offsetHeight / this.bBox.offsetHeight;
        //				左边框的宽高  除以  比例  得到  span的宽高
                this.span.style.width = this.sBox.offsetWidth / w + "px";
                this.span.style.height = this.sBox.offsetHeight / h + "px";
            }
            Magnifier.prototype.addEvent = function(){
                var that = this;
        //				进入
                this.sBox.addEventListener("mouseover",function(){
                    that.over()
        //					补充布局:因为元素被display:none了，js获取不到隐藏的元素的尺寸
                    that.init()
                })
        //				离开
                this.sBox.addEventListener("mouseout",function(){
                    that.out()
                })
        //				移动
                this.sBox.addEventListener("mousemove",function(eve){
                    var e = eve || window.event;
                    that.move(e);
                })
            }
            Magnifier.prototype.over = function(){
                this.span.style.display = "block";
                this.bBox.style.display = "block";
            }
            Magnifier.prototype.out = function(){
                this.span.style.display = "none";
                this.bBox.style.display = "none";
            }
            Magnifier.prototype.move = function(e){
        //				span跟随移动
        //				利用尺寸的计算
        //				this.span.style.left = e.clientX - this.span.offsetWidth/2 - this.sBox.offsetLeft + "px";
        //				this.span.style.top = e.clientY - this.span.offsetHeight/2 - this.sBox.offsetTop + "px";
        //				利用布局解决
                var l = e.offsetX - this.span.offsetWidth/2;
                var t = e.offsetY - this.span.offsetHeight/2;
                
        //				边界限定
                if(l<0) l=0;
                if(t<0) t=0;
                if(l>this.sBox.offsetWidth - this.span.offsetWidth){
                    l=this.sBox.offsetWidth - this.span.offsetWidth
                }
                if(t>this.sBox.offsetHeight - this.span.offsetHeight){
                    t=this.sBox.offsetHeight - this.span.offsetHeight;
                }
        //				计算比例
                var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
                var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
                
        //				让span跟随鼠标
                this.span.style.left = l + "px";
                this.span.style.top = t + "px";
                
        //				根据比例移动大图
                this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
                this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
            }

        
})