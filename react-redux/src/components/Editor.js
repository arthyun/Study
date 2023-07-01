import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        console.log(data);
    };

    return (
    <div className="editor">
        {/* <h2>CKEditor5 in React</h2>
        <CKEditor 
            data="<p>이곳에 입력하세요.</p>" 
            editor={ClassicEditor} 
            onChange={handleEditorChange} 
        /> */}
        <iframe className="editor_iframe" 
        src="https://comp.namoeditor.co.kr/ce4/homepage/sample/iframe.html" 
        width="100%" 
        height="700px" title='namoEditor'>
        </iframe>
    </div>
    );
};

export default Editor;