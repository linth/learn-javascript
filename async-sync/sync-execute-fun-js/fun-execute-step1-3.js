/**
 * synchronous JS - how the function execution stack works
 * 
 * 
 * exectued steps:
 *  1. call f1(), put f1() into the stack and execute f1() to done it.
 *  2. call f2(), put f2() into the stack and execute f2() to done it.
 *  3. call f3(), put f3() into the stack and execute f3() to done it.
 * 
 * 
 * Reference:
 *  - https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
 */

function f1() {
    console.log('call f1 function');
}

function f2() {
    console.log('call f2 function');
}

function f3() {
    console.log('call f3 function');
}

// invoke the functions one by one.
f1();
f2();
f3();

/**
 * Results:
 * 
 * call f1 function
 * call f2 function
 * call f3 function
 */