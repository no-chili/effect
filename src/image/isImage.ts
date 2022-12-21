export function isImage(file:File){
  const typeName=file.type
  return typeName.split('/')[0]=='image'?true:false
}
