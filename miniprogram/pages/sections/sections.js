// miniprogram/pages/sections/sections.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sections:[],
    mini_section:[],
    chapter_name:'',
    target:[],
    target_id:"",
    chapter_id:''
  },
  learn_article:function(e){
    
  },
  into_mini_section:function(e){
    console.log(e.currentTarget.dataset.num)
    let target = e.currentTarget.dataset.num;
    let template = e.currentTarget.dataset.tem 
    wx.navigateTo({
      url: '../articals/articals?mini_section_id='+target+'&template='+template+'&chapter_id='+this.data.chapter_id+'',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let target = options.chapter_id
   this.setData({
     chapter_id: options.chapter_id
   })
    const db = wx.cloud.database()
    db.collection("chapter").where({
      chapter_id:target
    }).get({
      success:res => {
        console.log(res.data[0])
        this.setData({
          sections:res.data[0].section,
          chapter_name:res.data[0].chapter_name,
          mini_section:res.data[0].mini_section,
          target:res.data[0].target
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})