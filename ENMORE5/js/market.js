$(function(){
    $('.slDiv #btnSelect').on('click',function(e){  

     if( $(this).css('border-bottom-left-radius')=='0px'){
        $(this).css({'border-bottom':'1px solid #e4e4e4','border-bottom-left-radius':'18px','border-bottom-right-radius':'18px'})
        $(this).siblings('.ulDiv').toggleClass('ulShow');  
     }else{
        $(this).siblings('.ulDiv').toggleClass('ulShow');  
        $(this).css({'border-bottom':'none','border-bottom-left-radius':'0','border-bottom-right-radius':'0'})
     }
        
     e.stopPropagation();
    });  
    $('.slDiv .ulDiv ul li').on('click',function(){  
        var selTxt=$(this).text()+"<i class='iconfont icon-xiala'></i>";  
        $('.slDiv #btnSelect').html(selTxt);  
        $('.ulDiv').removeClass('ulShow');  
        $('.slDiv #btnSelect').css({'border-bottom':'1px solid #e4e4e4','border-bottom-left-radius':'18px','border-bottom-right-radius':'18px'})
    });  
        var myChart = echarts.init(document.getElementById('main1'));



    option1 = {
                tooltip: {
                    trigger: 'axis'
                },

        xAxis: [{
            type: 'category',
            show:false,
            data: ['3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07'],
            axisLine:{
                lineStyle:{
                    color:'#a79b9b',
                }
            }
        }],
                grid:{
                    x:60,
                    y:20,
                    x2:1,
                    y2:10
                },
                yAxis: {
                    type: 'value',
                    min:11000,
                    splitNumber:5,
                    axisLine:{
                        lineStyle:{
                            color:'#a79b9b',
                        }
                    }
                },
                series: [
                    {
                    data: [12500, 13000, 12000, 13500, 11500, 13000, 13500,
                        12500, 13000, 12000, 13500, 11500, 13000, 13500,
                        12500, 13000, 12000, 13500, 11500, 13000, 13500,
                        12500, 13000, 12000, 13500, 11500, 13000, 13500],
                    type: 'line',
                    itemStyle:{
                        normal:{
                            color:'#0178e0'
                        }
                    }
                }]
            };
        myChart.setOption(option1);

        var myChart2 = echarts.init(document.getElementById('main2'));
            option2 = {
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [{
                    type: 'category',
                    data: ['3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                    '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                    '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                    '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07'],
                    axisLine:{
                        lineStyle:{
                            color:'#a79b9b',
                        }
                    }
                },
                    {
                    type : 'category',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data :['3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                    '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                    '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
                    '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07'],
                }
      ],
                grid:{
                        x:60,
                    y:20,
                    x2:1,
                    y2:20,
                    borderColor:'#fff'
                },
                yAxis: {
                    type: 'value',
                    splitNumber:5,
                    axisLine:{
                        lineStyle:{
                            color:'#a79b9b',
                        }
                    }
                },
                series: [{
                    name:' ',
                    data: [8, 9, 7, 6, 5, 7, 9,
                        8, 9, 7, 6, 5, 7, 9,
                        8, 9, 7, 6, 5, 7, 9,
                        8, 9, 7, 6, 5, 7, 9],
                    type: 'bar',
                    barWidth:'14',
                    itemStyle:{
                        normal:{
                            color:'#0178e0'
                        }
                    },
                },
                {
                    name:' ',
                    data: [10,10,10,10,10,10,10,
                        10,10,10,10,10,10,10,
                        10,10,10,10,10,10,10,
                        10,10,10,10,10,10,10,],
                    type: 'bar',
                    barWidth:'14',
                    xAxisIndex:1,
                    itemStyle:{
                        normal:{
                            color:'rgba(155, 155, 155,0.1)'
                        }
                    },
                }]
            };

        myChart2.setOption(option2);
        
        
        var r_index=0;
      $('.icon-youjiantou').click(function(){
        //.css('transform','translateX('+r_index*87+'px)')
        if(r_index<13){
            r_index++
            console.log($(this).siblings('.month_block').children().css('transform','translateX('+ -r_index*87+'px)'))
            console.log(r_index)
        }else{
            r_index=13;
            console.log($(this).siblings('.month_block').children().css('transform','translateX('+ -r_index*87+'px)'))
            console.log(r_index)
        }
      })
      
      $('.icon-zuojiantou').click(function(){
        //.css('transform','translateX('+r_index*87+'px)')
        if(r_index==0){
            r_index=0;
            console.log($(this).siblings('.month_block').children().css('transform','translateX('+ r_index*87+'px)'))
            
        }else{
            r_index--
            console.log($(this).siblings('.month_block').children().css('transform','translateX('+ -r_index*87+'px)'))
        }
      })
      $('.month_div .type1').click(function(e){
        $(this).siblings('div').toggle().parent().css("backgroundColor",'#faf6f8')
        e.stopPropagation()
    })
    $('.title .type1').click(function(e){
        $(this).siblings('div').toggle().parent().css("backgroundColor",'#faf6f8')
        e.stopPropagation()
        console.log($(this).siblings('div'))
    })
    $('.title>div:nth-child(1),.title>div:nth-child(2)').click(function(){
       $(this).addClass('active').siblings().removeClass('active')
        if($(this)[0]==$('.title>div:nth-child(2)')[0]){
            $('.usdmarket').addClass('block')
            $('.rmbmarket').removeClass('block')
        }else{
            $('.rmbmarket').addClass('block')
            $('.usdmarket').removeClass('block')
        }
    })

    $(document).click(function(){
        if($('.ulDiv').css('display')=='block'){
            $('.slDiv #btnSelect').css({'border-bottom':'1px solid #e4e4e4','border-bottom-left-radius':'18px','border-bottom-right-radius':'18px'})
            $('.ulDiv').toggleClass('ulShow');  
        }
        if($('.month_div .type1.active').siblings('div').css('display')=='block'){
            $('.month_div .type1.active').siblings('div').hide()
        }

        if($('.title .type1.active').siblings('div').css('display')=='block'){
            $('.title .type1.active').siblings('div').hide()
        }
    })

    
})