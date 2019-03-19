// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event, context)
  switch (event.chapter_id) {
    case "chapter_01": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_01: _.inc(15)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_02": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_02: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_03": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_03: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_04": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_04: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_05": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_05: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_06": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_06: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_07": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_07: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_08": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_08: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_09": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_09: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_10": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_10: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_11": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_11: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;

    case "chapter_12": {
      try {
        return await db.collection('counters').where({
          _openid: event.open_id
        })
          .update({
            data: {
              chapter_12: _.inc(1)
            }
          })
      } catch (e) {
        console.error(e)
      }
    }
      break;
  }

}