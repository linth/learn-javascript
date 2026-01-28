/**
 * Goal: learn more about object.
 * 
 * References:
 *  - https://javascript.info/object
 */
{
  let user = new Object();
  let user1 = {};

  console.log(user, typeof (user));
  console.log(user1, typeof (user1));

  // literals and properties.
  let student = {
    name: 'george',
    age: 35,
    isAdmin: true,
    'like bird': true, // multiword property name must be quoted.
  };

  console.log(student.name, student.age, student.isAdmin);

  // 刪除屬性 delete element.
  delete student.age
  console.log(student.name, student.age, student.isAdmin, student['like bird']); // square brackets.


  // 物件可以被修改，但不能被重新指定。 object with const can be changed. 
  const teacher = {
    name: 'george',
    age: 33,
  }

  teacher.name = 'may';
  console.log('老師姓名:', teacher.name);
}

{
  function makeUser(name, age) {
    return {
      'name': name,
      'age': age,
    }
  }

  let user2 = makeUser('peter', 44);
  let user3 = makeUser('King', 70);

  console.log('user2:', user2); // user2: { name: 'peter', age: 44 }
  console.log('user3:', user3); // user3: { name: 'King', age: 70 }
  console.log(user3.__proto__, typeof (user3.__proto__)); // {} object
  user3.__proto__ = 5;
  //TODO: check __proto__
  console.log(user3.__proto__); // {}  

  // 'in' operator.
  console.log('age' in user2); // true. 
}


{
  // -----------------------------------------------------------------
  // 1. Property value shorthand (屬性簡寫)
  // 當變數名稱與屬性名稱相同時，可以省略。
  function makeEmployee(name, position) {
    return {
      name,      // 等同於 name: name
      position,  // 等同於 position: position
      id: 101
    };
  }
  console.log(makeEmployee('Alice', 'Developer'));


  // 2. Computed properties (計算屬性)
  // 在物件字面值中使用中括號，可以動態決定屬性名稱。
  let fruit = 'apple';
  let bag = {
    [fruit + 'Count']: 5, // 屬性名稱會變成 "appleCount"
  };
  console.log(bag.appleCount); // 5


  // 3. 檢查屬性是否存在 (in vs undefined)
  let obj = {
    test: undefined
  };
  console.log(obj.test);      // undefined (但這是在抓值，屬性其實存在)
  console.log('test' in obj); // true (這才是精確的檢查)
  console.log('none' in obj); // false


  // 4. for...in 迴圈 (遍歷物件所有屬性)
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  console.log('Salaries list:');
  for (let key in salaries) {
    // key 是屬性名稱, salaries[key] 是屬性值
    console.log(`${key}: ${salaries[key]}`);
  }


  // 5. 物件的複製：引用 (Reference) vs 複製 (Cloning)
  let original = { name: 'Bob' };
  let admin = original; // 這只是「引用傳遞」，兩者指向同一個記憶體位址

  admin.name = 'John';
  console.log(original.name); // 'John' (被 admin 修改了)

  // 如何真正「複製」一個物件？
  // 方法 A: Object.assign
  let cloneA = Object.assign({}, original);
  cloneA.name = 'Clone A';
  console.log(original.name); // 'John' (沒受影響)

  // 方法 B: 展開運算子 (Spread operator) - 最常用的方式
  let cloneB = { ...original };
  cloneB.name = 'Clone B';
  console.log(original.name); // 'John' (沒受影響)


  // 6. 物件屬性的排序 (Property ordering)
  // 整數屬性會自動排序，其餘屬性依照加入順序顯示。
  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };

  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49 (數字屬性會被排序)
  }
}