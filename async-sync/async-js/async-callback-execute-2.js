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
    
        setTimeout(f1, 0); // 非同步會先放到 task queue，等全部執行完後，才開始處理非同步動作。
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
