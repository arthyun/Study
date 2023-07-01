import './styles/index.css'
import React, { useCallback, useMemo, useState } from 'react';
import Example from './Example';
import Todos from './Todos';
import KyeolJae from './결재선';


function App(){
  const [ex, setEx] = useState(0);
  const [why, setWhy] = useState(0);

  useMemo(() => {
    console.log(ex, why)
  }, [ex, why]);

  const [name, setName] = useState('');
  const onSave = useCallback(() => {
    console.log(name);
  }, [name]);

  //Modal on/off
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = useCallback(() => {
    setModalOpen(!modalOpen)
  },[modalOpen])

  return (
    <div className="App">
      {modalOpen ? <KyeolJae modalOpen={modalClose} /> : console.log(modalOpen)}
      <button onClick={() => setModalOpen(!modalOpen)} style={{display: 'block'}}>Modal</button>
      <br/>
      <button onClick={() => setEx((curr) => (curr + 1))}>X</button>
      <button onClick={() => setWhy((curr) => (curr + 1))}>Y</button>

      <Example />
      <Todos />
    </div>
  );
}

export default App;
