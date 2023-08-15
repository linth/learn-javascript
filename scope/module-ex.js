/**
 * Module
 * 
 * Reference:
 *  - https://www.cythilya.tw/2018/10/10/intro-2/
 */


{
  function coolModule() {
    var a = 'cool';
    var b = [1, 2, 3];

    function getA() {
      console.log(a);
    }

    function getB() {
      console.log(b.join(' ! '));
    }

    return {
      get_a: getA,
      get_b: getB,
    };
  }

  var foo = coolModule();
  foo.get_a(); // cool
  foo.get_b(); // 1 ! 2 ! 3
}
