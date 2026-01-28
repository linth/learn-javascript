/**
 * Generator (生成器)
 * 
 * 本檔案整合了多個生成器範例，從基礎語法到進階應用。
 * 
 * 核心觀念：
 *  - 生成器函式 (Generator Function) 使用 `function*` 定義。
 *  - 呼叫生成器函式「不會即刻執行內容」，而是回傳一個「生成器物件 (Generator Object)」。
 *  - 使用 `.next()` 方法來推動執行，直到碰到 `yield` 關鍵字為止。
 *  - 生成器是迭代器 (Iterator)，因此可以使用 `for...of` 或展開運算子 `[...]`。
 * 
 * 
 * 1. 基礎生成器與 yield
 * 2. 無限序列 (ID 產生器)
 * 3. 委派生成器 (yield*)
 * 4. Return 在生成器中的行為
 * 5. 生成器表達式 (Generator Expressions)
 * 6. 類別中的生成器方法 (Generator Methods)
 * 7. 進階實例：費波那契數列 (Fibonacci)
 * 8. 進階實例：分頁模擬 (Data Paging)
 */

// 1. 基礎生成器與 yield
{
  function* basicGenerator(i) {
    yield i;
    yield i + 10;
  }

  const g = basicGenerator(10);
  console.log('--- 1. 基礎 yield ---');
  console.log(g.next().value); // 10
  console.log(g.next().value); // 20
  console.log(g.next().done);  // false (內容還沒結束嗎？最後一個 yield 之後還有隱含的結束)
  console.log(g.next().done);  // true
}


// 2. 無限序列 (ID 產生器)
{
  function* idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }

  const gen = idMaker();
  console.log('\n--- 2. 無限 ID 產生器 ---');
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
}


// 3. 委派生成器 (yield*)
{
  function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
  }

  function* mainGenerator(i) {
    yield i;
    yield* anotherGenerator(i); // 委派給另一個生成器
    yield i + 10;
  }

  const g2 = mainGenerator(10);
  console.log('\n--- 3. 委派 yield* ---');
  console.log([...g2]); // [10, 11, 12, 20] -> 使用展開運算子一次跑完
}


// 4. Return 在生成器中的行為
{
  function* yieldAndReturn() {
    yield '第一步';
    return '結束了'; // return 會讓 done 變為 true，其值為 value
    yield '這行永遠不會執行';
  }

  const g = yieldAndReturn();
  console.log('\n--- 4. Return 行為 ---');
  console.log(g.next()); // { value: '第一步', done: false }
  console.log(g.next()); // { value: '結束了', done: true }
  console.log(g.next()); // { value: undefined, done: true }
}


// 5. 生成器表達式 (Generator Expressions)
{
  const foo = function* () {
    yield 'A';
    yield 'B';
  };

  const bar = foo();
  console.log('\n--- 5. 生成器表達式 ---');
  console.log(bar.next().value); // A
}


// 6. 類別中的生成器方法 (Generator Methods)
{
  class Collection {
    constructor(...items) {
      this.items = items;
    }

    // 在方法名稱前加 * 號
    *getItems() {
      for (const item of this.items) {
        yield item;
      }
    }
  }

  const myColl = new Collection('蘋果', '香蕉', '橘子');
  console.log('\n--- 6. 類別方法 ---');
  for (let item of myColl.getItems()) {
    console.log('取得項目:', item);
  }
}


// 7. 進階實例：費波那契數列 (Fibonacci)
{
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }

  console.log('\n--- 7. 費波那契數列 (前 5 個) ---');
  const fib = fibonacci();
  for (let i = 0; i < 5; i++) {
    console.log(fib.next().value);
  }
}


// 8. 進階實例：分頁模擬 (Data Paging)
{
  function* paginate(data, pageSize) {
    for (let i = 0; i < data.length; i += pageSize) {
      yield data.slice(i, i + pageSize);
    }
  }

  const bigData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pager = paginate(bigData, 3);

  console.log('\n--- 8. 分頁處理 ---');
  console.log(pager.next().value); // [1, 2, 3]
  console.log(pager.next().value); // [4, 5, 6]
  console.log(pager.next().value); // [7, 8, 9]
  console.log(pager.next().value); // [10]
}


// 注意事項：
// 1. 生成器不能被建構 (new)
// function* F() {}
// let f = new F(); // TypeError: F is not a constructor
