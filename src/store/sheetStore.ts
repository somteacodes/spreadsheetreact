import {atom} from 'recoil'
export const sheetConfig= atom({
    key: 'sheetConfig',
    default: {
    numOfCols:10, //number of columns
    numOfRows:10, //number of rows
    }
})