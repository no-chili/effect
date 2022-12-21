export function hasEmpty(value:Array<any>){
  let flag=false
  for (let index = 0; index < value.length; index++) {
    const element = value[index];
    if(element==null||element==undefined||element==''){
      flag=true
    }    
  }
  return flag
}
