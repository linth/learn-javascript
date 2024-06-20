/**
 * monitoring packets
 *  - addListener() and on() 兩個使用方法皆一致
 * 
 * Reference:
 *  - https://www.runoob.com/nodejs/nodejs-event.html
 */
import EventEmitter from 'node:events';


{
  enum EVENT_NAME {
    DATA_RECEIVED = 'dataReceived',
    DATA_SEND = 'dataSend',
    RECEIVE_MODBUS_TCP = 'receive_modbus_tcp',
    RECEIVE_TCP = 'receive_tcp',
    RECEIVE_UDP = 'receive_udp',
  }
  

  function onDataReceived(data: string) {
    console.log(`Data received: ${data}`);    
  }

  function onDataSend(data: string) {
    console.log(`Data send: ${data}`);
  }

  function onReceiveModbusTcp(data: string) {
    console.log(`receive modbus tcp: ${data}`);
  }

  function onReceiveTcp(data: string) {
    console.log(`receive tcp: ${data}`);
  }

  function onReceiveUdp(data: string) {
    console.log(`receive udp: ${data}`);
  }


  const eventEmitter = new EventEmitter();

  eventEmitter.on(EVENT_NAME.DATA_RECEIVED, onDataReceived);
  eventEmitter.on(EVENT_NAME.DATA_SEND, onDataSend);

  eventEmitter.emit(EVENT_NAME.DATA_RECEIVED, 'received data from pc1.');
  eventEmitter.emit(EVENT_NAME.DATA_SEND, 'send data from pc2.');

  // 移除監聽器
  eventEmitter.off(EVENT_NAME.DATA_RECEIVED, onDataReceived);
  eventEmitter.off(EVENT_NAME.DATA_SEND, onDataSend);
}

