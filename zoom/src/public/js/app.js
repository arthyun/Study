// 선택자
const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');

// WebSocket 연결
const socket = new WebSocket(`ws://${window.location.host}`);

// WebSocket Events
// 연결 확인
socket.addEventListener('open', () => {
  console.log('Open WebSocket Connection ⭕️');
});

// 메세지 받기
socket.addEventListener('message', (message) => {
  const { data } = message;
  console.log('New Message:', data);
});

// 연결 해제
socket.addEventListener('close', () => {
  console.log('Close WebSocket Connection ❌');
});

// 서버로 메세지 전달
const handleSubmit = (e) => {
  e.preventDefault();
  const input = messageForm.querySelector('input');
  //   console.log(input.value);
  socket.send(input.value);
  input.value = '';
};
messageForm.addEventListener('submit', handleSubmit);
