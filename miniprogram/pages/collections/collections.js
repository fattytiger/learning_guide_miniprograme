// miniprogram/pages/collections/collections.js
const db = wx.cloud.database()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collection: [],
    showTips: false
  },
  //进入页面
  into_section: function(e) {
    console.log(e.currentTarget.dataset.target, e.currentTarget.dataset.template, e.currentTarget.dataset.chapter_id)
    let target = e.currentTarget.dataset.target;
    let template = e.currentTarget.dataset.template
    let chapter_id = e.currentTarget.dataset.chapter_id
    wx.navigateTo({
      url: '../articals/articals?mini_section_id=' + target + '&template=' + template + '&chapter_id=' + chapter_id + '',
    })
  },
  //删除收藏
  clear_collection(e) {
    console.log(e.currentTarget.dataset.mini)
    wx.showModal({
      title: '删除该收藏',
      content: '你确定要删除该收藏吗，删除过后可能无法恢复',
      showCancel: true,
      cancelText: '我再想想',
      confirmText: '我心如铁',
      success: res => {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: 'remove_collection',
            data: {
              target: e.currentTarget.dataset.mini
            },
            success: res => {
              this.onShow()
            }
          })
        } else if (res.cancel) {

        }
      }
    })
  },

  onLoad: function(options) {

  },
  onShow: function() {
    db.collection('user_collections').where({
      _openid: app.globalData.open_id
    }).get({
      success: res => {
        if (res.data.length == 0) {
          this.setData({
            showTips: true
          })
        } else if(res.data.length>0){
          this.setData({
            showTips:false,
            collection: res.data
          })
        }

      }
    })
  },
  onPullDownRefresh: function() {
    this.onShow()
  },
  onShareAppMessage: function() {

  }
})