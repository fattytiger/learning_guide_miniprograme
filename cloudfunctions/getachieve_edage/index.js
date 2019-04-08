// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
 const fileList = [
   'cloud://point-28b6b8.706f-point-28b6b8/images/01.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/02.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/03.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/04.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/05.png',
   'cloud://point-28b6b8.706f-point-28b6b8/images/06.png'
   ]
   const result = await cloud.getTempFileURL({
     fileList,
   })
   return result.fileList
}