/**
 * function scope
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */


{
  // 全域範疇底下，是無法存取 foo 內的 a、b、c 和 bar

  function foo(a) {

    function bar() {
      // ...
    }

    var c = 3;
  }


  // console.log(a); // ReferenceError
  // console.log(b); // ReferenceError
  // console.log(c); // ReferenceError

  // bar(); // ReferenceError
}

