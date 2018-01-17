//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function(){
    console.log('onShow');
  },
  onHide: function(){
    console.log('onHide');
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)//判断是否为方法，是的话,调用cb()方法
    }else{
      //调用登录接口
      wx.login({
        success: function (rew) { 
          var code = rew.code;
          //console.log(111111);
          //获取openid
          wx.request({
            method: "GET",
            url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=wxdata',
            data: {
              code: code,
            },
            success: function (e) {

              var openid = e.data;
              console.log(openid);
              wx.setStorage({
                key: 'openid',
                data: openid,
              })
              wx.getUserInfo({
                success: function (res) {
                  //console.log("###"+openid);
                  that.globalData.userInfo = res.userInfo;
                  //that.globalData.code = res.code;
                  typeof cb == "function" && cb(that.globalData.userInfo);

                  var user = res.userInfo;
                  var nickname = user.nickName;
                  var avatarUrl = user.avatarUrl;
                  wx.setStorage({
                    key: 'nickname',
                    data: nickname,
                  });

                  wx.setStorage({
                    key: 'avatarUrl',
                    data: avatarUrl,
                  })

                  wx.request({
                    url: 'https://car.diguikeji.com/index.php?g=Api&m=CommonApi&a=inforadd',
                    data: {
                      nickname: nickname,
                      avatarUrl: avatarUrl,
                      openid: openid
                    },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    // header: {}, // 设置请求的 header
                    success: function (res) {
                      console.log(res.data);
                    },
                    fail: function (res) {
                      // fail
                    },
                    complete: function (res) {
                      // complete
                    }
                  })

                }
              })



            }
          })





        },

      fail:function(e){
        console.log(e.data);
      }
      });
    }
  },
  globalData:{
    userInfo:null
  }
})