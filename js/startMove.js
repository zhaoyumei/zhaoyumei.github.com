var iSpeed = 0;
var left = 0;
function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		iSpeed+=(iTarget-obj.offsetLeft)/5;
		iSpeed*=0.7;

		left+=iSpeed;

		obj.style.left = Math.round(left)+'px';

		if(Math.round(iSpeed) == 0 && Math.round(left) == iTarget){
			clearInterval(obj.timer);
		}
		
	},30)
}