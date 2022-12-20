export function debounce(fn:Function,time:number,immediate:boolean):Function{
  let timer=null
  return ()=>{
    if(timer){
      clearInterval(timer)
    }
    immediate&&timer==null&&fn()
    timer = setTimeout(() => {
      !immediate&&fn()
      timer=null
    }, time);
  }
}
