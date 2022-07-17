/**
 * function*
 *  - function* 宣告式（function 關鍵字後面跟著一個星號）定義了一個生成器函式（generator function），他會回傳一個生成器（Generator）物件。
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/function*
 * 
 */

function* idMaker() {
    var index = 0;

    while (index < index+1)
        yield index++;
}


function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}


function* generator(i) {
    yield i;
    yield* anotherGenerator(i)
    yield i + 10;
}


var g = idMaker();

console.log(g.next().value); // 0
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3
console.log(g.next().value); // 4


var g2 = generator(10)

console.log(g2.next().value); // 10
console.log(g2.next().value); // 11
console.log(g2.next().value); // 12
console.log(g2.next().value); // 13
console.log(g2.next().value); // 20
console.log(g2.next().value); // undefined
