/**
 * Array (陣列) 基礎與進階操作全攻略
 * 
 * 本檔案整合了基礎陣列操作、維度操作以及常用的 ES6+ 陣列方法。
 * 
 * 核心觀念：
 *  - 陣列可以儲存任何型別：數字、字串、物件、甚至是另一個陣列。
 *  - 陣列是索引從 0 開始的有序集合。
 *  - 操作陣列時，要注意是「修改原始陣列」還是「回傳新陣列」。
 * 
 * 1. 基礎宣告與存取
 * 2. 堆疊與隊列操作 (Stack & Queue)
 * 3. 複製陣列 (Copying Arrays)
 * 4. 現代化判斷方法
 * 5. 三大核心方法 (必學)
 * 6. 查找與定位
 * 7. 實際應用技巧
 * 
 *
 * 
 * 整合與新增重點：
 * 1. 基礎操作強化：包含了 push、pop、shift、unshift 的詳細用法說明。
 * 2. 避免副作用 (Side Effects)：展示了使用展開運算子 [...] 與 slice() 來複製陣列，確保不會意外修改到原始資料。
 * 3. 現代化判斷方法：
 *  - every(): 檢查是否「全部」符合條件。
 *  - some(): 檢查是否「任一」符合條件。
 * 4. 三大核心方法 (必學)：
 *  - map(): 轉換陣列資料格式。
 *  - filter(): 過濾符合條件的元素。
 *  - reduce(): 進行累加或資料綜合運算（如計算總價）。
 * 5. 查找與定位：比較了 includes()、indexOf() 與物件搜尋常用的 find()。
 * 6. 實際應用技巧：
 *  - 利用 new Set() 進行快速陣列去重。
 *  - 利用展開運算子快速合併陣列。
 */


// 1. 基礎宣告與存取
{
  console.log('--- 1. 基礎宣告與存取 ---');
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const mixed = ['tree', 795, [0, 1, 2]]; // 混合型別與巢狀陣列

  console.log('fruits[0]:', fruits[0]); // Apple
  console.log('巢狀存取 [2][1]:', mixed[2][1]); // 1
  console.log('陣列長度:', fruits.length); // 3
}


// 2. 堆疊與隊列操作 (Stack & Queue) - 會修改原始陣列
{
  console.log('\n--- 2. 修改型操作 (Modify In-Place) ---');
  let stack = [1, 2];

  // 後端操作
  stack.push(3); // 新增到末尾
  console.log('push(3):', stack); // [1, 2, 3]
  let last = stack.pop(); // 移除末尾並回傳
  console.log('pop():', last, '->', stack); // 3 -> [1, 2]

  // 前端操作
  stack.unshift(0); // 新增到開頭
  console.log('unshift(0):', stack); // [0, 1, 2]
  let first = stack.shift(); // 移除開頭並回傳
  console.log('shift():', first, '->', stack); // 0 -> [1, 2]
}


// 3. 複製陣列 (Copying Arrays)
{
  console.log('\n--- 3. 複製陣列 (重要：避免副作用) ---');
  let original = [1, 2, 3];

  // 方法 A: slice(0)
  let copyA = original.slice(0);

  // 方法 B: 展開運算子 Spread Operator (最推薦)
  let copyB = [...original];

  copyB.push(99);
  console.log('原始陣列不變:', original); // [1, 2, 3]
  console.log('複製品改變:', copyB);      // [1, 2, 3, 99]
}


// 4. 進階判斷方法 (every, some)
{
  console.log('\n--- 4. 條件判斷 (every / some) ---');
  const nums = [2, 4, 6, 8];

  // every: 是否「全部」符合條件
  const allEven = nums.every(n => n % 2 === 0);
  console.log('是否全為偶數:', allEven); // true

  // some: 是否「任一」符合條件
  const hasLarge = nums.some(n => n > 7);
  console.log('是否有大於 7 的數字:', hasLarge); // true

  // 實用技巧：檢查陣列是否全部相等
  const allEqual = arr => arr.every(val => val === arr[0]);
  console.log('allEqual([1,1,1]):', allEqual([1, 1, 1])); // true
}


// 5. 轉換與過濾 (map / filter / reduce)
{
  console.log('\n--- 5. 轉換與過濾 (最常用) ---');
  const products = [
    { name: 'Laptop', price: 30000 },
    { name: 'Phone', price: 15000 },
    { name: 'Mouse', price: 500 }
  ];

  // map: 轉換格式 (例如只提取名稱)
  const names = products.map(p => p.name);
  console.log('產品名稱清單:', names); // ['Laptop', 'Phone', 'Mouse']

  // filter: 過濾符合條件的項目
  const expensive = products.filter(p => p.price > 10000);
  console.log('昂貴產品數量:', expensive.length); // 2

  // reduce: 累加計算 (計算總價)
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  console.log('總價格:', totalPrice); // 45500
}


// 6. 查找方法 (indexOf / includes / find)
{
  console.log('\n--- 6. 查找元素 ---');
  const colors = ['red', 'green', 'blue'];

  console.log('是否有 blue?', colors.includes('blue')); // true
  console.log('green 的索引:', colors.indexOf('green')); // 1

  // find: 尋找符合條件的第一個元素物件
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  const jane = users.find(u => u.id === 2);
  console.log('尋找到的用戶:', jane.name); // Jane
}


// 7. 活用：去重與統計 (Practical Patterns)
{
  console.log('\n--- 7. 實際應用小技巧 ---');

  // A. 陣列去重 (Unique values)
  const dupes = [1, 2, 2, 3, 4, 4, 4, 5];
  const unique = [...new Set(dupes)];
  console.log('去重後:', unique); // [1, 2, 3, 4, 5]

  // B. 合併兩個陣列
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = [...arr1, ...arr2];
  console.log('合併結果:', combined); // [1, 2, 3, 4]
}
