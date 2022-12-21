import { sleep } from "./sleep";
import {debounce} from "./debounce"
import {throttle} from './throttle'
import { verify } from "./verify";
export * from './sleep'
export * from './debounce'
export * from './throttle'
export * from './verify'
export const common = {
  sleep,
  debounce,
  throttle,
  verify
}
