import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from './TodoList/TodoList';
import TodoItemDetails from './TodoItemDetails/TodoItemDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
