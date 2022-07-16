/*
  Goal: learn to use callback function and also understand how to use function.

  keyword:
    - function
    - callback function

  change async:
    - setTimeout, setInterval
    - nextTick, setImmediate
    - execute I/O
    - subscribe event

  References:
    - https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/callback.html
*/


// writing example 1:
const el = document.getElementById('my_button');

el.addEventListener('click', function() {
    console.log('hello world.');
}, false);


// writing example 2: build functions.
function callback() {
    console.log('hello world.');
}

const el = document.getElementById('my_button');
el.addEventListener('click', callback, false);