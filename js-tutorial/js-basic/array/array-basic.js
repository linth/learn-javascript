/*
  Goal: learn more about array.

  keyword:
    - array
    - slice

  References:
    - https://github.com/30-seconds/30-seconds-of-code
    - https://www.youtube.com/watch?v=h33Srr5J9nY
    - https://medium.com/i-am-mike/10%E5%80%8B%E6%96%B0%E6%89%8B%E5%BF%85%E7%9F%A5%E7%9A%84-javascrip-%E5%AF%A6%E7%94%A8%E6%8A%80%E5%B7%A7-75b55d7c3e47
*/
const all = (arr, fn = Boolean) => arr.every(fn);

const allEqual = arr => arr.every(val => val === arr[0]);

console.log(all([4, 2, 3], x => x > 1));
console.log(all([1, 2, 3]));

console.log(allEqual([1, 2, 3, 4, 5, 6])); // false
console.log(allEqual([1, 1, 1, 1])); // true


const example1 = () => {
  // Don't modify the origin array. When the array is as argument, we should copy them first.
  var arr = [1, 2, 3];
  var new_array;

  const useArrayDirect = () => {
    // console.log(arr);
    arr.push(9);
    // console.log(arr);
  }

  const useCopyArray = (array) => {
    new_array = array.slice(0);
    new_array.push(9);
  }


  useCopyArray(arr);
  console.log(arr);
  console.log(new_array);
}

example1();
