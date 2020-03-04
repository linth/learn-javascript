/*
  Goal: learn how to find data from array.

  keyword:
    - foreach
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
    - forEach hasn't return any value.
    - 沒有回傳值，單純執行每個陣列內的物件或值。
*/

var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];

const foreach_data = (array) => {
  return array.forEach( (value, index, array) => {
    return value * 2;
  });
}

console.log(arr);
console.log('==>', foreach_data(arr));
console.log(arr);
