$(function (){
	info.app.back();
	info.app.hide();
	info.app.btn_1();
});

var info = {};

info.app = {};

info.app.back = function (){
	$('header .left').on('touchstart', function (){
		window.location.href = "user.html";
	});
};

info.app.hide = function (){
	var ph1 = $('.sec_2 .ph').text();
	var ph2 = $('.sec_3 .zhang').text();
	
	var ph1_1 = ph1.substr(0,3)+'****'+ph1.substr(7);
	var ph2_2 = ph2.substr(0,3)+'****'+ph2.substr(7);
	
	$('.sec_2 .ph').text(ph1_1);
	$('.sec_3 .zhang').text(ph2_2);
};

info.app.btn_1 = function (){
	$('#ip_1').on('touchstart', function (){
		$('#ip_1').focus(function (){
			$(this).attr('readonly',false);
		});
		$('#ip_1').blur(function (){
			$(this).attr('readonly',true);
			var p1 = $('#ip_1').val();
		});
	});
};
