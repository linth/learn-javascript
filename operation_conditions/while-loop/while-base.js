/**
 * while-loop example. (while vs. do...while)
 *  - 兩者的差異在於 while 是先測(檢查)後跑, 而do...while 是先跑後測(檢查)
 * 
 * Reference:
 *  - https://www.w3schools.com/js/js_loop_while.asp
 *  - https://www.cythilya.tw/2018/10/09/intro-1/
 */

{
    i = 0;

    // 寫法 1:  
    while (i < 10) {
        console.log(i); // 0 1 2 3 4 5 6 7 8 9
        i++;
    }


    // 寫法 2:
    do {
        console.log('do function');
        i++;
    } while (i < 12);
}


{
    // 使用while範例
    let product = 5;

    while (product > 0) {
        console.log('買一個');
        product--;
        console.log('現在還剩下 ', product, ' 個');
    }

    console.log('全部賣完!');

    /**
     * 買一個
     * 現在還剩下  4  個
     * 買一個
     * 現在還剩下  3  個
     * 買一個
     * 現在還剩下  2  個
     * 買一個
     * 現在還剩下  1  個
     * 買一個
     * 現在還剩下  0  個
     * 全部賣完!
     */
}

{
    // 使用do...while
    let product = 0;

    do {
        console.log('買一個');
        product--;
        console.log('現在還剩下 ', product, ' 個');
    } while (product > 0);

    console.log('全部賣完!');

    /**
     * 買一個
     * 現在還剩下  -1  個
     * 全部賣完!
     */
}