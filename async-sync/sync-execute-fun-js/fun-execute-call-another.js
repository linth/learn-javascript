/**
 * ynchronous JS - how the function execution stack works
 * 
 * 
 * exectued steps:
 *  1. call f3(), put f3() into the stack.
 *  2. execute f3(), call f2(), put f2() into the stack.
 *  3. execute f2(), call f1(), put f1() into the stack.
 *  4. execute f1().
 *  5. release f1() in the stack.
 *  6. release f2() in the stack.
 *  7. release f3() in the stack.
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
    f1();
}

function f3() {
    console.log('call f3 function');
    f2();
}

f3();

/**
 * Results:
 * 
 * call f3 function
 * call f2 function
 * call f1 function
 */



 function f4() {
    console.log('call f4 function');
}

function f5() {
    f4();
    console.log('call f5 function');
}

function f6() {
    f5();
    console.log('call f6 function');
}

f6();

/**
 * Results:
 * 
 * call f4 function
 * call f5 function
 * call f6 function
 */