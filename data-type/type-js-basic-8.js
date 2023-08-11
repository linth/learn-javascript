/**
 * JS Built-in types
 *  - number
 *  - string
 *  - boolean
 *  - null
 *  - undefined
 *  - object
 *  - symbol 
 * 
 * 內建型別又分兩大類
 *  - 基本型別 (primitives): number, string, boolean, null, undefined, symbol
 *  - 物件型別 (object): object, subtype (物件, 陣列, 函式, 日期, ..., etc)
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/11/types/
 */
{
  
  typeof 'hello world'; 
  console.log(typeof('hello')); // string.
  console.log(typeof(1234)); // number


  // 判斷 null
  const happy = null;

  if (!happy && typeof(happy) === 'object') {
    console.log('I\'m null.');
  }

  console.log(typeof(happy)); // object
  console.log(!happy); // true

  
}
