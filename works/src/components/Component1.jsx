import React, { Fragment } from "react";

class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      photoLength: this.props.images.length,
    };
  }

  setSrc = () => {
    const img = this.props.images;

    const list = img.map((i) => {
      return (
        <Fragment>
          <div
            className={[
              i.id === this.state.id ? "carousel-item active" : "carousel-item",
            ]}
            id={i.id}
            key={i.id}
          >
            <img src={i.url} className="d-block w-100" alt={i.photo} />
          </div>
        </Fragment>
      );
    });
    return list;
  };

  nextClick = () => {
    this.state.id < this.state.photoLength
      ? this.setState((id) => ({ id: this.state.id + 1 }))
      : this.setState((id) => ({ id: (this.state.id = 1) }));
  };

  prevClick = () => {
    this.state.id > 1
      ? this.setState((id) => ({ id: this.state.id - 1 }))
      : this.setState((id) => ({
        id: (this.state.id = this.state.photoLength),
      }));
  };

  render() {
    return (
      <Fragment>
        <br />
        <h1 className="text-center">Slides</h1>
        <br />

        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">{this.setSrc()}</div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              onClick={this.prevClick}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              onClick={this.nextClick}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}

Component1.defaultProps = {
  id: 1,
};

export default Component1;