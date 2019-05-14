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
    page_data: {},
    flag: false,
    collection_flag: false,
    collection_text: '收藏',
    open_id: '',
    chapter_id: '',
    mini_section_id: '',
    flag_text: '阅读',
    image_src: [],
    image_flag: [],
    mini_section_name: ''
  },
  //图片预览功能
  preview_image: function(e) {
    let index = e.currentTarget.dataset.image_index
    console.log(e.currentTarget.dataset.image_index)
    wx.previewImage({
      urls: [this.data.image_src[index]],
      success: res => {}
    })
  },
  //收藏功能
  collection: function() {
    if (this.data.collection_flag == true) {

      wx.showModal({
        title: '删除该收藏',
        content: '你确定要删除该收藏吗，删除过后可能无法恢复',
        showCancel: true,
        cancelText: '我再想想',
        confirmText: '我心如铁',
        success: res => {
          if (res.confirm) {
            wx.showLoading({
              title: '请稍等',
              mask: true,
              success: res => {
                wx.cloud.callFunction({
                  name: 'remove_collection',
                  data: {
                    target: this.data.mini_section_id
                  },
                  success: res => {
                    this.setData({
                      collection_flag: false,
                      collection_text: '取消收藏',
                    })
                    setTimeout(function() {
                      wx.hideLoading()
                    })
                  }
                })
              }
            })
          } else if (res.cancel) {

          }
        }
      })

    }
    if (this.data.collection_flag == false) {
      wx.showLoading({
        title: '正在收藏',
        mask: true,
        success: res => {
          wx.cloud.callFunction({
            name: 'collections_add',
            data: {
              open_id: this.data.open_id,
              mini_section_id: this.data.mini_section_id,
              mini_section_name: this.data.mini_section_name,
              template: this.data.template,
              chapter_id: this.data.chapter_id,
              delete_flag: false
            },
            success: res => {
              this.setData({
                collection_flag: true,
                collection_text: '已收藏',
              })
              setTimeout(function() {
                wx.hideLoading()
              })
            },
            fail: err => {
              console.log(err)
            }
          })
        }
      })
    }
  },


  read: function() {
    //如果没阅读就往数据库中写入数据，如果阅读过就返回
    if (this.data.flag == false) {
      wx.showLoading({
        title: '正在请求',
        mask: true,
        success: res => {
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
                    flag: true,
                    flag_text: '已阅读'
                  })
                  setTimeout(function() {
                    wx.hideLoading()
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
        }
      })
    }
    if (this.data.flag == true) {
      wx.showToast({
        title: '读过了',
        duration: 2000
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
      mask: false,
      success: res => {
        //获取数据库中的文章
        let mini_section_id = options.mini_section_id
        this.setData({
          // template: options.template,
          open_id: app.globalData.openid,
          chapter_id: options.chapter_id,
          mini_section_id: mini_section_id
        })
        db.collection('artical').where({
          mini_section_id: mini_section_id
        }).get({
          success: res => {
            let image_src = new Array()
            let image_flag = new Array()
            for (let i = 0; i < res.data[0].data.content.length; i++) {
              if (res.data[0].data.content[i].image) {
                image_src[i] = res.data[0].data.content[i].image
                image_flag[i] = i
              } else {
                image_src[i] = 'no'
                image_flag[i] = 'no'
              }
            }
            console.log(res.data[0])
            this.setData({
              page_data: res.data[0].data,
              mini_section_name: res.data[0].mini_section_name,
              image_src: image_src,
              image_flag: image_flag
            })
            setTimeout(function() {
              wx.hideLoading()
            })
            //判断用户是否阅读过该文章
            db.collection('counters').where({
              _openid: this.data.open_id
            }).get({
              success: res => {
                let section_arr = res.data[0].mini_section_id
                for (let i = 0; i < section_arr.length; i++) {
                  if (section_arr[i] == options.mini_section_id) {
                    this.setData({
                      flag: true,
                      flag_text: '已阅读'
                    })
                    break
                  }
                }
                setTimeout(function() {
                  wx.hideLoading()
                })
              }
            })
            db.collection('user_collections').where({
              _openid: this.data.open_id
            }).where({
              mini_section_id: options.mini_section_id
            }).get({
              success: res => {
                if (res.data.length == 0) {
                  this.setData({
                    collection_flag: false
                  })
                } else {
                  this.setData({
                    collection_flag: true
                  })
                }
              }
            })

          }
        })
      }
    })
  },
  onShow: function() {

  },
  onShareAppMessage: function() {

  }
})