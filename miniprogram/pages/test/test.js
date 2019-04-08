Page({
  data: {
    image_src:[
      "cloud://point-28b6b8.706f-point-28b6b8/fifth_chapter/5111.png",
      "cloud://point-28b6b8.706f-point-28b6b8/fifth_chapter/51110.png",
      "cloud://point-28b6b8.706f-point-28b6b8/fifth_chapter/5112.png",
    ]
  },
  onLoad:function(){
    setTimeout(function(){
      let animation = wx.createAnimation({
        duration:1000,
        timingFunction:'ease-in'
      })
      animation.rotate3d(1,0,0,360).step()
      this.setData({
        box:animation.export()
      })
    }.bind(this),500)
  }

})