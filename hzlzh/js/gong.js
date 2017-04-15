$(function (){
    gong.app.addr_1();
    gong.app.back();
});

var gong = {};

gong.app = {};

gong.app.addr_1 = function (){

    $('#detail').cxSelect({
        url:'cityData.json',
        selects:['province','city','area'],
        emptyStyle:'none'
    });
};

gong.app.back = function (){
	$('header .left').on('touchstart', function (){
		if(window.document.referrer==""||window.document.referrer==window.location.href){ 
    		window.location.href="user.html";  
		}
		else{
    		window.location.href=window.document.referrer;
		} 
	});
};
