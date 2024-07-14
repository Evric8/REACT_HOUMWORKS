import React from "react";

class Progress extends React.Component{
  render() {
    const data = String(this.props.percentage);

    return <div className="container">
              <div className="progress" style={{margin: "10px"}}>
                 <div className="progress-bar" role="progressbar" aria-valuenow={data} aria-valuemin="0" aria-valuemax="100"
                     aria-label="progressbar" style= {{width: data +"%"}}>{data}%
                 </div>
              </div>
           </div>
  }
}

export default Progress;

