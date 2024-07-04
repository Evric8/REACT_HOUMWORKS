import  React from 'react';

class Definitions extends React.Component {

  renderLi(){
    const data = this.props.data
    
    const list = data.map((item) => {
      return < >
        <dt key={item.id}>{item.dt}</dt>
        <dd key={item.id.toString()}>{item.dd}</dd>
      </>
    })

    return list
  }

  render() {
  return (
      <dl>
        {this.renderLi()}
      </dl>
    );
  }
}

export default Definitions;

