/**
 * 使用 block 和 function 的範例
 *  - 告範圍在整個函式(function)或者區塊(block)中。
 * 
 */
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

// ? block內的function宣告，建議不要使用
{
    let aa = 'secret';
    function f4() {
        return aa;
    }

    console.log(f4()); // secret
}

// ? block內部，優先使用function
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}


var b = '000'

{
    let a = 1;
    var b = '111';
}


function f() {
    // console.log(a); // ReferenceError: a is not defined
    console.log(b); // 111

    let c = 2;
}

function ff() {
    let n = 5;

    if (true) {
        let n = 10;

        console.log(n); // 10
    }

    console.log(n); // 5
}


f();
ff();
// console.log(a); // undefined.
console.log(b); // 111
// console.log(c); // undefined.
// console.log(n); // undefined.
