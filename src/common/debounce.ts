export function debounce(fn:Function,time:number):Function{
  let timer=null
  return ()=>{
    if(timer){
      clearInterval(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer=null
    }, time);
  }
}
