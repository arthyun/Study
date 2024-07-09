// 선택자
const messageList = document.querySelector('ul');
const nickForm = document.querySelector('#nick');
const messageForm = document.querySelector('#message');

// WebSocket Logic
// 연결문
const socket = new WebSocket(`ws://${window.location.host}`);

// 최초 연결 확인
socket.addEventListener('open', () => {
  console.log('Open WebSocket Connection ⭕️');
});

// 서버로부터 메세지 받기
socket.addEventListener('message', (message) => {
  const { data } = message;
  // console.log('New Message:', data);
  // 메세지를 전달 받을때마다 리스트로 보여주기
  const li = document.createElement('li');
  li.innerText = data;
  messageList.append(li);
});

// 연결 해제 (웹소켓 서버가 다운됐을때)
socket.addEventListener('close', () => {
  console.log('Close WebSocket Connection ❌');
});

// 보낼 메세지를 JSON.stringify로 변환 함수
const mageMessage = (type, payload) => {
  const msg = { type, payload };
  return JSON.stringify(msg);
};

// 서버로 메세지 전달 (nickname/message)
// 닉네임 입력란
const handleNickSubmit = (e) => {
  e.preventDefault();
  const input = nickForm.querySelector('input');
  socket.send(mageMessage('nickname', input.value));
  input.value = ''; // 제출 후 입력란 초기화
};
nickForm.addEventListener('submit', handleNickSubmit);

// 메세지 입력란
const handleSubmit = (e) => {
  e.preventDefault();
  const input = messageForm.querySelector('input');
  //   console.log(input.value);
  socket.send(mageMessage('message', input.value));
  input.value = ''; // 제출 후 입력란 초기화
};
messageForm.addEventListener('submit', handleSubmit);
