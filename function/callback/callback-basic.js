/*
Callback:

  Goal: learn how to handle the function of callback.

  Content:
    - callback function
    - callback hell

  References:
    - https://www.sitepoint.com/exceptional-exception-handling-in-javascript/
    - https://pjchender.blogspot.com/2017/12/js-error-handling.html
    - https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544
*/
function sayHi(callback) {
  console.log('start calling sayHi()...');
  callback();
  console.log('end calling sayHi()...');
}

function callback() {
  console.log('call callback 函式...');
}

sayHi(callback);

