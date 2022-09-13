/**
 * const for params, collection, function, and class.
 * 
 * 
 */

// params example.
// ! 不可改變變數值
const params = 1;
console.log('params', params); // 1

// params = 3;
// console.log('params', params); // TypeError: Assignment to constant variable.



// collection example.
// ! 可以放資料進去 collection
const a = [];
console.log('array', a); // []

a.push(1);
a.push(3);
a.push(11);
console.log('array', a); // [1, 3, 11]


// function example.
// ! 不可替換不同的 function
const f = function() {
    console.log('this is a fist function.');
}
console.log(f);

// error
// f = function() {
//     console.log('hello world.');
// }
// console.log(f); // Uncaught TypeError TypeError: Assignment to constant variable.

const add = (a, b) => {
    return a+b;
}
console.log(add); // (a, b) => { return a+b; }

// error
// add = (a, b) => {
//     return a * b;
// }
// console.log(add); // Uncaught TypeError TypeError: Assignment to constant variable.


// class example.
class Figure {
    constructor(h, w) {
        this.height = h;
        this.weight = w;
    }

    area() {
        return this.height * this.weight;
    }
}

const fig = new Figure(10, 10);
console.log(fig); // Figure {height: 10, weight: 10}

// fig = new Figure(10, 10); 
// console.log(fig); // Uncaught TypeError TypeError: Assignment to constant variable.

// fig = new Figure(20, 20);
// console.log(fig);

