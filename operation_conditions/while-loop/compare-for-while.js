/**
 * 比較 for-loop & while-loop 範例
 * 
 * Reference:
 *  - 
 */


 const cars = ["BMW", "Volvo", "Saab", "Ford"];
 
 let text = '';
 let i = 0;

 for(;cars[i];) {
    text += cars[i];
    i++;
 }

 console.log(text); // BMWVolvoSaabFord


 while (cars[i]) {
    text += cars[i];
    i++;
 }

 console.log(text); // BMWVolvoSaabFord