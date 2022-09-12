/**
 * callback with args.
 * 
 * Reference:
 *  - 
 */


function tryMe(param1, param2) {
    console.log('parameter 1:' + param1);
    console.log('parameter 2:' + param2);

    console.log('combine two params: ', param1 + param2); // combine two params:  hellogoodbye
}


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
    console.log('world', 'p1', p1, 'p2', p2);
}


// ! 在 function 內，增加另一個 function.
callbackTester(showWorld, 'first arg', 'second arg'); // world p1 first arg p2 second arg
