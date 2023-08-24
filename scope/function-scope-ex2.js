/**
 * function lexical scope
 *  - 有兩個方法會在執行時修改語彙範疇-eval 和 with。
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/18/lexical-scope/
 */


{

  function foo(a) {
    var b = a * 2; // a=2, b=4

    function bar(c) {
      console.log(a, b, c);
    }

    bar(b*3); // c=12
  }

  foo(2); // 2 4 12
}


{
  // eval盡量不要用
  // TODO: need to know.

  function foo(str, a) { // str=3, a=1
    eval(str);

    // JavaScript 引擎尋找 b 時在 foo 這個範疇找到（其值為 3），而遮蔽了全域的 b（其值為 2）
    console.log(a, b);
  }

  var b = 2;
  foo('var b = 3;', 1); // 1 3
}

{
  // with 會在執行時期創建新的語彙範疇，這裡來看一個全域值外漏的例子。
  // TODO: need to know.

  function foo(obj) {
    with (obj) {
      a = 2;
    }
  }

  var o1 = {
    a: 3,
  };

  var o2 = { 
    b: 3, 
  };

  foo(o1);
  console.log(o1.a); // 2

  foo(o2);
  console.log(o2.a); // undefined
  console.log(a); // 2
}