/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 13:46:06
 * @Description: 判断是否为对象
 */
export const isObject = (value) => {
  return value != null && (typeof value == 'object' || typeof value == 'function')
}
