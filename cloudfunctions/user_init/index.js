// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('counters').add({
    data:{
      _openid:wxContext.OPENID,
      chapter_01:0,
      chapter_02: 0,
      chapter_03: 0,
      chapter_04: 0,
      chapter_05: 0,
      chapter_06: 0,
      chapter_07: 0,
      chapter_08: 0,
      chapter_09: 0,
      chapter_10: 0,
      chapter_11: 0,
      chapter_12: 0,
      chapter_13: 0,
      chapter_14: 0,
      progress:0
    }
  })
}