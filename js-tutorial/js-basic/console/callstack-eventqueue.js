/*
  Goal: learn the concept of call stack vs. event queue.

  keyword:
    - call stack.
    - event queue.

  notes:
    - 只要 Stack 上面還有事情要做，Event Queue 就繼續等，等到 Stack 結束 Event 才會做事。

  References:
    - https://hackmd.io/SNUkr1iGQhi8mpqe0JxHLw
*/

// ! please note the order of printing.
// * example 1: print the results.
console.log(1);
setTimeout(function() {
    // ! event queue.
    console.log(2);
}, 0);
console.log(3); // 1 3 2

// * example 2: add while-loop. 那個2永遠不會出現，因為Stack上面一直在做事。
while(1) {
    // ! call stack.
    // 發呆 無限迴圈 
}