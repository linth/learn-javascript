/**
 * 函數使用 callback 函數當引數輸入, callback函數內有兩個引數.
 * 
 * Reference:
 *  - 
 */


// 函式輸入有兩個引數, param1, param2
function tryMe(param1, param2) {
    console.log('parameter 1:' + param1);
    console.log('parameter 2:' + param2);

    console.log('combine two params: ', param1 + param2); // combine two params:  hellogoodbye
}

// 函式使用callback function當引數輸入
function callbackTester(callback) {
    console.log('arg1', arguments[1]);
    console.log('arg2', arguments[2]);

    callback(arguments[1], arguments[2]);
}


callbackTester(tryMe, 'hello', 'goodbye');

// callbackTester(function(k) {
//     tryMe('hello', 'world', k);
// })


function showHello(cb, p1, p2) {
    console.log('hello', 'p1', p1, 'p2', p2);
    cb();
}

function showWorld(p1, p2) {
    console.log('world', 'p1:', p1, 'p2:', p2);
}


// ! 在 function 內，增加另一個 function.
callbackTester(showWorld, '第一個引數', '第二個引數'); // world p1 first arg p2 second arg

/**
 * 
 * arg1 hello
 * arg2 goodbye
 * parameter 1:hello
 * parameter 2:goodbye
 * combine two params:  hellogoodbye
 * arg1 第一個引數
 * arg2 第二個引數
 * world p1: 第一個引數 p2: 第二個引數
 */