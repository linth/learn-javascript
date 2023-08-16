/**
 * Object
 * 
 * Reference:
 *  - https://www.liaoxuefeng.com/wiki/1022910821149312/1023020997017056
 */

{
    var student = {
        name: 'george',
        birth: 1999,
        school: 'xxx-xxx school',
        height: 180,
        weight: 66,
        score: null,
    }
    
    
    console.log(student.height); // 180
    console.log(student.name); // george
    console.log(student['school']); // xxx-xxx school
    
    console.log(student.age); // undefined
}


{
    let person = {
        name: 'john',
        age: 33,
        city: 'new york',
    };

    console.log(person.city); // new york
}
