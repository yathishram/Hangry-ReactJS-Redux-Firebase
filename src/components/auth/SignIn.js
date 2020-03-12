import React, { Component } from "react";
import LoginLogo from "../../media/login.svg";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <br />

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
              </div>
            </form>
          </div>
          <div className="col s6 center ">
            <img alt="" src={LoginLogo} style={{ height: 300, width: 600 }} />
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     signin: creds => dispatch(signin(creds))
//   };
// };

export default SignIn;
