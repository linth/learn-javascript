/**
 * async with promise.
 * 
 * Reference:
 *  - 
 */
function print_string(str, cb) {
    // print string per second.
    return new Promise((resolve, reject) => {
        // 當非同步動作成功時，呼叫 resolve()，而失敗時則呼叫 reject()
        setTimeout(() => {
            console.log(str); sss
            resolve();
        }, 1000)
    })
}

function printAll() {
    print_string('a')
    .then(() => {
        return print_string('b')
    })
    .then(() => {
        return print_string('c')
    })
}


// 進一步簡化
function printAll() {
    print_string('a')
    .then(() => print_string('b'))
    .then(() => print_string('c'))
}

printAll();

/**
 * Results:
 * 
 * a
 * b
 * c
 */