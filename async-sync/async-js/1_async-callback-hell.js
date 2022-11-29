/**
 * callback hell
 *  - 可以使用 promise 來解決 callback hell 問題!
 * 
 * Reference:
 *  - https://www.eruditeisland.com/article/9745330529/
 *  - https://www.gushiciku.cn/pl/ggZi/zh-tw
 */


// 傳統的 callback function.
function print_string(str, cb) {
    // print string per second.
    setTimeout( () => {
        console.log(str);
        cb();
    }, 1000)
}

// callback hell.
function printAll() {
    // ! callback hell!!!  how to fix this callback hell: it's not easy to maintain your code?
    print_string('a', () => {
        print_string('b', () => {
            print_string('c', () => {
                console.log('end');
            })
        })
    })
}


printAll()

/**
 * Results:
 * 
 * a
 * b
 * c
 * end
 */

