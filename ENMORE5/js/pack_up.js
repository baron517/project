$(function(){
    var text_index = 1;
    var flag = 1 ;

    $('.RMB>.clearfix>.fr').click(function(){
        $(this).parent().siblings("div").toggle()
       if(text_index){
        text_index = 0 ;
        $(this).html("<i class='iconfont icon-plus-select-down'>&nbsp;&nbsp;展开</i>")
       }else{
        text_index = 1 ;
        $(this).html("<i class='iconfont icon-plus-select-up'>&nbsp;&nbsp;收缩</i> ")
       }
    })

    $('.USD>.clearfix>.fr').click(function(){
        $(this).parent().siblings("div").toggle()
       if(flag){
        flag = 0 ;
        $(this).html("<i class='iconfont icon-plus-select-down'>&nbsp;&nbsp;展开</i>")
       }else{
        flag = 1 ;
        $(this).html("<i class='iconfont icon-plus-select-up'>&nbsp;&nbsp;收缩</i> ")
       }
    })

})