/*
  References
  - https://www.geeksforgeeks.org/variables-datatypes-javascript/
*/

// before 2015.
var x = 10;
var y = 2 + 10 - 1;

// declaring single variable.
var name;
// declaring multiple variables.
var title, num, speed;
// initializng variables.
var name = 'george';
name = 'Rakesh'


console.log(x);
console.log(y);
console.log(name);

// after 2015.

// The variable type Let shares lots of similarities with var but unlike var it has scope constraints.
let z; // undefined.
let student_name = 'Mukul'

console.log(z);
console.log(student_name);

// declaring multiple variables.
let a = 1, b = 2, c = 3;

// assignment.
a = 4
console.log(a);

// Const is another variable type assigned to data whose value cannot and will not change throught the script.
const general_name = 'george';
// general_name = 'may'; // TypeError: Assignment to constant variable.
console.log(general_name);
