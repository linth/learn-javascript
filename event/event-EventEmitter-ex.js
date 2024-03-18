/**
 * EventEmitter
 * 
 * Reference:
 *  - https://nodejs.org/api/events.html#class-eventemitter
 */

const EventEmitter = require('node:events')

{
  class MyEmitter extends EventEmitter {

  }

  /**
   * user case: 當發生發送 'event' 後, 監聽者 newListener執行列印 'B', 另一個任務觸發為收到 'event', 則列印 'A'。
   */
  const myEmitter = new MyEmitter();

  myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
      myEmitter.on('event', () => {
        console.log('B');
      });
    }
  });

  myEmitter.on('event', () => {
    console.log('A');
  });

  myEmitter.emit('event');

}