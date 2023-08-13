/**
 * logical operators (邏輯運算子)
 *  - && and
 *  - || or
 * 
 * 
 */

{
  var a = 1;
  var b = 10;
  var c = 3;

  if (a && b > 100) {
    console.log('a和b都大於100');
  } else {
    console.log('a和b都小於100'); // a和b都小於100
  }

  if (a || b || c > 5) {
    console.log('a, b, c其中有一個以上大於5'); // a, b, c其中有一個以上大於5
  } else {
    console.log('a, b, c都小於5');
  }
}
