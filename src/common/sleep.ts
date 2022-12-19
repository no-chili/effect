export function sleep(delay:number):Promise<boolean>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(true)
    }, delay);
  })
}
