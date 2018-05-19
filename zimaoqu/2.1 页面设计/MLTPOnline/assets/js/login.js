
        //选择企业
        $(".slides li .col").click(function()
        {
            $(".slides li .col").removeClass("active");
            $(this).addClass("active");

        });

        //切换效果
        $('.flexslider').flexslider({
            animation: "slide",
            slideshow:false
        });






