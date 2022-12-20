export function hasEmpty(arr:Array<any>){
  let flag=false
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element==null||element==undefined||element==''){
      flag=true
    }    
  }
  return flag
}
