type Rule = (value:any)=>boolean
type Rules = Array<Rule>
export function verify(value,rule:Rule|Rules,errMsg:string){
  const ruleList = Array.isArray(rule)?rule:[rule]
  for (let index = 0; index < ruleList.length; index++) {
    const rule = ruleList[index];
    if(!rule(value)){
      return errMsg
    }
  }
}
