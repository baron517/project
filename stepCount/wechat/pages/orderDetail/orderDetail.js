// orderDetail.js
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
    id: 0,
    detail: ''
  },

  getNoticeDetail: function () {
    var that = this;
    wx.request({
      url: app.globalData.url + '/index.php?g=Portal&m=Index&a=noticeDetail',
      data: {
        id: that.data.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.detail);

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
    this.setData({
      id: objID
    })
    this.getNoticeDetail()
  },

  
})