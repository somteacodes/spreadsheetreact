import { lettersToNumber } from "./lettersToNumbers";

export const cellKeyToMatrix=(cellKey: string)=>{
     
    const colChar = cellKey.toUpperCase().match(/[A-Z]+/)![0];
    const colNum = (lettersToNumber(colChar))-1 //remove one to synchronize the col to 0 based starting position

    const rolNum = parseInt(cellKey.match(/[0-9]+/)![0])-1

    return{
        column:colNum,
        row:rolNum
    }
    // return `${rolNum}_${colNum}`;
}