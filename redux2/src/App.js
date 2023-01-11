import logo from './logo.svg';
import './App.css';
import store from './Store';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  let [cnt, setCnt] = useState(0);

  const textChange = (e) => {
    setText(e.target.value);
  }

  store.subscribe(() => {
    setText(store.getState().para[0].text);
    setCnt(store.getState().para[0].id);
  });

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

      <div className='formTag'>
        <form>
          <input type='text' value={text} onChange={textChange} required />
          <input type='button' value='작성' onClick={() => {
                setCnt(cnt++);
                store.dispatch( {type:'INCREMENT', id: cnt, para: text} );
          }} />
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
