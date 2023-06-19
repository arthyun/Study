import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Editor from "./components/Editor";

const App = () => {
  const [useEditor, setUseEditor] = useState(false);
  const onClick = () => {
    setUseEditor(!useEditor);
  };

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>

      <div className="editorZone">
        <button onClick={onClick}>상태 체크</button>
        {useEditor ? <Editor/> : <p>Loading...</p>}
      </div>
    </Fragment>
  );
};

export default App;