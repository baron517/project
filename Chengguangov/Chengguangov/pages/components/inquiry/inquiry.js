//获取应用实例
// 
var app = getApp()
Page({
  data: {
    test : ''
  },

  call: function () {
    wx.makePhoneCall({
      phoneNumber: '055164931983',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  onLoad: function () {

    var that = this

    /*wx.login({
      success: function (loginCode) {
        var appid = 'wx9406826f67949e5a'; //填写微信小程序appid  
        var secret = '3bc942c1c1e7cfce1f8824169d73ad35'; //填写微信小程序secret  

        //调用request请求api转换登录凭证  
        wx.request({
        url: "",
    
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            //console.log(res.data.openid) //获取openid  
          }
        })
      }  
    })*/

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //console.log(userInfo);
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      // 查询当前角色id
   
    })
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        console.log('当前的全局信息时'+res.data[0])
        that.setData({
          test : res.data
        })
        console.log(that.data.test)
      },
    })
  },




  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '二手车行', // 分享标题
      desc: '哎哟不错哦', // 分享描述
      path: 'pages/index/index' // 分享路径
    }
  }
})
