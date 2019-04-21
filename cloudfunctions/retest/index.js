// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const update_arr = event.update_arr
  const chapter_id = event.chapter_id 
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  db.collection('counters').where({
    _openid: wxContext.OPENID
  }).update({
    data:{
      test_chapter: update_arr
    }
  })

  return await db.collection('user_test_score').where({
    chapter_id:chapter_id,
    _openid:wxContext.OPENID
  }).remove()
  
}