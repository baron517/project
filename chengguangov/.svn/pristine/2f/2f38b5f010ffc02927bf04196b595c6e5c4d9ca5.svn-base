// pages/components/train/train.js
var app = getApp();

Page({
  
  /**
   * 页面的初始数据
   */
  data: {

    areaIndex: 0,
    area: [],
    areadata: [],


    resIndex: 0,
    res: ["食堂一楼", "食堂二楼", "食堂三楼", "食堂四楼"],
    resdata:[],

    approvalIndex: 0,
    approval: ["张三", "李四", "王小二", "李翠花"],
    appdata:[],
    approvalid:[],

    dates: '',
    index: 0,

    pernum:[],
    pername:[],



  },
  

  form: function (e) {
    console.log(e.detail.value);
    var form = e.detail.value;
    wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=apply',
      data: {
        zhongdui: form.zhongdui,
        jingban: form.jingban,
        liyou: form.liyou,
        renshu: form.renshu,
        renyuan: form.renyuan,
        canting: form.canting,
        time: form.time,
        biaozhun: form.biaozhun,
        money: form.money,
        anpai: form.anpai,
        fristshenpi: form.fristshenpi,
       

      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        var rest = res.data;
        console.log(rest);

        if (rest == 1) {
          wx.showModal({
            title: '提示',
            content: '申请成功！请等待审批',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        } else if (rest == 2) {

          wx.showModal({
            title: '提示',
            content: '申请失败！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        } else if (rest == 3) {
          wx.showModal({
            title: '提示',
            content: '请输入完整的信息！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }

      },
      fail: function (res) {
        console.log(res);
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
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