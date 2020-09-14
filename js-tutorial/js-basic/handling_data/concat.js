/*
  Goal: learn how to find data from array.

  keyword:
    - array
    - concat

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/
    - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
    - 被用來合併兩個或多個陣列
*/


const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'd', 'e'];
const arr3 = ['d', 'f', 'e'];

// combine two arraies.
var get_combine_two_arr = (arr1, arr2) => {
  return arr1.concat(arr2);
}

// combine three arraies.
var get_combine_three_arr = (arr1, arr2, arr3) => {
  return arr1.concat(arr2).concat(arr3);
}

console.log('concat two arraires: ', get_combine_two_arr(arr1, arr2));
console.log('concat three arraies: ', get_combine_three_arr(arr1, arr2, arr3));
