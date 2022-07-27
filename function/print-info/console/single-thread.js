/*
  Goal: learn thread concept.

  keyword:
    - function
    - callback function

  notes:
    - JavaScript一次只能做一件事，他是單執行緒的語言。

  References:
    - https://hackmd.io/SNUkr1iGQhi8mpqe0JxHLw
*/

// ! please note and think the order of printing.
// * example 1
console.log(1);
console.log(2);
console.log(3);

// * example 2: if setTimeout = 2000
setTimeout(function() {
  console.log(4);
}, 2000);
console.log(5); // 1 2 3 5 4

// * example 3: if setTimeout = 0
setTimeout(function() {
  console.log(6);
}, 0);
console.log(7); // 1 2 3 5 7 6 4

