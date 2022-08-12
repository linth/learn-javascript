/**
 * objects 使用
 * 
 * Reference:
 *  - https://eslint.org/docs/latest/rules/no-new-object
 *  - https://eslint.org/docs/rules/no-new-object
 *  - https://eslint.org/docs/rules/object-shorthand
 *  - https://eslint.org/docs/rules/quote-props
 *  - https://eslint.org/docs/rules/no-prototype-builtins
 *  - https://eslint.org/docs/rules/prefer-object-spread
 */

// * Use the literal syntax for object creation. eslint: no-new-object
// bad 
const item = new Object();

// good
const items = {};



function getKey(k) {
    return `a key named: ${k}`;
}

// * Use computed property names when creating objects with dynamic property names.
// bad 
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const objs = {
    id: 5, 
    name: 'San Francisco',
    [getKey('enabled')]: true,
}


// * Use object method shorthand. eslint: object-shorthand
// bad
const atom = {
    value: 1,

    addValue: function(value) {
        return atom.value + value;
    }
};

// good
const atoms = {
    value: 1, 

    addValue(value) {
        return atom.value + value;
    }
};


// Use property value shorthand. eslint: object-shorthand
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj2 = {
    lukeSkywalker: lukeSkywalker,
};

// good
const obj2s = {
    lukeSkywalker,
};


// Group your shorthand properties at the beginning of your object declaration.
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker2 = 'Luke Skywalker2';

// bad
const obj3 = {
    episodeOne: 1, 
    twoJediWalkIntoACantina: 2, 
    lukeSkywalker2,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
}

// good
const obj3s = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
}


// Only quote properties that are invalid identifiers. eslint: quote-props
// bad
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};


// 3.7 Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint: no-prototype-builtins
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best 
const has = Object.prototype.hasOwnProperty;
console.log(has.call(object, key));

/** or */
import { has } from "has";
console.log(has(object, key));


// 3.8 Prefer the object spread syntax over Object.assign to shallow-copy objects. 
// Use the object rest parameter syntax to get a new object with certain properties omitted. eslint: prefer-object-spread
// very bad
const original = {a: 1, b: 2};
const copy = Object.assign(original, {c: 3});
console.log(copy);

// bad
const original2 = {a: 1, b: 2};
const copy2 = Object.assign({}, original2, {c: 3});

// good
const original3 = {a: 1, b: 2};
const copy3 = {...original3, c: 3};

const { a, ...noA } = copy // noA => {b: 2, c: 3}
