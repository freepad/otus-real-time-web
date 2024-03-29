import { WebSocketServer } from 'ws';
import { faker } from '@faker-js/faker';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  setInterval(() => {
    ws.send(`Сейчас на радио OTUS играет ${faker.music.songName()}`);
  }, 1000)
});
