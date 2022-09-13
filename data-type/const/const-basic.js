/*
Goal: Now we’ve learned about the following items:
    - const

keywords:
    - const

Note:
    - const一旦宣告，變數的值就不能改變。
    - const與let相同，只在宣告後的block內有效。
    - const變數不允許重複宣告。

Reference:
    - https://es6.ruanyifeng.com/#docs/let
*/

const PI = 3.14;

// * example 1: 必須賦予值
// const height; // SyntaxError: Missing initializer in const declaration
// console.log(height);

// * example 2: const與let相同，只在宣告後的block內有效
if (true) {
    const MAX = 5;
}
// console.log('MAX', MAX); // ReferenceError: MAX is not defined




const res = [];
console.log('res', res);
res.push(1);
res.push(3);
res.push(16);
console.log('res', res);

