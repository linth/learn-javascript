/**
 * split 字串 範例
 *  
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#%E5%9C%A8%E5%AD%97%E4%B8%B2%E8%88%87%E9%99%A3%E5%88%97%E4%B9%8B%E9%96%93%E8%BD%89%E6%8F%9B
 */

{
  var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

  var a = myData.split(',');

  console.log(a); // ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']
  console.log(a[0]); // Manchester
}

 
