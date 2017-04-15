$(function (){
    lian.app.addr_1();
    lian.app.back();
});

var lian = {};

lian.app = {};

lian.app.addr_1 = function (){
    $('#detail').cxSelect({
        url:'cityData.json',
        selects:['province','city','area'],
        emptyStyle:'none'
    });
};

lian.app.back = function (){
	$('header .left').on('touchstart', function (){
		if(window.document.referrer==""||window.document.referrer==window.location.href){  
    		window.location.href="user.html";  
		}
		else{
    		window.location.href=window.document.referrer;  
		}
	});
};