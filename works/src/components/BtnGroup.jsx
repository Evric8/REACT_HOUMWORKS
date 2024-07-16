import React, {Fragment} from "react";
import classNames from "classnames";

class BtnGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      changeLeft: false,
      changeRight: false,
    };
  }

  onChangeLeft =(e)=>{
    this.setState(({changeLeft})=>({changeLeft: !changeLeft}))
    this.setState(({changeRight})=>({changeRight: false}))
  }

  onChangeRight =(e)=>{
    this.setState(({changeLeft})=>({changeLeft: false}))
    this.setState(({changeRight})=>({changeRight: !changeRight}))
  }
  render() {
    const btnClassLeft = classNames([
      'btn btn-secondary btn-lg left',
     this.state.changeLeft && 'active'
  ])
    const btnClassRight = classNames([
      'btn btn-secondary btn-lg right',
     this.state.changeRight ? 'active' : null
    ])
   return <Fragment>
            <br/>
               <div className="container">
                  <div className="btn-group" role="group">
                     <button type="button" className={btnClassLeft} onClick={this.onChangeLeft}>Left</button>
                     <button type="button" className={btnClassRight} onClick={this.onChangeRight}>Right</button>
                  </div>
               </div>
         </Fragment>
  }
}

BtnGroup.defaultProps = {
  changeLeft: false,
  changeRight: false,
}

export default BtnGroup;
