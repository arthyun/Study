import logo from './logo.svg';
import './App.css';
import store from './Store';
import { useState } from 'react';

function App() {
  const [text1, setText1] = useState([]);

  const textChange = (e) => {
    setText1([e.target.value]);
    console.log(text1);
  }

  const list = store.getState().para;
  // console.log(list);

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

      <div className='formTag'>
        <form>
          <input type='text' value={text1} onChange={textChange} required />
          <button onClick={(e) => {
            e.preventDefault();
            store.dispatch( {type:'INCREMENT', text: text1} );
          }}>작성</button>
        </form>

        <ul className='textZone'>
          {/* {
            text.map((el, i) => 
              <li key={i}>
                {el}
              </li>
            )
          } */}
          {
            list.map((el, i) => 
              <li key={i}>
                {el}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
