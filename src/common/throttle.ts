export function throttle(fn:Function,time:number):Function{
  let timer=null
  return ()=>{
    if(timer)return
    timer = setTimeout(() => {
      fn()
      timer=null
    }, time);
  }
}
