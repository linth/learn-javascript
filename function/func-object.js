/**
 * 利用含有 a 與 b 屬性的 f 函式，建立一個 o 物件
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */

let f = function() {
    this.a = 1;
    this.b = 2;
}

let o = new f(); 
console.log(o); // f {a: 1, b: 2}

// 接著針對 f 函式的原型添加屬性
f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a); // 1
// o 有屬性「a」嗎？有，該數值為 1。


console.log(o.b); // 2
// o 有屬性「b」嗎？有，該數值為 2。
// o 還有個原型屬性「b」，但這裡沒有被訪問到。
// 這稱作「property shadowing」


console.log(o.c); // 4
// o 有屬性「c」嗎？沒有，那就找 o 的原型看看。
// o 在「o.[[Prototype]]」有屬性「c」嗎？有，該數值為 4。


console.log(o.d); // undefined
// o 有屬性「d」嗎？沒有，那就找 o 的原型看看。
// o 在「o.[[Prototype]]」有屬性「d」嗎？沒有，那就找 o.[[Prototype]] 的原型看看。
// o.[[Prototype]].[[Prototype]] 是 Object.prototype，預設並沒有屬性「d」，那再找他的原型看看。
// o 在「o.[[Prototype]].[[Prototype]].[[Prototype]]」是 null，停止搜尋。
// 找不到任何屬性，回傳 undefined。