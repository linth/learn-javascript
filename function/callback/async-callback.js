/**
 * async callback function.
 *  - 在一定時間內(第二個參數)執行第一個參數，也就是setTimeout會執行的回調函式，第三個參數是要加入到回調函式的傳入參數值。
 * 
 * 
 * 我們在執行 Javscript 的時候，Javascript 是在瀏覽器內執行的，
 * 
 * 瀏覽器還提供了很多 WebAPI (ex: document、XMLHttpRequest、setTimeout) 給我們使用，他們不在 V8 引擎中，也是我們無法取得的內容，我們只能呼叫這些功能去執行他，當瀏覽器知道你要呼叫他們來用的時候，就可以和你的程式碼同時一起執行 (Concurrency) ，也不會影響到你的 JS 主程式，
 * 
 * 所以在瀏覽器內，只有 Javascript 引擎本身是同步的，而 Javascript 引擎可以跟 WebAPI 溝通，達到非同步的事件處理。
 * 
 * Reference:
 *  - https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/callback.html
 *  - https://medium.com/itsems-frontend/javascript-sync-async-22e75e1ca1dc
 */


function aFunc(value, callback) {
    // aFunc中使用了一般的回調函式，只是傳入到函式中當作參數，然後最後執行而已，這種是同步執行的回調函式，只是用了CPS風格的寫法。
    callback(value);
}

function bFunc(value, callback) {
    // ! bFunc中使用了計時器APIsetTimeout會把傳入的回調函式進行異步執行，也就是先移到工作佇列中，等執行主執行緒的呼叫堆疊空了，在某個時間回到主執行緒再執行。
    // ! 所以即使它的時間設定為0秒，裡面的回調函式並不是立即執行，而是會暫緩(延時)執行的一種回調函式，一般稱為異步回調函式。
    setTimeout(callback, 0, value);
}

function cb1(value) { console.log(value) }
function cb2(value) { console.log(value) }
function cb3(value) { console.log(value) }
function cb4(value) { console.log(value) }


// 最後的執行結果是1 -> 3 -> 2 -> 4
aFunc(1, cb1);
bFunc(2, cb2); // bFunc 會先放入呼叫堆疊，在某個時間回到主執行緒再執行。
aFunc(3, cb3);
bFunc(4, cb4);
