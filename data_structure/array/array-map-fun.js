/**
 * map function
 *  - map() 回傳返回一個 array
 * 
 * Reference:
 *  - https://www.runoob.com/jsref/jsref-map.html
 */

var numbers = [4, 9, 16, 25];


function myFunction(numbers) {
    return numbers.map(Math.sqrt);
}

var res = myFunction(numbers);
console.log(res);