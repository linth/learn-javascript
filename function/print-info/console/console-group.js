/*
  Goal: Advanced JavaScript Debugging
  
  References:
    - https://mariusschulz.com/blog/advanced-javascript-logging-using-console-group
*/

console.log('-----');

const example1 = () => {
  console.group("Main function: example1.")
  console.log("The function is demo.");
  console.log("Hello world.");
  console.groupEnd();
}


const example2 = () => {
  console.groupCollapsed("Main function: example2.")
  console.log("The function is demo.");
  console.log("Hello world.");
  console.groupEnd();
}


const example3 = () => {
  console.group("Main function: example3.")
  console.log("The function is demo.");
  console.log("Hello world.");

  console.group("Sub-function: example3.")
  console.log("The function is demo.");
  console.log("WoW......");
  console.groupEnd();

  console.groupEnd();
}

// example1()
example2();
example3();
