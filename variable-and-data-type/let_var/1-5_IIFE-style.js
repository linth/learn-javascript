/**
 * IIFE (Immediately Invoked Functions Expressions) 寫法 
 *  - 指的是可以立即執行的Functions Expressions函式表示式
 *  - 電腦在函式表示式後面讀到()，就知道要立刻呼叫這個函式，這種立刻執行的函式寫法就稱為IIFE。
 *  - 使用立即函式的好處，除了可以立即執行程式碼，省略多餘的呼叫，還可以用來避免汙染全域執行環境的東西，減少開發時因相同命名相衝的bug。
 * 
 * 
 * Reference:
 *  - https://es6.ruanyifeng.com/#docs/let
 *  - https://ithelp.ithome.com.tw/articles/10193313
 */

(function () {
    var tmp = '111';
    console.log(tmp);
}());


// 一般傳統寫法
var hello = function(name) {
    console.log('hello ' + name);
}


// IIFE
var hello2 = function(name) {
    console.log('hello (iife) ' + name);
}('george'); 


// console.log(tmp); // ReferenceError: tmp is not defined
hello();

/**Result:
 * 
 * 111
 * hello (iife) george
 * hello undefined
 */

