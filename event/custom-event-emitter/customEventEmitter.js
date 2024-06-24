/**
 * 自建一個 custom event emitter
 * 
 */


{

  /**
   * custom event emitter class.
   */
  class CustomEventEmitter {
    constructor() {
      this.events = {};
    }

    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }

    off(event, listener) {
      if (!this.events[event]) return;

      this.events[event] = this.events[event].filter(l => l !== listener);
    }

    emit(event, ...args) {
      if (!this.events[event]) return;

      this.events[event].forEach(listener => listener(...args));
    }

    removeAllListeners(event) {
      if (event) {
        delete this.events[event];
      } else {
        this.events = {};
      }
    }
  }


  const EVENT_NAME = {
    DATA_RECEIVED: 'dataReceived',
    DATA_SEND: 'dataSend',
    RECEIVE_MODBUS_TCP: 'receive_modbus_tcp',
    RECEIVE_TCP: 'receive_tcp',
    RECEIVE_UDP: 'receive_udp',
  };

  // listener function.
  function onDataReceived(data) {
    console.log(`Data received: ${data}`);
  }

  function onDataSend(data) {
    console.log(`Data sent: ${data}`);
  }


  const c = new CustomEventEmitter();

  c.on(EVENT_NAME.DATA_RECEIVED, onDataReceived);
  c.on(EVENT_NAME.DATA_SEND, onDataSend);

  c.emit(EVENT_NAME.DATA_RECEIVED, 'Message for dataReceived');
  c.emit(EVENT_NAME.DATA_SEND, 'Message for dataSend');

  console.log('->', c.events.dataReceived);

  c.events.forEach( item => {
    console.log(item);
  })
}

