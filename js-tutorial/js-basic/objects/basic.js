/*
  Goal: learn more about array.

  keyword:
    - array

  References:
    - https://javascript.info/object
*/

let user = new Object();
let user1 = {};

console.log(user, typeof(user));
console.log(user1, typeof(user1));

// literals and properties.
let student = {
    name: 'george',
    age: 35,
    isAdmin: true,
    'like bird': true, // multiword property name must be quoted.
};

console.log(student.name, student.age, student.isAdmin);

// delete element.
delete student.age
console.log(student.name, student.age, student.isAdmin, student['like bird']); // square brackets.


// object with const can be changed. 
const teacher = {
    name: 'george',
    age: 33,    
}

teacher.name = 'may';
console.log(teacher.name);

// let key = prompt('what do you want to know about the student?', 'name');
// console.log(user);

function makeUser(name, age) {
    return {
        'name': name,
        'age': age,
    }
}

let user2 = makeUser('peter', 44);
let user3 = makeUser('King', 70);
console.log(user2);
console.log(user3);
console.log(user3.__proto__, typeof(user3.__proto__)); // {} object
user3.__proto__ = 5;
//TODO: check __proto__
console.log(user3.__proto__); // {}  

