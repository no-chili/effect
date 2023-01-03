/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-03 14:28:34
 * @Description: 时间间隔转换
 */
export type RetDate='year'|'month'|'day'|'hour'|'minute'|'second'
export type Way='ceil'|'floor'
function difference(currentDate:Date|string,targetDate:Date|string,retDate:RetDate,way:Way):number{
  // 是否包含闰年
  // 是否包含闰月
  const currentDateTime=new Date(currentDate).getTime()
  const targetDateTime=new Date(targetDate).getTime()
  const long=targetDateTime-currentDateTime
  
  if(retDate==='day'){
    return Math[way](long/(1000*60*60*24))
  }
  if(retDate==='hour'){
    return Math[way](long/(1000*60*60))
  }
  if(retDate==='minute'){
    return Math[way](long/(1000*60))
  }
  if(retDate==='month'){
    return Math[way](long/(1000*60*60*24*30))
  }
  if(retDate==='second'){
    return Math[way](long/(1000))
  }
  if(retDate==='year'){
    return Math[way](long/(1000*60*60*24*365))
  }
}

export {difference}
