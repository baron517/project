

        $(".table-tab li").click(function()
        {
            $(".table-tab li").removeClass("active");
            $(this).addClass("active");
            $(".table-list .table").hide();
            $(".table-list .table").eq($(this).index()).show();
        });

        //发布报盘
        $(".publish-plate").click(function()
        {
            $("#plateDialog").show();
            $(".shadow").show();

        });

        $("#publishBtn").click(function()
        {
            $("#publishStepList>li").hide();
            $("#publishStepList>li").eq(1).show();

        });

        $("#confirmBtn").click(function()
        {

            $(".modal").hide();
            $(".shadow").hide();
            layer.alert("报盘发布成功！");

        });

        //成交
        $(".trade-btn").click(function()
        {

            $("#tradeDialog").show();
            $(".shadow").show();

        });

        $("#tradeSubmitBtn").click(function()
        {
            $("#tradeStepList>li").hide();
            $("#tradeStepList>li").eq(1).show();


        });

        $("#confirmTradeBtn").click(function()
        {
            $(".shadow").hide();
            $(".modal").hide();

            layer.open({
                content:'下单成功！',
                title:'提示信息',
                area: ['420px', 'auto'],
                btn: ['查看订单','关闭']

            });

        });

        //删除报盘
        $(".main-col").on("click",".delete-plate",function()
        {

            layer.confirm("否撤销该报盘？",function(index)
            {
                layer.close(index);

            });

        });

        //修改报盘
        $(".table-list").on("click",".icon-bianji",function()
        {
            $(".shadow").show();
            $("#editPlateDialog").show();
        });

        $("#editPlateBtn").click(function()
        {
            $(".shadow").hide();
            $(".modal").hide();
            layer.alert("修改成功！");

        });

        //发布询盘
        $(".table").on("click",".inquiry-publish",function()
        {
            $(".shadow").show();
            $("#inquiryDialog").show();

        });

        $(".publishInquiryBtn").click(function()
        {
            $(".shadow").hide();
            $(".modal").hide();
        });







