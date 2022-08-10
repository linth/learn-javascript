/**
 * reference your parameters.
 * 
 * Reference:
 *  - https://github.com/airbnb/javascript
 */


// Use const for all of your references; avoid using var. eslint: prefer-const, no-const-assign
// bad
var a = 1;
var b = 2;

// good 
const c = 3;
const d = 4;

// If you must reassign references, use let instead of var. eslint: no-var
// bad
var count = 1;
if (true) {
    count += 1;
}

// good, use the let.
let count = 1;
if (true) {
    count += 1;
}


// Note that both let and const are block-scoped, whereas var is function-scoped.
{
    let e = 1; 
    const f = 1;
    var g = 1;
}
console.log(e);
console.log(f);
console.log(g);

// In the above code, you can see that referencing `e` and `f` will produce a ReferenceError, while `g` contains the number. 
// This is because `e` and `f` are block scoped, while `g` is scoped to the containing function.
