/*
  Goal: learn how to find data from array.

  keyword:
    - find
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
*/

var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];


const find_data = (array, num) => {
  // num: which numbers what users want to find it.
  let message = '';

  let res = array.find( (value, index, array) => {
    return value === num;
  });

  if (res) {
    message = 'find it.'
    return message + ', number is ' + res + '.';
  } else {
    message = 'sorry! not found it.';
    return message;
  }
}


const find_data_larger = (array, num) => {
  // num: which numbers what user want to find them.
  let message = '';
  let res;

  res = array.find( (value, index, array) => {
    return value > num;
  });

  if (res) {
    message = 'find it.';
    return message + ', the set of array is ' + res + '.';
  } else {
    message = 'sorry! not found it.';
    return message
  }
}

console.log(find_data(arr, 1));
console.log(find_data_larger(arr, 111));
