/**
 * callback button 的兩種寫法
 * 
 * 
 * Reference:
 *  - https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/callback.html
 */

const element = document.getElementById('myButton');

// 寫法 1.
element.addEventListener('click', function() {
    console.log('hello');
}, false);



// 寫法 2.
function callback() {
    console.log('hello');
}

const el = document.getElementById('myButton')
el.addEventListener('click', callback, false);