/**
 * 
 * 
 * Reference:
 *  - 
 */
function print_string(str, cb) {
    // print string per second.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(str);
            resolve()
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