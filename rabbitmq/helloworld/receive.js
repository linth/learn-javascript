#!/usr/bin/env node

/**
 * RabbitMQ tutorial: Hello World!
 *  - receiver
 * 
 * Reference:
 *  - https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
 */

var amqp = require('amqplib/callback_api');

var createChannelAndDoSomthing = function(error0, connection) {
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
}

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5672}, createChannelAndDoSomthing);

