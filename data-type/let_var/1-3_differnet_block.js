/**
 * 當如果在不同的 block 下的情況，探討 global variable & local variable.
 *  - local variable 會被屏蔽掉
 *  - global variable 會被覆蓋掉
 * 
 */

{
    let a = 1;
    var b = '111';
}

console.log(b); // '111'

{
    let a = 2;
    var b = '222'
    let c = 3;
}


// console.log(a); // undefined.
console.log(b); // '222'
// console.log(c); // undefined.