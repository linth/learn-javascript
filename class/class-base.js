/**
 * class-base 範例
 *  - ES6 Class 本質（不是新語言，是 Prototype 的語法糖）
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes
 */

{
  class UserService {
    constructor(name) {
      this.name = name;
    }

    hello() {
      return `Hello, ${this.name}`;
    }
  }

  // 等價於：
  function User2Service(name) {
    this.name = name;
  }

  User2Service.prototype.hello = function () {
    return `Hello, ${this.name}`;
  }

  var res = User2Service.prototype.hello;
  console.log('res', res); // res [Function (anonymous)]
  
}




{
  // // 寫法 1: named
  // class Person {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  // }

  // // 寫法 2: unnamed
  // var Person = class {
  //   constructor(height, width) {
  //     this.height = height;
  //     this.width = width;
  //   }
  // }
}