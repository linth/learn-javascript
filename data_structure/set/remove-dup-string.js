/**
 * 刪除掉重複字元 string
 *  - 需要將 set 轉換成 array，最後才可以合併起來。
 *  - 可使用 spread operator
 * 
 * Reference:
 *  - https://www.geeksforgeeks.org/how-to-convert-set-to-array-in-javascript/
 *  - https://es6.ruanyifeng.com/#docs/set-map
 */

var s = 'ababbc';

var word = new Set(s);
console.log(word); // Set(3) { 'a', 'b', 'c' }

// 使用 spread operator，可以讓 set convert to array.
// [...Set] => array
var final_word = [...word].join('');

console.log(final_word);