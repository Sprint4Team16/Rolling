import React, { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TEXT_FORMAT } from '../../constants/TEXT_SET';

function EditorBox({ content = '', onContentChange }) {
  const [values, setValues] = useState(content);

  useEffect(() => {
    setValues(content);
  }, [content]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large'] }],
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
      formats={TEXT_FORMAT}
      value={values}
      onChange={setValues}
      onKeyUp={handleKeyUp}
    />
  );
}
export default EditorBox;
