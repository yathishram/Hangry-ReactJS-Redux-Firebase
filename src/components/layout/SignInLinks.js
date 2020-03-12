import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/search">Search!</NavLink>
      </li>
      <li>
        <NavLink to="/recipe">New Recipe</NavLink>
      </li>
      <li>
        <a href="#" onClick={props.signout}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
