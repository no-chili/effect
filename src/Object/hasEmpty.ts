export function hasEmpty(value){
  let flag=false
  for (let index = 0; index < Object.keys(value).length; index++) {
    const key = Object.keys(value)[index];
    if(value[key]==null||value[key]==undefined||value[key]==''){
      flag=true 
    }
  }
  return flag
}
