/**
 * continue
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/09/intro-1/
 */

{
  let product = 5;

  while (product > 0) {
    console.log('買一個');
    product--;

    if (product === 2) {
      console.log('第二個我要留著!!');
      continue;
    }

    console.log(`現在還剩 ${product} 個`);
  }

  console.log('全部賣完了');

  /**
   * 買一個
   * 現在還剩 4 個
   * 買一個
   * 現在還剩 3 個
   * 買一個
   * 第二個我要留著!!
   * 買一個
   * 現在還剩 1 個
   * 買一個
   * 現在還剩 0 個
   * 全部賣完了
   */
}