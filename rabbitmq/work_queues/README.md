
# Node.js code for RabbitMQ tutorials - "Work Queues"


![](https://www.rabbitmq.com/img/tutorials/python-two.png)


Here you can find JavaScript (Node) code examples from [RabbitMQ tutorials](https://www.rabbitmq.com/getstarted.html).

To successfully use the examples you will need a running RabbitMQ server.


## 修改原本的Hello World!程式碼
修改 `send.js` 範例變成 `new_task.js`
修改 `receive.js` 範例變成 `worker.js`

範例使用Round-robin dispatching分發給兩個不同 worker (These consoles will be our two consumers - C1 and C2.)。


```command
./new_task.js First message.
./new_task.js Second message..
./new_task.js Third message...
./new_task.js Fourth message....
./new_task.js Fifth message.....
```

會依照 round-robin方式，一次傳給worker 1，另一次就會傳給另個 worker 2
```command
# shell 1
./worker.js
# => [*] Waiting for messages. To exit press CTRL+C
# => [x] Received 'First message.'
# => [x] Received 'Third message...'
# => [x] Received 'Fifth message.....'
```

```command
# shell 2
./worker.js
# => [*] Waiting for messages. To exit press CTRL+C
# => [x] Received 'Second message..'
# => [x] Received 'Fourth message....'
```



## Reference
- https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html
- https://github.com/pardahlman/docker-rabbitmq-cluster/tree/master