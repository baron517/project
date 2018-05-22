// pages/components/train/train.js
var app = getApp();
var util = require('../../utils/util.js');

Page({
  
  /**
   * 页面的初始数据
   */
  data: {

    areaIndex: 0,
    area: [],
    areadata: [],


    priseIndex: 0,
    prise: [],
    prisedata: [],

   typleIndex: 0,
    typle: [],
   typledata: [],


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

    person: ['张三', '张三', '张三', '张三']



  },
  bindPickerChange: function (e) {
    // this.setData({
    //   pernum : 0,
    //   pername : '',
    //   // person : '',
    //   moneySum : 0,
      
    // })
    // app.globalData.perNum = 0;
    // app.globalData.nameList = [];


    // console.log(e.currentTarget)
    var dataList = e.currentTarget.dataset.id;

    var xiabiao = e.detail.value;
    //console.log(dataList[xiabiao].sid);
    var sid = dataList[xiabiao].sid;
    app.globalData.cid = sid;
   
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


        var gouxuanList = JSON.parse(e.data);
        

        for (var i = 0; i < app.globalData.nameList.length;i++)
        {

          if (app.globalData.cid == app.globalData.nameList[i].cid)
          {
            for (var j=0;j<app.globalData.nameList[i].nameList.length;j++)
            {
              for (var h = 0; h < gouxuanList.length;h++)
              {
                if(app.globalData.nameList[i].nameList[j] == gouxuanList[h].uname)
                {
                  gouxuanList[h].selected=true;
                }
              }
            }
          }

        }

        console.log(gouxuanList);


        that.setData({
          person: gouxuanList
        })
      
      }
    })

    this.setData({
      areaIndex: e.detail.value
    })
  },

  checkboxChange:function(e){
    
    var _this = this;

    if (app.globalData.nameList.length==0)
    {
      var nameObj = {};
      nameObj.cid = app.globalData.cid;
      nameObj.nameList = e.detail.value;
      app.globalData.nameList.push(nameObj);
    }
    else{

      var flag=0;
      for (var i = 0; i < app.globalData.nameList.length; i++) {

        if (app.globalData.cid == app.globalData.nameList[i].cid) {
          app.globalData.nameList[i].nameList = e.detail.value;
          flag=1;
        }

      }

     if(flag==0)
     {
       var nameObj = {};
       nameObj.cid = app.globalData.cid;
       nameObj.nameList = e.detail.value;
       app.globalData.nameList.push(nameObj);
     }

    }

    var pernum=0;
    var pername = [];
    for (var i = 0; i < app.globalData.nameList.length;i++){
      pernum = pernum+app.globalData.nameList[i].nameList.length;

      pername = pername.concat(app.globalData.nameList[i].nameList);
    }
    console.log(pernum);
    //console.log(pername);
    app.globalData.perNum = pernum;
    // 直接根据点击人数计算总共金额
    var price = _this.data.typle[_this.data.typleIndex];
    var moneySum = pernum * price;
    // 
      this.setData({
        pernum: pernum,
        pername: pername,
        moneySum : moneySum
      });
 
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

  bindPickerChange4: function (e) {
    this.setData({
      priseIndex: e.detail.value
    })
  },

  bindPickerChange5: function (e) {

    var dataList = e.currentTarget.dataset.id;
    //console.log(dataList);
    var xiabiao = e.detail.value;
    //console.log(dataList[xiabiao].cprise);
    var price = dataList[xiabiao].cprise;

    var pernum = app.globalData.perNum
    
    console.log("###" + pernum);

    var moneySum = pernum * price;

    this.setData({
      typleIndex: e.detail.value,
      moneySum:moneySum
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
    console.log("###"+e.detail.formId);
    var formId = e.detail.formId;
    var form = e.detail.value;
   
    var that = this;
    var zongrenshu = that.data.pername.join(',');
    var jiucan = that.data.prise[that.data.priseIndex];
    var fristshenpi = form.fristshenpi;
    console.log(jiucan)


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
            renyuan: zongrenshu,
            canting: form.canting,
            time: that.data.dates,
            // 以下值都没有
            biaozhun: that.data.typle[that.data.typleIndex],
            money: that.data.moneySum,
            anpai: that.data.pername,
            fristshenpi: form.fristshenpi,
            openid:openid,
            'rmeal_stand' : that.data.prise[that.data.priseIndex]
          

          },
          header: {
            'content-type': 'application/json'
          },
          method: 'GET',
          success: function (res) {
            var rest = res.data;
            console.log("###"+rest+"###");

            if (rest == 1) {
              wx.showModal({
                title: '提示',
                content: '申请成功！请等待审批',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  }

                  wx.request({
                    url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=muban',
                    data: {
                      fristshenpi:fristshenpi
                      },
                    header: {
                      'content-type': 'application/json'
                    },
                    success: function (e) {
                      var is_open = e.data;
                      console.log("###" + e.data["openid"] + "###");
                      console.log(e.data);
                      if(is_open == 2){
                        wx.showModal({
                          title: '提示',
                          content: '对方还未开通此系统账号，请通知对方进入系统',
                          success: function (res) {
                            if (res.confirm) {
                              console.log("用户点击确定")
                            }
                          }
                        })
                      }else{

                        var frist_openid = e.data["openid"];
                        var access_token = e.data["access_token"];
                        //console.log("###"+frist_openid+"###");
                        //console.log("###"+access_token+"###");
                        var url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='+access_token;
                        
                        var jsonData = {
                          access_token: access_token,
                          touser: 'oM0Ds0NBPzdJAYqMT_58crA6nx9g',
                          template_id: 'bH0dUSRvrLcZLWDkp1qBQGfURlOjWiW__DzvH3bRFkU',
                          form_id: formId,
                          page: "pages/index/index",
                          data: {
                            "keyword1": { "value": "测试数据一", "color": "#173177" },
                            "keyword2": { "value": "测试数据二", "color": "#173177" },
                          }
                        }
                        
                        wx.request({
                          url: url,
                          data:jsonData,
                          method: 'POST',
                          success: function (res) {
                            console.log(res)
                          },
                          fail: function (err) {
                            console.log('request fail ', err);
                          },
                          complete: function (res) {
                            console.log("request completed!");
                          }

                        })

                        wx.showModal({
                          title: '提示',
                          content: '对方已经接收到，如长时间无回应，请电话提示一下',
                          success: function (res) {
                            if (res.confirm) {
                              console.log("用户点击确定")
                            }
                          }
                        })
                      }
                      //console.log(e.data);
                    }
                  })
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

      //就餐类型
      wx.request({
        url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=prise',
        success: function (e) {
          var arrayrest = [];

          var data1 = e.data;
          //console.log(data1);
          for (var i = 0; i < e.data.length; i++) {
            //arrayArea.push(e.data[i].sid);
            arrayrest.push(e.data[i].cname);

          }

          //console.log(arrayArea);
          that.setData({
            prise: arrayrest,
            prisedata: data1

          })
        }
      }),


      //就餐金额
      wx.request({
        url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=money',
        success: function (e) {
          var arrayrest = [];

          var data1 = e.data;
          //console.log(data1);
          for (var i = 0; i < e.data.length; i++) {
            //arrayArea.push(e.data[i].sid);
            arrayrest.push(e.data[i].cprise);

          }

          //console.log(arrayrest);
          that.setData({
            typle: arrayrest,
            typledata: data1,

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
            console.log('名字是' + name)
            wx.request({
              url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=inforadd',
              data: {
                //nickname: name,
                openid: openid
              },
              method: 'GET', 
              // header: {}, // 设置请求的 header
              success: function (res) {

               console.log('----收到的setStorage-----')
               console.log(res.data)

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
    var that = this;
    var time = util.formatTime(new Date());
    var year = time.substr(0,4);
    var mon = time.substr(5,2);
    var day = time.substr(8,2);

    var arr = [year,mon,day].join('-')
    this.setData({
      'dates' : arr
    });

    // 初始中队
    wx.request({
      type: "GET",
      url: 'https://chengguangov.diguikeji.com/index.php?g=Api&m=CommonApi&a=person',
      data: {
        sid: 1
      },
      dataType: "JSON",
      success: function (e) {


        var gouxuanList = JSON.parse(e.data);


        for (var i = 0; i < app.globalData.nameList.length; i++) {

          if (app.globalData.cid == app.globalData.nameList[i].cid) {
            for (var j = 0; j < app.globalData.nameList[i].nameList.length; j++) {
              for (var h = 0; h < gouxuanList.length; h++) {
                if (app.globalData.nameList[i].nameList[j] == gouxuanList[h].uname) {
                  gouxuanList[h].selected = true;
                }
              }
            }
          }

        }

        console.log(gouxuanList);


        that.setData({
          person: gouxuanList
          // person: [
          //   { uname : '张三'},
          //   { uname: '张三' },
          //   { uname: '张三' },
          //   { uname: '张三' },
          //   { uname: '张三' },
          // ]
        })

      }
    })

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