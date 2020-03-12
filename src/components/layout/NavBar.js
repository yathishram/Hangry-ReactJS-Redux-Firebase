import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

const NavBar = props => {
  return (
    <nav className="nav-wrapper amber darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          Hangry
        </Link>
        <SignedInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default NavBar;
