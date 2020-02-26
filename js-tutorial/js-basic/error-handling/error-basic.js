/*
  Goal: learn how to handle the error.

  Error type:
    - Error object
    - RangeError
    - ReferenceError 找不到變數：拼錯字
    - SyntaxError 語法錯誤
    - TypeError 找不到函式
    - URIError 不合法的 URI
    - EvalError

  References:
    - https://www.sitepoint.com/exceptional-exception-handling-in-javascript/
    - https://pjchender.blogspot.com/2017/12/js-error-handling.html
*/

const ex1 = () => {
  var error = new Error("error message");
  console.log(error);
}

const ex2 = () => {
  // RangeError.
  var pi = 3.14159;
  pi.toFixed(10000);
}

const ex3 = () => {
  // ReferenceError.
  bar++;
}

const ex4 = () => {
  // TypeError.
  var foo = {};
  foo.bar();
}

const ex5 = () => {
  try {
    foo++;
  } catch (exception) {
    console.log(exception);
  } finally {
    // the block is usually used for clean the file or something.
    console.log('Finish the job.....');
  }
}

const ex6 = () => {
  let coco = 500;

  try {
    if (coco > 400) {
      throw 'coco > 400';
    } else if (coco == 400) {
      console.log('coco = 400');
    } else {
      console.log('coco < 400');
    }
  } catch (e) {
    // if coco is larger than 400
    console.log('ex6 function: ' + e.name + ', ' + e.message);
  }
}

ex6()
