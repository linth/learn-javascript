/**
 * 使用 prototype 和 static method 綁定 this.
 * 
 * TODO: 多增加範例!
 * 
 * Reference:
 *  - 
 */

class Animal {
    speak() {
        return this;
    }

    static eat() {
        return this;
    }
}


const obj = new Animal();
console.log(obj.speak()); // Animal {}

const speak = obj.speak;
console.log(speak()); // undefined

Animal.eat();
const eat = Animal.eat;
console.log(eat()); // undefined
console.log(Animal.eat); // [Function: eat]
