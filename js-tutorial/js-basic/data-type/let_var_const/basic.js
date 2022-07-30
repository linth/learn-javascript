/*
Goal: Now we’ve learned about the following items:
    - let
    - var

keywords:
    - let
    - var

Note:
    - let變數必須宣告後，才可使用。
    - let變數不允許重複宣告。
    - var變數在宣告前使用，值為undefined。

Reference:
    - https://es6.ruanyifeng.com/#docs/let
*/

// ! let work in the block of function. { }
// * 請參考 1-1_block-let-var.js
{
    let a = 10;
    var b = 1;
}

// console.log('a = ', a); // a is not defined.
console.log('b = ', b);


// * example 2: using let. (跟上方範例類似)
for (let i=0; i<10; i++) {

}
// console.log(i); // i is not defined.

// * example 3: using var. 
// TODO: check the concept.
var a = [];
console.log('a', a);

for (var i=0; i<10; i++) {
    a[i] = function() {
        // console.log(i);
        return i
    }
}
console.log('example 3: ', a[1]()); // 10
console.log('example 3: ', a[1]); // [Function]


// * example 4: 不存在的變數
console.log('foo', foo); // undefined.
var foo = 2;

// console.log('bar', bar); // ReferenceError: Cannot access 'bar' before initialization.
let bar = 3;


// * example 5: 如果在全域變數跟區域變數宣告一樣名稱，在 {} block內的let宣告前，賦予值會出錯。
var tmp = 123;

if (true) {
    // ? temporal dead zone, (TDZ) 暫時性死區
    // tmp = 'abc'; // ReferenceError: Cannot access 'tmp' before initialization
    let tmp = 'def';

    // ! 注意抓取的是區域變數或全域變數?
    console.log('tmp = ', tmp); // def
}

// * example 6: 不同block內的區域變數
// * 請參考 1-3_different-block.js
// ! [重要觀念]
var hh = 4;
{
    let gg = 3;
    { 
        let gg = 1;
        console.log('gg', gg); // gg 1
        console.log('hh', hh); // hh 4
    }
    { 
        let gg = 2;
        console.log('gg', gg); // gg 2
        console.log('hh', hh); // hh 4
    }

    console.log('gg', gg); // gg 3
    console.log('hh', hh); // hh 4
}
// console.log('gg', gg); // gg is not defined.
console.log('hh', hh); // hh 4


// * example 7: block {} and function ()
// * 請參考 1-4_block-function.js
// ! [重要觀念] ES5規定 function不能在block宣告，下面範例是屬非法使用，但瀏覽器沒遵守次規定，所以可以在瀏覽器上使用不會錯誤。
// ? scenario 1.
if (true) {
    function f1() {}
}

// ? scenario 2.
try {
    function f2() {}
} catch(e) {
    // ...
}

// ![重要觀念] function宣告類似於let，在block {} 外不可引用。
function f3() { console.log('I am outside!'); }

(function () {
    if (false) {
        // 重複宣告一次function 3
        function f3() { console.log('I am inside!'); }
    }

    // f3(); // TypeError: f3 is not a function
}());


// ? block內的function宣告，建議不要使用
{
    let aa = 'secret';
    function f4() {
        return aa;
    }
}

// ? block內部，優先使用function
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}