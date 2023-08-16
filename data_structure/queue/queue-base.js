/**
 * queue
 *  - shift() 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度
 */

{
  let queue = [];

  queue.push(1);
  queue.push(2);
  queue.push(3);
  queue.push(4);

  let dequeueItem = queue.shift();
  console.log(dequeueItem); // 1

  console.log(queue); // [2, 3, 4]
}