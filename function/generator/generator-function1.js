/**
 * function*
 *  - function* 宣告式（function 關鍵字後面跟著一個星號）定義了一個生成器函式（generator function），他會回傳一個生成器（Generator）物件。
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/function*
 * 
 */

function* generator(i) {
    yield i;
    yield i + 10;
}

const g = generator(10);

console.log(g.next().value); // 10
console.log(g.next().value); // 20
console.log(g.next().value); // undefined

