/**
 * Transpiler 轉譯物
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */

{
  // 直接給一個預設值

  function foo(a=2) {
    console.log(a);
  }

  foo(); // 2
  foo(42); // 42
}