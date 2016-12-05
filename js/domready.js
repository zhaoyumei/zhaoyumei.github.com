/**
 * Created by Administrator on 2016/9/28.
 */
function domready(fn){
    //document.addEventListener判断是不是ie低版本
    if(document.addEventListener){
        //ie9+ chrome ff高级浏览器 支持DOMContentLoaded
        document.addEventListener('DOMContentLoaded',function(){
            //dom加载完毕
            fn&&fn();
        },false)
    }else{
        //浏览器是ie8以下低版本浏览器
        //自己模拟出来一个资源的加载情况
        document.onreadystatechange=function(){
            //判断当前的资源加载情况
            //如果是完成了 -> complete
            if(document.readyState=='complete'){
                //dom加载完毕
                fn&&fn();
            }
        };
    }
}