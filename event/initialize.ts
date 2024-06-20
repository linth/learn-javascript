/**
 * event 
 * 
 * Reference:
 *  - https://www.runoob.com/nodejs/nodejs-event.html
 */

import EventEmitter from 'node:events';

{  
  
  let event = new EventEmitter(); 

  event.on('something_event_happening', () => { 
    console.log('something_event_happening');
  }); 

  setTimeout(() => { 
    event.emit('something_event_happening');
  }, 1000);

  /**
   * something_event_happening
   */
}


{

  let emitter = new EventEmitter();

  // 註冊 event.
  emitter.on('getGatewayInfo', (arg1, arg2) => {
    console.log('listen getGatewayInfo: ',  arg1, arg2);
  });

  emitter.on('getIPCInfo', (arg1, arg2) => {
    console.log('listen getIPCInfo: ', arg1, arg2);    
  });

  // 發送 event.
  setTimeout(() => {
    emitter.emit('getIPCInfo', 'seneor1', 20.4);
  }, 1000);

  setTimeout(() => {
    emitter.emit('getGatewayInfo', 'gw1', 'modbus tcp');
  }, 2000);

  /**
   * listen getIPCInfo:  seneor1 20.4
   * listen getGatewayInfo:  gw1 modbus tcp
   */

}

