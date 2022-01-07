// export const lettersToNumbers =(letters:string)=>
//     letters
//         .split('')
//         .reverse()
//         .map((letter,i)=>
//             i===0
//                 ? letter.toLowerCase().charCodeAt(0)-97
//                 :
//                 letter.toLowerCase().charCodeAt(0)-97+1
//         )
//         .map((base26Number, position)=> base26Number*26 **position)
//         .reduce((sum:number, number:number)=>sum+number,0)

export const  lettersToNumber=(letters:string)=>{
    for(var p = 0, n = 0; p < letters.length; p++){
        n = letters[p].charCodeAt(0) - 64 + n * 26;
    }
    return n;
}