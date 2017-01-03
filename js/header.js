function header(){
	var oResume = document.getElementById('resume');
	oResume.onmouseover = function(){
		oResume.children[0].innerHTML = 'Resume';
		oResume.children[1].innerHTML = '前端工程师';
	};
	oResume.onmouseout = function(){
		oResume.children[0].innerHTML = 'F2E';
		oResume.children[1].innerHTML = '个人简历';
	};
	
	var oNav = document.getElementById('nav');
	var aApage = oNav.getElementsByTagName('a');
	var oHover = oNav.children[0];
	var arr = [];
	for(var i=0; i<aApage.length; i++){
		aApage[i].index = i;
		aApage[i].onmouseover = function(){
			startMove(oHover,this.offsetLeft);
		}
		aApage[i].onclick = function(){	
			arr.push(this.index);
			// window.location.hash = '#page'+(this.index+1);	
			// window.open('#page'+(this.index+1))
		}
		aApage[i].onmouseout = function(){
			tab();	
		}
		function tab(){
			if (arr.length) {
				startMove(oHover,arr[arr.length-1]*(aApage[0].offsetWidth+9)+18);
			}else{
				startMove(oHover,aApage[0].offsetLeft);	
			}
		}
	}
	// var str = window.location.hash;
	// if (str) {
	// 	var arr2 = str.split('=');
	// 	var n = parseInt(arr2[1])-1;
	// 	 aApage[n].style.
	// }
	

}
