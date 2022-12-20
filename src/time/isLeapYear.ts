export function isLeapYear(date:Date|string):boolean{
  const year=new Date(date).getFullYear()
  if(year%4===0&&year%100!==0||year%400===0){
    return true
  }
  return false
}
