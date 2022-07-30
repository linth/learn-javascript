/**
 * 使用 block 和 function 的範例
 * 
 * 
 */
var b = '000'

{
    let a = 1;
    var b = '111';
}


function f() {
    // console.log(a); // ReferenceError: a is not defined
    console.log(b); // 111

    let c = 2;
}

f();
// console.log(a); // undefined.
console.log(b); // 111
// console.log(c); // undefined.
