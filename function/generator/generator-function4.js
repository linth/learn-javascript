/**
 * 生成器無法被建構, 以表達式定義生成器
 * 
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/function*#%E7%94%9F%E6%88%90%E5%99%A8%E7%84%A1%E6%B3%95%E8%A2%AB%E5%BB%BA%E6%A7%8B
 */

function* f() {

}

// var obj = new f; // TypeError: f is not a constructor


const foo = function* () {
    yield 10;
    yield 20;
};


const bar = foo();

console.log(bar.next()); // { value: 10, done: false }
console.log(bar.next()); // { value: 20, done: false }
console.log(bar.next()); // { value: undefined, done: true }
