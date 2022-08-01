/**
 * event queue
 *  - JS在執行時依舊是依照同步的概念，按照順序一個一個任務執行，但遇到非同步任務時，會把他往後放，放到事件佇列(Event Queue)中。
 *  - 非同步事件會被放到 event queue 裡面，不會先執行。
 *  - 這邊會先跑完全部程式後，才會執行非同步動作。
 * 
 * Reference:
 *  - https://medium.com/@yining1204/javascript-%E6%A0%B8%E5%BF%83%E7%AF%87-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-chap-15-%E5%9F%B7%E8%A1%8C%E7%B7%92%E8%88%87%E5%90%8C%E6%AD%A5-%E9%9D%9E%E5%90%8C%E6%AD%A5-107802469752
 */

function eatBreakfast() {
    console.log(`吃早餐`);
}

function washingPlate() { 
    console.log(`洗餐盤`); 
}

function callSomeone(someone) {
    console.log(`打給` + someone);

    setTimeout(function () {
        console.log(someone + `回電`);
    }, 0);
}

function doWork() {
    var auntie = `漂亮阿姨`;

    eatBreakfast();
    callSomeone(auntie);
    washingPlate();
}

doWork();

