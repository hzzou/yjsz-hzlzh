$(function (){
	ren.app.back();
});

var ren = {};

ren.app = {};

ren.app.back = function (){
	$('header .left').on('touchstart', function (){
		if(window.document.referrer==""||window.document.referrer==window.location.href){  
    		window.location.href="{dede:type}[field:typelink /]{/dede:type}";  
		}
		else{
    		window.location.href=window.document.referrer;  
		}
	});
};