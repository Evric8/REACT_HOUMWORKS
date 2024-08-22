function TodoItem({ tasks, onRemove }) {
  const li = tasks.map((task) => {
    return (
      <>
        <li key={task.id}>
          <div className="row">
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onRemove(task.id)}
              >
                -
              </button>
            </div>
            <div className="col">{task.text}</div>
          </div>
        </li>
        <br />
      </>
    );
  });

  return <ul>{li}</ul>;
}

export default TodoItem;