// miniprogram/pages/user_achievement/user_achievement.js
const app = getApp()
Page({

  data: {
    userInfo :""
  },

  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  onShow: function () {

  },
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {

  }
})