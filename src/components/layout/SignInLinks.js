import React from "react";
import { NavLink } from "react-router-dom";

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
        <a href="#">Log Out</a>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
