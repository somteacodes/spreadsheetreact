
type MemorizedContent= {
    [key: string]:()=>any
}
const memorizedContent:MemorizedContent = {}
console.log(memorizedContent)
export const memorize=(cellKey: string, atomFactory:any)=>{
    if(memorizedContent[cellKey]){
        return memorizedContent[cellKey]
    }
    memorizedContent[cellKey]=atomFactory()
    return memorizedContent[cellKey]
}