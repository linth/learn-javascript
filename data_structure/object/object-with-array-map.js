/**
 * using an object to package an array and a map.
 * 
 * 
 */

{
  const data = {
    list: ['apple', 'banana', 'orange'],
    keyValuePairs: new Map([
      ['name', 'John'],
      ['age', 30],
      ['city', 'New York']
    ])
  };

  console.log(data.keyValuePairs.get('name')); // John
  console.log(data.keyValuePairs.has('age')); // true
  console.log(data.list); // [ 'apple', 'banana', 'orange' ]
}