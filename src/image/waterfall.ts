/*
 * @Author: no-chili 18875854140@163.com
 * @LastEditTime: 2023-01-11 15:00:29
 * @Description: 图片瀑布流计算
 */
export type ImageList=Array<{
  width:number,
  height:number,
  url:string,
  [propName:string]:any
}>
export type NewImageList=Array<{
  width:number,
  height:number,
  url:string,
  top:number,
  left:number
}>

/**
 * @description: 
 * @param {HTMLElement} el 元素 或者 盒子宽
 * @param {number} column 列
 * @param {ImageList} imageList 图片列表
 * @param {number} gap 间距
 */
export function waterfall(el:HTMLElement|number,column:number,imageList:ImageList,gap?:number){
  // el为元素获取宽 否则直接获取宽
  const width=el instanceof HTMLElement?getComputedStyle(el).width.split('px'):el
  let containerWidth
  if(el instanceof HTMLElement){
    containerWidth=getComputedStyle(el).width.split('px').length>1?parseInt(width[0])-gap*(column+1):0
  }else{
    containerWidth=width
  }
  const newImageList:NewImageList=[]
  if(containerWidth<=0)return
  // 单张图片
  const imageWidth=Math.floor(containerWidth/column)
  const heightArray=new Array(column).fill(0)
  // 计算图片位置
  for (let index = 0; index < imageList.length; index++) {
    const image = imageList[index];
    const ratio = imageWidth/image.width
    let column=0
    for (let index = 0; index < heightArray.length; index++) {
      const element = heightArray[index];
      column = element<heightArray[column]?index:column
    }
    newImageList.push({
      ...image,
      width:imageWidth,
      height:ratio*image.height,
      top:heightArray[column],
      left:column*image.width*ratio+gap*(column+1)
    })
    heightArray[column]+=ratio*image.height+gap
  }
  return newImageList
}
