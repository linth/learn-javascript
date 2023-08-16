/**
 * Prototype 原型
 *  - 原型可說是物件的一種 fallback 機制
 *  - 當在此物件找不到指定屬性時，就會透過原型鏈結（prototype link / prototype reference）追溯到其父物件上。
 *  - 原型最常應用於「行為委派」（behavior delegation）
 * 
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */

{
  var foo = {
    a: 100
  };

  var bar = Object.create(foo); // create bar object, link to foo.

  bar.b = 'hi, everyone.';
  console.log(bar.a); // 100 (委派給 foo.)
  console.log(bar.b); // hi, everyone.
}


