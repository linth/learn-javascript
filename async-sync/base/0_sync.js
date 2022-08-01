/**
 * Sync javascript
 * 
 * Reference:
 *  - https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Asynchronous/Introducing
 */

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('you click the button.');

    let element = document.createElement('p');
    element.textContent = 'This is a new text.';
    document.body.appendChild(element);
})