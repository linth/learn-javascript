/*
  Goal: learn how to find data from array.

  keyword:
    - some
    - array

  References:
    - https://wcc723.github.io/javascript/2017/06/29/es6-native-array/

  Notes:
    - We can add the different data structure to implement it again, i.e., json.
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
  return array.some( (value, index, array) => {
    return value > 80;
  });
}

console.log(example1(arr)); // true.

var someAns = people.some((itme, index, arr) => {
  return itme.age > 10;
})

var someAns2 = people.some((item, index, arr) => {
  return item.age > 25;
})

console.log('someAns', someAns);
console.log('someAns2', someAns2);