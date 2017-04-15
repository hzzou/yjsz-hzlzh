$(function (){
	hezuo.app.back();
});

var hezuo = {};

hezuo.app = {};

hezuo.app.back = function (){
	$('header .left').on('touchstart', function (){
		window.location.href="user.html";
	});
};