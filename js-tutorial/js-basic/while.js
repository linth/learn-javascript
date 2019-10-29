/*
  References:
  - https://www.geeksforgeeks.org/loops-in-javascript/
*/

/* for loop: for loop provides a concise way of writing the loop structure.
    Unlike a while loop, a for statement consumes the initialization,
    condition and increment/decrement in one line thereby providing a shorter,
    easy to debug structure of looping. */
let x = 1;

while (x <= 4) {
  console.log('The value of x is ' + x);
  x++;
}

let y = 1;
// should be consider the infinite loop for while loop.
while (y == 1) {
  console.log('In this while loop.');
  break;
}
