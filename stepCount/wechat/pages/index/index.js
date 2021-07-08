// firstPage.js
//index.js
//获取应用实例1
var app = getApp()

// var appid = 'wx29602978ed48fcf4'
// var secret = '0bd7e3aa68811109cf25275bf6d6df6f'

var appid = 'wx993b21125135952b'
var secret = 'e15980b0bf3aa38985bee7c386337c67'

var ctx = wx.createCanvasContext('canvasCircle');
var interval;
var svarName;

var radius = 140;
var lineWidth = 12;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    code: "",
    encryptedData: "",
    iv: "",
    session_key: "",
    openid: "",
    todayStep: "",
    distance: "",
    time: "",
    kaka: "",
    allStep: 0,
    imgUrls:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    current:0,
    imageObj:[],
    morning_step:'',
    night_step:'',
    firstAvatar:'',
    firstName:'',
    myRank:'',
    circle_bg: '../../images/circle_bg.jpg',
    screenWidth: '',
    circlebgWidth: ''
  },

  drawBgCircle: function () {
    //创建并返回绘图上下文context对象。
    var cxt_arc = wx.createCanvasContext('canvasBgCircle');
    cxt_arc.setLineWidth(lineWidth);
    cxt_arc.setStrokeStyle('#eeeeee');
    cxt_arc.setLineCap('round');
    cxt_arc.beginPath();
    cxt_arc.arc(this.data.screenWidth / 2, this.data.screenWidth / 1.6, (this.data.screenWidth-40) / 2, Math.PI, 2*Math.PI, false);
    cxt_arc.stroke();
    cxt_arc.draw();
  },

  drawCircle: function () {
    var that = this;
    clearInterval(svarName);
    //ctx.createLinearGradient(100, 100, )
    function drawArc(s, e) {
      ctx.draw();
      var x = that.data.screenWidth / 2, y = that.data.screenWidth / 1.6;
      ctx.setLineWidth(lineWidth);
      ctx.setStrokeStyle('#7b6faf');
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(x, y, (that.data.screenWidth - 40) / 2, s, e, false);
      ctx.stroke()
      ctx.draw()
    }
    var step = 1, startAngle = Math.PI, endAngle = 0;
    var animation_interval = 10, n = 100;

    //console.log(that.data.allStep+"2222")

    var animation = function () {
      if (step <= that.data.allStep) {
        endAngle = step * Math.PI / n + startAngle;
        //console.log(endAngle)
        drawArc(startAngle, endAngle);
        step++;
      } else {
        clearInterval(svarName);
      }
    };
    svarName = setInterval(animation, animation_interval);
  },

  get3rdSession: function () {
    let that = this
    wx.request({
      url: app.globalData.url +'/index.php?g=Api&m=CommonApi&a=convertStep',
      data: {
        code: that.data.code,
        encryptedData: that.data.encryptedData,
        iv: that.data.iv,
        appid: appid,
        secret: secret,
        session_key: wx.getStorageSync('session_key'),
        m_id: app.globalData.userAllInfo.m_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        
        let response = res.data.substring(3).trim()
        //console.log(response[0])

        //console.log(response)
        //console.log(eval(response))
        that.stepInfoList = JSON.parse(response).stepInfoList;
        

        if (that.stepInfoList != null)
          that.todayStep = that.stepInfoList[that.stepInfoList.length - 1].step + "";
        
        var all = that.todayStep/100;
        if (all <= 1){
          all = 1;
        }else if (all >= 100){
          all = 100;
        }
        //console.log("all" + all)

        console.log(app.globalData.userAllInfo);

        if(app.globalData.userAllInfo.gender=="1")
        {
          var kakaValue = 0.8214 * 66 * that.todayStep*0.414*167;
        }
        else{
          var kakaValue = 0.8214 * 57 * that.todayStep * 0.414 * 156;
        }
       
	   kakaValue=kakaValue/100000;

        that.setData({
          todayStep: that.todayStep,
          distance: (that.todayStep*5/8000).toFixed(2),
          time: (that.todayStep/120).toFixed(2),
          kaka: kakaValue.toFixed(2),
          allStep: all,
        })

        that.drawBgCircle();
        that.drawCircle();
        that.getBrank("getMyStepInfo");
      }
    })
  },

  getSwipeImage: function () {
    let that = this
    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=getHomeAd',
      data: {
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        var groupList = [];
        for (var i = 0; i < res.data.length; i++) {
          groupList.push('https://lhjz.2donghua.com/data/upload/'+res.data[i].ad_img);
        }
        that.setData({
          imgUrls: groupList,
          imageObj: res.data
        })
      }
    })

  },

  judgeBindInfo: function(){
    let that = this
      wx.request({
        url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=judgeBindInfo',
        data: {
          code: that.data.code,
          appid: appid,
          secret: secret
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data.user_info);
          app.globalData.userAllInfo = res.data.user_info;
          
          wx.setStorageSync('openid', res.data.openid);
          wx.setStorageSync("session_key", res.data.session_key)
          wx.setStorageSync("unionid", res.data.unionid)

          that.postUserInfo(that.data.userInfo);

          if (res.data.exist == 0){
            //不存在

            wx.redirectTo({
              url: '../login/login',
            })
          }else{

            

            if (wx.getWeRunData) {

              wx.getWeRunData({
                success(res) {
                  //console.log('获取计步接口成功！' + res.errMsg)
                  const encryptedData = res.encryptedData
                  that.setData({ iv: res.iv })
                  that.setData({ encryptedData: encryptedData })
                  that.get3rdSession();
                  that.getThreeAndFour();
                },
                fail(error) {
                  //console.log(error);
                }
              })
              //定时
              setInterval(function () {
                wx.getWeRunData({
                  success(res) {
                    //console.log('获取计步接口成功！' + res.errMsg)
                    const encryptedData = res.encryptedData
                    that.setData({ iv: res.iv })
                    that.setData({ encryptedData: encryptedData })
                    that.get3rdSession();

                  },
                  fail(error) {
                    //console.log(error);
                  }
                })

              }, 1000 * 60);
              
            } else {
              //console.log("不支持计步");
            }

          }
        },
        fail: function(msg){
          console.log(msg)
        }
      })
  },

  postUserInfo: function(UserInfo){
    let that = this
    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=userInfoSave',
      data: {
        avatarUrl: UserInfo.avatarUrl,
        city: UserInfo.city,
        country: UserInfo.country,
        gender: UserInfo.gender,
        language: UserInfo.language,
        nickName: UserInfo.nickName,
        province: UserInfo.province,
        m_id: app.globalData.userAllInfo.m_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        //console.log(res.data);

      }
    })

  },

  getThreeAndFour: function () {
    let that = this
    wx.request({
      url: app.globalData.url + '/index.php?g=Api&m=CommonApi&a=getTodayStep',
      data: {
        m_id: app.globalData.userAllInfo.m_id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          morning_step: res.data.morning_step,
          night_step: res.data.night_step
        })
      }
    })

  },

  bindchange: function (e) {//轮播图发生改变
    this.setData({
      current: e.detail.current
    })
  },

  goToDetail: function (e) {
    // let itemIndex = parseInt(e.currentTarget.dataset.index);
    // let id = this.data.list[itemIndex].id;
    // console.log(id);
    wx.navigateTo({
      url: '../indexDetail/indexDetail?id=' + this.data.imageObj[this.data.current].id
    })

    console.log(this.data.current);
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
          myRank: res.data.rank,
        })


      }
    });

  },

  onLoad: function () {
    //console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        screenWidth: wx.getSystemInfoSync().windowWidth
      })

      console.log(that.data.screenWidth);
     
      
    })

    // wx.request({
    //   url: 'https://weixin.gotocoding.com/',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   method: 'POST',
    //   success: function (res) {
    //     console.log(res.data);
    //   },
    //   fail: function(msg){
    //     console.log(msg)
    //   }
    // })
    
    that.getSwipeImage();

    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          console.log('获取用户登录成功！' + res.code)
          that.setData({ code: res.code })

          that.judgeBindInfo();
          

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)

        }
      }
    });

  },

  goCard: function(){
    var myDate = new Date();
    var hour = myDate.getHours();
    console.log(hour);
    if (((hour => 5) && (hour < 9)) || ((hour => 17) && (hour < 23))){
      wx.showToast({
        title: '已打卡成功',
        icon: 'success',
        duration: 1000,
        mask: true
      })
    }else{
      wx.showToast({
        title: '请在朝三暮四时间段内打卡',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
  },

  goSecondTab: function(){
    wx.redirectTo({
      url: '../main/main'
    }); 

  },

  goThirdTab: function(){
    wx.redirectTo({
      url: '../mall/mall'
    });
  },

  goFourthTab: function(){
    wx.redirectTo({
      url: '../order/order'
    });
  }



})
