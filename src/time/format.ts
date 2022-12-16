// time 时间
// rule 规则 YYYY-MM-DD 
type Rule='YYYY-MM-DD HH-mm-ss'|'YYYY-MM-DD'|'YYYY-MM'|'MM-DD'|'HH-mm-ss'|'HH-mm'|'mm-ss'
export function format(rule:Rule,time?:Date):string{
  const TIME:Date = time??new Date()
  const YEAR = TIME.getFullYear()
  const MONTH = TIME.getMonth()+1<10?0+''+(TIME.getMonth()+1):TIME.getMonth()+1
  const DATE = TIME.getDate()<10?0+''+TIME.getDate():TIME.getDate()
  const HOUR = TIME.getHours()<10?0+''+TIME.getHours():TIME.getHours()
  const MINUTE= TIME.getMinutes()<10?0+''+TIME.getMinutes():TIME.getMinutes()
  const SECOND= TIME.getSeconds()<10?0+''+TIME.getSeconds():TIME.getSeconds()
  if(rule==='YYYY-MM-DD HH-mm-ss'){
    return YEAR+'-'+MONTH+'-'+DATE+' '+HOUR+'-'+MINUTE+'-'+SECOND
  }
  if(rule==='YYYY-MM-DD'){
    return YEAR+'-'+MONTH+'-'+DATE
  }
  if(rule==='YYYY-MM'){
    return YEAR+'-'+MONTH
  }
  if(rule==='MM-DD'){
    return MONTH+'-'+DATE
  }
  if(rule==='HH-mm-ss'){
    return HOUR+'-'+MINUTE+'-'+SECOND
  }
  if(rule==='HH-mm'){
    return HOUR+'-'+MINUTE
  }
  if(rule==='mm-ss'){
    return MINUTE+'-'+SECOND
  }
}
