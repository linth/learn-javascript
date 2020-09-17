/*
Reference:
    - https://ithelp.ithome.com.tw/articles/10104769

Note:
    （1）將每個 case 與 switch 並排
    （2）case 內程式碼縮排
    （3）每個 case 皆有 break; 結束
    （4）用 default: 結束switch
*/

var inspect_me = 0,
    result = '';


switch(inspect_me) {
case 0:
    result = 'aaa';
    break;
case 1:
    result = 'bbb';
    break;
case 2:
    result = 'ccc';
    break;
default:
    result = 'whatever';
};