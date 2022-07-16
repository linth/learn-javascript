/**
 * callback with args.
 * 
 * Reference:
 *  - 
 */


function tryMe(param1, param2) {
    console.log('parameter 1:' + param1);
    console.log('parameter 2:' + param2);
}


function callbackTester(callback) {
    callback(arguments[1], arguments[2]);
}


callbackTester(tryMe, 'hello', 'goodbye');

callbackTester(function(k) {
    tryMe('hello', 'world', k);
})

