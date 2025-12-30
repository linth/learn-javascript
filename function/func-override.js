/**
 * JavaScript Function Override 範例集
 * 
 * 這裡展示三種常見的 Function Override (函數覆寫) 情境：
 * 1. 類別繼承覆寫 (Class Inheritance Overriding)
 * 2. 物件實例覆寫 (Object Instance Overriding)
 * 3. 原型鏈覆寫 (Prototype Overriding / Monkey Patching)
 */


// ==========================================
// 範例 1: 類別繼承覆寫 (Class Inheritance)
// 這是最標準的物件導向 override 方式
// ==========================================
{
  // 利用繼承來覆寫
  console.log('--- 範例 1: Class Inheritance ---');

  class Animal {
    speak() {
      console.log('Animal makes a noise.');
    }
  }

  class Dog extends Animal {
    // Override 父類別的 speak 方法
    speak() {
      // 選擇性：可以呼叫父類別的方法
      // super.speak(); 
      console.log('Dog barks!');
    }
  }

  const genericAnimal = new Animal()
    .speak(); // Animal makes a noise.

  const myDog = new Dog()
    .speak(); // Dog barks! (已被覆寫)
}



// ==========================================
// 範例 2: 物件實例覆寫 (Instance Overriding)
// 在特定的物件實例上覆寫方法，不影響其他實例
// ==========================================
{
  // 利用物件來覆寫
  console.log('\n--- 範例 2: Instance Overriding ---');

  class User {
    login() {
      console.log('User logged in with standard flow');
    }
  }

  const user1 = new User();
  const user2 = new User();

  // 只 Override user2 的 login 行為
  user2.login = function () {
    console.log('User logged in with 2FA (Two-Factor Authentication)');
  };

  user1.login(); // User logged in with standard flow
  user2.login(); // User logged in with 2FA...
}


// ==========================================
// 範例 3: 覆寫內建方法 (Overriding Built-ins)
// 常見於覆寫 toString() 或 valueOf() 來改變物件的字串/數值表現
// ==========================================
{
  // 
  console.log('\n--- 範例 3: Built-in Customization ---');

  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    // Override Object.prototype.toString
    toString() {
      return `[Product: ${this.name} - $${this.price}]`;
    }
  }

  const apple = new Product('Apple', 1.5);

  // 預設狀況下物件轉字串是 [object Object]，但我們覆寫了 toString
  console.log('Product info: ' + apple);
  // Output: Product info: [Product: Apple - $1.5]
}
