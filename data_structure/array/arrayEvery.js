/**
 * every() for array.
 *  - The every() method returns true if the function returns true for all elements.
 *  - The every() method returns false if the function returns false for one element.
 * 
 * Reference:
 *  - https://www.w3schools.com/jsref/jsref_every.asp
 */

const ages = [11, 25, 39, 55, 39];

const res0 = ages.every(checkAge);
console.log(`res0 = ${res0}`); // res0 = false


// const res = ages.filter(checkAge);
// console.log(`res = ${res}`);

// const res2 = ages.map( x => Math.pow(x, 2));
// console.log(`res2 = ${res2}`);

// const res3 = ages.filter( x => x > 18 );
// console.log(`res3 = ${res3}`);

function checkAge(age) {
    return age > 18;
}