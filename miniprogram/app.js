
//app.js
App({
  onLaunch: function() {
    //全局数据
    this.globalData = {
      openid: '',
      userInfo: {},
      systemInfo:{}
    }
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    wx.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res
      },
    })


  }
})