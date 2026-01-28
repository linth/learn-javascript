/**
 * const 的進階用法與特性
 * 
 * 重點觀念：
 *  - const 聲明的是一個「唯讀的引用」，而不是「不可變的值」。
 *  - 對於基本型別 (Primitive)，它的值確實不能變。
 *  - 對於物件型別 (Object/Array)，它的「記憶體位址」不能變，但「內容」可以被修改。
 * 
 * 1. 基本型別 (Primitives)
 * 2. 集合與物件 (Collections / Objects)
 * 3. 函式 (Functions)
 * 4. 類別與實例 (Classes / Instances)
 * 5. 總結 (Summary)
 */

// 1. 基本型別 (Primitives)
{
  const PI = 3.14159;
  console.log('PI:', PI);

  // PI = 3.14; // TypeError: Assignment to constant variable.
  // 總結：數值、字串、布林等基本型別，一旦賦值後不可更改。
}


// 2. 集合與物件 (Collections / Objects)
{
  // Array 範例
  const fruits = ['Apple', 'Banana'];
  console.log('初始陣列:', fruits);

  // 虽然是 const，但我們可以修改陣列內容
  fruits.push('Orange');
  fruits[0] = 'Golden Apple';
  console.log('修改後的陣列:', fruits); // ['Golden Apple', 'Banana', 'Orange']

  // fruits = ['New List']; // TypeError: 不能更換整個陣列的引用 (記憶體位址)

  // Object 範例
  const user = { name: 'George', age: 30 };
  user.age = 31; // 允許修改屬性
  console.log('修改後的物件:', user);

  // 如果想要「完全不可變」，可以使用 Object.freeze()
  const frozenObj = Object.freeze({ role: 'Admin' });
  // frozenObj.role = 'User'; // 在嚴格模式下會報錯，非嚴格模式下則靜默失敗
  console.log('凍結後的物件:', frozenObj.role); // 依然是 'Admin'
}


// 3. 函式 (Functions)
{
  // 使用 const 定義函式是極力推薦的做法，因為這可以防止函式名稱被意外覆蓋。
  const greet = (name) => `Hello, ${name}!`;

  console.log(greet('George'));

  // 如果後續有人不小心寫了：
  // greet = 'Not a function'; // 這會拋出錯誤，避免了運行時的災難
}


// 4. 類別與實例 (Classes / Instances)
{
  class Laptop {
    constructor(brand) {
      this.brand = brand;
    }
    turnOn() {
      console.log(`${this.brand} is starting...`);
    }
  }

  // 實例化為 const
  const myLaptop = new Laptop('MacBook');
  myLaptop.turnOn();

  // 1. 我們可以修改實例的屬性
  myLaptop.brand = 'Generic Laptop';
  console.log('修改後的品牌:', myLaptop.brand);

  // 2. 我們不能將變數指向另一個全新的實例
  // myLaptop = new Laptop('Dell'); // TypeError: Assignment to constant variable.
}


// 5. 總結 (Summary)
/*
  何時使用 const? 
  - 預設應該盡可能使用 const。
  - 只有當你確定變數「需要被重新指定 (Re-assignment)」時，才使用 let。
  - 這樣做可以增加程式碼的可讀性，其他人看到 const 就知道這個「名稱」指向的對象不會變。
*/


