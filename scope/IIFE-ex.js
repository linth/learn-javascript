/**
 * Immediately Invoked Function Expression, IIFE (即刻調用函式運算式)
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */

{
  (function () {
    var a = 3;
    console.log(a);
  }) (); // 3

  // 不汙染 global variable.
  // a; // ReferenceError: a is not defined
}


{
  (function () {
    var b = 10;
    console.log(b);
  }) (); // 10

  b; // ReferenceError: b is not defined
}