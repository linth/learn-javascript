JavaScript 開發中，**Microtask (Promise/async/await)** 確實是邏輯順序最容易出錯、也是效能瓶頸最常發生的「一級戰區」。

---

## 1. 程式碼最終執行順序

你的程式碼執行結果如下：

1. `1: Start` (同步)
2. `show` (執行 `test()` 時同步進入 `show()`)
3. `4: End` (同步)
4. `3: Promise` (Microtask 1)
5. `test` (Microtask 2：`await show()` 後的內容)
6. `show2` (Microtask 2：執行 `test` 的同時呼叫 `show2`)
7. `2: Timeout` (Task/Macrotask)

---

## 2. [重要！] 精簡結論：三層過濾法

判斷順序時，請直接套用這三層邏輯：

1. **第一層：同步優先 (Call Stack)**
* 看到 `console.log`、`new Promise(executor)`、或是 `await` **那一列**的函式呼叫，通通立即執行。


2. **第二層：微任務清空 (Microtask Queue)**
* 只要 Stack 一空，立刻「一口氣」跑完所有 `Promise.then`、`await` 後方的代碼。
* **關鍵點：** 微任務沒清完，瀏覽器**不會**渲染畫面，也不會跑 `setTimeout`。


3. **第三層：宏任務排隊 (Task Queue)**
* `setTimeout`、`setInterval`、`I/O` 永遠排在最後。
* **關鍵點：** 一次循環只執行「一個」宏任務，做完後會再回去檢查有沒有新的微任務。



---

## 3. 如何判斷與 Debug 瓶頸？

當你懷疑程式碼卡在非同步邏輯時，請用以下三招：

### A. 判斷瓶頸是否在 Microtask

* **現象：** 畫面上按鈕點了沒反應（UI 凍結），但電腦 CPU 飆高。
* **原因：** 可能有一個 `async` 函式陷入了無限循環，或者產生了過多的 Promise，導致 Event Loop 永遠卡在「清空微任務」階段，沒機會去執行「UI 渲染」這個宏任務。

### B. 使用瀏覽器 Performance 面板 (最強 Debug 工具)

1. 打開 Chrome DevTools -> **Performance** 標籤。
2. 點擊錄製 (Record)，操作你的網頁，然後停止。
3. 觀察 **Main Thread** 區塊：
* 長長的**紅色區塊**代表 Long Task (超過 50ms)。
* 你可以清楚看到是哪個 `Promise` 或 `anonymous function` 佔用了大量時間。



### C. 程式碼層級的 Debug 技巧

如果你不確定順序，可以用 `console.log` 加上「標籤」：

```javascript
// 在懷疑的地方加入 trace
console.time('microtask-check');
Promise.resolve().then(() => {
  console.timeEnd('microtask-check'); // 觀察微任務觸發的耗時
});

```

---

## 4. 瓶頸大多會發生在 Microtask 對嗎？

**是的，但不完全是。**

* **邏輯瓶頸：** 通常發生在 `await` 順序搞錯（例如應該併發 `Promise.all` 卻寫成序列 `await`），導致速度變慢。
* **效能瓶頸：** 1.  **Microtask 太頻繁：** 導致 UI 無法更新（如前所述）。
2.  **同步代碼太重：** 在 `async` 函式中寫了超大型 `for` 迴圈，這會直接卡死 Call Stack，連微任務都進不來。

**思考：**
既然你已經掌握了順序，想了解如何利用 `Promise.all` 或 `Promise.race` 來優化這些 `await` 的執行效率嗎？這能解決你提到的「順序瓶頸」問題。