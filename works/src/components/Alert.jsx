import React from "react";
import classNames from "classnames";

class Alert extends React.Component {
  render() {
    const {type, text} = this.props;
    const innerClassNames = classNames(
      `alert alert-${type}`
    )

    return <div className="container" >
              <div className ={innerClassNames}  role="alert">
                  {text}
              </div>
           </div>
  }
}

export default Alert;