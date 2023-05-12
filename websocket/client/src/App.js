import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const nickname = useRef();
  const message = useRef();
  const ws = useRef();

  const [chatMessages, setChatMessages] = useState([]);

  //이 부분이 관건(수정 전 코드는 무한루프 발생)
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8001");

    ws.current.onmessage = (e) => {
      console.log(e);
      const newMessage = e.data;
      setChatMessages(prev => [...prev, newMessage]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  function sendMessage() {
    const fullMessage = `${nickname.current.value}: ${message.current.value}`;
    if (nickname.current.value && message.current.value) {
      ws.current.send(fullMessage);
      nickname.current.setAttribute('disabled', 'disabled');
      message.current.value = '';
    } else {
      alert('공백이 없게 하세요.');
    }
  }

  const ChatPara = ({ message }) => {
    return (
      <p>{message}</p>
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='chatZone'>
          <h1>Chat Room</h1>
          <input ref={nickname} type='text' id='nickname' placeholder='닉네임' style={{ width: '50px' }} />
          <input ref={message} type='text' id='message' placeholder='메세지' style={{ width: '200px' }} />
          <button onClick={sendMessage}>전송</button>
        </div>

        <div id='chat-log'>
          {chatMessages.map((msg, i) => <ChatPara key={i} message={msg} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
