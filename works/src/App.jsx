import React, { Fragment } from "react";
import PostCatalog from "./PostCatalog";
function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <h1 className="text-center">Articles</h1>
        <PostCatalog/>
      </div>
    </div>
  );
}

export default App;
