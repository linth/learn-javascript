/**
 * 產生物件和原型鏈的幾種方法
 *  - 含有語法結構的物件
 *  - 1. 透過建構子
 *  - 2. 用 Object.create
 *  - 3. 使用關鍵字 class
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#%E5%90%AB%E6%9C%89%E8%AA%9E%E6%B3%95%E7%B5%90%E6%A7%8B%E7%9A%84%E7%89%A9%E4%BB%B6
 */

var o = {a: 1};

var a = ['yo', 'whadup', '?'];

function f() {
    return 2;
}


// 1. 透過建構子
function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function(v) {
        this.vertices.push(v);
    }
}

var g = new Graph();
// g 是個有著「vertices」與「edges」屬性的物件。
// 在執行 new Graph() 時 g.[[Prototype]] 是 Graph.prototype 的值。


// 2. 用 Object.create
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype


// 3. 使用關鍵字 class
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}
  
var square = new Square(2);