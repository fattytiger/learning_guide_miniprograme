// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
 const fileList = [
   'cloud://point-28b6b8.706f-point-28b6b8/images/1.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/2.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/3.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/4.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/5.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/6.png'
   ]
   const result = await cloud.getTempFileURL({
     fileList,
   })
   return result.fileList
}