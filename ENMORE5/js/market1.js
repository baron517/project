$(function(){

        var myChart = echarts.init(document.getElementById('main1'));
            option= {
                xAxis: {
                    type: 'category',
                    data:['3.01','3.02','3.03','3.04','3.05','3.06','3.07',
                        '3.08','3.09','3.10','3.11','3.12','3.13','3.14'],
                        axisLine:{
                            lineStyle:{
                                color:'#a79b9b',
                            }
                        }
                },
                
                grid:{
                    x:80,
                    y:10,
                    x2:80,
                    y2:60
                },
                
                yAxis: {
                    type: 'value',
                    min:11500,
                    splitNumber:5,
                    axisLine:{
                        lineStyle:{
                            color:'#a79b9b',
                        }
                    }
                },
                series: [{
                    name:' ',
                    data: [12400, 12500, 12700, 13000,12600, 12800, 12500, 12200, 12400, 12600, 12800,
                    13000, 12800, 13000 ],
                    type: 'line',
                },{
                    name:'  ',
                    data: [12800, 13200, 12900, 13000,  12600, 12800, 12700, 12900, 13000, 13200,
                       13500, 12700, 12500, 13000],
                    type: 'line',
                },{
                    name:'   ',
                    data: [12000,  11900, 12300, 12500, 12800, 13000, 12800
                        ,13000, 13200, 13000, 12800,12600, 12800, 13400],
                    type: 'line',
                    },
            ]
            };
        myChart.setOption(option);

        $('.masking_title>.fr').click(function(){
            $(this).parent().parent().hide()
         })
         $('.price_details').on('click','.type1',function(){
            $(this).siblings('div').toggle().parent().css("backgroundColor",'#faf6f8')
        })
        $('.confirm_box').click(function(){
            $(this).parent().parent().parent().parent().hide()
        })
        $('.marquee_add').click(function(){
            $('.masking').css('opticy','1')
                $('.masking').show()
        })
        $('.display>input').click(function(){
            if($('.display>input').is(':checked')){
                $('.row>input').prop('checked',true)
                console.log(1)
            }else{
                $('.row>input').prop('checked',false)
            }
        })
       $('.price_details').on('click','.price_details_delete',function(){
            $(this).parent().remove()
        })
       
       $('.price_add').click(function(){
           var  dom ="<div class='row'><i></i><input type='checkbox'><div class='type first fl'><div class='type1 active'>现货RMB1 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>现货RMB2 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>现货RMB3 <i class='iconfont icon-plus-select-down fr'></i></div></div><div class='type second fl'><div class='type1 active'>MEG1 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>MEG2 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>MEG3 <i class='iconfont icon-plus-select-down fr'></i></div></div><div class='type third fl'><div class='type1 active'>四月上 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>四月下 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>五月上 <i class='iconfont icon-plus-select-down fr'></i></div></div><span></span><div class='type four fl'><div class='type1 fo active'>现货RMB1 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>现货RMB2 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>现货RMB3 <i class='iconfont icon-plus-select-down fr'></i></div></div><div class='type five fl'><div class='type1 active'>MEG1 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>MEG2 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>MEG3 <i class='iconfont icon-plus-select-down fr'></i></div></div><div class='type six fl'><div class='type1 active'>四月上 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>四月下 <i class='iconfont icon-plus-select-down fr'></i></div><div class='type1'>五月上 <i class='iconfont icon-plus-select-down fr'></i></div></div><div class='price_details_delete iconfont icon-icon7'></div></div>"
        $('.price_details').prepend(dom)

       })
       $('.charts_main1>.guides > span').click(function(){
           console.log(1)
           $(this).addClass('guides_active')
           $(this).siblings().removeClass('guides_active')
       })
        $('.guides span:nth-child(1)').click(function(){
            
                $('.guides95').show()
                $('.guides95').siblings('.guides_bottom').hide()
            
        })
        $('.guides span:nth-child(2)').click(function(){
            
                $('.guides80').show()
                $('.guides80').siblings('.guides_bottom').hide()
            
        })
        $('.guides span:nth-child(3)').click(function(){
            console.log(1)
                $('.guides65').show()
                $('.guides65').siblings('.guides_bottom').hide()
            
        })
})