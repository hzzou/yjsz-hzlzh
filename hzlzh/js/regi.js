$(function (){
    regi.app.scaned();
    regi.app.back();
    regi.app.btn();
});

var regi = {};

regi.app = {};

regi.app.scaned = function (t, r, f){
	if(r){
		$('.div_0 .tui').val(r);
	} else{
		$('.div_0 .tui').val('');
	}
}
regi.app.back = function (){
    $('header .left').on('touchstart', function (){
        history.back();
    });
};
regi.app.btn = function (){
    var reg = /^1[0-9]{10}$/;
    $('.div_4 .btn_y').on('touchstart', function (){
        var val = $('.div_1 .tel').val();
        console.log(val);
        if(reg.test(val)){
            $.ajax({
                url:'http://www.baidu.com',
                type:'POST',
                dataType:'json',
                data:{
                    num:val
                },
                success:function (d){

                },
                error:function (d){

                }
            });
        }
    });

}