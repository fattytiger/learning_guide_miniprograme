// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let d = new Date()
  let datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  let mini_section = event.mini_section_id

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  return await db.collection('user_collections').add({
    data:{
      _openid:wxContext.OPENID,
      date: datetime,
      mini_section_id: event.mini_section_id,
      mini_section_name: event.mini_section_name,
      template: event.template,
      chapter_id: event.chapter_id,
      delete_flag: event.delete_flag
    }
  })
}