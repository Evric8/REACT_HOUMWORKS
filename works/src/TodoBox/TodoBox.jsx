import React, { Component, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoBox = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (valueFromForm) => {
    setTasks([{ id: uuidv4(), text: valueFromForm }, ...tasks]);
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col>
          <TodoForm onSubmit_1={handleSubmit} />
        </Col>
        <Col>
          <Row>
            <TodoItem tasks={tasks} onRemove={handleRemove} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoBox;