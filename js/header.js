function header(){
	//头部
	var oResume = document.getElementById('resume');
	oResume.onmouseover = function(){
		oResume.children[0].innerHTML = 'Resume';
		oResume.children[1].innerHTML = '前端工程师';
	};
	oResume.onmouseout = function(){
		oResume.children[0].innerHTML = 'F2E';
		oResume.children[1].innerHTML = '个人简历';
	};
	//导航运动
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
	//度娘搜索  模块化 jsonp
	//c把数据m给视图v
	function jsonToStr(json){
		var arr = [];
		for(var name in json){
			arr.push(name+'='+json[name]);
		}
		var str = arr.join('&');
		return str;
	}
	// url,data,cbName,success
	function jsonp(json){
		json = json || {};
		if(!json.url){
			alert('用法不符合规范');
			return;
		}
		json.data = json.data || {};
		json.cbName = json.cbName || 'cb';

		var fnName = 'show'+Math.random();
		fnName = fnName.replace('.','');
		window[fnName] = function(json2){
			json.success && json.success(json2);
			oH.removeChild(oS);
		}
		// 创建script标签
		var oS = document.createElement('script');
		json.data[json.cbName] = fnName;
		oS.src=json.url+'?'+jsonToStr(json.data);
		var oH = document.getElementsByTagName('head')[0];
		oH.appendChild(oS);
	}
	var oT = document.getElementById('t1');
	var oT2 = document.getElementById('t2');
	var oUl = document.getElementById('ul1');
	var oldValue = '';
	oT.onkeyup = function(ev){
		var oEvent = ev || event;
		if(oEvent.keyCode == 40 || oEvent.keyCode == 38 || oEvent.keyCode == 13){
			return false;
		}
		getData1(oT.value,function(s){
			show(oUl,s);
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].onmouseenter = function(){
					for (var i = 0; i < aLi.length; i++) {
						aLi[i].className = '';
					}
					this.className = 'active';
					oT.value = this.innerHTML;
					this.onclick = function(){
						window.open('https://www.baidu.com/s?wd='+oT.value,'_blank');
					}
				}
			}
			oUl.onmouseleave = function(){
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].className = '';
					oT.value = oldValue;
				}
			}
		});
		oldValue = oT.value;
	}
	oT2.onkeyup = function(ev){
		
		var oEvent = ev || event;
		if(oEvent.keyCode == 40 || oEvent.keyCode == 38 || oEvent.keyCode == 13){
			return false;
		}
		getData2(oT2.value,function(s){
			show(oUl,s);
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].onmouseenter = function(){
					for (var i = 0; i < aLi.length; i++) {
						aLi[i].className = '';
					}
					this.className = 'active';
					oT2.value = this.innerHTML;
					this.onclick = function(){
						window.open('https://www.so.com/s?q='+oT2.value,'_blank');
					}
				}
			}
			oUl.onmouseleave = function(){
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].className = '';
					oT2.value = oldValue;
				}
			}
		});
		oldValue = oT2.value;

	}
	oT2.onfocus = function(){
		oT.value = '';
		iNow = -1;
		getData1(oT2.value,function(s){
			show(oUl,s);
		})
	}

	oT.onfocus = function(){
		oT2.value = '';
		iNow = -1;
		getData2(oT.value,function(s){
			show(oUl,s);
		})
	}

	var aLi = oUl.children;

	var iNow = -1;

	oT.onkeydown = function(ev){
		
		var oEvent = ev || event;
		if(oEvent.keyCode == 40){
			iNow++;
			if (iNow==aLi.length+1) {
				iNow=0;
			}
			if(iNow == aLi.length){
				iNow = -1;
				oT.value = oldValue;
			}
			if(iNow == -1){
				aLi[aLi.length-1].className = '';
				return;
			}
			for(var i=0; i<aLi.length; i++){
				aLi[i].className = '';
			}
			
			aLi[iNow].className = 'active';
			oT.value = aLi[iNow].innerHTML;
		}else if(oEvent.keyCode == 38){
			iNow --;
			if (iNow==-2) {
				iNow=aLi.length-1;
			}
			if(iNow == -1){
				iNow = aLi.length;
				oT.value = oldValue;
			}
			if(iNow == aLi.length){
				aLi[0].className = '';
				return;
			}
			for(var i=0; i<aLi.length; i++){
				aLi[i].className = '';
			}
			aLi[iNow].className = 'active';
			oT.value = aLi[iNow].innerHTML;
		}else if(oEvent.keyCode == 13){
			window.open('https://www.baidu.com/s?wd='+oT.value,'_blank');
		}
	}
	oT2.onkeydown = function(ev){
		var oEvent = ev || event;
		if(oEvent.keyCode == 40){
			iNow++;
			if (iNow==aLi.length+1) {
				iNow=0;
			}
			if(iNow == aLi.length){
				iNow = -1;
				oT2.value = oldValue;
			}
			if(iNow == -1){
				aLi[aLi.length-1].className = '';
				return;
			}
			for(var i=0; i<aLi.length; i++){
				aLi[i].className = '';
			}
			
			aLi[iNow].className = 'active';
			oT2.value = aLi[iNow].innerHTML;
		}else if(oEvent.keyCode == 38){
			iNow --;
			if (iNow==-2) {
				iNow=aLi.length-1;
			}
			if(iNow == -1){
				iNow = aLi.length;
				oT2.value = oldValue;
			}
			if(iNow == aLi.length){
				aLi[0].className = '';
				return;
			}
			for(var i=0; i<aLi.length; i++){
				aLi[i].className = '';
			}
			aLi[iNow].className = 'active';
			oT2.value = aLi[iNow].innerHTML;
		}else if(oEvent.keyCode == 13){
			window.open('https://sug.so.360.cn/suggest?word='+oT2.value,'_blank');
		}
	}
	var oSo1 = document.getElementById('so1');
	var oSo2 = document.getElementById('so2');
	oSo1.onclick = function(){
		window.open('https://www.baidu.com/s?wd='+oT.value,'_blank');
	};
	oSo1.onmouseenter = function(){
		oSo1.style.backgroundColor = '#0667f8';
	}
	oSo1.onmouseleave = function(){
		oSo1.style.backgroundColor = '#3385ff';
	}
	oSo2.onclick = function(){
		window.open('https://www.so.com/s?q='+oT2.value,'_blank');
	};
	oSo2.onmouseenter = function(){
		oSo2.style.backgroundColor = '#0667f8';
	}
	oSo2.onmouseleave = function(){
		oSo2.style.backgroundColor = '#3385ff';
	}
	//数据m
	function getData1(value,fn){
		jsonp({
			url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
			data:{
				wd:value
			},
			success:function(json){
				fn&&fn(json.s)
			}
		})
	}
	function getData2(value,fn){
		jsonp({
			url : 'https://sug.so.360.cn/suggest',
			data : {
				word : value
			},
			cbName : 'callback',
			success:function(json){
				fn && fn(json.s);
			}
		})
	}
	//展示
	function show(oUl,arr){
		oUl.innerHTML = '';
		for (var i = 0; i < arr.length; i++) {
			var oLi = document.createElement('li');
			oLi.innerHTML = arr[i];
			oUl.appendChild(oLi);
		}
	}
	// 雪花飘飘飘飘 
	var oSnow = document.getElementById('snow');
	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;

	var container;

	var particle;

	var camera;
	var scene;
	var renderer;

	var mouseX = 0;
	var mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	var particles = []; 
	var particleImage = new Image();//THREE.ImageUtils.loadTexture( "img/ParticleSmoke.png" );
	particleImage.src = 'images/ParticleSmoke.png'; 


	init();
	function init() {
		container = document.createElement('div');
		oSnow.appendChild(container);

		camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
		camera.position.z = 1000;

		scene = new THREE.Scene();
		scene.add(camera);
			
		renderer = new THREE.CanvasRenderer();
		renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
		var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );
			
		for (var i = 0; i < 500; i++) {

			particle = new Particle3D( material);
			particle.position.x = Math.random() * 2000 - 1000;
			particle.position.y = Math.random() * 2000 - 1000;
			particle.position.z = Math.random() * 2000 - 1000;
			particle.scale.x = particle.scale.y =  1;
			scene.add( particle );
			
			particles.push(particle); 
		}

		container.appendChild( renderer.domElement );


		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		document.addEventListener( 'touchmove', onDocumentTouchMove, false );
		
		setInterval( loop, 1000 / 60 );
		
	}

	function onDocumentMouseMove( event ) {

		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}

	function onDocumentTouchStart( event ) {

		if ( event.touches.length == 1 ) {

			event.preventDefault();

			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;
		}
	}

	function onDocumentTouchMove( event ) {

		if ( event.touches.length == 1 ) {

			event.preventDefault();

			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;
		}
	}

	//

	function loop() {

	for(var i = 0; i<particles.length; i++)
		{

			var particle = particles[i]; 
			particle.updatePhysics(); 

			with(particle.position)
			{
				if(y<-1000) y+=2000; 
				if(x>1000) x-=2000; 
				else if(x<-1000) x+=2000; 
				if(z>1000) z-=2000; 
				else if(z<-1000) z+=2000; 
			}				
		}

		camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
		camera.lookAt(scene.position); 

		renderer.render( scene, camera );

		
	}


}
