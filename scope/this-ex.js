/**
 * this 
 *  - this 是 function 執行時所屬的物件，而 this 是在執行時期做繫結
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */

function foo() {
  console.log(this.bar);
}

var bar = 'global';

var obj1 = {
  bar: 'obj1',
  foo: foo,
};

var obj2 = {
  bar: 'obj2',
};

// TODO: NEED to check the result: undefined, but reference is 'global'.
foo(); // undefined 

obj1.foo(); // obj1
foo.call(obj2); // obj2
new foo(); // undefined