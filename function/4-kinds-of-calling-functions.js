/**
 * 函式呼叫的四種方式：
 *  - 作為函式來呼叫執行 - function
 *  - 作為方法來呼叫執行 - method
 *    => 當以物件的方法來呼叫函式時，該物件會變成函式上下文，然而函式裡可以透過 this 來存取。（另一個是使用建構子)
 * 
 *  - 作為建構式來呼叫執行 - constructor
 *  - 呼叫執行與方法apply() 和 call()
 * 
 * 
 */

{
  // 作為函式來呼叫執行
  function user(name, age) {}
  user();

  function account(name, passord) {}
  account();
}

{
  // 作為方法來呼叫執行
  // 當以物件的方法來呼叫函式時，該物件會變成函式上下文，然而函式裡可以透過 this 來存取。
  var obj = {};
  obj.sayHello = function () { console.log('sayHello'); };
  obj.sayHello(); // sayHello


  var user = {
    // Getter / Setter 一定要存取「另一個私有欄位」，不能讓 getter 讀取它自己。正確版本（加底線欄位）。
    // Getter / Setter 不是 function，是「屬性存取的攔截器」
    _name: 'george',
    _age: 33,
    canEat: true,
    _email: 'george@gmail.com',

    // 思考一下：這樣的寫法有什麼好處？壞處？跟 arrow function寫法差別是什麼？
    getInfo() {
      console.log('user information:');
      console.log('   name:', this._name);
      console.log('   age:', this._age);
      console.log('   canEat:', this.canEat);
      console.log('   email:', this._email);
    },

    get name() { return this._name; },
    set name(name) { this._name = name; },

    get age() { return this._age; },
    set age(age) { this._age = age; },

    get email() { return this._email; },
    set email(email) { this._email = email; },
  }

  console.log(user.getInfo()); 
  /**
   * user information:
   *    name: george
   *    age: 33
   *    canEat: true
   *    email: george@gmail.com
   * undefined  --------> getInfo() 沒有 return 任何東西，所以 JS 自動回傳 undefined
   */
  
  // 不能使用 user.name() 因為 user.name 不是 function，是「屬性存取的攔截器」
  console.log(user.name);  // george
}

{
  // 作為建構式來呼叫執行
  // 1. 最基本建構式
  function User(name, age) {
    this.name = name;
    this.age = age;
  }  
  const u1 = new User("George", 33);
  console.log(u1.name, u1.age);

  // 2. 帶方法的建構式
  function Car(brand) {
    this.brand = brand;
    // 思考一下，使用 arrow function 會怎樣？
    this.run = function () {
      console.log(this.brand, 'is running...');
    };
  }
  const c = new Car('Tesla');
  c.run(); // Tesla is running...

  // 3. 內建建構式
  const now = new Date();        // ← constructor call
  const arr = new Array(1,2,3);
  const map = new Map();
}

{
  // 呼叫執行與方法 apply() 和 call()
  // 1. 普通呼叫 vs call(): call = 強制指定 this
  function say() {
    console.log(this.name);
  }

  const user = { name: 'george' };
  say(); // undefined
  say.call(user); // george

  // 2. 帶參數：call vs apply: 差別只有「參數給法」
  function introduction(city, job) {
    console.log(this.name, city, job);
  }

  const u1 = introduction.call(user, 'taiwan', 'engineer'); // george taiwan engineer
  const u2 = introduction.apply(user, ['US', 'art']); // george US art
  console.log('u1', u1); // u1 undefined
  console.log('u2', u2); // u2 undefined

  // 3. 借用別人的 method
  const cat = { name: 'Kitty', };

  const dog = {
    name: 'Puppy',
    say(prefix, suffix) {
      console.log(`${prefix}${this.name}${suffix}`);
    }
  }

  // 直接呼叫 → this = dog
  dog.say("Hi, I'm ", "!"); // Hi, I'm Puppy!

  // 借用 dog 的 method 給 cat 用
  dog.say.call(cat, "Hi, I'm ", "!"); // Hi, I'm Kitty!
  dog.say.apply(cat, ["Hello, ", " ~"]); // Hello, Kitty ~


  /**
   * 思考一下！為什麼需要這個功能？這樣的方式也只能執行一次，有什麼情境下會需要呢？好處/壞處是什麼？
   * 
   * 為什麼需要這種功能？
   * 在 JS 裡，函數是一等公民，物件沒有「方法固定綁定」，方法本身只是附加在物件上的函數。
   * call / apply 允許你：
   * 改變 this 指向：把函數暫時綁定到另一個物件上執行。
   * 借用功能而不改變原物件結構：不用繼承、不用 new，也不用擴充 class 就能「偷用」別人的方法。
   * 簡單說：JS 是 prototype + dynamic this binding，這種功能就是核心的靈魂。
   */
}

