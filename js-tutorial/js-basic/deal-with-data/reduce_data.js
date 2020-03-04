/*
  Goal: learn how to find data from array.

  keyword:
    - reduce
    - array
    - concat

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/
    - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
    - 與前一個回傳的值再次作運算。
    - accumulator: 前一個參數; currentValue: 當前參數; currentIndex: 當前索引; array: 整個陣列
*/

var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];
var arr_duplicated = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
var flattend = [
  [0, 1],
  [2, 3],
  [4, 5],
];

// return an array and also each value of item will add one.
const example1 = (array) => {

  return array.reduce( (accumulator, currentValue, currentIndex, array) => {
    accumulator.push(currentValue + 1);
    return accumulator;
  }, []);
}

// calculate the sum of array.
var sum = (array) => {
  return array.reduce( (accumulator, value, index) => {
    return accumulator + value;
  }, 0);
}

// imporved above the function of sum.
var imporved_sum = (accumulator, value) => accumulator + value;

// 移除陣列中的重複項目
var remove_duplicated_item = (array) => {
  return array.sort().reduce( (accumulator, value) => {
    if (accumulator.length === 0 || accumulator[accumulator.length-1] !== value) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);
}

// flattened array from 2-d to 1-d.
var changeFlattend = (array) => {
  return array.reduce( (accumulator, value, index) => {
    return accumularor.concat(value);
  }, []);
}


console.log(example1(arr));
// console.log(sum(arr));
// console.log(changeFlattend(arr));
console.log('imporved_sum = ', arr.reduce(imporved_sum));
console.log(remove_duplicated_item(arr_duplicated));
