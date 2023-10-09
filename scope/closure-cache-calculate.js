/**
 * closure 閉包
 *  - 如果希望能記住上次計算的值，不用再算一次，就可以使用閉包。
 * 
 * 
 * Reference:
 *  - https://v61265.coderbridge.io/2020/10/23/%E7%B5%A6%E8%87%AA%E5%B7%B1%E7%9C%8B%E7%9A%84-js-%E9%80%B2%E9%9A%8E%EF%BC%8Dclosure/
 */



{
  function square(n) {
    console.log('calculate square.');
    return n*n;
  }

  function cache_before_calculating(func) {
    var ans = {}

    const a = function(num) {
      if (ans[num]) {
        return ans[num]
      }
      ans[num] = func(num)
      return ans[num]
    }

    return a
  }

  const cbc = cache_before_calculating(square);
  console.log(cbc(20));
  console.log(cbc(20));
  console.log(cbc(20));

  // TODO: think about why square() cannot show log information.
  // FIXME: Create a constant variable to denote a function; it seems to work.
  /** result:
   * 
   * calculate square.
   * 400
   * 400
   * 400
   */
}

