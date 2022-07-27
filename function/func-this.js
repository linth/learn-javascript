/**
 * function + this example.
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */

var o = {
    a: 2,
    m: function() {
        return this.a + 1;
    }
}

console.log(o.m()); // 3
// 在這裡呼叫 o.m 時「this」指的是 o

var p = Object.create(o);
// p 是個從 o 繼承的物件

p.a = 4; // 在 p 建立屬性「a」
console.log(p.m()); // 5
// 呼叫 p.m 時「this」指的是 p
// 因此在 p 繼承 o 的函式 m 時，
// 「this.a」指的是 p.a：也就是 p 的自有屬性「a」
