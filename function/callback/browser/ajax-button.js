/**
 * ajax callback 範例 (了解一下初步寫法即可)
 * 
 * Reference:
 *  - https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/callback.html
 */

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
            document.getElementById('myDiv').innerHTML = xhr.responseText
        } else if (xhr.status == 400) {
            console.log('there was an error 404.');
        } else {

        }
    }
}


xhr.open('GET', 'ajax_info.txt', true);
xhr.send();