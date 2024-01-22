/**
 * 同步/非同步差異:
 *  - 同步執行會立刻被call function, 並且阻塞後續程式進行
 *  - 非同步函數則會返回一個promise物件, 內部可能包含await表達式, 用來等待非同步的操作完成, 所以非同步內部不會阻塞程序執行
 * 
 * 同步/非同步進階範例
 */

{
  // 同步函數
  function syncFunction() {
    console.log('start');
    console.log('end');
  }

  console.log('before');
  syncFunction();
  console.log('after');

  /**
   * before
   * start
   * end
   * after
   */
}

{
  // 非同步函數
  async function asyncFunction() {
    console.log('start');
    await delay(1000);
    console.log('after delay');
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  console.log('before');
  asyncFunction();
  console.log('after');

  /**
   * before
   * start
   * after
   * after delay
   */
}