$(function(){
	
	var nav = $('.nav').eq(0);
    // nav收缩展开
    $('.nav_item > a').on('click',function(){
        if (!nav.hasClass('nav_mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
				$(this).parent().siblings().children('ul').slideUp(300); 
                $(this).next('ul').slideDown(300);
                $(this).parent().toggleClass('nav_show',true).siblings('li').removeClass('nav_show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $(this).parent().removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav_mini')) {
            $('.nav_item.nav_show').removeClass('nav_show');
            $('.nav_item').children('ul').removeAttr('style');
            $('.nav').addClass('nav_mini');
        }else{
            $('.nav').removeClass('nav_mini');
        }
    });
});