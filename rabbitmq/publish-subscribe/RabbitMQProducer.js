

var amqp = require('amqplib/callback_api');
// var exchange = 'logs';
var msg = process.argv.slice(2).join(' ') || 'Hello World!';


class RabbitMQProducer {
  constructor(url, username, password, exchange) {
    this.url = url;
    this.username = username;
    this.password = password;
    this.exchange = exchange;
  }

  connectToBroker(callback) {
    amqp.connect({ url: this.url, username: this.username, password: this.password}, callback);
  }

  createChannel(connection, callback) {
    connection.createChannel(callback);
  }

  assertExchange(channel, callback) {
    channel.assertExchange(this.exchange, 'fanout', { durable: false }, callback);
  }

  publishMessage(channel, msg) {
    channel.publish(this.exchange, '', Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  }

  closeConnection(connection) {
    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  }
}


const amqpProducer = new AMQPProducer('amqp://localhost', 'guest', 'guest', 'logs');
const msg = process.argv.slice(2).join(' ') || 'Hello World!';

amqpProducer.connectToBroker((error0, connection) => {
  if (error0) {
    throw error0;
  }

  amqpProducer.createChannel(connection, (error1, channel) => {
    if (error1) {
      throw error1;
    }

    amqpProducer.assertExchange(channel, () => {
      amqpProducer.publishMessage(channel, msg);
      amqpProducer.closeConnection(connection);
    });
  });
});