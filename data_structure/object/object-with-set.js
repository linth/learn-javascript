/**
 * using an object to package a set.
 * 
 * 
 */

{
  const data = {
    uniqueValue: new Set([1, 2, 3, 4, 5])
  };

  console.log(data.uniqueValue.has(3)); // true
  console.log(data.uniqueValue.size); // 5
}


