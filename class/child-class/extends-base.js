/**
 * extends 使用繼承子類別
 * 
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes#%E7%94%A8_extends_%E5%BB%BA%E7%AB%8B%E5%AD%90%E9%A1%9E%E5%88%A5
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' make a noise.');
    }
    
}


class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}


var dog = new Dog('HaHa');
dog.speak();
