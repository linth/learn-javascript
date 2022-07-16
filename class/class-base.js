/**
 * class-base 範例
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes
 */

// 寫法 1: named
class Person {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}


// 寫法 2: unnamed
var Person = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}