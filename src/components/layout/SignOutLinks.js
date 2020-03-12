import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/signin">SignIn</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
