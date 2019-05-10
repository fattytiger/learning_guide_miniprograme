const db = wx.cloud.database()
import arr_option from '../../utils/utils.js'
const app = getApp()
Page({
  ...arr_option.calculate_progress,
  data: {
    progress:0,
    edage_image:[],
    percent:[],
    percent_count:[17,34,51,68,85,100]
  },




  onLoad: function (options) {
    db.collection('counters').where({
      _openid: app.globalData.openid
    }).get({
      success:res => {
        let pro_count = res.data[0].progress
        this.setData({
          progress: res.data[0].progress.toFixed(2)
        })
        let new_arr = new Array(6)
        for(let i=0;i<new_arr.length;i++){
          new_arr[i] = res.data[0].progress
        }
        let arr = this.badage_progress(new_arr)
        this.setData({
          percent:arr
        })
      }
    })


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
        setTimeout(function () {
          wx.hideLoading()
        })
      }
    })
  },
  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})