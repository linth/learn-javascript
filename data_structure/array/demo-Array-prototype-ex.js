/**
 * Array.prototype
 *  - map
 *  - reduce: 必須理解 accumulator（累加器）與 initialValue（初始值）
 *  - ...
 * 
 */

{
  const arr = [1, 2, 3];
  const result = arr.map(x => x * 2); // 不會修改 arr

  console.log(arr); // [ 1, 2, 3 ]
  console.log(result); // [ 2, 4, 6 ]

  Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
  }

  // 寫法1
  Array.prototype.myDefinedSum = function () {
    return this.reduce((a, b) => {
      if (b%2 === 0) {
        return a+b
      }
      return a; // 把目前的總和 a 傳給下一輪 (重要！)
    }, 0);
  }

  // 寫法2:
  // Array.prototype.myDefinedSum = function () {
  //   return this.reduce((a, b) => b%2 === 0 ? a + b : a + 0, 0);
  // }

  console.log(arr.sum()); // 6
  console.log(arr.myDefinedSum()); // 2
}

