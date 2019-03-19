// miniprogram/pages/articals/articals.js
const db = wx.cloud.database()
const _ = db.command
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    template: "",
    page_data: '',
    flag: false,
    open_id: '',
    chapter_id: '',
    mini_section_id: '',
    flag_text:'阅读'
  },



  read: function() {

    console.log(this.data.flag)

    //如果没阅读就往数据库中写入数据，如果阅读过就返回
    if (this.data.flag == false) {
      wx.cloud.callFunction({
        name: "updata_pro",
        data: {
          open_id: this.data.open_id,
          chapter_id: this.data.chapter_id
        },
        success: res => {
          wx.cloud.callFunction({
            name: 'update_section',
            data: {
              open_id: this.data.open_id,
              mini_section_id: this.data.mini_section_id
            },
            success: res => {
              this.setData({
                flag:true,
                flag_text:'已阅读'
              })
            },
            fail: err => {
              console.log(err)
            }
          })
        },
        fail: err => {
          console.log(err)
        }
      })
    } else {
      wx.navigateBack({
        delta:2
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //获取数据库中的文章
    let mini_section_id = options.mini_section_id
    this.setData({
      template: options.template,
      open_id: app.globalData.openid,
      chapter_id: options.chapter_id,
      mini_section_id: mini_section_id
    })
    console.log(app.globalData.openid)
    db.collection('artical').where({
      mini_section_id: mini_section_id
    }).get({
      success: res => {
        console.log(res.data[0])
        this.setData({
          page_data: res.data[0]
        })
      }
    })


    //判断用户是否阅读过该文章
    db.collection('counters').where({
      _openid: this.data.open_id
    }).get({
      success: res => {
        let section_arr = res.data[0].mini_section_id
        for (let i = 0; i < section_arr.length; i++) {
          if (section_arr[i] == options.mini_section_id) {
            console.log(section_arr[i])
            this.setData({
              flag: true,
              flag_text:'已阅读'
            })
            break
          }
        }
      }
    })
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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