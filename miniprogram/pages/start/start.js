// miniprogram/pages/start/start.js
const app = getApp();
import animation from '../../utils/animation.js'
Page({
  ...animation.start_animation,
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
      console.log(e.detail.userInfo)
      this.setData({
        userInfo:e.detail.userInfo
      })
    }
    wx.cloud.callFunction({
      name:'login',
      data:{},
      success:res => {
        app.globalData.openid = res.result.openid;
        app.globalData.userInfo = e.detail.userInfo;
        wx.switchTab({
          url: '/pages/chapters/chapters',
        })
      }
    })
  },

  
  onShow: function () {
    setTimeout(function(){
      this.bg_show(this,'mount_right',-375)
    }.bind(this),200)
    setTimeout(function(){
      this.bg_show(this,'mount_left',375)
    }.bind(this),500)
    setTimeout(function(){
      this.person_show(this,'mount_person',667)
    }.bind(this),800)
    setTimeout(function(){
      this.bg_show(this,'mount_btn',140)
    }.bind(this),1000)
  }

})