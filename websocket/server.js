const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//ws 서버열기
const { WebSocketServer } = require('ws');
//wss 생성
const wss = new WebSocketServer({ port: 8001 });
// 웹소켓 서버 연결 이벤트 바인드(기본)
// wss.on("connection", (ws, request) => {
//     // 데이터 수신 이벤트 바인드
//     ws.on("message", data => {
//         console.log(`Received from user: ${data}`); //유저가 보낸 데이터
//         ws.send(`Received ${data}`); //서버의 답장
//     });
//     //wss 연결 직후 해당 클라이언트로 데이터 전송
//     ws.send(`Hello, ${request.socket.remoteAddress}`);
// });

//접속 했을때
wss.on('connection', (ws, request) => {
    wss.clients.forEach(client => {
        client.send(`새로운 유저가 접속했습니다. 현재 유저는 ${wss.clients.size}명 입니다.`);
    });
    console.log(`새로운 유저 접속: ${request.socket.remoteAddress}`);

    //접속 끊었을 때
    ws.on("close", () => {
        wss.clients.forEach((client) => {
            client.send(`유저 한명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
        });
    });

    //채팅 전송 버튼을 눌렀을 때
    ws.on("message", data => {
        wss.clients.forEach(client => {
            client.send(data.toString());
            console.log(data.toString());
        });
    });
});




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/build'));

//포트 연결 확인
app.listen(8000, () => {
    console.log('8000 포트에 연결되었습니다.');
});