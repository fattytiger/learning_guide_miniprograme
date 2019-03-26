// miniprogram/pages/chapters/chapters.js
import animation from '../../utils/animation.js'
const db = wx.cloud.database()
const app = getApp()
Page({
  ...animation.show_animation,
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
    progress: [],
    status:0,
    scroll_top:0,
    propValue:true,
  },
  learn: function(e) {
    this.setData({
      target_id: e.currentTarget.dataset.num
    })
    wx.navigateTo({
      url: '../sections/sections?chapter_id=' + this.data.target_id + ''
    })
  },
  scroll:function(e){
   if(e.detail.deltaY<0){
     this.setData({
       propValue:false
     })
   }
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

  onShow: function() {
    //渲染进度条
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
    setTimeout(function () {
      this.banner_animation(this,'top_in',200)
    }.bind(this), 100)
    setTimeout(function(){
      this.template_animation(this,'chapter_in',-60)
    }.bind(this),100)
  },
  
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
  onShareAppMessage: function() {

  }
})