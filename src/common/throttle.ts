export function throttle(fn:Function,time:number,immediate:boolean):Function{
  let timer=null
  return ()=>{
    if(timer)return
    timer = setTimeout(() => {
      !immediate && fn()
      timer=null
    }, time);
    immediate&&fn()
  }
}
