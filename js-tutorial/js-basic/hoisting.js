/*
References:
  - https://www.geeksforgeeks.org/javascript-hoisting/
*/

// example 1:
let a;
a = 100;
console.log(a);

// example 2:
// console.log(name); // name is not defined. (undefined)
// let name = 'george'

// example 3:
function fun() {
  console.log(name);
  var name = 'george'
}
fun(); // undefined

// example 4:
/* We know that variables declared with let keywords are block scoped not
function scoped and hence it is not any kind of problem when it comes to hoisting. */
function fun2() {
  console.log(student_name);
  let student_name = 'george'
}
fun2(); // student_name is not defined
