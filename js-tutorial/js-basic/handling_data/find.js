/*
  Goal: learn how to find data from array.

  keyword:
    - find
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
    - find() 與 filter() 很像，但 find() 只會回傳一次值，且是第一次為 true 的值。
*/
var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];
var people = [
  {name: 'Casper', like: '鍋燒意麵', age: 18},
  {name: 'Wang', like: '炒麵', age: 24},
  {name: 'Bobo', like: '蘿蔔泥', age: 1},
  {name: '滷蛋', like: '蘿蔔泥', age: 3}
];

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

var findEmpty = people.find((item, index, arr) => {

});

var findAgeThen5 = people.find((item, index, arr) => {
  return item.age > 5; // get larger than 5.
});

var findLike = people.find((item, index, arr) => {
  return item.like === '蘿蔔泥'; // get like === '蘿蔔泥'
})


console.log('findAgeThen5', findAgeThen5);
console.log('findLike', findLike);