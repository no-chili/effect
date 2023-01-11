/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 14:20:54
 * @Description: js-effect js工具函数库
 */
export * from './reg'
export * from './common'
import time from './time'
import common from './common'
import image from './image'
import dom from './dom'
import bom from './bom'
import Object from './Object'
import Array from './Array'
import base from './base'
export default {
  ...time,
  ...common,
  ...image,
  ...dom,
  ...bom,
  ...base,
  Object,
  Array
}
