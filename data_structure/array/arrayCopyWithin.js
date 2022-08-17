/**
 * copyWthin for array.
 * 
 * Reference:
 *  - https://www.w3schools.com/jsref/jsref_copywithin.asp
 *  - https://www.runoob.com/jsref/jsref-copywithin.html
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);


const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "QQ", "KK", "CC"];
fruits2.copyWithin(2, 0, 2);
console.log(fruits2);