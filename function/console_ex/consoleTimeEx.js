/**
 * `console.time` example.
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10217125
 */

console.time('time');

function sum1To10000() {
    let sum = 0;

    for (let i=0; i<10000; i++) {
        sum += i;
    }

    return sum;
}



sum1To10000();
console.timeEnd('time');

/**Result
 * 
 * time: 0.652099609375 ms
 * time: 1.152ms
 * 
 */