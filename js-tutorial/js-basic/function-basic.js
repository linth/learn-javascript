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
let i;
function function1() {
  function function2() {
    i = 100;
  }
  function2();
  console.log(i); // 100
}
function1();


// example 3: addition.
function cal_addition(num1, num2) {
  return num1+num2;
}

let res = cal_addition(1, 2)
console.log('res', res);

// example 4: return several values.
function get_add_and_pos(x, y) {
  let o = Object();
  o['add'] = x + y;
  o['pos'] = x - y;

  // return {
  //   'add': x+y,
  //   'pos': x-y
  // }
  return o
}

let res2 = get_add_and_pos(3, 2)
console.log(res2, typeof(res2), res2['add'], typeof(res2['add']));
