/*
  Goal: Advanced JavaScript Debugging

  References:
    - https://mariusschulz.com/blog/measuring-execution-times-in-javascript-with-console-time
*/
var output = "";

const ex1 = () => {
  var start = new Date().getTime();

  for (var i = 1; i < 1e6; i++) {
    output += i;
  }

  var end = new Date().getTime();
  console.log(end - start);
}

const ex2 = () => {
  console.time("ex2");

  for (var i = 1; i < 1e6; i++) {
    output += i;
  }

  console.timeEnd("ex2");
}

ex1();
ex2();
