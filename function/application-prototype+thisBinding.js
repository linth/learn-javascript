/**
 * JS = prototype + dynamic this binding.
 * 
 * [請參考 4-kinds-of-calling-functions.js]
 * 
 * 為什麼需要這種功能？
 * 在 JS 裡，函數是一等公民，物件沒有「方法固定綁定」，方法本身只是附加在物件上的函數。
 * call / apply 允許你：
 * 改變 this 指向：把函數暫時綁定到另一個物件上執行。
 * 借用功能而不改變原物件結構：不用繼承、不用 new，也不用擴充 class 就能「偷用」別人的方法。
 * 簡單說：JS 是 prototype + dynamic this binding，這種功能就是核心的靈魂。
 * 
 * 
 */


{
  // 情境 A：借用工具函數（Function Borrowing）
  function greet() {
    console.log(this.name);
  }

  const persion = { name: 'peter' };
  const robot = { name: 'R2D2' };

  greet.call(persion); // peter
  greet.call(robot); // R2D2
}

{
  // 情境 B：操作類陣列物件（Array-like Objects）
  function printArgs() {
    const argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr);
  }

  printArgs(1, 2, 3); // [ 1, 2, 3 ]
}

{
  // 情境 C：前端事件 / UI 框架
  const button = { text: 'Click' };

  function showText () {
    console.log(this.text);
  }

  const handler = showText;
  handler.call(button); // Click
}


/**
 * 3️⃣ 好處
 * 重複使用：不用重寫函數即可給其他物件用
 * 避免繼承/extends：簡單「借能力」而非複雜繼承樹
 * 動態控制 this：函數可以「漂浮」到任意物件上執行
 * 操作類陣列或類似結構：Array / NodeList / arguments 等
 */


/**
 * 4️⃣ 壞處 / 限制
 * 只執行一次： 
 *  - call/apply 是「立即執行」
 *  - 如果要重複用，需要 bind 或重新 call
 * 
 * this 綁定混亂：
 *  - 如果誤用，this 可能指向 window/undefined
 *  - 前端事件或 async 時特別容易踩坑
 * 
 * 可讀性較差：
 *  - 其他人看到 .call(cat)，可能需要理解動態綁定概念
 * 
 * 性能略低：
 *  - 每次都需要臨時綁定 this，比直接方法略慢（通常影響微乎其微）
 */