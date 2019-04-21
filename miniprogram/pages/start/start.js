// miniprogram/pages/start/start.js
const app = getApp();
const db = wx.cloud.database()
import animation from '../../utils/animation.js'
Page({
  ...animation.start_animation,
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    image_src:{},
    systemInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      systemInfo:app.globalData.systemInfo
      
    })
    this.setData({
      image_src: {
        mount_bg: '../../images/start_bg1.png',
        mount_right: '../../images/start_bg2.png',
        mount_left: '../../images/start_bg3.png',
        person: '../../images/start_person.png'
      }
    })
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
      app.globalData.userInfo =e.detail.userInfo
      wx.cloud.callFunction({
        name:'login',
        success:res => {
          app.globalData.openid = res.result.openid
          db.collection('counters').where({
            _openid:res.result.openid
          }).get({
            success:res => {
              if (res.data.length == 0) {
                wx.cloud.callFunction({
                  name: 'user_init',
                  success: res => {
                    console.log('success')
                  }
                })
              }else{
                
              }
            }
          })
        }
      })
    }
    wx.reLaunch({
      url: '../chapters/chapters',
    })
  },

  
  onShow: function () {

    //出入场动画
      setTimeout(function () {
        this.bg_show(this, 'mount_right', -(this.data.systemInfo.screenWidth))
      }.bind(this), 500)
      setTimeout(function () {
        this.bg_show(this, 'mount_left', this.data.systemInfo.screenWidth)
      }.bind(this), 1000)
      setTimeout(function () {
        this.person_show(this, 'mount_person', this.data.systemInfo.screenHeight)
      }.bind(this), 1500)
      setTimeout(function () {
        this.bg_show(this, 'mount_btn', this.data.systemInfo.screenWidth * (250 / 750))
      }.bind(this), 3000)
    }
})