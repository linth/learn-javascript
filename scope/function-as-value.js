/**
 * function as value
 *  - case 1: 指定某參數, function用變數取代
 *  - case 2: 當參數傳遞, function當引數帶入
 *  - case 3: return the result of function.
 * 
 */

{
  // case 1: 指定某參數, 如: foo
  var foo = function () {
    console.log('case 1: I am foo.');
  }

  foo();

}


{
  // case 2: 當參數傳遞

  var foo = function () {
    console.log('case 2: I am foo.');
  }

  function bar(func) {
    func();
  }

  bar(foo);

}


{
  // case 3: return the result of function.
  var foo = function() {
    console.log('case 3: I am foo.');
  }

  var result = function bar(func) {
    return func;
  }

  result(foo) ();
  // result() (foo); // TypeError: result(...) is not a function
}