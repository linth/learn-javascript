class IeRunTimeError extends Error {
  /*
    https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes/constructor
  */
  constructor(message, cause, code='00000') {
    super(message);
    this.cause = cause;
    this.name = 'IeRunTimeError';
    this.code = code;
  }
}

function getJson() {
  return {
    name: 'George',
    email: 'george_lin@goglobal.com.tw',
    type: 'engineer',
  }
}

function throwError() {

}

function yieldResponse(result, error) {
  return {
    result: result,
    error: error,
  }
}



/* ... */
function promiseFactory(factory, delayInSecond=0) {
  if (typeof factory !== 'function') {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
    throw new TypeError('[Error] promiseFactory is not a function.');
  }

  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(factory());
    }, delayInSecond * 1000);
  })
}

function promiseRejectFactory() {

}

function promiseAllMap() {

}


promiseFactory(() => console.log(getJson()), 4)
