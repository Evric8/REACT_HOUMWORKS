import { useState } from "react";

function TodoForm({ onSubmit_1 }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (input.trim() !== "") {
      onSubmit_1(input);
      setInput("");
    }
  };

  return (
    <>
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={handleAddTask}>
            <div className="me-3">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                required=""
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoForm;