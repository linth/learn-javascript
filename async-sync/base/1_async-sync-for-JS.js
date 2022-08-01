/**
 * 什麼是同步/非同步 (使用js來學習同步/非同步)
 *  - 非同步執行的主要目的，就是讓它不會阻礙任何事情。
 *  - JS 是單執行續 thread.
 * 
 * !JS在執行時依舊是依照同步的概念，按照順序一個一個任務執行，
 * !但遇到非同步任務時，會把他往後放，放到事件佇列(Event Queue)中。
 * 
 * Reference:
 *  - https://medium.com/@yining1204/javascript-%E6%A0%B8%E5%BF%83%E7%AF%87-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-chap-15-%E5%9F%B7%E8%A1%8C%E7%B7%92%E8%88%87%E5%90%8C%E6%AD%A5-%E9%9D%9E%E5%90%8C%E6%AD%A5-107802469752
 */

console.log(`Before timeout: ${new Date()}`);

const fn = () => {
    console.log(`After timeout: ${new Date()}`);
}

// 非同步動作
setTimeout(fn, 2000);
console.log(`I happen AFTER timeout.`);


/**Result:
 * 
 * Before timeout: Mon Aug 01 2022 23:43:13 GMT+0800 (台北標準時間)
 * I happen AFTER timeout.
 * After timeout: Mon Aug 01 2022 23:43:15 GMT+0800 (台北標準時間)
 */


