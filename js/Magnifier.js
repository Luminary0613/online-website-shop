// (function(){
//     function Magnifier(){
// //				获取元素
//         this.sBox = document.querySelector(".s_box");
//         this.bBox = document.querySelector(".b_box");
//         this.span = document.querySelector(".s_box span");
//         this.bImg = document.querySelector(".b_box img");
// //				绑定事件
//         this.addEvent()
//     }
//     Magnifier.prototype.init = function(){
// //				右边大图的宽高  除以  右边框的宽高  得到比例
//         var w = this.bImg.offsetWidth / this.bBox.offsetWidth;
//         var h = this.bImg.offsetHeight / this.bBox.offsetHeight;
// //				左边框的宽高  除以  比例  得到  span的宽高
//         this.span.style.width = this.sBox.offsetWidth / w + "px";
//         this.span.style.height = this.sBox.offsetHeight / h + "px";
//     }
//     Magnifier.prototype.addEvent = function(){
//         var that = this;
// //				进入
//         this.sBox.addEventListener("mouseover",function(){
//             that.over()
// //					补充布局:因为元素被display:none了，js获取不到隐藏的元素的尺寸
//             that.init()
//         })
// //				离开
//         this.sBox.addEventListener("mouseout",function(){
//             that.out()
//         })
// //				移动
//         this.sBox.addEventListener("mousemove",function(eve){
//             var e = eve || window.event;
//             that.move(e);
//         })
//     }
//     Magnifier.prototype.over = function(){
//         this.span.style.display = "block";
//         this.bBox.style.display = "block";
//     }
//     Magnifier.prototype.out = function(){
//         this.span.style.display = "none";
//         this.bBox.style.display = "none";
//     }
//     Magnifier.prototype.move = function(e){
// //				span跟随移动
// //				利用尺寸的计算
// //				this.span.style.left = e.clientX - this.span.offsetWidth/2 - this.sBox.offsetLeft + "px";
// //				this.span.style.top = e.clientY - this.span.offsetHeight/2 - this.sBox.offsetTop + "px";
// //				利用布局解决
//         var l = e.offsetX - this.span.offsetWidth/2;
//         var t = e.offsetY - this.span.offsetHeight/2;
        
// //				边界限定
//         if(l<0) l=0;
//         if(t<0) t=0;
//         if(l>this.sBox.offsetWidth - this.span.offsetWidth){
//             l=this.sBox.offsetWidth - this.span.offsetWidth
//         }
//         if(t>this.sBox.offsetHeight - this.span.offsetHeight){
//             t=this.sBox.offsetHeight - this.span.offsetHeight;
//         }
// //				计算比例
//         var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
//         var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
        
// //				让span跟随鼠标
//         this.span.style.left = l + "px";
//         this.span.style.top = t + "px";
        
// //				根据比例移动大图
//         this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
//         this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
//     }


//     onload = function(){
//         new Magnifier();
//     }
// })()