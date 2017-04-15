$(function (){
    login.app.btn_1();
    login.app.btn_2();
});

var login = {};

login.app = {};
login.ui = {};

var auths={};
login.ui.plus = function(){
	// 获取登录认证通道
	document.addEventListener('plusready',function (){
		plus.oauth.getServices(function(services){
			var service=services[0];
			auths[service.id]=service;
			$('.div_3 .btn_w').attr('id',service.id);
			$('.div_3 .btn_w').on('touchstart', function (){
				login.ui.login_1($('.div_3 .btn_w').attr('id'));
			});	
		
		},function(e){
			outLine("获取登录认证失败："+e.message);
	});
},false);
	
	
	
};
//登录认证
login.ui.login_1 = function (id){
	var auth=auths[id];
	if(auth){
		//var w=null;
		auth.login(function(){
			//w&&w.close();
			//w=null;
			plus.webview.open("../user/user.html");
			//login.ui.userinfo(auth);//调用userinfo函数
		});
	}
};
//获取用户信息
login.ui.userinfo = function (a){
	a.getUserInfo(function(){
		plus.webview.open("../user/user.html");
		
	},function(e){
		plus.nativeUI.alert("获取用户信息失败！",null,"登录");
	});
};

login.app.btn_1 = function (){
    var reg = /^1[0-9]{10}$/;

    $('.div_3 .btn_z').on('touchstart', function (){
        var val = $('.div_1 .tel').val();
        console.log(val);
        var pass = $('.div_2 .pass_1').val();
        console.log(pass);
        if(reg.test(val)){
            $.ajax({
                url:"http://www.baidu.com",
                type:'POST',
                data:{
                    'phone':val,
                    'password':pass
                },
                dataType:'json',
                success:function (d){

                },
                error:function (d){

                }
            });
        }
    });
};
login.app.btn_2 = function (){
	login.ui.plus();
	
};




	