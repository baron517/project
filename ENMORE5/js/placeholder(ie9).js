

//输入框自动填充
$(function(){
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
})

function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}



//验证码倒计时

var clock = '';
var nums = 60;
var btn;
function sendCode(thisBtn)
{ 
    btn = thisBtn;
    btn.disabled = true; //将按钮置为不可点击
    btn.value = nums+'秒后可重新获取';
    clock = setInterval(doLoop, 1000); //一秒执行一次
    btn.style.backgroundColor="#f4f4f4"
}
function doLoop(){
        nums--;
    if(nums > 0){
        btn.value = nums+'秒后可重新获取';
    }else{
        clearInterval(clock); //清除js定时器
        btn.disabled = false;
        btn.value = '发送验证码';
        btn.style.backgroundColor="#fff"
        nums = 10; //重置时间
    }
} 

$('.Public_nav > li').click(function(){
    $(this).siblings("li").children("a").removeClass("border_bottom");
    $(this).children("a").addClass('border_bottom');
})

$('.register_menu div input').keyup(function(){
    if($(this).val()){
        $(this).siblings('label').children('i').hide()
        $(this).parent().siblings('label').children('i').hide()
        
    }
})
