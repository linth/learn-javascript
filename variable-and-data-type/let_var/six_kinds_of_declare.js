/*
Goal: Now we’ve learned about the following items:
    - six kinds of declares. (6種變數宣告方法)

Note:
    - const一旦宣告，變數的值就不能改變。
    - const與let相同，只在宣告後的block內有效。
    - const變數不允許重複宣告。

Reference:
    - https://es6.ruanyifeng.com/#docs/let
    - https://es6.ruanyifeng.com/#docs/let#globalThis
*/

// * example 1:
window.a = 1;
console.log('a', a); // 1

a = 2;
console.log('window.a', window.a); // 2

// * example 2:
var aa = 1;
console.log(window.aa); // 1

// * example 3:
let b = 1;
console.log(window.b); // undefined


// * example 4: 
// ! This example should be read more again.
// method 1.
(typeof window !== 'undefined' 
    ? window
    : (typeof process === 'object' && typeof require === 'function' && typeof global === 'object') 
    ? global : this);

// method 2.
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
}