/*
  Goal: learn to use function and sorting.

  keyword:
    - sorting
    - function

  References:
    - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    - https://www.w3schools.com/js/js_array_sort.asp
*/

const months = ['March', 'Jan', 'Feb', 'Dec'];
const value = [213, 16, 2058, 55, 11, 1990, 57, 7];

// example 1: this don't sort at all. (會根據 prefix 來排列)
var res = value.sort();
console.log('res', res); // [11, 16, 1990, 2058, 213, 55, 57, 7]


// example 2: change function to sort the array.
// TODO: check and understand two functions.
var l2s = value.sort(function (a, b) {
  // console.log('value1', value1, 'value2', value2, '=>', value2 - value1);
  // 小到大
  return a - b;
});

console.log('sortByL2S', l2s); // [7, 11, 16, 55, 57, 213, 1990, 2058]


var s2l = value.sort(function (a, b) {
  // console.log('value1', value1, 'value2', value2, '=>', value2 - value1);
  // 大到小
  return b - a;
});


// TODO: 似乎會受到影響
// console.log('res', res); // [2058, 1990, 213, 57, 55, 16, 11, 7]
// console.log('sortByL2S', l2s); // [2058, 1990, 213, 57, 55, 16, 11, 7]
console.log('sortByS2L', s2l); // [2058, 1990, 213, 57, 55, 16, 11, 7]
