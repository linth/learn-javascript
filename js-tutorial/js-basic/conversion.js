/*
References:
  - https://www.geeksforgeeks.org/javascript-type-conversion/
*/

// String() or toString() function can be used in JavaScript to convert a value to a string.
var v = 1555;
console.log(v, typeof(v));
v = v.toString();
console.log(v, typeof(v));

// example 1:
var m = 123;
console.log(String(m), typeof(m), typeof(String(m))); // 123 number string
console.log(m + 11); // 134

var s = "144";
var n = Number(s);
console.log(n, typeof(n), s, typeof(s), Number(s), typeof(Number(s))); // 144 'number' '144' 'string' 144 'number'

var o = ""; // Empty string assigned
var p = " "; // White space assigned 
