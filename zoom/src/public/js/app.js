// socket.io 연결
const socket = io();

// webRTC
const myFace = document.getElementById('myFace');
const muteBtn = document.getElementById('mute');
const cameraBtn = document.getElementById('camera');
const camerasSelect = document.getElementById('cameras');

let myStream;
let muted = false;
let cameraOff = false;

const getCameras = async () => {
  try {
    // 최초 연결되어 있는 모든 기기 확인 후 비디오 기기만 추출
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === 'videoinput');
    // select를 통해 연결되어 있는 다른 카메라를 선택할 수 있게함
    cameras.forEach((camera) => {
      const option = document.createElement('option');
      option.value = camera.deviceId;
      option.innerText = camera.label;
      camerasSelect.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
};

// 최초 실행문
const getMedia = async () => {
  try {
    // 첫번째 동작
    myStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });
    console.log(myStream);
    myFace.srcObject = myStream;
    // 두번째 동작
    await getCameras();
  } catch (error) {
    console.log(error);
  }
};
getMedia();

// 조건에 맞게 음소거 및 카메라 끄기/켜기
const handleMuteClick = () => {
  // 마이크 켜고/끄기 기능
  myStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
  if (!muted) {
    muteBtn.innerText = 'Unmute';
    muted = true;
  } else {
    muteBtn.innerText = 'Mute';
    muted = false;
  }
};
const handleCameraClick = () => {
  // 카메라 켜고/끄기 기능
  myStream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
  if (cameraOff) {
    cameraBtn.innerText = 'Turn Camera Off';
    cameraOff = false;
  } else {
    cameraBtn.innerText = 'Turn Camera On';
    cameraOff = true;
  }
};
muteBtn.addEventListener('click', handleMuteClick);
cameraBtn.addEventListener('click', handleCameraClick);

// 웹소켓 마무리 (이하)
// // 선택자
// const welcome = document.getElementById('welcome');
// const nameForm = welcome.querySelector('#name');
// const nameInput = nameForm.querySelector('input');
// const nameBtn = nameForm.querySelector('button');
// const roomNameForm = welcome.querySelector('#roomName');
// const roomNameInput = roomNameForm.querySelector('input');
// const roomNameBtn = roomNameForm.querySelector('button');
// const room = document.getElementById('room');
// const msgForm = room.querySelector('#msg');
// const msgInput = room.querySelector('#msg input');
// const msgBtn = room.querySelector('#msg button');

// // main
// roomNameInput.disabled = true;
// roomNameBtn.disabled = true;
// nameInput.focus();
// // room
// room.hidden = true;

// // 방에 참가시 표시될 방 이름 할당
// let roomName;

// // 방 전체에 보낼 전체메세지 기능
// const addMessage = (msg) => {
//   const ul = room.querySelector('ul');
//   const li = document.createElement('li');
//   li.innerText = msg;
//   ul.appendChild(li);
// };

// // 닉네임 제출 기능
// const handleNicknameSubmit = (e) => {
//   e.preventDefault();
//   socket.emit('nickname', nameInput.value);
//   nameInput.disabled = true;
//   nameBtn.disabled = true;
//   roomNameInput.disabled = false;
//   roomNameBtn.disabled = false;
//   roomNameInput.focus();
// };
// nameForm.addEventListener('submit', handleNicknameSubmit);

// // 방에서 메세지 입력후 제출 기능
// const handleMessageSubmit = (e) => {
//   e.preventDefault();
//   const value = msgInput.value;
//   socket.emit('new_message', msgInput.value, roomName, () => {
//     addMessage(`You: ${value}`);
//   });
//   msgInput.value = '';
// };

// // 방 참가시 최초 동작 기능
// const showRoom = (count) => {
//   welcome.hidden = true;
//   room.hidden = false;
//   const h3 = room.querySelector('h3');
//   h3.innerText = `Room is ${roomName} (${count})`;
//   // 방에 접속 후 즉시 새로운 form에 이벤트 장착
//   msgInput.focus();
//   msgForm.addEventListener('submit', handleMessageSubmit);
// };

// // 방 참가를 위한 제출 함수
// const handleRoomSubmit = (e) => {
//   e.preventDefault();
//   roomName = roomNameInput.value;
//   // 파라미터는 원하는만큼 보낼수 있음 (type, ...args)
//   socket.emit('enter_room', roomNameInput.value, showRoom); // 서버로 전달
//   roomNameInput.value = ''; // 제출후 초기화
// };
// roomNameForm.addEventListener('submit', handleRoomSubmit);

// // 서버로 부터 전달받은 이벤트들 감지 (첫번째 인자에 이벤트명을 기입하여 구분)
// socket.on('welcome', (userName, count) => {
//   const h3 = room.querySelector('h3');
//   h3.innerText = `Room is ${roomName} (${count})`;
//   addMessage(`${userName} Joined!`);
// });
// socket.on('bye', (userName, count) => {
//   const h3 = room.querySelector('h3');
//   h3.innerText = `Room is ${roomName} (${count})`;
//   addMessage(`${userName} left!`);
// });
// socket.on('new_message', (msg) => {
//   addMessage(msg);
// });
// socket.on('room_change', (rooms) => {
//   // console.log(roomData); // 방 정보 얻음
//   // 활성화된 방 이름 표시하기
//   const roomList = welcome.querySelector('ul');
//   // 방을 떠났을때
//   if (rooms.length === 0) {
//     roomList.innerHTML = '';
//     return;
//   }
//   rooms.forEach((roomName) => {
//     const li = document.createElement('li');
//     li.innerText = roomName;
//     roomList.appendChild(li);
//   });
// });

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
