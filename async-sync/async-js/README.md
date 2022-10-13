# 非同步程式設計 (六種方案)

## 同步與非同步


## Callback


## 事件監聽
這種方式下，非同步任務的執行不取決於程式碼的順序，而取決於某個事件是否發生。


## 釋出訂閱
我們假定，存在一個"訊號中心"，某個任務執行完成，就向訊號中心"釋出"（publish）一個訊號，其他任務可以向訊號中心"訂閱"（subscribe）這個訊號，從而知道什麼時候自己可以開始執行。這就叫做"釋出 / 訂閱模式"（publish-subscribe pattern），又稱"觀察者模式"（observer pattern）。


## Promise/A+
Promise 本意是承諾，在程式中的意思就是承諾我過一段時間後會給你一個結果。 什麼時候會用到過一段時間？答案是非同步操作，非同步是指可能比較長時間才有結果的才做，例如網路請求、讀取本地檔案等。

Promise 的三種狀態
    - Pending----Promise 物件例項建立時候的初始狀
    - Fulfilled---- 可以理解為成功的狀態
    - Rejected---- 可以理解為失敗的狀態

## 生成器 Generators/ yield
Generator 函式是 ES6 提供的一種非同步程式設計解決方案，語法行為與傳統函式完全不同，Generator 最大的特點就是可以控制函式的執行。


## async/await
使用 async/await，你可以輕鬆地達成之前使用生成器和 co 函式所做到的工作, 它有如下特點：

async/await 是基於 Promise 實現的，它不能用於普通的回撥函式。
async/await 與 Promise 一樣，是非阻塞的。
async/await 使得非同步程式碼看起來像同步程式碼，這正是它的魔力所在。
一個函式如果加上 async ，那麼該函式就會返回一個 Promise。
```
async function async1() {
 return "1"
}
console.log(async1()) // -> Promise {<resolved>: "1"}
```


# 總結
JS 非同步程式設計進化史：
```
callback -> promise -> generator -> async + await
```


# Reference
- [詳解前端非同步程式設計的六種方案](https://www.gushiciku.cn/pl/ggZi/zh-tw)