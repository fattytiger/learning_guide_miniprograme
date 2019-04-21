// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const user_answer = event.answer_arr
  const user_score = event.user_score
  const correct_arr = event.correct_arr
  const check_arr = event.check_arr
  const test_chapter = event.test_chapter
  const chapter_id = event.chapter_id
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  await db.collection('counters').where({
    _openid: wxContext.OPENID
  }).update({
    data:{
      test_chapter:test_chapter
    },
    success:res => {
      console.log(res)
    }
  })


  return await db.collection('user_test_score').add({
    data:{
      chapter_id:chapter_id,
      _openid: wxContext.OPENID,
      user_answer:user_answer,
      user_score: user_score,
      correct_arr:correct_arr,
      check_arr:check_arr
    }
  })

}