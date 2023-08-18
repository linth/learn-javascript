/**
 * JSON Stringification (JSON字串化)
 *  - JSON 的字串化 JSON.stringify 將值序列化（serialize）為 JSON 字串，這個轉為 JSON 字串的過程與 ToString 規則有關，但並不等於強制轉型。
 * 
 */

{
  console.log(JSON.stringify(33)); // 33
  console.log(JSON.stringify(true)); // "true"
  console.log(JSON.stringify(null)); // "null"
  console.log(JSON.stringify('Hello world')); // ""Hello world"" (外面會包一層引號)


  // 若陣列中某個元素的值為非法值則會自動以 null 取代；若物件中的其中一個屬性為非法值，則會排除這個屬性

  console.log(JSON.stringify(undefined)); // undefined
  console.log(JSON.stringify(function () {})); // undefined
  console.log(JSON.stringify(Symbol())); // undefined
  console.log(JSON.stringify([1, 2, 3, undefined])); // [1,2,3,null]
  console.log(JSON.stringify({ a: 2, b: function () {} })); // {"a": 2}
}