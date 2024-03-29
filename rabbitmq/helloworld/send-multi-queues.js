#!/usr/bin/env node

/**
 * RabbitMQ tutorial: Hello World!
 *  - sender
 * 
 * Reference:
 *  - https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
 */

var amqp = require('amqplib/callback_api');
var queue = 'aa';
// var queue = 'bb';
// var queue = 'cc';
var msg = 'Hello World!';

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5672}, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

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