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
        //oEvent.wheelDelta ff����undefined
        //if(oEvent.wheelDelta){
        //    //if(oEvent.wheelDelta<0){
        //    //    //alert('����');
        //    //    bDown=true;
        //    //}else{
        //    //    //alert('����');
        //    //    bDown=false;
        //    //}
        //    bDown=oEvent.wheelDelta<0;
        //}else{
        //    //if(oEvent.detail>0){
        //    //    //alert('����')
        //    //    bDown=true;
        //    //}else{
        //    //    //alert('����')
        //    //    bDown=false;
        //    //}
        //    bDown=oEvent.detail>0;
        //}
        bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
        //��������
        fn&&fn(bDown);
        //return false �����󶨲���ʹ
        oEvent.preventDefault&&oEvent.preventDefault();
        //��ֹĬ���¼�
        return false;
    }
    if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
        //alert('�ǻ��')
        obj.addEventListener('DOMMouseScroll',wheel,false);
    }else{
        //alert('�����������')
        //obj.onmousewheel=wheel;
        addEvent(obj,'mousewheel',wheel);
    }
}







