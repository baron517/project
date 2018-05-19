

//自定义checkbox
$(".checkbox-col .checkbox-ui").click(function()
{
    if($(this).hasClass("checked"))
    {
        $(this).removeClass("checked");
    }
    else {
        $(this).addClass("checked");
    }

});

//关闭弹出层
$(".cancel-modal").click(function()
{
    $(".modal").hide();
    $(".shadow").hide();
});


//下拉菜单
$(".has-dropdown").mouseover(function()
{

    $(this).find(".dropdown-list").show();

}).mouseout(function()
{
    $(this).find(".dropdown-list").hide();
});