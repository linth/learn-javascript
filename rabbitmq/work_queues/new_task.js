var amqp = require('amqplib/callback_api');
var queue = 'task_queue';
var msg = process.argv.slice(2).join(' ') || "Hello World!";

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5672}, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queue, {
        durable: true
      });

      channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true
      });

      console.log(" [x] Sent %s", msg);
    });
    
    setTimeout(function() {
      connection.close();
      process.exit(0);
    }, 500);
});



