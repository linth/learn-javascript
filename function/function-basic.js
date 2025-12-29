/*
函式由四部分組成：
  - 關鍵字 function
  - 可有可無的名稱，必須合法的 javascript 識別字
  - 參數、引數，需用（）來包起來內，也必須是合法識別字，不能省略
  - 需要 {} 來包起來程式述敘句，函式主體可空，但是不能省略 {}

Goal: how to use function concept to isolate another code.
  - control flow
  - imperative & declarative


字面值建立函式: Function Literal（函式字面值）。


keyword:
  - function
  - javascript

References:
  - https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/
*/
const assert = require("assert");

{
  // 具名函式
  function helloWold() {
    console.log('hello world.');
  }

  // 匿名函式
  var canEat = function () {
    return true; // 建立匿名函式，指派給變數 canEat，函式的屬性 name 是空的
  }
  console.log(typeof canEat === 'function'); // true
}

{
  // inner / outer function
  function outer() {
    var a = 1;
    console.log('outer function.', a, b, c); // outer function. 1 undefined undefined

    function inner() {
      console.log('inner function.', a, b, c);
    }
    var b = 2;
    if (a == 1) {
      var c = 3;
    }
    console.log(a, b, c);  // 1, 2, 3
  }

  outer();

  /**
   * 各宣告的範圍：
   *  - outer() 從頭到位的範圍
   *  - inner() 從 outer 函式開始到結束 (outer() { .... })
   *  - a: 從 var a = 1 開始到 outer 函式結束
   *  - b: 從 var b = 2 開始到 outer 函式結束
   *  - c: 從 var c = 3 開始到 outer 函式結束
   * 
   * 另外，你可以嘗試將 inner 函式放到不同位置看看！
   */
}


{
  // 什麼是「字面值建立函式」？
  function sayHi() {
    console.log("(general) Hi");
  }

  const sayHi = () => {
    console.log("(arrow function) Hi");
  }

  /**
   * 這叫 Function Literal（函式字面值）: 一般 function & arrow function 都是函式字面值
   */

  const n = 5;          // number literal
  const s = "hello";   // string literal
  const o = { a: 1 };  // object literal
  // 👉 function() {…} 本身就是一個「函式字面值」。
}




// example 1:
let global_var = 'This is a global variable.'

function printHello() {
  let local_var = 'This is a local variable.';

  console.log(global_var);
  console.log(local_var);
}

function fun() {
  let global_var = 'This is a local variable.';
  console.log(global_var); // This is a local variable.
  // console.log(window.global_var); // error??
}


function example() {
  printHello();
  console.log(global_var);
  // console.log(local_var); // ReferenceError: local_var is not defined
  fun()
}

// example 2: has error in this example.
var i;
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
  return num1 + num2;
}

function example3() {
  var res = cal_addition(1, 2)
  console.log('res', res);
}

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
