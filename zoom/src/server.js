import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

// Http
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('home'));

// 하나의 서버에서 http와 websocket 둘다 동작하게 만들기 (같은포트 사용)
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// WebSocket
const sockets = []; // 접속자 확인용

wss.on('connection', (socket) => {
  // node 서버에 연결정보 표시
  console.log('Connected to Browser ⭕️');

  // 페이지 접속시 접속자 확인을 위해 접속자 순서대로 배열에 추가함
  sockets.push(socket);

  // 수신 이벤트 관련
  socket.on('message', (message, isBinary) => {
    // console.log(message);
    // socket.send(message);
    message = isBinary ? message : message.toString(); // 메세지가 바이너리가 아닐때 변환해서 보내주어야함
    // 접속중인 모든 사용자가 메세지를 보낼 수 있게함
    sockets.forEach((aSocket) => {
      aSocket.send(message);
    });
  });
  socket.on('close', () => {
    console.log('Disconnected from the Browser ❌');
  });

  // 연결시 브라우저로 보내는 초기 값
  socket.send('Welcome to WebSocket Server!!!');
});

// 서버 연결 확인
server.listen(3000, () => console.log('Listening on PORT 3000... http/ws'));
