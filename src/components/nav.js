import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

import "./nav.scss";

const NavBar = () => {
  
  const { state,dispatch } = useContext(UserContext);

  const NavList = () => {
    if (state) {
      return [
        <li><Link to="/profile">profile</Link></li>,
        <li><Link to="/posts">Add post</Link></li>
      ];
    } else {
      return [
        <li><Link to="/login">Login</Link> </li>,
        <li><Link to="/signup">Signup</Link></li>
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state? "/": "/login"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {NavList()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
