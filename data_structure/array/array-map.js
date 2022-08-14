/**
 * Array's map()
 *  - map() 回傳返回一個 array
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10204679
 *  - https://www.runoob.com/jsref/jsref-map.html
 */

var numbers = [4, 9, 16, 25];


function myFunction(numbers) {
    return numbers.map(Math.sqrt);
}

// argument is an array.
function multiplyArray(numbers) {
    return numbers.map(x => Math.pow(x, 2));
}

// argument is spread-syntax (...)
function multiplyArray2(...numbers) {
    console.log('all elements', ...numbers); // all elements (4) [4, 9, 16, 25]
    console.log('the type of nmbers', typeof(numbers)); // object

    return numbers.map(x => {
        console.log('x', x);
        // Math.pow(x, 2);
    });
}

var res = myFunction(numbers);
console.log(res);


var res2 = multiplyArray(numbers);
console.log(res2);


var res3 = multiplyArray2(numbers);
console.log(res3); // undefined.