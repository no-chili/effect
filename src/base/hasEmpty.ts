/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-03 15:20:59
 * @Description: 数组 对象
 */
export function hasEmpty(value:Array<any>|object){
  let flag=false
  if(Array.isArray(value)){
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      if(element==null||element==undefined||element==''){
        flag=true
      }    
    }
  }else{
    for (let index = 0; index < Object.keys(value).length; index++) {
      const key = Object.keys(value)[index];
      if(value[key]==null||value[key]==undefined||value[key]==''){
        flag=true 
      }
    }
  }
  return flag
}
