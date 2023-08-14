/**
 * unary operators (一元運算子)
 * 
 * 
 */

{
  const x = 1;
  y = 2;

  const product = {
    name: 'apple',
    count: 100,
  };

  delete x; // false
  console.log('x: ', x); // x: 1

  // delete y; // true
  // console.log('y: ', y);

  delete product.count; // true
  // console.log('product: ', product);
}
