/* 
Reference:
    - https://www.fooish.com/javascript/date/
*/

// today
var today = new Date();
console.log('today: ', today);

// 傳入的參數是一個數字，值表示從 1970-01-01 00:00:00 UTC (格林威治標準時間) 開始累計到某時間點的毫秒數 (milliseconds)。
var someday = new Date(1481361366000);
console.log(someday);

// JavaScript 表達月份 (month) 是從 0 到 11，0 是一月；11 是十二月。
var birthday = new Date(2000, 09, 21, 23, 30, 15)
console.log('birthday', birthday);

// 建立特定時間點的 Date 物件 - 將時間文字轉換成 Date 物件
// TODO: check the date time.
var sd = '2020-09-21 00:00:00';
var res = new Date(sd);
console.log('res', res); // res 2020-09-20T16:00:00.000Z

// TODO: check the date time.
var n = new Date(2020, 09, 20);
console.log('n: ', n); // n:  2020-10-19T16:00:00.000Z

// var m = new Date.UTC(2020, 09, 20)