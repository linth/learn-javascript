/**
 * includes() 使用
 * 
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */

const nums = [1, 2, 3, 7, 6, 1];
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(nums.includes(6)); // true
console.log(nums.includes(9)); // false

console.log(beasts.includes('ant')); // true
console.log(beasts.includes('ducks')); // true
