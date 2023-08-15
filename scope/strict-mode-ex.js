/**
 * Strict Mode
 *  - 在未宣告變數而賦值的狀況下，會無預警的產生一個全域變數，但若使用嚴格模式（'use strict'）則會禁止這行為外，還會報錯，告知開發者變數尚未被定義。
 * 
 */


'use strict';
a = 1; // Uncaught ReferenceError: a is not defined


