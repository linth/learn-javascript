/**
 * 傳統使用 var 寫法，會有全域變數、區域變數被混用的副作用發生. 
 *  - 
 * 
 * Reference:
 *  - https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230
 */

var tmp = 'javascript';

function f() {
    console.log(tmp); // undefined

    if (true) {
        var tmp = 'hello world.';
    }

    console.log('local variable:', tmp); // local variable: hello world.
};


f();
console.log('global variable:', tmp); // global variable: javascript


// 循環變數洩漏為全域變數
var s = 'hello';

for (var i=0; i<s.length; i++) {
    console.log(s[i]); // h e l l o
}

console.log(i); // 5
