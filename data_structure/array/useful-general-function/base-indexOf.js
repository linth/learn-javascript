/**
 * indexOf() 使用
 * 
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */


const nums = [1, 2, 3, 7, 6, 1];
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(nums.indexOf(1)); // 0 返回第一個
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2)); // 4
console.log(beasts.indexOf('giraffe')); // -1 不存在