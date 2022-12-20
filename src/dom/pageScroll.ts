const debounce=(fn,time)=>{
  let timeid=null
  return (e)=>{
    if (e.defaultPrevented || e.passive) return;
    e.preventDefault()
    if(timeid){
      return
    }
    fn(e)
    timeid=setTimeout(()=>{
      timeid=null
    },time)
  }
}
const scroll=debounce((event)=>{
    // 计算滚动距离
    let scrollY = window.screenY;
    // 获取页面高度
    const pageHeight = document.documentElement.clientHeight;
    if (event.deltaY > 0) {
      // 向下滚动
      scrollY = window.scrollY + pageHeight;
    } else if (event.deltaY < 0) {
      // 向上滚动
      scrollY = window.scrollY - pageHeight;
    }
    // 滚动页面
    window.scrollTo({top:scrollY,behavior:"smooth"});
},500)
export function pageScroll(){
  // 监听页面滚动事件
  window.addEventListener('wheel',scroll,{passive:false})
}
pageScroll.unmount=()=>{
  window.removeEventListener('wheel',scroll)
}
