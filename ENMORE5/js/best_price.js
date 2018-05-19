$(function(){
    $('.setting').click(function(){
        $(this).parent().siblings('.setting_details').toggle()
    })
    $('.type1').click(function(){
        $(this).siblings('div').toggle().parent().css("backgroundColor",'#faf6f8')
    })
    $('.confirm').click(function(){
        $(this).parent('.setting_details').hide()
    })
    $('.masking_title>.fr').click(function(){
       $(this).parent().parent().parent().hide()
    })
    $('tr>td:last-child').click(function(){
       $('.masking').show()
    })
    $('#mask').scrollBar();
    $('.confirm i:first-child' ).click(function(){
        $('.Modal').hide()
    })
    $('.confirm i:last-child' ).click(function(){
        $('.Modal').hide()
    })
    $('.setting').click(function(){
        $('.Modal').show()
    })
})