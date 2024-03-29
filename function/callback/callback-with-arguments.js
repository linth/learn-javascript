/*
callback函數當成另個函數的引數

References:
  - https://www.geeksforgeeks.org/javascript-callbacks/
  - https://cythilya.github.io/2018/10/30/callback/
*/

{
  // example 1:
  // add() function is called with arguments a, b
  // and callback, callback will be executed just
  // after ending of add() function
  function add(a, b, callback) {
    console.log('The sum of ' + a + ' and ' + b + ' is ' + (a+b) + '.');
    callback();
  }

  // disp() function is called just
  // after the ending of add() function
  function disp() {
    console.log('This must be printed after addition.');
  }


  // example 2:
  add(1, 2, disp);

  add(5, 6, function dd() {
    console.log('This is a dd function.');
  });

  /**
   * Result:
   * 
   * The sum of 1 and 2 is 3.
   * This must be printed after addition.
   * The sum of 5 and 6 is 11.
   * This is a dd function.
   */
}
