import React from "react";
import Modal from "../Modal";
import { Button, Col, Container, Row } from "react-bootstrap";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
    };
  }

  toggleModal = () => {
    this.setState({ isModalOpened: !this.state.isModalOpened });
  };

  render() {
    return (
      <>
        <Container>
          <Button onClick={this.toggleModal}>Open modal</Button>

          {this.state.isModalOpened && (
            <Modal isOpen={this.state.isModalOpened}>
              <h4 className="text-center">Description</h4>
              <p>
                1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit.
              </p>
              <p>
                2. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p>
                3. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Button size="sm" onClick={this.toggleModal}>
                Closed modal
              </Button>
            </Modal>
          )}
        </Container>
      </>
    );
  }
}

export default List;