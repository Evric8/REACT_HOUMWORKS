import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  handelClickRemove = (e) => {
    this.props.Click_1(e.target.offsetParent.id)
  };

  render() {
    const { title, body, id } = this.props;

    return (
      <Card id={id}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button onClick={this.handelClickRemove} variant="primary">
            Remove
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

TodoItem.propTypes = {
  title: propTypes.string,
  body: propTypes.string,
  Click_1: propTypes.func,
  id: propTypes.string,
};

export default TodoItem;