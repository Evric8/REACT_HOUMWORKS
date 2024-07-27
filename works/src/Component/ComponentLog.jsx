import React, { Fragment } from "react";

class ComponentLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
  }

  onAddLogLeft = (e) => {
    const { log } = this.state;
    const newValue = log.length > 0 ? log[0] + 1 : 1;
    this.setState(({ log }) => ({ log: [newValue, ...log] }));
  };

  onAddLogRight = (e) => {
    const { log } = this.state;
    const newValue = log.length > 0 ? log[0] - 1 : -1;
    this.setState({ log: [newValue, ...log] });
  };

  removeOneLog = (eIndex) => {
    const { log } = this.state;
    const updatedLog = log.filter((item, index) => index !== eIndex);
    this.setState({ log: updatedLog });
  };

  render() {
    const log = this.state.log;

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.onAddLogLeft}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.onAddLogRight}
          >
            -
          </button>
        </div>

        <div className="list-group">
          {log.map((item, index) => (
            <Fragment key={index + " " + item}>
              <button
                className="list-group-item list-group-item-action"
                onClick={() => this.removeOneLog(index)}
              >
                {item}
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

ComponentLog.defaultProps = {
  log: [],
};

export default ComponentLog;