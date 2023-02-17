import React from "react";
import { Form, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { login } from "../../../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async () => {
    const userResp = await login(email, password);
    console.log(userResp);
    history.push("/landing");
  };

  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="login-header">
          <img className="login-logo" alt="logo"></img>
          <h1>The Den</h1>
        </div>
        <div className="login-message">
          <p>Login to your account.</p>
        </div>

        <div className="input-container">
          <Form className="input-form">
            <Form.Group className="email-container">
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="password-container">
              <TextField
                // id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
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
          </Form>
        </div>
      </div>
    </div>
  );
}
