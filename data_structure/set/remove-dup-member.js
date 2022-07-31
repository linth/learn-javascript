/**
 * 刪除掉重複元素
 * 
 * Reference:
 *  - https://es6.ruanyifeng.com/#docs/set-map
 */

var number = [1, 2, 4, 4, 6, 1];

var res = new Set(number)
console.log(res); // Set(4) { 1, 2, 4, 6 }
