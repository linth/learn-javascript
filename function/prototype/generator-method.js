/**
 * Generator method
 * 
 * Reference:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

class Person {
    constructor(...sides) {
        this.sides = sides;
    }

    // Method
    *getSides() {
        for (const side of this.sides) {
            yield side;
        }
    }
}


const p = new Person(1, 2, 3, 4, 5);
console.log([...p.getSides()]); // [ 1, 2, 3, 4, 5 ]

