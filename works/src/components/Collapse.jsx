import React, { Fragment } from "react";
import classNames from "classnames";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
    };
  }

  onShow = () => {
    this.setState(({ opened }) => ({ opened: !opened }));
  };

  render() {
    const classCollapse = classNames([
      this.state.opened ? "collapse" : "collapse show",
    ]);

    const attribute = classNames([this.state.opened ? "false" : "true"]);

    return (
      <Fragment>
        <br />
        <div className="container">
          <div>
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#"
                role="button"
                aria-expanded={attribute}
                onClick={this.onShow}
              >
                Link with href
              </a>
            </p>
            <div className={classCollapse}>
              <div className="card card-body">collapse me</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};

export default Collapse;