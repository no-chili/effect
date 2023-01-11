/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 13:00:33
 * @Description: 复制文本到剪贴板
 */
type Value=string|HTMLElement
/**
 * @description: 
 * @param {Value} value 文本或者有innerText的元素
 * @return {*}
 */
export function copy(value:Value){
  const text=value instanceof HTMLElement?value.innerText:value
  if(navigator.clipboard){
    navigator.clipboard.writeText(text)
  }else{
    const p=document.createElement('textarea')
    const textNode=document.createTextNode(text)
    p.appendChild(textNode)
    p.select()
    document.execCommand("Copy");
  } 
}

