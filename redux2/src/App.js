import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //States
  const [text, setText] = useState('');

  const onChangeSelect = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

      <div className='formTag'>
        <form onSubmit={onSubmitHandle}>
          <select id='mySelect' onChange={onChangeSelect}>
            <option value='첫번째'>첫번째</option>
            <option value='두번째'>두번째</option>
            <option value='세번째'>세번째</option>
            <option value='네번째'>네번째</option>
            <option value='다섯번째'>다섯번째</option>
          </select>
          <button>제출</button>
        </form>

        <ul className='textZone'>
          {/* {
            list.map((el, i) => 
              <li key={i}>
                {el}
              </li>
            )
          } */}
        </ul>
      </div>
    </div>
  );
}

export default App;
