// import { useRef } from 'react';
// import styled from 'styled-components';
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import '@toast-ui/editor/dist/i18n/ko-kr';

// function EditorBox({ onContentChange }) {
//   const editorRef = useRef();
//   const WrappingEditor = styled.div`
//     width: 720px;
//   `;

//   const onChange = () => {
//     const data = editorRef.current.getInstance().getHTML();
//     onContentChange(!!data);
//   };

//   return (
//     <WrappingEditor>
//       <Editor
//         placeholder="글쓰기"
//         initialValue=" "
//         previewStyle="vertical"
//         height="260px"
//         width="80%"
//         initialEditType="wysiwyg"
//         useCommandShortcut={false}
//         ref={editorRef}
//         onChange={onChange}
//         language="ko-KR"
//       />
//     </WrappingEditor>
//   );
// }
// export default EditorBox;
