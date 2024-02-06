/**
 * RabbitMQ tutorial: Publish/Subscribe example
 *  - receiver
 * 
 * 
 * 在 Producer、Queue、Consumer之間就多一個Exchange，所以Producer不直接把message丟到Queue裡，
 * 而是讓Producer把message丟給Exchange，再交由Exchange去決定要丟給那個Queue。
 * 
 * Exchange 自己就有三種 type:
 *  - direct
 *  - fanout
 *  - topic
 * 
 * 
 * the process of amqp (step by step)
 *  - connect
 *  - create channel
 *  - assertExchange (direct, topic, headers, fanout)
 *  - assertQueue
 *  - bindQueue
 * 
 * Reference:
 *  - https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html
 */

var amqp = require('amqplib/callback_api');
var exchange = 'logs';

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest'}, function(error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    channel.assertQueue('', {
      exclusive: true
    }, function(error2, q) {
      if (error2) {
        throw error2;
      }
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      channel.bindQueue(q.queue, exchange, '');

      channel.consume(q.queue, function(msg) {
        if (msg.content) {
          console.log(" [x] %s", msg.content.toString());
        }
      }, {
        noAck: true
      });
    });
  });
});