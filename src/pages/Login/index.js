import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Login = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input placeholder="email" type="text" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light  #64b5f6 blue lighten-2">
          Login
        </button>
        <h3>
          don't have an account ? <Link to="/signup">signup</Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Login;
