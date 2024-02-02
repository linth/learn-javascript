#!/usr/bin/env node

/**
 * Using direct mode with multiple queues.
 *  - receiver
 * 
 * Reference:
 *  - https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
 */

var amqp = require('amqplib/callback_api');
var queue1 = 'aa';
var queue2 = 'bb';
var queue3 = 'cc';

var createChannelAndDoSomthingWithAAqueue = function(error0, connection) {
    if (error0) {
        throw error0;
    }
    
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue1, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue1);

        channel.consume(queue1, function(msg) {
            console.log(" [x] Received %s through queue: %s", msg.content.toString(), queue1);
        }, {
            noAck: true
        });
    });
}

var createChannelAndDoSomthingWithBBqueue = function(error0, connection) {
    if (error0) {
        throw error0;
    }
    
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue2, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue2);

        channel.consume(queue2, function(msg) {
            console.log(" [x] Received %s through queue: %s", msg.content.toString(), queue2);
        }, {
            noAck: true
        });
    });
}

var createChannelAndDoSomthingWithCCqueue = function(error0, connection) {
    if (error0) {
        throw error0;
    }
    
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue3, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue3);

        channel.consume(queue3, function(msg) {
            console.log(" [x] Received %s through queue: %s", msg.content.toString(), queue3);
        }, {
            noAck: true
        });
    });
}

amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5672}, createChannelAndDoSomthingWithAAqueue);
amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5673}, createChannelAndDoSomthingWithBBqueue);
amqp.connect({url: 'amqp://localhost', username: 'guest', password: 'guest', port: 5674}, createChannelAndDoSomthingWithCCqueue);
