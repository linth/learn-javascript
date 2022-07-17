/**
 * array
 *  - 基本 array 使用
 *  - 陣列可以儲存任何單位：字串、數字、物件、另一個變數、甚至是另一個陣列。
 *  - push(), pop()
 *  - unshift(), shift() 同上面 push(), pop() 功能
 * 
 * Reference:
 *  - 
 */

var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

var random = ['tree', 795, [0, 1, 2]];


console.log(shopping); // [ 'bread', 'milk', 'cheese', 'hummus', 'noodles' ]

console.log(random); // [ 'tree', 795, [ 0, 1, 2 ] ]
console.log(random[0]); // tree
console.log(random[1]); // 795
console.log(random[2]); // [ 0, 1, 2 ]
console.log(random[2][1]); // 1

// length of array.
console.log(`the length of random is ${random.length}`); // the length of random is 3


random.push('add_new_item');
console.log(random); // [ 'tree', 795, [ 0, 1, 2 ], 'add_new_item' ]
random.pop();
console.log(random); // [ 'tree', 795, [ 0, 1, 2 ] ]

