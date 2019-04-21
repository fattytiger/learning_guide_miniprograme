// miniprogram/pages/user_achievement/user_achievement.js
const app = getApp()
import animation from '../../utils/animation.js'
import options from '../../utils/utils.js'
const db = wx.cloud.database()

Page({
  ...animation.show_animation,
  ...options.calculate_progress,
  data: {
    userInfo :"",
    systemInfo:{},
    edage_image:[],
    progress:0,
    range:0
  },
  into_collection:function(){
    wx.navigateTo({
      url: '../collections/collections',
    })
  },
  into_test:function(){
    wx.navigateTo({
      url: '../chapter_test/chapter_test',
    })
  },


  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo,
      systemInfo:app.globalData.systemInfo
    })

    wx.showLoading({
      title: '请稍后',
      success:res => {
        wx.cloud.callFunction({
          name: "getachieve_edage",
          success: res => {
            let edage = new Array()
            for (let i = 0; i < res.result.length; i++) {
              edage[i] = res.result[i].tempFileURL
            }
            this.setData({
              edage_image: edage
            })
            setTimeout(function(){
              wx.hideLoading()
            })
          }
        })
      }
    })

  },
  onShow: function () {
    db.collection('counters').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        let pre = res.data[0].progress
        this.setData({
          range: this.calculate(pre),
          progress: res.data[0].progress
        })
      }
    })
    setTimeout(function(){
      this.user_chieve_animation(this, 'chieve',1.3,1 )
    }.bind(this),500)
    setTimeout(function () {
      this.user_icon_animation(this, 'user_icon', 360)
    }.bind(this), 500)
    
  },
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {

  }
})