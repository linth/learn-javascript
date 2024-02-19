/**
 * imporve receive_log.js (重構改善範例 - 使用 class based 進行改寫)
 * 
 * 
 */

const amqp = require('amqplib/callback_api');

class RabbitMQConsumer {
  constructor(url, username, password) {
    this.url = url;
    this.username = username;
    this.password = password;
    this.connection = null;
    this.channel = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      amqp.connect({ url: this.url, username: this.username, password: this.password }, (error, connection) => {
        if (error) {
          reject(error);
        } else {
          this.connection = connection;
          resolve(this.connection);
        }
      });
    });
  }

  createChannel() {
    return new Promise((resolve, reject) => {
      if (!this.connection) {
        reject(new Error('Connection not established.'));
        return;
      }
      this.connection.createChannel((error, channel) => {
        if (error) {
          reject(error);
        } else {
          this.channel = channel;
          resolve(this.channel);
        }
      });
    });
  }

  consumeMessages(exchange, callback) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.createChannel();
        this.channel.assertExchange(exchange, 'fanout', { durable: false });
        const { queue } = await this.channel.assertQueue('', { exclusive: true });
        console.log(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);
        this.channel.bindQueue(queue, exchange, '');
        this.channel.consume(queue, (msg) => {
          if (msg.content) {
            callback(msg.content.toString());
          }
        }, { noAck: true });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  closeConnection() {
    if (this.connection) {
      this.connection.close();
    }
  }
}

/**
 * example case
 * 
 */
const consumer = new RabbitMQConsumer('amqp://localhost', 'guest', 'guest');
consumer.connect()
  .then(() => consumer.consumeMessages('logs', (content) => console.log(` [x] ${content}`)))
  .catch((error) => console.error(error));
