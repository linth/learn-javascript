var amqp = require('amqplib/callback_api');
var queue = 'task_queue';


var createChannelAndDoSomthing = function(error0, connection) {
  if (error0) {
    throw error0;
  }
  
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    // This makes sure the queue is declared before attempting to consume from it
    channel.assertQueue(queue, {
      durable: true
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      var secs = msg.content.toString().split('.').length - 1;
    
      console.log(" [x] Received %s", msg.content.toString());

      setTimeout(function() {
        console.log(" [x] Done");
      }, secs * 1000);
    }, {
      // automatic acknowledgment mode,
      // see ../confirms.html for details
      noAck: true
    });
  });
}

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5672}, createChannelAndDoSomthing);