//获取应用实例
var app = getApp()
Page({
  data: {


  },

  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //console.log(userInfo);
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    wx.getStorage({
      key: 'openid',
      success: function (res) {

   
        var openid = res.data;
        console.log(res.data);
      
   wx.request({
      url: 'https://car.diguikeji.com/index.php?g=Api&m=CommonApi&a=personinfor',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        openid: openid
      },
      success: function (res) {
        console.log(res);
      that.setData({
          user: res.data
        })

      }
    })

      },
    })


    
  },





})