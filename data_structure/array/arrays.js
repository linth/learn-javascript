/*
  Array 提供的功能
    - indexOf: 搜尋指定元素的位置。
    - slice: 擷取 array 部分元素。
    - push / pop: array 後面增加元素；刪除 array 最後一個元素。
    - unshift / shift: array 前面增加元素；刪除 array 第一個元素。
    - sort: 排序 array。
    - reverse: 反轉 array。
    - splice: 修改 array 的重要功能。
    - concat: 把兩個 array 連結起來，返回一個新的 array。
    - join: 把 array 的每個元素都用指定的 string 串連結起來，並返回 array。



  References:
    - https://javascript.info/array
    - https://www.liaoxuefeng.com/wiki/1022910821149312/1023020967732032
*/

let arr = new Array(); // bad 
let arr1 = []; // good

let fruits = ['apple', 'orange', 'plum'];

console.log(arr);
console.log(arr1);
console.log(fruits);


// mix of values.
let arr2 = ['apple', {name: 'george'}, true, function() { console.log('hello'); }];
console.log(arr2, arr2[1].name, arr2[3]);

// * the length of array.
console.log(fruits.length); // 3

// * out of array's range.
fruits[5] = 'watermelon';
console.log(fruits); // ['apple', 'orange', 'plum', …, 'watermelon']

// * indexOf
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('watermelon')); // 5

