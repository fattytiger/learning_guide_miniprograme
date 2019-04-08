// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  console.log(event)
  return await db.collection('counters').where({
    _openid:event.open_id
  }).update({
    data:{
      progress: [
        {
          name: 'chapter_01',
          progress: 0
        },
        {
          name: 'chapter_02',
          progress: 0
        },
        {
          name: 'chapter_03',
          progress: 0
        },
        {
          name: 'chapter_04',
          progress: 0
        },
        {
          name: 'chapter_05',
          progress: 0
        },
        {
          name: 'chapter_06',
          progress: 0
        },
        {
          name: 'chapter_07',
          progress: 0
        },
        {
          name: 'chapter_08',
          progress: 0
        },
        {
          name: 'chapter_09',
          progress: 0
        },
        {
          name: 'chapter_10',
          progress: 0
        },
        {
          name: 'chapter_11',
          progress: 0
        },
        {
          name: 'chapter_12',
          progress: 0
        },
        {
          name: 'chapter_13',
          progress: 0
        },
        {
          name: 'chapter_14',
          progress: 0
        },
      ]
    }
  })
  
}