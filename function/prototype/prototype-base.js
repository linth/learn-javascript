/**
 * prototype-base method
 * 
 * TODO: 增加多點解釋跟範例。
 * 
 * Reference:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
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

