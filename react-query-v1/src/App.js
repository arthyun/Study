import './styles/index.css'
import React, { useCallback, useMemo, useState } from 'react';
import Example from './Example';
import Todos from './Todos';
import KyeolJae from './결재선';
import { useForm } from 'react-hook-form';


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

  const [addName, setAddName] = useState('');

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={() => setEx((curr) => (curr + 1))}>X</button>
      <button onClick={() => setWhy((curr) => (curr + 1))}>Y</button>

      <Example />
      <Todos />

      <br/>https://bard.google.com/?hl=en
      {/* 검토자 기능 테스트 */}
      {/* <input value={addName} placeholder='공란' disabled />
      <button onClick={() => setModalOpen(!modalOpen)}>선택</button>
      {modalOpen ? <KyeolJae modalOpen={modalClose} setAddName={setAddName} /> : null} */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input readOnly {...register('name')} placeholder='선택하세요.' />
        <button type='button' onClick={() => setModalOpen(!modalOpen)}>선택</button>
        <button type='submit'>저장</button>
      </form>
      {modalOpen ? <KyeolJae setValue={setValue} modalOpen={modalClose}/> : null}
    </div>
  );
}

export default App;
