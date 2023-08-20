/**
 * toBoolean
 * 
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/15/coercion/
 */
{
  console.log(Boolean(undefined)); // false
  console.log(Boolean(-0)); // false
  console.log(Boolean(0)); // false
  console.log(Boolean(null)); // false
  console.log(Boolean(false)); // false
  console.log(Boolean(NaN)); // false
  console.log(Boolean(1)); // true
  console.log(Boolean(3)); // true
  console.log(Boolean('')); // false
  console.log(Boolean('hello world')); // true
}