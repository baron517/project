var app = getApp();
var uid; 
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
     
     
    }]
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function (options) {
   
    

    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });



    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
   
        var uid = res.data[0].uid;
        console.log("####");
        console.log(uid);
        console.log("####");

       wx.request({
         url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=getShenpi',
         method: 'GET',
         header: {
           'content-type': 'application/json'
         },
         data: {
           uid: uid,
           typestr:2
         },
         success: function (res) {
           console.log(res.data);
           that.setData({
             itemArr: res.data
           })
         }
       })

      },
    })
   
  },
  footerTap: app.footerTap
})