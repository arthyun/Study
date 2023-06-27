import React, { useCallback, useMemo, useState } from 'react';
import Example from './Example';
import Todos from './Todos';


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

  return (
    <div className="App">
      <button onClick={() => setEx((curr) => (curr + 1))}>X</button>
      <button onClick={() => setWhy((curr) => (curr + 1))}>Y</button>

      <Example />
      <Todos />
    </div>
  );
}

export default App;
