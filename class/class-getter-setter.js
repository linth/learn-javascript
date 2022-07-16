/**
 * Getter & Setter for class.
 *  - 有 getter 方式: get function_name() { ... }
 *  - 有 method 方式: function_name() { ... }
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes
 */


class Polygon {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
}


const square = new Polygon(10, 10);
console.log(square.area);

