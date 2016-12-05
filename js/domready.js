/**
 * Created by Administrator on 2016/9/28.
 */
function domready(fn){
    //document.addEventListener�ж��ǲ���ie�Ͱ汾
    if(document.addEventListener){
        //ie9+ chrome ff�߼������ ֧��DOMContentLoaded
        document.addEventListener('DOMContentLoaded',function(){
            //dom�������
            fn&&fn();
        },false)
    }else{
        //�������ie8���µͰ汾�����
        //�Լ�ģ�����һ����Դ�ļ������
        document.onreadystatechange=function(){
            //�жϵ�ǰ����Դ�������
            //���������� -> complete
            if(document.readyState=='complete'){
                //dom�������
                fn&&fn();
            }
        };
    }
}