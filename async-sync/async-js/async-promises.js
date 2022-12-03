/**
 * Promises
 * 
 * Reference:
 *  - https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
 */

{
    function f1() {
        console.log('f1');
    }
    
    function f2() {
        console.log('f2');
    }
    
    function main() {
        console.log('main');
        
        setTimeout(f1, 0);
        
        new Promise((resolve, reject) =>
            resolve('I am a promise')
        ).then(resolve => console.log(resolve))
        
        f2();
    }
    
    main();
    
    /**
     * Results:
     * 
     * main
     * f2
     * I am a promise
     * f1
     */
}

