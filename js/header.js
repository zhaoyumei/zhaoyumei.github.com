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
	
	for(var i=0; i<aApage.length; i++){
		aApage[i].onmouseover = function(){
			startMove(oHover,this.offsetLeft);
			
		}
		aApage[i].onmouseout = function(){
			startMove(oHover,18);
		}
	}
}
