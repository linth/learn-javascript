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

// Literal constructor (broken up)
var order = {};
order.id = 1;

console.log(order.id); // 1
order.custom = {};
console.log(order.custom.id); // undefined


// Literal Constructor (in one statement)
var order = {
    id: 1, 
    customer: {
        id: 1
    }
};


// Custom Constructor Functions (standard), 
//* old school javascript option.
function Order(id) {
    this.id = id;
}

var o = new Order();
console.log(o.id); // undefined

var p = new Order(3);
console.log(p.id); // 3


// Custom Constructor Functions (using an extra reference) 
// * 差別在於使用一個變數去reference object.
var Order = function(id) {
    this.id = id;
}

var q = new Order(4);
console.log(q.id); // 4
