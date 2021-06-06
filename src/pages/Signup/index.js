import React from "react";
import {Link} from 'react-router-dom';
import "./style.scss"

const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light  #64b5f6 blue lighten-2">
          Signup
        </button>
        <h3>already have an account ? <Link to="/login">login</Link> </h3>
      </div>
    </div>
  );
};

export default Signup;
