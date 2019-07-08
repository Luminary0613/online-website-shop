//top公告栏
// var t=setInterval(() => {
//     $(".top-l ul").find("li").eq(0).stop().animate({
//         marginTop:"-35px"
//     }).parent().find("li").eq(1).css({
//         display:"block"
//     })
// }, 2000);
class Ajax{
    constructor(){
        this.url="http://localhost/online-website/data/goods.json";
        this.lbox=document.querySelector("#hot .main-l");
        this.oul=document.querySelector(".main-r ul");
        this.init();
    }
    init(){
        var that=this;
        $.ajax({
            url:this.url,
            success:function(res){
                that.res=res;
                console.log(that.res)
                that.display();
            }
        })
    }
    display(){
        var str1 = "";
        str1=`<div class="img">
                <span class="mark">泰国制造</span>
                <img src="${this.res[0].src}"/>
            </div>
            <div class="text">
                <span class="te">${this.res[0].sign}</span>
                <a href="#" class="title">${this.res[0].name}</a>
                <p>${this.res[0].price}</p>
            </div>`;
        this.lbox.innerHTML=str1;
        var str2="";
        for(var i=1;i<this.res.length;i++){
        str2 += `<li>
                    <span class="mark">${this.res[i].mark}</span>
                    <a class="img"><img src="${this.res[i].src}"/></a>
                    <div class="text">
                        <p>
                            <span class="te1">&nbsp;${this.res[i].sign}&nbsp; </span>
                                
                        </p>
                        
                        <a href="#" class="title">${this.res[i].name}</a>
                        <h3>${this.res[i].price}</h3>
                    </div>
                </li>`;
        }
        this.oul.innerHTML = str2;
        // this.addEvent();
        
        
    }
}
new Ajax();

//top选项框
$(".top-r").find(".over").hover(function(){
    $(this).css({
        color:"#fff"
    })
    
},function(){
    $(this).css({
        color:"#d3cacb"
    })
})

$(".dropdown").hover(function(){
    $(this).children("a").css({
        color:"#fff"
    })
    $(this).find("ul").css({
        display:"block"
    }).find("li").hover(function(){
        $(this).find("a").css({
            color:"#b3a078"
        })
    },function(){
        $(this).find("a").css({
            color:"#a69999"
        })
    })
},function(){
    $(this).children("a").css({
        color:"#d3cacb"
    })
    $(this).find("ul").css({
        display:"none"
    })
})

//导航栏


//轮播图
$("#banner .banner1").banner({
    aimg:$(".banner1").find("img"),			//必传
			left:$(".banner1").find("#left"),		//可选,传了有功能，不传没有功能
			right:$(".banner1").find("#right"),		//可选,传了有功能，不传没有功能
            isList:true,			//可选，默认为true
            autoPlay:true,			//可选，默认为true
            delayTime:4000,			//可选，默认为2000
            moveTime:500,			//可选，默认为200
            index:0
})

$(".banner2").banner({
    aimg:$(".banner2").find(".img"),			//必传
			left:$(".banner2").find(".btn-l"),		//可选,传了有功能，不传没有功能
			right:$(".banner2").find(".btn-r"),		//可选,传了有功能，不传没有功能
            isList:false,			//可选，默认为true
            autoPlay:false,			//可选，默认为true
            delayTime:4000,			//可选，默认为2000
            moveTime:500,			//可选，默认为200
            index:0
})

$(".banner2 .img").find("a").hover(function(){
    // console.log($(this));
    $(this).css({
        background:"#f4f1ea",
        boxShadow:"0 0  5px #999"
    })
    if($(this).index()==0){
        $(this).children("img").attr({
            src:"img/new-1-1.png"
        })
    }
    if($(this).index()==1){
        $(this).children("img").attr({
            src:"img/new-2-1.png"
        })
    }
    if($(this).index()==2){
        $(this).children("img").attr({
            src:"img/new-3-1.png"
        })
    }
    if($(this).index()==3){
        $(this).children("img").attr({
            src:"img/new-4-1.png"
        })
    }
    
},function(){
    $(this).css({
        background:"",
        boxShadow:"none"
    })
    if($(this).index()==0){
        $(this).children("img").attr({
            src:"img/new-1.png"
        })
    }
    if($(this).index()==1){
        $(this).children("img").attr({
            src:"img/new-2.png"
        })
    }
    if($(this).index()==2){
        $(this).children("img").attr({
            src:"img/new-3.png"
        })
    }
    if($(this).index()==3){
        $(this).children("img").attr({
            src:"img/new-4.png"
        })
    }
})

//鼠标滑过效果   人气推荐
$("#hot .main-l").find(".img").hover(function(){
    $(this).find("img").stop().animate({
        width:"330px",
       
    },1000)
},function(){
    $(this).find("img").stop().animate({
        width:"320px",
       
    },1000)
})

$("#hot .main-r").find("li").hover(function(){
    $(this).find("img").stop().animate({
        width:"190px",
       
    },1000)
},function(){
    $(this).find("img").stop().animate({
        width:"180px",
       
    },1000)
})

$("#hot .main").find(".title").hover(function(){
    $(this).css({
        color:"#b6a079"
    })
},function(){
    $(this).css({
        color:"#333"
    })
})

$("#hot .margin").children(".title").children("span").click(function(){
    // console.log($(this))
    $(this).addClass("active").siblings().removeClass("active");
    // console.log($(this).index());
    // console.log($("#hot .margin").find(".main").eq($(this).index()));
    $("#hot .margin").find(".main").eq($(this).index()-1).css({
        display:"block"
    }).siblings(".main").css({
        display:"none"
    })
})

//立即抢购按钮 鼠标滑过效果
$("body").find("a.shop").hover(function(){
    console.log($(this))
    $(this).css({
        background: "#df5f5f"
    })
},function(){
    $(this).css({
        background: "#be4141"
    })
})

//福利社 轮播
// $(".banner3").bannerfade({
//     aimg:$(".banner3").find("img"),			//必传
// 			left:$(".banner3").find("#left"),		//可选,传了有功能，不传没有功能
// 			right:$(".banner3").find("#right"),		//可选,传了有功能，不传没有功能
//             isList:true,			//可选，默认为true
//             autoPlay:true,			//可选，默认为true
//             delayTime:4000,			//可选，默认为2000
//             moveTime:500,			//可选，默认为200
//             index:0
// })

//鼠标滑过字体效果
$("body").find(".hover").hover(function(){
    $(this).css({
        color:"#b6a079"
    })
},function(){
    $(this).css({
        color:"#333"
    })
})

//居家生活轮播
$(".banner4").banner({
    aimg:$(".banner4").find("img"),			//必传
			left:$(".banner4").find("#left"),		//可选,传了有功能，不传没有功能
			right:$(".banner4").find("#right"),		//可选,传了有功能，不传没有功能
            isList:true,			//可选，默认为true
            autoPlay:true,			//可选，默认为true
            delayTime:4000,			//可选，默认为2000
            moveTime:500,			//可选，默认为200
            index:0
})

//居家生活鼠标滑过效果
$("#homelife .life-b").find("li").hover(function(){
    // console.log($(this));
    $(this).css({
        background:"#f4f1ea",
        boxShadow:"0 0  5px #999"
    })
    if($(this).index()==0){
        $(this).find("img").attr({
            src:"img/life1-2.png"
        })
    }
    if($(this).index()==1){
        $(this).find("img").attr({
            src:"img/life2-2.png"
        })
    }
    if($(this).index()==2){
        $(this).find("img").attr({
            src:"img/life3-2.jpg"
        })
    }
    if($(this).index()==3){
        $(this).find("img").attr({
            src:"img/life4-2.png"
        })
    }
    
},function(){
    $(this).css({
        background:"",
        boxShadow:"none"
    })
    if($(this).index()==0){
        $(this).find("img").attr({
            src:"img/life1-1.png"
        })
    }
    if($(this).index()==1){
        $(this).find("img").attr({
            src:"img/life2-1.png"
        })
    }
    if($(this).index()==2){
        $(this).find("img").attr({
            src:"img/life3-1.png"
        })
    }
    if($(this).index()==3){
        $(this).find("img").attr({
            src:"img/life4-1.png"
        })
    }
})

//客户服务部分鼠标滑过效果

$("#introduce").find(".box").hover(function(){
    // console.log($(this).index())
    if($(this).index()==1){
        $(this).find("i").css({
            backgroundPosition:"0 -254px"
        }).next().css({
            color:"#b4a078"
        })
        
    }
    if($(this).index()==2){
        $(this).find("i").css({
            backgroundPosition:"0 -61px"
        }).next().css({
            color:"#b4a078"
        })
        
    }
},function(){
    if($(this).index()==1){
        $(this).find("i").css({
            backgroundPosition:"0 -290px"
        }).next().css({
            color:"#333"
        })
        
    }
    if($(this).index()==2){
        $(this).find("i").css({
            backgroundPosition:"0 -98px"
        }).next().css({
            color:"#333"
        })
        
    }
})
//foot底部鼠标滑过
$(".foot-b p").find("a").hover(function(){
    $(this).css({
        color:"#fff"
    })
},function(){
    $(this).css({
        color:"#999"
    })
})

//三级菜单
$("nav").find(".list").hover(function(){
    // console.log(1)
    console.log($(this).index())
    // console.log($("nav").find(".menu").eq($(this).index()))
    $("nav").find(".menu").eq($(this).index()-1).css({
        display:"block"
    }).siblings(".menu").css({
        display:"none"
    })
    $(this).find("a").addClass("active").parent("li").not(".first").siblings().find("a").removeClass("active");
    // $(this).addClass("active").siblings().removeClass("active");
},function(){
    $("nav").find(".menu").css({
        display:"none"
    })
})
$("nav").find("menu").hover({

})

//拖拽
// class Drag{
//     constructor(){
//         this.obar=document.querySelector("#register .bar");
// 		this.op=document.querySelector("#register .bar p");
//         this.oi=document.querySelector("#register .bar i");
//         this.otxt=document.querySelector("#register .bar .txt")
//         this.addEvent();
//     }
//     addEvent(){
//         var that=this;
//         this.oi.onmousedown = function(eve){
// 	        var e = eve || window.event;
//             var x = e.offsetX;
//             var those=that;
// 	        document.onmousemove = function(eve){
// 	            var e = eve || window.event;
// 	            var l = e.clientX - x - those.obar.offsetLeft;
// 	            if(l<=0) l=0;
// 	            if(l>those.obar.offsetWidth - those.oi.offsetWidth){
// 	               l = those.obar.offsetWidth - those.oi.offsetWidth;
//                    those.otxt.innerHTML="验证成功";
// 	               those.otxt.style.color="#fff";
	               
	                
// 	            }
// 	            if(l!=those.obar.offsetWidth - those.oi.offsetWidth){
// 	            	those.otxt.innerHTML="请按住滑块，拖动到最右边";
// 	            	those.otxt.style.color="#000";
	            	
// 	            }
// 	            those.oi.style.left = l + "px";
// 	            those.op.style.width = l+20 + "px";
	            
// 	        }
// 	        document.onmouseup = function(){
// 	            document.onmousemove = null;
// 	            document.onmouseup = null;
// 	        }
// 	    }
//     }
// }
// new Drag();
// var obar=document.querySelector("#register .bar");
// var op=document.querySelector("#register .bar p");
// var oi=document.querySelector("#register .bar i");
// var otxt=document.querySelector("#register .bar .txt");
// var ospan=document.querySelector("#register .bar span");

// oi.onmousedown = function(eve){
//     var e = eve || window.event;
//     var x = e.offsetX;
//     document.onmousemove = function(eve){
//         var e = eve || window.event;
//         var l = e.clientX - x - obar.offsetLeft;
//         if(l<=0) l=0;
//         if(l>obar.offsetWidth - oi.offsetWidth){
//             l = obar.offsetWidth - oi.offsetWidth;
//            otxt.innerHTML="验证成功";
//            otxt.style.color="#fff";
            
//         }
//         if(l!=obar.offsetWidth - oi.offsetWidth){
//             otxt.innerHTML="请按住滑块，拖动到最右边";
//             otxt.style.color="#000";
//         }
//         oi.style.left = l + "px";
//         op.style.width = l + 20 + "px";
        
//     }
//     document.onmouseup = function(){
//         document.onmousemove = null;
//         document.onmouseup = null;
//     }
// }

$("#register").find("i").mousedown(function(eve){
    // console.log($(this))
    var e=eve||window.event;
    var x=e.offsetX;
    // console.log(1);
    $(document).mousemove(function(eve){
        var e=eve||window.event;
        // console.log(1);
        console.log($("#register .bar").offset().left);
        // var l = e.clientX - x - $("#register .bar").offset().left;
    })
})

$(".top-r").find(".register").click(function(){
    $("#register").fadeIn(300);
    $("#zhezhao").css({
        display:"block"
    })
})
$("#register").find(".close").click(function(){
    $("#register").fadeOut(300);
    $("#zhezhao").css({
        display:"none"
    })
})
