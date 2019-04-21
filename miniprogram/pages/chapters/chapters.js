// miniprogram/pages/chapters/chapters.js
import animation from '../../utils/animation.js'
const db = wx.cloud.database()
const app = getApp()
Page({
  ...animation.show_animation,
  data: {
    open_id: '',
    chapters:[],
    target_id: '',
    progress: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    systemInfo:{},
    inputVal:'',
    inputShow:false,
    lunbo_data:{},
    input_show:false,
    input_val:''
  },
   //搜索
  show_input:function(){
    this.setData({
      input_show:true
    })
  },
  input_content:function(e){
    this.setData({
      input_val:e.detail.value
    })
  },
  hide_input:function(){
    this.setData({
      input_val:'',
      input_show:false
    })
  },
  clear_input:function(){
    this.setData({
      input_val:''
    })
  },

  lunbo_click:function(e){
    wx.navigateTo({
      url: '../lunbo_detail/lunbo_detail?id='+e.currentTarget.dataset.id+'',
    })
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
  onLoad: function(options) {
    wx.showLoading({
      title: '请稍后',
      success:res => {
        db.collection('lunbo').get({
          success: res => {
            this.setData({
              lunbo_data: res.data
            })
            setTimeout(function(){
              wx.hideLoading()
            })
          }
        })
      }
    })


    this.setData({
      systemInfo: app.globalData.systemInfo,
      open_id: app.globalData.openid
    })
    //获取章节信息
    db.collection('chapter').get({
      success:res => {
        this.setData({
          chapters:res.data
        })
      }
    })
  },

  onReady:function(){
   
  },
  onHide:function(){

  },
  onShow: function() {
    db.collection('counters').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        //如果存在则将数据写入progress
        let progress_arr = new Array()
        progress_arr[0] = res.data[0].chapter_01
        progress_arr[1] = res.data[0].chapter_02
        progress_arr[2] = res.data[0].chapter_03
        progress_arr[3] = res.data[0].chapter_04
        progress_arr[4] = res.data[0].chapter_05
        progress_arr[5] = res.data[0].chapter_06
        progress_arr[6] = res.data[0].chapter_07
        progress_arr[7] = res.data[0].chapter_08
        progress_arr[8] = res.data[0].chapter_09
        progress_arr[9] = res.data[0].chapter_10
        progress_arr[10] = res.data[0].chapter_11
        progress_arr[11] = res.data[0].chapter_12
        progress_arr[12] = res.data[0].chapter_13
        progress_arr[13] = res.data[0].chapter_14
        this.setData({
          progress: progress_arr
        })
      }
    })
    setTimeout(function () {
      this.banner_animation(this, 'top_in', app.globalData.systemInfo.screenHeight * (450/1334))
    }.bind(this), 1000)
    setTimeout(function () {
      this.calendar_animation(this, 'calendar', app.globalData.systemInfo.screenHeight * (275/1334))
    }.bind(this), 1000)
  },
  
  onPullDownRefresh: function() {
    db.collection('counters').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        //如果存在则将数据写入progress
        let progress_arr = new Array()
        progress_arr[0] = res.data[0].chapter_01
        progress_arr[1] = res.data[0].chapter_02
        progress_arr[2] = res.data[0].chapter_03
        progress_arr[3] = res.data[0].chapter_04
        progress_arr[4] = res.data[0].chapter_05
        progress_arr[5] = res.data[0].chapter_06
        progress_arr[6] = res.data[0].chapter_07
        progress_arr[7] = res.data[0].chapter_08
        progress_arr[8] = res.data[0].chapter_09
        progress_arr[9] = res.data[0].chapter_10
        progress_arr[10] = res.data[0].chapter_11
        progress_arr[11] = res.data[0].chapter_12
        progress_arr[12] = res.data[0].chapter_13
        progress_arr[13] = res.data[0].chapter_14
        this.setData({
          progress: progress_arr
        })
      }
    })
  },
  onShareAppMessage: function() {

  }
})