/**
 * Created by Administrator on 2016/9/28.
 */
function addEvent(obj,sEv,fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv,fn,false);
    }else{
        obj.attachEvent('on'+sEv,fn);
    }
}

function addWheel(obj,fn){
    function wheel(ev){
        var oEvent = ev || event;
        var bDown;
        //oEvent.wheelDelta ff下是undefined
        //if(oEvent.wheelDelta){
        //    //if(oEvent.wheelDelta<0){
        //    //    //alert('往下');
        //    //    bDown=true;
        //    //}else{
        //    //    //alert('往上');
        //    //    bDown=false;
        //    //}
        //    bDown=oEvent.wheelDelta<0;
        //}else{
        //    //if(oEvent.detail>0){
        //    //    //alert('往下')
        //    //    bDown=true;
        //    //}else{
        //    //    //alert('往上')
        //    //    bDown=false;
        //    //}
        //    bDown=oEvent.detail>0;
        //}
        bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
        //处理事情
        fn&&fn(bDown);
        //return false 碰见绑定不好使
        oEvent.preventDefault&&oEvent.preventDefault();
        //阻止默认事件
        return false;
    }
    if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
        //alert('是火狐')
        obj.addEventListener('DOMMouseScroll',wheel,false);
    }else{
        //alert('是其他浏览器')
        //obj.onmousewheel=wheel;
        addEvent(obj,'mousewheel',wheel);
    }
}







