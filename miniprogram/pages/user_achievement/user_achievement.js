// miniprogram/pages/user_achievement/user_achievement.js
const app = getApp()
import animation from '../../utils/animation.js'
Page({
  ...animation.show_animation,
  data: {
    userInfo :"",
    systemInfo:{},
    edage_image:[],
    progress:0
  },
  into_collection:function(){
    wx.navigateTo({
      url: '../collections/collections',
    })
  },

  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo,
      systemInfo:app.globalData.systemInfo
    })
    wx.cloud.callFunction({
      name:"getachieve_edage",
      success:res => {
        let edage = new Array()
        for(let i=0;i<res.result.length;i++){
          edage[i] = res.result[i].tempFileURL
        }
        this.setData({
          edage_image:edage
        })
      }
    })
    wx.cloud.callFunction({
      name:'calculate_progress',
      success:res =>{
        console.log(res.result.data[0].progress)
        let timer = () => {
          setTimeout(() => {
            this.setData({
              progress: this.data.progress < res.result.data[0].progress ? this.data.progress + 0.1 : res.result.data[0].progress
            });
            timer();
          }, 10);
        }
        timer();
      }
    })

  },
  onShow: function () {
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