export default {
  show_animation: {
    //banner出入场
    banner_animation(that, lable, length_one, length_two, length_three) {
      let animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear'
      })
      if(length_one&&length_two&&length_three){
        animation.translateY(length_one).step().translateY(length_two).step().translateY(length_three).step()
        let json = '{"' + lable + '":""}'
        json = JSON.parse(json);
        json[lable] = animation.export()
        that.setData(json)
      }else{
        animation.translateY(length_one).step()
        let json = '{"' + lable + '":""}'
        json = JSON.parse(json);
        json[lable] = animation.export()
        that.setData(json)
      }
    },
    //template出入场
    template_animation(that, label, length_one,length_two,length_three) {
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      if(length_one&&length_two&&length_three){
        animation.translateY(length_one).step().translateY(length_two).step().translateY(length_three).step()
        let json = '{"' + label + '":""}'
        json = JSON.parse(json);
        json[label] = animation.export()
        that.setData(json)
      }else{
        animation.translateY(length_one).step()
        let json = '{"' + label + '":""}'
        json = JSON.parse(json);
        json[label] = animation.export()
        that.setData(json)
      }
    },
    scroll_animation(that,label,length){
      let animation = wx.createAnimation({
        duration:500,
        timingFunction:'linear'
      })
      animation.translateY(length).step()
      let json = '{"' + label + '":""}'
      json = JSON.parse(json);
      json[label] = animation.export()
      that.setData(json)
    },
    banner_title_animation(that, label, length){
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      animation.translateX(length).step()
      let json = '{"' + label + '":""}'
      json = JSON.parse(json);
      json[label] = animation.export()
      that.setData(json)
    },
    calendar_animation(that,label,length){
      let animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear'
      })
      animation.translateY(length).step()
      let json = '{"' + label + '":""}'
      json = JSON.parse(json);
      json[label] = animation.export()
      that.setData(json)
    },
     user_icon_animation(that,lable,deg) {
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      animation.rotate(deg).step()
      let json = '{"' + lable + '":""}'
      json = JSON.parse(json);
      json[lable] = animation.export()
      that.setData(json)
    },
    user_chieve_animation(that,lable,scale_one,scale_two){
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      animation.scale(scale_one).step().scale(scale_two).step()
      let json = '{"' + lable + '":""}'
      json = JSON.parse(json);
      json[lable] = animation.export()
      that.setData(json)
    }

  },
  section_animation:{
    mini_section_show(that, lable,value){
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      animation.opacity(value).step()
      let json = '{"' + lable + '":""}'
      json = JSON.parse(json);
      json[lable] = animation.export()
      that.setData(json)
    },
    init_page(that,lable,length){
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      animation.translateY(length).step()
      let json = '{"' + lable + '":""}'
      json = JSON.parse(json);
      json[lable] = animation.export()
      that.setData(json)
    }
  },
  start_animation:{
    bg_show(that, lable, length){
        let animation = wx.createAnimation({
          duration:1000,
          timingFunction: 'linear'
        })
        animation.translateX(length).step()
        let json = '{"' + lable + '":""}'
        json = JSON.parse(json);
        json[lable] = animation.export()
        that.setData(json)
    },
    person_show(that, lable, length){
      let animation = wx.createAnimation({
        duration:1000,
        timingFunction: 'linear'
      })
      animation.translateY(length).step()
      let json = '{"' + lable + '":""}'
      json = JSON.parse(json);
      json[lable] = animation.export()
      that.setData(json)
    }
  },
  test_animation: {
    top_animation(that, lable, length) {
      let animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'linear'
      })
      animation.translateX(length).step()
      let json = '{"' + lable + '":""}'
      json = JSON.parse(json);
      json[lable] = animation.export()
      that.setData(json)
    }
  }
}