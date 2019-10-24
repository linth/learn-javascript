
/*
  References:
  - https://www.geeksforgeeks.org/loops-in-javascript/
*/

let i;

for (i=0; i<10; i++) {
  console.log('Hello world.');
}

// method 1.
let lang = {
  first : "C",
  second : "Java",
  third : "Python",
  fourth : "PHP",
  fifth : "JavaScript"
}

for (let i in lang) {
  console.log(i);
}
