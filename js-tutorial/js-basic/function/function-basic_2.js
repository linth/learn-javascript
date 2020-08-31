/* 
    1) 函式是JS的第一級物件: 意思是JS函式雖是函式，同時也是個物件
        - 可在程式執行時期動態建立
        - 可以指定給變數，也可以複製參考
        - 作為參數來傳遞
        - 擁有自己的屬性與方法
    2) 提供了作用域
    - https://ithelp.ithome.com.tw/articles/10108177
*/

// 說明函式的參考或指標

var feedCat_old = function() {
    console.log('This is original function.');
};

var feedCat_new = feedCat_old;

var feedCat_old = function() {
    console.log('This is copied function.');
};

feedCat_new(); // This is original function. 因為feedCat_old重新定義成為另一function之後，feedCat_new仍然指向舊的feedCat_old。


var gFunction = function() {
    // global
};

var containerFunction = function() {
    var subFunction = function() {
        gFunction(); // ok
    }

    gFunction(); // ok
    subFunction(); // ok
}

containerFunction();
// subFunction(); // error; 錯誤，因為subF僅存於containerF內


// JS函式中的參數，可以直接視為“建議”參數，也就是："定義時就算有指定，但呼叫時不給也沒關係。"
var myFunc = function(a, b, c) {
    console.log('a', a, 'b', b, 'c', c);

    // 最後一例中，若我們要存取參數中的第4個至第10個，那該怎麼作呢？ 所幸每個函式都會有內建的屬性來記錄參數群：
    for (var i=0; i<arguments.length; i++) {
        console.log(arguments[i]);
    }

    // 因為arguments雖看起來像似Array，但其實並不完全如此。
    // 所以為了真能使用Array方法（splice, slice, push, pop），需把參數群轉換成Array，指令如下：
    var args = Array.prototype.slice.apply(arguments);
    console.log('args', args);
};

myFunc(1); // a 1 b undefined c undefined, 不會發生錯誤
myFunc(1, 2); // a 1 b 2 c undefined, 不會發生錯誤
myFunc(1,2,3); // a 1 b 2 c 3, 不會發生錯誤
myFunc(1,2,3, 4, 5, 6, 7, 8, 9, 10); // a 1 b 2 c 3, 不會發生錯誤

