// miniprogram/pages/chapters/chapters.js
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open_id: '',
    sections: [],
    chapters:[],
    chapter_pro: {},
    study_flag: 'learn',
    target_id: '',
    progress: []
  },
  learn: function(e) {
    this.setData({
      target_id: e.currentTarget.dataset.num
    })
    wx.navigateTo({
      url: '../sections/sections?chapter_id=' + this.data.target_id + ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.openid) {
      this.setData({
        open_id: app.globalData.openid
      })
      console.log(this.data.open_id)
    }

    db.collection('sections').get({
      success: res => {
        this.setData({
          sections: res.data
        })
      }
    })

    db.collection('chapter').get({
      success:res => {
        this.setData({
          chapters:res.data
        })
      }
    })

  






    //判断用户是否初次使用
    db.collection('counters').get({
      success: res => {
        if (res.data.length == 0) {
          this.setData({
            progress:[0,0,0,0,0,0,0,0,0,0,0,0]
          })
          db.collection('counters').add({
            data: {
                chapter_01: 0,
                chapter_02: 0,
                chapter_03: 0,
                chapter_04: 0,
                chapter_05: 0,
                chapter_06: 0,
                chapter_07: 0,
                chapter_08: 0,
                chapter_09: 0,
                chapter_10: 0,
                chapter_11: 0,
                chapter_12: 0
            },
            success: res => {
              
            }
          })
        }
      }
    })

    





  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {



  },

  //对象转换成数组

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    
    db.collection('counters').where({
      _openid: this.data.open_id
    }).get({
      success: res => {
        let arr = [
          res.data[0].chapter_01,
          res.data[0].chapter_02,
          res.data[0].chapter_03,
          res.data[0].chapter_04,
          res.data[0].chapter_05,
          res.data[0].chapter_06,
          res.data[0].chapter_07,
          res.data[0].chapter_08,
          res.data[0].chapter_09,
          res.data[0].chapter_10,
          res.data[0].chapter_11,
          res.data[0].chapter_12,
          res.data[0].chapter_13
        ]
        this.setData({
          progress: arr
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    db.collection('counters').where({
      _openid: this.data.open_id
    }).get({
      success: res => {
        let arr = [
          res.data[0].chapter_01,
          res.data[0].chapter_02,
          res.data[0].chapter_03,
          res.data[0].chapter_04,
          res.data[0].chapter_05,
          res.data[0].chapter_06,
          res.data[0].chapter_07,
          res.data[0].chapter_08,
          res.data[0].chapter_09,
          res.data[0].chapter_10,
          res.data[0].chapter_11,
          res.data[0].chapter_12,
          res.data[0].chapter_13
        ]
        this.setData({
          progress: arr
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})