/**
 * relational operator (關係運算子)
 * 
 * 
 */

{
  const product = {
    name: 'apple',
    count: 100,
  };
  
  console.log('name' in product); // true
  console.log('valid' in product); // false
}