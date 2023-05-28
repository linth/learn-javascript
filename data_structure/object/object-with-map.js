/**
 * using an object to package a map.
 * 
 */

{
  const data = {
    keyValuePair: new Map([
      ['name', 'John'], 
      ['age', 30],
      ['city', 'New York']
    ])
  };

  console.log(data.keyValuePair.get('age')); // 30
  console.log(data.keyValuePair.has('city')); // true 
}