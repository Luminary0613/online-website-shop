(function(){
    "use strict";
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
        this.url="http://localhost:8181/data/goods.json";
        this.url2="http://localhost:8181/data/goods2.json"
        this.lbox=document.querySelector("#hot .main-l");
        console.log(this.lbox);
        this.oul=document.querySelector(".main-r ul");
        this.rlist=document.querySelector("#timeshop .list-r");
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
        $.ajax({
            url:this.url2,
            success:function(res2){
                that.res2=res2;
                console.log(that.res2)
                that.display2();
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
        console.log(this.lbox);

        var str2="";
        for(var i=1;i<this.res.length;i++){
        str2 += `<li>
                    <span class="mark">${this.res[i].mark}</span>
                    <a href="detail.html?goodsId=${this.res[i].goodsId}" class="img"><img src="${this.res[i].src}"/></a>
                    <div class="text">
                        <p>
                            <span class="te1">&nbsp;${this.res[i].sign}&nbsp; </span>
                                
                        </p>
                        
                        <a href="detail.html?goodsId=${this.res[i].goodsId}" class="title">${this.res[i].name}</a>
                        <h3>${this.res[i].price}</h3>
                    </div>
                </li>`;
        }
        this.oul.innerHTML = str2;
        // this.addEvent();

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
        
    }
    display2(){
        var str3="";
        for(var i=0;i<this.res2.length;i++){
        str3 += `<div class="mainbox">
                    <img src="${this.res2[i].src}" class="img"/>
                    <div class="rbox">
                        <h3 class="hover">${this.res2[i].name}</h3>
                        <h4>${this.res2[i].tip}</h4>
                        <div class="stock">
                            <div class="kuang">
                                <p class="bar">
                            </div>
                            <span class="rest">还剩37件</span>
                        </div>
                        <p>限时价<span>${this.res2[i].price}</span><i>${this.res2[i].oldprice}</i></p>
                        <a href="#" class="shop">立即抢购</a>
                    </div>
                </div>`;
        }
        this.rlist.innerHTML = str3;
        // this.addEvent();
        //立即抢购按钮 鼠标滑过效果
        $("body").find("a.shop").hover(function(){
            // console.log($(this))
            $(this).css({
                background: "#df5f5f"
            })
        },function(){
            $(this).css({
                background: "#be4141"
            })
        })
        
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
    // console.log($(this))
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
$(".top-r").find(".login").click(function(){
    $("#login").fadeIn(300);
    $("#zhezhao").css({
        display:"block"
    })
})
$("#login").find(".close").click(function(){
    $("#login").fadeOut(300);
    $("#zhezhao").css({
        display:"none"
    })
})


//间歇文字滑过
$("#top .top-l").find("li").hover(function(){
    $(this).children("a").css({
        color:"#fff"
    })
},function(){
    $(this).children("a").css({
        color:"#b89c5d"
    })
})


})()

//间歇文字轮播
function autoScroll(obj){  
    $(obj).find("ul").animate({  
        marginTop : "-25px"  
    },1000,function(){  
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
    })  
}
$(function(){  
    setInterval('autoScroll("#top .top-l")',3000);
})


//楼层切换
$("#floor").find("dd").click(function(){
    // console.log(1);
//			console.log($(".floor").eq($(this).index()).offset().top);

//			$(document).scrollTop($(".floor").eq($(this).index()).offset().top);
            
            
//			获取点击的索引
            var index = $(this).index();
//			根据索引获取对应的楼层
            var iNowFloor = $(".floor").eq(index-1);
//			计算楼层距离顶部的位置
            var t = iNowFloor.offset().top;
//			将这个位置设置给滚动条
            $("html").stop().animate({
                scrollTop:t
            })
            
 })

 //注册
 class Register{
     constructor(){
         this.ouser=$("#register #phonetxt");
         this.opass=$("#register #passtxt");
         this.otxt=$("#register #testxt");
         this.ochk=$("#register #check");
         this.obtn=$("#register .regist");
         this.otip=$("#register .tip")
         console.log(this.ouser);
         this.addEvent();
         this.tel=this.pas=0
     }
     addEvent(){
        var that=this;
        this.ouser.blur(function(){
            var oureg=/^1[3-9]\d{9}$/;
            if(oureg.test(that.ouser.val())){
                // console.log(oureg.test($(this).val()))
                that.otip.html("手机号√");
                that.tel=1;
            }else{
                that.otip.html("手机格式错误！")
            }
        })
        this.opass.blur(function(){
            var opreg=/^\w{6,12}$/;
            if(opreg.test(that.opass.val())){
                that.pas=1;
                that.otip.html("密码√");
            }else{
                that.otip.html("密码只能是数字字母下划线！")
            }
        })
        this.obtn.click(function(){
            if(that.ochk[0].checked && that.tel && that.pas){
               var obj={
                    user:that.ouser.val(),
                    pass:that.opass.val()
                }
                console.log(obj)
                setCookie(that.ouser.val(),JSON.stringify(obj),{
                    expires:7
                })
                $("#register").fadeOut(300);
                $("#login").fadeIn(300);
            }
        })
        this.ouser.val("");
        this.opass.val("");
        this.otxt.val("");
         
     }
     
 }

new Register();

class Login{
    constructor(){
        this.ouser=$("#login #phonetxt");
        this.opass=$("#login #passtxt");
        this.otxt=$("#login #testxt");
        this.ochk=$("#login #check");
        this.obtn=$("#login .regist");
        this.otip=$("#login .tip")
        this.addEvent();
    }
    addEvent(){
        var that=this;
        this.obtn.click(function(){
            if(getCookie(that.ouser.val())){
                that.loginMsg = JSON.parse(getCookie(that.ouser.val()));
                // console.log(loginMsg)
                if(that.loginMsg.pass==that.opass.val()){
                    $("#login").fadeOut(300);
                    $("#zhezhao").css({
                        display:"none"
                    })
                    $(".top-r").find(".login").html("登录成功");
                    $(".top-r").find(".login").css({
                        color:"#b4a078"
                    })
                }else{
                    that.otip.html("密码错误！")
                }
            }else{
                that.otip.html("该手机号不存在！")
            }
            
        })
            
           
       
    }
   
    
}
new Login();