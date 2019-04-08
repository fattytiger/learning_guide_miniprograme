// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context)=> {
  let d = new Date()
  let datetime = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

  return await db.collection('counters').where({
    _openid: event.open_id
  })
    .update({
    data: {
      collection: _.push({
        date:datetime,
        mini_section_id: event.mini_section_id,
        mini_section_name: event.mini_section_name,
        template:event.template,
        chapter_id:event.chapter_id,
        delete_flag:event.delete_flag
      })
    }
  })
} 