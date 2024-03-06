import React, { useMemo, useState } from 'react';
// import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

// const StyledReactQuill = styled(ReactQuill)`
//   /* display: flex; */
//   padding: 16px 1px 16px 1px;
//   /* justify-content: center; */
//   /* align-items: center; */
// `;

function EditorBox({ onContentChange }) {
  const [values, setValues] = useState('');

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  const handleKeyUp = () => {
    if (values === '' || values === '<p><br></p>') {
      onContentChange(false);
    } else {
      onContentChange(values);
    }
    console.log(values);
  };

  return (
    <ReactQuill
      theme="snow"
      style={{
        width: '100%',
        minWidth: '320px',
        height: '250px',
        minHeight: '200px',
        padding: '16px 1px 16px 1px',
        marginBottom: '50px',
        borderRadius: 'lpx',
      }}
      modules={modules}
      formats={formats}
      onChange={setValues}
      onKeyUp={handleKeyUp}
    />
  );
}
export default EditorBox;
