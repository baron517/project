require.config({
    baseUrl: '../assets',
    shim: {
        'common': ["jquery"],
        'validate': ["jquery"],
        'pagination': ["jquery"],
        'layer': ["jquery"],
        'flexslider': ["jquery"],
        'datepicker': ["jquery"],
        'myslider': ["jquery"],
        'autocomplete': ["jquery"],
        'dropdownlist': ["jquery"],
        'ztreeCore': ["jquery"],
        'ztreeExcheck': ["jquery"],
        'superSlide':["jquery"],
        'tooltips':["jquery"],
        'echarts':["jquery"],
        'boxSliderAll':["jquery"]
    },
    paths: {
        jquery: "lib/jquery",
        layer: "lib/layer/layer",
        common: 'js/common',
        validate: "lib/jquery.validate",
        pagination: "lib/jquery.pagination",
        datepicker: "lib/My97DatePicker/WdatePicker",
        flexslider:"lib/jquery.flexslider-min",
        myslider:"lib/jquery.myslider.0.1.3",
        dropdownlist:"lib/dropdownlist",
        ztreeCore:"lib/jquery.ztree.core.min",
        ztreeExcheck:"lib/jquery.ztree.excheck.min",
        autocomplete: "lib/autocomplete/jquery.autocomplete",
        superSlide:"lib/jquery.SuperSlide",
        echarts:"lib/echarts",
        tooltips:"lib/jquery.pure.tooltips",
        boxSliderAll:"lib/box-slider-all.jquery.min"
    }

});
