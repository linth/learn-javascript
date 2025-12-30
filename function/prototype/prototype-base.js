/**
 * JS 不是 class 語言，它是 prototype 語言
 *  - JS 不是：每個物件從 class 產生
 *  - JS 是：每個物件都是「從另一個物件 clone 出來」，這個「原始物件」叫 prototype。
 * 
 * 
 * 共享資料/資源，節省記憶體
 * 動態熱插功能
 * runtime 擴充能力
 * 
 * 
 * prototype-base method
 * 
 * TODO: 增加多點解釋跟範例。
 * 
 * Reference:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

{
  // 利用函式存儲資料，方法則用prototype.function_name來clone出來，共享資料/資源。
  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function () {
    return `Hi, I'm ${this.name}`;  // sayHi 只存在一份，不是每個 instance 一份。
  };

  const u1 = new User('George');
  const u2 = new User('Amy');

  console.log(u1.sayHi());
  console.log(u2.sayHi());
}


{
  class Polygon {
    constructor(h, w) {
      this.height = h;
      this.width = w;
    }

    // Getter
    get area() {
      return this.calcArea();
    }

    // Method
    calcArea() {
      return this.height * this.width;
    }
  }

  const square = new Polygon(10, 10);
  console.log(square.area);
}

