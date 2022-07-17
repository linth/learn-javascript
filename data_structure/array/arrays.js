/*
  Goal: learn more about array.

  keyword:
    - array

  References:
    - https://javascript.info/array
*/

let arr = new Array();
let arr1 = [];

let fruits = ['apple', 'orange', 'plum'];

console.log(arr);
console.log(arr1);
console.log(fruits);


// mix of values.
let arr2 = ['apple', {name: 'george'}, true, function() { console.log('hello'); }];
console.log(arr2, arr2[1].name, arr2[3]);