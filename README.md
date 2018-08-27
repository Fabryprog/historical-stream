# Historical Stream Data

Using MQTT to retrieve historical data (without db)

## Node.js usage

### Install node.js dependencies

> npm install

### Edit config file (config.js)

```
{
  "connection": {
    "url": "mqtt://localhost:1883"
  },
  "topic": {
    "listen": [
      "/test/+/topic"
    ],
    "suffix": "/historical-stream"
  },
  "max": 5
}
```

connection.url = Mqtt broker connection url
topic.listen = List of topic to support historical stream data
topic.suffix = Topic to send historical stream data
max = Max items on memory (every topic)

### Launch

> nodejs index.js

## Docker

### Build

> docker build -t historical-stream .

### Edit config file (config.js)

### Launch

> docker run --name historical-stream -v $PWD/config.js:/usr/src/app/config.js historical-stream:latest
