/**
 * 當兩個物件無繼承關係
 *  - 類別並無法擴充一般(non-constructible不可建構的)物件。如果您想要繼承自一般的物件，可以使用Object.setPrototypeOf() (en-US)來達成。
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes#%E7%94%A8_extends_%E5%BB%BA%E7%AB%8B%E5%AD%90%E9%A1%9E%E5%88%A5
 */


var Animal = {
    speak() {
        console.log(this.name + ' make a noise.');
    }
}


class Dog {
    constructor(name) {
        this.name = name;
    }
}

// 使用 object 的 setPrototypeOf 
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Haha');
d.speak(); // Haha make a noise.

