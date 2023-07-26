import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

function App() {
  return (
    <div className="App">
      <h2>손현호2 - CKEditor5</h2>
      <CKEditor
        editor={Editor}
        data="<p>Hello from CKEditor 5!</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
}

export default App;
