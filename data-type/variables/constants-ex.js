/**
 * constants
 *  - const
 *    => 定值不能改
 *    => 可以改: collection, function, class/object.
 * 
 */

{
  // 不能改變PI值
  const PI = 3.14;

  console.log(PI);

  // 但如果是 collection, 則可以。
  const a = [];
  console.log('array', a); // []

  a.push(1);
  a.push(3);
  a.push(11);
  console.log('array', a); // [1, 3, 11]


  // function 
  const add = (a, b) => {
      return a+b;
  }
  console.log(add(4, 4)); // 8
  console.log(add(14, 7)); // 21


  // class, object
  class Figure {
    constructor(h, w) {
        this.height = h;
        this.weight = w;
    }

    area() {
        return this.height * this.weight;
    }
  }

  const fig = new Figure(10, 10);
  console.log(fig); // Figure {height: 10, weight: 10}

}