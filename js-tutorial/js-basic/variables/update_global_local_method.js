/*
Goal: how to solve the update problem for updating global variable and local variable.

keyword:
  - function
  - javascript

Noet:
  - 請先確認 update_global_var_by_local.js 和 update_global_var_by_obj.js 程式。
  - 此外，還需額外看 console/single-thread.js 程式。

References:
  - https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/
*/

// ! Please see the error example at first.
// * example 1: 
var global_student = {
    name: 'george',
    age: 30,
    sex: 'boy',
};

function set_global_var() {
    global_student.name = 'may';
    global_student.sex = 'girl';
}

function set_global_var2() {
    // has setTimeout().
    console.log('go into set_global_var2()....');
    setTimeout(function() {
        console.log('execute setTimeout()....');
        global_student.name = 'may';
        global_student.sex = 'girl';
        console.log('the end of setTimeout()....');
        console.log('after1: ', global_student);
    }, 2000);

    console.log('after3: ', global_student);
}

// * example 1: general case.
// console.log('before: ', global_student);
// set_global_var();
// console.log('after: ', global_student);
// ? ============== result ==============
// ? before:  { name: 'george', age: 30, sex: 'boy' }
// ? after:  { name: 'may', age: 30, sex: 'girl' }
// ? ====================================


// * example 2: in async function.
// console.log('before: ', global_student);
// set_global_var2();
// console.log('after: ', global_student);
// ? ============== result ==============
// ? before:  { name: 'george', age: 30, sex: 'boy' }
// ? after:  { name: 'george', age: 30, sex: 'boy' }
// ? ====================================


// * example 3: solve the example 2.
console.log('before: ', global_student);
set_global_var2();
console.log('after2: ', global_student);
// ? ============== result ==============
// ? before:  { name: 'george', age: 30, sex: 'boy' }
// ? go into set_global_var2()....
// ? after3:  { name: 'george', age: 30, sex: 'boy' }
// ? after2:  { name: 'george', age: 30, sex: 'boy' }
// ? execute setTimeout()....
// ? the end of setTimeout()....
// ? after1:  { name: 'may', age: 30, sex: 'girl' }
// ? ====================================
