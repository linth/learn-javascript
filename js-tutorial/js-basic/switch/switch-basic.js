/*
Switch

Reference:
    - https://ithelp.ithome.com.tw/articles/10104769

Note:
    （1）將每個 case 與 switch 並排
    （2）case 內程式碼縮排
    （3）每個 case 皆有 break; 結束
    （4）用 default: 結束switch
*/


{
  // 使用匿名函式: 函式本身是匿名的，沒有名稱，並且不能在其他地方再次引用它。
  const getDayOfWeek = (function() {
    return function(dayNumber) {
      let day;
  
      switch (dayNumber) {
        case 1:
          day = 'Sunday';
          break;
        case 2:
          day = 'Monday';
          break;
        case 3:
          day = 'Tuesday';
          break;
        case 4:
          day = 'Wednesday';
          break;
        case 5:
          day = 'Thursday';
          break;
        case 6:
          day = 'Friday';
          break;
        case 7:
          day = 'Saturday';
          break;
        default:
          day = 'Invalid day';
      }
  
      return day;
    };
  })();

  const today = getDayOfWeek(3);
  console.log(`Today is ${today}`); // Today is Tuesday
}

