import React from 'react';

class Card extends React.Component {
  render() {
    const {title, text} = this.props;
    const tit = title && <h4 className="card-title">{title}</h4>;
    const tex = text ? <p className="card-text">{text}</p> : null;

    return <div className="card">
               <div className="card-body">
                   {tit}
                   {tex}
               </div>
           </div>
  }

}

export default Card;