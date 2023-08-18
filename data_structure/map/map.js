/*
  Goal: Now we’ve learned about the following complex data structures:
    - Objects for storing keyed collections.
    - Arrays for storing ordered collections.

  keyword:
    - map

  function:
    - new Map(): create the map.
    - map.set(key, value): stores the value by the key
    - map.get(key): return the value by the key, undefined if key doesn’t exist in map.
    - map.has(key): returns true if the key exists, false otherwise.
    - map.delete(key): removes the value by the key.
    - map.clear(): removes everything from the map.
    - map.size: returns the current element count.
    - map.entries(): returns an iterable of key/value pairs.

  References:
    - https://javascript.info/map-set
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

{
  let m = new Map();

  m.set('name', 'george');
  m.set('age', 30);
  m.set(1, 'hello world.');

  console.log(m); // { 'name' => 'george', 'age' => 30, 1 => 'hello world.' }
  console.log(m.size); // 3
  console.log(m.get('name')); // george
  console.log(m.get(1)); // hello world.


  // iteration over Map.
  // map.keys(), map.values(), map.entries()
  let student = new Map([
      ['george', 39],
      ['Peter', 55],
      ['May', 33],
      ['HaHa', 20],
  ])


  // iterate over keys.
  for (let s of student.keys()) {
      console.log('keys: ', s); // keys: george Peter May HaHa
  }

  // iterate over values.
  for (let s of student.values()) {
      console.log('values: ', s); // values: 39 55 33 20
  }

  // iterate over [key, value] entries.
  for (let s of student) {
      console.log('entries: ', s); // entries:  [ 'george', 39 ] ...
  }


  // Map from Object.
  let obj = {
      name: 'John',
      age: 30,
  }

  console.log(obj);

  let map = new Map(Object.entries(obj));
  console.log(map.get('name'));
  console.log('-->', Object.entries(obj)); // --> [ [ 'name', 'John' ], [ 'age', 30 ] ]


  console.log(student);
  let student2 = Object.fromEntries(student);
  console.log(student2, typeof(student2)); // { george: 39, Peter: 55, May: 33, HaHa: 20 } object
}