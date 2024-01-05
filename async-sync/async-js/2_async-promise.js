/**
 * async with promise. (ES6出現, 它代表最終完成或失敗的物件)
 *  - 讓程式碼更具可讀性、可維護性。在此之前如果有多個非同步操作，容易造成多層巢狀結構的狀況，而Promise的優勢就是避免了這個問題，使得程式碼看起來更好理解。
 * 
 * Reference:
 *  - https://ithelp.ithome.com.tw/articles/10337567
 */

function print_string(str, cb) {
    // print string per second.
    return new Promise((resolve, reject) => {
        // 當非同步動作成功時，呼叫 resolve()，而失敗時則呼叫 reject()
        setTimeout(() => {
            console.log(str);
            resolve();
        }, 1000)
    })
}


// function printAll() {
//     print_string('a')
//     .then(() => {
//         return print_string('b')
//     })
//     .then(() => {
//         return print_string('c')
//     })
//     .then(() => {
//         return print_string('end')
//     })
// }


// 進一步簡化寫法
function printAll() {
    print_string('a')
    .then(() => print_string('b'))
    .then(() => print_string('c'))
    .then(() => print_string('end'))
}

printAll();

/**
 * Results:
 * 
 * a
 * b
 * c
 * end
 */