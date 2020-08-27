/*
    JS閉包有幾個特點：
    1) 可返回函數內定義的函數
    2) 可讓外部環境使用內部private變數
    3) 在記憶體中一直保有private變數
*/

function f() {
    var n = 999;

    function f2() {
        var n2 = 10;
        console.log(n += 1);
    }

    function f3() {
        console.log('this is a f3 function.');
    }
    console.log('this is function f.');
    return f2;
}

var result = f();

result();
result();
result();

/* this is function f.
1000
1001
1002 */