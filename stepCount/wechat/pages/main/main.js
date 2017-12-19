const app = getApp()

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
    list: [],

    myRank: "-",
    myName: "",
    myScore: "-",
    myAvatar: "",

    pageIndex: 0,
    groupPageIndex: 0,
    isHideLoadMore: true,

    firstName:'',
    firstStep:'',
    firstAvatar:'',

    currentType: 0,
    currentGroupType: 0
  },

  getGroupBank: function (type) {
    var that = this;

    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a='+type,
      data: {
        page: that.data.groupPageIndex,
        flag: 3
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        //console.log(that.data.pageIndex)
        if (that.data.groupPageIndex == 0) {
          var groupList = [];
          
          for(var i=0; i<res.data.length; i++){
            var groupItem = {
              rank: '',
              avatar: '',
              nickname: '',
              step: 0,
            }
            groupItem.rank = res.data[i].rank,
              groupItem.avatar = res.data[i].group_img,
              groupItem.nickname = res.data[i].group_name,
              groupItem.step = res.data[i].step
              groupList.push(groupItem);
              console.log(i)
          }



          that.setData({
            isHideLoadMore: true,
            list: groupList
          })

          that.setData({
            firstName: res.data[0].group_name,
            firstAvatar: res.data[0].group_img,
            firstStep: res.data[0].step
          })

        } else {

          var groupList = [];

          for (var i = 0; i < res.data.length; i++) {
            var groupItem = {
              rank: '',
              avatar: '',
              nickname: '',
              step: 0,
            }
            groupItem.rank = res.data[i].rank,
              groupItem.avatar = res.data[i].group_img,
              groupItem.nickname = res.data[i].group_name,
              groupItem.step = res.data[i].step
            groupList.push(groupItem);
            console.log(i)
          }

          if  (res.data  &&  res.data.length  >  0)  {
              that.setData({
                list: that.data.list.concat(groupList),
                  isHideLoadMore:  true
              })
          }  else  {
              that.setData({
                  isHideLoadMore:  true
              })
          } 

      

        }

        if (res.data && res.data.length > 0)
          that.data.groupPageIndex++;
      }
    });

  },


  getDayBillboard: function (type) {
    var that = this;

    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a='+type,
      data: {
        page: that.data.pageIndex,
        flag: that.data.currentType+1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        //console.log(that.data.pageIndex)
        if (that.data.pageIndex == 0) {
          that.setData({
            list: res.data,
            isHideLoadMore: true
          })

          that.setData({
            firstName: res.data[0].nickname,
            firstAvatar: res.data[0].avatar,
            firstStep: res.data[0].step
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

  getBrank: function (type) {
    var that = this;
    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=' + type,
      data: {
        m_id: app.globalData.userAllInfo.m_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        //console.log(that.data.pageIndex)
        
          that.setData({
            myName: res.data.nickname,
            myScore: res.data.step,
            myAvatar: res.data.avatar,
            myRank: res.data.rank,
          })

          
      }
    });

  },


  groupDayBillboard: function (type) {
      var that = this;

      wx.request({
          url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=' + type,
          data: {
              page: that.data.pageIndex,
              flag: that.data.currentType + 1
          },
          header: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'GET',
          success: function (res) {
              console.log(res.data)
              //console.log(that.data.pageIndex)
              if (that.data.pageIndex == 0) {
                  that.setData({
                      list: res.data,
                      isHideLoadMore: true
                  })

                  that.setData({
                      firstName: res.data[0].nickname,
                      firstAvatar: res.data[0].avatar,
                      firstStep: res.data[0].step
                  })

              } else {

                  if (res.data && res.data.length > 0) {
                      that.setData({
                          list: that.data.list.concat(res.data),
                          isHideLoadMore: true
                      })
                            } else {
                      that.setData({
                          isHideLoadMore: true
                      })
                            }

              }

              if (res.data && res.data.length > 0)
                  that.data.pageIndex++;
          }
      });

  },



  onLoad:function(){
    var that = this;

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })

      that.getDayBillboard("getDayBillboard")
      that.getBrank("getMyStepInfo");
    }
    
    
  },

  // tab切换
  changeState:function(e){
    var that=this;
      if( this.data.currentTab === e.target.dataset.current) {  
        return false;  
      } else {  
          if(e.target.dataset.current == 1){
            that.data.groupPageIndex = 0;
            that.getGroupBank('groupDayBillboard');
          }else{
            that.data.pageIndex = 0;
            that.getDayBillboard("getDayBillboard")
          }
        this.setData({
          currentTab: e.target.dataset.current
        })
      } 
  },

  changeType: function(e){
    var that = this;

    if (this.data.currentType === e.target.dataset.current) {
      return false;
    } else {
      console.log(e.target.dataset.current)
      this.setData({
        currentType: e.target.dataset.current
      })

      that.data.pageIndex = 0;
    

          if (that.data.currentType == 0) {
              that.getDayBillboard("getDayBillboard")
              that.getBrank("getMyStepInfo");
          } else if (that.data.currentType == 1) {
              that.getDayBillboard("getDayBillboardWeek")
              that.getBrank("getMyStepInfoWeek");
          } else if (that.data.currentType == 2) {
              that.getDayBillboard("getDayBillboardMonth")
              that.getBrank("getMyStepInfoMonth");
          }

      }
    

  },


  changeGroupType: function (e) {
      var that = this;

      if (this.data.currentGroupType === e.target.dataset.current) {
          return false;
      } else {
          console.log(e.target.dataset.current)
          this.setData({
              currentGroupType: e.target.dataset.current
          })

          that.data.groupPageIndex = 0;

          

          if (that.data.currentGroupType == 0) {
              that.getGroupBank("groupDayBillboard")
                  //that.getBrank("getMyStepInfo");
          } else if (that.data.currentGroupType == 1) {
              that.getGroupBank("groupDayBillboard1")
                  //that.getBrank("getMyStepInfoWeek");
          } else if (that.data.currentGroupType == 2) {
              that.getGroupBank("groupDayBillboard2")
                  //that.getBrank("getMyStepInfoMonth");
              }

          




      }

  },

 
  
  onReachBottom: function () {
    var that = this;
    console.log("333333")

    this.setData({
      isHideLoadMore: false
    })

    var type = "getDayBillboard";
    if (that.data.currentType == 0){
      type = "getDayBillboard";
    } else if (that.data.currentType == 1){
      type = "getDayBillboardWeek"
    } else if (that.data.currentType == 2){
      type = "getDayBillboardMonth"
    }
    that.getDayBillboard(type)

  },

  goFourthTab: function () {
    wx.redirectTo({
      url: '../order/order'
    });

  },

  goThirdTab: function () {
    wx.redirectTo({
      url: '../mall/mall'
    });
  },

  goFirstTab: function () {
    wx.redirectTo({
      url: '../index/index'
    });
  }
  
  
 
})