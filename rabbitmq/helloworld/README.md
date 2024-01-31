
# Node.js code for RabbitMQ tutorials - "Hello World"


![](https://www.rabbitmq.com/img/tutorials/python-one.png)


Here you can find JavaScript (Node) code examples from [RabbitMQ tutorials](https://www.rabbitmq.com/getstarted.html).

To successfully use the examples you will need a running RabbitMQ server.


## Sending 
![](https://www.rabbitmq.com/img/tutorials/sending.png)


```javascript
var amqp = require('amqplib/callback_api');

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5674}, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';
        var msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
```


## Receiving
![](https://www.rabbitmq.com/img/tutorials/receiving.png)

```javascript
var amqp = require('amqplib/callback_api');

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5674}, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});
```


## Reference
- https://github.com/rabbitmq/rabbitmq-tutorials/tree/main/javascript-nodejs
- https://github.com/pardahlman/docker-rabbitmq-cluster/tree/master