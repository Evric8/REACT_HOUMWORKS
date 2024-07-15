import React from "react";
import {Children} from "react";

class ListGroup extends React.Component{

  render() {
    const {children} = this.props;
    const li = Children.map(children, (child) =>
        <li className="list-group-item">
          {child}
        </li>
      )

    return <>
            <br/>
              <div className="container">
                <ul className="list-group">
                  {li}
                </ul>
              </div>
           </>
  }
}


export default ListGroup;