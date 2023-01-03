/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-03 14:31:29
 * @Description: 计算平闰年
 */
/**
 * @description: 
 * @param {Date} date
 */
export function isLeapYear(date:Date|string):boolean{
  const year=new Date(date).getFullYear()
  if(year%4===0&&year%100!==0||year%400===0){
    return true
  }
  return false
}
