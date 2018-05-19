$(function(){ 
    var flag=true;
    var flag1 = true;
    var flag2 = false

    $('.item>span').on("click",function(){
        if(flag2){
            $('.kq').hide()
            flag2 = false
        }else{
            if($('.item1')[0]==$(this).parent()[0]){
                $('.item1 tr td').show()
                console.log($('.kq'))
                flag2=true
            }
        }
        
        if($(this).parent().css('width')!='1280px'){

            $(this).parent().css({'width':'1280px'});
        }else{
            $(this).parent().css({'width':'628px'})
        }
       var  dom = $(this).parent().toggleClass('too').prev()[0];
     var index = ($('.item').index($($(this).parent()))+1)/2
       if(Math.round(index) === index){
            dom.remove()
            $(this).parent().after(dom)
           
        }
    })
    $('.jq22').dad({
        draggable: 'h4'
    });
    

    $('#scroll1').scrollBar();
    $('#scroll2').scrollBar();
    $('#scroll3').scrollBar();
    $('#scroll4').scrollBar();
    $('.type1').click(function(){
        $(this).siblings('div').toggle().parent()
    })

$('.icon-sanheng').click(function(){
   $(".jq22 .item").addClass("too");
    $(this).addClass('open').siblings().removeClass('open')
    $('.jq22 .item').css('width','1280px')
    $('.jq22 .item >div:last-child').css({'width':'1280px'})
})
$('.icon-dakaisanshu').click(function(){
    $(".jq22 .item").removeClass("too");
    $(this).addClass('open').siblings().removeClass('open')
    $('.jq22 .item').css('width','628px')
    $('.jq22 .item >div:last-child').css({'width':'1280px'})
})
    // $(this).next().css('width','99.5%')

    $('.item>.shezhi').click(function(e){
        $('.masking').show();
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
   $('.confirm_box').click(function(){
    $(this).parent().parent().parent().parent().hide()
})
    $('.close').click(function(){
        $(this).parent().remove()
    })
    $('.add ').click(function(e){
        if(flag){
            $('.varieties div')[0].style.borderLeft='0px'
            $('.varieties div')[0].style.borderBottom='0px'
            $('.varieties div')[1].style.borderBottom='0px'
            $('.varieties div')[1].style.borderTop='0px'
            $('.varieties div')[1].style.borderLeft='0px'
            $('.varieties div')[2].style.borderLeft='0px'
            $('.varieties div')[2].style.borderTop='0px'

            $('.affiliation div')[0].style.borderRight='0px'
            $('.affiliation div')[0].style.borderBottom='0px'
            $('.affiliation div')[1].style.borderBottom='0px'
            $('.affiliation div')[1].style.borderTop='0px'
            $('.affiliation div')[1].style.borderRight='0px'
            $('.affiliation div')[2].style.borderRight='0px'
            $('.affiliation div')[2].style.borderTop='0px'
            $('.varieties div:nth-child(1)')[0].style.borderLeft='0px'
            $('.pos > .l').show()
            
            $(this).next().children().children().children().show()
            flag=false;
            $(this).next().children().children().children()[2].style.borderBottomLeftRadius='20px'
            $(this).next().children().children().children()[5].style.borderBottomRightRadius='20px'
            $(this).next().children().children().children('.active')[0].style.borderBottomLeftRadius='0px'
            $(this).next().children().children().children('.active')[1].style.borderBottomRightRadius='0px'
            $('.varieties div:nth-child(1)')[0].style.borderLeft='0px'
        }else{
            $(this).next().children().children().children().hide()
            $('.varieties div')[0].style.borderBottom='1px solid #ccc'
            $('.affiliation div')[0].style.borderBottom='1px solid #ccc'
            $('.varieties div:nth-child(1)')[0].style.borderLeft='none'
            flag=true;
            flag1 = true
            $(this).next().children().children().children('.active').show()
            $(this).next().children().children().children('.active')[0].style.borderBottomLeftRadius='20px'
            $(this).next().children().children().children('.active')[1].style.borderBottomRightRadius='20px'
            console.log($(this).next().children().children().children('.active')[1].innerText);
            var text0=$('.showcolor')[0].innerText || $(this).next().children().children().children('.active')[1].innerText;
            var text1=$('.showcolor')[1].innerText || $(this).next().children().children().children('.active')[0].innerText;
            var change0=$(this).next().children().children().children('.active')[0].innerText
            var change1=$(this).next().children().children().children('.active')[1].innerText
            $('.showcolor')[0].innerText= change0
            $('.showcolor')[0].innerText= change1
            $(this).next().children().children().children('.active')[0].innerText=text0
            $(this).next().children().children().children('.active')[1].innerText=text1
            $(this).next().children().children().children().removeClass('showcolor')
            $('.pos > .l').hide()
            
        }
        e.stopPropagation()
    })
    $('.affiliation>.type1').click(function(e){
console.log($('.varieties div'))
        if(flag){
            $('.varieties div')[0].style.borderLeft='0px'
            $('.varieties div')[0].style.borderBottom='0px'
            $('.varieties div')[1].style.borderBottom='0px'
            $('.varieties div')[1].style.borderTop='0px'
            $('.varieties div')[1].style.borderLeft='0px'
            $('.varieties div')[2].style.borderLeft='0px'
            $('.varieties div')[2].style.borderTop='0px'
            $('.pos > .l').show()

            $('.affiliation div')[0].style.borderRight='0px'
            $('.affiliation div')[0].style.borderBottom='0px'
            $('.affiliation div')[1].style.borderBottom='0px'
            $('.affiliation div')[1].style.borderTop='0px'
            $('.affiliation div')[1].style.borderRight='0px'
            $('.affiliation div')[2].style.borderRight='0px'
            $('.affiliation div')[2].style.borderTop='0px'
            $('.varieties div:nth-child(1)')[0].style.borderLeft='0px'

            $(this).siblings().show()
            $(this).parent().siblings().children().show()

            $(this)[0].style.borderBottomLeftRadius='0px'
            $(this).parent().siblings().children()[0].style.borderBottomRightRadius='0px'
            
            $(this).siblings()[1].style.borderBottomLeftRadius='20px'
            $(this).parent().siblings().children()[2].style.borderBottomRightRadius='20px'
            flag=false
        }else{
            console.log($(this).addClass('showcolor'))
            $(this).siblings().removeClass('showcolor')
            $(this).siblings().show()
            $(this).parent().siblings().children().show()
            $('.pos > .l').hide()
            
        }
    e.stopPropagation()
      })
      $('.varieties>.type1').click(function(e){
        if(flag){
            $('.varieties div')[0].style.borderLeft='0px'
            $('.varieties div')[0].style.borderBottom='0px'
            $('.varieties div')[1].style.borderBottom='0px'
            $('.varieties div')[1].style.borderTop='0px'
            $('.varieties div')[1].style.borderLeft='0px'
            $('.varieties div')[2].style.borderLeft='0px'
            $('.varieties div')[2].style.borderTop='0px'
            $('.pos > .l').show()

            $('.affiliation div')[0].style.borderRight='0px'
            $('.affiliation div')[0].style.borderBottom='0px'
            $('.affiliation div')[1].style.borderBottom='0px'
            $('.affiliation div')[1].style.borderTop='0px'
            $('.affiliation div')[1].style.borderRight='0px'
            $('.affiliation div')[2].style.borderRight='0px'
            $('.affiliation div')[2].style.borderTop='0px'
            $('.varieties div:nth-child(1)')[0].style.borderLeft='0px'

            $(this).siblings().show()
            $(this).parent().siblings().children().show()

            $(this)[0].style.borderBottomRightRadius='0px'
            $(this).parent().siblings().children()[0].style.borderBottomLeftRadius='0px'
            
            $(this).siblings()[1].style.borderBottomRightRadius='20px'
            $(this).parent().siblings().children()[2].style.borderBottomLeftRadius='20px'
            flag=false
        }else{
            console.log($(this).addClass('showcolor'))
            $(this).siblings().removeClass('showcolor')
            $(this).siblings().show()
            $(this).parent().siblings().children().show()
            $('.pos > .l').hide()
            
        }
        e.stopPropagation()
      })

$(document).click(function(){
    flag=true
    $('.varieties div:nth-child(1)')[0].style.borderBottom='1px solid #ccc'
    $('.varieties div:nth-child(1)')[0].style.borderLeft='0px'
    $('.affiliation div:nth-child(1)')[0].style.borderBottom='1px solid #ccc'
    $('.affiliation div:nth-child(1)').siblings().hide()
    $('.varieties div:nth-child(1)').siblings().hide()
    $('.affiliation div:nth-child(1)')[0].style.borderBottomLeftRadius='20px'
    $('.varieties div:nth-child(1)')[0].style.borderBottomRightRadius='20px'
    $('.pos > .l').hide()
    

})

        $.each($('#scroll1 table > tbody > tr '),function(){
           if($(this).children()[0].innerText==""){
               console.log($(this).children().css('height','1px'))
               $(this).css('border-bottom','1px solid #0178e0 ')
           }
        });
        $.each($('#scroll1 table > tbody > tr '),function(){
            console.log()
            if($(this).children()[2].innerText=="卖"){
                $(this).children()[2].style.color='orangered'
            }
        })
});