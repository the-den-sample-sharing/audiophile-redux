import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form } from "react-bootstrap";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../../features/user/userSlice";
import { createUserAsync } from "../../../features/user/userSlice";

export default function SignUp() {
  const { email, password } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div className="auth-body">
      <div className="auth-main">
        <div className="login-header">
          <img className="login-logo" alt="logo"></img>
          <h1>Audiophile</h1>
        </div>
        <div className="login-message">
          <p className="create-account">Create your free account</p>
          <p className="unlock">Unlock new skills and sounds.</p>
        </div>
        <div className="input-container">
          <Form
            className="input-form"
            onSubmit={() => dispatch(createUserAsync(email, password))}
          >
            <Form.Group className="email-container">
              <TextField
                label="Email"
                variant="outlined"
                id="email"
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </Form.Group>

            <Form.Group className="password-container">
              <TextField
                name="Password"
                label="Password"
                variant="outlined"
                id="password"
                type="password"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </Form.Group>
            <Button
              variant="contained"
              className="auth-button"
              size="small"
              type="submit"
              style={{ height: "6vh", width: "10vw" }}
            >
              Create Account
            </Button>
            <p>
              Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
