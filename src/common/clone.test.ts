import { deepClone } from "./deepClone"

/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 14:47:00
 * @Description: 
 */
let obj = {name:'chili',a:null,b:{c:89890}}
obj.a=obj
test('deepclone',()=>{
  expect(deepClone(obj).b===obj.b).toBeFalsy()
})
