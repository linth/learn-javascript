/**
 * setTimeout和setInterval是JavaScript裡面唯二天生就以非同步方式執行的function。
 *  - user觸發的行為也算是非同步事件
 *  - ajax
 *  - read/write data
 *  - delay time (i.e., clock)
 * 
 */

function clickThis() {
    console.log(`click`);
}

var dom = document.querySelector('p');
dom.addEventListener('click', clickThis, false);