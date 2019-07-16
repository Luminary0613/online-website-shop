class Ajax{
    constructor(){
        this.url="http://localhost:8181/data/list.json";
        this.box=document.querySelector("#mainbox ul");
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
        var str="";
        for(var i=0;i<this.res.length;i++){
            str +=`<li>
                        <a href="detail.html?goodsId=${this.res[i].goodsId}"><img src="${this.res[i].src}"/></a>
                        <h2>${this.res[i].name}</h2>
                        <h3>${this.res[i].price}</h3>
                    </li>`
        }
        this.box.innerHTML = str;
        // this.addEvent();


        $("#mainbox ul").find("li").hover(function(){
            // console.log($(this));
            $(this).css({
                background:"#f4f1ea",
                boxShadow:"0 0  5px #999"
            })
            console.log($(this))
            if($(this).index()==1){
                $(this).find("img").attr({
                    src:"img/goodslist2-1.jpg"
                })
            }
            if($(this).index()==4){
                $(this).find("img").attr({
                    src:"img/goodslist5-1.jpg"
                })
            }
            if($(this).index()==8){
                $(this).find("img").attr({
                    src:"img/goodslist9-1.jpg"
                })
            }
            if($(this).index()==9){
                $(this).find("img").attr({
                    src:"img/goodslist10-1.png"
                })
            }

            
        },function(){
            $(this).css({
                background:"",
                boxShadow:"none"
            })
            if($(this).index()==1){
                $(this).find("img").attr({
                    src:"img/goodslist2.png"
                })
            }
            if($(this).index()==4){
                $(this).find("img").attr({
                    src:"img/goodslist5.png"
                })
            }
        
            if($(this).index()==8){
                $(this).find("img").attr({
                    src:"img/goodslist9.png"
                })
            }
            if($(this).index()==9){
                $(this).find("img").attr({
                    src:"img/goodslist10.jpg"
                })
            }
      
        })
        
    }
}
new Ajax();
    