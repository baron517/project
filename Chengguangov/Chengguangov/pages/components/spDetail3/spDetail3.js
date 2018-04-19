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
      url: 'https://chengguangov.diguikeji.com/shengchengDoc/wordHandle.php',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        rid: ridIndex,
        statusValue: idIndex,
        typestr:1,
        erji: erji
      },
      success: function (res) {
		  
        console.log("测试测试");
        console.log(res.data);
        console.log("测试测试");
			
		 wx.showModal({
			title: '提示',
			content: '测试版暂时不支持下载功能',
			success: function (res) {
			  if (res.confirm) {
				console.log('用户点击确定')
			  }
			}
		  })
			
		/*
        if (res.data)
        {
			  wx.downloadFile({
			  url: 'res.data', //仅为示例，并非真实的资源
			  success: function(res) {
			
				if (res.statusCode === 200) {
					wx.playVoice({
					  filePath: res.tempFilePath
					})
				}
			  }
			})

        }
		*/
        

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
              detail: res.data
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