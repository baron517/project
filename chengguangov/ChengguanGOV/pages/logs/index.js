// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:'',
    openId:''
  },
  telInput(e){
    var tel = e.detail.value;
    console.log(tel);
    this.setData({
      tel : tel
    })
  },
  login(){
    var openid = this.data.openId;
    console.log('openid is ' + openid)
    var phone = parseInt(this.data.tel);
    
    var telReg = /^[1][3,4,5,7,8][0-9]{9}$/
    if( !telReg.test(phone)){
      wx.showModal({
        title: '错误的手机格式',
        content: '请输入正确的手机格式',
        showCancel : false,
      })
      return 
    }
    wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=TelCheck',
      method : 'GET',
      data : {
        phone : phone,
        openid : openid
      },
      header: {
        'Content-Type': 'application/json;charset=UTF-8;'
      },
      success : function (res) {
        console.log('手机号搜索不到' + res.data)
        console.log(res)
        if ( res.data == 1003){
          wx.showModal({
            title: '未添加的手机号',
            content: '请联系管理员',
            showCancel : false
          });
          return
        }
        wx.showToast({
          title: '登录成功',
        })
        setTimeout ( function(){
          wx.switchTab({
            url: '../index/index',
          })
        },1000)
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发起比较openid，如果服务器有相同openid则直接跳转进入主页面，否则输入手机号以后注册进入
    var that = this;
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        that.setData({
          openId : res.data
        })
        wx.request({
          url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=openidcheck',
          method : 'GET',
          data : {
            openid : res.data
          },
          success : function (rew) {
            console.log('login' + rew.data)
            
            if(rew.data === 1001){

              wx.switchTab({
                url: '../index/index'
              })
            }else {
              return
            }
          }
        })
       
      },
      fail : function () {
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})