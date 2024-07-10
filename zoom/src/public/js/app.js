// socket.io 연결
const socket = io();

// 선택자
const welcome = document.getElementById('welcome');
const nameForm = welcome.querySelector('#name');
const nameInput = nameForm.querySelector('input');
const nameBtn = nameForm.querySelector('button');
const roomNameForm = welcome.querySelector('#roomName');
const roomNameInput = roomNameForm.querySelector('input');
const roomNameBtn = roomNameForm.querySelector('button');
const room = document.getElementById('room');
const msgForm = room.querySelector('#msg');
const msgInput = room.querySelector('#msg input');
const msgBtn = room.querySelector('#msg button');

// main
roomNameInput.disabled = true;
roomNameBtn.disabled = true;
nameInput.focus();
// room
room.hidden = true;

// 방에 참가시 표시될 방 이름 할당
let roomName;

// 방 전체에 보낼 전체메세지 기능
const addMessage = (msg) => {
  const ul = room.querySelector('ul');
  const li = document.createElement('li');
  li.innerText = msg;
  ul.appendChild(li);
};

// 닉네임 제출 기능
const handleNicknameSubmit = (e) => {
  e.preventDefault();
  socket.emit('nickname', nameInput.value);
  nameInput.disabled = true;
  nameBtn.disabled = true;
  roomNameInput.disabled = false;
  roomNameBtn.disabled = false;
  roomNameInput.focus();
};
nameForm.addEventListener('submit', handleNicknameSubmit);

// 방에서 메세지 입력후 제출 기능
const handleMessageSubmit = (e) => {
  e.preventDefault();
  const value = msgInput.value;
  socket.emit('new_message', msgInput.value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  msgInput.value = '';
};

// 방 참가시 최초 동작 기능
const showRoom = () => {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector('h3');
  h3.innerText = `Room is ${roomName}`;
  // 방에 접속 후 즉시 새로운 form에 이벤트 장착
  msgInput.focus();
  msgForm.addEventListener('submit', handleMessageSubmit);
};

// 방 참가를 위한 제출 함수
const handleRoomSubmit = (e) => {
  e.preventDefault();
  roomName = roomNameInput.value;
  // 파라미터는 원하는만큼 보낼수 있음 (type, ...args)
  socket.emit('enter_room', roomNameInput.value, showRoom); // 서버로 전달
  roomNameInput.value = ''; // 제출후 초기화
};
roomNameForm.addEventListener('submit', handleRoomSubmit);

// 서버로 부터 전달받은 이벤트들 감지 (첫번째 인자에 이벤트명을 기입하여 구분)
socket.on('welcome', (userName) => {
  addMessage(`${userName} Joined!`);
});
socket.on('bye', (userName) => {
  addMessage(`${userName} left!`);
});
socket.on('new_message', (msg) => {
  addMessage(msg);
});
socket.on('room_change', (data) => {
  console.log(data); // 방 정보 얻음
});

// ws library 연결
// // 선택자
// const messageList = document.querySelector('ul');
// const nickForm = document.querySelector('#nick');
// const messageForm = document.querySelector('#message');

// // WebSocket Logic
// // 연결문 (socket.io 사용시 별도로 연결해야함)
// const socket = new WebSocket(`ws://${window.location.host}`);

// // 최초 연결 확인
// socket.addEventListener('open', () => {
//   console.log('Open WebSocket Connection ⭕️');
// });

// // 서버로부터 메세지 받기
// socket.addEventListener('message', (message) => {
//   const { data } = message;
//   // console.log('New Message:', data);
//   // 메세지를 전달 받을때마다 리스트로 보여주기
//   const li = document.createElement('li');
//   li.innerText = data;
//   messageList.append(li);
// });

// // 연결 해제 (웹소켓 서버가 다운됐을때)
// socket.addEventListener('close', () => {
//   console.log('Close WebSocket Connection ❌');
// });

// // 보낼 메세지를 JSON.stringify로 변환 함수
// const mageMessage = (type, payload) => {
//   const msg = { type, payload };
//   return JSON.stringify(msg);
// };

// // 서버로 메세지 전달 (nickname/message)
// // 닉네임 입력란
// const handleNickSubmit = (e) => {
//   e.preventDefault();
//   const input = nickForm.querySelector('input');
//   socket.send(mageMessage('nickname', input.value));
//   // input.value = ''; // 제출 후 입력란 초기화
// };
// nickForm.addEventListener('submit', handleNickSubmit);

// // 메세지 입력란
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const input = messageForm.querySelector('input');
//   //   console.log(input.value);
//   socket.send(mageMessage('message', input.value));
//   input.value = ''; // 제출 후 입력란 초기화
// };
// messageForm.addEventListener('submit', handleSubmit);
