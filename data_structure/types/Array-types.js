/**
 * javascript code style for Array.
 * 
 * Reference:
 *  - https://github.com/airbnb/javascript#arrays
 */

// 4.1 Use the literal syntax for array creation. eslint: no-array-constructor
// bad 
const item = new Array();

// good
const items = [];


// 4.2 Use Array#push instead of direct assignment to add items to an array.
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');


// 4.3 Use array spreads ... to copy arrays
// bad
const len = items.length;
const itemsCopy = [1, 2, 4];

for (let i=0; i<itemsCopy.length; i++) {
    items[i] = itemsCopy[i];
}

// good
const itemsCopys = [...items]; // [1, 2, 4]
console.log(itemsCopy);

// 4.4 To convert an iterable object to an array, use spreads ... instead of Array.from
const foo = document.querySelectorAll('.foo');

// good
const node = Array.from(foo);

// best 
const nodes = [...foo];