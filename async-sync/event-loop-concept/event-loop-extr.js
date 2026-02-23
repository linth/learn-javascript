console.log('1: Start');

setTimeout(() => {
  console.log('2: Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise');
});

console.time('microtask-check');
test();

console.log('4: End');


async function test() {
  await show();
  console.log('test');
  await show2();
}

async function show() {
  console.log('show');
  console.timeEnd('microtask-check'); // 觀察微任務觸發的耗時
}

async function show2() {
  console.log('show2');
}