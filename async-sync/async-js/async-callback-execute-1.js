/**
 * Asynchronous JavaScript – How Browser APIs and Promises Work
 *  - callback
 * 
 * executed step:
 *  1. put printMe() into the stack
 *  2. call test() and execute test().
 *  3. execte the event loop
 *  4. call setTimeout() and wait 2 seconds to execute printMe().
 * 
 * 
 * Reference:
 *  - https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
 *  - https://pjchender.dev/javascript/js-event-loop-stack-queue/
 */


{
    function printMe() {
        console.log('call printMe function');
    }
    
    function test() {
        console.log('call test function');
    }
    
    setTimeout(printMe, 2000); // callback function
    test();
    
    /**
     * Results:
     * 
     * call test function
     * call printMe function
     */
}
