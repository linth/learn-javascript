/**
 * nested scope
 *  - 可被使用的情境: 
 *    1. 事件處理程序: 在網頁開發中，事件處理程序常常使用巢狀作用域來訪問事件的詳細信息和相關元素。
 *    2. 模塊化開發: 在模塊化 JavaScript 中，您可以使用巢狀作用域來限制模塊內部的變數不會泄漏到全局作用域。
 *    3. Promise 和回調函數: 在處理異步操作（如 AJAX 請求或定時器）時，您可以使用巢狀作用域來管理回調函數的變量。
 *    4. 迴圈: 在迴圈中定義的變量可以在迴圈內部的巢狀作用域中訪問，避免了變數重複宣告。
 *    5. 閉包（Closure）: 閉包是一種函數和其環境變數的組合，常見於異步操作和保留狀態。
 *    6. DOM 操作: 在網頁開發中，巢狀作用域用於處理 DOM 操作，使您可以輕鬆訪問相關元素和事件。
 *    7. 表單驗證: 在表單驗證中，您可以使用巢狀作用域來檢查輸入的有效性並訪問其他表單元素。
 *    8. 遞迴: 遞迴函數可能會使用巢狀作用域來處理每一個遞迴步驟的變量。
 *    9. 本地存儲: 在 Web 應用中，您可以使用巢狀作用域來管理本地存儲數據，如使用 localStorage 或 sessionStorage。
 *    10. UI 組件: 在設計 UI 組件時，您可以使用巢狀作用域來封裝組件的內部變數和邏輯，避免與其他組件衝突。
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */

{
  const foo = (a) => {
    console.log(a+b);
  };

  const b = 2;

  foo(2); // 4
}


{
  // nested-scope example.
  function outerFunction() {
    var outerVariable = 'I am from outer function.';

    function innerFunction() {
      var innerVariable = 'I am from inner function.'

      console.log(outerVariable);
      console.log(innerVariable);
    }

    innerFunction();
  }

  outerFunction();
}