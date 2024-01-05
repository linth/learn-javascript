/**
 * callback hell
 *  - 可以使用 promise 來解決 callback hell 問題!
 * 
 * Reference:
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
/**
 * 由於你想要依序print, a, b, c, 最後才是end. 
 * 實作方式就可以用傳統的callback function, 但這樣的寫法會造成callback hell, 程式方面也相對不好開發.
 */
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

