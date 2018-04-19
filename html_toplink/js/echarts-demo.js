// JavaScript Document
// echarts
// create for AgnesXu at 20161115


//环状图
var ring = echarts.init(document.getElementById('ring'));
ring.setOption({
	color: [ "#ff5300","#fe972c", "#71c4ff"],  
     
    legend: { 
        x : 'right',
        data:['内部贷款','银行贷款','委托贷款']
    }, 
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['30%', '50%'], 
            data:[
                {value:335, name:'内部贷款'},
                {value:310, name:'银行贷款'},
                {value:234, name:'委托贷款'}
            ]
        }
    ]
});




//折线图
var line = echarts.init(document.getElementById('line'));
line.setOption({
	color: [ "#fe972c", "#71c4ff"],
	 
	tooltip: {
		trigger: 'axis'
	}, 
	legend: {
		x: 'right',
		data: [  '月存款', '月取款']
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月'
		]
	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
		 
		name: '月存款',
		type: 'line',
		data: [170, 65, 480, 771, 270, 140]
	}, {
		name: '月取款',
		type: 'line',
		data: [260, 355, 370, 161, 560, 30,]
	}]
});



//柱状图
var pillar1 = echarts.init(document.getElementById('pillar1'));
pillar1.setOption({
	color: [ "#fe972c", "#71c4ff"],
	  
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		x: 'right',
		data: [  '月存款', '月取款']
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月' ,'7月', '8月', '9月', '10月', '11月', '12月'
		]
	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
		 
		name: '月存款',
		type: 'bar',
		data: [270, 365, 780, 471, 970, 440, 235, 746, 858, 640, 956, 230]
	}, {
		name: '月取款',
		type: 'bar',
		data: [160, 155, 370, 161, 260, 330, 445, 736, 348, 650, 456, 340]
	}]
});


//地图
var chinamap = echarts.init(document.getElementById('chinamap'));
chinamap.setOption({
    
    tooltip : {
        trigger: 'item'
    }, 
    legend: { 
        x:'right',
        data:['订单量']
    }, 
	color: [ "#fe972c", "#71c4ff"],
    dataRange: {
        min: 0,
        max: 2500,
        x: 'right',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true,
        color: ['#ff5300', '#ffd2bc']
    },  
    series : [
        {
            name: '订单量',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                           color: "rgb(249, 249, 249)"
                        }
                    }
                },
                emphasis:{label:{show:true}}
            },
            data:[
                {name: '北京',value: Math.round(Math.random()*2000)},
                {name: '天津',value: Math.round(Math.random()*2000)},
                {name: '上海',value: Math.round(Math.random()*2000)},
                {name: '重庆',value: Math.round(Math.random()*2000)},
                {name: '河北',value: 0},
                {name: '河南',value: Math.round(Math.random()*2000)},
                {name: '云南',value: 5},
                {name: '辽宁',value: 305},
                {name: '黑龙江',value: Math.round(Math.random()*2000)},
                {name: '湖南',value: 200},
                {name: '安徽',value: Math.round(Math.random()*2000)},
                {name: '山东',value: Math.round(Math.random()*2000)},
                {name: '新疆',value: Math.round(Math.random()*2000)},
                {name: '江苏',value: Math.round(Math.random()*2000)},
                {name: '浙江',value: Math.round(Math.random()*2000)},
                {name: '江西',value: Math.round(Math.random()*2000)},
                {name: '湖北',value: Math.round(Math.random()*2000)},
                {name: '广西',value: Math.round(Math.random()*2000)},
                {name: '甘肃',value: Math.round(Math.random()*2000)},
                {name: '山西',value: Math.round(Math.random()*2000)},
                {name: '内蒙古',value: Math.round(Math.random()*2000)},
                {name: '陕西',value: Math.round(Math.random()*2000)},
                {name: '吉林',value: Math.round(Math.random()*2000)},
                {name: '福建',value: Math.round(Math.random()*2000)},
                {name: '贵州',value: Math.round(Math.random()*2000)},
                {name: '广东',value: Math.round(Math.random()*2000)},
                {name: '青海',value: Math.round(Math.random()*2000)},
                {name: '西藏',value: Math.round(Math.random()*2000)},
                {name: '四川',value: Math.round(Math.random()*2000)},
                {name: '宁夏',value: Math.round(Math.random()*2000)},
                {name: '海南',value: Math.round(Math.random()*2000)},
                {name: '台湾',value: Math.round(Math.random()*2000)},
                {name: '香港',value: Math.round(Math.random()*2000)},
                {name: '澳门',value: Math.round(Math.random()*2000)}
            ]
        }
    ]
});
 
