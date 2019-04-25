// miniprogram/pages/chapter_test/chapter_test.js
import animation from '../../utils/animation.js'
const db = wx.cloud.database()
const app = getApp()
Page({
  ...animation.test_animation,
  data: {
    page_list:[],
    test_chapter:[]
  },

  test_detail:function(e){
    if(e.currentTarget.dataset.flag=='yes'){
      wx.navigateTo({
        url: '../question_detail/question_detail?chapter_id=' + e.currentTarget.dataset.id + '&chapter_name=' + e.currentTarget.dataset.name + '&chapter_index=' + e.currentTarget.dataset.index + '&falg=yes',
      })
    }else{
      console.log(e.currentTarget.dataset)
      wx.navigateTo({
        url: '../question_detail/question_detail?chapter_id=' + e.currentTarget.dataset.id + '&chapter_name=' + e.currentTarget.dataset.name + '&chapter_index=' + e.currentTarget.dataset.index + '&flag=no',
      })
    }
  },

  onLoad: function (options) {
    wx.showLoading({
      title: '请稍后',
      success: res => {
        db.collection('chapter_test').get({
          success: res => {
            this.setData({
              page_list: res.data
            })
            db.collection('counters').where({
              _openid: app.globalData.openid
            }).get({
              success: res => {
                this.setData({
                  test_chapter: res.data[0].test_chapter
                })
                setTimeout(function(){
                  wx.hideLoading()
                })
              }, fail: err => {
                console.log(err)
              }
            })
          }
        })
      }
    })
  },
  onShow: function () {
    wx.showLoading({
      title: '请稍后',
      success:res => {
        db.collection('chapter_test').get({
          success: res => {
            this.setData({
              page_list: res.data
            })
            db.collection('counters').where({
              _openid: app.globalData.openid
            }).get({
              success: res => {
                this.setData({
                  test_chapter: res.data[0].test_chapter
                })
                setTimeout(function () {
                  wx.hideLoading()
                })
              }, fail: err => {
                console.log(err)
              }
            })
          }
        })
      }
    })
  },

  onShareAppMessage: function () {

  }
})