/*
  References:
  - https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/
*/

// example 1:
let global_var = 'This is a global variable.'

function printHello() {
  let local_var = 'This is a local variable.';

  console.log(global_var);
  console.log(local_var);
}

printHello();
console.log(global_var);
// console.log(local_var); // ReferenceError: local_var is not defined

function fun() {
  let global_var = 'This is a local variable.';
  console.log(global_var); // This is a local variable.
  // console.log(window.global_var); // error??
}

fun()

// example 2: has error in this example.
function function1() {
  function function2() {
    i = 100;
  }
  function2();
  console.log(i); // 100
}
function1();
