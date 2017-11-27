// pages/indexDetail/indexDetail.js
const app = getApp()

var WxParse = require('../../wxParse/wxParse.js');

function escape2Html(str) {
  var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; });
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:  0,
        detail: '',
        endTime: '',
        gameTime: '' 
  },

  getNoticeDetail: function () {
    var that = this;
    wx.request({
      url: app.globalData.url + '/index.php?g=Portal&m=Index&a=getCompetitionDetail',
      data: {
        id: that.data.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        //console.log(res.data.detail);

        that.setData({
                    endTime:  res.data.sign_up_deadline,
                    gameTime:  res.data.start_time + " ~ " + res.data.end_time
                })
        
        var article = res.data.detail;

        article = escape2Html(article);

        WxParse.wxParse('article', 'html', article, that, 20);



      }
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var objID = options.id;
    console.log(objID)
    this.setData({
      id: objID
    })
    this.getNoticeDetail()

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