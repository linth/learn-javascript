/**
 * conditional / ternary operators (三元運算子)
 *  - 條件 ? 值1 : 值2
 *           true  fales
 */

{
  const count = 10;
  const prompt = count <= 0 ? '賣完' : '尚有貨';

  console.log(prompt); // 尚有貨
}