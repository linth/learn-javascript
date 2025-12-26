/**
 * function (argument, parameter)
 *  - 使用 arguments 可以不限制傳幾個參數、永遠會接收「全部實際傳進來的值」
 *  - 可以採用現代寫法 ...rest  
 * 
 * 
 * arguments
 *  - 不是 Array
 *  - 不能用 map/filter	
 *  - arrow function ❌
 *  - 舊規格
 * 
 * rest
 *  - 真 Array
 *  - 可以用 map/filter 
 *  - arrow function ✅
 *  - 新標準
 */

{
  function setArguments(a, b, c) {
    console.log(a, b, c);
    console.log(arguments);
    
  }

  setArguments(1, 2, 3); // 1 2 3, [Arguments] { '0': 1, '1': 2, '2': 3 }
  setArguments(4); // 4 undefined undefined, [Arguments] { '0': 4 }
  setArguments(1, 2, 3, 4, 5); // 1 2 3, [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

}

{
  // ES6 之後的「正規版 arguments」
  function setArguments(a, b, c, ...rest) {
    console.log(a, b, c); // 1 2 3
    console.log(rest);   // [4, 5]

    // 過濾 -> 列印出來 forEach
    rest
      .filter(item => item > 4)
      .forEach(item => console.log('rest:', item)); // rest: 5
    
    // 過濾 -> 資料處理產生新的陣列 map [...] 
    const new_rest = rest.filter(item => item > 4)
      .map(item => item * 10);
      console.log(new_rest); // [50]

    // 過濾 -> 資料處理產生新的陣列 map [...]，也要用 map 列印要 return
    rest
      .filter(item => item > 4)
      .map(item => {
        console.log('----->', item); // -----> 5
        return item;
      });
  }

  // setArguments(1, 2, 3); // 1 2 3, []
  // setArguments(4); // 4 undefined undefined, []
  setArguments(1, 2, 3, 4, 5); // 1 2 3, [4, 5]
}