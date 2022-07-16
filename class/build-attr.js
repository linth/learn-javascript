/**
 * 宣告欄位
 * 
 * Reference:
 *  - 
 */

class Rectangle {

    height = 0;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

r1 = new Rectangle(5, 10);
r2 = new Rectangle(6, 12);
r3 = new Rectangle();

console.log(r1.height); // 5
console.log(r2.height); // 6

console.log(r1.width); // 10
console.log(r2.width); // 12

console.log(r3); // Rectangle { height: undefined, width: undefined }
console.log('height', r3.height); // height undefined
console.log('width', r3.width); // width undefined