/*
References:
  - https://www.geeksforgeeks.org/javascript-importing-and-exporting-modules/
*/

// Area function.
let area = function(length, breadth) {
  let a = length * breadth;
  console.log('The area of the rectangle is ' + a + ' square unit.');
}


// Perimeter function.
let perimeter = function(length, breadth) {
  let p = 2 * (length + breadth);
  console.log('The perimeter of the rectangle is ' + p + 'unit');
}

module.exports = {
  area,
  perimeter,
}
