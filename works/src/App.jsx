import Collapse from  './components/Collapse';
import React from "react";

function App() {
  const text = "collapse me";
  return (
    <div className="App">
      <>
        <Collapse text={text} opened={false} />
      </>
    </div>
  );
}

export default App;
