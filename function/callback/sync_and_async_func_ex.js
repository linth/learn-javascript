/**
 * sync & async function example.
 * 
 * @param {*} cb 
 */


{
  async function execute_two_cbs(cb) {
    console.log('start execute_two_cbs().');
    // 這種是同步執行的回調函式
    cb();
    cb1();
    cb3();
    console.log('end execute_two_cbs().');
  }
  
  async function cb1() {
    console.log('cb 1');
  }
  
  async function cb2() {
    console.log('cb 2');
  }

  function cb3() {
    console.log('cb 3');
  }
  
  execute_two_cbs(cb2);
  /**
   * start execute_two_cbs().
   * cb 2
   * cb 1
   * cb 3
   * end execute_two_cbs().
   */
}

{
  function execute_async_cbs(cb) {
    console.log('start execute_async_cbs().');
    setTimeout(cb, 0);
    cb5();
    setTimeout(cb5);
    console.log('end execute_async_cbs().');
  }

  function cb4() {
    console.log('cb 4');
  }

  async function cb5() {
    console.log('cb 5');
  }

  execute_async_cbs(cb4);
  /**
   * start execute_async_cbs().
   * cb 5
   * end execute_async_cbs().
   * cb 4
   * cb 5
   */
}