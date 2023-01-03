export function getWH(url:string){
  return new Promise((resolve,reject)=>{
      const img=new Image()
      const imgData={
        height:0,
        width:0,
        url:''
      }
      img.src=url
      if(img.complete){
        imgData.height=img.height
        imgData.width=img.width
        imgData.url=img.src
        resolve(imgData)
      }else{
        img.onerror=()=>{
            //配置一张默认图片的参数
            reject({
                height:0,
                width:0,
                url:'src'
            })
        }
        img.onload=()=>{
            imgData.height=img.height
            imgData.width=img.width
            imgData.url=img.src
            resolve(imgData)
        }
      }
      
  })
}
