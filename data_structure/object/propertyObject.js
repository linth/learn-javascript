/**
 * object bad and good writing.
 * 
 * Reference:
 *  - https://github.com/airbnb/javascript#objects--no-new
 */

// 3.1 Use the literal syntax for object creation. eslint: no-new-object
const item = new Object(); // bad
const item2 = {}; // good

console.log(item); // {}

// 3.2 Use computed property names when creating objects with dynamic property names.
function getKey(k) {
    return `a key name is ${k}`;
}

// bad
const obj = {
    id: 5, 
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;


// good 
const obj2 = {
    id: 5, 
    name: 'San Francisco',
    [getKey('enabled')]: true,
}

// 3.3 Use object method shorthand. eslint: object-shorthand
// bad
const atom = {
    value: 1,

    addValue: function (value) {
        return atom.value + value;
    }
}

// good
const atom2 = {
    value: 1,

    addValue(value) {
        return atom2.value + value;
    }
}

// 3.7 Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint: no-prototype-builtins
// bad 
let object = {};
// key: the string what you looking for.
console.log(object.hasOwnProperty('name'));  // false

console.log(Object.prototype.hasOwnProperty.call(object, 'age')); // false

// import has from 'has'; // https://www.npmjs.com/package/has
// console.log(has(object, 'year')); // false


// 3.8 Prefer the object spread syntax over Object.assign to shallow-copy objects. Use the object rest parameter syntax to get a new object with certain properties omitted. eslint: prefer-object-spread
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
console.log('copy', copy); // copy => {a: 1, b: 2, c: 3}
delete copy.a; // so does this

// bad
const original2 = { a: 1, b: 2 };
const copy2 = Object.assign({}, original2, { c: 3 }); 
console.log('copy2', copy2); // copy2 => { a: 1, b: 2, c: 3 }

// good
const original3 = { a: 1, b: 2 };
const copy3 = { ...original3, c: 3 }; 
const { a, ...noA } = copy; 
console.log('copy3', copy3); // copy3 => { a: 1, b: 2, c: 3 }
console.log('noA', noA); // noA => { b: 2, c: 3 }
