/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 13:24:09
 * @Description: 获取图片宽高信息
 */
type Image={
  height:number,
  width:number,
  url:string
}
/**
 * @description: 
 * @param {string} url 图片地址
 * @return {*}
 */
export function getWH(url:string):Promise<Image>{
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
