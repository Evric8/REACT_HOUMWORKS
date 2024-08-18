import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import MarkdownEditor from "./component/MarkdownEditor";

function App() {
  return (
    <div className="App">
      <div className="container">
        <br/>
        <h1 className="text-center">Editor</h1>
        <MarkdownEditor onContentChange={console.log}/>
      </div>
    </div>
  );
}

export default App;
