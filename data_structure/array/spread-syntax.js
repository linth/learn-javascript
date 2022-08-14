/**
 * 展開運算子 Spread syntax 
 *  - apply() 接受一組陣列形式的參數。
 *  - 三個點 ...
 * 
 * Reference:
 *  - https://es6.ruanyifeng.com/#docs/array
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(...numbers); // 1 2 3
console.log(sum(...numbers)); // 6
console.log(sum.apply(null, numbers));

function receivedParams(...params) {
    console.log('params', ...params);
    // params.map( x => {
    //     console.log(x, Math.pow(x, 2));
    // })
    return params.map(x => Math.pow(x, 2));
}

console.log('hello');
console.log('first argument', receivedParams(...numbers));
console.log('seconde argument', receivedParams(1, 2, 3, 6, 88, 100));

// 語法
// fun.apply(thisArg, [argsArray])

// thisArg
// 讓 fun 呼叫時可以視為 this 的值。
// null 及 undefined 將會被全域物件取代，而原始類別將被封裝

// argsArray
// 定義了 fun 要呼叫的一組參數，如果沒有需要提供，可以傳入 null 或 undefined 。從 ECMAScript 5 開始，這些參數不僅可以是泛型的 array-like object ，而不一定要是一組陣列。


// TODO: 使用 apply 與建構子鏈結
