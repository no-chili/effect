/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-03 14:20:39
 * @Description: 判断是否为图片类型
 */
/**
 * @description: 
 * @param {File} 文件 
 */
export function isImage(file:File){
  const typeName=file.type
  return typeName.split('/')[0]=='image'?true:false
}
