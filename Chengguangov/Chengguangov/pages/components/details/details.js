//获取应用实例
var app = getApp();
Page({
  data:{
   
    areaIndex: 0,
    area: [],
    areadata: [],

  },
  bindPickerChange: function (e) {
    var dataList = e.currentTarget.dataset.id;
    var xiabiao = e.detail.value;
   
    var sid = dataList[xiabiao].sid;
    this.setData({
      areaIndex: e.detail.value
    })

  },

  onLoad:function(options){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //console.log(userInfo);
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=squadron',
      success: function (e) {
        //console.log(e.data.length);
        var arrayArea = [];

        var data1 = e.data;
        //var dataList = JSON.parse(data);
        //console.log(data1);
        for (var i = 0; i < e.data.length; i++) {
          //arrayArea.push(e.data[i].sid);
          arrayArea.push(e.data[i].sname);

        }

        //console.log(arrayArea);
        that.setData({
          area: arrayArea,

          areadata: data1

        })

      }
    }),
    

    wx.getStorage({
      key: 'openid',
      success: function (res) {


        var openid = res.data;
        console.log(res.data);


        openid: wx.getStorage({
          key: 'openid',
          success: function (res) {

            var openid = res.data;

              wx.request({
                url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=getPerson',
                method: "GET",
                header: {
                  'content-type': 'application/json'
                },
                data: {
                  openid: openid
                },
                success: function (res) {
                  console.log(res.data);
                  that.setData({
                    user: res.data
                  })

                }
              })
          },
        })

       

      },
    })





  },

  infor: function (e) {
    //console.log(openid);
      var infor = e.detail.value;
      console.log(infor);
      wx.getStorage({
        key: 'openid',
        success: function (res) {
          
          var openid = res.data;
          console.log("#########");
          //console.log(infor.t_address);
          console.log("#########");
          //console.log(res.data.openid);
          wx.request({
            url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=personadd',
            data: {
              uname: infor.name,
              phone: infor.phone,
              openid: openid,
              udepartment: infor.t_address
             
            },
            header: {
              'content-type': 'application/json'
            },
            method: 'GET',
            success: function (e) {
              var rest = e.data;
              console.log(rest);
              if (rest == 1) {
                wx.showToast({
                  title: '提交成功',
                  icon: 'success',
                  duration: 2000
                });


                
                wx.showModal({
                  title: '提示',
                  content: '提交成功！是否返回首页？',
                  success: function (res) {
                    if (res.confirm) {
                      wx.switchTab({
                        url: '../../index/index',
                        success: function (e) {
                          var page = getCurrentPages().pop();
                          if (page == undefined || page == null) return;
                          page.onShow();
                        }
                      })
                    }
                  }
                })

              }
              else if (rest == 2) {
                wx.showModal({
                  title: '提示',
                  content: '提交失败',
                  showCancel: 'false',
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    }
                  }
                })
              };
            },
            fail: function (e) {
              console.log(e);
            }
          })

        },
      })


  },
  
})