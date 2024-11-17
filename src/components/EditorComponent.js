import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EditorComponent = () => (
  <Editor
    apiKey="YOUR_TINYMCE_API_KEY"
    initialValue="<p>This is the initial content of the editor</p>"
    init={{
      height: 500,
      menubar: false,
      plugins: ['advlist autolink lists link image charmap print preview anchor'],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
    }}
  />
);

export default EditorComponent;
