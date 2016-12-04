function page2Follow(){
	var oFlower = document.getElementById('flower');
	var aFlower = oFlower.getElementsByTagName('a');
	var aImg =  oFlower.getElementsByTagName('img');
	var aD = oFlower.getElementsByTagName('div');

	for (var i = 0; i < aFlower.length; i++) {			
		(function(i){
			var cx =oFlower.offsetLeft + aFlower[i].offsetLeft + aFlower[i].offsetWidth/2;
			var cy =oFlower.offsetTop + aFlower[i].offsetTop + aFlower[i].offsetHeight/2;
			//获取方向 0 1 2 3
			function getDir(ev){
				var ev = ev || event;
				var x = ev.clientX;
				var y = ev.clientY;
				var a = cy-y;
				var b = x-cx;
				//角度
				var deg=a2d(Math.atan2(a,b));
				var dir = Math.round((deg+180)/90)%4;
				return dir ;
			}
			aFlower[i].onmouseenter = function(ev){
				//aImg[i].style.WebkitMask='url(imgflower/bgmask.png)';
				//aImg[i].style.WebkitMaskPosition='center center';
				
				//aImg[i].style.WebkitMask='radial-gradient(rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0.8),rgba(255,255,255,0.4))';
				aD[i].style.color='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
				switch(getDir(ev)){
					case 0:
						aD[i].style.left = -140+'px';
						aD[i].style.top = 0+'px';
					break;
					case 1:
						aD[i].style.left = 0+'px';
						aD[i].style.top = 140+'px';
					break;
					case 2:
						aD[i].style.left =140+'px';
						aD[i].style.top = 0+'px';
					break;
					case 3:
						aD[i].style.left =0+'px';
						aD[i].style.top = -140+'px';
					break;
				}
				move(aD[i],{left:0,top:0})
			};
			aFlower[i].onmouseleave = function(ev){
				aImg[i].style.WebkitMask='';

				switch(getDir(ev)){
					case 0:
						move(aD[i],{left:-140,top:0})
					break;
					case 1:
						move(aD[i],{left:0,top:140})
					break;
					case 2:
						move(aD[i],{left:140,top:0})
					break;
					case 3:
						move(aD[i],{left:0,top:-140})
					break;
				}
			};
		})(i)
	}
}