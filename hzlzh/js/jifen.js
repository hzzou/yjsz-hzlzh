$(function (){
    jifen.app.back();
    jifen.app.init();
    jifen.app.tab_1();
});

var jifen = {};

jifen.app = {};

jifen.app.back = function (){
    $('header .left').on('touchstart', function (){
		if(window.document.referrer==""||window.document.referrer==window.location.href){  
    		window.location.href="{dede:type}[field:typelink /]{/dede:type}";  
		}
		else{
    		window.location.href=window.document.referrer;  
		}
	});
};
jifen.app.init = function (){
    //此处用首页的session
    var s = window.localStorage;
    var m  = JSON.parse(s.getItem('key'));
    var m_1  = JSON.parse(s.getItem('key_1'));
    console.log(m,'\n',m_1);

    //此处发ajax，并且申请十条数据
    var k = [
        [{'yu':200.13},
        {'ke':123.23}],
        [{'yu':201.43},
         {'ke':124.23}]
    ]
    var l = [
        [{  'name':'铜元转金元',
            'cash':33.55,
            'remain':23.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':31.55,
            'remain':24.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-01-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':43.55,
            'remain':53.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':33.55,
            'remain':23.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':33.55,
            'remain':23.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':13.55,
            'remain':33.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-03-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':31.55,
            'remain':23.15,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-01-15 13:21'
        }],
        [{  'name':'铜元转金元',
            'cash':13.55,
            'remain':13.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-15 12:21'
        }],
        [{  'name':'铜元转金元',
            'cash':13.55,
            'remain':13.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-15 17:21'
        }],
        [{  'name':'铜元转金元',
            'cash':13.55,
            'remain':23.85,
            'explain':'签到获得昨天的转换金元',
            'time':'2017-02-18 17:21'
        }]
    ];
    s.setItem('key_2', JSON.stringify(k));
    s.setItem('key_3', JSON.stringify(l));
    var k_2 = JSON.parse(s.getItem('key_2'));
    var k_3 = JSON.parse(s.getItem('key_3'));

    console.log(k_2[0][0].yu);
    console.log(k_2[0][1].ke);

    console.log(k_3);
    console.log(k_3[0][0].name);
    console.log(k_3[9][0].name);
    $(window).ready(function (){
        $('header .id').html(m[2].id);
        $('.sec_2 .jin_1 .total').html(m_1[0].g);
        $('.sec_2 .jin_1 .remain').html(k_2[0][0].yu);
        $('.sec_2 .jin_1 .ke').html(k_2[0][1].ke);
        $('.sec_2 .tong_1 .total').html(m_1[1].s);
        $('.sec_2 .jin_1 .total').html(m_1[0].g);
        $('.sec_2 .tong_1 .remain').html(k_2[1][1].yu);
        $('.sec_2 .tong_1 .ke').html(k_2[1][1].ke);
        $('.sec_2 .jin_1 .list_2').html(function (){
            for(var i=0;i<k_3.length;i++){
                $(this).append('<li class="li_1"><ul class="list_3"><li><span class="type">收支名称:</span><span class="type_1">'+k_3[i][0].name+'</span></li><li><span class="cash">收支金额:</span><span class="cash_1">'+k_3[i][0].cash+'</span></li><li><span class="re">当前余额:</span><span class="re_1">'+k_3[i][0].remain+'</span></li><li><span class="explain">简单说明:</span><span class="explain_1">'+k_3[i][0].explain+'</span></li><li><span class="time">收支时间:</span><span class="time_1">'+k_3[i][0].time+'</span></li></ul></li>');
            }
        });
        $('.sec_2 .tong_1 .list_2').html(function (){
            for(var i=0;i<k_3.length;i++){
                $(this).append('<li class="li_1"><ul class="list_3"><li><span class="type">收支名称:</span><span class="type_1">'+k_3[i][0].name+'</span></li><li><span class="cash">收支金额:</span><span class="cash_1">'+k_3[i][0].cash+'</span></li><li><span class="re">当前余额:</span><span class="re_1">'+k_3[i][0].remain+'</span></li><li><span class="explain">简单说明:</span><span class="explain_1">'+k_3[i][0].explain+'</span></li><li><span class="time">收支时间:</span><span class="time_1">'+k_3[i][0].time+'</span></li></ul></li>');
            }
        });
    });
};
jifen.app.tab_1 = function (){
    $('.sec_2 .list_1 .jin').on('touchstart', function (){
        $(this).addClass('active').siblings().removeClass('active');
        $('.jin_1').css('display','block');
        $('.tong_1').css('display','none');
        $('.yin_1').css('display','none');
    });
    $('.sec_2 .list_1 .tong').on('touchstart', function (){
        $(this).addClass('active').siblings().removeClass('active');
        $('.jin_1').css('display','none');
        $('.yin_1').css('display','none');
        $('.tong_1').css('display','block');
    });
    $('.sec_2 .list_1 .yin').on('touchstart', function (){
        $(this).addClass('active').siblings().removeClass('active');
        $('.jin_1').css('display','none');
        $('.yin_1').css('display','block');
        $('.tong_1').css('display','none');
    });
};


