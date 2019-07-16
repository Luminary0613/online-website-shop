class Car{
    constructor(){
        this.b=document.querySelector(".sum i");
        this.tbody=document.querySelector("tbody");
        this.jsBtn=document.querySelector(".buy");
        this.clear=document.querySelector(".delall");
        this.url="http://localhost:8181/data/goods.json";
        this.url2="http://localhost:8181/data/list.json";
        this.init();
        this.addEvent();
    }
    addEvent(){
        // console.log(1);
        var that=this;
        this.tbody.addEventListener("click",function(eve){
            var e = eve || window.event;
            var t=e.target || e.srcElement;
            if(t.className=="del"){
                that.id=t.parentNode.getAttribute("index");
                t.parentNode.remove();
                that.setData(function(i){
                    that.goods.splice(i,1);
                });
            }
        })
        // this.tbody.onclick=function(eve){
        //     console.log(1);
        //     var e = eve || window.event;
        //     var t=e.target || e.srcElement;
        //     if(t.className=="del"){
        //         that.id=t.parentNode.getAttribute("index");
        //         t.parentNode.remove();
        //         that.setData(function(i){
        //             that.goods.splice(i,1);
        //         });
        //     }
        // }
        this.tbody.oninput=function(eve){
            var e = eve || window.event;
            var t=e.target || e.srcElement;
            if(t.className=="changeNum"){
                that.id=t.parentNode.parentNode.parentNode.getAttribute("index");
                that.setData(function(i){
                    that.goods[i].num=t.value;
                });
            }
        }
        this.clear.onclick=function(){
            var str=`<tr>
                        <td colspan="5">目前购物车为空....</td>
                    </tr>`
            that.tbody.innerHTML=str;
            localStorage.clear();
        }
        
        
    }
    setData(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id==this.id){
                callback(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    init(){
        var that=this;
        ajaxGet(this.url,function(res){
			console.log(res);
            that.res1=JSON.parse(res);
            
            ajaxGet(that.url2,function(res){
                console.log(res);
            that.res2=JSON.parse(res);
            that.getData1();
            that.getData2();
            })
        })
        
    }
    getData1(){
        this.goods=localStorage.getItem("goods")?JSON.parse(localStorage.getItem("goods")):[];
        this.display();
        this.check();
    }
    getData2(){
        this.goods=localStorage.getItem("goods")?JSON.parse(localStorage.getItem("goods")):[];
        this.display();
    }
    display(){
        var str="";
        for(var i=0;i<this.res1.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res1[i].goodsId == this.goods[j].id){
                    str+=`<tr index="${this.res1[i].goodsId}">
                            <td class="chose"><label for="chk"><input type="checkbox" id="chk" class="check"/></td>
                            <td class="proInfo">
                                <div class="info">
                                    <img src="${this.res1[i].src}"/>
                                    <div class="info-txt">
                                        <h2>${this.res1[i].name}</h2>
                                        <h3>单盒装(3.3g*4)</h3>
                                    </div>
                                </div>
                            
                            </td>
                            <td class="price"><span>${this.res1[i].price}</span></td>
                            <td class="number">
                                <div class="num">
                                    <input type="number" id="num" class="changeNum" value="${this.goods[j].num}"/>
                                </div>
                            </td>
                            <td class="heji"><span>${this.res1[i].price.slice(1,)*this.goods[j].num}</span></td>
                            <td class="del">删除</td>
                        </tr>`;
                }
            }
        }
        
        var str1="";
        for(var i=0;i<this.res2.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res2[i].goodsId == this.goods[j].id){
                    str+=`<tr index="${this.res2[i].goodsId}">
                            <td class="chose"><label for="chk"><input type="checkbox" id="chk" class="check"/></td>
                            <td class="proInfo">
                                <div class="info">
                                    <img src="${this.res2[i].src}"/>
                                    <div class="info-txt">
                                        <h2>${this.res2[i].name}</h2>
                                        <h3>单盒装(3.3g*4)</h3>
                                    </div>
                                </div>
                            
                            </td>
                            <td class="price"><span>${this.res2[i].price}</span></td>
                            <td class="number">
                                <div class="num">
                                    <input type="number" id="num" class="changeNum" value="${this.goods[j].num}"/>
                                </div>
                            </td>
                            <td class="heji"><span>${this.res2[i].price.slice(1,)*this.goods[j].num}</span></td>
                            <td class="del">删除</td>
                        </tr>`;
                }
            }
        }
        
        this.tbody.innerHTML=str+str1;
        this.achk=document.querySelectorAll("#chk");
        this.chose=document.querySelector(".chose");
        
    }
    check(){
        var that=this;
            this.tbody.addEventListener("click",function(eve){
                
                    var e = eve || window.event;
                    var t=e.target || e.srcElement;
                    if(t.className=="check"){
                        var sum=that.b.innerHTML;
                        console.log(sum);
                        var price=t.parentNode.parentNode.parentNode.children[4].children[0].innerHTML;
                        console.log(price);
                        // console.log(t);
                        // that.id=t.parentNode.parentNode.parentNode.getAttribute("index");
                        if(t.checked){
                                // sum=that.b.innerHTML;
                            sum=parseInt(sum)+parseInt(price);
                            console.log(sum);
                            that.b.innerHTML=sum+"元";
                        }else{
                            sum=parseInt(sum)-parseInt(price);
                            // console.log(sum);
                            that.b.innerHTML=sum+"元";
                        }
                    }
                
            })
    }
}
new Car();