import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./Login.css";
import logo from "../../../assets/transparent-logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  getUserEmail,
  getUserPassword,
  getUserStatus,
  logIn,
  getUserData,
} from "../../../features/user/userSlice";

import { Form } from "react-bootstrap";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(getUserData);
  const userStatus = useSelector(getUserStatus);
  const email = useSelector(getUserEmail);
  const password = useSelector(getUserPassword);

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    dispatch(logIn({ email: email, password: password }));
  };
  console.log("emailll", email);

  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="login-header">
          <img className="login-logo" src={logo} alt="logo"></img>
          <h1>Audiophile</h1>
        </div>
        <div className="login-message">
          <p>Login to your account.</p>
        </div>

        <div className="input-container">
          <Form
            className="input-form"
            onSubmit={(e) => handleLogin(e, email, password)}
          >
            <Form.Group className="email-container">
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="password-container">
              <TextField
                // id="outlined-basic"
                label="Password"
                variant="outlined"
                autoComplete="none"
                type="password"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </Form.Group>
            <Button
              variant="contained"
              className="login-button"
              size="small"
              type="submit"
              style={{ height: "6vh", width: "10vw" }}
            >
              Log in
            </Button>
            <p>
              Don&apos;t have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
