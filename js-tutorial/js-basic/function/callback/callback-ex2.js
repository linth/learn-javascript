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

function useless(callback) {
  console.log('useless function....');

  console.log('starting callback() function....');
  callback();
  console.log('ending callback() function......');

  // return callback();
}


function show_data() {
  console.log('show_data function....');
  console.log('[Function] show_data');
}


function a_func(value, callback) {
  callback(value)
}

function b_func(value, callback) {
  setTimeout(callback, 0, value)
}

function cb1(value) { console.log('cb1: ', value) }
function cb2(value) { console.log('cb2: ', value) }
function cb3(value) { console.log('cb3: ', value) }
function cb4(value) { console.log('cb4: ', value) }

// useless(show_data)
a_func(1, cb1)
b_func(2, cb2)
a_func(3, cb3)
b_func(4, cb4)
