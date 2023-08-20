/**
 * ToNumber
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/15/coercion/
 */

{

  console.log(Number(undefined)); // NaN
  console.log(Number(null));  // 0
  console.log(Number(true));  // 1
  console.log(Number(false)); // 0
  console.log(Number('1234567')); // 1234567
  console.log(Number('hello world')); // NaN
  console.log(Number({ name: 'george', })); // NaN

  const student = {
    name: 'john',
    valueOf: function() {
      return '33'
    }
  }
  console.log(Number(student));
}