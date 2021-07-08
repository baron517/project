// firstPage.js
//index.js
//获取应用实例
var app = getApp()

// var appid = 'wx29602978ed48fcf4'
// var secret = '0bd7e3aa68811109cf25275bf6d6df6f'

var appid = 'wx993b21125135952b'
var secret = 'e15980b0bf3aa38985bee7c386337c67'

Page({
  data: {
  },

  onLoad: function () {
    //console.log('onLoad')
    
    setTimeout(function(){
      wx.redirectTo({
        url: '../index/index'
      });
    }, 3000);

  },
  
})
