/**
 * equality operators (相等性運算子)
 *  - == (寬鬆相等)
 *  - === (嚴格相等)
 *  - != (寬鬆不相等)
 *  - !== (嚴格不相等)
 *   
 * 
 */

{
  var a = 1;
  var b = '1';

  if (a == b) { 
    console.log('true'); // true
  }

  if (a === b) {
    console.log('true');
  } else {
    console.log('false'); // false
  }

  if (a != b) {
    console.log('不相等');
  } else {
    console.log('相等'); // 相等
  }

  if (a !== b) {
    console.log('不相等'); // 不相等
  } else {
    console.log('相等');
  }
}