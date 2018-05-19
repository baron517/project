

        //步骤一

        $("#stepBtn1").click(function()
        {

            if($("#username").val()=="")
            {
                $("#username").addClass("error");
                $.pt({
                    target: $("#username"),
                    position: 'r',
                    autoClose:false,
                    width:100,
                    content: '请输入手机号码'
                });
            }
            else {
                $(".pt").remove();
                $(".forget-pass>li").hide();
                $(".forget-pass>li").eq(1).show();
            }

        });




        //步骤二

        $(".input-msg-code").focus(function()
        {
            $.pt({
                target: $(".get-msg-code"),
                position: 'r',
                autoClose:false,
                content: '如无法接受验证码，请重启手机并确认短信未被拦截！'
            });
        });

        $(".get-msg-code").click(function()
        {
            var timeCount=60;
            $(this).addClass("active");
            var timeId=setInterval(
                function()
                {
                    timeCount--;
                    if(timeCount<=0)
                    {
                        clearInterval(timeId);
                        $(".get-msg-code").removeClass("active");
                        $(".get-msg-code").val("获取验证码");
                    }
                    else {
                        $(".get-msg-code").val("重新发送("+timeCount+")");
                    }

                },1000);

        });

        $("#stepBtn2").click(function()
        {

            $(".pt").remove();
            $(".forget-pass>li").hide();
            $(".forget-pass>li").eq(2).show();
        });

        //步骤三
        $("#settingPass").focus(function()
        {
            $.pt({
                target: $("#settingPass"),
                position: 'r',
                autoClose:false,
                content: '6-20个大小写英文字母，符号或者数字的组合'
            });
        });

        $("#settingPass").on("input",function()
        {
            passStrength($(this))
        });

        function passStrength($obj)
        {
            if($obj.val().length<=6&&$obj.val().length>=0)
            {
                var strengthHtml1='<div class="strength"><span class="orange"></span><span class="orange"></span><span class="orange"></span> 低</div>';
            }

            if($obj.val().length>6&&$obj.val().length<8)
            {
                var strengthHtml1='<div class="strength"><span class="light-orange"></span><span class="light-orange"></span><span class="light-orange"></span> 中</div>';
            }

            else if($obj.val().length>=8)
            {
                var strengthHtml1='<div class="strength"><span class="green"></span><span class="green"></span><span class="green"></span> 高</div>';
            }


            $.pt({
                target: $obj,
                position: 'r',
                autoClose:false,
                width:130,
                content: strengthHtml1
            });

        }


        $("#stepBtn3").click(function()
        {

            $(".pt").remove();
            $(".forget-pass>li").hide();
            $(".forget-pass>li").eq(3).show();
        });






