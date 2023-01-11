/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 14:55:33
 * @Description: 判断是否为图片类型
 */
/**
 * @description: 
 * @param {File} file 文件 
 */
export function isImage(file:File){
  const typeName=file.type
  return typeName.split('/')[0]=='image'?true:false
}
