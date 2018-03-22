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
  bindPickerChange: function (e) {
    var dataList = e.currentTarget.dataset.id;
    var xiabiao = e.detail.value;
    //console.log(dataList[xiabiao].sid);
    var sid = dataList[xiabiao].sid;
    var that = this;
    //加班人员
    wx.request({
      type:"GET",
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=person',
      data:{
        sid:sid
      },
      dataType:"JSON",
      success:function(e){
        that.setData({
         person:JSON.parse(e.data)
        })
        console.log(JSON.parse(e.data));
      }
    })

    this.setData({
      areaIndex: e.detail.value
    })
  },

  checkboxChange:function(e){
    var xuan = e.detail.value;
    this.setData({
      pernum: xuan.length,
      pername:xuan
    });
    console.log(xuan);
  },

  bindPickerChange1: function (e) {
    this.setData({
      resIndex: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange2: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },

  bindPickerChange3: function (e) {
    var dataList = e.currentTarget.dataset.id;
    var xiabiao = e.detail.value;
    var sid = dataList[xiabiao].uname;
    console.log(sid)
    this.setData({
      approvalIndex: e.detail.value
    })
  },




  form: function (e) {
    console.log(e.detail.value);
    var form = e.detail.value;


    wx.getStorage({
      key: 'openid',
      success: function (res) {
        var openid = res.data;
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
            openid:openid
          

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
      }
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //申请中队
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
         
          areadata:data1

        })
       
      }
    }),


    //就餐场所
    wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=restaurant',
      success:function(e){
        var arrayrest = [];
       
        var data1 = e.data;
        //console.log(data1);
        for (var i = 0; i < e.data.length; i++) {
          //arrayArea.push(e.data[i].sid);
          arrayrest.push(e.data[i].rname);

        }

        //console.log(arrayArea);
        that.setData({
          res: arrayrest,
          resdata: data1

        })
      }
    }),

      //第一审批人
      wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=fristper',
        success: function (e) {
          var arrayappr = [];
          var arrayaid = [];
          var data1 = e.data;
          //console.log(data1);
          for (var i = 0; i < e.data.length; i++) {
            //arrayArea.push(e.data[i].sid);
            arrayappr.push(e.data[i].uname);
            arrayaid.push(e.data[i].uid);
          }

          //console.log(arrayArea);
          that.setData({
            approval: arrayappr,
            approvalid: arrayaid,
            appdata: data1

          })
        }
      }),

      wx.getStorage({
        key: 'openid',
        success: function(res) {
          var openid=res.data;
          //console.log(res.data);
          app.getUserInfo(function (userInfo) {
            console.log(openid);
            var name = userInfo.nickName;
            wx.request({
              url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=inforadd',
              data: {
                nickname: name,
                openid: openid
              },
              method: 'GET', 
              // header: {}, // 设置请求的 header
              success: function (res) {

               

                wx.setStorage({
                  key: 'userInfo',
                  data: res.data,
                  success: function (res)
                  {
                    
                  }
                })

               




                if (res.data == 1) {

                  wx.navigateTo({
                    url: '../components/details/details',
                    success: function (res) {

                    },
                    fail: function () {

                    },
                    complete: function () {

                    }
                  })


                }

               

              },
              fail: function (res) {
                // fail
              },
              complete: function (res) {
                // complete
              }
            })
            
          })
        },
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