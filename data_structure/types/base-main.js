/**
 * types: primitives
 *  - string
 *  - number
 *  - boolean
 *  - null
 *  - undefined
 *  - symbol
 *  - bigint
 * 
 * Reference:
 *  - https://github.com/airbnb/javascript
 */

const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // 1 9

// Symbols and BigInts cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.