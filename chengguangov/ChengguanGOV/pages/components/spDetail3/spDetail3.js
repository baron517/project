//获取应用实例
var app = getApp()
Page({
  data: {
    api: 'https://chengguangov.diguikeji.com/data/upload/',
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
    var first = that.data.api + that.data.frist_img;
    var second = that.data.api + that.data.second_img
    var detail = that.data.detail;
    detail.frist_img = first;
    detail.second_img = second;
    var newJson = JSON.stringify(detail)
    console.log('--------')
    console.log(detail)
    console.log('--------')
    var rid = detail.rid;

    wx.navigateTo({
      url: '../webView/webView?rid='+rid,
    })
    // wx.request({
    //   url: 'https://chengguangov.diguikeji.com/shengchengDoc/wordHandle.php',
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   data: {
    //     detail:newJson
    //   },
    //   success: function (res) {
		  
    //     console.log("测试测试");
    //     console.log(res.data);
    //     console.log("测试测试");
			
		//     if (res.data)
    //     {

    //       console.log("######123");

    //       wx.downloadFile({
    //         url: res.data, //仅为示例，并非真实的资源
    //         success: function (res) {

    //           console.log(res.tempFilePath);

    //           if (res.statusCode === 200) {


    //             wx.saveFile({
    //               tempFilePath: res.tempFilePath,
    //               success: function (res) {
    //                 var savedFilePath = res.savedFilePath;
    //                 console.log("保存成功");
    //                 wx.showModal({
    //                   title: '下载成功',
    //                   content: '点击确定打开文件，请自行利用手机截图功能进行截图以后打印(可以使用两只手指将表格放大)',
    //                   success: function (res) {

    //                     if (res.confirm) {
    //                       console.log('用户点击确定')
    //                       wx.openDocument({
    //                         filePath: savedFilePath,
    //                         success:function(){
    //                           console.log('打开成功')
    //                         }
    //                       })
    //                     }
    //                   }
    //                 })
    //                 console.log("###"+savedFilePath);
    //               }
    //             })

    //           }
    //         }
    //       })

    //      }
    //   }
    // })



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
            that.setData({
              frist_img: res.data.frist_img,
              second_img: res.data.second_img,
              detail: res.data.userList
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