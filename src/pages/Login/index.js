import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import userService from "../../services/user";
import "./style.scss";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleClick = async () => {
    try {
      const response = await userService.login(email, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      M.toast({ html: "welcome", classes: "#43a047 green darken-1" });
      history.push("/");
    } catch (error) {
      M.toast({
        html: error.response.data.message,
        classes: "#c62828 red darken-3",
      });
    }
  };

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn waves-effect waves-light   #64b5f6 blue darken-1"
          onClick={handleClick}
        >
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
