// miniprogram/pages/sections/sections.js
import array_option from '../../utils/utils.js'
import animation from '../../utils/animation.js'
const db = wx.cloud.database()
Page({
  ...array_option.array_option,
  ...animation.section_animation,
  ...animation.show_animation,
  /**
   * 页面的初始数据
   */
  data: {
    sections: [],
    mini_section: [],
    chapter_name: '',
    target: [],
    target_id: "",
    chapter_id: '',
    show: [
      []
    ],
    button_arr: []
  },
  learn_article: function(e) {

  },

  //显示小节
  show_mini_section(e) {
    let index = e.currentTarget.dataset.num;
    let len = this.data.show[index].length;
    let button_arr = this.data.button_arr;
    if (button_arr[index] == 0) {
      this.setData({
        show: this.arr_splice_reverse(this.data.sections.length, this.data.mini_section.length),
        button_arr: this.arr_splice_flag_reverse(this.data.sections.length, index)
      })
      this.mini_section_show(this, 'mini_section_animation', -75, 0.1)
    }
    if (button_arr[index] == 1) {
      this.setData({
        show: this.arr_splice(this.data.sections.length, this.data.mini_section.length, index),
        button_arr: this.arr_splice_flag(this.data.sections.length, index)
      })

      this.mini_section_show(this, 'mini_section_animation', -25, 1.0)
    }

  },



  into_mini_section: function(e) {
    console.log(e.currentTarget.dataset.num)
    let target = e.currentTarget.dataset.num;
    let template = e.currentTarget.dataset.tem
    wx.navigateTo({
      url: '../articals/articals?mini_section_id=' + target + '&template=' + template + '&chapter_id=' + this.data.chapter_id + '',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      chapter_id: options.chapter_id
    })
    db.collection("chapter").where({
      chapter_id: this.data.chapter_id
    }).get({
      success: res => {
        this.setData({
          sections: res.data[0].section,
          chapter_name: res.data[0].chapter_name,
          mini_section: res.data[0].mini_section,
          target: res.data[0].target,
          show: this.arr_push(res.data[0].section.length, res.data[0].mini_section),
          button_arr: this.arr_push_one(res.data[0].section.length)
        })
      }
    })
  },
  onShow: function() {
    db.collection("chapter").where({
      chapter_id: this.data.chapter_id
    }).get({
      success: res => {
        this.setData({
          sections: res.data[0].section,
          chapter_name: res.data[0].chapter_name,
          mini_section: res.data[0].mini_section,
          target: res.data[0].target,
          show: this.arr_push(res.data[0].section.length, res.data[0].mini_section),
          button_arr: this.arr_push_one(res.data[0].section.length)
        })
      }
    })
    setTimeout(function() {
      this.banner_animation(this, 'banner', 225)
    }.bind(this), 100)
    setTimeout(function() {
      this.banner_title_animation(this, 'banner_title', 300)
    }.bind(this), 100)
    setTimeout(function() {
      this.banner_title_animation(this, 'target', -300)
    }.bind(this), 100)
    setTimeout(function() {
      this.init_page(this, 'page_mid', 65)
    }.bind(this), 100)
    setTimeout(function() {
      this.init_page(this, 'section_animation', -25)
    }.bind(this), 500)
    setTimeout(function() {
      this.init_page(this, 'mini_section_animation', -25)
    }.bind(this), 500)
    setTimeout(function() {
      this.mini_section_show(this, 'mini_section_animation', -75, 0.1)
    }.bind(this), 500)
  },



})