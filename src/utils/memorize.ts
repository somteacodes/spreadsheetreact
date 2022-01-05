
type MemorizedContent= {
    [key: string]:()=>any
}
const memorizedContent:MemorizedContent = {}
export const memorize=(cellKey: string, atomFactory:any)=>{
    if(memorizedContent[cellKey]){
        return memorizedContent[cellKey]
    }
    memorizedContent[cellKey]=atomFactory()
    return memorizedContent[cellKey]
}