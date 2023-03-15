/**
 * calculate the sum of arr.
 * 
 */

{
  // 二維陣列
  const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  // 計算元素總和的變數
  let sum = 0;

  for (let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      sum += arr[i][j];
    }
  }

  console.log(`the sum of array is ${sum}`);
}
