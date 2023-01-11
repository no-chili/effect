/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 14:19:18
 * @Description: 
 */
import { sleep } from "./sleep";
import {debounce} from "./debounce"
import {throttle} from './throttle'
import { verify } from "./verify";
import { deepClone } from "../common/deepClone"
export * from './sleep'
export * from './debounce'
export * from './throttle'
export * from './verify'
export default {
  sleep,
  debounce,
  throttle,
  verify,
  deepClone
}
