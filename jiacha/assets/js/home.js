/**
 * Created by tuyao on 2018/2/28.
 */
var myChart1 = echarts.init(document.getElementById("chartMain1"));
var myChart2 = echarts.init(document.getElementById("chartMain2"));

$(".combine-list").on("click","li",function()
{
    $(".combine-list li").removeClass("active");
    $(this).addClass("active");

});


//添加组合
$("#addCombine").click(function()
{

    $("#addCombineModal").show();
    $(".shadow").show();

});

//修改组合
$(".combine-list").on("click",".icon-bianji",function()
{

    $("#editCombineModal").show();
    $(".shadow").show();

});

//删除组合
$(".combine-list").on("click",".icon-shanchu",function()
{

    var $that=$(this);

    layer.confirm("是否删除该组合？",function(index)
    {
        $that.parent().parent().remove();
        layer.close(index);
    });

});


$("#addWarningValue").click(function()
{

    layer.open( {
        content:'警示价：<input id="warningValue" style="padding:3px 10px;" type="text" />',
        area:['400px', 'auto'],
        title:'增加警示价',
        btn: ['确定'],
        yes:function(index)
        {

            $(".chart-col-right-list").append(' <li><span class="warning-value"><span>9500</span>元</span><i class="icon iconfont icon-close"></i></li>');

            layer.close(index);

        }
    });


});

//关闭警告值浮层
$("#closeCol").click(function()
{

    $(".chart-col-right").hide();

});


$("#addWarningValueBtn").click(function()
{

    $(".chart-col-right").show();

});


$(".chart-col-right-list").on("click",".icon-close",function()
{
    var $that=$(this);

    layer.confirm("是否删除该警告值？",function(index)
    {
        $that.parent().remove();
        layer.close(index);
    });

});


var series1=[{
    type: 'line',

            data: [820, 932, 920, 934, 1290, 1330, 1320,1340,1350,1360,1370,1500,1600,1700,1800,1820,1830,1840,1860,1900,1920,1930,
        1950,2000,2100,1900,1850,1800,1760,1750,1740,1730,1720,1700,1660,1650,1600,1500,1450,1440,1430,1420,1400,1300,1200,1100,1000,980,970,960,920,900,800,700,600,500]
}
];

var markLine1=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: 'max',
            yAxis: 2400
        },
        {
            name: 'min',
            yAxis: 800
        }
    ]
};

var markLine2=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: 'max',
            yAxis: 2000
        },
        {
            name: 'min',
            yAxis: 1000
        }
    ]
};

var markLine3=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: 'max',
            yAxis: 1800
        },
        {
            name: 'min',
            yAxis: 1200
        }
    ]
};




var markLine4=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: '2008年均线',
            yAxis: 800
        }]
};


var markLine11=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: 'max',
            yAxis: 55
        },
        {
            name: 'min',
            yAxis: 15
        }
    ]
};

var markLine12=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: 'max',
            yAxis: 40
        },
        {
            name: 'min',
            yAxis: 25
        }
    ]
};

var markLine13=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: 'max',
            yAxis: 35
        },
        {
            name: 'min',
            yAxis: 30
        }
    ]
};


var markLine14=  {
    itemStyle: {
        normal: { lineStyle: { type: 'solid', color:'#4796fa' },label: { show: true } }
    },
    data: [
        {
            name: '2008年均线',
            yAxis: 50
        }]
};


var option1 = {
    title: {
        text: ' 苯乙烯-乙二醇 价差图',
        x:"center"
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        left: 100,
        right: 80
    }],
    calculable : true,
    xAxis: {
        type: 'category',
        boundaryGap : false,
        data: ["9:00", "9:05", "9:10", "9:15", "9:20", "9:25", "9:30", "9:35", "9:40", "9:45", "9:50", "9:55",
            "10:00","10:05", "10:10", "10:15", "10:20", "10:25", "10:30", "10:35", "10:40", "10:45", "10:50", "10:55",
            "11:00","11:05", "11:10", "11:15", "11:20", "11:25", "11:30",
            "1:00","1:05", "1:10", "1:15", "1:20", "1:25", "1:30", "1:35", "1:40", "1:45", "1:50", "1:55",
            "2:00","2:05", "2:10", "2:15", "2:20", "2:25", "2:30", "2:35", "2:40", "2:45", "2:50", "2:55","3:00"]
    },
    yAxis: {
        type: 'value'
    },
    series:series1
};



var series2= [{
    type: 'candlestick',
    itemStyle: {
        normal: {
            color: '#ff3366',
            color0: '#90d96d',
            borderColor: '#ff3366',
            borderColor0: '#90d96d'
        }
    },
    data: [
        [5, 10, 10, 15,15],
        [10, 15, 20, 25,20],
        [12, 16, 10, 20,20],
        [20, 16, 32, 32,20],
        [20, 30, 10, 25,10],

        [30, 25, 30, 35,30],

        [33, 38, 33, 40,30],
        [40, 42, 32, 42,20],
        [40, 30, 10, 35,20],
        [33, 38, 33, 40,30],
        [30, 25, 32, 42,20],
        [20, 25, 10, 35,20],
        [35, 30, 30, 55,30],
        [35, 32, 30, 55,30],

        [33, 38, 33, 40,30],
        [35, 36, 33, 40,30],
        [36, 37, 32, 42,20],
        [38, 39, 33, 40,30],
        [40, 41, 33, 40,30],
        [42, 41, 33, 40,30],
        [42, 44, 32, 42,20],
        [44, 46, 10, 35,20],
        [47, 50, 30, 55,30],
        [51, 55, 30, 55,30],
        [56, 59, 33, 40,30],
        [60, 58, 33, 40,30],
        [58, 57, 33, 40,30],
        [56, 55, 33, 40,30],
        [55, 56, 10, 35,20],
        [50, 48, 30, 55,30],
        [48, 52, 30, 55,30],
        [52, 46, 33, 40,30],
        [46, 47, 33, 40,30],
        [40, 38, 33, 40,30],
        [37, 38, 33, 40,30],
        [36, 35, 10, 35,20],
        [35, 32, 30, 55,30],
        [32, 30, 30, 55,30],
        [28, 26, 33, 40,30],
        [25, 28, 33, 40,30],
        [26, 24, 33, 40,30],
        [24, 22, 33, 40,30],
        [24, 21, 32, 42,20],
        [20, 22, 10, 35,20],
        [18, 20, 33, 40,30],
        [19, 16, 32, 42,20],
        [15, 16, 10, 35,20],
        [18, 20, 30, 55,30],
        [21, 22, 33, 40,30],
        [23, 22, 32, 42,20],
        [16, 20, 32, 42,20],
        [20, 30, 10, 35,20],
        [30, 35, 30, 55,30],
        [33, 38, 33, 40,30],
        [40, 38, 32, 42,20],
        [33, 38, 33, 40,30]
    ]
}
];


var option2 = {
    title: {
        text: ' LDPE薄膜-HDPE拉丝 价差图',
        x:"center"
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable : true,
    xAxis: {
        type: 'category',
        data: ["9:00", "9:05", "9:10", "9:15", "9:20", "9:25", "9:30", "9:35", "9:40", "9:45", "9:50", "9:55",
            "10:00","10:05", "10:10", "10:15", "10:20", "10:25", "10:30", "10:35", "10:40", "10:45", "10:50", "10:55",
            "11:00","11:05", "11:10", "11:15", "11:20", "11:25", "11:30",
            "1:00","1:05", "1:10", "1:15", "1:20", "1:25", "1:30", "1:35", "1:40", "1:45", "1:50", "1:55",
            "2:00","2:05", "2:10", "2:15", "2:20", "2:25", "2:30", "2:35", "2:40", "2:45", "2:50", "2:55","3:00"]
    },
    yAxis: {
        type: 'value',
        scale: true
    },
    dataZoom: [{
        type: 'slider',
        realtime: false,
        start: 20,
        end: 70,
        bottom: 0,
        height: 20,
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '120%'
    }, {
        type: 'inside',
        start: 40,
        end: 70,
        top: 30,
        height: 20
    }],
    grid: [{
        left: 100,
        right: 80,
        top: 110
    }],
    series:series2
};


myChart1.setOption(option1);
myChart2.setOption(option2);

$(window).resize(function()
{
    myChart1.resize();
    myChart2.resize();

});

$("#topTab1 span").click(function()
{

    $("#topTab1 span").removeClass("active");
    $(this).addClass("active");

    $("#topTab2 span").removeClass("active");

    if($(this).attr("data-type")=="1")
    {
        $("#chartMain1").show();
        $("#chartMain2").hide();
    }
    else{
        $("#chartMain1").hide();
        $("#chartMain2").show();
    }


});

//显示和隐藏警示线
$("#warningValueBtn").click(function()
{

    $(this).toggleClass("active");
    if($(this).hasClass("active"))
    {
        $(this).text("隐藏警示线");
        if($("#topTab1 .active").attr("data-type")=="1") {

                series1[0].markLine = markLine1;
                myChart1.setOption(option1);

        }
        else
        {

            series2[0].markLine=markLine11;
            myChart2.setOption(option2);

        }
    }
    else
    {
        $(this).text("显示警示线");

        if($("#topTab1 .active").attr("data-type")=="1") {

            series1[0].markLine = [];
            myChart1.setOption(option1);

        }
        else
        {

            series2[0].markLine=[];
            myChart2.setOption(option2);

        }


    }

});


$("#topTab2 span").click(function() {

    $("#topTab2 span").removeClass("active");
    $(this).addClass("active");

    if($("#topTab1 .active").attr("data-type")=="1")
    {
        if($(this).attr("data-type")=="1")
        {
            series1[0].markLine=markLine1;
            myChart1.setOption(option1);
        }
        else if($(this).attr("data-type")=="2")
        {
            series1[0].markLine=markLine2;
            myChart1.setOption(option1);
        }

        else if($(this).attr("data-type")=="3")
        {
            series1[0].markLine=markLine3;
            myChart1.setOption(option1);
        }

        else if($(this).attr("data-type")=="4")
        {
            series1[0].markLine=markLine4;
            myChart1.setOption(option1);
        }
    }
    else
    {
        if($(this).attr("data-type")=="1")
        {
            series2[0].markLine=markLine11;
            myChart2.setOption(option2);
        }
        else if($(this).attr("data-type")=="2")
        {
            series2[0].markLine=markLine12;
            myChart2.setOption(option2);
        }

        else if($(this).attr("data-type")=="3")
        {
            series2[0].markLine=markLine13;
            myChart2.setOption(option2);
        }

        else if($(this).attr("data-type")=="4")
        {
            series2[0].markLine=markLine14;
            myChart2.setOption(option2);
        }


    }





});
