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
  // 當如果要處理 object -> array, 使用 Array.from
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


  // 4.6 Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
  // bad
  const baz = [...foo].map(bar);

  // good
  const bazs = Array.from(foo, bar);
  console.log(bazs);


  // 4.7 Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following 8.2. eslint: array-callback-return
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map((x) => x + 1);

  // bad - no returned value means `acc` becomes undefined after the first iteration
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
  });

  // good
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    return flatten;
  });

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    } else {
      return false;
    }
  });

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }

    return false;
  });



  // TODO: 4.8 example.
  // 
  // bad
  // good
}