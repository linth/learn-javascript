/**
 * 強制轉型（coercion）分為兩種，分別是
 *  - 「明確的」強制轉型（explicit coercion）
 *  - 「隱含的」強制轉型（implicit coercion）
 * 
 * 
 */

{
  var a = 42;
  var b = String(a); // 明確強制轉型
  var c = a + ''; // 隱含強制轉型

  console.log(b, typeof(b)); // 42 string
  console.log(c, typeof(c)); // 42 string
}