export function clone(p:object){
  const o={}
  for(let i in p){
    o[i]=p[i]
  }
  return o
}
