import React, { useState, useMemo } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';

function Richtext(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [contractDetails, setContractDetails] = useState('');
  const handleChange = (data) => {
    setEditorState(data);
    // console.log('editor data: ' + editorState.getCurrentContent());
    console.log(htmlData);
    props.returnedContractDetails(htmlData);
  };
  var htmlData = useMemo(
    () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState]
  );

  const toolbarOptions = {
    options: ['inline', 'fontSize', 'image', 'emoji'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough'],
    },
  };

  // function handleChange(event) {
  //   console.log('The email is: ' + event.target.value);
  //   setContractDetails(event.target.value);
  // }

  return (
    <div className="app">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleChange}
        wrapperClassName="editor-wrapper"
        editorClassName="message-editor"
        toolbarClassName="message-toolbar"
        toolbar={toolbarOptions}
        // onChange={handleChange}
      />
    </div>
  );
}
export default Richtext;
