/**
 * 當 global variable 和 local variable 擁有相同的值狀況
 *  - 有可能會造成互用的 bug 產生
 * 
 * Reference:
 *  - https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230
 */


var tmp = '123';

if (true) {

    // console.log(tmp); // ReferenceError: Cannot access 'tmp' before initialization

    let tmp = 'hello world.';

    console.log(tmp); // hello world.
}


console.log(tmp); // 123