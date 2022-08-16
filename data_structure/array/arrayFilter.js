/**
 * filter()
 *  - argument is a function.
 * 
 * ! find more examples to understand the concept.
 * 
 * Reference:
 *  - https://www.w3schools.com/jsref/jsref_filter.asp
 */

const ages = [32, 33, 16, 40];
const res = ages.filter(checkAdult);
console.log(`res = ${res}, the type of res = ${typeof(res)}`); // res = 32,33,40, the type of res = object


function checkAdult(age) {
    return age >= 18;
}