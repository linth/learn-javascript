/**
 * closure 閉包
 *  - 閉包是指變數的生命週期只存在於該函式內，一旦離開了函式，該變數就會被回收而不可再利用，且必須在函式內事先宣告。
 * 
 */


{
  function closure() {
    var a = 1;
    console.log(a);
  }

  closure();
  a; // ReferenceError: a is not defined
}

