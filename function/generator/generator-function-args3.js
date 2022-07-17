/**
 * 生成器中的回傳陳述式
 * 
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/function*
 */

function* yieldAndReturn() {
    yield 'Y';
    return 'R';
    yield 'unreachable';
}


var g = yieldAndReturn();

console.log(g.next()); // { value: 'Y', done: false }
console.log(g.next()); // { value: 'R', done: true }
console.log(g.next()); // { value: undefined, done: true }

