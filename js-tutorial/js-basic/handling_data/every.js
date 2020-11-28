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
    - some() 與 every() 非常接近，都是回傳 true or false，差異僅在 every() 需完全符合，some() 僅需要部分符合。
*/
var arr = [300, 111, 2, 3, 80, 100, 38, 88, 62];
var people = [
  {name: 'Casper', like: '鍋燒意麵', age: 18},
  {name: 'Wang', like: '炒麵', age: 24},
  {name: 'Bobo', like: '蘿蔔泥', age: 1},
  {name: '滷蛋', like: '蘿蔔泥', age: 3}
];

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

var ans = people.every((item, index, arr) => {
  // console.log(item, index, arr);
  return item.age > 10; 
})

var ans2 = people.every((item, index, arr) => {
  return item.age < 25;
})

console.log('ans', ans);
console.log('ans2', ans2);
