$.fn.tab=function(obj1,obj2,n){
    obj1.removeClass().eq(n).addClass('active');
    obj2.hide().eq(n).slideDown(); 
    //move(obj2.,{top:-this.index*aLi2[0].offsetHeight});
}
var oBox = $('#box');
var oPic = $('#pic');
var oPrev = $('#prev');
var oNext = $('#next');
var aBtn = $('#but').find('input');
var aDiv = $('#pic').find('div');
var iNow = 0;
aBtn.each(function(index){
    $(this).click(function(){
        iNow=index; 
        $(document).tab(aBtn,aDiv,iNow);
        // console.log(iNow);
        // console.log(index);
    })
})
oNext.click(function(){
    iNow++;
    if (iNow==aBtn.length) {
        iNow=0;
    }
    $(document).tab(aBtn,aDiv,iNow);
    // console.log(iNow);
})

oPrev.click(function(){
    iNow--;
    if(iNow==-1){
        iNow=2;
    }
    $(document).tab(aBtn,aDiv,iNow);
    // console.log(iNow);
})

var timer = setInterval(function(){
    iNow++;
    if (iNow==aBtn.length) {
        iNow=0;
    }
    $(document).tab(aBtn,aDiv,iNow);
},1500)
oBox.mouseover(function(){
    clearInterval(timer);
});
oBox.mouseout(function(){
    timer=setInterval(function(){
        iNow++;
        if (iNow==aBtn.length) {
            iNow=0;
        }
        // console.log(iNow+'wo');
        $(document).tab(aBtn,aDiv,iNow);
          
    },1500)
})