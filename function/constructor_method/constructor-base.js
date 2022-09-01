/**
 * Constructor
 *  - 
 * 
 * Reference:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

class A {

}

class B {
    // TODO: 發現過類似寫法，只有 arguments。沒有 this.xxx = xxx 設定，需要確認。
    constructor(a) {}
}


class C {
    constructor(h, w) {
        this.height = h;
        this.weight = w;
    }
}


let c = new C(180, 77);
console.log(c.height, c.weight); // 180 77