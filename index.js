var mqtt = require('mqtt')
var config = require('./config.json');

var client = mqtt.connect(config.connection.url)

const SUFFIX = config.topic.suffix

var messages = [];

client.on('connect', function () {
  for(idx in config.topic.listen) {
    client.subscribe(config.topic.listen[idx], function (err, granted) {
      if (!err) {
        console.log("Listening on " + granted[0].topic + " topic with qos " + granted[0].qos)
      }
    })
  }
})


client.on('message', function (topic, message) {
  messages.unshift(message.toString());
  messages = messages.slice(0, config.max)

  client.publish(topic + SUFFIX, JSON.stringify(messages))
})
