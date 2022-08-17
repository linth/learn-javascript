/**
 * enties for array.
 * 
 * Reference:
 *  - https://www.w3schools.com/jsref/jsref_entries.asp
 */


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f, typeof(f)); // Array Iterator, object

// 如果使用 object 來接 array, 需要使用 for-loop, of 來取值.
for (let i of f) {
    console.log(i);
}

/** results:
(2) [0, 'Banana']
(2) [1, 'Orange']
(2) [2, 'Apple']
(2) [3, 'Mango']
 */