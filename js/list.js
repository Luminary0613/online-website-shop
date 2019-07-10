class GoodsList{
    constructor(){
        this.cont = document.querySelector("main .m-b");
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.cont.onclick = function(eve){
            // console.log(1);
            var e = eve || window.event;
            var t = e.target || e.srcElement;
            // console.log(t.className)
            if(t.className == "plus"){
            //    console.log(t)
               t.previousElementSibling.value=t.previousElementSibling.value*1+1;
            }
            if(t.className == "reduce"){
                if((t.nextElementSibling.value*1) > 1){
                    t.nextElementSibling.value=t.nextElementSibling.value*1-1;
                }
    
            }
            if(t.className=="addcar"){
                // 2.获取当前的商品ID
                that.id = t.parentNode.parentNode.getAttribute("index");
                // console.log(t.parentNode.previousElementSibling.children[1].children[1]);
                that.inum=t.parentNode.previousElementSibling.children[1].children[1].value;
                console.log(that.inum);
                console.log(that.id);
                // 3.存localstorage
                that.setData();
            }
        } 
    }
    
    setData(){
        // console.log(this.id);
        // 保存多个商品，数量，一条本地存储
        // 数组中放对象的形式处理数据
        // 每个对象是一个商品
        // 整个数组是一条本地存储
        // [{id:"adsa",num:1},{},{}]

        this.goods = localStorage.getItem("goods");

        if(this.goods){
            // 不是第一次
            this.goods = JSON.parse(this.goods)

            var onoff = true;
            // 之后存
            for(var i=0;i<this.goods.length;i++){
                // 老的
                if(this.goods[i].id == this.id){
                    this.goods[i].num+=this.inum*1;
                    onoff = false;
                }
            }
            // 新的
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:this.inum*1
                })
            }
        }else{
            // 第一次存
            //     直接存
            this.goods = [{
                id:this.id,
                num:this.inum*1
            }];
        }
        
        // 最后将数据设置回去
        localStorage.setItem("goods",JSON.stringify(this.goods))
    }
}

$("main .head").find("a").hover(function(){
    $(this).css({
        borderBottom:"1px solid #333"
    })
},function(){
    $(this).css({
        borderBottom:0
    })
})
