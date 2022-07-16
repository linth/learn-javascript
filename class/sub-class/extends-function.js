/**
 * 擴充傳統函式基礎類別
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes#%E7%94%A8_extends_%E5%BB%BA%E7%AB%8B%E5%AD%90%E9%A1%9E%E5%88%A5
 */


function Animal(name) {
    this.name = name;
}


// TODO: 增加 prototype 等觀念
Animal.prototype.speak = function () {
    console.log(this.name + ' make a noise.');
}


class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}


var dog = new Dog('GG');
dog.speak();
