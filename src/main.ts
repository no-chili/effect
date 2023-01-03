/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-03 15:03:48
 * @Description: js-effect js工具函数库
 */
export * from './reg'
import time from './time'
import common from './common'
import image from './image'
import dom from './dom'
import bom from './bom'
import Object from './Object'
import Array from './Array'
export default {
  ...time,
  ...common,
  ...image,
  ...dom,
  ...bom,
  Object,
  Array
}
