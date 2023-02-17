import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Login.css";
import logo from "../../../assets/transparent-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../../features/user/userSlice";
import { loginUserAsync } from "../../../features/user/userSlice";
import { Form } from "react-bootstrap";

export default function Login() {
  const { email, password } = useSelector((state) => state.user);

  const dispatch = useDispatch();

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
            onSubmit={() => loginUserAsync(email, password)}
          >
            <Form.Group className="email-container">
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="password-container">
              <TextField
                // id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) =>
                  dispatch(setPassword(e.target.value.toString()))
                }
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
