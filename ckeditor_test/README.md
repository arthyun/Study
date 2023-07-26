# CkEditor5 붙여넣기 테스트

1. CkEditor5의 Online Builder를 사용하여 zip파일을 다운받는다.
2. zip파일 압축 해제 후 폴더명을 ckeditor5로 변경한다. 이후 CRA 최상위 폴더에 배치한다. (node_modules 폴더와 동등한 위치)
3. npm add file:./ckeditor5 입력하기 (npm install도 될듯?)
4. ckeditor 컴포넌트 생성 후 아래와 같이 사용하기

- import React from 'react';
  import { CKEditor } from '@ckeditor/ckeditor5-react';
  import Editor from 'ckeditor5-custom-build/build/ckeditor';

  function App() {
  return (

  <div className="App">
  <h2>손현호 - CKEditor5</h2>
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
