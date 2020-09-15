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
var people = [
  {name: 'Casper', like: '鍋燒意麵', age: 18},
  {name: 'Wang', like: '炒麵', age: 24},
  {name: 'Bobo', like: '蘿蔔泥', age: 1},
  {name: '滷蛋', like: '蘿蔔泥', age: 3}
];

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

var mapEmpty = people.map((item, index, arr) => {

});

var mapAgeThan5 = people.map((item, index, arr) => {
  if (item.age > 5) {
    return item;
  }
  // Please note that with false or without false.
  // return false;
  return null;
});

var mapEat = people.map((item, index, arr) => {
  if (item.like !== '蘿蔔泥') {
    return `${item.like} 好吃`;
  } else {
    return `${item.like} 不好吃`;
  }
});


console.log('mapAgeThan5', mapAgeThan5);
console.log('mapEat', mapEat);