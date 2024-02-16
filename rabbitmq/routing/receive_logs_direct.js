/**
 * RabbitMQ tutorial: Routing
 *  - receiver
 * 
 * cmd: `node receive_logs_direct.js info warning error`
 * 
 * Reference: 
 *  - https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html
 */

var amqp = require('amqplib/callback_api');

var args = process.argv.slice(2);
var exchange = 'direct_logs';

if (args.length == 0) {
  console.log('Usage: receive_logs_direct.js [info] [warning] [error]');
  process.exit(1);
}

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest'}, function(error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    channel.assertExchange(exchange, 'direct', {
      durable: false
    });

    channel.assertQueue('', { exclusive: true }, function(error2, q) {
      if (error2) {
        throw error2;
      }

      console.log(' [*] Waiting for logs. To exit press CTRL+C');

      args.forEach(function(severity) {
        channel.bindQueue(q.queue, exchange, severity);
      });

      channel.consume(q.queue, function(msg) {
        console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
      }, {
        noAck: true
      });
    });
  });
});