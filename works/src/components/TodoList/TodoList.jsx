import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleSubmit = (todoItem) => {
    this.setState({ data: [...this.state.data, todoItem] });
  };

  handleCkickRemove = (eRomove) => {
    this.setState({
      data: [
        ...this.state.data.filter((item, index) => {
          const itemId = item.title + "_" + index;

          return itemId !== eRomove;
        }),
      ],
    });
  };

  render() {
    return (
      <div className="todo-list">
        <div className="text-center">
          <h1>Todo List</h1>
        </div>
        <Container>
          <Row>
            <Col xs={6}>
              <TodoForm onSubmit_1={this.handleSubmit} />
            </Col>
            <Col xs={6}>
              <Row>
                {this.state.data.map(({ title, description }, index) => {
                  return (
                    <Col
                      key={title + "_" + index}
                      id={title + "_" + index}
                      xs={4}
                      className="mb-4"
                    >
                      <TodoItem
                        title={title}
                        body={description}
                        id={title + "_" + index}
                        Click_1={this.handleCkickRemove}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TodoList;