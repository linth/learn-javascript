/**
 * validation - isNaN
 *  - NaN 表示值為無效的數字
 *  - 在 ES6 以前，開發者使用 isNaN 在數學運算或解析字串後檢測得到的結果是否為合法的數字
 * 
 * 
 * polyfill
 *  - Polyfilling 的意思就是依據一個新功能的定義，製作具有相同行為，而能在較舊的 JavaScript 環境執行的程式碼。
 *  - 為舊瀏覽器掛載新功能
 * 
 * Reference
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */

{
  console.log(isNaN({})); // true, 不是數字
  console.log(isNaN(123)); // false
  console.log(isNaN(0)); // fales
  console.log(true); // true
  console.log(isNaN(0 / 0)); // true
  console.log(isNaN(1 / 0)); // false
}


{
  // polyfill
  if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
      return x !== x; // NaN 是唯一一個不等於自己的值
    }
  }

  console.log(isNaN(NaN)); // true
  console.log(isNaN(Number.NaN)); // true
}