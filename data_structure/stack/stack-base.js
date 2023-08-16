/**
 * stack
 *  - pop() 會移除最後一個
 * 
 */
{
  let stack = [];

  stack.push(1);
  stack.push(2);
  stack.push(3);

  let poppedItem = stack.pop(); 
  console.log(poppedItem); // 3
}