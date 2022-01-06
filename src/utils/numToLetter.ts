export const numToLetter=(value:number)=>{
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var remainder, result = "";
    do {
        remainder = value % 26;
        result = base[(remainder || 26) - 1] + result;
        value = Math.ceil(value / 26)-1;
    } while (value > 0);
    return result;
}
 