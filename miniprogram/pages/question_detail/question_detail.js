const db = wx.cloud.database()
import array_option from '../../utils/utils.js'
const app = getApp()
Page({
  ...array_option.check_test,
  data: {
    chapter_id:'',
    chapter_name:'',
    question_list:[],
    submit_flag:false,
    score_flag:false,
    answer_arr:[],
    correct_arr:[],
    checked_arr:[],
    test_chapter:[],
    sub_flag:true,
    user_score:0,
    chapter_index:0,
    page_flag:'no'
  },

  //作答选择题
  radio_change:function(e){
    //修改answer_arr数据
    this.data.answer_arr.splice(e.currentTarget.dataset.id,1,e.detail.value)
  },
  //查看详情
  into_detail:function(){
    this.setData({
      score_flag: false,
      submit_flag: true,
      sub_flag:false
    })
  },
  retest:function(){
    let new_arr = new Array()
    for(let i=0;i<this.data.test_chapter.length;i++){
      new_arr[i] = this.data.test_chapter[i]
    }
    new_arr.splice(this.data.chapter_index,1,"0")
    console.log(new_arr)
    wx.showLoading({
      title: '请稍后',
      success: res => {
        wx.cloud.callFunction({
          name: 'retest',
          data: {
            update_arr: new_arr,
            chapter_id: this.data.chapter_id
          },
          success: res => {
            console.log(res)
            wx.navigateBack({
              url: '../chapter_test/chapter_test'
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

  },

  submit:function(){
    if(this.data.sub_flag==true){
      //检查是否全部作答
      let check_arr = new Array()
      for (let i = 0; i < this.data.answer_arr.length; i++) {
        check_arr[i] = this.data.answer_arr[i]
      }
      for (let i = 0; i < check_arr.length; i++) {
        if (check_arr[i] == "") {
          check_arr.splice(i, 1)
        }
      }
      if (check_arr.length != this.data.answer_arr.length) {
        wx.showToast({
          title: '有未作答内容',
          image: '../../images/fail.png',
          duration: 1000
        })
      } else {
        const checked = this.check_arr(this.data.answer_arr, this.data.correct_arr);
        let score = 0;
        for (let i = 0; i < checked.length; i++) {
          if (checked[i] == "") {
            score += 10
          }
        }
        wx.showLoading({
          title: '正在计算',
          mask: true,
          success: res => {
            this.setData({
              score_flag: true,
              checked_arr: checked,
              answer_arr: this.data.answer_arr,
              user_score: score
            })

            let update_arr =new Array()
            update_arr =  this.data.test_chapter
            update_arr.splice(this.data.chapter_index, 1, score)
            wx.cloud.callFunction({
              name: 'check_test',
              data: {
                chapter_id:this.data.chapter_id,
                answer_arr: this.data.answer_arr,
                correct_arr: this.data.correct_arr,
                check_arr: this.data.checked_arr,
                user_score: score,
                test_chapter:update_arr
              },
              success: res => {
                this.setData({
                  score_flag: true
                })
                setTimeout(function () {
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
    }else{
      this.setData({
        score_flag: true
      })
    }
  },

  onLoad: function (options) {
    if(options.flag=='no'){
      this.setData({
        page_flag:'no'
      })
      wx.showLoading({
        title: '请稍等',
        mask: true,
        success: res => {
          console.log(options)
          //获取用户测试进度
          db.collection('counters').where({
            _openid: app.globalData.openid
          }).get({
            success: res => {
              console.log(res.data[0].test_chapter)
              this.setData({
                test_chapter: res.data[0].test_chapter
              })
            }
          })

          db.collection('' + options.chapter_id + '').orderBy('order','asc').get({
            success: res => {
              console.log(res)
              //init answer_arr
              let init_answer_arr = new Array()
              for (let i = 0; i < res.data.length; i++) {
                init_answer_arr[i] = ""
              }

              //init correct_arr
              let init_correct_arr = new Array()
              for (let i = 0; i < res.data.length; i++) {
                init_correct_arr[i] = res.data[i].correct
              }

              this.setData({
                chapter_id: options.chapter_id,
                question_list: res.data,
                chapter_name: options.chapter_name,
                answer_arr: init_answer_arr,
                correct_arr: init_correct_arr,
                chapter_index: options.chapter_index
              })
              setTimeout(function () {
                wx.hideLoading()
              })
            }
          })
        }
      })
    } else {
      this.setData({
        page_flag: 'yes'
      })
      wx.showLoading({
        title: '请稍后',
        success:res => {
          db.collection('counters').where({
            _openid: app.globalData.openid
          }).get({
            success: res => {
              this.setData({
                test_chapter: res.data[0].test_chapter
              })
            }
          })

          db.collection('' + options.chapter_id + '').orderBy('order', 'asc').get({
            success: res => {
              db.collection('user_test_score').where({
                _openid: app.globalData.openid,
                chapter_id: options.chapter_id
              }).get({
                success: res => {
                  this.setData({
                    checked_arr: res.data[0].check_arr,
                    correct_arr: res.data[0].correct_arr,
                    answer_arr: res.data[0].user_answer,
                    user_score: res.data[0].user_score
                  })
                }
              })

              this.setData({
                chapter_id: options.chapter_id,
                question_list: res.data,
                chapter_name: options.chapter_name,
                chapter_index: options.chapter_index,
                submit_flag: true,
                sub_flag: false,
              })
              setTimeout(function () {
                wx.hideLoading()
              })
            }
          })
        }
      })
    }
  },
})