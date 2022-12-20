type Value=string|HTMLElement
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
