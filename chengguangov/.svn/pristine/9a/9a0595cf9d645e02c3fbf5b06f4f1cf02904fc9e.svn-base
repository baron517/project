//获取应用实例
var app = getApp()
Page({
  data: {
    detail:'',
    rid:'',
    approvalIndex: 0,
    approval: ["张三", "李四", "王小二", "李翠花"],
    appdata: [],
    approvalid: []

  },

  shenhe: function (e) {

    var idIndex = e.target.dataset.id;
    var ridIndex = e.target.dataset.rid;

    //console.log(e.target.dataset.id);

    var erji = e.target.dataset.erji;


    var that=this;

    wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=shenheSave',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        rid: ridIndex,
        statusValue: idIndex,
        typestr:2,
        erji: erji,
        second_img:that.data.secondImg
      },
      success: function (res) {
        console.log("####");
        console.log(res.data);
        console.log("####");

        if (res.data)
        {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          });

          wx.navigateTo({
            url: '../quan2/quan2',
            success: function (res) {
              console.log("成功");
            },
            fail: function (res) { },
            complete: function (res) { },
          })

        }
        

      }
    })



  },
  
  onLoad: function (options) {
    
    var rid = options.id;

    this.setData({
      rid: rid
    })

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //console.log(userInfo);
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          uname : res.data[0].uname
        })
      },
    })


    wx.getStorage({
      key: 'openid',
      success: function (res) {

        var openid = res.data;
        console.log(res.data);

        wx.request({
          url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=getShenpiDetail',
          method: "GET",
          header: {
            'content-type': 'application/json'
          },
          data: {
            openid: openid,
            rid:rid
          },
          success: function (res) {
            console.log("####");
            console.log(res.data);
            console.log("####");
            var second = 'second_img'
            that.setData({
              detail: res.data.userList,
              ['detail.'+second] : res.data.second_img
            })

          }
        })

      },
    })


    //第一审批人
    wx.request({
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=fristperList',
      success: function (e) {
        var arrayappr = [];
        var arrayaid = [];
        var data1 = e.data;

        console.log("%%%%%%%%%%%%");
        console.log(data1);
        console.log("%%%%%%%%%%%%");

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
    })


  }





})