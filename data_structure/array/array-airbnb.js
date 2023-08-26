/**
 * Airbnb - Array
 * 
 * 
 * Reference:
 *  - https://github.com/airbnb/javascript#arrays
 */

{
  // 4.1 Use the literal syntax for array creation. eslint: no-array-constructor
  // bad
  const item = new Array();

  // good
  const items = [];


  // 4.2 Use Array#push instead of direct assignment to add items to an array.
  const someStack = [];
  // bad
  someStack[someStack.length] = 'abracadabra';

  // good
  someStack.push('abracadabra');


  // 4.3 Use array spreads ... to copy arrays.
  // bad
  const len = items.length;
  const itemsCopy = [];
  let i;
  for (i=0; i<len; i+=1) {
    itemsCopy[i] = items[i];
  }

  // good
  const itemsCopys = [...items];


  // 4.4 To convert an iterable object to an array, use spreads ... instead of Array.from
  // 從iterable 的物件轉成 array, 請使用 ..., 不要用 Array.from
  const foo = document.querySelectorAll('.foo');

  // good
  const node = Array.from(foo);

  // best
  const nodes = [...foo];


  // 4.5 Use Array.from for converting an array-like object to an array.
  // 使用 Array.from 來處理 array-like 物件轉換成 array.
  const arrLike = { 
    0: 'foo', 
    1: 'bar', 
    2: 'baz', 
    length: 3 
  };

  // bad
  const arr = Array.prototype.slice.call(arrLike);

  // good
  const arrs = Array.from(arrLike);
  console.log(arrs); // [ 'foo', 'bar', 'baz' ]


  // TODO: 4.6 example.

  // 
  // bad
  // good
}