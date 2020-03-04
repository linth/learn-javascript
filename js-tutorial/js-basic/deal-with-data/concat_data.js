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

var get_combine_several_arr = (array1, array2) => {
  return array1.concat(array2);
}

console.log(get_combine_several_arr(arr1, arr2));
