import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import M from 'materialize-css'
import userService from "../../services/user";
import "./style.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleClick = async () => {
    try {
      const response = await userService.signup(name, email, password);
      M.toast({html: response.data.message, classes:"#43a047 green darken-1"})
      history.push('/login')

    } catch (error) {
      M.toast({html: error.response.data.message, classes:"#c62828 red darken-3"})
    }
  };


  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
        > Signup </button>

        <h3>
          already have an account ? <Link to="/login">login</Link>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Signup;
