/**
 * JS Built-in types
 *  - number
 *  - string
 *  - boolean
 *  - null
 *  - undefined
 *  - object
 *  - symbol 
 * 
 * 內建型別又分兩大類
 *  - 基本型別 (primitives): number, string, boolean, null, undefined, symbol
 *  - 物件型別 (object): object, subtype (物件, 陣列, 函式, 日期, ..., etc)
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/11/types/
 */
{
  // --- 1. 基本型別 (Primitives) ---

  // Number: 數字型別，包含整數、浮點數、NaN
  console.log(typeof 42);           // "number"
  console.log(typeof 3.14);         // "number"
  console.log(typeof NaN);          // "number" (Not a Number 也是一種數字型別)

  // String: 字串型別
  console.log(typeof 'hello');      // "string"
  console.log(typeof "world");      // "string"

  // Boolean: 布林值
  console.log(typeof true);         // "boolean"
  console.log(typeof false);        // "boolean"

  // Null: 代表「完全沒有」或是「空值」。
  const happy = null;
  console.log(typeof happy);        // "object" (這是 JS 歷史悠久的 Bug，但 null 確實是基本型別)

  // 檢測 null 的正確方式 (有幾種做法)：

  // 1. 最推薦的做法：使用嚴格相等 (Strict Equality)
  if (happy === null) {
    console.log('1. happy is strictly null');
  }

  // 2. 使用 typeof 的繞道做法 (目前的範例)：
  if (!happy && typeof happy === 'object') {
    console.log('2. Detected null using typeof workaround');
  }

  // 3. 檢查「是否為空值」(包含 null 與 undefined)：
  // 使用 == null 會同時抓到 null 或是 undefined
  if (happy == null) {
    console.log('3. happy is null or undefined');
  }

  // 4. 最精準的類型檢查 (使用 Object.prototype.toString)：
  if (Object.prototype.toString.call(happy) === '[object Null]') {
    console.log('4. happy is definitely [object Null]');
  }


  // Undefined: 變數已宣告但未給值，或是物件屬性不存在
  let notAssigned;
  console.log(typeof notAssigned);  // "undefined"
  console.log(typeof undefined);    // "undefined"

  // Symbol: ES6 加入，代表獨一無二且不可變的值
  console.log(typeof Symbol('id')); // "symbol"

  // BigInt: ES2020 加入，用於表示大於 2^53 - 1 的整數
  console.log(typeof 100n);         // "bigint"

}


{
  // --- 2. 物件型別 (Object / Subtypes) ---

  // Object: 一般物件 (鍵值對)
  console.log(typeof { name: 'Antigravity' }); // "object"

  // Array: 陣列 (有序清單)，在本質上也是物件的一種
  console.log(typeof [1, 2, 3]);               // "object"

  // Function: 函式，雖然屬於物件的子型別，但 typeof 會回傳 "function"
  console.log(typeof function () { });           // "function"

  // Date: 日期物件
  console.log(typeof new Date());              // "object"

  // RegExp: 正則表達式
  console.log(typeof /abc/);                   // "object"
}

