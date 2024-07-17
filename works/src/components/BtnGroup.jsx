import React, {Fragment} from "react";
import classNames from "classnames";

class BtnGroup extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      checked: ''
    };
  }

  handleClick=(e)=>{
    this.setState(({ checked })=>({checked: e.target.value}))
  }


  render() {
    const inputBtnClass1 = classNames([
      'btn  btn-lg left btn-check',
      this.state.checked === 'left' ? 'active' : null
    ])

    const inputBtnClass2 = classNames([
      'btn  btn-lg left btn-check',
      this.state.checked === 'middle' ? 'active' : null
    ])

    const inputBtnClass3 = classNames([
      'btn  btn-lg left btn-check',
      this.state.checked === 'right' ? 'active' : null
    ])

    const labelBtnClass = classNames([
      'btn btn-secondary',
    ])

    return <Fragment>
      <br/>
      <div className="container">
        <div className="btn-group" role="group">

          <label className={labelBtnClass}>
            {this.state.checked === 'left' ? "Увімкнено" : 'Left'}
            <input type="radio" className={inputBtnClass1}  name="options" value='left' onClick={this.handleClick} autoComplete="off"/>
          </label>

          <label className={labelBtnClass}>
            {this.state.checked === 'middle' ? "Увімкнено" : 'Middle'}
            <input type="radio" className={inputBtnClass2}  name="options" value='middle' onClick={this.handleClick} autoComplete="off"/>
          </label>


          <label className={labelBtnClass}>
            {this.state.checked === 'right' ? "Увімкнено" : 'Right'}
            <input type="radio" className={inputBtnClass3}  name="options" value='right' onClick={this.handleClick} autoComplete="off"/>
          </label>

        </div>
      </div>
    </Fragment>
  }
}

BtnGroup.defaultProps = {
  checked: ''
}

export default BtnGroup;