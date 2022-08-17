/**
 * find() for array.
 *  - The find() method executes a function for each array element.
 *  - The find() method returns undefined if no elements are found.
 * 
 * findIdex() for array.
 *  - 
 * 
 * Reference:
 *  - https://www.w3schools.com/jsref/jsref_find.asp
 */


const ages = [3, 10, 18, 20, 88];

function checkAge(age) {
    return age > 18;
}

// find function.
console.log(ages.find(checkAge)); // 20

// findIndex function.
console.log(ages.findIndex(checkAge)); // 3

