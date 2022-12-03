# Jest test


## setting up Jest
```shell
$ npm init -y
```

```shell
$ npm i jest --save-dev 
```

## add code 
```javascript

const { add } = require('../test/math')


test('test add', () => {
    expect(add(2, 3)).toBe(5);
});

test('test mul', () => {
    expect(mul(3, 4)).toBe(12);
});

test('test sub', () => {
    expect(sub(5, 6)).toBe(-1);
});

test('test div', () => {
    expect(div(8, 4)).toBe(2);
});
```

## add jest test 
```javascript
const { add, mul, sub, div } = require('../test/math')


test('test add', () => {
    expect(add(2, 3)).toBe(5);
});

test('test mul', () => {
    expect(mul(3, 4)).toBe(12);
});

test('test sub', () => {
    expect(sub(5, 6)).toBe(-1);
});

test('test div', () => {
    expect(div(8, 4)).toBe(2);
});
```

## test your unit test code.
```shell
$ npm run test
```

Result:
```shell
PASS  test/math.test.js
  √ test add (2 ms)
  √ test mul (1 ms)
  √ test sub
  √ test div

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.745 s, estimated 1 s
Ran all test suites.
```


# Reference
- [Jest 基本介紹與教學](https://www.youtube.com/watch?v=WYqXyQz2TdA)
- [Jest tutorial](https://zetcode.com/javascript/jest/)