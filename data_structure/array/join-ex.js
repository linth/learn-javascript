/**
 * join 字串 範例
 *  - push(), pop()
 *  - unshift(), shift() 同上面 push(), pop() 功能
 * 
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#%E5%9C%A8%E5%AD%97%E4%B8%B2%E8%88%87%E9%99%A3%E5%88%97%E4%B9%8B%E9%96%93%E8%BD%89%E6%8F%9B
 */

{
  var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']

  var myNewString = myArray.join(' ');

  console.log(myNewString); // Manchester London Liverpool Birmingham Leeds Carlisle


  myArray.unshift('Edinburgh');
  console.log(myArray);
  /**
   * [
   *  'Edinburgh', 
   *  'Manchester', 
   *  'London', 
   *  'Liverpool', 
   *  'Birmingham',
   *  'Leeds',
   *  'Carlisle'
   * ]
   */

  var removedItem = myArray.shift();
  console.log(removedItem); // Manchester
}

 