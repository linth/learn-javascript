/**
 * keys()
 *  - 
 * 
 * Reference:
 *  - https://www.w3schools.com/jsref/jsref_keys.asp
 */


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const key = fruits.keys();
console.log('key', key); // key Array Iterator

for (let x of key) {
    console.log(x); // 0 1 2 3 
}