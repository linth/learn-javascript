/**
 * Set 
 *  - 成員唯一，類似 array。
 * 
 * Reference:
 *  - 
 */

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach( (x) => {
    console.log(x);

    s.add(x);
})

console.log(s); // Set(4) { 2, 3, 5, 4 }

for (let i of s) {
    console.log(i);
    console.log(typeof(i));
}

const s2 = new Set([1, 2, 3, 4, 4]);
console.log(...s2); // 1 2 3 4
console.log(s2, typeof(s2)); // Set(4) { 1, 2, 3, 4 } object
