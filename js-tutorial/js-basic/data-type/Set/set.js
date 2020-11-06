/*
Goal: Now we’ve learned about the following complex data structures:
    - Objects for storing keyed collections.
    - Arrays for storing ordered collections.

keywords:
    - set


function:
    - new Set(): create the set.
    - set.add(value): adds a value, returns the set itself.
    - set.delete(value): removes the value, returns true if value existed at the moment of the call, otherwise false.
    - set.has(value): returns true if the value exists in the set, otherwise false.
    - set.clear(): removes everything from the set.
    - set.size: is the elements count.

Reference:
    - https://javascript.info/map-set
    - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

// const set1 = new Set([1, 2, 3, 3])

// console.log('set1', set1);

// split('-'), new Date(Date.UTC())
// type transfer, i.e., int to string, string to int, and so on. (parseInt())

// console.log('s', s, s.size);  set for size, array for length.
// date and time 分開使用
// https://stackoverflow.com/questions/17678551/splitting-date-into-2-columns-date-time-in-sql
// https://stackoverflow.com/questions/27841394/concatenate-date-and-time-fields-and-turn-into-datetime-postgresql

let s = new Set();
let john = {name: 'john'};
let peter = {name: 'peter'};
let mary = {name: 'mary'};

s.add(john);
s.add(peter);
s.add(mary);

console.log('the size of s = ', s.size);
console.log('s = ', s);

// iteration over Set.
// We can loop over a set either with for..of or using forEach
for (let i of s) {
    console.log(i);
}


// TODO: need to check and undstand. 
s.forEach((value, valueAgai, set) => {
    console.log(value);
})

