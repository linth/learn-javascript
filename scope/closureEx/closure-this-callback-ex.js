/**
 * [重要！！] 為了讓專案不踩雷，建議遵循以下開發規範：
 *  - 高頻率物件用 Prototype： 如果你的類別會實例化成千上萬次（例如遊戲中的 Bullet 類別），絕對不要在裡面用箭頭函式。
 *  - React 元件方法： 建議使用箭頭函式，因為它們經常被當作 Props 傳向下層元件。
 *  - TypeScript 強制檢查： 在 tsconfig.json 中開啟 "noImplicitThis": true，TS 會在 this 指向不明確時直接報錯提醒你。
 *  - 避免在 Callback 中使用 this： 如果可以，盡量透過參數傳遞資料，而不是依賴 this。
 */



/**
 * 1. 核心差別：執行 (Invoke) vs. 引用 (Reference)
 * const d = diagnostic.standardMethod();
 * 立即執行
 * 執行後的結果 (例如數字 1) 正常運作。
 * 因為有 . 呼叫。
 * 
 * 
 * const myCallback = diagnostic.standardMethod;
 * 引用函式
 * 函式的本身 (那段程式碼)
 * 危險！ this 會脫離原本的物件。
 * 
 * 
 * 2. 為什麼後面有沒有 () 這麼重要？
 * 在 JavaScript 中，函式是「一等公民」（First-class function），這意味著函式可以像數字或字串一樣被傳來傳去。
 * 
 * 情境 A：const d = diagnostic.standardMethod(); 動作： 你呼叫了 diagnostic 的方法。
 * 過程： JS 看到 ()，立刻去執行該函式，執行時發現前面有 diagnostic.，所以 this 綁定成功。
 * 結果： d 變成了一個值（例如 1）。這之後 d 就跟 diagnostic 沒關係了。
 * 
 * 
 * 情境 B：const myCallback = diagnostic.standardMethod;
 * 動作： 你只是把 standardMethod 這塊「程式碼」複製一份丟給 myCallback。
 * 過程： 沒有執行。你只是把紙條從 diagnostic 的口袋拿出來，換個位置放。
 * 後果： 當你之後執行 myCallback() 時，前面沒有 . 了。JS 引擎這時候不知道這個函式原本是屬於誰的，所以 this 就會變成 undefined。
 */

{
  class Diagnostic {

    standardMethod() {
      console.log('call standardMethod function.');
    }
  }


  const diagnostic = new Diagnostic();
  // 情境 A：正常呼叫
  diagnostic.standardMethod();

  // 情境 B：當作 Callback 傳出去
  // 注意！這裡你只是把「函式的內容」賦值給一個變數。
  // 就像是把一張寫著「去冰箱拿飲料」的紙條，從 diagnostic 口袋拿出來，放在桌上。
  const myCallback = diagnostic.standardMethod; // callback
  console.log(myCallback()); // undefined
  console.log(myCallback); // [Function: standardMethod]
}



// 萬用程式碼
{
  class Diagnostic {
    id = 1;

    // 1. Prototype Method: 效能好，但傳出去當 callback 會失去 this
    standardMethod() {
      console.log(this.id);
    }

    // 2. Instance Method (Arrow): 消耗記憶體，但 this 永遠安全
    safeCallbackMethod = () => {
      console.log(this.id);
    }
  }

  const diagnostic = new Diagnostic();

  // --- 診斷 ---
  const cb1 = diagnostic.standardMethod; 
  // cb1(); // 💥 BUG! this is undefined

  const cb2 = diagnostic.safeCallbackMethod;
  cb2(); // ✅ 安全！印出 1
}


