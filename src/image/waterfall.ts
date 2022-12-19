type ImageList=Array<{
  width:number,
  height:number,
  url:string,
  [propName:string]:any
}>
type NewImageList=Array<{
  width:number,
  height:number,
  url:string,
  top:number,
  left:number
}>
export function waterfall(el:HTMLElement,column:number,imageList:ImageList,gap?:number,imageClass?:string,callback?:Function){
  const width=getComputedStyle(el).width.split('px')
  const containerWidth=width.length>1?parseInt(width[0])-gap*(column+1):0
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
  // 挂载图片
  el.style.position='relative'
  for (let index = 0; index < newImageList.length; index++) {
    const element = newImageList[index]
    const div = document.createElement('div')
    const image =document.createElement('img')
    image.src=element.url
    div.style.position='absolute'
    div.style.width=element.width+'px',
    div.style.height=element.height+'px'
    div.style.top=element.top+'px'
    div.style.left=element.left+'px'
    image.style.width=element.width+'px',
    image.style.height=element.height+'px'
    image.style.top=element.top+'px'
    image.style.left=element.left+'px'
    div.style.overflow='hidden'
    imageClass&&image.classList.add(imageClass)
    callback&&div.addEventListener('click',()=>{
      callback()
    })
    div.appendChild(image)
    el.appendChild(div)
  }
}
