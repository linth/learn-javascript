/**
 * Set base concept.
 * 
 */

{
  var s = new Map();

  s.set('name', 'george');
  s.set('age', 38);

  console.log(s); // Map(2) { 'name' => 'george', 'age' => 38 }
  console.log(s.get('name')); // george
}
