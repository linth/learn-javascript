/**
 * Asynchronous JavaScript – How Browser APIs and Promises Work
 * 
 * 
 * Reference:
 *  - https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
 *  - https://pjchender.dev/javascript/js-event-loop-stack-queue/
 */


{
    function f1() {
        console.log('call f1 function');
    }
    
    function f2() {
        console.log('call f2 function');
    }
    
    function main() {
        console.log('call main function');
    
        // 非同步會先放到 task queue，等全部執行完後，才開始處理非同步動作。
        // 執行順序: main function -> 同步 -> 非同步放入task queue -> 非同步執行
        setTimeout(f1, 0);
        f2();
    }
    
    main();
    
    
    /**
     * Results:
     * 
     * call main function
     * call f2 function
     * call f1 function
     */
}
