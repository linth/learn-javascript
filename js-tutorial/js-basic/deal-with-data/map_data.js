/*
  Goal: learn how to find data from array.

  keyword:
    - map
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
    - 使用 map() 時他需要回傳一個值，回傳的值組成一個陣列。
    - 適合將原始變數經過運算後組成新的陣列。
*/

var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];

const example1 = (array) => {
  return arr.map( (value, index, array) => {
    if (value > 80) {
      return value;
    } else {
      return false; // Must be added (they will return "undefined" if you don't do that.)
    }
  });
}

let res = example1();
console.log(res);

/* result.
[
  300,   111,   false,
  false, false, 100,
  false, 88,    false
]
*/
