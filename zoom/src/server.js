import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { instrument } from '@socket.io/admin-ui';
// import { WebSocketServer } from 'ws';

// Http
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.render('home'));

// 하나의 서버에서 http와 websocket 둘다 동작하게 만들기 (같은포트 사용)
const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, {
  cors: {
    origin: ['https://admin.socket.io'],
    credentials: true
  }
}); // socket.io
instrument(wsServer, {
  auth: false
});
// const wss = new WebSocketServer({ server }); // ws

// webRTC
wsServer.on('connection', (socket) => {
  // 전체 동작 함수
  socket.on('join_room', (roomName) => {
    // 입력한 이름으로 방 참가
    socket.join(roomName);
    socket.to(roomName).emit('welcome');
    // 전달받은 함수는 브라우저에서 실행됨 (서버는 클라이언트 코드를 실행할 수 없음 보안위배)
    // const rooms = wsServer.sockets.adapter.rooms; // 접속자 수 확인용
    // 방의 모든 사용자에게 메세지를 보냄 (방이름이 아닌 id를 넣어서 보내면 개인적으로 보냄)
    // socket.to(roomName).emit('welcome', socket.nickname, countRoom(roomName)); // 방을 생성 후 누군가가 접속해야지 내게 보인다.
    // // 방 전체에 변화 알림
    // wsServer.sockets.emit('room_change', publicRooms());
  });
  // 클라이언트에서 전달받은 offer를 모든 방에 뿌려줌
  socket.on('offer', (offer, roomName) => {
    socket.to(roomName).emit('offer', offer);
  });
  // 클라이언트에서 전달받은 answer를 모든 방에 뿌려줌
  socket.on('answer', (answer, roomName) => {
    socket.to(roomName).emit('answer', answer);
  });
});

// 서버 연결 확인
httpServer.listen(3000, () => console.log('Listening on PORT 3000..'));

// 웹소켓 마무리 (이하)
// // 부가 함수들
// const publicRooms = () => {
//   // 공개방을 얻으려면 rooms에서 sids에 존재하지 않는 방을 추출하면됌
//   const { rooms, sids } = wsServer.sockets.adapter;
//   const publicRooms = [];
//   // Map/Set 구조 분석
//   rooms.forEach((value, key) => {
//     if (sids.get(key) === undefined) {
//       publicRooms.push(key);
//     }
//   });
//   return publicRooms;
// };
// // 방에 접속한 인원 크기 구하기
// const countRoom = (roomName) => {
//   const { rooms } = wsServer.sockets.adapter;
//   return rooms.get(roomName)?.size;
// };

// // socket.io
// wsServer.on('connection', (socket) => {
//   // // 최초 연결 확인
//   // console.log(socket);

//   // // rooms, sids 확인방법
//   // console.log(wsServer.sockets.adapter.rooms);

//   // 닉네임 감지하여 소켓에 저장
//   socket.on('nickname', (nickname) => (socket['nickname'] = nickname));

//   // 어떤 이벤트중인지 감지
//   socket.onAny((event) => {
//     console.log(`Socket Event: ${event}`);
//   });

//   // 전체 동작 함수
//   socket.on('enter_room', (roomName, callback) => {
//     // 입력한 이름으로 방 참가
//     socket.join(roomName);
//     // 전달받은 함수는 브라우저에서 실행됨 (서버는 클라이언트 코드를 실행할 수 없음 보안위배)
//     const rooms = wsServer.sockets.adapter.rooms; // 접속자 수 확인용
//     callback(rooms.get(roomName)?.size);
//     // 방의 모든 사용자에게 메세지를 보냄 (방이름이 아닌 id를 넣어서 보내면 개인적으로 보냄)
//     socket.to(roomName).emit('welcome', socket.nickname, countRoom(roomName)); // 방을 생성 후 누군가가 접속해야지 내게 보인다.
//     // 방 전체에 변화 알림
//     wsServer.sockets.emit('room_change', publicRooms());
//   });

//   // 방에서 메세지 입력시
//   socket.on('new_message', (msg, room, callback) => {
//     socket.to(room).emit('new_message', `${socket.nickname}: ${msg}`);
//     callback();
//   });

//   // 방 떠나중일때
//   // socket.leave(roomName);
//   socket.on('disconnecting', () => {
//     socket.rooms.forEach((room) => socket.to(room).emit('bye', socket.nickname, countRoom(room) - 1));
//   });

//   // 완전히 떠났을때 방 전체에 변화 알림
//   socket.on('disconnect', () => {
//     wsServer.sockets.emit('room_change', publicRooms());
//   });
// });

// // ws library
// const sockets = []; // 접속자 확인용

// wss.on('connection', (socket) => {
//   // node 서버에 연결정보 표시
//   console.log('Connected to Browser ⭕️');

//   // 페이지 접속시 접속자 확인을 위해 접속자 순서대로 배열에 추가함
//   // 페이지 접속시 최초 접속자의 닉네임을 미지정으로 분류해둠
//   sockets.push(socket);
//   socket['nickname'] = 'Unknown';

//   // 수신 이벤트 관련 (브라우저에서 메세지 전달받을때)
//   socket.on('message', (message, isBinary) => {
//     message = isBinary ? message : message.toString(); // 메세지가 바이너리가 아닐때 변환해서 보내주어야함
//     // 문자열 형태로 받은 값을 JSON형태로 우선 변환
//     const msgJson = JSON.parse(message);
//     // 접속중인 모든 사용자가 메세지를 보낼 수 있게함 (다시 브라우저로 메세지 전달)
//     switch (msgJson.type) {
//       case 'nickname':
//         socket['nickname'] = msgJson.payload;
//         break;
//       case 'message':
//         sockets.forEach((item) => item.send(`${socket.nickname}: ${msgJson.payload}`));
//         break;
//       default:
//         break;
//     }
//   });
//   socket.on('close', () => {
//     console.log('Disconnected from the Browser ❌');
//   });

//   // // 연결시 브라우저로 보내는 초기 값
//   // socket.send('Welcome to WebSocket Server!!!');
// });
