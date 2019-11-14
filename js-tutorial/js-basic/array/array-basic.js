/*
References:
  - https://github.com/30-seconds/30-seconds-of-code
  - https://www.youtube.com/watch?v=h33Srr5J9nY
*/
const all = (arr, fn = Boolean) => arr.every(fn);

const allEqual = arr => arr.every(val => val === arr[0]);

console.log(all([4, 2, 3], x => x > 1));
console.log(all([1, 2, 3]));

console.log(allEqual([1, 2, 3, 4, 5, 6])); // false
console.log(allEqual([1, 1, 1, 1])); // true
