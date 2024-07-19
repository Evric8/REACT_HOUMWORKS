import React, { Fragment } from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: true,
      formData: {
        email: "",
        password: "",
        address: "",
        city: "",
        country: "",
        acceptRules: false,
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  onShowChangeForm = (e) => {
    this.setState(({ data }) => ({ data: !data }));
  };

  onChangeFormAcceptRules = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: String(e.target.checked),
      },
    });
  };

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const valueForm = (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onShowChangeForm}
        >
          Back
        </button>
        <table className="table">
          <tbody>
          <tr>
            <td>acceptRules</td>
            <td>{this.state.formData.acceptRules}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{this.state.formData.address}</td>
          </tr>
          <tr>
            <td>city</td>
            <td>{this.state.formData.city}</td>
          </tr>
          <tr>
            <td>country</td>
            <td>{this.state.formData.country}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{this.state.formData.email}</td>
          </tr>
          <tr>
            <td>password</td>
            <td>{this.state.formData.password}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );

    const startForm = (
      <form name="myForm" onSubmit={this.handleSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.formData.email}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.formData.password}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">
            Address
          </label>
          <textarea
            onChange={this.handleChange}
            value={this.state.formData.address}
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
          ></textarea>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">
            City
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.formData.city}
            type="text"
            className="form-control"
            name="city"
            id="city"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">
            Country
          </label>
          <select
            onChange={this.handleChange}
            value={this.state.formData.country}
            id="country"
            name="country"
            className="form-control"
          >
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                onChange={this.onChangeFormAcceptRules}
                checked={this.state.formData.acceptRules}
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
              />
              Accept Rules
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onShowChangeForm}
        >
          Sign in
        </button>

        <br />
      </form>
    );

    return (
      <Fragment>
        <br />

        <div className="container">
          {" "}
          {this.state.data ? startForm : valueForm}
        </div>

        <br />
      </Fragment>
    );
  }
}

MyForm.defaultProps = {
  data: true,
  formData: {
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    acceptRules: false,
  },
};

export default MyForm;