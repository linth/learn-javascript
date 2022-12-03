
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