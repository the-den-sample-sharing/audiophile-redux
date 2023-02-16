import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { login } from "../../services/auth";
import Logo from "./assets/turn.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    const userResp = await login(email, password);
    console.log(userResp);
    history.push("/landing");
  };

  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="login-header">
          <img className="login-logo" src={Logo}></img>
          <h1>The Den</h1>
        </div>
        <div className="login-message">
          <p>Login to your account.</p>
        </div>

        <div className="input-container">
          <div className="input-form">
            <div className="email-container">
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password-container">
              <TextField
                // id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              className="login-button"
              size="small"
              style={{ height: "6vh", width: "10vw" }}
              onClick={login}
            >
              Log in
            </Button>
            <p>
              Don&apos;t have an account?{" "}
              <NavLink to="/sign-up">Sign Up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
