$(function (){
    user.app.info_1();
    user.app.money();
});

var user = {};

user.app = {};

user.app.info_1 = function (){
    var m = [
        {'url':'../img/01.jpg'},
        {'grade':'1'},
        {'id':131425678 },
        {'name':'郭富城'},
        {'rec':'刘德华'}
    ];

    var s = window.localStorage;

    s.setItem('key',JSON.stringify(m));

    var k = JSON.parse(s.getItem('key'));

    console.log(k);

    $(window).ready(function (){
       $('header .touxiang').attr('src', k[0].url);
       $('header .denji').html(function (){
            if(k[1].grade == '1'){
                $(this).html('普通会员');
            }
       });
       $('header .id').html(k[2].id);
       $('header .nicheng').html(k[3].name);
       $('header .tuijian').html(k[4].rec);
    });
};
user.app.money = function (){
    var m = [
        {'g': 123.25 },
        {'s': 234.2 }
    ];

    var s = window.localStorage;

    s.setItem('key_1',JSON.stringify(m));
    var l = JSON.parse(s.getItem('key_1'));
    console.log(l);
    $(window).ready(function (){
        $('.sec_1 .list_1 .jin').html(l[0].g);
        $('.sec_1 .list_1 .tong').html(l[0].s);
    });
};