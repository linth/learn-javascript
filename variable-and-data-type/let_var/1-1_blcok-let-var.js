/**
 * 使用 let, var 在 block 內的差異
 * 
 * 
 * Reference:
 *  - https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230
 */


{
    let a = 10;
    var b = 1;

    console.log(a); // 10
}


// console.log(a); // ReferenceError: a is not defined
console.log(b); // 1