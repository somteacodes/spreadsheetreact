import {atom} from 'recoil'
import { nanoid } from 'nanoid'
export const sheetConfig= atom({
    key: 'sheetConfig',
    default: {
    code:nanoid(10),
    numOfCols:30, //number of columns
    numOfRows:100, //number of rows
    }
})

// interface SheetData {
//     [key: string]: string | number | undefined;
// }
export const sheetData = atom({
    key:'sheetData',
    default:{}
})

export const sheetError = atom({
    key:'sheetError',
    default:false
})