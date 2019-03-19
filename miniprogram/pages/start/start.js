// miniprogram/pages/start/start.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_src: '../../images/bg.png',
    userInfo:{},
    _openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取用户权限
      wx.getSetting({
        success:res => {
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success:res => {
                this.setData({
                  userInfo:res.userInfo
                })
              }
            })
          }
        }
      })
  },

  //获取用户信息，绑定在app.js中
  onGetUserInfo:function(e){
    if(e.detail.userInfo){
      this.setData({
        userInfo:e.detail.userInfo
      })
    }
    wx.cloud.callFunction({
      name:'login',
      data:{},
      success:res => {
        app.globalData.openid = res.result.openid;
        wx.redirectTo({
          url: '../chapters/chapters',
        })
      }
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