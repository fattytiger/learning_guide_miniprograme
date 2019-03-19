// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command


// 云函数入口函数
exports.main = async(event, context) => {
  let open_id = event.open_id
  let mini_section_id = event.mini_section_id
  try {

    return await db.collection('counters').where({
        _openid: open_id
      })
      .update({
        data: {
          mini_section_id: _.push(mini_section_id)
        },
        success: res => {
          console.log(res)
        },
        fail: err => {
          console.log(err)
        }
      })
  } catch (e) {
    console.log(e)
  }
}