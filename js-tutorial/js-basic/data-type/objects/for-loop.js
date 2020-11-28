/*
  Goal: learn more about array.

  keyword:
    - array

  References:
    - https://javascript.info/object
*/

let user = {
    'name': 'george',
    'age': 30,
    'isAdmin': true
}

let code = {
    '49': 'Germany',
    '41': 'Switzerland',
    '44': 'Great Britain',

    '1': 'USA',
}

// 'in' operator.
console.log('age' in user); // true.

// for...in loop.
for (key in user) {
    console.log('Key = ', key, '; Value = ', user[key]);
}

for (let c in code) {
    console.log(c); // 1, 41, 44, 49.
}