/**
 * Complex: When you access a complex type you work on a reference to its value. 
 *  - object
 *  - array
 *  - function
 * 
 * Reference:
 *  - https://github.com/airbnb/javascript#table-of-contents
 */

const foo = [1, 2];
const bar = foo;

bar[0] = 9;
console.log(foo[0], bar[0]); // 9, 9

