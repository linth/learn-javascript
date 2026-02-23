# Event Loop in JS 觀念

理解 **Event Loop (事件輪轉)** 是從「寫程式」進化到「掌握 JavaScript 執行機制」的必經之路。JavaScript 是**單執行緒 (Single Thread)** 的語言，一次只能做一件事，但它卻能處理高併發的非同步請求，秘訣就在這套機制裡。

我們可以將 Event Loop 想像成一個調度員，它不斷地在看哪些任務該進場執行。

![Event-Loop-in-JavaScript](Event-Loop-in-JavaScript.jpg)
---

## 1. 核心組成：三大區域
搞懂 Event Loop，你得先認識這三個核心組件：

* **Call Stack (執行棧):** 這是 JavaScript 執行程式碼的地方。遵循「後進先出」(LIFO)。當你呼叫一個函式，它就被推入 Stack；執行完後，就從 Stack 彈出。
* **Task Queue / Callback Queue (宏任務隊列):** 存放非同步操作的 Callback，例如 `setTimeout`, `setInterval`, I/O 任務。
* **Microtask Queue (微任務隊列):** 存放優先權較高的非同步任務，主要是 `Promise.then`, `MutationObserver` 以及 `process.nextTick` (Node.js)。

---

## 2. Event Loop 的執行順序
這是面試最愛考的執行邏輯。請記住這個循環：

1. **執行 Call Stack 中的同步程式碼**，直到 Stack 清空。
2. **檢查 Microtask Queue**：如果裡面有任務，會**一次性全部執行完**，直到 Microtask Queue 清空。即便在執行的過程中產生了新的微任務，也會在此步驟一併清空。
3. **渲染畫面 (Render)**：如果瀏覽器認為需要更新畫面，會在此時進行。
4. **檢查 Task Queue**：取出**「一個」**宏任務放到 Call Stack 執行。
5. **回到步驟 2**，不斷循環。

> **關鍵：** 先執行同步，再清空微任務，最後才做一個宏任務。

---

## 3. 實例

看看下面的程式碼，你認為輸出的順序是什麼？

```javascript
console.log('1: Start');

setTimeout(() => {
  console.log('2: Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise');
});

console.log('4: End');

```

### 解析過程：

1. **同步執行：** 印出 `1: Start`。
2. **非同步處理：** * `setTimeout` 交給 Web API 計時，完成後將 Callback 放入 **Task Queue**。
* `Promise.then` 被放入 **Microtask Queue**。
3. **同步執行：** 印出 `4: End`。此時 Call Stack 空了。
4. **檢查 Microtask：** 發現有 Promise，印出 `3: Promise`。
5. **檢查 Task Queue：** 發現有 setTimeout，印出 `2: Timeout`。

**最終結果：** `1 -> 4 -> 3 -> 2`

---

## 4. 關於 async/await

 `async/await` 其實它只是 Promise 的語法糖：

* `await` 之前的程式碼是**同步**執行的。
* `await` 之後的程式碼，會被包裹進一個隱形的 `.then()` 中，也就是會被丟進 **Microtask Queue**。

---

## 為什麼這很重要？

如果不理解 Event Loop，你可能會遇到以下困擾：

* **畫面卡死：** 在 Call Stack 執行太久的運算，導致 Microtask 和 Task Queue 沒機會跑，瀏覽器無法渲染。
* **競態條件 (Race Condition)：** 搞不清楚多個非同步操作誰先誰後，導致資料抓取錯誤。

