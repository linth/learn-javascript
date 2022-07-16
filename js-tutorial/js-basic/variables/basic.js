/*
變數 variable


Reference:
    - https://ithelp.ithome.com.tw/articles/10103433

Note:
    （1）用var創造出的全域變數不可以刪除
    （2）不使用var隱含創造出的全域變數可以刪除
    
    隱含的全域變數在技術上來說，並不是真的變數，而是全域物作的“屬性”。
    屬性可用“delete”來刪除，但真的變數不行。
*/

// 定義三個全域變數
var global_var = 1;
global_novar = 2;

// 立即函數，亦即只運行一次
(function() {
    global_fromfunc = 3;
}());

// 試著刪除
delete global_var;
delete global_novar;
delete global_fromfunc;

// 刪除之後
console.log(typeof(global_var)); // number
console.log(typeof(global_novar)); // undefined
console.log(typeof(global_fromfunc)); // undefined


/*
Reference:
    - https://ithelp.ithome.com.tw/articles/10103751
*/

// 單一「var」模式
function func() {
    var a = 1,
        b = 2,
        sum = a + b,
        myobject = {},
        i,
        j,
    // function content.
}

function updateElement() {
    var chamber_id = document.getElementById('chamber_id'),
        style = chamber_id.style;
}