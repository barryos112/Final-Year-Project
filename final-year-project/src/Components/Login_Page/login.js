import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  return (
    <div className="login-form-container">
      <h1 className="login-form-header">Log In</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input
          className="login-form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="login-form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/team">
          <input className="login-form-submit" type="submit" value="Log In" />
        </Link>
      </form>
    </div>
  );
};

export default Login;
