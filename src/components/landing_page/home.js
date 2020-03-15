import React from "react";
import Homeimage from "../../media/home.svg";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Home = props => {
  const { auth } = props;
  if (auth.uid) {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="section">
              <h3 className="left-align">Welcome {auth.firstName}!</h3>
              <p>Start your foodie journey from here!</p>
              <p>May not be your best companion as your guide! But it gets better with time</p>
              <NavLink to="/dashboard" className="waves-effect waves-light btn pink lighten-1">
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="col s6">
            <img src={Homeimage} alt="" style={{ height: 300, width: 600 }} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="section">
              <h3 className="left-align">Welcome Foodies!</h3>
              <p>Start your foodie journey from here!</p>
              <p>May not be your best companion as your guide! But it gets better with time</p>
              <NavLink to="/signup" className="waves-effect waves-light btn pink lighten-1">
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="col s6">
            <img src={Homeimage} alt="" style={{ height: 300, width: 600 }} />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
