

const app = getApp()

var list = [];

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    // indicator-dots:true

    motto: 'Hello World',
    userInfo: {},
    list: [
    ],

    isHideLoadMore: true,
    pageIndex: 0,

    firstName: '',
    firstStep: '',
    firstAvatar: '',

    myRank: '',
    myName: '',
    myScore: '',
    myAvatar: ''
  },

  getMyStepInfo: function () {
    var that = this;
    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=getMyStepInfo',
      data: {
        m_id: app.globalData.userAllInfo.m_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
          
              that.setData({
                myRank : res.data.rank,
                myName : res.data.nickname,
                myScore: res.data.score,
                myAvatar : res.data.avatar
              })

      }
    })

  },


  getScore: function(){
    var that = this;
    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=getDayScoreBillboard',
      data: {
        page: that.data.pageIndex
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        if (that.data.pageIndex == 0) {
          that.setData({
            list: res.data,
            isHideLoadMore: true
          })

          that.setData({
            firstName: res.data[0].nickname,
            firstAvatar: res.data[0].avatar,
            firstStep: res.data[0].score
          })

      

        } else {

          if  (res.data  &&  res.data.length  >  0)  {
              that.setData({
                  list:  that.data.list.concat(res.data),
                  isHideLoadMore:  true
              })
          }  else  {
              that.setData({
                  isHideLoadMore:  true
              })
          } 

          
        }

        if (res.data && res.data.length > 0)
          that.data.pageIndex++;
      }
    });

  },

  onLoad: function () {
    var that = this;


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }

    that.getScore();
    this.getMyStepInfo();

  },
  

  onReachBottom: function(){
    var that = this;
    console.log("333333")

    this.setData({
      isHideLoadMore: false
    })


    that.getScore()
  },


  goSecondTab: function () {
    wx.redirectTo({
      url: '../main/main'
    });

  },

  goFourthTab: function () {
    wx.redirectTo({
      url: '../order/order'
    });
  },

  goFirstTab: function () {
    wx.redirectTo({
      url: '../index/index'
    });
  }


})