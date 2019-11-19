
/*
  References:
  - https://www.geeksforgeeks.org/loops-in-javascript/
  - https://es6.ruanyifeng.com/#docs/let
*/

function show_hello_world() {
  // show hello world several time.
  let i;

  for (i=0; i<10; i++) {
    console.log('Hello world.');
  }
}


// method 1.
function show_lang() {
  let lang = {
    first : "C",
    second : "Java",
    third : "Python",
    fourth : "PHP",
    fifth : "JavaScript"
  }

  // let variable is suitable for for-loop.
  for (let i in lang) {
    console.log(i);
  }
}

function set_an_array() {
  var a = []

  // please note the variable.
  // use var variable to
  for (var i=0; i<10; i++) {
    a[i] = function () { console.log(i); };
  }
  a[6](); // 10

  for (let i=0; i<10; i++) {
    a[i] =  function () { console.log(i); };
  }
  a[6](); // 6
}

set_an_array()
