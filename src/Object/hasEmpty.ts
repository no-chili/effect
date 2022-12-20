export function hasEmpty(obj){
  let flag=false
  for (let index = 0; index < Object.keys(obj).length; index++) {
    const key = Object.keys(obj)[index];
    if(obj[key]==null||obj[key]==undefined||obj[key]==''){
      flag=true 
    }
  }
  return flag
}
