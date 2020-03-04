/*
  Goal: learn how to find data from array.

  keyword:
    - every
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
    - every() 可以檢查所有的陣列是否符合條件
    - 回傳 true or false
*/

var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];

const example1 = (array) => {
  return array.every( (value, index, array) => {
    return value > 0;
  });
}

const example2 = arr.every( (value, index, array) => {
  return value > 50;
})

console.log(example1(arr));
console.log(example2);
