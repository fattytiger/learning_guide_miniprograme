// miniprogram/pages/sections/sections.js
import array_option from '../../utils/utils.js'
import animation from '../../utils/animation.js'
const db = wx.cloud.database()
const app = getApp()
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
    button_arr: [],
    systemInfo:{},
    bookimage:[
      '../../images/book.png',
      '../../images/book_2.png',
      '../../images/book_3.png',
      '../../images/book_4.png',
      '../../images/book.png',
      '../../images/book_2.png',
      '../../images/book_3.png',
      '../../images/book_4.png'
    ],
    random_arr:[],
    shuqian_image:[
      '../../images/shuqian.png',
      '../../images/shuqian_2.png'
    ]
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
    }
    if (button_arr[index] == 1) {
      this.setData({
        show: this.arr_splice(this.data.sections.length, this.data.mini_section.length, index),
        button_arr: this.arr_splice_flag(this.data.sections.length, index)
      })
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
  onLoad: function(options) {
    

    this.setData({
      chapter_id: options.chapter_id,
      systemInfo:app.globalData.systemInfo
    })
    db.collection("chapter").where({
      chapter_id: this.data.chapter_id
    }).get({
      success: res => {

        //随机图片
        let random_arr = new Array();
        for(let i=0;i<res.data[0].section.length;i++){
          random_arr[i] = parseInt(Math.random() * res.data[0].section.length)
        }
        this.setData({
          sections: res.data[0].section,
          chapter_name: res.data[0].chapter_name,
          mini_section: res.data[0].mini_section,
          target: res.data[0].target,
          show: this.arr_push(res.data[0].section.length, res.data[0].mini_section),
          button_arr: this.arr_push_one(res.data[0].section.length),
          random_arr:random_arr
        })


      }
    })
    setTimeout(function () {
      this.banner_animation(this, 'banner', this.data.systemInfo.windowHeight * (450 / 1334))
    }.bind(this), 100)
    setTimeout(function () {
      this.banner_title_animation(this, 'banner_title', this.data.systemInfo.windowWidth * (600 / 750))
    }.bind(this), 100)
    setTimeout(function () {
      this.banner_title_animation(this, 'target', -this.data.systemInfo.windowWidth * (600 / 750))
    }.bind(this), 100)
    setTimeout(function () {
      this.init_page(this, 'page_mid', this.data.systemInfo.windowHeight * (130 / 1334))
    }.bind(this), 100)
    let test = parseInt(Math.random() * 10)
    console.log(test) 

  },
  onShow: function() {
   
  },
})