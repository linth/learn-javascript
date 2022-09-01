/**
 * 宣告私有欄位
 *  - 從類別外部使用私有欄位會出現錯誤；私有欄位只能在類別內讀寫。
 *  - 使用 # + 變數名稱
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes
 */

class Rectangle {

    #height = 0; // private field.
    #width;

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}


r1 = new Rectangle();
r2 = new Rectangle(5, 10);

console.log(r1); // Rectangle {}
console.log(r2); // Rectangle {}

console.log(r1.height); // undefined
console.log(r1.width); // undefined
