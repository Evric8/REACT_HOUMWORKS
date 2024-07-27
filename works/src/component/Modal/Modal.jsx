import React from "react";
import styles from "./styles.module.scss";
import { propTypes } from "react-bootstrap/esm/Image";
import cn from "classnames";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const modalClasses = cn(styles.modal, {
      [styles.open]: this.props.isOpen,
      [styles.closed]: !this.props.isOpen,
    });

    return (
      <div className={modalClasses}>
        <div className={styles.modal__content}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: propTypes.bool,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;