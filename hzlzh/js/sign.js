$(function (){
	sign.app.back();
});

var sign = {};

sign.app = {};

sign.app.back = function (){
	$('header .left').on('touchstart', function (){
		window.location.href="user.html";
	});
};