/**
 * object property access (物件存取運算子)
 * 
 * 
 */

{
  var obj = 'hello';
  console.log(obj[0]); // h
  
  var obj2 = {
    name: 'george',
    id: 'f0001',
    age: 33,
    email: 'linth@mail.com'
  }

  console.log(obj2['id']); // f0001
  console.log(obj2['email']);  // linth@mail.com
}